import { NextResponse } from "next/server";
import {
  FIXED_DATE_SCHEDULE,
  stripeGet,
  stripePost,
  unixTimestamp,
  webhookSignatureIsValid,
} from "@/lib/stripe-fixed-date-enrollment";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type StripeEvent = {
  id?: string;
  type?: string;
  data?: { object?: Record<string, unknown> };
};

export async function POST(request: Request) {
  const rawBody = await request.text();
  const signature = request.headers.get("stripe-signature");
  const secret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!signature || !secret || !webhookSignatureIsValid(rawBody, signature, secret)) {
    return NextResponse.json({ error: "Invalid webhook signature." }, { status: 400 });
  }
  let event: StripeEvent;
  try {
    event = JSON.parse(rawBody) as StripeEvent;
  } catch {
    return NextResponse.json({ error: "Invalid webhook payload." }, { status: 400 });
  }
  if (event.type !== "checkout.session.completed") return NextResponse.json({ received: true });

  const session = event.data?.object;
  const sessionMetadata = session?.metadata;
  const flow =
    typeof sessionMetadata === "object" && sessionMetadata !== null &&
    typeof (sessionMetadata as Record<string, unknown>).flow === "string"
      ? (sessionMetadata as Record<string, unknown>).flow
      : "";
  if (session?.mode !== "setup" || flow !== "brightpath_fixed_date_enrollment") {
    return NextResponse.json({ received: true });
  }

  const customerId = session?.customer;
  const setupIntentId = session?.setup_intent;
  if (typeof customerId !== "string" || typeof setupIntentId !== "string") {
    return NextResponse.json({ error: "Missing customer or setup intent." }, { status: 400 });
  }

  const enrollmentId = event.id || "setup-" + setupIntentId;
  try {
    const setupIntent = await stripeGet("setup_intents/" + setupIntentId);
    const paymentMethodId = setupIntent.payment_method;
    if (typeof paymentMethodId !== "string") {
      throw new Error("SetupIntent did not return a payment method.");
    }

    await stripePost(
      "customers/" + customerId,
      {
        "invoice_settings[default_payment_method]": paymentMethodId,
        "metadata[brightpath_enrollment_id]": enrollmentId,
        "metadata[brightpath_enrollment_status]": "scheduled",
        "metadata[brightpath_checkout_session_id]": String(session.id || ""),
        "metadata[brightpath_setup_intent_id]": setupIntentId,
        "metadata[brightpath_schedule]": FIXED_DATE_SCHEDULE.map((payment) => payment.date).join(","),
      },
      "enrollment:" + enrollmentId + ":customer",
    );

    for (const payment of FIXED_DATE_SCHEDULE) {
      const invoiceItem = await stripePost(
        "invoiceitems",
        {
          customer: customerId,
          amount: payment.amount,
          currency: "usd",
          description: "BrightPath Billboards partnership " + payment.label + " — " + payment.date,
          "metadata[enrollment_id]": enrollmentId,
          "metadata[scheduled_date]": payment.date,
        },
        "enrollment:" + enrollmentId + ":invoiceitem:" + payment.date,
      );
      const invoice = await stripePost(
        "invoices",
        {
          customer: customerId,
          collection_method: "charge_automatically",
          auto_advance: true,
          automatically_finalizes_at: unixTimestamp(payment.date),
          description: "BrightPath Billboards fixed-date partnership payment — " + payment.date,
          "metadata[enrollment_id]": enrollmentId,
          "metadata[scheduled_date]": payment.date,
          "metadata[no_renewal]": "true",
          "metadata[invoice_item_id]": String(invoiceItem.id || ""),
        },
        "enrollment:" + enrollmentId + ":invoice:" + payment.date,
      );
      if (!invoice.id) throw new Error("Stripe did not create the " + payment.label + " invoice.");
    }
    return NextResponse.json({ received: true, scheduled: 3 });
  } catch (error) {
    console.error("Stripe enrollment scheduling error:", error);
    return NextResponse.json({ error: "Unable to schedule enrollment." }, { status: 500 });
  }
}

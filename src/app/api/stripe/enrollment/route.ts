import { NextResponse } from "next/server";
import {
  ENROLLMENT_ENABLED,
  appBaseUrl,
  stripePost,
} from "@/lib/stripe-fixed-date-enrollment";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
// Production verification: keep Checkout request parameters on the v8 idempotency namespace.

export async function POST(request: Request) {
  if (!ENROLLMENT_ENABLED) {
    return NextResponse.json({ error: "Enrollment is not enabled." }, { status: 503 });
  }
  let body: unknown = {};
  try {
    body = await request.json();
  } catch {
    body = {};
  }
  const bodyRecord =
    typeof body === "object" && body !== null
      ? (body as Record<string, unknown>)
      : {};
  const consentAccepted = bodyRecord.consentAccepted === true;
  const phone =
    typeof bodyRecord.phone === "string" ? bodyRecord.phone.trim() : "";
  if (!consentAccepted) {
    return NextResponse.json(
      { error: "Terms of Service acknowledgment is required." },
      { status: 400 },
    );
  }
  if (!phone) {
    return NextResponse.json(
      { error: "A phone number is required." },
      { status: 400 },
    );
  }
  try {
    const session = await stripePost(
      "checkout/sessions",
      {
        mode: "setup",
        billing_address_collection: "required",
        "name_collection[business][enabled]": "true",
        "metadata[flow]": "brightpath_fixed_date_enrollment",
        "metadata[offer_version]": "2026-08-19-v1",
        "metadata[schedule]": "2026-08-19,2026-10-01,2026-11-01",
        "metadata[terms_consent]": "accepted_on_brightpath_enrollment_page",
        "metadata[phone]": phone,
        "setup_intent_data[description]":
          "BrightPath Billboards fixed-date three-payment partnership enrollment",
        "setup_intent_data[metadata][offer]":
          "fixed-date-three-payment-partnership",
        "setup_intent_data[metadata][flow]":
          "brightpath_fixed_date_enrollment",
        "setup_intent_data[metadata][offer_version]":
          "2026-08-19-v1",
        "setup_intent_data[metadata][schedule]":
          "2026-08-19,2026-10-01,2026-11-01",
        success_url: appBaseUrl() + "/enrollment/success?session_id={CHECKOUT_SESSION_ID}",
        cancel_url: appBaseUrl() + "/enrollment/cancelled",
      },
      "checkout-session:create:v9",
    );
    if (typeof session.url !== "string") {
      throw new Error("Stripe did not return a Checkout URL.");
    }
    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Stripe enrollment session error:", error);
    return NextResponse.json(
      { error: "Unable to start enrollment." },
      { status: 500 },
    );
  }
}

export async function GET() {
  return NextResponse.json({
    enabled: ENROLLMENT_ENABLED,
    schedule: [
      { date: "2026-08-19", amount: 5000 },
      { date: "2026-10-01", amount: 5000 },
      { date: "2026-11-01", amount: 5000 },
    ],
  });
}

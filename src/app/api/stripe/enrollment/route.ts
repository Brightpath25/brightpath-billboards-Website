import { NextResponse } from "next/server";
import {
  ENROLLMENT_ENABLED,
  appBaseUrl,
  stripePost,
} from "@/lib/stripe-fixed-date-enrollment";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST() {
  if (!ENROLLMENT_ENABLED) {
    return NextResponse.json({ error: "Enrollment is not enabled." }, { status: 503 });
  }
  try {
    const session = await stripePost(
      "checkout/sessions",
      {
        mode: "setup",
        "payment_method_types[0]": "card",
        "payment_method_types[1]": "us_bank_account",
        customer_creation: "always",
        "consent_collection[terms_of_service]": "required",
        "custom_text[submit][message]":
          "I authorize BrightPath Billboards to save this payment method and automatically collect three payments of $5,000 on August 7, October 1, and November 1, 2026. No September payment or renewal is included.",
        billing_address_collection: "required",
        "phone_number_collection[enabled]": "true",
        "setup_intent_data[description]":
          "BrightPath Billboards fixed-date three-payment partnership enrollment",
        "metadata[offer]": "fixed-date-three-payment-partnership",
        "metadata[schedule]": "2026-08-07,2026-10-01,2026-11-01",
        success_url: appBaseUrl() + "/enrollment/success?session_id={CHECKOUT_SESSION_ID}",
        cancel_url: appBaseUrl() + "/enrollment/cancelled",
      },
      "checkout-session:create",
    );
    if (typeof session.url !== "string") throw new Error("Stripe did not return a Checkout URL.");
    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Stripe enrollment session error:", error);
    return NextResponse.json({ error: "Unable to start enrollment." }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({
    enabled: ENROLLMENT_ENABLED,
    schedule: [
      { date: "2026-08-07", amount: 5000 },
      { date: "2026-10-01", amount: 5000 },
      { date: "2026-11-01", amount: 5000 },
    ],
  });
}

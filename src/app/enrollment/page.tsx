"use client";

import { useState } from "react";

const schedule = [
  ["August 19, 2026", "$5,000"],
  ["October 1, 2026", "$5,000"],
  ["November 1, 2026", "$5,000"],
];

export default function EnrollmentPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [phone, setPhone] = useState("");

  async function beginEnrollment() {
    setLoading(true);
    setError("");
    if (!phone.trim()) {
      setError("Please enter a phone number.");
      setLoading(false);
      return;
    }
    try {
      const response = await fetch("/api/stripe/enrollment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-enrollment-request-id": crypto.randomUUID(),
        },
        body: JSON.stringify({ consentAccepted: termsAccepted, phone }),
      });
      const payload = (await response.json()) as { url?: string; error?: string };
      if (!response.ok || !payload.url) {
        throw new Error(payload.error || "Enrollment is not available yet.");
      }
      window.location.assign(payload.url);
    } catch (requestError) {
      setError(requestError instanceof Error ? requestError.message : "Please try again.");
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-black-hero px-5 py-16 text-text-light">
      <div className="mx-auto max-w-3xl">
        <a href="https://bpmobilebillboards.com" className="text-sm text-gold-highlight hover:text-gold-base">
          BrightPath Billboards
        </a>

        <section className="mt-12 rounded-3xl border border-gold-base/30 bg-black-card/80 p-7 shadow-2xl backdrop-blur md:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gold-highlight">
            Founding Partner Enrollment
          </p>
          <h1 className="mt-4 text-4xl font-bold leading-tight md:text-6xl">
            Reserve your BrightPath campaign.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-text-mid">
            Complete this secure enrollment to save your payment method and authorize the fixed three-payment partnership schedule below.
            You will not be charged when you enroll.
          </p>

          <div className="mt-10 grid gap-3 md:grid-cols-3">
            {schedule.map(([date, amount]) => (
              <div key={date} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                <p className="text-sm text-text-mid">{date}</p>
                <p className="mt-2 text-2xl font-bold text-gold-highlight">{amount}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-gold-base/20 bg-gold-base/5 p-5 text-sm leading-6 text-text-mid">
            <p className="font-semibold text-text-light">Before you continue</p>
            <ul className="mt-3 list-disc space-y-1 pl-5">
              <li>Your payment method is saved securely by Stripe.</li>
              <li>The first charge is scheduled for August 19, 2026.</li>
              <li>There is no September payment and no automatic renewal after November.</li>
              <li>BrightPath collects your phone number for enrollment contact; Stripe Checkout collects your business name, billing address, and payment method.</li>
              <li>You must acknowledge the BrightPath Billboards Terms of Service before continuing.</li>
            </ul>
          </div>

          <label className="mt-8 block text-sm text-text-mid">
            <span className="font-semibold text-text-light">Phone number</span>
            <input
              type="tel"
              required
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
              placeholder="(555) 555-5555"
              autoComplete="tel"
              className="mt-2 w-full rounded-xl border border-white/15 bg-white/[0.04] px-4 py-3 text-text-light outline-none focus:border-gold-highlight"
            />
          </label>

          <label className="mt-8 flex items-start gap-3 text-sm leading-6 text-text-mid">
            <input
              type="checkbox"
              checked={termsAccepted}
              onChange={(event) => setTermsAccepted(event.target.checked)}
              className="mt-1 h-4 w-4 accent-gold-highlight"
            />
            <span>
              I acknowledge the{" "}
              <a href="/terms-of-service" target="_blank" rel="noreferrer" className="text-gold-highlight underline">
                BrightPath Billboards Terms of Service
              </a>
              .
            </span>
          </label>

          <button
            type="button"
            onClick={beginEnrollment}
            disabled={loading || !termsAccepted || !phone.trim()}
            className="luxury-button mt-10 w-full text-lg disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? "Opening secure enrollment..." : "Continue to secure enrollment"}
          </button>

          {error && (
            <p role="alert" className="mt-4 rounded-xl border border-red-400/40 bg-red-500/10 p-4 text-sm text-red-200">
              {error}
            </p>
          )}

          <p className="mt-6 text-center text-xs leading-5 text-text-mid">
            You will be redirected to Stripe for secure payment-method setup. BrightPath does not store your full card or bank details.
          </p>
        </section>
      </div>
    </main>
  );
}

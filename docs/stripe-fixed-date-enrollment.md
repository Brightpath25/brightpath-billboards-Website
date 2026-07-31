# BrightPath fixed-date enrollment

The flow is disabled until Stripe credentials and webhook configuration are added in Netlify.

Client experience:

1. BrightPath sends one enrollment URL by email or text.
2. The client enters business and billing information in Stripe Checkout.
3. Stripe saves the payment method in setup mode without charging at enrollment.
4. Stripe sends the completed Checkout event to the signed webhook.
5. The webhook creates three automatic-collection invoices:
   - August 7, 2026: $5,000
   - October 1, 2026: $5,000
   - November 1, 2026: $5,000
6. September is skipped. No subscription or renewal is created.

Required server variables:

- STRIPE_FIXED_DATE_ENROLLMENT_ENABLED: false until test mode is verified, then true
- STRIPE_SECRET_KEY: Stripe test or live secret key
- STRIPE_WEBHOOK_SECRET: signing secret for the exact webhook endpoint
- PUBLIC_SITE_URL: https://bpmobilebillboards.com

Routes:

- POST /api/stripe/enrollment creates a setup-mode Checkout Session
- POST /api/stripe/webhook verifies the Stripe signature and schedules invoices
- GET /api/stripe/enrollment returns safe status and schedule only

Safety gate:

- Do not enable enrollment until a Stripe test webhook reaches the deployed endpoint.
- Do not add credentials to GitHub, source files, chat, or .env.example.
- Do not merge to main or deploy production as part of recovery.

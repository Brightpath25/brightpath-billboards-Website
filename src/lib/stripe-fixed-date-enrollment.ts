import crypto from "node:crypto";

export const FIXED_DATE_SCHEDULE = [
  { date: "2026-08-19", amount: 500000, label: "Payment 1" },
  { date: "2026-10-01", amount: 500000, label: "Payment 2" },
  { date: "2026-11-01", amount: 500000, label: "Payment 3" },
] as const;

const enrollmentFlag = process.env.STRIPE_FIXED_DATE_ENROLLMENT_ENABLED;

export const ENROLLMENT_ENABLED = enrollmentFlag === "true";

function requiredEnv(name: string): string {
  const value = process.env[name];
  if (!value) throw new Error("Missing required environment variable: " + name);
  return value;
}

function stripeHeaders(idempotencyKey?: string): Record<string, string> {
  const headers: Record<string, string> = {
    Authorization: "Bearer " + requiredEnv("STRIPE_SECRET_KEY"),
    "Content-Type": "application/x-www-form-urlencoded",
  };
  if (idempotencyKey) headers["Idempotency-Key"] = idempotencyKey;
  return headers;
}

function encodeForm(data: Record<string, string | number | boolean>): string {
  return new URLSearchParams(
    Object.entries(data).map(([key, value]) => [key, String(value)]),
  ).toString();
}

export async function stripePost(
  path: string,
  data: Record<string, string | number | boolean>,
  idempotencyKey?: string,
): Promise<Record<string, unknown>> {
  const response = await fetch("https://api.stripe.com/v1/" + path, {
    method: "POST",
    headers: stripeHeaders(idempotencyKey),
    body: encodeForm(data),
    cache: "no-store",
  });
  const payload = (await response.json()) as Record<string, unknown>;
  if (!response.ok) {
    throw new Error(
      typeof payload.error === "object" && payload.error !== null
        ? JSON.stringify(payload.error)
        : "Stripe request failed with status " + response.status,
    );
  }
  return payload;
}

export function unixTimestamp(date: string): number {
  return Math.floor(new Date(date + "T00:00:00.000Z").getTime() / 1000);
}

export function appBaseUrl(): string {
  return (
    process.env.PUBLIC_SITE_URL ||
    process.env.NEXT_PUBLIC_SITE_URL ||
    "https://bpmobilebillboards.com"
  );
}

function normalizeSecret(secret: string): string {
  return secret.trim().replace(/^(['"])(.*)\1$/, "$2").trim();
}

export function webhookSignatureIsValid(
  rawBody: string,
  signature: string,
  secret: string,
): boolean {
  const parts = signature.split(",").map((part) => part.trim());
  const timestampPart = parts.find((part) => part.startsWith("t="));
  const signatures = parts
    .filter((part) => part.startsWith("v1="))
    .map((part) => part.slice(3).trim())
    .filter(Boolean);

  if (!timestampPart || signatures.length === 0) return false;

  const timestamp = Number(timestampPart.slice(2).trim());
  if (!Number.isFinite(timestamp)) return false;
  if (Math.abs(Math.floor(Date.now() / 1000) - timestamp) > 300) return false;

  const expected = crypto
    .createHmac("sha256", normalizeSecret(secret))
    .update(String(timestamp) + "." + rawBody)
    .digest("hex");

  return signatures.some((candidate) => {
    const expectedBuffer = Buffer.from(expected, "utf8");
    const candidateBuffer = Buffer.from(candidate, "utf8");
    return (
      expectedBuffer.length === candidateBuffer.length &&
      crypto.timingSafeEqual(expectedBuffer, candidateBuffer)
    );
  });
}

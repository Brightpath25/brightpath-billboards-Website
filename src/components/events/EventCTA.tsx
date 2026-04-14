import Link from "next/link";
import { Phone } from "lucide-react";

interface EventCTAProps {
  headline?: string;
  subtext?: string;
  primaryLabel?: string;
  primaryHref?: string;
  primaryExternal?: boolean;
  secondaryLabel?: string;
  secondaryHref?: string;
  secondaryExternal?: boolean;
  showPhone?: boolean;
}

export default function EventCTA({
  headline = "Secure Your Spot",
  subtext = "Limited campaign inventory available. Lock in your position before it\u2019s gone.",
  primaryLabel = "Get My Campaign Plan",
  primaryHref = "/quote",
  primaryExternal = false,
  secondaryLabel = "Check Availability",
  secondaryHref = "/quote",
  secondaryExternal = false,
  showPhone = true,
}: EventCTAProps) {
  return (
    <section className="py-24 md:py-32 bg-black-panel relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(227,176,75,0.06)_0%,transparent_60%)]" />

      <div className="relative z-10 container mx-auto px-4 text-center max-w-3xl">
        <h2
          className="text-3xl md:text-5xl font-bold text-text-light mb-6"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {headline}
        </h2>
        <p className="text-text-mid text-lg mb-10 leading-relaxed">
          {subtext}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {primaryExternal ? (
            <a
              href={primaryHref}
              target="_blank"
              rel="noopener noreferrer"
              className="luxury-button px-10 py-4 text-lg font-semibold rounded-lg inline-block"
            >
              {primaryLabel}
            </a>
          ) : (
            <Link
              href={primaryHref}
              className="luxury-button px-10 py-4 text-lg font-semibold rounded-lg"
            >
              {primaryLabel}
            </Link>
          )}
          {secondaryExternal ? (
            <a
              href={secondaryHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold rounded-lg border border-gold-base/30 text-gold-highlight hover:bg-gold-base/10 transition-all duration-300"
            >
              {secondaryLabel}
            </a>
          ) : (
            <Link
              href={secondaryHref}
              className="inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold rounded-lg border border-gold-base/30 text-gold-highlight hover:bg-gold-base/10 transition-all duration-300"
            >
              {secondaryLabel}
            </Link>
          )}
          {showPhone && (
            <a
              href="tel:7603858989"
              className="inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold rounded-lg border border-gold-base/30 text-gold-highlight hover:bg-gold-base/10 transition-all duration-300"
            >
              <Phone className="h-5 w-5" />
              Call Now
            </a>
          )}
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface EventHeroProps {
  title: string;
  headline: string;
  dateRange: string;
  ctaLabel?: string;
  ctaHref?: string;
  ctaExternal?: boolean;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  showBackLink?: boolean;
}

export default function EventHero({
  title,
  headline,
  dateRange,
  ctaLabel = "Get Campaign Plan",
  ctaHref = "/quote",
  ctaExternal = false,
  secondaryCtaLabel,
  secondaryCtaHref,
  showBackLink = true,
}: EventHeroProps) {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(227,176,75,0.08)_0%,transparent_70%)]" />

      <div className="relative z-10 container mx-auto px-4 py-32 text-center max-w-4xl">
        {showBackLink && (
          <Link
            href="/events"
            className="inline-flex items-center gap-2 text-text-mid hover:text-gold-highlight transition-colors mb-8 text-sm"
          >
            <ArrowLeft className="h-4 w-4" />
            All Events
          </Link>
        )}

        <p className="text-gold-base font-semibold tracking-widest uppercase text-sm mb-4">
          {dateRange}
        </p>

        <h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-text-light"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {title}
        </h1>

        <p className="text-lg md:text-xl text-text-mid max-w-2xl mx-auto mb-10 leading-relaxed">
          {headline}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {ctaExternal ? (
            <a
              href={ctaHref}
              target="_blank"
              rel="noopener noreferrer"
              className="luxury-button px-8 py-4 text-lg font-semibold rounded-lg inline-block"
            >
              {ctaLabel}
            </a>
          ) : (
            <Link
              href={ctaHref}
              className="luxury-button px-8 py-4 text-lg font-semibold rounded-lg"
            >
              {ctaLabel}
            </Link>
          )}
          {secondaryCtaLabel && secondaryCtaHref && (
            <Link
              href={secondaryCtaHref}
              className="px-8 py-4 text-lg font-semibold rounded-lg border border-gold-base/30 text-gold-highlight hover:bg-gold-base/10 transition-all duration-300"
            >
              {secondaryCtaLabel}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}

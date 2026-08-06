import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

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
    <section style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif" }} className="relative isolate overflow-hidden border-b border-white/10 bg-[#070809]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_20%,rgba(227,176,75,0.14),transparent_30%),linear-gradient(115deg,#070809_0%,#11130f_56%,#080909_100%)]" />
      <div className="absolute inset-y-0 right-0 hidden w-[42%] opacity-60 md:block" aria-hidden="true">
        <div className="absolute right-[18%] top-0 h-full w-px rotate-[18deg] bg-gradient-to-b from-transparent via-[#e3b04b]/60 to-transparent" />
        <div className="absolute right-[36%] top-0 h-full w-px rotate-[18deg] bg-gradient-to-b from-transparent via-white/15 to-transparent" />
        <div className="absolute bottom-[22%] left-0 h-px w-full bg-gradient-to-r from-transparent via-[#e3b04b]/50 to-transparent" />
      </div>
      <div className="relative z-10 mx-auto grid max-w-6xl gap-9 px-5 py-20 sm:px-8 md:grid-cols-[1.1fr_0.9fr] md:items-end md:py-24 lg:px-10">
        <div>
          {showBackLink && (
            <Link href="/events" className="mb-7 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-[#b8b8b0] transition-colors hover:text-[#f7d382]">
              <ArrowLeft className="h-3.5 w-3.5" /> All Events
            </Link>
          )}
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[#e3b04b]">{dateRange}</p>
          <h1 className="max-w-3xl text-5xl font-medium leading-[1.02] tracking-normal text-[#f4f1e8] sm:text-6xl lg:text-8xl" style={{ fontFamily: "'Gill Sans', 'Gill Sans Nova', 'Trebuchet MS', 'Helvetica Neue', Arial, sans-serif" }}>{title}</h1>
        </div>
        <div className="max-w-md md:pb-1">
          <p className="mb-7 text-base leading-7 text-[#c9d0da] sm:text-lg">{headline}</p>
          <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
            {ctaExternal ? (
              <a href={ctaHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#e3b04b] px-6 py-3.5 text-sm font-semibold text-[#070809] transition-transform hover:-translate-y-0.5">{ctaLabel}<ArrowUpRight className="h-4 w-4" /></a>
            ) : (
              <Link href={ctaHref} className="inline-flex items-center gap-2 rounded-full bg-[#e3b04b] px-6 py-3.5 text-sm font-semibold text-[#070809] transition-transform hover:-translate-y-0.5">{ctaLabel}<ArrowUpRight className="h-4 w-4" /></Link>
            )}
            {secondaryCtaLabel && secondaryCtaHref && <Link href={secondaryCtaHref} className="rounded-full border border-white/20 px-6 py-3.5 text-sm font-semibold text-[#f4f1e8] transition-colors hover:border-[#e3b04b]/70 hover:text-[#f7d382]">{secondaryCtaLabel}</Link>}
          </div>
        </div>
      </div>
    </section>
  );
}

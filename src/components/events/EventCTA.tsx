import Link from "next/link";
import { ArrowUpRight, Phone } from "lucide-react";

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

export default function EventCTA({ headline = "Secure Your Spot", subtext = "Limited campaign inventory available. Lock in your position before it’s gone.", primaryLabel = "Get My Campaign Plan", primaryHref = "/quote", primaryExternal = false, secondaryLabel = "Check Availability", secondaryHref = "/quote", secondaryExternal = false, showPhone = true }: EventCTAProps) {
  return (
    <section style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif" }} className="relative overflow-hidden border-t border-white/10 bg-[#0f1110] py-20 md:py-28">
      <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#e3b04b]/10 blur-3xl" aria-hidden="true" />
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-10 px-5 sm:px-8 md:flex-row md:items-end md:justify-between lg:px-10">
        <div className="max-w-2xl"><p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#e3b04b]">The next move</p><h2 className="text-4xl font-semibold leading-tight tracking-[-0.015em] text-[#f4f1e8] md:text-6xl" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>{headline}</h2><p className="mt-5 max-w-xl text-base leading-7 text-[#aeb5bd]">{subtext}</p></div>
        <div className="flex flex-wrap gap-3 md:max-w-sm md:justify-end">
          {primaryExternal ? <a href={primaryHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#e3b04b] px-6 py-3.5 text-sm font-semibold text-[#070809]">{primaryLabel}<ArrowUpRight className="h-4 w-4" /></a> : <Link href={primaryHref} className="inline-flex items-center gap-2 rounded-full bg-[#e3b04b] px-6 py-3.5 text-sm font-semibold text-[#070809]">{primaryLabel}<ArrowUpRight className="h-4 w-4" /></Link>}
          {secondaryExternal ? <a href={secondaryHref} target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/20 px-6 py-3.5 text-sm font-semibold text-[#f4f1e8]">{secondaryLabel}</a> : <Link href={secondaryHref} className="rounded-full border border-white/20 px-6 py-3.5 text-sm font-semibold text-[#f4f1e8]">{secondaryLabel}</Link>}
          {showPhone && <a href="tel:7603858989" aria-label="Call BrightPath Billboards" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3.5 text-sm font-semibold text-[#f4f1e8]"><Phone className="h-4 w-4" /> Call Now</a>}
        </div>
      </div>
    </section>
  );
}

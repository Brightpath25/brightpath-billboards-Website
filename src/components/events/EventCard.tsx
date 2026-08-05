import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface EventCardLink { label: string; href: string; }
interface EventCardProps { title: string; description: string; timeframe: string; href: string; subLinks?: EventCardLink[]; }

export default function EventCard({ title, description, timeframe, href, subLinks }: EventCardProps) {
  return (
    <article className="group flex h-full flex-col border-t border-white/15 bg-[#101210] p-7 transition-colors hover:border-[#e3b04b] sm:p-8">
      <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#e3b04b]">{timeframe}</p>
      <h3 className="mb-4 max-w-md text-2xl font-semibold leading-tight tracking-[-0.025em] text-[#f4f1e8] md:text-3xl" style={{ fontFamily: "var(--font-heading)" }}>{title}</h3>
      <p className="mb-8 flex-grow text-base leading-7 text-[#aeb5bd]">{description}</p>
      {subLinks && subLinks.length > 0 ? <div className="space-y-2">{subLinks.map((link) => <Link key={link.href} href={link.href} className="flex items-center justify-between border-b border-white/10 py-3 text-sm font-semibold text-[#f4f1e8] transition-colors hover:border-[#e3b04b] hover:text-[#f7d382]">{link.label}<ArrowRight className="h-4 w-4" /></Link>)}</div> : <Link href={href} className="inline-flex items-center gap-2 text-sm font-semibold text-[#f7d382] transition-colors hover:text-white">View campaign<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></Link>}
    </article>
  );
}

import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface EventCardLink {
  label: string;
  href: string;
}

interface EventCardProps {
  title: string;
  description: string;
  timeframe: string;
  href: string;
  subLinks?: EventCardLink[];
}

export default function EventCard({
  title,
  description,
  timeframe,
  href,
  subLinks,
}: EventCardProps) {
  return (
    <div className="luxury-card rounded-2xl p-8 flex flex-col h-full">
      <p className="text-gold-base text-sm font-semibold tracking-widest uppercase mb-3">
        {timeframe}
      </p>
      <h3
        className="text-2xl font-bold text-text-light mb-3"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        {title}
      </h3>
      <p className="text-text-mid leading-relaxed mb-6 flex-grow">
        {description}
      </p>

      {subLinks && subLinks.length > 0 ? (
        <div className="space-y-3">
          {subLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex items-center justify-between px-5 py-3 rounded-lg border border-gold-base/20 text-gold-highlight hover:bg-gold-base/10 hover:border-gold-base/40 transition-all duration-300 text-sm font-semibold"
            >
              {link.label}
              <ArrowRight className="h-4 w-4" />
            </Link>
          ))}
        </div>
      ) : (
        <Link
          href={href}
          className="inline-flex items-center gap-2 luxury-button px-6 py-3 rounded-lg font-semibold text-center justify-center"
        >
          View Campaign
          <ArrowRight className="h-4 w-4" />
        </Link>
      )}
    </div>
  );
}

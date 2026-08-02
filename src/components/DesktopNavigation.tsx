import Link from "next/link";

type NavigationItem = {
  label: string;
  href: string;
  external?: boolean;
};

const navigationItems: readonly NavigationItem[] = [
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Campaigns", href: "/#campaigns" },
  { label: "Events", href: "/events" },
  { label: "BrightPathIQ", href: "https://bpmobilebillboardsiq.live", external: true },
  { label: "About", href: "/#about" },
];

const linkClassName =
  "rounded-bp-control px-bp-2 py-bp-2 font-bp-body text-bp-small font-bp-medium text-bp-gray-100 transition-colors duration-bp-fast ease-bp-standard hover:text-bp-gold focus-visible:outline-none focus-visible:shadow-bp-focus";

export default function DesktopNavigation() {
  return (
    <div className="hidden items-center gap-bp-3 md:flex" aria-label="Primary navigation">
      {navigationItems.map((item) =>
        item.external ? (
          <a
            key={item.label}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className={linkClassName}
          >
            {item.label}
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        ) : (
          <Link key={item.label} href={item.href} className={linkClassName}>
            {item.label}
          </Link>
        ),
      )}
      <Link
        href="/quote"
        className="ml-bp-2 rounded-bp-control bg-bp-gold px-bp-4 py-bp-3 font-bp-body text-bp-small font-bp-semibold text-bp-black shadow-bp-sm transition-colors duration-bp-fast ease-bp-standard hover:bg-bp-gold-dark hover:text-bp-white focus-visible:outline-none focus-visible:shadow-bp-focus"
      >
        Build My Campaign
      </Link>
    </div>
  );
}

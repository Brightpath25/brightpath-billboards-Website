"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { campaignHref, navigationItems } from "@/components/navigation";

const linkClassName =
  "rounded-bp-control px-bp-3 py-bp-3 font-bp-body text-bp-body font-bp-medium text-bp-gray-100 transition-colors duration-bp-fast ease-bp-standard hover:bg-bp-white/5 hover:text-bp-gold focus-visible:outline-none focus-visible:shadow-bp-focus";

export default function MobileNavigation() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const menuId = useId();
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;

    firstLinkRef.current?.focus();
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        className="rounded-bp-control p-bp-2 text-bp-gray-100 transition-colors duration-bp-fast ease-bp-standard hover:text-bp-gold focus-visible:outline-none focus-visible:shadow-bp-focus"
        onClick={() => setOpen((current) => !current)}
        aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={open}
        aria-controls={menuId}
      >
        {open ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
      </button>

      {open && (
        <nav
          id={menuId}
          aria-label="Mobile navigation"
          className="absolute left-0 right-0 top-full border-t border-bp-dark bg-bp-black/95 px-bp-page-gutter py-bp-4 shadow-bp-lg backdrop-blur-xl"
        >
          <div className="mx-auto flex max-w-bp-wide flex-col gap-bp-1">
            {navigationItems.map((item, index) =>
              item.external ? (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClassName}
                  onClick={closeMenu}
                >
                  {item.label}
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              ) : (
                <Link
                  key={item.label}
                  ref={index === 0 ? firstLinkRef : undefined}
                  href={item.href}
                  className={linkClassName}
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              ),
            )}
            <Link
              href={campaignHref}
              className="mt-bp-3 rounded-bp-control bg-bp-gold px-bp-4 py-bp-3 text-center font-bp-body text-bp-body font-bp-semibold text-bp-black shadow-bp-sm transition-colors duration-bp-fast ease-bp-standard hover:bg-bp-gold-dark hover:text-bp-white focus-visible:outline-none focus-visible:shadow-bp-focus"
              onClick={closeMenu}
            >
              Build My Campaign
            </Link>
          </div>
        </nav>
      )}
    </div>
  );
}

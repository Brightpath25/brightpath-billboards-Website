import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { navigationItems } from "@/components/navigation";

const services = [
  "Mobile LED Advertising",
  "Event Domination",
  "Targeted Campaigns",
  "Route Planning",
] as const;

const resources = [
  { label: "Media Kit", href: "/media-kit.pdf?v=2", external: true },
  { label: "Price Card", href: "/price-card.png", external: true },
  { label: "Launch Overview", href: "/launch-overview.pdf", external: true },
] as const;

const policies = [
  { label: "Terms of Service", href: "/terms-of-service" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Refund Policy", href: "/refund-policy" },
] as const;

const socialLinks = [
  {
    Icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/brightpath-billboards-llc/",
  },
  {
    Icon: Instagram,
    label: "Instagram",
    href: "https://www.instagram.com/bpmobilebillboards?igsh=NTc4MTIwNjQ2YQ%3D%3D&utm_source=qr",
  },
  {
    Icon: Facebook,
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61568107225408",
  },
  { Icon: Twitter, label: "X", href: "https://x.com/Brightpath94370" },
] as const;

const footerLinkClassName =
  "rounded-bp-control text-bp-gray-400 transition-colors duration-bp-fast ease-bp-standard hover:text-bp-gold focus-visible:outline-none focus-visible:shadow-bp-focus";

const sectionHeadingClassName =
  "font-bp-display text-bp-label font-bp-bold uppercase tracking-[0.12em] text-bp-gold";

export default function SiteFooter() {
  return (
    <footer className="border-t border-bp-dark bg-bp-black text-bp-gray-100">
      <div className="h-1 bg-bp-gold" aria-hidden="true" />

      <div className="mx-auto max-w-bp-wide px-bp-page-gutter py-bp-16 lg:py-bp-20">
        <div className="grid gap-bp-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:gap-bp-grid-gutter">
          <div className="max-w-md sm:col-span-2 lg:col-span-1">
            <Link
              href="/"
              className="inline-flex rounded-bp-control focus-visible:outline-none focus-visible:shadow-bp-focus"
              aria-label="BrightPath Billboards home"
            >
              <Image
                src="/brightpath-logo.png"
                alt="BrightPath Billboards"
                width={180}
                height={60}
                className="h-auto w-[150px] sm:w-[180px]"
              />
            </Link>
            <p className="mt-bp-6 max-w-sm font-bp-body text-bp-body text-bp-gray-400">
              The Coachella Valley&apos;s premier LED mobile billboard advertising company.
            </p>

            <div className="mt-bp-8">
              <h2 className={sectionHeadingClassName}>Services</h2>
              <ul className="mt-bp-4 grid gap-x-bp-6 gap-y-bp-2 font-bp-body text-bp-small text-bp-gray-400 sm:grid-cols-2 lg:grid-cols-1">
                {services.map((service) => (
                  <li key={service}>{service}</li>
                ))}
              </ul>
            </div>
          </div>

          <nav aria-labelledby="footer-explore-heading">
            <h2 id="footer-explore-heading" className={sectionHeadingClassName}>
              Explore
            </h2>
            <ul className="mt-bp-4 space-y-bp-3 font-bp-body text-bp-small">
              {navigationItems.map((item) => (
                <li key={item.label}>
                  {item.external ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={footerLinkClassName}
                    >
                      {item.label}
                      <span className="sr-only"> (opens in a new tab)</span>
                    </a>
                  ) : (
                    <Link href={item.href} className={footerLinkClassName}>
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-labelledby="footer-resources-heading">
            <h2 id="footer-resources-heading" className={sectionHeadingClassName}>
              Resources
            </h2>
            <ul className="mt-bp-4 space-y-bp-3 font-bp-body text-bp-small">
              {resources.map((resource) => (
                <li key={resource.label}>
                  <a
                    href={resource.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={footerLinkClassName}
                  >
                    {resource.label}
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className={sectionHeadingClassName}>Contact</h2>
            <address className="mt-bp-4 space-y-bp-3 font-bp-body text-bp-small not-italic text-bp-gray-400">
              <p>La Quinta, CA</p>
              <p>
                <a href="tel:+17603858989" className={footerLinkClassName}>
                  (760) 385-8989
                </a>
              </p>
              <p className="break-words">
                <a href="mailto:brightpathbillboards@gmail.com" className={footerLinkClassName}>
                  brightpathbillboards@gmail.com
                </a>
              </p>
            </address>

            <h2 className={`${sectionHeadingClassName} mt-bp-8`}>Follow Us</h2>
            <div className="mt-bp-4 flex flex-wrap gap-bp-3">
              {socialLinks.map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-bp-control border border-bp-dark text-bp-gray-400 transition-colors duration-bp-fast ease-bp-standard hover:border-bp-gold hover:bg-bp-gold hover:text-bp-black focus-visible:outline-none focus-visible:shadow-bp-focus"
                  aria-label={`${label} (opens in a new tab)`}
                >
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-bp-dark">
        <div className="mx-auto flex max-w-bp-wide flex-col gap-bp-4 px-bp-page-gutter py-bp-6 font-bp-body text-bp-label text-bp-gray-400 md:flex-row md:items-center md:justify-between">
          <p>&copy; 2026 BrightPath Billboards LLC. All rights reserved.</p>
          <nav aria-label="Legal">
            <ul className="flex flex-wrap gap-x-bp-6 gap-y-bp-2">
              {policies.map((policy) => (
                <li key={policy.label}>
                  <Link href={policy.href} className={footerLinkClassName}>
                    {policy.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}

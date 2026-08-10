import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const primaryLinks = [
  ["Mobile LED Advertising", "/services/mobile-led-advertising"],
  ["Event Domination", "/services/event-domination"],
  ["Targeted Campaigns", "/services/targeted-campaigns"],
  ["Route Planning", "/quote"],
  ["About BrightPath", "/about"],
  ["Events", "/events"],
] as const;

const resourceLinks = [
  ["Media Kit", "/media-kit"],
  ["Price Card", "/price-card.png"],
  ["Launch Overview", "/launch-overview.pdf"],
] as const;

const legalLinks = [
  ["Terms of Service", "/terms-of-service"],
  ["Privacy Policy", "/privacy-policy"],
  ["Refund Policy", "/refund-policy"],
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
  {
    Icon: Twitter,
    label: "X",
    href: "https://x.com/Brightpath94370",
  },
] as const;

const focusClass =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E79E15] focus-visible:ring-offset-4 focus-visible:ring-offset-[#0A0A0A]";

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <>
      <style>{`
        /* The root layout owns the single shared footer. Hide legacy page-local footers. */
        main > footer {
          display: none;
        }
      `}</style>

      <footer
        className="relative border-t border-white/10 bg-[#0A0A0A] text-white"
        aria-label="Site footer"
      >
        <div className="h-0.5 w-full bg-[#E79E15]" aria-hidden="true" />

        <div className="mx-auto max-w-[1280px] px-5 py-14 sm:px-8 md:py-16 lg:px-12 xl:px-16">
          <div className="grid gap-12 border-b border-white/10 pb-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-8 lg:pb-14">
            <section className="lg:col-span-5" aria-labelledby="footer-brand-heading">
              <Link
                href="/"
                aria-label="BrightPath Billboards home"
                className={`inline-flex ${focusClass}`}
              >
                <Image
                  src="/brightpath-logo.png"
                  alt="BrightPath Billboards"
                  width={190}
                  height={52}
                  className="h-12 w-auto sm:h-14"
                />
              </Link>

              <h2
                id="footer-brand-heading"
                className="mt-7 max-w-[16ch] text-3xl font-black leading-[1.05] tracking-[-0.025em] sm:text-4xl"
              >
                Put your brand in motion.
              </h2>
              <p className="mt-5 max-w-lg text-base leading-[1.65] text-[#A7A7A7] sm:text-lg">
                Mobile LED advertising built around movement, local context, and campaign proof across the Coachella Valley.
              </p>

              <Link
                href="/quote"
                className={`mt-7 inline-flex min-h-12 items-center justify-center bg-[#E79E15] px-6 py-3 text-sm font-bold text-[#0A0A0A] transition-colors hover:bg-[#B8750B] hover:text-white ${focusClass}`}
              >
                Build My Campaign
              </Link>
            </section>

            <nav className="lg:col-span-2" aria-labelledby="footer-explore-heading">
              <h2
                id="footer-explore-heading"
                className="text-xs font-bold uppercase tracking-[0.2em] text-[#E79E15]"
              >
                Explore
              </h2>
              <ul className="mt-5 space-y-3 text-sm">
                {primaryLinks.map(([label, href]) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className={`inline-flex min-h-11 items-center text-[#E8E8E8] transition-colors hover:text-[#E79E15] ${focusClass}`}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <nav className="lg:col-span-2" aria-labelledby="footer-resources-heading">
              <h2
                id="footer-resources-heading"
                className="text-xs font-bold uppercase tracking-[0.2em] text-[#E79E15]"
              >
                Resources
              </h2>
              <ul className="mt-5 space-y-3 text-sm">
                {resourceLinks.map(([label, href]) => (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex min-h-11 items-center text-[#E8E8E8] transition-colors hover:text-[#E79E15] ${focusClass}`}
                    >
                      {label}
                    </a>
                  </li>
                ))}
                <li>
                  <Link
                    href="/brightpathiq-demo"
                    className={`inline-flex min-h-11 items-center text-[#E8E8E8] transition-colors hover:text-[#E79E15] ${focusClass}`}
                  >
                    Client Experience Demo
                  </Link>
                </li>
                <li>
                  <a
                    href="https://bpmobilebillboardsiq.live"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex min-h-11 items-center text-[#E8E8E8] transition-colors hover:text-[#E79E15] ${focusClass}`}
                  >
                    BrightPathIQ
                  </a>
                </li>
              </ul>
            </nav>

            <section className="lg:col-span-3" aria-labelledby="footer-contact-heading">
              <h2
                id="footer-contact-heading"
                className="text-xs font-bold uppercase tracking-[0.2em] text-[#E79E15]"
              >
                Contact
              </h2>
              <address className="mt-5 space-y-3 text-sm not-italic text-[#A7A7A7]">
                <p className="min-h-11 content-center">La Quinta, CA</p>
                <p>
                  <a
                    href="tel:7603858989"
                    className={`inline-flex min-h-11 items-center text-[#E8E8E8] transition-colors hover:text-[#E79E15] ${focusClass}`}
                  >
                    (760) 385-8989
                  </a>
                </p>
                <p>
                  <a
                    href="mailto:Brightpathbillboards@gmail.com"
                    className={`inline-flex min-h-11 items-center break-all text-[#E8E8E8] transition-colors hover:text-[#E79E15] ${focusClass}`}
                  >
                    Brightpathbillboards@gmail.com
                  </a>
                </p>
              </address>

              <div className="mt-6 flex flex-wrap gap-3" aria-label="BrightPath social links">
                {socialLinks.map(({ Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className={`flex h-11 w-11 items-center justify-center border border-white/15 text-[#A7A7A7] transition-colors hover:border-[#E79E15] hover:text-[#E79E15] ${focusClass}`}
                  >
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </section>
          </div>

          <div className="flex flex-col gap-6 pt-8 text-sm text-[#A7A7A7] lg:flex-row lg:items-center lg:justify-between">
            <p>&copy; {year} BrightPath Billboards LLC. All rights reserved.</p>
            <nav aria-label="Legal">
              <ul className="flex flex-wrap gap-x-6 gap-y-3">
                {legalLinks.map(([label, href]) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className={`inline-flex min-h-11 items-center transition-colors hover:text-[#E79E15] ${focusClass}`}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </footer>
    </>
  );
}

import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const policyLinks = [
  { href: "/terms-of-service", label: "Terms of Service" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/refund-policy", label: "Refund Policy" },
];

export default function SiteFooter() {
  return (
    <footer className="bg-black-hero border-t border-gold-base/20 relative">
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-t from-transparent to-black/80 pointer-events-none" />
      <div className="h-1 bg-gold-gradient relative z-10" />

      <div className="py-16 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <Link href="/" aria-label="BrightPath Billboards home">
                <Image
                  src="/brightpath-logo.png"
                  alt="BrightPath Billboards Logo"
                  width={150}
                  height={50}
                  className="mb-6 h-auto w-auto"
                />
              </Link>
              <p className="leading-relaxed trust-highlight">
                The Coachella Valley&apos;s premier LED mobile billboard advertising company.
              </p>
              <div className="mt-6">
                <h4 className="font-bold mb-3 text-gold-base text-sm tracking-wide uppercase">
                  Resources
                </h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a
                      href="/media-kit.pdf?v=2"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-mid hover:text-gold-highlight transition-colors"
                    >
                      Media Kit
                    </a>
                  </li>
                  <li>
                    <a
                      href="/price-card.png"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-mid hover:text-gold-highlight transition-colors"
                    >
                      Price Card
                    </a>
                  </li>
                  <li>
                    <a
                      href="/launch-overview.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-mid hover:text-gold-highlight transition-colors"
                    >
                      Launch Overview
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-5 text-gold-base text-lg tracking-wide">Services</h4>
              <ul className="space-y-2.5">
                <li>
                  <Link href="/services/mobile-led-advertising" className="text-text-mid hover:text-gold-highlight transition-colors">
                    Mobile LED Advertising
                  </Link>
                </li>
                <li>
                  <Link href="/services/event-domination" className="text-text-mid hover:text-gold-highlight transition-colors">
                    Event Domination
                  </Link>
                </li>
                <li>
                  <Link href="/services/targeted-campaigns" className="text-text-mid hover:text-gold-highlight transition-colors">
                    Targeted Campaigns
                  </Link>
                </li>
                <li>
                  <Link href="/quote" className="text-text-mid hover:text-gold-highlight transition-colors">
                    Route Planning
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-5 text-gold-base text-lg tracking-wide">Contact</h4>
              <ul className="space-y-2.5 text-text-mid">
                <li>La Quinta, CA</li>
                <li>
                  <a href="tel:7603858989" className="hover:text-gold-highlight transition-colors">
                    (760) 385-8989
                  </a>
                </li>
                <li>
                  <a href="mailto:Brightpathbillboards@gmail.com" className="hover:text-gold-highlight transition-colors break-all">
                    Brightpathbillboards@gmail.com
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-5 text-gold-base text-lg tracking-wide">Follow Us</h4>
              <div className="flex space-x-4">
                {[
                  { Icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/company/brightpath-billboards-llc/" },
                  { Icon: Instagram, label: "Instagram", href: "https://www.instagram.com/bpmobilebillboards?igsh=NTc4MTIwNjQ2YQ%3D%3D&utm_source=qr" },
                  { Icon: Facebook, label: "Facebook", href: "https://www.facebook.com/profile.php?id=61568107225408" },
                  { Icon: Twitter, label: "X", href: "https://x.com/Brightpath94370" },
                ].map(({ Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-black-card border border-gold-base/20 rounded-lg flex items-center justify-center hover:bg-gold-gradient hover:border-gold-base transition-all group"
                    aria-label={label}
                  >
                    <Icon className="h-5 w-5 text-text-mid group-hover:text-black-hero transition-colors" />
                  </a>
                ))}
              </div>

              <div className="mt-8">
                <h4 className="font-bold mb-3 text-gold-base text-sm tracking-wide uppercase">Legal</h4>
                <ul className="space-y-2 text-sm">
                  {policyLinks.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="text-text-mid hover:text-gold-highlight transition-colors">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gold-base/10 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-text-mid">&copy; 2024 BrightPath Billboards LLC. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

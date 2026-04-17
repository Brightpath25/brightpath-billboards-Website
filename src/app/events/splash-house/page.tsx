import type { Metadata } from "next";
import Link from "next/link";
import EventHero from "@/components/events/EventHero";
import EventSection from "@/components/events/EventSection";
import EventCTA from "@/components/events/EventCTA";
import { Eye, Route, Clock, Crown, FileText, DollarSign, ClipboardList, Users, PartyPopper, Hotel, Moon } from "lucide-react";

export const metadata: Metadata = {
  title: "Splash House Campaigns | BrightPath Billboards",
  description:
    "Mobile billboard campaigns for Splash House in Palm Springs. Compact routes, hotel-heavy traffic, and nightlife-driven visibility.",
};

export default function SplashHousePage() {
  return (
    <div className="min-h-screen bg-black-hero">
      <EventHero
        title="Own the Movement Around Splash House"
        headline="A multi-hotel, poolside music weekend built around nonstop movement, nightlife, and high-energy social environments."
        dateRange="August 7–9 and August 14–16, 2026 • Palm Springs, California"
        ctaLabel="Get My Campaign Plan"
        ctaHref="/quote"
        secondaryCtaLabel="Call Now (760) 385-8989"
        secondaryCtaHref="tel:7603858989"
      />

      {/* Why This Event Matters */}
      <EventSection
        title="Why This Event Matters"
        subtitle="Splash House is not a traditional festival. It is a concentrated, high-energy environment built around hotels, pools, and nightlife."
      >
        <div className="flex justify-center mb-10">
          <a
            href="/media-kit.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold-highlight hover:text-gold-base transition-colors text-sm font-semibold underline"
          >
            Download Media Kit
          </a>
        </div>
        <div className="grid md:grid-cols-4 gap-8">
          {[
            {
              icon: Hotel,
              title: "Multi-Day Presence",
              text: "Attendees stay for the full weekend — creating sustained, repeated exposure across multiple days.",
            },
            {
              icon: Eye,
              title: "Hotel & Venue Density",
              text: "Strong concentration around a small number of hotels and venues keeps all traffic within reach.",
            },
            {
              icon: PartyPopper,
              title: "High Visibility",
              text: "High social interaction and visibility across pool, nightlife, and transit zones.",
            },
            {
              icon: Crown,
              title: "Premium Audience",
              text: "A lifestyle-driven audience with high spending power and strong brand affinity.",
            },
          ].map((item) => (
            <div key={item.title} className="luxury-card rounded-2xl p-8 text-center">
              <item.icon className="h-10 w-10 text-gold-base mx-auto mb-4" />
              <h3 className="text-xl font-bold text-text-light mb-3" style={{ fontFamily: "var(--font-heading)" }}>
                {item.title}
              </h3>
              <p className="text-text-mid leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </EventSection>

      {/* Where Movement Happens */}
      <EventSection
        title="Where Movement Happens"
        subtitle="Most activity is concentrated in Downtown Palm Springs. The Hilton and Renaissance — less than half a mile apart — form the action center."
        dark
      >
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              icon: Hotel,
              title: "Hilton Palm Springs",
              text: "Tahquitz Canyon Way & Avenida Caballeros — primary hub and highest pedestrian density zone.",
            },
            {
              icon: Hotel,
              title: "Renaissance Palm Springs",
              text: "Tahquitz Canyon Way & Hermosa Dr — second anchor hotel driving continuous foot traffic.",
            },
            {
              icon: PartyPopper,
              title: "Saguaro Palm Springs",
              text: "Palm Canyon Dr & Sunrise Way — vibrant venue with strong inter-hotel movement.",
            },
            {
              icon: Route,
              title: "Convention Center & Air Museum",
              text: "Registration hub and after-hours venue — key arrival and late-night traffic generators.",
            },
          ].map((item) => (
            <div key={item.title} className="flex gap-5">
              <div className="shrink-0 w-12 h-12 rounded-xl bg-gold-base/10 flex items-center justify-center">
                <item.icon className="h-6 w-6 text-gold-base" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-text-light mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                  {item.title}
                </h3>
                <p className="text-text-mid leading-relaxed">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </EventSection>

      {/* BrightPath Route Strategy */}
      <EventSection title="BrightPath Route Strategy" subtitle="This is where attendees walk, wait, and move in groups.">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Route, label: "Tahquitz Canyon Way", href: "/quote" },
            { icon: Route, label: "Sunrise Way & Ramon Rd", href: "/quote" },
            { icon: Moon, label: "Gene Autry Trail", href: "/quote" },
            { icon: ClipboardList, label: "Palm Canyon Drive", href: "/quote" },
          ].map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="luxury-card rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-gold-glow transition-shadow duration-300"
            >
              <item.icon className="h-8 w-8 text-gold-base mb-4" />
              <span className="text-text-light font-semibold">{item.label}</span>
              <span className="text-text-mid text-sm mt-2">
                {item.label === "Tahquitz Canyon Way" && "Primary hotel-to-hotel movement"}
                {item.label === "Sunrise Way & Ramon Rd" && "Inter-hotel connector to Saguaro"}
                {item.label === "Gene Autry Trail" && "After hours — 10 PM to 2 AM peak"}
                {item.label === "Palm Canyon Drive" && "Dining, retail, and pre-event activity"}
              </span>
            </Link>
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <a
            href="/BrightPath_Route_Coverage.png"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold-highlight hover:text-gold-base transition-colors text-sm font-semibold underline"
          >
            View Route Coverage
          </a>
        </div>
      </EventSection>

      {/* Timing Strategy */}
      <EventSection title="Timing Strategy" dark>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            "Friday: 12 PM – 7 PM — Convention Center and hotel arrivals",
            "Saturday & Sunday: 1 PM – 5 PM — Peak pool party movement",
            "Late Night: 10 PM – 2 AM — After Hours at Air Museum",
            "Dwell Time: 15–30 min at shuttle stops and hotel entry zones",
          ].map((item) => (
            <div key={item} className="luxury-card rounded-2xl p-6 text-center">
              <p className="text-text-light font-semibold">{item}</p>
            </div>
          ))}
        </div>
      </EventSection>

      {/* Who You're Reaching */}
      <EventSection title="Who You're Reaching" subtitle="This audience is present for multiple days and highly engaged.">
        <div className="grid sm:grid-cols-2 gap-6">
          {[
            "21–34 core audience (majority)",
            "Socially active, group-oriented attendees",
            "Hotel package buyers and weekend travelers",
            "High-spend lifestyle and nightlife consumers",
            "West Coast and destination-based visitors",
          ].map((item) => (
            <div key={item} className="flex items-start gap-3">
              <span className="text-gold-base mt-1 shrink-0">&#10003;</span>
              <p className="text-text-mid">{item}</p>
            </div>
          ))}
        </div>
      </EventSection>

      {/* Expected Campaign Impact */}
      <EventSection title="Expected Campaign Impact" dark>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { stat: "70,000+", label: "Daily impressions (up to)" },
            { stat: "210,000+", label: "Impressions per weekend (up to)" },
            { stat: "15,000+", label: "Attendees per weekend" },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <p className="text-gold-base text-4xl font-bold mb-2">{item.stat}</p>
              <p className="text-text-mid">{item.label}</p>
            </div>
          ))}
        </div>
        <div className="grid sm:grid-cols-2 gap-6 mt-12">
          {[
            "Tahquitz Canyon Way — 50,000+ daily",
            "Avenida Caballeros — 40,000+ Friday peak",
            "Sunrise Way — 35,000+",
            "Gene Autry Trail — 25,000+ night traffic",
          ].map((item) => (
            <div key={item} className="flex items-start gap-3">
              <span className="text-gold-base mt-1 shrink-0">&#10003;</span>
              <p className="text-text-mid">{item}</p>
            </div>
          ))}
        </div>
      </EventSection>

      {/* Why This Works + Limited Availability */}
      <EventSection title="Why This Works" subtitle="Only a small number of brands are placed per campaign. Once routes are filled, access closes.">
        <div className="grid sm:grid-cols-2 gap-6 mb-10">
          {[
            "Long dwell time vs drive-by exposure",
            "High repetition across hotel zones",
            "Audience moves in groups (3–5 viewers per impression)",
            "No algorithm, no skip, no ad blocking",
          ].map((item) => (
            <div key={item} className="flex items-start gap-3">
              <span className="text-gold-base mt-1 shrink-0">&#10003;</span>
              <p className="text-text-mid">{item}</p>
            </div>
          ))}
        </div>
        <div className="luxury-card rounded-2xl p-8 text-center">
          <p className="text-text-light text-lg font-semibold mb-4">Mobile DOOH CPM: Approximately $4–$15 vs higher digital alternatives</p>
          <p className="text-text-mid mb-6">This is controlled exposure inside a concentrated environment.</p>
          <Link href="/quote" className="luxury-button px-8 py-4 rounded-lg font-semibold inline-block">
            Check Availability
          </Link>
        </div>
      </EventSection>

      {/* Pricing */}
      <section id="pricing" className="py-20 md:py-28 bg-black-panel">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-text-light mb-4" style={{ fontFamily: "var(--font-heading)" }}>
            Splash House Pricing
          </h2>
          <p className="text-text-mid text-lg max-w-2xl mx-auto mb-12">
            Limited placements per weekend.
          </p>
          <div className="gold-divider mx-auto mb-12" />

          <div className="grid md:grid-cols-3 gap-8">
            <div className="luxury-card rounded-2xl p-10">
              <p className="text-gold-base font-semibold tracking-widest uppercase text-sm mb-2">Weekend 1</p>
              <h3 className="text-2xl font-bold text-text-light mb-4" style={{ fontFamily: "var(--font-heading)" }}>
                $3,000
              </h3>
              <p className="text-text-mid mb-8">August 7–9, 2026</p>
              <Link href="/quote" className="luxury-button px-8 py-4 rounded-lg font-semibold inline-block">
                Request Quote
              </Link>
            </div>
            <div className="luxury-card rounded-2xl p-10">
              <p className="text-gold-base font-semibold tracking-widest uppercase text-sm mb-2">Weekend 2</p>
              <h3 className="text-2xl font-bold text-text-light mb-4" style={{ fontFamily: "var(--font-heading)" }}>
                $3,000
              </h3>
              <p className="text-text-mid mb-8">August 14–16, 2026</p>
              <Link href="/quote" className="luxury-button px-8 py-4 rounded-lg font-semibold inline-block">
                Request Quote
              </Link>
            </div>
            <div className="luxury-card rounded-2xl p-10 border border-gold-base/30">
              <p className="text-gold-base font-semibold tracking-widest uppercase text-sm mb-2">Both Weekends</p>
              <h3 className="text-2xl font-bold text-text-light mb-4" style={{ fontFamily: "var(--font-heading)" }}>
                $5,000
              </h3>
              <p className="text-text-mid mb-8">Save $1,000</p>
              <Link href="/quote" className="luxury-button px-8 py-4 rounded-lg font-semibold inline-block">
                Request Quote
              </Link>
            </div>
          </div>
          <div className="flex justify-center mt-10">
            <a
              href="/price-card.png"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold-highlight hover:text-gold-base transition-colors text-sm font-semibold underline"
            >
              View Pricing
            </a>
          </div>
          <div className="flex justify-center mt-4">
            <a
              href="/launch-overview.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold-highlight hover:text-gold-base transition-colors text-sm font-semibold underline"
            >
              View Launch Overview
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <EventCTA
        headline="Lock Your Visibility Before the Weekend Begins"
        subtext="Capture attention across hotel, pool, and nightlife movement throughout Palm Springs."
        primaryLabel="Get My Campaign Plan"
      />
    </div>
  );
}

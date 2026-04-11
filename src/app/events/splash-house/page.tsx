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
        title="Splash House"
        headline="Palm Springs' signature pool party festival. Compact routes, hotel-district traffic, and a nightlife-driven audience ready for brand discovery."
        dateRange="June & August"
        ctaLabel="Get Campaign Plan"
        ctaHref="/quote"
        secondaryCtaLabel="See Pricing"
        secondaryCtaHref="#pricing"
      />

      {/* Why This Event Matters */}
      <EventSection
        title="Why Splash House Converts"
        subtitle="A concentrated, high-energy audience in a compact geography. Every route loops through the action."
      >
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Hotel,
              title: "Hotel-Heavy Traffic",
              text: "Splash House centers around Palm Springs' iconic hotels. Attendees move between venues, pools, and after-parties — your billboard is on every route they take.",
            },
            {
              icon: Moon,
              title: "Nightlife Audience",
              text: "The party runs day and night. Evening routes capture a social, high-spending audience primed for brand engagement during after-hours events.",
            },
            {
              icon: PartyPopper,
              title: "Compact Impact",
              text: "Palm Springs' tight geography means higher frequency per impression. Your brand gets seen multiple times by the same audience — building instant recognition.",
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

      {/* BrightPath Strategy */}
      <EventSection
        title="The BrightPath Strategy"
        subtitle="Tight routes. High frequency. Premium execution built for Palm Springs' unique festival geography."
        dark
      >
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              icon: Route,
              title: "Route Positioning",
              text: "Deployment along Palm Canyon Drive, hotel districts, and key resort corridors. Routes are designed around Splash House's multi-venue footprint.",
            },
            {
              icon: Clock,
              title: "Visibility Windows",
              text: "Daytime pool party coverage and evening after-party routes. Your brand transitions seamlessly from sun to nightlife — always in view.",
            },
            {
              icon: Eye,
              title: "Execution Logic",
              text: "Compact loop routes deliver high-frequency impressions. LED billboards circulate through the festival zone continuously, maximizing repeat exposure.",
            },
            {
              icon: Crown,
              title: "Market Control",
              text: "Splash House's intimate scale means fewer competing messages. Your campaign stands out in a focused environment where attention is concentrated.",
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

      {/* Campaign Assets */}
      <EventSection title="Campaign Resources" subtitle="Explore the Splash House campaign package and plan your summer activation.">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: FileText, label: "View Media Kit", href: "/quote" },
            { icon: DollarSign, label: "See Pricing", href: "#pricing" },
            { icon: ClipboardList, label: "Review Campaign Plan", href: "/quote" },
            { icon: Users, label: "See Execution Strategy", href: "/quote" },
          ].map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="luxury-card rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-gold-glow transition-shadow duration-300"
            >
              <item.icon className="h-8 w-8 text-gold-base mb-4" />
              <span className="text-text-light font-semibold">{item.label}</span>
            </Link>
          ))}
        </div>
      </EventSection>

      {/* Who This Is For */}
      <EventSection title="Who This Is For" dark>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            "Beverage and lifestyle brands",
            "Hotels and resort properties",
            "Nightlife and entertainment venues",
            "Fashion and beauty brands",
          ].map((item) => (
            <div key={item} className="luxury-card rounded-2xl p-6 text-center">
              <p className="text-text-light font-semibold">{item}</p>
            </div>
          ))}
        </div>
      </EventSection>

      {/* Where You'll Be Seen */}
      <EventSection title="Where You'll Be Seen" subtitle="Compact, high-frequency routes through Palm Springs' most active zones.">
        <div className="grid sm:grid-cols-2 gap-6">
          {[
            "Palm Canyon Drive — the main drag",
            "Hotel district loops between venues",
            "Nightlife corridors and after-party routes",
            "Resort-adjacent streets in downtown Palm Springs",
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
            { stat: "High Freq", label: "Multiple impressions per attendee" },
            { stat: "Day + Night", label: "Pool party to after-party coverage" },
            { stat: "Compact", label: "Tight geography = concentrated reach" },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <p className="text-gold-base text-4xl font-bold mb-2">{item.stat}</p>
              <p className="text-text-mid">{item.label}</p>
            </div>
          ))}
        </div>
      </EventSection>

      {/* Limited Availability */}
      <EventSection title="Limited Availability" subtitle="Splash House runs twice a summer. Campaign slots for each weekend are strictly limited.">
        <div className="luxury-card rounded-2xl p-8 text-center">
          <p className="text-text-light text-lg font-semibold mb-4">Summer fills up fast. Reserve your Splash House campaign now.</p>
          <Link href="/quote" className="luxury-button px-8 py-4 rounded-lg font-semibold inline-block">
            Check Availability
          </Link>
        </div>
      </EventSection>

      {/* Pricing */}
      <section id="pricing" className="py-20 md:py-28 bg-black-panel">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-text-light mb-4" style={{ fontFamily: "var(--font-heading)" }}>
            Splash House Campaign Positioning
          </h2>
          <p className="text-text-mid text-lg max-w-2xl mx-auto mb-12">
            Summer festival campaigns built for Palm Springs' most iconic pool party experience.
          </p>
          <div className="gold-divider mx-auto mb-12" />

          <div className="luxury-card rounded-2xl p-10">
            <p className="text-gold-base font-semibold tracking-widest uppercase text-sm mb-2">Premium Campaign</p>
            <h3 className="text-2xl font-bold text-text-light mb-4" style={{ fontFamily: "var(--font-heading)" }}>
              Splash House — Weekend Package
            </h3>
            <ul className="text-text-mid space-y-3 mb-8 max-w-md mx-auto text-left">
              <li className="flex items-start gap-3">
                <span className="text-gold-base mt-1">&#10003;</span>
                Weekend LED mobile billboard deployment
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold-base mt-1">&#10003;</span>
                Hotel district and nightlife route coverage
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold-base mt-1">&#10003;</span>
                Day and evening visibility scheduling
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold-base mt-1">&#10003;</span>
                Post-event visibility report
              </li>
            </ul>
            <Link href="/quote" className="luxury-button px-8 py-4 rounded-lg font-semibold inline-block">
              Request Quote
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <EventCTA
        headline="Make a Splash This Summer"
        subtext="Splash House is where brands meet their audience in the most fun, high-energy environment in the desert. Secure your campaign before summer fills up."
        primaryLabel="Get My Campaign Plan"
      />
    </div>
  );
}

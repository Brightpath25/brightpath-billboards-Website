import type { Metadata } from "next";
import Link from "next/link";
import EventHero from "@/components/events/EventHero";
import EventSection from "@/components/events/EventSection";
import EventCTA from "@/components/events/EventCTA";
import { Eye, Route, Clock, Crown, FileText, DollarSign, ClipboardList, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Coachella Weekend 1 Campaigns | BrightPath Billboards",
  description:
    "Premium mobile billboard campaigns for Coachella Weekend 1. Own the road during the biggest cultural event in the Coachella Valley.",
};

export default function CoachellaWeekend1Page() {
  return (
    <div className="min-h-screen bg-black-hero">
      <EventHero
        title="Coachella Weekend 1"
        headline="The desert's biggest stage is set. Your brand takes the road before anyone else. Premium positioning, maximum impact, limited inventory."
        dateRange="April — Weekend 1"
        ctaLabel="Get Campaign Plan"
        ctaHref="/quote"
        secondaryCtaLabel="See Pricing"
        secondaryCtaHref="#pricing"
      />

      {/* Why This Event Matters */}
      <EventSection
        title="Why Weekend 1 Matters"
        subtitle="The opening weekend sets the tone. First impressions dominate, and the brands that show up first get remembered."
      >
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Eye,
              title: "Peak Audience Volume",
              text: "Weekend 1 draws the largest influx of attendees, influencers, and media. Traffic corridors are packed with high-value impressions from Thursday through Monday.",
            },
            {
              icon: Route,
              title: "Unmatched Traffic Flow",
              text: "The I-10 corridor, Highway 111, and local routes become high-density visibility channels. Every mile is a branding opportunity.",
            },
            {
              icon: Crown,
              title: "Premium Brand Positioning",
              text: "The brands that activate during Weekend 1 are seen as leaders. Early presence signals authority, relevance, and market control.",
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
        subtitle="Every route is mapped. Every visibility window is optimized. This is controlled attention at scale."
        dark
      >
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              icon: Route,
              title: "Route Positioning",
              text: "Strategic deployment along I-10 entry corridors, Highway 111, and festival-adjacent routes. Your brand meets the audience where they are — on the road.",
            },
            {
              icon: Clock,
              title: "Visibility Windows",
              text: "Campaigns are timed to peak arrival and departure windows — Thursday morning through Monday evening — capturing every wave of traffic.",
            },
            {
              icon: Eye,
              title: "Execution Logic",
              text: "LED mobile billboards run continuous loops through the highest-traffic zones. No static placement. No wasted impressions. Every pass counts.",
            },
            {
              icon: Crown,
              title: "Market Control",
              text: "Limited inventory ensures exclusivity. When you lock in a Weekend 1 campaign, you own your category on the road. No competing messages.",
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
      <EventSection title="Campaign Resources" subtitle="Everything you need to evaluate, plan, and execute your Weekend 1 campaign.">
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
            "Brands launching during festival season",
            "Agencies running multi-channel campaigns",
            "Hospitality and nightlife businesses",
            "Sponsors seeking road-level visibility",
          ].map((item) => (
            <div key={item} className="luxury-card rounded-2xl p-6 text-center">
              <p className="text-text-light font-semibold">{item}</p>
            </div>
          ))}
        </div>
      </EventSection>

      {/* Where You'll Be Seen */}
      <EventSection title="Where You'll Be Seen" subtitle="Your brand on the highest-traffic corridors during Coachella Weekend 1.">
        <div className="grid sm:grid-cols-2 gap-6">
          {[
            "I-10 corridor — primary festival entry from LA and beyond",
            "Highway 111 — the main artery through the Coachella Valley",
            "Monroe Street & festival-adjacent routes",
            "Hotel and resort corridors in Indio and Palm Desert",
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
            { stat: "250K+", label: "Estimated impressions per weekend" },
            { stat: "4 Days", label: "Continuous route deployment" },
            { stat: "100%", label: "Peak-traffic corridor coverage" },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <p className="text-gold-base text-4xl font-bold mb-2">{item.stat}</p>
              <p className="text-text-mid">{item.label}</p>
            </div>
          ))}
        </div>
      </EventSection>

      {/* Limited Availability */}
      <EventSection title="Limited Availability" subtitle="Weekend 1 inventory is capped to maintain exclusivity. Once slots are filled, they're gone.">
        <div className="luxury-card rounded-2xl p-8 text-center">
          <p className="text-text-light text-lg font-semibold mb-4">Campaign slots are limited to protect your brand&apos;s visibility.</p>
          <Link href="/quote" className="luxury-button px-8 py-4 rounded-lg font-semibold inline-block">
            Check Availability
          </Link>
        </div>
      </EventSection>

      {/* Pricing */}
      <section id="pricing" className="py-20 md:py-28 bg-black-panel">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-text-light mb-4" style={{ fontFamily: "var(--font-heading)" }}>
            Weekend 1 Campaign Positioning
          </h2>
          <p className="text-text-mid text-lg max-w-2xl mx-auto mb-12">
            Premium campaigns built for maximum visibility during the highest-traffic weekend of the year.
          </p>
          <div className="gold-divider mx-auto mb-12" />

          <div className="luxury-card rounded-2xl p-10">
            <p className="text-gold-base font-semibold tracking-widest uppercase text-sm mb-2">Premium Campaign</p>
            <h3 className="text-2xl font-bold text-text-light mb-4" style={{ fontFamily: "var(--font-heading)" }}>
              Weekend 1 — Full Route Package
            </h3>
            <ul className="text-text-mid space-y-3 mb-8 max-w-md mx-auto text-left">
              <li className="flex items-start gap-3">
                <span className="text-gold-base mt-1">&#10003;</span>
                Full-day LED mobile billboard deployment
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold-base mt-1">&#10003;</span>
                Strategic route coverage across peak corridors
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold-base mt-1">&#10003;</span>
                Campaign creative consultation
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold-base mt-1">&#10003;</span>
                Post-campaign visibility report
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
        headline="Secure Your Weekend 1 Position"
        subtext="Limited inventory. Premium routes. The biggest weekend in the desert is your biggest branding opportunity. Lock it in."
      />
    </div>
  );
}

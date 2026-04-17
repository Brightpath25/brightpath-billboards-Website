import type { Metadata } from "next";
import Link from "next/link";
import EventHero from "@/components/events/EventHero";
import EventSection from "@/components/events/EventSection";
import EventCTA from "@/components/events/EventCTA";
import { Eye, Route, Clock, Crown, FileText, DollarSign, ClipboardList, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Coachella Weekend 1 Campaigns | BrightPath Billboards",
  description:
    "Own the attention during Coachella Weekend 1. Position your brand inside the highest traffic movement of the year. April 10–12, 2026 in Indio, California.",
};

export default function CoachellaWeekend1Page() {
  return (
    <div className="min-h-screen bg-black-hero">
      <EventHero
        title="Own the Attention During Coachella Weekend 1"
        headline="April 10–12, 2026 · Indio, California. Position your brand inside the highest traffic movement of the year. This is not ad space. This is controlled visibility across the routes every attendee takes."
        dateRange="April 10–12, 2026"
        ctaLabel="Get My Campaign Plan"
        ctaHref="/quote"
        secondaryCtaLabel="Call Now (760) 385-8989"
        secondaryCtaHref="tel:7603858989"
      />

      {/* Why This Event Matters */}
      <EventSection
        title="Why This Event Matters"
        subtitle="Coachella Weekend 1 is the peak of attention in the Coachella Valley. This is where brands get seen first. And first matters."
      >
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Eye,
              title: "First Wave Impact",
              text: "First wave of attendees, media, and influencers. Highest energy and highest movement volume of the entire festival season.",
            },
            {
              icon: Route,
              title: "Full Capacity Movement",
              text: "Hotels, roads, and retail zones operating at full capacity. Constant inflow and outflow from morning to night.",
            },
            {
              icon: Crown,
              title: "First Mover Advantage",
              text: "The brands that show up Weekend 1 get seen first. First impressions drive recall, recognition, and response.",
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

      {/* Weekend 1 Positioning */}
      <EventSection
        title="Weekend 1 Positioning"
        subtitle="Weekend 1 is the moment. Weekend 2 is refined. Weekend 1 is explosive."
        dark
      >
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              icon: Users,
              title: "More First-Time Attendees",
              text: "Higher volume of first-time visitors discovering the valley, your brand, and the experience for the first time.",
            },
            {
              icon: Eye,
              title: "Higher Social Media Activity",
              text: "Weekend 1 generates the most organic content, shares, and buzz across every platform.",
            },
            {
              icon: Crown,
              title: "More Spontaneous Decisions",
              text: "First-weekend energy drives impulse action. Attendees are open, exploring, and spending.",
            },
            {
              icon: Route,
              title: "More Brand Discovery",
              text: "Fresh eyes on every route. Your brand reaches audiences before anyone else has their attention.",
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

      {/* BrightPath Strategy */}
      <EventSection
        title="BrightPath Strategy"
        subtitle="We do not sit in one place. We move with the audience. Your brand is seen repeatedly throughout the day."
      >
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              icon: Clock,
              title: "Morning",
              text: "Hotel zones, arrivals, commuter routes. Capturing early movement as the day begins.",
            },
            {
              icon: Route,
              title: "Midday",
              text: "Retail corridors, restaurants, shopping zones. High foot traffic and decision-making hours.",
            },
            {
              icon: Eye,
              title: "Evening",
              text: "Festival entry routes, rideshare zones, nightlife. Peak energy and peak visibility.",
            },
            {
              icon: Crown,
              title: "Night",
              text: "Exit traffic, late-night movement, return flow. Final impressions that close the loop.",
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

      {/* Campaign Resources */}
      <EventSection title="Campaign Resources" subtitle="Everything included in your Weekend 1 activation." dark>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: Route, label: "Route Coverage Execution" },
            { icon: Clock, label: "Daily Campaign Operation (8 hours)" },
            { icon: ClipboardList, label: "GPS Route Tracking" },
            { icon: Eye, label: "Photo and Video Proof" },
            { icon: FileText, label: "Campaign Recap Report" },
            { icon: Crown, label: "Visibility Summary" },
          ].map((item) => (
            <div
              key={item.label}
              className="luxury-card rounded-2xl p-6 flex flex-col items-center text-center"
            >
              <item.icon className="h-8 w-8 text-gold-base mb-4" />
              <span className="text-text-light font-semibold">{item.label}</span>
            </div>
          ))}
        </div>
      </EventSection>

      {/* Who This Is For */}
      <EventSection title="Who This Is For">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Events and nightlife activations",
            "Restaurants and hospitality groups",
            "Retail brands targeting festival traffic",
            "Dispensaries and delivery services",
            "National brands testing local impact",
            "Agencies activating during Coachella",
          ].map((item) => (
            <div key={item} className="luxury-card rounded-2xl p-6 text-center">
              <p className="text-text-light font-semibold">{item}</p>
            </div>
          ))}
        </div>
      </EventSection>

      {/* Where You'll Be Seen */}
      <EventSection title="Where You'll Be Seen" subtitle="Your brand on the highest-traffic corridors during Coachella Weekend 1." dark>
        <div className="grid sm:grid-cols-2 gap-6">
          {[
            "Highway 111 corridors",
            "Washington Street access routes",
            "Jefferson and Monroe intersections",
            "Festival entry and exit routes",
            "Shuttle pickup and drop zones",
            "Hotel and resort clusters",
            "Palm Springs nightlife zones",
          ].map((item) => (
            <div key={item} className="flex items-start gap-3">
              <span className="text-gold-base mt-1 shrink-0">&#10003;</span>
              <p className="text-text-mid">{item}</p>
            </div>
          ))}
        </div>
      </EventSection>

      {/* Expected Campaign Impact */}
      <EventSection title="Expected Campaign Impact">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { stat: "120K–180K", label: "Daily impressions" },
            { stat: "6–12s", label: "Dwell time in key zones" },
            { stat: "Multi-Route", label: "Repeated exposure across routes" },
            { stat: "High-Intent", label: "Audience in transit and decision mode" },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <p className="text-gold-base text-4xl font-bold mb-2">{item.stat}</p>
              <p className="text-text-mid">{item.label}</p>
            </div>
          ))}
        </div>
      </EventSection>

      {/* Limited Availability */}
      <EventSection title="Limited Availability" subtitle="Only a limited number of brands are placed per weekend. Once routes are filled, access is closed." dark>
        <div className="luxury-card rounded-2xl p-8 text-center">
          <p className="text-text-light text-lg font-semibold mb-4">This is controlled exposure.</p>
          <Link href="/quote" className="luxury-button px-8 py-4 rounded-lg font-semibold inline-block">
            Check Availability
          </Link>
        </div>
      </EventSection>

      {/* Pricing */}
      <section id="pricing" className="py-20 md:py-28 bg-black-panel">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-text-light mb-4" style={{ fontFamily: "var(--font-heading)" }}>
            Weekend 1 Pricing
          </h2>
          <p className="text-text-mid text-lg max-w-2xl mx-auto mb-12">
            Limited brand placements per campaign.
          </p>
          <div className="gold-divider mx-auto mb-12" />

          <div className="grid md:grid-cols-2 gap-8">
            <div className="luxury-card rounded-2xl p-10">
              <p className="text-gold-base font-semibold tracking-widest uppercase text-sm mb-2">Single Weekend</p>
              <h3 className="text-2xl font-bold text-text-light mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                Single Weekend Activation
              </h3>
              <p className="text-gold-base text-4xl font-bold mb-4">$2,500</p>
              <p className="text-text-mid mb-8">2 days of execution</p>
              <a href="https://buy.stripe.com/6oUcN6adt0xtbVs8Cc5Vu05" target="_blank" rel="noopener noreferrer" className="luxury-button px-8 py-4 rounded-lg font-semibold inline-block">
                Book Coachella Weekend 1
              </a>
            </div>
            <div className="luxury-card rounded-2xl p-10">
              <p className="text-gold-base font-semibold tracking-widest uppercase text-sm mb-2">Full Coverage</p>
              <h3 className="text-2xl font-bold text-text-light mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                Full Weekend Coverage
              </h3>
              <p className="text-gold-base text-4xl font-bold mb-4">$5,000</p>
              <p className="text-text-mid mb-8">Complete weekend activation</p>
              <a href="https://buy.stripe.com/bJe3cwfxN5RN0cK9Gg5Vu08" target="_blank" rel="noopener noreferrer" className="luxury-button px-8 py-4 rounded-lg font-semibold inline-block">
                Book Full Coachella Coverage
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <EventCTA
        headline="Secure Your Visibility Before Weekend 1 Begins"
        subtext="Be present where attention is already moving."
        primaryLabel="Get My Campaign Plan"
        primaryHref="/quote"
      />
    </div>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import EventHero from "@/components/events/EventHero";
import EventSection from "@/components/events/EventSection";
import EventCTA from "@/components/events/EventCTA";
import {
  MapPin,
  Building2,
  ShoppingBag,
  Monitor,
  UtensilsCrossed,
  Sun,
  Moon,
  Clock,
  CalendarDays,
  Target,
  ShieldCheck,
  Repeat,
  Users,
  TrendingUp,
  BarChart3,
  QrCode,
  Phone,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Off-Season Advertising Strategy | BrightPath Billboards",
  description:
    "Launch a 3-month campaign designed for visibility, recall, and measurable results across the Coachella Valley. Dominate when competitors pull back.",
};

export default function OffSeasonPage() {
  return (
    <div className="min-h-screen bg-black-hero">
      {/* HERO */}
      <EventHero
        title="Attention does not disappear. It moves."
        headline="After festival season, the Coachella Valley shifts into controlled, high-intent environments where brands win through consistency, not noise."
        dateRange="3-Month Campaign — May through September"
        ctaLabel="Get My Campaign Plan"
        ctaHref="/quote"
        secondaryCtaLabel="Check Availability"
        secondaryCtaHref="/quote"
      />

      {/* Hero support content below the shared component */}
      <section className="bg-black-hero pb-16 -mt-8">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <p className="text-text-mid text-lg mb-6 leading-relaxed">
            Launch a 3-month campaign designed for visibility, recall, and measurable results across the valley.
          </p>
          <p className="text-gold-base font-semibold text-sm tracking-wide mb-8">
            We typically respond within minutes during business hours.
          </p>
          <a
            href="tel:7603858989"
            className="inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold rounded-lg border border-gold-base/30 text-gold-highlight hover:bg-gold-base/10 transition-all duration-300"
          >
            <Phone className="h-5 w-5" />
            Call Now (760) 385-8989
          </a>
        </div>
      </section>

      {/* SECTION 2 — The Market Doesn't Slow Down */}
      <EventSection
        title="The Market Doesn't Slow Down. It Refocuses."
        dark
      >
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              icon: TrendingUp,
              title: "Traffic Shifts, Not Disappears",
              text: "Visitors leave, but local movement returns. Daily routines, commuting, dining, and events continue across the valley.",
            },
            {
              icon: Target,
              title: "Lower Volume, Higher Intent",
              text: "Fewer distractions means your message reaches people who are actually making decisions.",
            },
            {
              icon: ShieldCheck,
              title: "Less Competition",
              text: "Most brands pull back after festival season. That creates a rare window to dominate visibility.",
            },
            {
              icon: Monitor,
              title: "Controlled Attention",
              text: "Indoor environments, hotels, and repeat routes allow for consistent, uninterrupted exposure.",
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

      {/* SECTION 3 — Where Attention Moves After Festival Season */}
      <EventSection
        title="Where Attention Moves After Festival Season"
      >
        <div className="space-y-8">
          {[
            {
              month: "May",
              label: "Transition Window",
              text: "Post-festival traffic shifts into hotels, dining, and everyday movement patterns. The audience changes, but opportunity increases.",
            },
            {
              month: "June",
              label: "Indoor + Entertainment Driven",
              text: "Concerts, arena events, and indoor environments create high-value audience concentration and controlled exposure.",
            },
            {
              month: "July",
              label: "Local + Holiday Energy",
              text: "4th of July events, community gatherings, and strong local traffic create consistent daily visibility.",
            },
            {
              month: "August",
              label: "Summer Peak Events",
              text: "Splash House, hotel-based experiences, and nightlife traffic drive younger, high-energy audiences.",
            },
            {
              month: "September",
              label: "Targeted Dominance",
              text: "Smaller, niche events with highly focused audiences and minimal competition.",
            },
          ].map((item) => (
            <div key={item.month} className="luxury-card rounded-2xl p-8">
              <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                <span className="text-gold-base font-bold text-lg tracking-wide shrink-0 w-28">
                  {item.month}
                </span>
                <div>
                  <h3 className="text-lg font-bold text-text-light mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                    {item.label}
                  </h3>
                  <p className="text-text-mid leading-relaxed">{item.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </EventSection>

      {/* SECTION 4 — Positioned Inside Real Movement */}
      <EventSection
        title="Positioned Inside Real Movement"
        dark
      >
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              icon: Building2,
              title: "Hotels & Resorts",
              text: "High dwell time environments where guests relax, plan, and make decisions.",
            },
            {
              icon: ShoppingBag,
              title: "Retail Corridors",
              text: "Direct exposure at key decision points where spending happens.",
            },
            {
              icon: Monitor,
              title: "Indoor Venues",
              text: "Controlled visibility with no algorithm, no competition, and repeat exposure.",
            },
            {
              icon: UtensilsCrossed,
              title: "Dining & Nightlife Zones",
              text: "Evening traffic with engaged audiences in social, high-energy environments.",
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

      {/* SECTION 5 — Built for Consistency, Not Guesswork */}
      <EventSection
        title="Built for Consistency, Not Guesswork"
      >
        <div className="grid md:grid-cols-2 gap-12">
          {/* Daily Strategy */}
          <div>
            <h3 className="text-xl font-bold text-text-light mb-6" style={{ fontFamily: "var(--font-heading)" }}>
              Daily Strategy
            </h3>
            <div className="space-y-6">
              {[
                {
                  icon: Sun,
                  title: "Morning — Commuter & Grocery Traffic",
                  text: "High-frequency movement across established corridors.",
                },
                {
                  icon: Clock,
                  title: "Midday — Repositioning & Indoor Zones",
                  text: "Focus shifts to indoor traffic, retail, and shaded environments.",
                },
                {
                  icon: Moon,
                  title: "Evening — Dining, Events & Nightlife",
                  text: "Peak engagement in controlled environments where people stay longer.",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-gold-base/10 flex items-center justify-center">
                    <item.icon className="h-5 w-5 text-gold-base" />
                  </div>
                  <div>
                    <h4 className="text-text-light font-semibold mb-1">{item.title}</h4>
                    <p className="text-text-mid text-sm leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Weekly Strategy */}
          <div>
            <h3 className="text-xl font-bold text-text-light mb-6" style={{ fontFamily: "var(--font-heading)" }}>
              Weekly Strategy
            </h3>
            <div className="space-y-6">
              {[
                {
                  icon: CalendarDays,
                  title: "Friday — Inbound Traffic",
                  text: "Weekend visitors and hotel check-ins increase volume.",
                },
                {
                  icon: Users,
                  title: "Saturday — Peak Activity",
                  text: "Maximum audience density across all active zones.",
                },
                {
                  icon: MapPin,
                  title: "Sunday — Outbound Traffic",
                  text: "Guests depart, capturing final impressions.",
                },
                {
                  icon: Repeat,
                  title: "Midweek — Local Dominance",
                  text: "Lower volume, cleaner visibility, stronger repetition.",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-gold-base/10 flex items-center justify-center">
                    <item.icon className="h-5 w-5 text-gold-base" />
                  </div>
                  <div>
                    <h4 className="text-text-light font-semibold mb-1">{item.title}</h4>
                    <p className="text-text-mid text-sm leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </EventSection>

      {/* SECTION 6 — Why Brands Win in the Off-Season */}
      <EventSection
        title="Why Brands Win in the Off-Season"
        dark
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: Target,
              title: "Higher Intent Audience",
              text: "People are moving with purpose, not browsing.",
            },
            {
              icon: ShieldCheck,
              title: "Less Competition",
              text: "Your brand stands out instead of blending in.",
            },
            {
              icon: Monitor,
              title: "Controlled Visibility",
              text: "No algorithm. No auction. Your placement is guaranteed.",
            },
            {
              icon: Repeat,
              title: "Repeat Exposure",
              text: "Same routes. Same audiences. Daily repetition builds recall.",
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

      {/* SECTION 7 — Founding Campaign Access (Pricing) */}
      <section id="pricing" className="py-20 md:py-28 bg-black-hero">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-text-light mb-4" style={{ fontFamily: "var(--font-heading)" }}>
              Founding Campaign Access
            </h2>
            <div className="gold-divider mx-auto mt-6" />
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-14">
            {/* Founding Rate */}
            <div className="luxury-card rounded-2xl p-10 text-center border border-gold-base/20">
              <p className="text-gold-base font-semibold tracking-widest uppercase text-sm mb-2">Founding Rate (Limited)</p>
              <p className="text-4xl font-bold text-text-light mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                $5,000<span className="text-lg text-text-mid font-normal"> / month</span>
              </p>
              <p className="text-text-mid text-sm">3-month commitment required</p>
            </div>

            {/* Standard Rate */}
            <div className="luxury-card rounded-2xl p-10 text-center">
              <p className="text-text-mid font-semibold tracking-widest uppercase text-sm mb-2">Standard Rate</p>
              <p className="text-4xl font-bold text-text-light mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                $7,500<span className="text-lg text-text-mid font-normal"> / month</span>
              </p>
              <p className="text-text-mid text-sm">Applies once founding spots are filled</p>
            </div>
          </div>

          {/* What's Included */}
          <div className="luxury-card rounded-2xl p-10 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-text-light mb-6 text-center" style={{ fontFamily: "var(--font-heading)" }}>
              What's Included
            </h3>
            <ul className="text-text-mid space-y-3">
              {[
                "Full route network access",
                "Indoor and outdoor coverage",
                "Consistent daily exposure",
                "GPS tracking verification",
                "Monthly performance review",
                "Dedicated campaign strategy",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-gold-base mt-1 shrink-0">&#10003;</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION 8 — Built for Brands That Think Long-Term */}
      <EventSection title="Built for Brands That Think Long-Term" dark>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Restaurants, retail, and hospitality brands",
            "Real estate and local service businesses",
            "Brands targeting both locals and visitors",
            "Advertisers who want consistency over one-time spikes",
            "Operators focused on market dominance, not short campaigns",
          ].map((item) => (
            <div key={item} className="luxury-card rounded-2xl p-6 text-center">
              <p className="text-text-light font-semibold">{item}</p>
            </div>
          ))}
        </div>
      </EventSection>

      {/* SECTION 9 — What This Produces */}
      <EventSection title="What This Produces">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: BarChart3,
              stat: "80K\u2013150K",
              label: "Daily Impressions",
              text: "Across active routes and zones",
            },
            {
              icon: MapPin,
              stat: "Foot Traffic",
              label: "Influence",
              text: "Direct exposure tied to physical locations",
            },
            {
              icon: TrendingUp,
              stat: "Brand Recall",
              label: "Growth",
              text: "Built through repetition, not one-time exposure",
            },
            {
              icon: QrCode,
              stat: "QR + Engagement",
              label: "Tracking",
              text: "Measurable interaction from real-world visibility",
            },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <item.icon className="h-10 w-10 text-gold-base mx-auto mb-4" />
              <p className="text-gold-base text-2xl font-bold mb-1">{item.stat}</p>
              <p className="text-text-light font-semibold mb-2">{item.label}</p>
              <p className="text-text-mid text-sm leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </EventSection>

      {/* SECTION 10 — Limited Founding Access */}
      <EventSection title="Limited Founding Access" dark>
        <div className="luxury-card rounded-2xl p-10 text-center max-w-2xl mx-auto">
          <p className="text-text-light text-lg leading-relaxed mb-6">
            Only a small number of campaigns are accepted each cycle.
          </p>
          <p className="text-text-mid leading-relaxed mb-8">
            Once founding spots are filled: pricing increases, availability becomes limited, and positioning advantage is lost.
          </p>
          <Link href="/quote" className="luxury-button px-8 py-4 rounded-lg font-semibold inline-block">
            Reserve Your Spot
          </Link>
        </div>
      </EventSection>

      {/* SECTION 11 — Final CTA */}
      <EventCTA
        headline="Secure your place in the network"
        subtext="3-month campaign built for real visibility, controlled attention, and measurable results."
        primaryLabel="Reserve Your Spot"
        primaryHref="/quote"
      />
    </div>
  );
}

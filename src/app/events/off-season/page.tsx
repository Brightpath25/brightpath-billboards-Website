import type { Metadata } from "next";
import Link from "next/link";
import EventHero from "@/components/events/EventHero";
import EventSection from "@/components/events/EventSection";
import EventCTA from "@/components/events/EventCTA";
import { Eye, Route, Clock, Crown, FileText, DollarSign, ClipboardList, Users, TrendingUp, BarChart3, Repeat } from "lucide-react";

export const metadata: Metadata = {
  title: "Off-Season Advertising Strategy | BrightPath Billboards",
  description:
    "Year-round mobile billboard campaigns with quarterly subscription pricing. Strategic visibility when competition drops and your brand owns the road.",
};

export default function OffSeasonPage() {
  return (
    <div className="min-h-screen bg-black-hero">
      <EventHero
        title="Off-Season Strategy"
        headline="When the festivals end, the smart brands keep moving. Year-round visibility at a fraction of peak-season rates — with the road entirely to yourself."
        dateRange="Year-Round — Quarterly Subscription"
        ctaLabel="Get Campaign Plan"
        ctaHref="/quote"
        secondaryCtaLabel="See Pricing"
        secondaryCtaHref="#pricing"
      />

      {/* Why This Matters */}
      <EventSection
        title="Why Off-Season Wins"
        subtitle="Lower competition. Lower cost. Higher recall. The brands that stay visible year-round build the deepest market presence."
      >
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: TrendingUp,
              title: "Lower Competition",
              text: "When event campaigns end, most brands disappear from the road. Your continued presence means undivided attention and uncontested visibility.",
            },
            {
              icon: BarChart3,
              title: "Cost Efficiency",
              text: "Off-season rates are significantly lower than peak event pricing. Quarterly subscriptions deliver consistent exposure without the premium surcharge.",
            },
            {
              icon: Repeat,
              title: "Compounding Recall",
              text: "Repeated exposure builds familiarity. Brands that maintain year-round visibility don't just get seen — they get remembered and chosen.",
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
        subtitle="Intelligent route planning. Consistent deployment. A long-term approach that compounds brand equity quarter after quarter."
        dark
      >
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              icon: Route,
              title: "Route Positioning",
              text: "Seasonal route optimization based on local traffic patterns, shopping corridors, and community event schedules. Your brand goes where the audience naturally flows.",
            },
            {
              icon: Clock,
              title: "Visibility Windows",
              text: "Flexible scheduling across weekdays and weekends. Campaigns adapt to seasonal traffic trends — holiday shopping, snowbird season, local events.",
            },
            {
              icon: Eye,
              title: "Execution Logic",
              text: "Consistent weekly deployments with rotating routes to maximize geographic coverage. No single route gets oversaturated — your brand stays fresh.",
            },
            {
              icon: Crown,
              title: "Market Control",
              text: "Quarterly subscriptions lock in your position. While competitors activate only during events, you maintain uninterrupted presence and brand authority.",
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
      <EventSection title="Campaign Resources" subtitle="Explore the off-season strategy and see how quarterly visibility compounds your market position.">
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
            "Brands building long-term market presence",
            "Businesses targeting snowbird season",
            "Real estate and hospitality firms",
            "Any brand that wants the road to itself",
          ].map((item) => (
            <div key={item} className="luxury-card rounded-2xl p-6 text-center">
              <p className="text-text-light font-semibold">{item}</p>
            </div>
          ))}
        </div>
      </EventSection>

      {/* Where You'll Be Seen */}
      <EventSection title="Where You'll Be Seen" subtitle="Rotating routes across the entire Coachella Valley — optimized by season.">
        <div className="grid sm:grid-cols-2 gap-6">
          {[
            "Highway 111 — full valley coverage",
            "El Paseo and shopping corridors",
            "Community event routes and local festivals",
            "Snowbird-heavy residential and resort areas",
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
            { stat: "52 Weeks", label: "Continuous brand presence" },
            { stat: "Lower CPM", label: "Fraction of peak-season cost" },
            { stat: "Zero Noise", label: "Uncontested road visibility" },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <p className="text-gold-base text-4xl font-bold mb-2">{item.stat}</p>
              <p className="text-text-mid">{item.label}</p>
            </div>
          ))}
        </div>
      </EventSection>

      {/* Limited Availability */}
      <EventSection title="Limited Availability" subtitle="Quarterly subscription slots are limited to maintain exclusivity per route.">
        <div className="luxury-card rounded-2xl p-8 text-center">
          <p className="text-text-light text-lg font-semibold mb-4">Lock in your quarterly rate before routes fill up.</p>
          <Link href="/quote" className="luxury-button px-8 py-4 rounded-lg font-semibold inline-block">
            Check Availability
          </Link>
        </div>
      </EventSection>

      {/* Pricing */}
      <section id="pricing" className="py-20 md:py-28 bg-black-panel">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-text-light mb-4" style={{ fontFamily: "var(--font-heading)" }}>
            Quarterly Subscription Positioning
          </h2>
          <p className="text-text-mid text-lg max-w-2xl mx-auto mb-12">
            Strategic, affordable, and built for brands that think long-term. Lock in quarterly visibility and compound your market presence.
          </p>
          <div className="gold-divider mx-auto mb-12" />

          <div className="luxury-card rounded-2xl p-10">
            <p className="text-gold-base font-semibold tracking-widest uppercase text-sm mb-2">Subscription</p>
            <h3 className="text-2xl font-bold text-text-light mb-4" style={{ fontFamily: "var(--font-heading)" }}>
              Quarterly Off-Season Package
            </h3>
            <ul className="text-text-mid space-y-3 mb-8 max-w-md mx-auto text-left">
              <li className="flex items-start gap-3">
                <span className="text-gold-base mt-1">&#10003;</span>
                Weekly LED mobile billboard deployments
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold-base mt-1">&#10003;</span>
                Rotating route coverage across key corridors
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold-base mt-1">&#10003;</span>
                Seasonal route optimization
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold-base mt-1">&#10003;</span>
                Quarterly performance reports
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold-base mt-1">&#10003;</span>
                Priority access to event campaign add-ons
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
        headline="Build Year-Round Visibility"
        subtext="The best brands don't disappear between events. Start your quarterly subscription and keep your message on the road every day."
        primaryLabel="Start My Subscription"
      />
    </div>
  );
}

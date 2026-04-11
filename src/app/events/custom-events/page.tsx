import type { Metadata } from "next";
import Link from "next/link";
import EventHero from "@/components/events/EventHero";
import EventSection from "@/components/events/EventSection";
import EventCTA from "@/components/events/EventCTA";
import { Eye, Route, Clock, Crown, FileText, DollarSign, ClipboardList, Users, Settings, Layers, CalendarCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Custom Event Campaigns | BrightPath Billboards",
  description:
    "Flexible, high-end mobile billboard campaigns for local festivals, private events, and one-off opportunities in the Coachella Valley.",
};

export default function CustomEventsPage() {
  return (
    <div className="min-h-screen bg-black-hero">
      <EventHero
        title="Custom & One-Off Events"
        headline="From local festivals to private activations, BrightPath builds flexible campaign packages tailored to your event, timeline, and goals. Premium execution — on your terms."
        dateRange="Flexible — On Demand"
        ctaLabel="Request Custom Campaign"
        ctaHref="/quote"
        secondaryCtaLabel="See How It Works"
        secondaryCtaHref="#strategy"
      />

      {/* Why Custom Campaigns */}
      <EventSection
        title="Why Custom Campaigns"
        subtitle="Not every opportunity fits a festival calendar. Custom campaigns give you the same premium execution, built around your specific event and audience."
      >
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Settings,
              title: "Fully Flexible",
              text: "Choose your dates, routes, and duration. BrightPath adapts to your event's footprint — whether it's a single day or a multi-week activation.",
            },
            {
              icon: Layers,
              title: "High-End Execution",
              text: "Every custom campaign gets the same premium treatment as our festival packages. LED mobile billboards, strategic routes, and professional campaign management.",
            },
            {
              icon: CalendarCheck,
              title: "Any Occasion",
              text: "Grand openings. Local festivals. Charity events. Product launches. Political campaigns. If there's an audience, BrightPath puts your brand in front of them.",
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
        id="strategy"
        title="How It Works"
        subtitle="Tell us your event. We build the campaign. Every detail is handled — from route planning to deployment."
        dark
      >
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              icon: Route,
              title: "Custom Route Planning",
              text: "We map routes specific to your event's location, audience flow, and surrounding traffic patterns. Every mile is intentional.",
            },
            {
              icon: Clock,
              title: "Flexible Scheduling",
              text: "Single-day activations, weekend campaigns, or multi-week deployments. Your campaign runs on your timeline with precision scheduling.",
            },
            {
              icon: Eye,
              title: "Professional Execution",
              text: "LED mobile billboards deployed with the same operational excellence as our festival campaigns. Creative consultation included with every package.",
            },
            {
              icon: Crown,
              title: "Dedicated Campaign Management",
              text: "A dedicated BrightPath campaign manager coordinates every detail — from creative review to route confirmation to post-campaign reporting.",
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
      <EventSection title="Campaign Resources" subtitle="Get the full picture on custom campaign options and start planning your activation.">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: FileText, label: "View Media Kit", href: "/quote" },
            { icon: DollarSign, label: "See Pricing", href: "/quote" },
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
            "Local businesses with event activations",
            "Political and advocacy campaigns",
            "Grand openings and product launches",
            "Charity events and community organizations",
          ].map((item) => (
            <div key={item} className="luxury-card rounded-2xl p-6 text-center">
              <p className="text-text-light font-semibold">{item}</p>
            </div>
          ))}
        </div>
      </EventSection>

      {/* Where You'll Be Seen */}
      <EventSection title="Where You'll Be Seen" subtitle="Routes built around your event's specific geography and audience flow.">
        <div className="grid sm:grid-cols-2 gap-6">
          {[
            "Custom routes mapped to your event location",
            "Surrounding traffic corridors and entry points",
            "High-foot-traffic zones near your venue",
            "Extended reach routes for pre-event awareness",
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
            { stat: "Targeted", label: "Routes built around your event" },
            { stat: "Flexible", label: "Single-day to multi-week options" },
            { stat: "Full Service", label: "Dedicated campaign manager included" },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <p className="text-gold-base text-4xl font-bold mb-2">{item.stat}</p>
              <p className="text-text-mid">{item.label}</p>
            </div>
          ))}
        </div>
      </EventSection>

      {/* Limited Availability */}
      <EventSection title="Limited Availability" subtitle="Custom campaigns are scheduled based on fleet availability. Secure your dates early.">
        <div className="luxury-card rounded-2xl p-8 text-center">
          <p className="text-text-light text-lg font-semibold mb-4">Fleet capacity is limited. Book your custom campaign window now.</p>
          <Link href="/quote" className="luxury-button px-8 py-4 rounded-lg font-semibold inline-block">
            Check Availability
          </Link>
        </div>
      </EventSection>

      {/* Pricing */}
      <section id="pricing" className="py-20 md:py-28 bg-black-panel">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-text-light mb-4" style={{ fontFamily: "var(--font-heading)" }}>
            Custom Campaign Pricing
          </h2>
          <p className="text-text-mid text-lg max-w-2xl mx-auto mb-12">
            Every event is different. Pricing is tailored to your campaign's scope, duration, and route requirements.
          </p>
          <div className="gold-divider mx-auto mb-12" />

          <div className="luxury-card rounded-2xl p-10">
            <p className="text-gold-base font-semibold tracking-widest uppercase text-sm mb-2">Custom Package</p>
            <h3 className="text-2xl font-bold text-text-light mb-4" style={{ fontFamily: "var(--font-heading)" }}>
              Built to Your Specifications
            </h3>
            <ul className="text-text-mid space-y-3 mb-8 max-w-md mx-auto text-left">
              <li className="flex items-start gap-3">
                <span className="text-gold-base mt-1">&#10003;</span>
                Custom route planning and deployment
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold-base mt-1">&#10003;</span>
                Flexible single-day or multi-week scheduling
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold-base mt-1">&#10003;</span>
                Campaign creative consultation
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold-base mt-1">&#10003;</span>
                Dedicated campaign manager
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold-base mt-1">&#10003;</span>
                Post-campaign visibility report
              </li>
            </ul>
            <Link href="/quote" className="luxury-button px-8 py-4 rounded-lg font-semibold inline-block">
              Request Custom Quote
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <EventCTA
        headline="Build Your Custom Campaign"
        subtext="Tell us about your event and we'll build a premium campaign package tailored to your goals, timeline, and audience."
        primaryLabel="Get My Campaign Plan"
      />
    </div>
  );
}

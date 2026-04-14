import type { Metadata } from "next";

import EventHero from "@/components/events/EventHero";
import EventSection from "@/components/events/EventSection";
import EventCTA from "@/components/events/EventCTA";
import { Eye, Route, Clock, Crown, FileText, DollarSign, ClipboardList, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Coachella Weekend 2 Campaigns | BrightPath Billboards",
  description:
    "Refine your visibility during Coachella Weekend 2. April 17–19, 2026 in Indio, California. Same massive audience, more controlled execution.",
};

export default function CoachellaWeekend2Page() {
  return (
    <div className="min-h-screen bg-black-hero">
      <EventHero
        title="Refine Your Visibility During Coachella Weekend 2"
        headline="April 17–19, 2026 · Indio, California. A more controlled, more focused version of the same massive audience. Weekend 2 delivers the same scale with more predictable movement and cleaner execution."
        dateRange="April 17–19, 2026"
        ctaLabel="Book Coachella Weekend 2"
        ctaHref="https://buy.stripe.com/5kQ6oI3P57ZVcZw3hS5Vu00"
        ctaExternal
        secondaryCtaLabel="Call Now (760) 385-8989"
        secondaryCtaHref="tel:7603858989"
      />

      {/* Why This Event Matters */}
      <EventSection
        title="Why This Event Matters"
        subtitle="Weekend 2 is where execution improves. This is where brands operate smarter."
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: Eye,
              title: "Same Scale",
              text: "Same lineup and same audience scale. The reach does not shrink.",
            },
            {
              icon: Route,
              title: "Predictable Movement",
              text: "More predictable movement patterns across all major routes and corridors.",
            },
            {
              icon: Crown,
              title: "Refined Operations",
              text: "More refined festival operations. Slightly less chaos, more consistency.",
            },
            {
              icon: Clock,
              title: "Smarter Execution",
              text: "Brands that activate Weekend 2 operate with more clarity and better data.",
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

      {/* Weekend 2 Positioning */}
      <EventSection
        title="Weekend 2 Positioning"
        subtitle="Weekend 2 is not slower. It is more efficient. Weekend 1 creates attention. Weekend 2 captures it more efficiently."
        dark
      >
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              icon: Users,
              title: "More Experienced Attendees",
              text: "Returning visitors who navigate with purpose and engage more intentionally.",
            },
            {
              icon: Route,
              title: "Better Navigation",
              text: "Better navigation across routes. Traffic flows are cleaner and more predictable.",
            },
            {
              icon: Clock,
              title: "Cleaner Traffic Flow",
              text: "Smoother movement across all corridors and access points throughout the day.",
            },
            {
              icon: Eye,
              title: "More Focused Behavior",
              text: "More focused audience behavior. Less noise, more signal for your brand.",
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
        subtitle="We adapt based on real data from Weekend 1. This is a more precise campaign, not just repetition."
      >
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              icon: Clock,
              title: "Morning",
              text: "Refined hotel and arrival targeting. Capturing optimized early movement patterns.",
            },
            {
              icon: Route,
              title: "Midday",
              text: "Optimized retail and dining routes. Data-driven positioning across high-traffic zones.",
            },
            {
              icon: Eye,
              title: "Evening",
              text: "Improved festival access positioning. Maximizing visibility at peak entry points.",
            },
            {
              icon: Crown,
              title: "Night",
              text: "Stronger exit flow capture and nightlife targeting. Closing the loop with precision.",
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

      {/* Where You'll Be Seen */}
      <EventSection title="Where You'll Be Seen" subtitle="Strategically positioned across known high-performance routes. These are validated routes, not guesses." dark>
        <div className="grid sm:grid-cols-2 gap-6">
          {[
            "Highway 111 corridors",
            "Washington Street access routes",
            "Jefferson and Monroe intersections",
            "Festival entry and exit routes",
            "Shuttle zones and rideshare hubs",
            "Hotel clusters and resort zones",
            "Palm Springs nightlife corridors",
          ].map((item) => (
            <div key={item} className="flex items-start gap-3">
              <span className="text-gold-base mt-1 shrink-0">&#10003;</span>
              <p className="text-text-mid">{item}</p>
            </div>
          ))}
        </div>
      </EventSection>

      {/* Who This Is For */}
      <EventSection title="Who This Is For" subtitle="Weekend 2 is built for brands that prioritize efficiency.">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Brands optimizing after Weekend 1 campaigns",
            "Agencies refining execution strategy",
            "Hospitality and nightlife operators",
            "Retail and service-based businesses",
            "Brands focused on ROI and performance",
          ].map((item) => (
            <div key={item} className="luxury-card rounded-2xl p-6 text-center">
              <p className="text-text-light font-semibold">{item}</p>
            </div>
          ))}
        </div>
      </EventSection>

      {/* Expected Campaign Impact */}
      <EventSection title="Expected Campaign Impact" subtitle="Weekend 2 delivers consistency and repeat exposure. This is where visibility becomes measurable." dark>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { stat: "120K–180K", label: "Daily impressions" },
            { stat: "Improved", label: "Dwell time across optimized routes" },
            { stat: "Repeated", label: "Exposure across high-performing zones" },
            { stat: "Consistent", label: "Audience behavior patterns" },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <p className="text-gold-base text-4xl font-bold mb-2">{item.stat}</p>
              <p className="text-text-mid">{item.label}</p>
            </div>
          ))}
        </div>
      </EventSection>

      {/* Campaign Resources */}
      <EventSection title="Campaign Resources" subtitle="Built on real-time optimization. This is not a first pass. This is refined execution.">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: Route, label: "Route Execution Based on Proven Performance" },
            { icon: Clock, label: "Daily Campaign Operation (8 hours)" },
            { icon: ClipboardList, label: "GPS Tracking Verification" },
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

      {/* Pricing */}
      <section id="pricing" className="py-20 md:py-28 bg-black-panel">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-text-light mb-4" style={{ fontFamily: "var(--font-heading)" }}>
            Weekend 2 Pricing
          </h2>
          <p className="text-text-mid text-lg max-w-2xl mx-auto mb-12">
            Weekend 2 access remains limited. Same scale. More refined delivery.
          </p>
          <div className="gold-divider mx-auto mb-12" />

          <div className="grid md:grid-cols-2 gap-8">
            <div className="luxury-card rounded-2xl p-10">
              <p className="text-gold-base font-semibold tracking-widest uppercase text-sm mb-2">Single Weekend</p>
              <h3 className="text-2xl font-bold text-text-light mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                Single Weekend Activation
              </h3>
              <p className="text-gold-base text-4xl font-bold mb-4">$2,500</p>
              <p className="text-text-mid mb-8">Weekend 2 activation</p>
              <a href="https://buy.stripe.com/5kQ6oI3P57ZVcZw3hS5Vu00" target="_blank" rel="noopener noreferrer" className="luxury-button px-8 py-4 rounded-lg font-semibold inline-block">
                Book Coachella Weekend 2
              </a>
              <p className="text-text-mid text-sm mt-4">Limited campaign availability. Placement is first come, first secured.</p>
            </div>
            <div className="luxury-card rounded-2xl p-10">
              <p className="text-gold-base font-semibold tracking-widest uppercase text-sm mb-2">Full Coverage</p>
              <h3 className="text-2xl font-bold text-text-light mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                Full Weekend Coverage
              </h3>
              <p className="text-gold-base text-4xl font-bold mb-4">$4,500</p>
              <p className="text-text-mid mb-8">Complete weekend activation</p>
              <a href="https://buy.stripe.com/5kQ6oI3P57ZVcZw3hS5Vu00" target="_blank" rel="noopener noreferrer" className="luxury-button px-8 py-4 rounded-lg font-semibold inline-block">
                Book Coachella Weekend 2
              </a>
              <p className="text-text-mid text-sm mt-4">Secure your campaign before Weekend 2 inventory is filled.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Limited Availability */}
      <EventSection title="Limited Availability" subtitle="Weekend 2 fills based on demand from Weekend 1 results. Brands that see results return quickly.">
        <div className="luxury-card rounded-2xl p-8 text-center">
          <p className="text-text-light text-lg font-semibold mb-4">Once routes are filled, access is closed.</p>
          <a href="https://buy.stripe.com/5kQ6oI3P57ZVcZw3hS5Vu00" target="_blank" rel="noopener noreferrer" className="luxury-button px-8 py-4 rounded-lg font-semibold inline-block">
            Secure Weekend 2 Placement
          </a>
        </div>
      </EventSection>

      {/* CTA */}
      <EventCTA
        headline="Lock Your Placement for Weekend 2"
        subtext="Secure your campaign before Weekend 2 inventory is filled. One weekend campaign buy. High traffic festival weekend. Limited placement availability."
        primaryLabel="Book Coachella Weekend 2"
        primaryHref="https://buy.stripe.com/5kQ6oI3P57ZVcZw3hS5Vu00"
        primaryExternal
        secondaryLabel="Reserve Campaign Placement"
        secondaryHref="https://buy.stripe.com/5kQ6oI3P57ZVcZw3hS5Vu00"
        secondaryExternal
      />
    </div>
  );
}

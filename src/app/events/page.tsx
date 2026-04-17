import type { Metadata } from "next";
import Link from "next/link";
import EventCard from "@/components/events/EventCard";
import EventCTA from "@/components/events/EventCTA";

export const metadata: Metadata = {
  title: "Event Campaigns | BrightPath Billboards",
  description:
    "Campaign-specific opportunities built for high-traffic visibility, event domination, and strategic market positioning across the Coachella Valley.",
};

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-black-hero">
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(227,176,75,0.08)_0%,transparent_70%)]" />

        <div className="relative z-10 container mx-auto px-4 py-32 text-center max-w-4xl">
          <div className="mb-8">
            <Link
              href="/"
              className="inline-block px-5 py-2 bg-transparent border border-gold-base/50 text-gold-base/90 rounded-xl text-sm font-semibold hover:bg-gold-base hover:text-black-hero transition-all duration-300"
            >
              ← Home
            </Link>
          </div>
          <p className="text-gold-base font-semibold tracking-widest uppercase text-sm mb-4">
            BrightPath Campaigns
          </p>
          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-text-light"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Event Campaigns
          </h1>
          <p className="text-lg md:text-xl text-text-mid max-w-2xl mx-auto leading-relaxed">
            Campaign-specific opportunities built for high-traffic visibility,
            event domination, and strategic market positioning across the
            Coachella Valley.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 bg-black-panel">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2
            className="text-2xl md:text-3xl font-bold text-text-light mb-6"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Built for Impact
          </h2>
          <p className="text-text-mid text-lg leading-relaxed">
            BrightPath builds event-specific campaign strategies with dedicated
            pricing, route execution, and campaign assets. Every event window is
            an opportunity to own the road, dominate the conversation, and
            position your brand in front of the audiences that matter most.
          </p>
          <div className="gold-divider mx-auto mt-8" />
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 md:py-28 bg-black-hero">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-14">
            <h2
              className="text-3xl md:text-4xl font-bold text-text-light mb-4"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              How It Works
            </h2>
            <p className="text-text-mid text-lg max-w-2xl mx-auto">
              Three steps. One goal. Your brand on the most valuable roads in the desert.
            </p>
            <div className="gold-divider mx-auto mt-6" />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Pick Your Event",
                text: "Choose the campaign window that fits your goals — festival weekends, off-season visibility, or a custom activation.",
              },
              {
                step: "02",
                title: "Get Your Plan",
                text: "We build a route strategy, timeline, and campaign package specific to your event. You review it. We refine it.",
              },
              {
                step: "03",
                title: "Own the Road",
                text: "LED mobile billboards deploy on your routes, on your schedule. You get visibility reports. Your brand gets seen.",
              },
            ].map((item) => (
              <div key={item.step} className="luxury-card rounded-2xl p-8 text-center">
                <p className="text-gold-base text-3xl font-bold mb-4">{item.step}</p>
                <h3
                  className="text-xl font-bold text-text-light mb-3"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {item.title}
                </h3>
                <p className="text-text-mid leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Cards */}
      <section className="py-20 md:py-28 bg-black-hero">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Coachella */}
            <EventCard
              title="Coachella Festival Domination"
              description="Two weekends. Hundreds of thousands of eyes. Premium route positioning during the biggest cultural event in the desert. Own the road when it matters most."
              timeframe="April — Two Weekends"
              href="/events/coachella-weekend-1"
              subLinks={[
                {
                  label: "Weekend 1 Campaign",
                  href: "/events/coachella-weekend-1",
                },
                {
                  label: "Weekend 2 Campaign",
                  href: "/events/coachella-weekend-2",
                },
              ]}
            />

            {/* Stagecoach */}
            <EventCard
              title="Stagecoach Takeover"
              description="Country music's premier festival brings a loyal, high-spending audience to the desert. Straightforward route domination with massive brand exposure."
              timeframe="Late April"
              href="/events/stagecoach"
            />

            {/* Off-Season */}
            <EventCard
              title="Off-Season Quarterly Subscription"
              description="Strategic year-round visibility when competition drops and your brand gets the road to itself. Consistent presence at a fraction of peak-season rates."
              timeframe="Year-Round — Quarterly"
              href="/events/off-season"
            />

            {/* Splash House */}
            <EventCard
              title="Splash House"
              description="Palm Springs' signature pool party festival. Compact routes, hotel-heavy traffic, and a nightlife-driven audience primed for brand discovery."
              timeframe="June & August"
              href="/events/splash-house"
            />
          </div>

          {/* Custom Events — Full Width */}
          <div className="mt-8">
            <EventCard
              title="One-Off & Custom Events"
              description="From local festivals to private events, BrightPath builds flexible campaign packages for any opportunity. High-end execution tailored to your timeline and goals."
              timeframe="Flexible — On Demand"
              href="/events/custom-events"
            />
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <EventCTA
        headline="Ready to Own the Road?"
        subtext="Explore our event campaigns or request a custom quote. Every route is an opportunity — let's make it yours."
        primaryLabel="Request a Quote"
        primaryHref="/quote"
      />
    </div>
  );
}

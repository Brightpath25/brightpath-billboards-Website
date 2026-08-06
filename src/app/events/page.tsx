import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
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
      <section className="relative isolate overflow-hidden border-b border-white/10 bg-[#070809]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_20%,rgba(227,176,75,0.14),transparent_30%),linear-gradient(115deg,#070809_0%,#11130f_56%,#080909_100%)]" />

        <div className="relative z-10 mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-24 lg:px-10">
          <div className="mb-7">
            <Link
              href="/"
              className="inline-flex items-center rounded-full border border-white/20 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#f4f1e8] transition-colors hover:border-[#e3b04b] hover:text-[#f7d382]"
            >
              Home
            </Link>
          </div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[#e3b04b]">
            BrightPath Campaigns
          </p>
          <h1
            className="max-w-3xl text-5xl font-semibold leading-[0.98] tracking-[-0.045em] text-[#f4f1e8] sm:text-6xl lg:text-8xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Event Campaigns
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-[#c9d0da] sm:text-lg">
            Campaign-specific opportunities built for high-traffic visibility,
            event domination, and strategic market positioning across the
            Coachella Valley.
          </p>
        </div>
      </section>

      {/* Featured Launch Card */}
      <section className="border-b border-white/[0.06] bg-[#070809] py-10 md:py-14">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
          <div className="border-l-2 border-[#e3b04b] bg-[#101210] p-6 md:p-8">
            <p className="text-gold-base mb-3 text-sm font-semibold uppercase tracking-widest">
              Public event. Limited campaign placement.
            </p>
            <h2
              className="mb-5 text-2xl font-bold text-text-light md:text-3xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              BrightPath Launch — Coachella Valley
            </h2>
            <Link
              href="/launch"
              className="inline-flex items-center gap-2 luxury-button rounded-xl px-8 py-4 font-semibold"
            >
              Secure Your Campaign
              <ArrowRight className="h-4 w-4" />
            </Link>
            <p className="mt-4 text-sm italic text-text-mid/70">
              Placement is assigned in order of completed campaigns
            </p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="border-b border-white/[0.06] bg-[#0f1110] py-14 md:py-18">
        <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
          <h2
            className="mb-5 text-2xl font-bold text-text-light md:text-3xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Built for Impact
          </h2>
          <p className="text-lg leading-relaxed text-text-mid">
            BrightPath builds event-specific campaign strategies with dedicated
            pricing, route execution, and campaign assets. Every event window is
            an opportunity to own the road, dominate the conversation, and
            position your brand in front of the audiences that matter most.
          </p>
          <div className="gold-divider mx-auto mt-6" />
        </div>
      </section>

      {/* How It Works */}
      <section className="border-b border-white/[0.06] bg-[#070809] py-14 md:py-20">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="mb-10 text-center md:mb-12">
            <h2
              className="mb-3 text-3xl font-bold text-text-light md:text-4xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              How It Works
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-text-mid">
              Three steps. One goal. Your brand on the most valuable roads in the desert.
            </p>
            <div className="gold-divider mx-auto mt-5" />
          </div>
          <div className="grid gap-5 md:grid-cols-3">
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
              <div key={item.step} className="border-t border-white/15 bg-[#101210] p-6 text-center md:p-7">
                <p className="mb-3 text-3xl font-bold text-gold-base">{item.step}</p>
                <h3
                  className="mb-3 text-xl font-bold text-text-light"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {item.title}
                </h3>
                <p className="leading-relaxed text-text-mid">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Cards */}
      <section className="bg-black-hero py-14 md:py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid gap-5 md:grid-cols-2">
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
          <div className="mt-5">
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

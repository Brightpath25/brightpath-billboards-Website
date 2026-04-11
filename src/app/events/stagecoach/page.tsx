import type { Metadata } from "next";
import Link from "next/link";
import EventHero from "@/components/events/EventHero";
import EventSection from "@/components/events/EventSection";
import EventCTA from "@/components/events/EventCTA";
import { Eye, Route, Clock, Crown, FileText, DollarSign, ClipboardList, Users, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Stagecoach Takeover | BrightPath Billboards",
  description:
    "Dominate the roads during Stagecoach with premium mobile billboard campaigns. Straightforward route execution for country music's biggest desert festival.",
};

export default function StagecoachPage() {
  return (
    <div className="min-h-screen bg-black-hero">
      <EventHero
        title="Stagecoach Takeover"
        headline="Country music's biggest festival meets the desert's most powerful mobile billboard network. No fluff. No noise. Just brand dominance on every route."
        dateRange="Late April"
        ctaLabel="Get Campaign Plan"
        ctaHref="/quote"
        secondaryCtaLabel="See Pricing"
        secondaryCtaHref="#pricing"
      />

      {/* Why This Event Matters */}
      <EventSection
        title="Why Stagecoach Delivers"
        subtitle="A loyal, high-spending audience that shows up year after year. Stagecoach attendees are brand-aware, engaged, and ready to act."
      >
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Users,
              title: "Loyal Audience",
              text: "Stagecoach draws a dedicated, returning crowd — attendees who plan trips, spend big, and pay attention to the brands around them.",
            },
            {
              icon: Route,
              title: "Concentrated Traffic",
              text: "The festival footprint funnels traffic through predictable, high-density corridors. Every route is a guaranteed visibility channel.",
            },
            {
              icon: Shield,
              title: "Brand Authority",
              text: "Stagecoach is straightforward country culture. Brands that show up with confidence and clarity earn immediate respect and recall.",
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
        subtitle="Rugged execution. Premium results. Every route mapped to Stagecoach traffic patterns."
        dark
      >
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              icon: Route,
              title: "Route Positioning",
              text: "Deployment along festival ingress and egress routes, Highway 111, and resort-adjacent corridors. Every truck is positioned where the crowd moves.",
            },
            {
              icon: Clock,
              title: "Visibility Windows",
              text: "Coverage from early arrival Thursday through final departure Sunday. Timed to peak traffic surges around shows and after-parties.",
            },
            {
              icon: Eye,
              title: "Execution Logic",
              text: "LED mobile billboards run continuous high-impact loops. Bold creative. Clear messaging. No distractions — just your brand and the open road.",
            },
            {
              icon: Crown,
              title: "Market Control",
              text: "Limited campaign slots ensure your message doesn't compete with clutter. Stagecoach campaigns are built for clear, dominant brand presence.",
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
      <EventSection title="Campaign Resources" subtitle="Review the Stagecoach campaign package and get your plan in motion.">
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
            "Country lifestyle and western brands",
            "Beverage and spirits companies",
            "Local and regional businesses",
            "Sponsors targeting loyal festival-goers",
          ].map((item) => (
            <div key={item} className="luxury-card rounded-2xl p-6 text-center">
              <p className="text-text-light font-semibold">{item}</p>
            </div>
          ))}
        </div>
      </EventSection>

      {/* Where You'll Be Seen */}
      <EventSection title="Where You'll Be Seen" subtitle="High-density corridors with predictable, concentrated traffic flow.">
        <div className="grid sm:grid-cols-2 gap-6">
          {[
            "Festival ingress and egress routes",
            "Highway 111 through Indio and La Quinta",
            "Resort and hotel corridors",
            "After-party and nightlife zones",
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
            { stat: "75K+", label: "Daily attendees on the road" },
            { stat: "3 Days", label: "Peak festival coverage" },
            { stat: "High Intent", label: "Loyal, brand-aware audience" },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <p className="text-gold-base text-4xl font-bold mb-2">{item.stat}</p>
              <p className="text-text-mid">{item.label}</p>
            </div>
          ))}
        </div>
      </EventSection>

      {/* Limited Availability */}
      <EventSection title="Limited Availability" subtitle="Stagecoach campaign slots are capped. Secure your position before the lineup drops.">
        <div className="luxury-card rounded-2xl p-8 text-center">
          <p className="text-text-light text-lg font-semibold mb-4">Limited routes available. First-come, first-served.</p>
          <Link href="/quote" className="luxury-button px-8 py-4 rounded-lg font-semibold inline-block">
            Check Availability
          </Link>
        </div>
      </EventSection>

      {/* Pricing */}
      <section id="pricing" className="py-20 md:py-28 bg-black-panel">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-text-light mb-4" style={{ fontFamily: "var(--font-heading)" }}>
            Stagecoach Campaign Positioning
          </h2>
          <p className="text-text-mid text-lg max-w-2xl mx-auto mb-12">
            No-nonsense campaigns built for a no-nonsense audience. Premium route coverage. Maximum impact.
          </p>
          <div className="gold-divider mx-auto mb-12" />

          <div className="luxury-card rounded-2xl p-10">
            <p className="text-gold-base font-semibold tracking-widest uppercase text-sm mb-2">Premium Campaign</p>
            <h3 className="text-2xl font-bold text-text-light mb-4" style={{ fontFamily: "var(--font-heading)" }}>
              Stagecoach — Full Route Package
            </h3>
            <ul className="text-text-mid space-y-3 mb-8 max-w-md mx-auto text-left">
              <li className="flex items-start gap-3">
                <span className="text-gold-base mt-1">&#10003;</span>
                Multi-day LED mobile billboard deployment
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold-base mt-1">&#10003;</span>
                Festival corridor route coverage
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold-base mt-1">&#10003;</span>
                Campaign creative consultation
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
        headline="Take Over Stagecoach"
        subtext="The roads are yours. Lock in your Stagecoach campaign and own every mile of the festival experience."
      />
    </div>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import EventHero from "@/components/events/EventHero";
import EventSection from "@/components/events/EventSection";
import EventCTA from "@/components/events/EventCTA";
import { Eye, Route, Clock, Crown, FileText, DollarSign, ClipboardList, Users, AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: "Coachella Weekend 2 Campaigns | BrightPath Billboards",
  description:
    "High-urgency mobile billboard campaigns for Coachella Weekend 2. Remaining visibility windows and premium route positioning in the Coachella Valley.",
};

export default function CoachellaWeekend2Page() {
  return (
    <div className="min-h-screen bg-black-hero">
      <EventHero
        title="Coachella Weekend 2"
        headline="The window is closing. Weekend 2 is your last chance to dominate the desert roads during Coachella. Remaining inventory is limited — act now."
        dateRange="April — Weekend 2"
        ctaLabel="Get Campaign Plan"
        ctaHref="/quote"
        secondaryCtaLabel="See Pricing"
        secondaryCtaHref="#pricing"
      />

      {/* Why This Event Matters */}
      <EventSection
        title="Why Weekend 2 Still Wins"
        subtitle="The audience is just as massive, and the brands that activate late capture the attention others left on the table."
      >
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Eye,
              title: "Sustained Audience Volume",
              text: "Weekend 2 delivers the same scale of attendees, with an audience that's more relaxed, more social, and more open to brand discovery.",
            },
            {
              icon: AlertTriangle,
              title: "Remaining Visibility",
              text: "Brands that missed Weekend 1 are scrambling. The ones that planned for Weekend 2 own the road with less competition and more impact per impression.",
            },
            {
              icon: Crown,
              title: "Close Strong",
              text: "Weekend 2 is the last word. Your brand becomes the final visual memory of the Coachella experience — and that impression sticks.",
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
        subtitle="Same precision. Same premium execution. Optimized for the closing weekend's unique traffic patterns."
        dark
      >
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              icon: Route,
              title: "Route Positioning",
              text: "Deployment along I-10 entry corridors, Highway 111, and festival-adjacent routes. Weekend 2 traffic patterns are mapped and targeted.",
            },
            {
              icon: Clock,
              title: "Visibility Windows",
              text: "Timed to Weekend 2's arrival and departure surges. Friday through Monday coverage ensures your brand is seen at every peak moment.",
            },
            {
              icon: Eye,
              title: "Execution Logic",
              text: "Continuous LED mobile billboard loops through high-density zones. Dynamic scheduling adapts to real-time traffic flow for maximum exposure.",
            },
            {
              icon: Crown,
              title: "Market Control",
              text: "With limited remaining inventory, Weekend 2 campaigns carry built-in exclusivity. Fewer brands on the road means more attention on yours.",
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
      <EventSection title="Campaign Resources" subtitle="Review your Weekend 2 options and get your campaign locked in before inventory runs out.">
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
            "Brands that missed Weekend 1",
            "Agencies doubling down on festival reach",
            "Hospitality and afterparty venues",
            "Closing-weekend activations",
          ].map((item) => (
            <div key={item} className="luxury-card rounded-2xl p-6 text-center">
              <p className="text-text-light font-semibold">{item}</p>
            </div>
          ))}
        </div>
      </EventSection>

      {/* Where You'll Be Seen */}
      <EventSection title="Where You'll Be Seen" subtitle="Closing weekend routes with the same scale and fewer competing brands.">
        <div className="grid sm:grid-cols-2 gap-6">
          {[
            "I-10 corridor — heavy return and arrival traffic",
            "Highway 111 — continuous valley-wide visibility",
            "Festival-adjacent routes in Indio",
            "Nightlife and resort corridors across the valley",
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
            { stat: "Less Noise", label: "Fewer competing brand messages" },
            { stat: "Last Word", label: "Final visual impression of Coachella" },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <p className="text-gold-base text-4xl font-bold mb-2">{item.stat}</p>
              <p className="text-text-mid">{item.label}</p>
            </div>
          ))}
        </div>
      </EventSection>

      {/* Limited Availability */}
      <EventSection title="Limited Availability" subtitle="Remaining Weekend 2 slots are filling fast. Once inventory is gone, it's gone.">
        <div className="luxury-card rounded-2xl p-8 text-center">
          <p className="text-text-light text-lg font-semibold mb-4">Final campaign slots for the closing weekend. Don&apos;t wait.</p>
          <Link href="/quote" className="luxury-button px-8 py-4 rounded-lg font-semibold inline-block">
            Check Availability
          </Link>
        </div>
      </EventSection>

      {/* Pricing */}
      <section id="pricing" className="py-20 md:py-28 bg-black-panel">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-text-light mb-4" style={{ fontFamily: "var(--font-heading)" }}>
            Weekend 2 Campaign Positioning
          </h2>
          <p className="text-text-mid text-lg max-w-2xl mx-auto mb-12">
            Final weekend. Remaining inventory. Premium routes still available for brands ready to close strong.
          </p>
          <div className="gold-divider mx-auto mb-12" />

          <div className="luxury-card rounded-2xl p-10 relative overflow-hidden">
            <div className="absolute top-4 right-4 bg-gold-base/20 text-gold-highlight text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              Limited Spots
            </div>
            <p className="text-gold-base font-semibold tracking-widest uppercase text-sm mb-2">Premium Campaign</p>
            <h3 className="text-2xl font-bold text-text-light mb-4" style={{ fontFamily: "var(--font-heading)" }}>
              Weekend 2 — Full Route Package
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
        headline="Don't Miss Weekend 2"
        subtext="Remaining spots are filling fast. This is your last opportunity to own the Coachella roads this season. Secure your position now."
      />
    </div>
  );
}

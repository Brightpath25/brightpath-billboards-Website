import type { Metadata } from "next";
import Link from "next/link";
import EventHero from "@/components/events/EventHero";
import EventSection from "@/components/events/EventSection";
import EventCTA from "@/components/events/EventCTA";
import { Eye, Route, Clock, Crown, FileText, DollarSign, ClipboardList, Users, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Stagecoach Takeover | BrightPath Billboards",
  description:
    "Own the roads during Stagecoach weekend with premium mobile billboard campaigns across the Coachella Valley's highest-traffic routes.",
};

export default function StagecoachPage() {
  return (
    <div className="min-h-screen bg-black-hero">
      <EventHero
        title="Own the Roads During Stagecoach Weekend"
        headline="Capture high-intent traffic as tens of thousands move through the Coachella Valley for one of the highest-spending festival weekends of the year."
        dateRange="April 24–26, 2026 • Indio, California"
        ctaLabel="Book Stagecoach Campaign"
        ctaHref="https://buy.stripe.com/bJe6oI85l1Bx1gO3hS5Vu02"
        ctaExternal={true}
        secondaryCtaLabel="Call Now (760) 385-8989"
        secondaryCtaHref="tel:7603858989"
      />

      {/* Why This Event Matters */}
      <EventSection
        title="Why This Event Matters"
        subtitle="Stagecoach is one of the highest-spending weekends in the Coachella Valley. This is a purchasing audience, not just a viewing audience."
      >
        <div className="flex justify-center mb-10">
          <a
            href="/media-kit.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold-highlight hover:text-gold-base transition-colors text-sm font-semibold underline"
          >
            Download Media Kit
          </a>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Users,
              title: "80,000+ Attendees",
              text: "Strong repeat attendance year after year with high alcohol, food, and retail spending throughout the weekend.",
            },
            {
              icon: Route,
              title: "Multi-Day Presence",
              text: "Multi-day travel and hotel presence creates sustained traffic density across every major route in the valley.",
            },
            {
              icon: Shield,
              title: "High-Spend Audience",
              text: "This is a purchasing audience with aggressive weekend spending on food, drinks, retail, and experiences.",
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
        title="BrightPath Strategy"
        subtitle="We position where people stop, not just where they pass."
        dark
      >
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              icon: Route,
              title: "Inbound Focus: 3 PM – 7 PM",
              text: "Mass arrival window with the highest traffic density. All routes into the festival are covered during peak inbound movement.",
            },
            {
              icon: Clock,
              title: "Dwell Capture: Indian Wells Tennis Garden",
              text: "15–45 minute wait times during peak hours. Extended exposure while audiences wait for shuttles.",
            },
            {
              icon: Eye,
              title: "Main Entry Control: Monroe St & Ave 51",
              text: "All traffic converges before entry. This is the single highest-density point for inbound festival traffic.",
            },
            {
              icon: Crown,
              title: "Late Night Exit: 12 AM – 3 AM",
              text: "Mass outbound movement across Hwy 111 and I-10. Capture the full audience during post-event departure.",
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

      {/* Where Traffic Converges */}
      <EventSection title="Where Traffic Converges" subtitle="This is where all inbound and outbound traffic funnels. Primary action center: Empire Polo Club (Indio).">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Route, label: "Monroe St & Ave 51", href: "/quote" },
            { icon: Eye, label: "Hwy 111 & Jefferson St", href: "/quote" },
            { icon: ClipboardList, label: "Washington St & Ave 50", href: "/quote" },
            { icon: Crown, label: "Indio · La Quinta · Indian Wells · Palm Desert", href: "/quote" },
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
        <div className="flex justify-center mt-10">
          <a
            href="/BrightPath_Route_Coverage.png"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold-highlight hover:text-gold-base transition-colors text-sm font-semibold underline"
          >
            View Route Coverage
          </a>
        </div>
      </EventSection>

      {/* Shuttle & Hotel Ecosystem */}
      <EventSection title="Shuttle & Hotel Ecosystem" dark>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Indian Wells Tennis Garden",
            "Palm Springs Convention Center",
            "Agua Caliente Casino",
            "JW Marriott Desert Springs",
            "Renaissance Esmeralda",
            "La Quinta Resort",
          ].map((item) => (
            <div key={item} className="luxury-card rounded-2xl p-6 text-center">
              <p className="text-text-light font-semibold">{item}</p>
            </div>
          ))}
        </div>
        <p className="text-text-mid text-center mt-8">These locations create long dwell times and repeated exposure.</p>
      </EventSection>

      {/* Who You're Reaching */}
      <EventSection title="Who You're Reaching" subtitle="This audience spends aggressively throughout the weekend.">
        <div className="grid sm:grid-cols-2 gap-6">
          {[
            "25–45 core audience (shifting younger)",
            "Strong female demographic growth",
            "High disposable income ($80K–$150K+ households)",
            "Group-based spending behavior (4–8 people)",
            "High alcohol and lifestyle spending",
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
            { stat: "180K+", label: "Daily impressions (120K–180K+)" },
            { stat: "4–7 PM", label: "Peak visibility window (highest conversion)" },
            { stat: "Group Effect", label: "One impression reaches multiple people" },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <p className="text-gold-base text-4xl font-bold mb-2">{item.stat}</p>
              <p className="text-text-mid">{item.label}</p>
            </div>
          ))}
        </div>
        <div className="grid sm:grid-cols-2 gap-6 mt-10">
          {[
            "High dwell-time exposure at shuttle hubs",
            "Repeated exposure during inbound traffic waves",
          ].map((item) => (
            <div key={item} className="flex items-start gap-3">
              <span className="text-gold-base mt-1 shrink-0">&#10003;</span>
              <p className="text-text-mid">{item}</p>
            </div>
          ))}
        </div>
      </EventSection>

      {/* Why This Works + Limited Availability */}
      <EventSection title="Why This Works" subtitle="This is real-world attention during peak demand.">
        <div className="grid sm:grid-cols-2 gap-6 mb-10">
          {[
            "Long wait times create forced attention",
            "High traffic congestion increases exposure time",
            "Audience moves in groups, not individuals",
            "No ad skipping, no algorithm filtering",
          ].map((item) => (
            <div key={item} className="flex items-start gap-3">
              <span className="text-gold-base mt-1 shrink-0">&#10003;</span>
              <p className="text-text-mid">{item}</p>
            </div>
          ))}
        </div>
        <div className="luxury-card rounded-2xl p-8 text-center">
          <p className="text-text-light text-lg font-semibold mb-2">Limited Availability</p>
          <p className="text-text-mid mb-4">Only a limited number of brands are placed during Stagecoach. Once routes are filled, access is closed. This is not unlimited inventory.</p>
          <Link href="/quote" className="luxury-button px-8 py-4 rounded-lg font-semibold inline-block">
            Check Availability
          </Link>
        </div>
      </EventSection>

      {/* Pricing */}
      <section id="pricing" className="py-20 md:py-28 bg-black-panel">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-text-light mb-4" style={{ fontFamily: "var(--font-heading)" }}>
            Stagecoach Campaign Pricing
          </h2>
          <p className="text-text-mid text-lg max-w-2xl mx-auto mb-12">
            Limited campaign placements.
          </p>
          <div className="gold-divider mx-auto mb-12" />

          <div className="grid md:grid-cols-2 gap-8">
            <div className="luxury-card rounded-2xl p-10">
              <p className="text-gold-base font-semibold tracking-widest uppercase text-sm mb-2">Weekend Access</p>
              <h3 className="text-2xl font-bold text-text-light mb-4" style={{ fontFamily: "var(--font-heading)" }}>
                $2,500
              </h3>
              <p className="text-text-mid mb-8">Full weekend billboard deployment across key Stagecoach routes.</p>
              <a href="https://buy.stripe.com/bJe6oI85l1Bx1gO3hS5Vu02" target="_blank" rel="noopener noreferrer" className="luxury-button px-8 py-4 rounded-lg font-semibold inline-block">
                Book Stagecoach Campaign
              </a>
            </div>
            <div className="luxury-card rounded-2xl p-10">
              <p className="text-gold-base font-semibold tracking-widest uppercase text-sm mb-2">Full Weekend Coverage</p>
              <h3 className="text-2xl font-bold text-text-light mb-4" style={{ fontFamily: "var(--font-heading)" }}>
                Custom
              </h3>
              <p className="text-text-mid mb-8">Custom based on availability. Extended coverage across all high-traffic zones.</p>
              <Link href="/quote" className="luxury-button px-8 py-4 rounded-lg font-semibold inline-block">
                Request Quote
              </Link>
            </div>
          </div>
          <div className="flex justify-center mt-10">
            <a
              href="/price-card.png"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold-highlight hover:text-gold-base transition-colors text-sm font-semibold underline"
            >
              View Pricing
            </a>
          </div>
          <div className="flex justify-center mt-4">
            <a
              href="/launch-overview.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold-highlight hover:text-gold-base transition-colors text-sm font-semibold underline"
            >
              View Launch Overview
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <EventCTA
        headline="Secure Your Placement Before Stagecoach Begins"
        subtext="Capture attention across the highest-traffic routes in the Coachella Valley."
        primaryLabel="Book Stagecoach Campaign"
        primaryHref="https://buy.stripe.com/bJe6oI85l1Bx1gO3hS5Vu02"
        primaryExternal={true}
      />
    </div>
  );
}

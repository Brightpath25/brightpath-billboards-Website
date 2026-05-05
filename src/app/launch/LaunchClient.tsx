"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Truck,
  Music2,
  Wine,
  Users,
  Camera,
  HeartHandshake,
  Building2,
  Megaphone,
  Store,
  UtensilsCrossed,
  ShoppingBag,
  Calendar,
  Sparkles,
  Handshake,
  Tv,
  Ribbon,
  Youtube,
  Instagram,
  ExternalLink,
  Eye,
  Share2,
  Crown,
  DoorOpen,
  Star,
  Gift,
  Mail,
  Palette,
  CheckCircle2,
  Clock,
} from "lucide-react";
import EventSection from "@/components/events/EventSection";

const LUMA_LINK = "https://luma.com/event/evt-oSmh00BoJ1Y5jX8?utm_source=website";

function RegisterButton({ size = "md" }: { size?: "md" | "lg" }) {
  const sizing = size === "lg" ? "px-10 py-4" : "px-8 py-4";
  return (
    <a
      href={LUMA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className={`luxury-button ${sizing} text-lg font-semibold rounded-lg inline-block`}
    >
      Register for Launch
    </a>
  );
}

function OutlineButton({
  href,
  label,
  icon: Icon,
}: {
  href: string;
  label: string;
  icon?: React.ComponentType<{ className?: string }>;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 px-6 py-3 text-base font-semibold rounded-lg border border-gold-base/40 text-gold-highlight hover:bg-gold-base/10 hover:border-gold-base transition-all duration-300"
    >
      {Icon && <Icon className="h-5 w-5" />}
      <span>{label}</span>
      <ExternalLink className="h-4 w-4 opacity-70" />
    </a>
  );
}

export default function LaunchClient() {
  return (
    <div className="min-h-screen bg-black-hero">
      {/* ──────────────────────── 1. HERO ──────────────────────── */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(227,176,75,0.18)_0%,transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(227,176,75,0.10)_0%,transparent_60%)]" />

        <div className="relative z-10 container mx-auto px-4 py-24 md:py-28">
          <Link
            href="/events"
            className="inline-flex items-center gap-2 text-text-mid hover:text-gold-highlight transition-colors mb-10 text-sm"
          >
            <ArrowLeft className="h-4 w-4" />
            All Events
          </Link>

          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* LEFT — headline + copy + CTA */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-gold-base/40 bg-gold-base/5 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-gold-base animate-pulse" />
                <p className="text-gold-base font-semibold tracking-widest uppercase text-xs">
                  Coachella Valley Launch
                </p>
              </div>

              <h1
                className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-text-light leading-[1.05]"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                The BrightPath Billboards{" "}
                <span className="text-gold-highlight">Experience</span>
              </h1>

              <p className="text-lg md:text-xl text-text-mid max-w-xl mb-4 leading-relaxed">
                A high energy launch event bringing together local business
                owners, creators, partners, and community leaders across the
                Coachella Valley.
              </p>

              <p className="text-base md:text-lg text-text-mid max-w-xl mb-10 leading-relaxed">
                Come see the truck, meet the team, connect with local brands,
                and experience how BrightPath is bringing real world attention
                to the streets.
              </p>

              <RegisterButton size="lg" />
            </div>

            {/* RIGHT — Headlining DJ feature card */}
            <div className="lg:col-span-5">
              <div className="relative">
                <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-gold-base/45 via-gold-base/10 to-transparent blur-[2px]" />
                <div className="relative luxury-card rounded-2xl p-6 md:p-8 bg-black-panel/90 backdrop-blur overflow-hidden">
                  <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-gold-base/10 blur-3xl pointer-events-none" />

                  <div className="relative">
                    <div className="flex items-center justify-between mb-5">
                      <div className="inline-flex items-center gap-2">
                        <Music2 className="h-3.5 w-3.5 text-gold-base" />
                        <p className="text-gold-base text-xs font-semibold tracking-widest uppercase">
                          Headlining DJ Experience
                        </p>
                      </div>
                      <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold tracking-widest uppercase text-text-light/80">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold-highlight animate-pulse" />
                        Headliner
                      </span>
                    </div>

                    <h2
                      className="text-3xl md:text-4xl font-bold text-text-light leading-[1.05] mb-4"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      Osocity <span className="text-gold-highlight">DJ</span>
                    </h2>

                    <p className="text-text-mid text-[0.95rem] md:text-base leading-relaxed mb-6">
                      One of YouTube’s most watched global DJ mix creators,
                      setting the tone for launch night.
                    </p>

                    <div className="grid grid-cols-3 gap-3 mb-7">
                      {[
                        { value: "3.27M", label: "Subscribers" },
                        { value: "889M+", label: "Views" },
                        { value: "Global", label: "Audience" },
                      ].map((stat) => (
                        <div
                          key={stat.label}
                          className="rounded-xl border border-gold-base/20 bg-black-hero/60 px-3 py-3 text-center"
                        >
                          <p
                            className="text-lg md:text-xl font-bold text-gold-base leading-none"
                            style={{ fontFamily: "var(--font-heading)" }}
                          >
                            {stat.value}
                          </p>
                          <p className="text-text-mid text-[10px] md:text-[11px] font-semibold tracking-widest uppercase mt-1.5">
                            {stat.label}
                          </p>
                        </div>
                      ))}
                    </div>

                    <a
                      href="https://youtube.com/@osocitynation?si=mdABZv44wphRcZa9"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="luxury-button w-full px-6 py-3.5 text-base font-semibold rounded-lg inline-flex items-center justify-center gap-2"
                    >
                      <Youtube className="h-5 w-5" />
                      <span>Watch More on YouTube</span>
                      <ExternalLink className="h-4 w-4 opacity-70" />
                    </a>

                    <p className="mt-5 pt-5 border-t border-gold-base/15 text-center text-text-mid text-xs tracking-widest uppercase">
                      Music · Movement · Real Crowd Energy
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────── HYPE STRIP ──────────────── */}
      <section className="relative bg-black-panel border-y border-gold-base/15">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gold-base/15">
            {[
              { icon: Truck, label: "Truck" },
              { icon: Music2, label: "Music" },
              { icon: Sparkles, label: "Brands" },
              { icon: HeartHandshake, label: "Community" },
            ].map((item, i) => (
              <div
                key={item.label}
                className={`flex items-center justify-center gap-3 py-5 ${
                  i >= 2 ? "border-t md:border-t-0 border-gold-base/15" : ""
                }`}
              >
                <item.icon className="h-5 w-5 text-gold-base" />
                <span className="text-text-light font-semibold tracking-widest uppercase text-sm">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────── 2. FEATURED DJ EXPERIENCE ──────────────── */}
      <EventSection
        title="Featured DJ Experience"
        subtitle="Setting the tone for launch night."
        dark
      >
        <div className="max-w-3xl mx-auto">
          <div className="luxury-card rounded-2xl p-4 md:p-6">
            <div className="relative w-full overflow-hidden rounded-xl aspect-video bg-black">
              <iframe
                src="https://www.youtube.com/embed/gRrq1RNqTjM"
                title="Featured DJ Experience"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>

            <div className="mt-6 grid sm:grid-cols-3 gap-4 text-center">
              <div>
                <p
                  className="text-xl font-bold text-text-light"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Osocity DJ
                </p>
                <p className="text-text-mid text-sm">Featured Artist</p>
              </div>
              <div>
                <p
                  className="text-xl font-bold text-gold-base"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  3.27M
                </p>
                <p className="text-text-mid text-sm">Subscribers</p>
              </div>
              <div>
                <p
                  className="text-xl font-bold text-gold-base"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  889M+
                </p>
                <p className="text-text-mid text-sm">Views</p>
              </div>
            </div>

            <div className="flex justify-center mt-8">
              <OutlineButton
                href="https://youtube.com/@osocitynation?si=mdABZv44wphRcZa9"
                label="Watch More on YouTube"
                icon={Youtube}
              />
            </div>
          </div>
        </div>
      </EventSection>

      {/* ──────────────── 3. WHAT TO EXPECT ──────────────── */}
      <EventSection
        title="What To Expect"
        subtitle="An evening built around the truck, the music, the brands, and the people."
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            {
              icon: Truck,
              tag: "On The Streets",
              title: "Live Mobile Billboard Showcase",
              text: "See the truck in action and the LED screens that move attention through the valley.",
            },
            {
              icon: Music2,
              tag: "Sound",
              title: "Featured DJ and Music",
              text: "A curated set setting the energy for the night.",
            },
            {
              icon: Wine,
              tag: "Tasting",
              title: "Easies Beverage Experience",
              text: "Fruit-infused spiked seltzers with a smooth 2.5% buzz.",
            },
            {
              icon: Users,
              tag: "Connect",
              title: "Local Business Networking",
              text: "Connect with owners, operators, and brands across the valley.",
            },
            {
              icon: Camera,
              tag: "Capture",
              title: "Photo Moments and Brand Visibility",
              text: "Capture the night with shareable moments built around the truck.",
            },
            {
              icon: HeartHandshake,
              tag: "Together",
              title: "Community Focused Experience",
              text: "Built for partners, neighbors, and the people who make the valley move.",
            },
          ].map((card) => (
            <div
              key={card.title}
              className="luxury-card rounded-2xl p-6 flex flex-col h-full hover:border-gold-base/40 transition-colors relative"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-11 h-11 rounded-lg bg-gold-base/10 flex items-center justify-center">
                  <card.icon className="h-5 w-5 text-gold-base" />
                </div>
                <span className="text-[10px] font-semibold tracking-widest uppercase text-gold-base/80 border border-gold-base/30 rounded-full px-2.5 py-1">
                  {card.tag}
                </span>
              </div>
              <h3
                className="text-lg font-bold text-text-light mb-2 leading-snug"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {card.title}
              </h3>
              <p className="text-text-mid leading-relaxed text-[0.95rem]">
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </EventSection>

      {/* ──────────────── 4. EASIES EXPERIENCE ──────────────── */}
      <EventSection
        title="Easies Experience"
        subtitle="The official beverage of launch night."
        dark
      >
        <div className="grid lg:grid-cols-2 gap-10 items-center max-w-5xl mx-auto">
          <div className="luxury-card rounded-2xl p-6 md:p-8 bg-black-panel">
            <div className="relative w-full aspect-square">
              <Image
                src="/easies8-pack.jpg"
                alt="Easies fruit-infused spiked seltzer 8-pack"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain"
                priority
              />
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-text-mid text-lg leading-relaxed">
              Enjoy the launch with{" "}
              <span className="text-text-light font-semibold">Easies</span>,
              fruit-infused spiked seltzers made with real fruit juice, organic
              goji berries, organic sweeteners, and a smooth 2.5% buzz.
            </p>

            <p className="text-text-mid text-lg leading-relaxed">
              Featured flavors include{" "}
              <span className="text-gold-highlight font-medium">
                Melon Berry, Honey Citrus, and Passion Mango
              </span>
              .
            </p>

            <div className="luxury-card rounded-2xl p-6 md:p-7">
              <p className="text-gold-base text-sm font-semibold tracking-widest uppercase mb-4">
                What’s Inside the Can
              </p>
              <ul className="space-y-3">
                {[
                  "Real fruit juice",
                  "Organic goji berries",
                  "Organic sweeteners",
                  "A smooth 2.5% buzz",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-base shrink-0" />
                    <span className="text-text-light">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-sm text-text-mid italic">
                Only available in Los Angeles.
              </p>
            </div>
          </div>
        </div>

        {/* Easies Visual Card */}
        <div className="mt-12 max-w-3xl mx-auto">
          <div className="luxury-card rounded-2xl p-8 md:p-10 text-center">
            <Sparkles className="h-7 w-7 text-gold-base mx-auto mb-4" />
            <h3
              className="text-2xl md:text-3xl font-bold text-text-light mb-3"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Watch the Easies Experience
            </h3>
            <p className="text-text-mid text-lg mb-8 max-w-xl mx-auto">
              See what’s inside the can and the vibe behind the brand.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <OutlineButton
                href="https://www.instagram.com/reel/DVo47K3krve/?utm_source=ig_web_button_share_sheet&igsh=MzRlODBiNWFlZA=="
                label="Watch on Instagram"
                icon={Instagram}
              />
              <OutlineButton
                href="https://drinkeasies.com/"
                label="Explore Easies"
              />
            </div>
          </div>
        </div>
      </EventSection>

      {/* ──────────────── 6. WHY WE'RE LAUNCHING ──────────────── */}
      <EventSection
        title="Why We’re Launching"
        subtitle="Because local businesses deserve to be seen in real life."
        dark
      >
        <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {[
            {
              num: "01",
              icon: Store,
              title: "Built for local visibility",
              text: "BrightPath was built to help local brands show up where people already move — hotels, restaurants, shopping corridors, and nightlife.",
            },
            {
              num: "02",
              icon: Megaphone,
              title: "Created for real-world attention",
              text: "See the truck, meet local partners, and experience how mobile visibility works on the streets that define the Coachella Valley.",
            },
            {
              num: "03",
              icon: HeartHandshake,
              title: "One night to bring the Valley together",
              text: "Real world attention. Real local people. One night to kick it off — together with the owners, creators, and partners moving the Valley forward.",
            },
          ].map((card) => (
            <div
              key={card.num}
              className="luxury-card rounded-2xl p-7 relative overflow-hidden group"
            >
              <span
                className="absolute -top-2 right-4 text-7xl font-bold text-gold-base/10 select-none"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {card.num}
              </span>
              <div className="relative">
                <div className="w-11 h-11 rounded-lg bg-gold-base/10 flex items-center justify-center mb-5">
                  <card.icon className="h-5 w-5 text-gold-base" />
                </div>
                <h3
                  className="text-xl font-bold text-text-light mb-3 leading-snug"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {card.title}
                </h3>
                <p className="text-text-mid leading-relaxed">{card.text}</p>
              </div>
            </div>
          ))}
        </div>
      </EventSection>

      {/* ──────────────── 7. LAUNCH PARTNERS ──────────────── */}
      <EventSection
        title="Launch Partners and Community"
        subtitle="A night made possible by the people, brands, and organizations behind the valley."
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {[
            { icon: Ribbon, label: "Chamber Ribbon Cutting" },
            { icon: Tv, label: "NBC Palm Springs" },
            { icon: Sparkles, label: "Launch Sponsors" },
            { icon: Handshake, label: "Local Partners" },
            { icon: HeartHandshake, label: "Friends of the Children" },
            { icon: Users, label: "Community Networking" },
          ].map((item) => (
            <div
              key={item.label}
              className="luxury-card rounded-2xl p-6 flex items-center gap-4"
            >
              <div className="shrink-0 w-11 h-11 rounded-lg bg-gold-base/10 flex items-center justify-center">
                <item.icon className="h-5 w-5 text-gold-base" />
              </div>
              <span className="text-text-light font-semibold">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </EventSection>

      {/* ──────────────── 8.5 LAUNCH SPONSORSHIP OPPORTUNITIES ──────────────── */}
      <section
        id="launch-sponsorship"
        className="py-20 md:py-28 bg-black-hero relative overflow-hidden scroll-mt-20"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(227,176,75,0.10)_0%,transparent_60%)]" />

        <div className="relative z-10 container mx-auto px-4 max-w-6xl">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-gold-base/40 bg-gold-base/5 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-base animate-pulse" />
              <p className="text-gold-base font-semibold tracking-widest uppercase text-xs">
                Sponsorship
              </p>
            </div>
            <h2
              className="text-3xl md:text-5xl font-bold text-text-light mb-4 leading-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Launch Sponsorship{" "}
              <span className="text-gold-highlight">Opportunities</span>
            </h2>
            <p className="text-text-mid text-base md:text-lg leading-relaxed">
              Own a moment of the night. Be seen across the Coachella Valley.
            </p>
          </div>

          {/* Top Value Cards */}
          <div className="grid sm:grid-cols-3 gap-5 mb-16">
            {[
              {
                icon: Eye,
                title: "Real World Exposure",
                text: "100,000+ real world views after launch",
              },
              {
                icon: Users,
                title: "Live Event Presence",
                text: "100+ local business attendees",
              },
              {
                icon: Share2,
                title: "Social Reach",
                text: "20,000+ social media impressions",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="luxury-card rounded-2xl p-6 text-center"
              >
                <div className="w-12 h-12 rounded-lg bg-gold-base/10 flex items-center justify-center mx-auto mb-4">
                  <card.icon className="h-6 w-6 text-gold-base" />
                </div>
                <h3
                  className="text-lg font-bold text-text-light mb-2"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {card.title}
                </h3>
                <p className="text-text-mid text-sm leading-relaxed">
                  {card.text}
                </p>
              </div>
            ))}
          </div>

          {/* Campaign Exposure */}
          <div className="luxury-card rounded-2xl p-8 md:p-10 mb-16">
            <div className="text-center mb-8">
              <p className="text-gold-base font-semibold tracking-widest uppercase text-xs mb-3">
                Campaign Exposure
              </p>
              <h3
                className="text-2xl md:text-3xl font-bold text-text-light"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Days of Advertising by Tier
              </h3>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
              {[
                { tier: "Presenting Sponsor", days: "8 Days", featured: true },
                { tier: "Entry Sponsor", days: "4 Days", featured: false },
                { tier: "Experience Sponsor", days: "4 Days", featured: false },
                { tier: "Bar Sponsor", days: "4 Days", featured: false },
              ].map((item) => (
                <div
                  key={item.tier}
                  className={`rounded-xl p-5 text-center border ${
                    item.featured
                      ? "border-gold-base bg-gold-base/10"
                      : "border-gold-base/20 bg-black-hero/50"
                  }`}
                >
                  <p
                    className={`text-2xl font-bold mb-1 ${
                      item.featured ? "text-gold-highlight" : "text-gold-base"
                    }`}
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {item.days}
                  </p>
                  <p className="text-text-mid text-[11px] tracking-widest uppercase font-semibold">
                    of Advertising
                  </p>
                  <p className="mt-3 text-text-light font-semibold text-sm">
                    {item.tier}
                  </p>
                </div>
              ))}
            </div>

            <div className="border-t border-gold-base/15 pt-8">
              <p className="text-gold-base font-semibold tracking-widest uppercase text-xs mb-5 text-center">
                Campaign Execution — All Sponsors
              </p>
              <div className="grid sm:grid-cols-3 gap-4 mb-6">
                {[
                  { icon: Calendar, text: "Tuesday through Friday campaign window" },
                  { icon: Clock, text: "8 hours per day" },
                  { icon: Tv, text: "8-second rotating ad placements" },
                ].map((item) => (
                  <div
                    key={item.text}
                    className="flex items-start gap-3 rounded-lg bg-black-hero/40 border border-gold-base/15 p-4"
                  >
                    <item.icon className="h-5 w-5 text-gold-base shrink-0 mt-0.5" />
                    <span className="text-text-light text-sm leading-snug">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-text-mid text-sm md:text-base leading-relaxed text-center max-w-3xl mx-auto">
                Your campaign begins immediately following the June 1 launch,
                extending your visibility into real-world traffic across the
                Coachella Valley.
              </p>
            </div>
          </div>

          {/* Sponsor Tiers */}
          <div className="mb-16">
            <div className="text-center mb-10">
              <p className="text-gold-base font-semibold tracking-widest uppercase text-xs mb-3">
                Sponsor Tiers
              </p>
              <h3
                className="text-2xl md:text-3xl font-bold text-text-light"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Choose Your Moment
              </h3>
            </div>

            {/* Presenting Sponsor — featured */}
            <div className="relative mb-8">
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-gold-base/60 via-gold-base/20 to-transparent blur-[2px]" />
              <div className="relative luxury-card rounded-2xl p-7 md:p-9 bg-black-panel/95 border-gold-base/60">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-gold-base text-black-hero text-[10px] font-bold tracking-widest uppercase">
                    <Star className="h-3 w-3" />
                    Most Visible
                  </span>
                </div>

                <div className="grid lg:grid-cols-3 gap-8 mt-2">
                  <div>
                    <div className="w-12 h-12 rounded-lg bg-gold-base/15 flex items-center justify-center mb-4">
                      <Crown className="h-6 w-6 text-gold-highlight" />
                    </div>
                    <p className="text-gold-base font-semibold tracking-widest uppercase text-xs mb-2">
                      Presenting Sponsor
                    </p>
                    <p
                      className="text-4xl font-bold text-gold-highlight mb-3"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      $5,000
                    </p>
                    <p className="text-text-light text-base font-semibold leading-snug">
                      Full Event Visibility + Headline Giveaway
                    </p>
                  </div>

                  <div className="lg:col-span-2">
                    <ul className="space-y-2.5 mb-6">
                      {[
                        "Step & Repeat main photo backdrop",
                        "LED Acrylic Light Stands premium placement",
                        "Primary logo placement across event",
                        "Multiple DJ shoutouts",
                        "Priority social media placement",
                        "Premium gift bag integration",
                      ].map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2.5 text-text-light text-[0.95rem]"
                        >
                          <CheckCircle2 className="h-4 w-4 text-gold-base shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="rounded-lg border border-gold-base/30 bg-gold-base/5 p-4 mb-6">
                      <p className="text-gold-base text-[10px] font-semibold tracking-widest uppercase mb-1">
                        Giveaway
                      </p>
                      <p className="text-text-light font-semibold">
                        Jerry Seinfeld Tickets
                      </p>
                    </div>

                    <a
                      href="mailto:brightpathbillboards@gmail.com?subject=Presenting Sponsor Interest"
                      className="luxury-button w-full px-6 py-3.5 text-base font-semibold rounded-lg inline-flex items-center justify-center gap-2"
                    >
                      <Mail className="h-4 w-4" />
                      <span>Become Presenting Sponsor</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Other Sponsor Tiers */}
            <div className="grid md:grid-cols-3 gap-5">
              {[
                {
                  icon: DoorOpen,
                  tier: "Entry Sponsor",
                  price: "$2,500",
                  tag: "First Impression + Arrival Experience",
                  features: [
                    "Entry signage and arrival branding",
                    "Feather flags at entrance",
                    "Custom lanyards",
                    "Premium gift bag integration",
                  ],
                  giveaway: "Dancing with the Stars",
                  buttonLabel: "Become Entry Sponsor",
                  mailto:
                    "mailto:brightpathbillboards@gmail.com?subject=Entry Sponsor Interest",
                },
                {
                  icon: Sparkles,
                  tier: "Experience Sponsor",
                  price: "$2,500",
                  tag: "Interactive Brand Moment",
                  features: [
                    "Experience zone signage and setup",
                    "Table branding and activation placement",
                    "Branded experience interaction",
                    "Premium gift bag integration",
                  ],
                  giveaway: "Lionel Richie + Earth Wind & Fire",
                  buttonLabel: "Become Experience Sponsor",
                  mailto:
                    "mailto:brightpathbillboards@gmail.com?subject=Experience Sponsor Interest",
                },
                {
                  icon: Wine,
                  tier: "Bar Sponsor",
                  price: "$2,500",
                  tag: "High Traffic + Repeat Visibility",
                  features: [
                    "LED Acrylic Light Stands bar feature display",
                    "Bar signage and visibility",
                    "Continuous exposure at beverage station",
                    "Premium gift bag integration",
                  ],
                  giveaway: "Shakira",
                  buttonLabel: "Become Bar Sponsor",
                  mailto:
                    "mailto:brightpathbillboards@gmail.com?subject=Bar Sponsor Interest",
                },
              ].map((card) => (
                <div
                  key={card.tier}
                  className="luxury-card rounded-2xl p-6 md:p-7 flex flex-col h-full"
                >
                  <div className="w-11 h-11 rounded-lg bg-gold-base/10 flex items-center justify-center mb-4">
                    <card.icon className="h-5 w-5 text-gold-base" />
                  </div>
                  <p className="text-gold-base font-semibold tracking-widest uppercase text-xs mb-1.5">
                    {card.tier}
                  </p>
                  <p
                    className="text-3xl font-bold text-text-light mb-2"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {card.price}
                  </p>
                  <p className="text-text-light text-sm font-semibold leading-snug mb-5">
                    {card.tag}
                  </p>

                  <ul className="space-y-2 mb-5">
                    {card.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-2 text-text-mid text-sm"
                      >
                        <CheckCircle2 className="h-4 w-4 text-gold-base shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="rounded-lg border border-gold-base/20 bg-black-hero/40 p-3 mb-5">
                    <p className="text-gold-base text-[10px] font-semibold tracking-widest uppercase mb-1">
                      Giveaway
                    </p>
                    <p className="text-text-light text-sm font-semibold">
                      {card.giveaway}
                    </p>
                  </div>

                  <a
                    href={card.mailto}
                    className="mt-auto inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold rounded-lg border border-gold-base/40 text-gold-highlight hover:bg-gold-base/10 hover:border-gold-base transition-all duration-300"
                  >
                    <Mail className="h-4 w-4" />
                    <span>{card.buttonLabel}</span>
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* All Sponsors Receive */}
          <div className="luxury-card rounded-2xl p-8 md:p-10 mb-16">
            <div className="text-center mb-8">
              <p className="text-gold-base font-semibold tracking-widest uppercase text-xs mb-3">
                All Sponsors Receive
              </p>
              <h3
                className="text-2xl md:text-3xl font-bold text-text-light"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Built In Value Across Every Tier
              </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-x-8 gap-y-3 mb-8 max-w-4xl mx-auto">
              {[
                "Photo with the headlining DJ",
                "DJ shoutouts during event",
                "Logo placement in recap video",
                "Social media coverage and event content",
                "Access to curated gift bag",
                "Branded giveaway opportunity",
                "1 to 2 hour planning session with BrightPath",
                "DOOH campaign strategy alignment",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 text-text-light"
                >
                  <CheckCircle2 className="h-4 w-4 text-gold-base shrink-0 mt-1" />
                  <span className="text-[0.95rem] leading-snug">{item}</span>
                </div>
              ))}
            </div>

            <div className="border-t border-gold-base/15 pt-8">
              <p className="text-gold-base font-semibold tracking-widest uppercase text-xs mb-5 text-center">
                Exposure To
              </p>
              <div className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
                {[
                  { value: "100+", label: "Local business attendees" },
                  { value: "100,000+", label: "Real-world impressions" },
                  { value: "20,000+", label: "Social media impressions" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-xl border border-gold-base/20 bg-black-hero/40 p-4 text-center"
                  >
                    <p
                      className="text-2xl font-bold text-gold-highlight mb-1"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {stat.value}
                    </p>
                    <p className="text-text-mid text-xs tracking-widest uppercase font-semibold">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sponsor Activation */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <p className="text-gold-base font-semibold tracking-widest uppercase text-xs mb-3">
                Sponsor Activation
              </p>
              <h3
                className="text-2xl md:text-3xl font-bold text-text-light mb-3"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Your Brand Is Not Just Shown — It Is Experienced
              </h3>
            </div>

            <div className="grid md:grid-cols-3 gap-5 mb-8">
              {[
                {
                  icon: Megaphone,
                  title: "On-site Branding",
                  items: [
                    "Feather flags and banners",
                    "Step & repeat backdrop",
                    "Table setups and signage",
                    "LED display elements",
                  ],
                },
                {
                  icon: Gift,
                  title: "Guest Interaction",
                  items: [
                    "Lanyards, tote bags, drinkware",
                    "Giveaway participation",
                  ],
                },
                {
                  icon: Music2,
                  title: "Promotional Moments",
                  items: [
                    "DJ shoutouts",
                    "Photo opportunities",
                    "Giveaway callouts",
                  ],
                },
              ].map((card) => (
                <div key={card.title} className="luxury-card rounded-2xl p-6">
                  <div className="w-11 h-11 rounded-lg bg-gold-base/10 flex items-center justify-center mb-4">
                    <card.icon className="h-5 w-5 text-gold-base" />
                  </div>
                  <h4
                    className="text-lg font-bold text-text-light mb-3"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {card.title}
                  </h4>
                  <ul className="space-y-2">
                    {card.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-text-mid text-sm"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-gold-base shrink-0 mt-2" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="luxury-card rounded-2xl p-6 text-center max-w-3xl mx-auto">
              <p className="text-text-light text-base md:text-lg leading-relaxed">
                Each sponsor hosts a{" "}
                <span className="text-gold-highlight font-semibold">
                  branded giveaway moment
                </span>{" "}
                during the event.
              </p>
            </div>
          </div>

          {/* Artwork Requirement + Community Impact */}
          <div className="grid md:grid-cols-2 gap-5 mb-16">
            <div className="luxury-card rounded-2xl p-7 md:p-8">
              <div className="w-11 h-11 rounded-lg bg-gold-base/10 flex items-center justify-center mb-4">
                <Palette className="h-5 w-5 text-gold-base" />
              </div>
              <h3
                className="text-xl font-bold text-text-light mb-3"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Artwork Requirement
              </h3>
              <p className="text-text-mid leading-relaxed mb-3">
                Artwork and design are not included.
              </p>
              <p className="text-text-light leading-relaxed">
                All sponsor creatives must be submitted and approved by the
                BrightPath Campaign Team prior to launch.
              </p>
            </div>

            <div className="luxury-card rounded-2xl p-7 md:p-8">
              <div className="w-11 h-11 rounded-lg bg-gold-base/10 flex items-center justify-center mb-4">
                <HeartHandshake className="h-5 w-5 text-gold-base" />
              </div>
              <h3
                className="text-xl font-bold text-text-light mb-3"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Community Impact
              </h3>
              <p className="text-text-mid leading-relaxed mb-3">
                Your support helps launch a new Coachella Valley media platform
                while supporting Friends of the Children.
              </p>
              <p className="text-text-mid leading-relaxed mb-4">
                This initiative helps provide mentorship, confidence building,
                hygiene guidance, and support for 20 kids throughout the summer.
              </p>
              <p className="text-gold-highlight font-semibold italic">
                We all want a BrightPath in life.
              </p>
            </div>
          </div>

          {/* News Proof */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-gold-base/40 bg-gold-base/5 mb-4">
              <Tv className="h-3.5 w-3.5 text-gold-base" />
              <p className="text-gold-base font-semibold tracking-widest uppercase text-xs">
                News Proof
              </p>
            </div>
            <h3
              className="text-2xl md:text-3xl font-bold text-text-light"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Already Gaining{" "}
              <span className="text-gold-highlight">Attention</span>
            </h3>
          </div>

          <div className="luxury-card rounded-2xl p-4 md:p-6 max-w-4xl mx-auto">
            <div className="relative w-full overflow-hidden rounded-xl bg-black">
              <iframe
                src="https://www.youtube.com/embed/EBo7axZM_GE"
                title="BrightPath Billboards News Coverage"
                width="100%"
                height="400"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────── 9. WHO SHOULD ATTEND ──────────────── */}
      <EventSection
        title="Who Should Attend"
        subtitle="Built for the people moving the Coachella Valley forward."
        dark
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {[
            { icon: Building2, label: "Business Owners" },
            { icon: Megaphone, label: "Marketing Managers" },
            { icon: Store, label: "Local Brands" },
            { icon: UtensilsCrossed, label: "Restaurants and Nightlife" },
            { icon: ShoppingBag, label: "Retail" },
            { icon: Calendar, label: "Event Promoters" },
            { icon: Handshake, label: "Community Partners" },
            { icon: Camera, label: "Creators and Media" },
          ].map((item) => (
            <div
              key={item.label}
              className="luxury-card rounded-xl p-5 flex items-center gap-3"
            >
              <div className="shrink-0 w-9 h-9 rounded-lg bg-gold-base/10 flex items-center justify-center">
                <item.icon className="h-4 w-4 text-gold-base" />
              </div>
              <span className="text-text-light font-medium">{item.label}</span>
            </div>
          ))}
        </div>
      </EventSection>

      {/* ──────────────── FOR BUSINESSES INTERESTED IN VISIBILITY ──────────────── */}
      <EventSection
        title="For Businesses Interested In Visibility"
        subtitle="Come experience how it works in person."
      >
        <div className="luxury-card rounded-2xl p-8 md:p-10 max-w-3xl mx-auto text-center">
          <p className="text-text-mid text-lg leading-relaxed">
            Launch night is the easiest way to see what BrightPath looks like
            in real life. If your business is curious about mobile visibility
            across the Coachella Valley, come connect with the team and other
            local owners on the night of the event.
          </p>
          <p className="text-text-light text-lg leading-relaxed mt-5">
            No formal pitch. No presentation. Just real conversations on the
            ground.
          </p>
        </div>
      </EventSection>

      {/* ──────────────── 10. FINAL CTA ──────────────── */}
      <section className="py-24 md:py-32 bg-black-panel relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(227,176,75,0.08)_0%,transparent_60%)]" />

        <div className="relative z-10 container mx-auto px-4 text-center max-w-3xl">
          <p className="text-gold-base font-semibold tracking-widest uppercase text-sm mb-4">
            Coachella Valley Launch
          </p>
          <h2
            className="text-3xl md:text-5xl font-bold text-text-light mb-6"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Join Us For The BrightPath Billboards Experience
          </h2>
          <p className="text-text-mid text-lg mb-10 leading-relaxed">
            One night. The truck, the music, the people, the valley.
          </p>

          <div className="flex justify-center">
            <RegisterButton size="lg" />
          </div>
        </div>
      </section>
    </div>
  );
}

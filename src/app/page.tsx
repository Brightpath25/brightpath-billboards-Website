"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  Calendar,
  Check,
  ChevronDown,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Phone,
  Target,
  Truck,
  Twitter,
  X,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Campaign360Viewer = dynamic(() => import("@/components/Campaign360Viewer"), {
  ssr: false,
  loading: () => (
    <div className="py-24 bg-black-hero text-center">
      <p className="text-gold-highlight">Loading 3D preview...</p>
    </div>
  ),
});

const navItems = [
  { label: "How It Works", href: "/services/mobile-led-advertising" },
  { label: "Campaigns", href: "/services/targeted-campaigns" },
  { label: "Events", href: "/events" },
  { label: "BrightPathIQ", href: "https://bpmobilebillboardsiq.live", external: true },
  { label: "About", href: "#about" },
];

const campaignCards = [
  {
    icon: Truck,
    eyebrow: "Everyday visibility",
    title: "Mobile LED campaigns",
    body: "Put a clear, high-impact message into motion across the routes where your audience already travels.",
    href: "/services/mobile-led-advertising",
  },
  {
    icon: Calendar,
    eyebrow: "Event presence",
    title: "Event campaigns",
    body: "Build a focused presence around festivals, venues, launches, and the traffic patterns that surround them.",
    href: "/services/event-domination",
  },
  {
    icon: Target,
    eyebrow: "Audience focus",
    title: "Targeted routes",
    body: "Shape the route, timing, and message around the neighborhoods, businesses, and destinations that matter most.",
    href: "/services/targeted-campaigns",
  },
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <main className="min-h-screen overflow-hidden bg-black-hero">
      <header className={`floating-navbar fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${scrolled ? "scrolled py-2" : "py-4"}`}>
        <nav className="container mx-auto flex items-center justify-between px-4" aria-label="Primary navigation">
          <Link href="/" className="flex items-center" onClick={closeMobileMenu}>
            <Image src="/brightpath-logo.png" alt="BrightPath Billboards logo" width={160} height={40} priority className="h-10 w-auto md:h-12" />
          </Link>

          <div className="hidden items-center gap-5 lg:flex">
            {navItems.map((item) =>
              item.external ? (
                <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" className="nav-link-hover-glow text-sm text-text-light hover:text-gold-highlight">
                  {item.label}
                </a>
              ) : (
                <Link key={item.label} href={item.href} className="nav-link-hover-glow text-sm text-text-light hover:text-gold-highlight">
                  {item.label}
                </Link>
              ),
            )}
            <Link href="/quote" className="luxury-button px-5 py-3 text-sm">Build My Campaign</Link>
          </div>

          <button type="button" className="rounded-lg p-2 text-text-light hover:text-gold-highlight lg:hidden" onClick={() => setMobileMenuOpen((open) => !open)} aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"} aria-expanded={mobileMenuOpen}>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>

        {mobileMenuOpen && (
          <div className="mt-3 border-t border-gold-base/20 bg-black-card/95 px-6 py-5 backdrop-blur-xl lg:hidden">
            <div className="container mx-auto flex flex-col gap-2">
              {navItems.map((item) =>
                item.external ? (
                  <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" className="rounded-lg px-3 py-3 text-text-light hover:bg-black-hero hover:text-gold-highlight" onClick={closeMobileMenu}>{item.label}</a>
                ) : (
                  <Link key={item.label} href={item.href} className="rounded-lg px-3 py-3 text-text-light hover:bg-black-hero hover:text-gold-highlight" onClick={closeMobileMenu}>{item.label}</Link>
                ),
              )}
              <Link href="/quote" className="luxury-button mt-3 text-center" onClick={closeMobileMenu}>Build My Campaign</Link>
            </div>
          </div>
        )}
      </header>

      <section id="home" className="relative flex min-h-[680px] items-end overflow-hidden bg-black-hero pt-32 md:min-h-screen md:items-center">
        <Image src="/brightpathbillboards-traffic.jpeg" alt="BrightPath mobile LED billboard truck operating in Coachella Valley traffic" fill priority sizes="100vw" className="object-cover opacity-75" />
        <video autoPlay muted loop playsInline preload="none" poster="/brightpathbillboards-traffic.jpeg" className="absolute inset-0 h-full w-full object-cover opacity-55">
          <source src="/brightpath-hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(11,13,16,0.98)_0%,rgba(11,13,16,0.86)_38%,rgba(11,13,16,0.28)_78%,rgba(11,13,16,0.58)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black-hero to-transparent" />

        <div className="relative z-10 container mx-auto w-full px-4 pb-20 md:pb-24">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.25em] text-gold-highlight">Coachella Valley mobile media</p>
            <h1 className="mb-7 max-w-4xl text-5xl font-black leading-[0.98] tracking-[-0.04em] text-text-light md:text-7xl lg:text-8xl">
              Your brand belongs <span className="text-gold-gradient">in motion.</span>
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-text-mid md:text-2xl">
              High-impact mobile LED advertising that puts your business, event, or brand in front of real traffic across the Coachella Valley.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link id="hero-quote-button" href="/quote" className="luxury-button inline-flex items-center justify-center gap-2 text-base">Build My Campaign <ArrowRight className="h-5 w-5" /></Link>
              <Link href="#how-it-works" className="inline-flex items-center justify-center rounded-xl border border-gold-base/50 bg-black-hero/50 px-7 py-4 font-semibold text-text-light backdrop-blur-sm transition hover:border-gold-highlight hover:text-gold-highlight">See how it works</Link>
            </div>
            <div className="mt-10 grid max-w-2xl grid-cols-3 border-y border-white/20 py-4 text-xs uppercase tracking-[0.12em] text-text-light md:text-sm">
              <span>Strategic routes</span>
              <span className="border-x border-white/20 px-3 text-center">Daily visibility</span>
              <span className="text-right">Campaign proof</span>
            </div>
          </div>
        </div>
        <a href="#how-it-works" className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-gold-highlight" aria-label="Scroll to learn more"><ChevronDown className="h-7 w-7 animate-bounce" /></a>
      </section>

      <section id="how-it-works" className="border-y border-gold-base/20 bg-black-panel py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-3">
            {[
              ["01", "Plan the route", "We start with your audience, objective, timing, and the places where visibility matters."],
              ["02", "Put it in motion", "Your creative runs on a mobile LED billboard designed to be seen in real environments."],
              ["03", "Review the proof", "Campaign documentation gives you a clear record of delivery and coverage."],
            ].map(([number, title, body]) => (
              <div key={number} className="flex gap-4">
                <span className="text-2xl font-bold text-gold-highlight">{number}</span>
                <div><h2 className="mb-2 text-xl font-bold text-text-light">{title}</h2><p className="leading-relaxed text-text-mid">{body}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="campaigns" className="bg-black-hero py-24">
        <div className="container mx-auto px-4">
          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl"><p className="mb-4 text-sm font-bold uppercase tracking-[0.24em] text-gold-highlight">Campaign options</p><h2 className="text-4xl font-bold leading-tight text-text-light md:text-6xl">Choose how your brand <span className="text-gold-gradient">moves.</span></h2></div>
            <p className="max-w-md text-lg leading-relaxed text-text-mid">A flexible mobile media platform for local businesses, event organizers, venues, and brands.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {campaignCards.map(({ icon: Icon, eyebrow, title, body, href }) => (
              <article key={title} className="luxury-card group min-h-[320px]">
                <div className="mb-8 flex items-center justify-between"><div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gold-base"><Icon className="h-7 w-7 text-black-hero" /></div><span className="text-xs font-bold uppercase tracking-[0.18em] text-gold-highlight/70">{eyebrow}</span></div>
                <h3 className="mb-4 text-2xl font-bold text-text-light">{title}</h3><p className="mb-8 leading-relaxed text-text-mid">{body}</p>
                <Link href={href} className="inline-flex items-center gap-2 font-semibold text-gold-highlight hover:text-text-light">Explore <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-gold-base/20 bg-black-panel py-24">
        <div className="container mx-auto grid items-center gap-12 px-4 lg:grid-cols-[1.05fr_0.95fr]">
          <div><p className="mb-4 text-sm font-bold uppercase tracking-[0.24em] text-gold-highlight">Street as a channel</p><h2 className="mb-6 text-4xl font-bold leading-tight text-text-light md:text-6xl">Visibility that travels with the moment.</h2><p className="mb-8 max-w-xl text-lg leading-relaxed text-text-mid">Your message is not tied to one wall or one screen. It can move through the corridors, destinations, and event activity that shape the Coachella Valley.</p><div className="grid gap-4 sm:grid-cols-2">{["Route strategy built around your objective", "Large-format creative made for distance", "Flexible campaign timing", "Clear delivery documentation"].map((item) => <div key={item} className="flex gap-3 text-text-light"><Check className="mt-1 h-5 w-5 shrink-0 text-gold-highlight" />{item}</div>)}</div></div>
          <div className="luxury-image"><Image src="/BrightPath_Route_Coverage.png" alt="BrightPath route coverage across the Coachella Valley" width={900} height={650} className="h-auto w-full" /></div>
        </div>
      </section>

      <section id="preview" className="relative overflow-hidden border-y border-gold-base/40 bg-[#161210] py-16">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(180,140,50,0.16),transparent_65%)]" />
        <div className="relative z-10 container mx-auto px-4 text-center"><p className="mb-4 text-sm font-bold uppercase tracking-[0.24em] text-gold-highlight">See the platform</p><h2 className="mb-4 text-4xl font-bold text-text-light md:text-6xl">Preview the truck in 360°.</h2><p className="mx-auto mb-10 max-w-2xl text-lg text-text-mid">Rotate the vehicle and upload artwork to see how your campaign can occupy the screen.</p><Campaign360Viewer /></div>
      </section>

      <section id="about" className="bg-black-hero py-24">
        <div className="container mx-auto grid items-center gap-12 px-4 lg:grid-cols-2"><div><p className="mb-4 text-sm font-bold uppercase tracking-[0.24em] text-gold-highlight">Local authority</p><h2 className="mb-6 text-4xl font-bold text-text-light md:text-6xl">Built in the Valley. Designed to move it forward.</h2><p className="mb-6 text-lg leading-relaxed text-text-mid">BrightPath Billboards was created to give Coachella Valley businesses and brands a more visible, flexible way to reach the people already moving through the region.</p><p className="text-lg leading-relaxed text-text-mid">We combine local route knowledge, mobile LED media, and practical campaign documentation to make outdoor advertising easier to understand and easier to act on.</p></div><div className="luxury-image"><Image src="/brightpathbillboards-laquinta.jpeg" alt="BrightPath LED billboard truck in La Quinta" width={800} height={550} className="h-auto w-full" /></div></div>
      </section>

      <section className="border-y border-gold-base/20 bg-black-panel py-24">
        <div className="container mx-auto px-4"><div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><p className="mb-4 text-sm font-bold uppercase tracking-[0.24em] text-gold-highlight">Campaign context</p><h2 className="text-4xl font-bold text-text-light md:text-5xl">Made for the places people go.</h2></div><Link href="/events" className="inline-flex items-center gap-2 font-semibold text-gold-highlight hover:text-text-light">Explore events <ArrowRight className="h-4 w-4" /></Link></div><div className="grid gap-6 md:grid-cols-3">{[["Festivals", "/brightpathbillboards-traffic-1.jpeg"], ["Hospitality and nightlife", "/brightpathbillboards-night.jpeg"], ["Local businesses", "/brightpathbillboards-traffic.jpeg"]].map(([title, src]) => <div key={title} className="group luxury-image"><Image src={src} alt={`BrightPath campaign environment: ${title}`} width={600} height={400} className="h-64 w-full object-cover transition duration-500 group-hover:scale-105" /><div className="border border-t-0 border-gold-base/20 bg-black-card px-5 py-4"><h3 className="font-bold text-text-light">{title}</h3></div></div>)}</div></div>
      </section>

      <section className="bg-black-hero py-24"><div className="container mx-auto px-4"><div className="mx-auto max-w-4xl rounded-2xl border border-gold-base/25 bg-black-card p-8 text-center md:p-14"><p className="mb-4 text-sm font-bold uppercase tracking-[0.24em] text-gold-highlight">BrightPathIQ</p><h2 className="mb-5 text-4xl font-bold text-text-light md:text-5xl">Campaign intelligence that supports the work.</h2><p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-text-mid">Explore the BrightPathIQ platform for the operational tools and campaign reporting being built around BrightPath’s mobile media network.</p><a href="https://bpmobilebillboardsiq.live" target="_blank" rel="noopener noreferrer" className="luxury-button inline-flex items-center gap-2">Visit BrightPathIQ <ArrowRight className="h-5 w-5" /></a></div></div></section>

      <section id="contact" className="bg-black-panel py-24"><div className="container mx-auto px-4"><div className="mb-14 text-center"><p className="mb-4 text-sm font-bold uppercase tracking-[0.24em] text-gold-highlight">Start the conversation</p><h2 className="mb-4 text-4xl font-bold text-text-light md:text-6xl">Put your brand <span className="text-gold-gradient">in motion.</span></h2><p className="mx-auto max-w-2xl text-lg text-text-mid">Tell us what you are trying to reach, where you want to be seen, and when the campaign needs to move.</p></div><div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.8fr_1.2fr]"><div className="luxury-card"><h3 className="mb-7 text-2xl font-bold text-text-light">Talk with BrightPath</h3><div className="space-y-4">{[[Phone, "(760) 385-8989", "tel:7603858989"], [Mail, "Brightpathbillboards@gmail.com", "mailto:Brightpathbillboards@gmail.com"], [MapPin, "La Quinta, CA", "#"]].map(([Icon, text, href]) => <a key={text as string} href={href as string} className="flex items-center gap-4 rounded-xl border border-gold-base/20 bg-black-hero/50 p-4 text-text-light hover:border-gold-base/60 hover:text-gold-highlight"><Icon className="h-5 w-5 text-gold-highlight" />{text as string}</a>)}</div></div><div className="luxury-card"><form className="space-y-5"><div className="grid gap-4 md:grid-cols-2"><Input placeholder="Name" aria-label="Name" /><Input type="email" placeholder="Email" aria-label="Email" /></div><div className="grid gap-4 md:grid-cols-2"><Input placeholder="Phone" aria-label="Phone" /><Input placeholder="Business name" aria-label="Business name" /></div><Input placeholder="Campaign budget" aria-label="Campaign budget" /><Textarea placeholder="Tell us about your campaign goals..." rows={5} aria-label="Campaign goals" /><button id="contact-launch-button" type="submit" className="luxury-button w-full">Launch Your Campaign</button></form></div></div></div></section>

      <footer className="border-t border-gold-base/20 bg-black-hero py-10"><div className="container mx-auto flex flex-col items-center justify-between gap-6 px-4 text-center md:flex-row md:text-left"><div><Image src="/brightpath-logo.png" alt="BrightPath Billboards" width={140} height={35} className="mx-auto h-9 w-auto md:mx-0" /><p className="mt-3 text-sm text-text-mid">Movement. Visibility. Intelligence. Local authority.</p></div><div className="flex items-center gap-5 text-text-mid"><a href="https://www.instagram.com/bpmobilebillboards" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-gold-highlight"><Instagram className="h-5 w-5" /></a><a href="https://www.linkedin.com/company/brightpath-billboards-llc/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-gold-highlight"><Linkedin className="h-5 w-5" /></a><a href="https://x.com/Brightpath94370" target="_blank" rel="noopener noreferrer" aria-label="X" className="hover:text-gold-highlight"><Twitter className="h-5 w-5" /></a></div></div></footer>
    </main>
  );
}

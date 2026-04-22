"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Truck, Target, Calendar, Phone, Mail, MapPin, Linkedin, Instagram, Facebook, Twitter, Menu, X, ChevronDown, Sparkles, Zap, TrendingUp } from "lucide-react";
import dynamic from "next/dynamic";

const Campaign360Viewer = dynamic(() => import("@/components/Campaign360Viewer"), {
  ssr: false,
  loading: () => <div className="py-24 bg-black-hero text-center"><p className="text-gold-highlight">Loading 3D preview...</p></div>
});
const CursorTrail = dynamic(() => import("@/components/CursorTrail"), {
  ssr: false
});

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Reveal elements on scroll
      const reveals = document.querySelectorAll('.scroll-reveal');
      reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
          element.classList.add('revealed');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [particles, setParticles] = useState<JSX.Element[]>([]);

  // Generate floating particles on client side only
  useEffect(() => {
    const newParticles = [];
    for (let i = 0; i < 20; i++) {
      newParticles.push(
        <div
          key={i}
          className="particle"
          style={{
            left: `${Math.random() * 100}%`,
            animationDuration: `${15 + Math.random() * 10}s`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      );
    }
    setParticles(newParticles);
  }, []);

  return (
    <div className="min-h-screen bg-black-hero">
      {/* LED Truck Cursor Trail */}
      <CursorTrail />

      {/* Floating Glass Navbar */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'floating-navbar scrolled py-2' : 'floating-navbar py-4'}`}>
        <nav className="container mx-auto px-4 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center space-x-3"
          >
            <Image
              src="/brightpath-logo.png"
              alt="BrightPath Billboards logo"
              width={160}
              height={40}
              priority
              className="h-10 w-auto md:h-12"
            />
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="#home" className="text-text-light hover:text-gold-highlight transition-all duration-300 relative group nav-link-hover-glow">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold-gradient group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="#services" className="text-text-light hover:text-gold-highlight transition-all duration-300 relative group nav-link-hover-glow">
              Services
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold-gradient group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/events" className="text-text-light hover:text-gold-highlight transition-all duration-300 relative group nav-link-hover-glow">
              Events
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold-gradient group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="#preview" className="text-text-light hover:text-gold-highlight transition-all duration-300 relative group nav-link-hover-glow">
              Preview
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold-gradient group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/game" className="text-gold-highlight hover:text-gold-base transition-all duration-300 relative group font-semibold nav-link-hover-glow">
              Play Game
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold-gradient group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="#about" className="text-text-light hover:text-gold-highlight transition-all duration-300 relative group nav-link-hover-glow">
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold-gradient group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="#contact" className="text-text-light hover:text-gold-highlight transition-all duration-300 relative group nav-link-hover-glow">
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold-gradient group-hover:w-full transition-all duration-300"></span>
            </Link>
            <a href="tel:7603858989" className="text-gold-base font-semibold phone-cta-pill">
              (760) 385-8989
            </a>
            <div className="flex items-center space-x-3 ml-2">
              <a href="https://www.instagram.com/bpmobilebillboards?igsh=NTc4MTIwNjQ2YQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="text-text-light hover:text-gold-highlight transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/company/brightpath-billboards-llc/" target="_blank" rel="noopener noreferrer" className="text-text-light hover:text-gold-highlight transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://x.com/Brightpath94370" target="_blank" rel="noopener noreferrer" className="text-text-light hover:text-gold-highlight transition-colors" aria-label="X">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-text-light hover:text-gold-highlight transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-black-card/95 backdrop-blur-xl border-t border-gold-base/20 mt-2">
            <div className="flex flex-col space-y-4 p-6">
              <Link href="#home" className="text-text-light hover:text-gold-highlight transition-colors" onClick={() => setMobileMenuOpen(false)}>Home</Link>
              <Link href="#services" className="text-text-light hover:text-gold-highlight transition-colors" onClick={() => setMobileMenuOpen(false)}>Services</Link>
              <Link href="/events" className="text-text-light hover:text-gold-highlight transition-colors" onClick={() => setMobileMenuOpen(false)}>Events</Link>
              <Link href="#preview" className="text-text-light hover:text-gold-highlight transition-colors" onClick={() => setMobileMenuOpen(false)}>Preview</Link>
              <Link href="/game" className="text-gold-highlight font-semibold hover:text-gold-base transition-colors" onClick={() => setMobileMenuOpen(false)}>Play Game</Link>
              <Link href="#about" className="text-text-light hover:text-gold-highlight transition-colors" onClick={() => setMobileMenuOpen(false)}>About</Link>
              <Link href="#contact" className="text-text-light hover:text-gold-highlight transition-colors" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
              <a href="tel:7603858989" className="text-gold-base font-semibold phone-cta-pill inline-block text-center">
                (760) 385-8989
              </a>
              <div className="flex items-center justify-center space-x-4 pt-2">
                <a href="https://www.instagram.com/bpmobilebillboards?igsh=NTc4MTIwNjQ2YQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="text-text-light hover:text-gold-highlight transition-colors" aria-label="Instagram">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="https://www.linkedin.com/company/brightpath-billboards-llc/" target="_blank" rel="noopener noreferrer" className="text-text-light hover:text-gold-highlight transition-colors" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="https://x.com/Brightpath94370" target="_blank" rel="noopener noreferrer" className="text-text-light hover:text-gold-highlight transition-colors" aria-label="X">
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Immersive Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Particles Background */}
        <div className="particles">
          {particles}
        </div>

        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/brightpath-logo.png"
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            zIndex: 1,
            transform: `translateY(${scrolled ? '50px' : '0'})`,
            transition: 'transform 0.3s ease-out'
          }}
        >
          <source src="/brightpath-hero.mp4" type="video/mp4" />
        </video>

        {/* Dark overlay on top of video for readability */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            zIndex: 2,
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.4) 100%)'
          }}
        ></div>

        {/* Scroll Cue */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-scroll-cue" style={{ zIndex: 3 }}>
          <ChevronDown className="h-8 w-8 text-gold-highlight" />
        </div>
      </section>

      {/* Hero Text Section */}
      <section className="py-20 bg-black-hero scroll-reveal">
        <div className="text-center max-w-6xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 bg-gold-base/10 border border-gold-base/30 text-gold-highlight px-6 py-2 rounded-full font-bold text-sm mb-6 animate-fade-in backdrop-blur-sm">
            <Sparkles className="h-4 w-4" />
            #1 IN THE COACHELLA VALLEY
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight max-w-5xl mx-auto">
            <span className="text-gold-gradient shimmer">Mobile Billboard Advertising</span>
            <br />
            <span className="text-text-light">That Gets Your Business Seen</span>
          </h1>

          <p className="text-lg md:text-xl text-gold-highlight font-semibold mb-4">
            Serving the Coachella Valley
          </p>

          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed text-text-mid">
            High-impact mobile LED billboard advertising for events, casinos, festivals, small businesses,
            and brands across Palm Springs, Indio, Coachella, Palm Desert, Cathedral City, and the entire Coachella Valley.
          </p>

          <ul className="text-lg md:text-xl text-text-light max-w-md mx-auto text-left mb-5 space-y-3">
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-gold-gradient rounded-full flex-shrink-0"></span>
              Mobile billboard truck exposure
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-gold-gradient rounded-full flex-shrink-0"></span>
              High traffic routes
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-gold-gradient rounded-full flex-shrink-0"></span>
              Daily visibility
            </li>
          </ul>

          <p className="text-sm md:text-base text-gold-highlight/70 italic mb-6">
            Limited availability during peak event seasons
          </p>

          <a
            id="hero-quote-button"
            target="_blank"
            rel="noopener noreferrer"
            className="luxury-button text-lg inline-block"
            href="/quote"
          >
            Get a Quote
          </a>

          <div className="mt-6">
            <a
              href="/media-kit.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold-highlight hover:text-gold-base transition-colors text-sm font-semibold underline"
            >
              Download Media Kit
            </a>
          </div>

          <div className="mt-10">
            <Link
              href="/launch"
              className="luxury-button text-lg inline-block"
            >
              Enter the Launch
            </Link>
            <p className="text-sm text-gold-highlight/70 italic mt-3">
              See what&apos;s already happening across the Valley
            </p>
          </div>
        </div>
      </section>

      {/* Gold Divider */}
      <div className="gold-divider"></div>
      <section className="py-24 bg-black-panel scroll-reveal">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
            Reach Thousands Daily Across the{" "}
            <span className="text-gold-gradient">Coachella Valley</span>
          </h2>
          <p className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed mb-16 text-text-mid">
            Unlock the power of mobile LED advertising with BrightPath Billboards' cutting-edge digital billboard trucks.
            Our fleet delivers stunning visuals and attention-grabbing content designed to captivate your audience
            no matter where they go.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { src: "/brightpathbillboards-traffic.jpeg", alt: "LED billboard truck in parking lot" },
              { src: "/brightpathbillboards-night.jpeg", alt: "LED billboard truck driving at night" },
              { src: "/brightpathbillboards-traffic-1.jpeg", alt: "LED billboard truck at event" }
            ].map((img, idx) => (
              <div key={idx} className="group luxury-image">
                <div className="absolute inset-0 bg-gold-gradient opacity-0 group-hover:opacity-20 transition-opacity duration-500 z-10"></div>
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={400}
                  height={300}
                  className="transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gold Divider */}
      <div className="gold-divider"></div>

      {/* Services Section */}
      <section id="services" className="py-24 bg-black-hero scroll-reveal">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-text-light mb-6">
              Our Services<span className="text-gold-base">.</span>
            </h2>
            <p className="text-lg md:text-xl text-text-mid max-w-3xl mx-auto leading-relaxed">
              Comprehensive mobile LED advertising services designed to dominate the Coachella Valley market.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className="luxury-card group">
              <div className="w-16 h-16 bg-gold-gradient rounded-xl flex items-center justify-center mb-6 group-hover:animate-float">
                <Truck className="h-8 w-8 text-black-hero" />
              </div>
              <h3 className="text-2xl font-bold text-text-light mb-4">Mobile LED Advertising</h3>
              <p className="text-text-mid mb-6 leading-relaxed">
                Reach thousands daily with large-format digital ads on our fleet of LED billboard trucks.
                Perfect for brand awareness campaigns across the Coachella Valley.
              </p>
              <Link href="/services/mobile-led-advertising" className="text-gold-base hover:text-gold-highlight font-semibold flex items-center gap-2 transition-colors">
                Learn More <ChevronDown className="h-4 w-4 rotate-[-90deg]" />
              </Link>
            </div>

            {/* Service Card 2 */}
            <div className="luxury-card group">
              <div className="w-16 h-16 bg-gold-gradient rounded-xl flex items-center justify-center mb-6 group-hover:animate-float">
                <Calendar className="h-8 w-8 text-black-hero" />
              </div>
              <h3 className="text-2xl font-bold text-text-light mb-4">Event Domination Packages</h3>
              <p className="text-text-mid mb-6 leading-relaxed">
                Saturate major events like Coachella, Stagecoach, PGA Tour, Monster Jam, and more with our
                specialized event advertising packages.
              </p>
              <Link href="/services/event-domination" className="text-gold-base hover:text-gold-highlight font-semibold flex items-center gap-2 transition-colors">
                Learn More <ChevronDown className="h-4 w-4 rotate-[-90deg]" />
              </Link>
            </div>

            {/* Service Card 3 */}
            <div className="luxury-card group">
              <div className="w-16 h-16 bg-gold-gradient rounded-xl flex items-center justify-center mb-6 group-hover:animate-float">
                <Target className="h-8 w-8 text-black-hero" />
              </div>
              <h3 className="text-2xl font-bold text-text-light mb-4">Targeted Campaigns</h3>
              <p className="text-text-mid mb-6 leading-relaxed">
                Tailored routes for casinos, resorts, luxury retail, dispensaries, and healthcare.
                Precision targeting for maximum ROI.
              </p>
              <Link href="/services/targeted-campaigns" className="text-gold-base hover:text-gold-highlight font-semibold flex items-center gap-2 transition-colors">
                Learn More <ChevronDown className="h-4 w-4 rotate-[-90deg]" />
              </Link>
            </div>
          </div>

          <div className="flex justify-center mt-12">
            <a
              href="/price-card.png"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold-highlight hover:text-gold-base transition-colors text-sm font-semibold underline"
            >
              View Pricing
            </a>
          </div>

          <div className="text-center mt-10">
            <Link
              href="/launch"
              className="luxury-button text-lg inline-block"
            >
              See How It Works Live
            </Link>
            <p className="text-sm text-gold-highlight/70 italic mt-3">
              Understand how campaigns show up in real environments
            </p>
          </div>
        </div>
      </section>

      {/* Gold Divider */}
      <div className="gold-divider"></div>

      {/* About Section */}
      {/* About BrightPath Billboards - NEW SECTION */}
      <section id="about" className="py-24 bg-black-hero scroll-reveal">
        <div className="container mx-auto px-4 max-w-5xl">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gold-base/10 border border-gold-base/30 text-gold-highlight px-6 py-2 rounded-full font-bold text-sm mb-6 backdrop-blur-sm">
              <Sparkles className="h-4 w-4" />
              OUR STORY
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-light mb-6">
              About <span className="text-gold-gradient">BrightPath Billboards</span>
            </h2>
          </div>

          {/* Origin Story */}
          <div className="mb-16">
            <p className="text-lg md:text-xl text-text-light leading-relaxed mb-6 text-center max-w-4xl mx-auto">
              BrightPath Billboards was born in the Coachella Valley from real hustle, persistence, and community need.
              Founder Marcus Tillman developed the idea while running a subscription window-cleaning business, knocking
              on over 1,000 doors in the desert heat to provide for his daughter, Rayna. During that journey, he noticed
              local entrepreneurs had almost no accessible advertising options, especially in a region built on festivals,
              casinos, events, and tourism. BrightPath was created to solve that problem and give the community a real,
              modern advertising platform.
            </p>
          </div>

          {/* Mission Statement */}
          <div className="mb-16 p-8 bg-gradient-to-br from-gold-base/10 to-transparent border border-gold-base/20 rounded-2xl backdrop-blur-sm">
            <h3 className="text-2xl md:text-3xl font-bold text-gold-highlight mb-4 text-center">Our Mission</h3>
            <p className="text-lg text-text-light leading-relaxed text-center max-w-3xl mx-auto">
              BrightPath empowers local businesses, creators, nonprofits, brands, and national partners with high-impact
              mobile LED advertising. Our mission is to bring big-city marketing power to the Coachella Valley—without
              big-city pricing. We operate on innovation, hustle, and community-first values.
            </p>
          </div>

          {/* Brand Philosophy Pull Quote */}
          <div className="mb-16 text-center">
            <blockquote className="relative">
              <div className="absolute -top-6 -left-6 text-8xl text-gold-base/20 font-serif">"</div>
              <p className="text-3xl md:text-4xl font-bold text-gold-gradient mb-6 relative z-10">
                Where Innovation, Hustle, and Community Meet.
              </p>
              <div className="absolute -bottom-6 -right-6 text-8xl text-gold-base/20 font-serif">"</div>
            </blockquote>
            <p className="text-lg text-text-mid leading-relaxed max-w-3xl mx-auto mt-8">
              BrightPath blends relentless drive, advanced LED technology, and deep local roots to amplify brands
              in a way the Coachella Valley has never seen before.
            </p>
          </div>

          {/* Community Connection */}
          <div className="mb-16">
            <p className="text-lg text-text-light leading-relaxed text-center max-w-4xl mx-auto">
              BrightPath was built from struggle, determination, and a commitment to uplift the community that shaped
              its founder. We support businesses at every level—from first-time entrepreneurs to large venues and national
              brands. Every campaign brought into the Valley contributes to economic growth, visibility, and opportunity
              for people who work hard and dream big.
            </p>
          </div>

          {/* What Makes BrightPath Different */}
          <div className="mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-text-light mb-10 text-center">
              What Makes BrightPath <span className="text-gold-gradient">Different</span>
            </h3>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                "First mobile LED billboard company truly rooted in the Coachella Valley",
                "Real analytics, real routes, real results",
                "Premium LED screens with full daytime visibility",
                "Fast creative support & quick turnaround",
                "Local expertise on traffic patterns, events, and festival surges",
                "Pricing designed for small businesses, scalable for major brands"
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 group">
                  <div className="w-2 h-2 bg-gold-gradient rounded-full mt-2 flex-shrink-0 group-hover:scale-150 transition-transform"></div>
                  <span className="text-text-light text-lg leading-relaxed group-hover:text-gold-highlight transition-colors">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gold Divider */}
      <div className="gold-divider"></div>

      {/* Why Us Section - RENAMED FROM OLD ABOUT */}
      <section className="py-24 bg-black-panel scroll-reveal">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-text-light mb-4">
              Why Us<span className="text-gold-base">?</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-lg text-text-mid leading-relaxed mb-10">
                BrightPath Billboards is the Coachella Valley's first dedicated LED mobile billboard company.
                Our fleet of cutting-edge trucks combines advanced technology, flexible route planning, and
                real-time analytics to guarantee that your brand gets in front of the right audience at the right time.
              </p>
              <div className="space-y-5">
                {[
                  { icon: <Sparkles className="h-5 w-5" />, text: "First-mover advantage in the Coachella Valley" },
                  { icon: <TrendingUp className="h-5 w-5" />, text: "Real-time GPS tracking and analytics" },
                  { icon: <Zap className="h-5 w-5" />, text: "Event domination strategy" },
                  { icon: <Target className="h-5 w-5" />, text: "Local expertise and relationships" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 group">
                    <div className="w-10 h-10 bg-gold-gradient rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <span className="text-text-light group-hover:text-gold-highlight transition-colors">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-4 bg-gold-gradient opacity-20 rounded-3xl blur-2xl group-hover:opacity-30 transition-opacity"></div>
              <div className="luxury-image">
                <Image
                  src="/brightpathbillboards-laquinta.jpeg"
                  alt="BrightPath LED billboard truck displaying dynamic digital advertising"
                  width={600}
                  height={400}
                  className="relative group-hover:border-gold-base/60 transition-all"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-gold-gradient px-6 py-3 rounded-xl font-bold text-black-hero shadow-luxury">
                LED Truck in Action
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-24 text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-text-light mb-4">
              Ready to Grow with <span className="text-gold-gradient">BrightPath</span>?
            </h3>
            <p className="text-lg text-text-mid mb-10 max-w-2xl mx-auto">
              Join the brands, businesses, and creators already dominating the Coachella Valley with mobile LED advertising.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="/quote"
                target="_blank"
                rel="noopener noreferrer"
                className="luxury-button text-lg inline-block"
              >
                Get a Quote
              </a>
              <a
                href="#services"
                className="px-8 py-4 bg-transparent border border-gold-base/50 text-gold-base/80 rounded-xl font-medium hover:bg-gold-base hover:text-black-hero transition-all duration-300 inline-block"
              >
                See Event Routes
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Gold Divider */}
      <div className="gold-divider"></div>

      {/* 360° Preview Section — Featured Surface Band */}
      <div id="preview" className="scroll-reveal relative overflow-hidden py-6" style={{ background: '#161210' }}>
        {/* Core charcoal-bronze surface gradient */}
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(180deg, #0c0a08 0%, #1e1812 6%, #2b2118 14%, #362a1e 24%, #3e3022 36%, #443524 50%, #3e3022 64%, #362a1e 76%, #2b2118 86%, #1e1812 94%, #0c0a08 100%)' }} />
        {/* Warm gold-tinted wash across full section */}
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(180deg, transparent 0%, rgba(180,140,50,0.07) 10%, rgba(180,140,50,0.13) 30%, rgba(180,140,50,0.16) 50%, rgba(180,140,50,0.13) 70%, rgba(180,140,50,0.07) 90%, transparent 100%)' }} />
        {/* Soft inner shadow — top */}
        <div className="absolute top-0 left-0 right-0 h-20 pointer-events-none" style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.2) 60%, transparent 100%)' }} />
        {/* Soft inner shadow — bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none" style={{ background: 'linear-gradient(0deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.2) 60%, transparent 100%)' }} />
        {/* Top separation line — gold */}
        <div className="absolute top-0 left-0 right-0 h-[2px] pointer-events-none" style={{ background: 'linear-gradient(90deg, transparent 5%, rgba(212,175,55,0.4) 20%, rgba(212,175,55,0.85) 50%, rgba(212,175,55,0.4) 80%, transparent 95%)' }} />
        {/* Top glow bloom beneath line */}
        <div className="absolute top-[2px] left-0 right-0 h-12 pointer-events-none" style={{ background: 'linear-gradient(180deg, rgba(212,175,55,0.18) 0%, rgba(212,175,55,0.06) 50%, transparent 100%)' }} />
        {/* Bottom separation line — gold */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] pointer-events-none" style={{ background: 'linear-gradient(90deg, transparent 5%, rgba(212,175,55,0.4) 20%, rgba(212,175,55,0.85) 50%, rgba(212,175,55,0.4) 80%, transparent 95%)' }} />
        {/* Bottom glow bloom above line */}
        <div className="absolute bottom-[2px] left-0 right-0 h-12 pointer-events-none" style={{ background: 'linear-gradient(0deg, rgba(212,175,55,0.18) 0%, rgba(212,175,55,0.06) 50%, transparent 100%)' }} />
        {/* Subtle edge vignette for depth */}
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 130% 100% at 50% 50%, transparent 40%, rgba(0,0,0,0.5) 100%)' }} />
        {/* Content */}
        <div className="relative z-10">
          <Campaign360Viewer />
        </div>
      </div>

      {/* Gold Divider */}
      <div className="gold-divider"></div>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-black-panel scroll-reveal">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-text-light mb-6">
              Partner with <span className="text-gold-gradient">BrightPath</span>
            </h2>
            <p className="text-xl text-text-mid">Ready to make your mark on the Coachella Valley?</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="luxury-card">
              <h3 className="text-3xl font-bold mb-8 text-gold-gradient">Get Started Today</h3>
              <div className="space-y-6">
                {[
                  { icon: <Phone className="h-6 w-6" />, text: "(760) 385-8989", href: "tel:7603858989" },
                  { icon: <Mail className="h-6 w-6" />, text: "Brightpathbillboards@gmail.com", href: "mailto:Brightpathbillboards@gmail.com" },
                  { icon: <MapPin className="h-6 w-6" />, text: "La Quinta, CA", href: "#" }
                ].map((item, idx) => (
                  <a
                    key={idx}
                    href={item.href}
                    className="flex items-center gap-4 p-4 rounded-xl bg-black-hero/50 hover:bg-black-hero transition-all border border-gold-base/20 hover:border-gold-base/50 group"
                  >
                    <div className="text-gold-base group-hover:text-gold-highlight transition-colors">
                      {item.icon}
                    </div>
                    <span className="text-text-light group-hover:text-gold-highlight transition-colors">{item.text}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="luxury-card">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input placeholder="Name" />
                  <Input placeholder="Email" />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <Input placeholder="Phone" />
                  <Input placeholder="Business Name" />
                </div>
                <Input placeholder="Campaign Budget" />
                <Textarea
                  placeholder="Tell us about your campaign goals..."
                  rows={4}
                />
                <button
                  id="contact-launch-button"
                  type="submit"
                  className="luxury-button w-full"
                >
                  Launch Your Campaign
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Footer */}
      <footer className="bg-black-hero border-t border-gold-base/20 relative">
        {/* Soft Top Gradient Overlay */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-t from-transparent to-black/80 pointer-events-none"></div>

        {/* Animated Gold Bar */}
        <div className="h-1 bg-gold-gradient relative z-10"></div>

        <div className="py-16 relative z-10">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-12">
              <div>
                <Image
                  src="/brightpath-logo.png"
                  alt="BrightPath Billboards Logo"
                  width={150}
                  height={50}
                  className="mb-6 h-auto w-auto"
                />
                <p className="leading-relaxed trust-highlight">
                  The Coachella Valley's premier LED mobile billboard advertising company.
                </p>
                <div className="mt-6">
                  <h4 className="font-bold mb-3 text-gold-base text-sm tracking-wide uppercase">Resources</h4>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <a
                        href="/media-kit.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-text-mid hover:text-gold-highlight transition-colors"
                      >
                        Media Kit
                      </a>
                    </li>
                    <li>
                      <a
                        href="/price-card.png"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-text-mid hover:text-gold-highlight transition-colors"
                      >
                        Price Card
                      </a>
                    </li>
                    <li>
                      <a
                        href="/launch-overview.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-text-mid hover:text-gold-highlight transition-colors"
                      >
                        Launch Overview
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="font-bold mb-5 text-gold-base text-lg tracking-wide">Services</h4>
                <ul className="space-y-2.5">
                  {["Mobile LED Advertising", "Event Domination", "Targeted Campaigns", "Route Planning"].map((item, idx) => (
                    <li key={idx}>
                      <a href="#" className="text-text-mid hover:text-gold-highlight transition-colors">{item}</a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-bold mb-5 text-gold-base text-lg tracking-wide">Contact</h4>
                <ul className="space-y-2.5 text-text-mid">
                  <li>La Quinta, CA</li>
                  <li><a href="tel:7603858989" className="hover:text-gold-highlight transition-colors">(760) 385-8989</a></li>
                  <li><a href="mailto:Brightpathbillboards@gmail.com" className="hover:text-gold-highlight transition-colors">Brightpathbillboards@gmail.com</a></li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold mb-5 text-gold-base text-lg tracking-wide">Follow Us</h4>
                <div className="flex space-x-4">
                  {[
                    { Icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/company/brightpath-billboards-llc/" },
                    { Icon: Instagram, label: "Instagram", href: "https://www.instagram.com/bpmobilebillboards?igsh=NTc4MTIwNjQ2YQ%3D%3D&utm_source=qr" },
                    { Icon: Facebook, label: "Facebook", href: "https://www.facebook.com/profile.php?id=61568107225408" },
                    { Icon: Twitter, label: "X", href: "https://x.com/Brightpath94370" }
                  ].map(({ Icon, label, href }, idx) => (
                    <a
                      key={idx}
                      href={href}
                      target={href !== "#" ? "_blank" : undefined}
                      rel={href !== "#" ? "noopener noreferrer" : undefined}
                      className="w-10 h-10 bg-black-card border border-gold-base/20 rounded-lg flex items-center justify-center hover:bg-gold-gradient hover:border-gold-base transition-all group"
                      aria-label={label}
                    >
                      <Icon className="h-5 w-5 text-text-mid group-hover:text-black-hero transition-colors" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gold-base/10 py-8">
          <div className="container mx-auto px-4 text-center">
            <p className="text-text-mid">&copy; 2024 BrightPath Billboards LLC. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

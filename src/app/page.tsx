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
            <a href="tel:4076868294" className="text-gold-base font-semibold phone-cta-pill">
              (407) 686-8294
            </a>
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
              <Link href="#preview" className="text-text-light hover:text-gold-highlight transition-colors" onClick={() => setMobileMenuOpen(false)}>Preview</Link>
              <Link href="/game" className="text-gold-highlight font-semibold hover:text-gold-base transition-colors" onClick={() => setMobileMenuOpen(false)}>Play Game</Link>
              <Link href="#about" className="text-text-light hover:text-gold-highlight transition-colors" onClick={() => setMobileMenuOpen(false)}>About</Link>
              <Link href="#contact" className="text-text-light hover:text-gold-highlight transition-colors" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
              <a href="tel:4076868294" className="text-gold-base font-semibold phone-cta-pill inline-block text-center">
                (407) 686-8294
              </a>
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

        {/* Gradient Background */}
        <div className="absolute inset-0 bg-hero-gradient"></div>

        {/* Radial Gold Glow */}
        <div className="absolute inset-0 bg-gradient-radial from-gold-deep/20 via-transparent to-transparent opacity-30"></div>

        {/* Background Image with Parallax */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: "url('https://cantmiss.us/wp-content/uploads/2022/09/Miami-Digital-Mobile-Billboards-4.jpeg')",
            transform: `translateY(${scrolled ? '50px' : '0'})`,
            transition: 'transform 0.3s ease-out'
          }}
        ></div>

        {/* Luxury Spotlight - centered behind headline */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(circle at center 45%, rgba(255,255,255,0.10) 0%, rgba(0,0,0,0) 60%)'
          }}
        ></div>

        {/* Luxury Vignette - bottom fade */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 70%, rgba(0,0,0,0.25) 100%)'
          }}
        ></div>

        {/* Hero Content */}
        <div className="relative z-20 text-center max-w-6xl mx-auto px-4 pt-20">
          <div className="inline-flex items-center gap-2 bg-gold-base/10 border border-gold-base/30 text-gold-highlight px-6 py-2 rounded-full font-bold text-sm mb-6 animate-fade-in backdrop-blur-sm">
            <Sparkles className="h-4 w-4" />
            #1 IN THE COACHELLA VALLEY
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            <span className="text-gold-gradient shimmer">Your Voice in the Community</span>
            <br />
            <span className="text-text-light">BrightPath Billboards</span>
          </h1>

          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed text-text-mid">
            High-impact mobile LED billboard advertising for events, casinos, festivals, small businesses,
            and brands across Palm Springs, Indio, Coachella, Palm Desert, Cathedral City, and the entire Coachella Valley.
          </p>

          <a
            id="hero-quote-button"
            target="_blank"
            rel="noopener noreferrer"
            className="luxury-button text-lg inline-block"
            href="/quote"
          >
            Get a Free Quote
          </a>

          {/* Scroll Cue */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-scroll-cue">
            <ChevronDown className="h-8 w-8 text-gold-highlight" />
          </div>
        </div>
      </section>

      {/* Gold Divider */}
      <div className="gold-divider"></div>

      {/* Value Proposition */}
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
              { src: "https://cantmiss.us/wp-content/uploads/2022/09/Salt-Lake-City-SLC-Digital-Mobile-billboard-Trucks-Utah-1-1.jpeg", alt: "LED billboard truck in parking lot" },
              { src: "https://cantmiss.us/wp-content/uploads/2022/09/Miami-Digital-Mobile-Billboards-4.jpeg", alt: "LED billboard truck driving at night" },
              { src: "https://www.bluelinemedia.com/images/mobile-a-1-500x375.jpg", alt: "LED billboard truck at event" }
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
        </div>
      </section>

      {/* Gold Divider */}
      <div className="gold-divider"></div>

      {/* About Section */}
      <section id="about" className="py-24 bg-black-panel scroll-reveal">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-text-light mb-8">
                Why BrightPath Billboards<span className="text-gold-base">?</span>
              </h2>
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
                  src="https://cantmiss.us/wp-content/uploads/2022/09/Miami-Digital-Mobile-Billboards-4.jpeg"
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
        </div>
      </section>

      {/* Gold Divider */}
      <div className="gold-divider"></div>

      {/* 360° Preview Section */}
      <div id="preview" className="scroll-reveal">
        <Campaign360Viewer />
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
                  { icon: <Phone className="h-6 w-6" />, text: "(407) 686-8294", href: "tel:4076868294" },
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
                  <li><a href="tel:4076868294" className="hover:text-gold-highlight transition-colors">(407) 686-8294</a></li>
                  <li><a href="mailto:Brightpathbillboards@gmail.com" className="hover:text-gold-highlight transition-colors">Brightpathbillboards@gmail.com</a></li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold mb-5 text-gold-base text-lg tracking-wide">Follow Us</h4>
                <div className="flex space-x-4">
                  {[
                    { Icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/company/brightpath-billboards-llc" },
                    { Icon: Instagram, label: "Instagram", href: "https://www.instagram.com/bpmobilemedia" },
                    { Icon: Facebook, label: "Facebook", href: "https://www.facebook.com/profile.php?id=61568107225408" },
                    { Icon: Twitter, label: "Twitter", href: "#" }
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

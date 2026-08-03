"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Instagram, Linkedin, Menu, Twitter, X } from "lucide-react";
import { useEffect, useState } from "react";
import DesktopNavigation from "@/components/DesktopNavigation";

const CursorTrail = dynamic(() => import("@/components/CursorTrail"), {
  ssr: false,
});

export default function HomepageHero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [enhancementsReady, setEnhancementsReady] = useState(false);
  const [particles, setParticles] = useState<JSX.Element[]>([]);

  useEffect(() => {
    let timer: number | undefined;
    const enableEnhancements = () => {
      timer = window.setTimeout(() => setEnhancementsReady(true), 500);
    };

    if (document.readyState === "complete") {
      enableEnhancements();
    } else {
      window.addEventListener("load", enableEnhancements, { once: true });
    }

    return () => {
      window.removeEventListener("load", enableEnhancements);
      if (timer) window.clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setParticles(
      Array.from({ length: 20 }, (_, index) => (
        <div
          key={index}
          className="particle"
          style={{
            left: `${Math.random() * 100}%`,
            animationDuration: `${15 + Math.random() * 10}s`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      )),
    );
  }, []);

  return (
    <>
      {enhancementsReady && <CursorTrail />}

      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "floating-navbar scrolled py-2" : "floating-navbar py-4"}`}>
        <nav className="container mx-auto px-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <Image src="/brightpath-logo.png" alt="BrightPath Billboards logo" width={160} height={40} priority className="h-10 w-auto md:h-12" />
          </Link>

          <DesktopNavigation />

          <button
            className="md:hidden text-text-light hover:text-gold-highlight transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>

        {mobileMenuOpen && (
          <div className="md:hidden bg-black-card/95 backdrop-blur-xl border-t border-gold-base/20 mt-2">
            <div className="flex flex-col space-y-4 p-6">
              <Link href="#home" className="text-text-light hover:text-gold-highlight transition-colors" onClick={() => setMobileMenuOpen(false)}>Home</Link>
              <Link href="#services" className="text-text-light hover:text-gold-highlight transition-colors" onClick={() => setMobileMenuOpen(false)}>Services</Link>
              <Link href="/events" className="text-text-light hover:text-gold-highlight transition-colors" onClick={() => setMobileMenuOpen(false)}>Events</Link>
              <Link href="/launch" className="text-text-light hover:text-gold-highlight transition-colors" onClick={() => setMobileMenuOpen(false)}>Launch</Link>
              <Link href="#preview" className="text-text-light hover:text-gold-highlight transition-colors" onClick={() => setMobileMenuOpen(false)}>Preview</Link>
              <a href="https://bpmobilebillboardsiq.live" target="_blank" rel="noopener noreferrer" className="text-text-light hover:text-gold-highlight transition-colors" onClick={() => setMobileMenuOpen(false)}>BrightPathIQ</a>
              <Link href="/game" className="text-gold-highlight font-semibold hover:text-gold-base transition-colors" onClick={() => setMobileMenuOpen(false)}>Play Game</Link>
              <Link href="#about" className="text-text-light hover:text-gold-highlight transition-colors" onClick={() => setMobileMenuOpen(false)}>About</Link>
              <Link href="#contact" className="text-text-light hover:text-gold-highlight transition-colors" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
              <a href="tel:7603858989" className="text-gold-base font-semibold phone-cta-pill inline-block text-center">(760) 385-8989</a>
              <div className="flex items-center justify-center space-x-4 pt-2">
                <a href="https://www.instagram.com/bpmobilebillboards?igsh=NTc4MTIwNjQ2YQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="text-text-light hover:text-gold-highlight transition-colors" aria-label="Instagram"><Instagram className="h-5 w-5" /></a>
                <a href="https://www.linkedin.com/company/brightpath-billboards-llc/" target="_blank" rel="noopener noreferrer" className="text-text-light hover:text-gold-highlight transition-colors" aria-label="LinkedIn"><Linkedin className="h-5 w-5" /></a>
                <a href="https://x.com/Brightpath94370" target="_blank" rel="noopener noreferrer" className="text-text-light hover:text-gold-highlight transition-colors" aria-label="X"><Twitter className="h-5 w-5" /></a>
              </div>
            </div>
          </div>
        )}
      </header>

      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="particles">{particles}</div>
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          poster="/brightpathbillboards-traffic.jpeg"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ zIndex: 1, transform: `translateY(${scrolled ? "50px" : "0"})`, transition: "transform 0.3s ease-out" }}
        >
          {enhancementsReady && <source src="/brightpath-hero.mp4" type="video/mp4" />}
        </video>
        <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 2, background: "linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.4) 100%)" }} />
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-scroll-cue" style={{ zIndex: 3 }}>
          <ChevronDown className="h-8 w-8 text-gold-highlight" />
        </div>
      </section>
    </>
  );
}

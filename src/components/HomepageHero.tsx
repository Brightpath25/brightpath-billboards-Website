"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import DesktopNavigation from "@/components/DesktopNavigation";
import MobileNavigation from "@/components/MobileNavigation";

const CursorTrail = dynamic(() => import("@/components/CursorTrail"), {
  ssr: false,
});

export default function HomepageHero() {
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

          <MobileNavigation />
        </nav>
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

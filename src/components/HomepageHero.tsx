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

      <section id="home" className="relative min-h-[44rem] overflow-hidden bg-bp-black pt-24 md:min-h-screen md:pt-28">
        <div className="particles">{particles}</div>
        <Image
          src="/brightpathbillboards-traffic.jpeg"
          alt="BrightPath mobile LED billboard truck operating in Coachella Valley traffic"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ zIndex: 1, transform: `translateY(${scrolled ? "50px" : "0"})`, transition: "transform 0.3s ease-out" }}
        >
          {enhancementsReady && <source src="/brightpath-hero.mp4" type="video/mp4" />}
        </video>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            zIndex: 2,
            background:
              "linear-gradient(90deg, rgba(10,10,10,0.96) 0%, rgba(10,10,10,0.84) 42%, rgba(10,10,10,0.28) 72%, rgba(10,10,10,0.5) 100%), linear-gradient(0deg, rgba(10,10,10,0.92) 0%, transparent 42%)",
          }}
        />

        <div className="relative z-10 mx-auto flex min-h-[calc(44rem-6rem)] max-w-bp-wide items-end px-bp-page-gutter pb-bp-12 md:min-h-[calc(100vh-7rem)] md:items-center md:pb-bp-16">
          <div className="max-w-[47rem]">
            <p className="mb-bp-4 font-bp-body text-bp-label font-bp-bold uppercase tracking-[0.18em] text-bp-gold">
              Coachella Valley mobile media
            </p>
            <h1 className="max-w-[12ch] font-bp-display text-bp-display-xl font-bp-black uppercase tracking-[-0.045em] text-bp-white">
              Your brand belongs in motion.
            </h1>
            <p className="mt-bp-6 max-w-[40rem] font-bp-body text-bp-body-lg text-bp-gray-100">
              High-impact mobile LED advertising built to put businesses, events, and brands in front of real traffic across the Coachella Valley.
            </p>

            <div className="mt-bp-8 flex flex-col gap-bp-3 sm:flex-row">
              <Link
                id="hero-quote-button"
                href="/quote"
                className="inline-flex min-h-12 items-center justify-center rounded-bp-control bg-bp-gold px-bp-6 font-bp-body text-bp-small font-bp-bold uppercase tracking-[0.08em] text-bp-black transition duration-bp-base ease-bp-standard hover:bg-bp-white focus-visible:outline-none focus-visible:shadow-bp-focus"
              >
                Build My Campaign
              </Link>
              <Link
                href="/#how-it-works"
                className="inline-flex min-h-12 items-center justify-center rounded-bp-control border border-bp-dark bg-bp-black/45 px-bp-6 font-bp-body text-bp-small font-bp-semibold uppercase tracking-[0.08em] text-bp-white backdrop-blur-sm transition duration-bp-base ease-bp-standard hover:border-bp-gold hover:text-bp-gold focus-visible:outline-none focus-visible:shadow-bp-focus"
              >
                See How It Works
              </Link>
            </div>

            <div className="mt-bp-8 grid max-w-[42rem] grid-cols-3 border-y border-bp-dark py-bp-4 font-bp-body text-bp-label text-bp-gray-100">
              <span>Strategic routes</span>
              <span className="border-x border-bp-dark px-bp-4 text-center">Daily visibility</span>
              <span className="text-right">Campaign proof</span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-bp-6 right-bp-page-gutter hidden animate-scroll-cue md:block" style={{ zIndex: 11 }} aria-hidden="true">
          <ChevronDown className="h-7 w-7 text-bp-gold" />
        </div>
      </section>
    </>
  );
}

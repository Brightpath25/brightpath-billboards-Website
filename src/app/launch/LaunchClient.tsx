"use client";

import { useEffect } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  MapPin,
  Eye,
  ShieldOff,
  Target,
  BarChart3,
  TrendingUp,
  CheckCircle2,
  CreditCard,
  ClipboardCheck,
  Rocket,
} from "lucide-react";
import EventSection from "@/components/events/EventSection";

const STRIPE_LINK = "https://buy.stripe.com/5kQ6oI3P57ZVcZw3hS5Vu00";

type TrackerWindow = Window & {
  fbq?: (...args: unknown[]) => void;
  gtag?: (...args: unknown[]) => void;
};

function trackEvent(name: string) {
  if (typeof window === "undefined") return;
  const w = window as TrackerWindow;
  if (typeof w.fbq === "function") {
    try {
      w.fbq("trackCustom", name);
    } catch {
      /* fail silently */
    }
  }
  if (typeof w.gtag === "function") {
    try {
      w.gtag("event", name);
    } catch {
      /* fail silently */
    }
  }
}

function PrimaryCTA({
  label = "Start a Subscription Campaign",
  size = "md",
}: {
  label?: string;
  size?: "md" | "lg";
}) {
  const sizing = size === "lg" ? "px-10 py-4" : "px-8 py-4";
  return (
    <a
      href={STRIPE_LINK}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackEvent("Launch_Stripe_Click")}
      className={`luxury-button ${sizing} text-lg font-semibold rounded-lg inline-block`}
    >
      {label}
    </a>
  );
}

function SecondaryButton({
  href,
  label,
  eventName,
}: {
  href: string;
  label: string;
  eventName?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={eventName ? () => trackEvent(eventName) : undefined}
      className="inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold rounded-lg border border-gold-base/30 text-gold-highlight hover:bg-gold-base/10 transition-all duration-300"
    >
      {label}
    </a>
  );
}

function SecondaryLink({
  href,
  label,
  eventName,
}: {
  href: string;
  label: string;
  eventName?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={eventName ? () => trackEvent(eventName) : undefined}
      className="text-gold-highlight hover:text-gold-base transition-colors text-sm font-semibold underline"
    >
      {label}
    </a>
  );
}

export default function LaunchClient() {
  useEffect(() => {
    trackEvent("Launch_Page_View");

    let fired50 = false;
    let fired90 = false;

    const onScroll = () => {
      if (typeof document === "undefined") return;
      const scrollTop =
        window.scrollY || document.documentElement.scrollTop || 0;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) return;
      const pct = (scrollTop / docHeight) * 100;
      if (!fired50 && pct >= 50) {
        fired50 = true;
        trackEvent("Launch_Scroll_50");
      }
      if (!fired90 && pct >= 90) {
        fired90 = true;
        trackEvent("Launch_Scroll_90");
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    let observer: IntersectionObserver | null = null;
    const pricingEl = document.getElementById("pricing-availability");
    if (pricingEl && typeof IntersectionObserver !== "undefined") {
      let firedPricing = false;
      observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting && !firedPricing) {
              firedPricing = true;
              trackEvent("Launch_Pricing_View");
              observer?.disconnect();
              break;
            }
          }
        },
        { threshold: 0.1 },
      );
      observer.observe(pricingEl);
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer?.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-black-hero">
      {/* ──────────────────────── 1. HERO ──────────────────────── */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(227,176,75,0.08)_0%,transparent_70%)]" />

        <div className="relative z-10 container mx-auto px-4 py-32 text-center max-w-4xl">
          <Link
            href="/events"
            className="inline-flex items-center gap-2 text-text-mid hover:text-gold-highlight transition-colors mb-8 text-sm"
          >
            <ArrowLeft className="h-4 w-4" />
            All Events
          </Link>

          <p className="text-gold-base font-semibold tracking-widest uppercase text-sm mb-4">
            BrightPath Launch
          </p>

          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-text-light"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            BrightPath is Launching in the Coachella Valley
          </h1>

          <p className="text-lg md:text-xl text-text-mid max-w-2xl mx-auto mb-4 leading-relaxed">
            Public offer. Limited campaign slots. First come, first served.
          </p>

          <p className="text-base md:text-lg text-text-mid max-w-2xl mx-auto mb-10 leading-relaxed">
            Hotels. Music. Nightlife. Movement. The first 90 days are already
            live across the Coachella Valley.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <PrimaryCTA />
            <a
              href="/media-kit.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent("Launch_Download_Media_Kit")}
              className="inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold rounded-lg border border-gold-base/30 text-gold-highlight hover:bg-gold-base/10 transition-all duration-300"
            >
              Download Media Kit
            </a>
          </div>
        </div>
      </section>

      {/* ──────────────── 2. WHY BRIGHTPATH ──────────────── */}
      <EventSection
        title="Why BrightPath"
        subtitle="Attention isn’t lost. It’s just moved."
        dark
      >
        <div className="max-w-3xl mx-auto space-y-5 text-text-mid text-lg leading-relaxed mb-12">
          <p>Palm Springs moves.</p>
          <p>
            Between hotels, music, nightlife, restaurants, and everything
            happening in between.
          </p>
          <p>
            From Coachella to Stagecoach to every weekend in the valley,
            attention here lives in motion.
          </p>
          <p>
            Screens get skipped. Streets don&rsquo;t. BrightPath puts brands
            inside the real-world movement of the Coachella Valley &mdash; seen,
            repeated, remembered.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="luxury-card rounded-2xl p-8">
            <h3
              className="text-xl font-bold text-text-light mb-6"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Traditional Digital Ads
            </h3>
            <div className="space-y-3">
              {[
                "Skipped",
                "Blocked",
                "Ignored",
                "Competing with thousands of other ads",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-text-mid shrink-0" />
                  <span className="text-text-mid">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="luxury-card rounded-2xl p-8">
            <h3
              className="text-xl font-bold text-gold-base mb-6"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              BrightPath Mobile DOOH
            </h3>
            <div className="space-y-3">
              {[
                "Unskippable",
                "No ad blockers",
                "Seen in real environments",
                "Repeated exposure across real movement",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-base shrink-0" />
                  <span className="text-text-light">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="luxury-card rounded-2xl p-8 md:p-10 max-w-3xl mx-auto mb-10">
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                icon: BarChart3,
                label: "30,000 to 70,000 daily impressions per truck",
              },
              {
                icon: TrendingUp,
                label: "90,000 to 210,000 impressions per weekend",
              },
              {
                icon: ShieldOff,
                label: "GPS proof-of-play reporting",
              },
              {
                icon: Target,
                label:
                  "Hyper-local route targeting across Palm Springs, Indio, and La Quinta",
              },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <div className="shrink-0 w-10 h-10 rounded-lg bg-gold-base/10 flex items-center justify-center">
                  <item.icon className="h-5 w-5 text-gold-base" />
                </div>
                <p className="text-text-mid leading-relaxed pt-1.5">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center">
          <SecondaryLink
            href="/BrightPath_Route_Coverage.png"
            label="View Route Coverage"
            eventName="Launch_Download_Route_Coverage"
          />
        </div>
      </EventSection>

      {/* ──────────────── 3. WHAT THIS LAUNCH IS ──────────────── */}
      <EventSection
        title="What This Launch Is"
        subtitle="A live moment across the Coachella Valley. Open to every business — only some will be seen."
      >
        <div className="luxury-card rounded-2xl p-8 md:p-10 max-w-2xl mx-auto">
          <div className="space-y-4">
            {[
              "Public launch across the Coachella Valley",
              "Open to businesses now",
              "Built around route-based mobile LED exposure",
              "Limited campaign availability in the first rollout",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-gold-base shrink-0 mt-0.5" />
                <span className="text-text-light text-lg">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </EventSection>

      {/* ──────────────── 4. WHY THIS MOMENT MATTERS ──────────────── */}
      <EventSection
        title="Why This Moment Matters"
        subtitle="Early campaigns own visibility. Later campaigns wait for space."
        dark
      >
        <div className="luxury-card rounded-2xl p-8 md:p-10 max-w-2xl mx-auto mb-10">
          <div className="space-y-4">
            {[
              "Early campaigns own priority placement",
              "Fewer advertisers in rotation at launch",
              "Stronger visibility before the market fills",
              "Later campaigns wait for the next availability window",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-gold-base shrink-0 mt-2.5" />
                <span className="text-text-light text-lg">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center">
          <SecondaryLink
            href="/BrightPath_Route_Coverage.png"
            label="View Route Coverage"
            eventName="Launch_Download_Route_Coverage"
          />
        </div>
      </EventSection>

      {/* ──────────────── 5. HOW THE 3-MONTH CAMPAIGN WORKS ──────────────── */}
      <EventSection
        title="How the 3-Month Campaign Works"
        subtitle="Three months of presence. Built for repetition, recognition, and real-world recall."
      >
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            {
              title: "Month 1",
              items: [
                "Initial exposure",
                "Route testing",
                "Early visibility",
              ],
            },
            {
              title: "Month 2",
              items: [
                "Increased frequency",
                "Refined positioning",
                "Stronger recognition",
              ],
            },
            {
              title: "Month 3",
              items: [
                "Full rotation",
                "Repeated exposure",
                "Conversion-focused visibility",
              ],
            },
          ].map((month) => (
            <div key={month.title} className="luxury-card rounded-2xl p-8">
              <p className="text-gold-base text-sm font-semibold tracking-widest uppercase mb-3">
                {month.title}
              </p>
              <div className="space-y-3">
                {month.items.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-base shrink-0" />
                    <span className="text-text-light">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <PrimaryCTA label="Start My Campaign" />
        </div>
      </EventSection>

      {/* ──────────────── 6. WHERE YOU'LL BE SEEN ──────────────── */}
      <EventSection
        title="Where You'll Be Seen"
        subtitle="Inside the environments people move through — not the screens they scroll past."
        dark
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10 max-w-4xl mx-auto">
          {[
            "High-traffic roads",
            "Shopping centers",
            "Hotel corridors",
            "Event zones",
            "Nightlife areas",
            "Routes assigned based on campaign availability",
          ].map((item) => (
            <div
              key={item}
              className="luxury-card rounded-xl p-5 flex items-center gap-3"
            >
              <MapPin className="h-5 w-5 text-gold-base shrink-0" />
              <span className="text-text-light">{item}</span>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <SecondaryLink
            href="/BrightPath_Route_Coverage.png"
            label="View Route Coverage"
            eventName="Launch_Download_Route_Coverage"
          />
        </div>
      </EventSection>

      {/* ──────────────── 7. WHAT YOU RECEIVE ──────────────── */}
      <EventSection
        title="What You Receive"
        subtitle="Subscribers don’t just attend the launch. They own the attention inside it."
      >
        <div className="luxury-card rounded-2xl p-8 md:p-10 max-w-2xl mx-auto">
          <div className="space-y-4">
            {[
              "Daily visible presence across the valley",
              "Ownership of premium routes",
              "Real-time proof of performance",
              "Weekly proof of visibility",
              "Controlled 90-day rollout",
              "Priority launch-phase position",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-gold-base shrink-0" />
                <span className="text-text-light text-lg">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </EventSection>

      {/* ──────────────── 8. PRICING + AVAILABILITY ──────────────── */}
      <EventSection
        id="pricing-availability"
        title="Pricing & Availability"
        subtitle="One campaign. One commitment. Placement fills in the order it’s paid."
        dark
      >
        <div className="luxury-card rounded-2xl p-8 md:p-12 max-w-2xl mx-auto text-center">
          <p className="text-gold-base font-semibold tracking-widest uppercase text-sm mb-4">
            3-Month Campaign
          </p>
          <p
            className="text-4xl md:text-5xl font-bold text-gold-base mb-2"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            $5,000 per month
          </p>
          <p className="text-text-mid text-lg mb-10">
            Total commitment: $15,000
          </p>

          <div className="space-y-3 text-left mb-10 max-w-md mx-auto">
            {[
              "Public offer",
              "Limited campaign slots",
              "First come, first served",
              "Placement secured only after payment",
              "Rotation based on availability",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-gold-base shrink-0" />
                <span className="text-text-light">{item}</span>
              </div>
            ))}
          </div>

          <div className="flex justify-center mb-6">
            <PrimaryCTA />
          </div>

          <SecondaryLink
            href="/price-card.png"
            label="View Pricing"
            eventName="Launch_Download_Pricing"
          />
        </div>
      </EventSection>

      {/* ──────────────── 9. WHAT HAPPENS NEXT ──────────────── */}
      <EventSection
        title="What Happens Next"
        subtitle="Four steps from decision to active rotation. Placement is assigned after payment."
      >
        <div className="grid md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-8">
          {[
            { icon: Eye, label: "Select your campaign" },
            { icon: CreditCard, label: "Complete payment" },
            { icon: ClipboardCheck, label: "Confirm placement" },
            { icon: Rocket, label: "Enter the active campaign rotation" },
          ].map((step, idx) => (
            <div
              key={step.label}
              className="luxury-card rounded-2xl p-6 text-center"
            >
              <div className="w-12 h-12 rounded-lg bg-gold-base/10 flex items-center justify-center mx-auto mb-4">
                <step.icon className="h-6 w-6 text-gold-base" />
              </div>
              <p className="text-gold-base text-xs font-semibold tracking-widest uppercase mb-2">
                Step {idx + 1}
              </p>
              <p className="text-text-light">{step.label}</p>
            </div>
          ))}
        </div>

        <p className="text-text-mid text-center text-base md:text-lg max-w-2xl mx-auto">
          Placement order is determined by completed payment.
        </p>
      </EventSection>

      {/* ──────────────── 10. OPTIONAL SUPPORT DOWNLOADS ──────────────── */}
      <EventSection
        title="Support Downloads"
        subtitle="Reference materials to support your decision."
        dark
      >
        <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {[
            {
              label: "Download Media Kit",
              href: "/media-kit.pdf",
              eventName: "Launch_Download_Media_Kit",
            },
            {
              label: "View Pricing",
              href: "/price-card.png",
              eventName: "Launch_Download_Pricing",
            },
            {
              label: "Download Full Breakdown",
              href: "/BrightPath_What_You_Are_Paying_For.png",
              eventName: "Launch_Download_Full_Breakdown",
            },
            {
              label: "View Launch Overview",
              href: "/launch-overview.pdf",
              eventName: "Launch_Download_Launch_Overview",
            },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent(item.eventName)}
              className="luxury-card rounded-xl px-5 py-4 text-gold-highlight hover:text-gold-base transition-colors font-semibold text-center"
            >
              {item.label}
            </a>
          ))}
        </div>
      </EventSection>

      {/* ──────────────── 11. FINAL CTA ──────────────── */}
      <section className="py-24 md:py-32 bg-black-panel relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(227,176,75,0.06)_0%,transparent_60%)]" />

        <div className="relative z-10 container mx-auto px-4 text-center max-w-3xl">
          <h2
            className="text-3xl md:text-5xl font-bold text-text-light mb-6"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Take Your Position Before Placement Closes
          </h2>
          <p className="text-text-mid text-lg mb-10 leading-relaxed">
            Placement fills in the order it&rsquo;s paid. Early campaigns own
            the visibility.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <PrimaryCTA size="lg" />
            <SecondaryButton
              href="/launch-overview.pdf"
              label="View Launch Overview"
              eventName="Launch_Download_Launch_Overview"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

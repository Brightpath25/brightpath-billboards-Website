import type { Metadata } from "next";
import Link from "next/link";
import EventHero from "@/components/events/EventHero";
import EventSection from "@/components/events/EventSection";
import EventCTA from "@/components/events/EventCTA";
import {
  MapPin,
  BarChart3,
  Eye,
  CalendarCheck,
  Car,
  Users,
  Footprints,
  TrendingUp,
  Activity,
  ShieldCheck,
  Target,
  Repeat,
  Clock,
  ArrowRight,
  Layers,
  Phone,
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "Off Season Advertising Coachella Valley Mobile Billboards",
  description:
    "Mobile billboard advertising across the Coachella Valley off season. Reach audiences through events, nightlife, dining, and high traffic movement from May through July.",
};

/* ================================================================
   DATA LAYER — Scalable quarterly / monthly structure.
   To add Quarter 2, duplicate the Q1 pattern with Aug/Sep/Oct data.
   ================================================================ */

interface MonthData {
  title: string;
  subtitle: string;
  environment: string;
  events: string[];
  touchpoints: string;
  audienceZones: string[];
  measurement: {
    vehiclesPerHour: string;
    campaignHours: number;
    vehicleExposure: string;
    occupancy: number;
    vehicleImpressions: string;
    pedestrianExposure: string;
    totalDailyImpressions: string;
  };
  monthlyOutput: {
    impressions: string;
    realEyes: string;
  };
  performance: string[];
}

interface QuarterData {
  label: string;
  months: string;
  totalTouchpoints: string;
  totalImpressions: string;
  totalRealEyes: string;
  monthData: MonthData[];
}

const QUARTER_1: QuarterData = {
  label: "Quarter 1",
  months: "May through July",
  totalTouchpoints: "310 to 395",
  totalImpressions: "10.5M to 16.2M",
  totalRealEyes: "3.15M to 6.48M",
  monthData: [
    {
      title: "May",
      subtitle: "Transition Visibility and Local Frequency",
      environment:
        "Transition from festival season into consistent local movement",
      events: [
        "Restaurant Week buildup",
        "Desert X closing activity",
        "Joshua Tree Music Festival",
        "Taste of Jalisco",
        "VillageFest",
        "Casino entertainment",
      ],
      touchpoints: "80 to 110",
      audienceZones: [
        "Local residents",
        "Remaining tourists",
        "Dining and retail traffic",
        "Highway 111",
        "Palm Canyon Drive",
        "Indio casino corridors",
      ],
      measurement: {
        vehiclesPerHour: "5,000 to 7,000",
        campaignHours: 8,
        vehicleExposure: "40,000 to 56,000",
        occupancy: 1.5,
        vehicleImpressions: "60,000 to 84,000",
        pedestrianExposure: "30,000 to 60,000",
        totalDailyImpressions: "90,000 to 140,000",
      },
      monthlyOutput: {
        impressions: "2.7M to 4.2M",
        realEyes: "810K to 1.68M",
      },
      performance: [
        "Lower competition",
        "High repeat exposure",
        "Strong retention",
      ],
    },
    {
      title: "June",
      subtitle: "Entertainment Density and Multi Source Exposure",
      environment:
        "Increased activity across entertainment and nightlife",
      events: [
        "Acrisure Arena shows",
        "ShortFest",
        "Pride Month",
        "Juneteenth",
        "Casino events",
        "Nightlife and hotel activations",
      ],
      touchpoints: "110 to 135",
      audienceZones: [
        "Locals and tourists",
        "Entertainment driven traffic",
        "Dining and nightlife zones",
      ],
      measurement: {
        vehiclesPerHour: "6,000 to 8,500",
        campaignHours: 8,
        vehicleExposure: "48,000 to 68,000",
        occupancy: 1.5,
        vehicleImpressions: "72,000 to 102,000",
        pedestrianExposure: "50,000 to 90,000",
        totalDailyImpressions: "120,000 to 180,000",
      },
      monthlyOutput: {
        impressions: "3.6M to 5.4M",
        realEyes: "1.08M to 2.16M",
      },
      performance: [
        "Multiple audience sources",
        "Higher dwell time",
        "Balanced exposure",
      ],
    },
    {
      title: "July",
      subtitle: "Nighttime Concentration and Peak Summer Attention",
      environment:
        "Heat shifts activity to evening and nighttime environments",
      events: [
        "Fourth of July events",
        "Concerts and headliners",
        "Splash House",
        "Pool parties",
        "Resort activity",
        "Community events",
      ],
      touchpoints: "120 to 150",
      audienceZones: [
        "Locals",
        "Tourists",
        "Nightlife audiences",
        "Resort visitors",
        "Evening traffic patterns",
      ],
      measurement: {
        vehiclesPerHour: "6,500 to 9,000",
        campaignHours: 8,
        vehicleExposure: "52,000 to 72,000",
        occupancy: 1.5,
        vehicleImpressions: "78,000 to 108,000",
        pedestrianExposure: "70,000 to 120,000",
        totalDailyImpressions: "140,000 to 220,000",
      },
      monthlyOutput: {
        impressions: "4.2M to 6.6M",
        realEyes: "1.26M to 2.64M",
      },
      performance: [
        "Night concentration",
        "Holiday spikes",
        "High engagement",
      ],
    },
  ],
};

/* ================================================================
   REUSABLE SUB-COMPONENTS
   ================================================================ */

function StatCard({
  value,
  label,
  icon: Icon,
  large,
}: {
  value: string;
  label: string;
  icon?: React.ComponentType<{ className?: string }>;
  large?: boolean;
}) {
  return (
    <div className="luxury-card rounded-2xl p-6 md:p-8 text-center">
      {Icon && <Icon className="h-8 w-8 text-gold-base mx-auto mb-3" />}
      <p
        className={`font-bold text-gold-base mb-1 ${large ? "text-3xl md:text-4xl" : "text-2xl md:text-3xl"}`}
        style={{ fontFamily: "var(--font-heading)" }}
      >
        {value}
      </p>
      <p className="text-text-mid text-sm">{label}</p>
    </div>
  );
}

function MeasurementRow({
  label,
  value,
  icon: Icon,
}: {
  label: string;
  value: string;
  icon: React.ComponentType<{ className?: string }>;
}) {
  return (
    <div className="flex items-center gap-4 py-3 border-b border-gold-base/10 last:border-0">
      <div className="shrink-0 w-9 h-9 rounded-lg bg-gold-base/10 flex items-center justify-center">
        <Icon className="h-4 w-4 text-gold-base" />
      </div>
      <span className="text-text-mid text-sm flex-1">{label}</span>
      <span className="text-text-light font-semibold text-sm">{value}</span>
    </div>
  );
}

function MonthSection({ month, index }: { month: MonthData; index: number }) {
  const isDark = index % 2 === 0;

  return (
    <section
      id={`month-${month.title.toLowerCase()}`}
      className={`py-20 md:py-28 ${isDark ? "bg-black-panel" : "bg-black-hero"}`}
    >
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Month header */}
        <div className="text-center mb-14">
          <p className="text-gold-base font-semibold tracking-widest uppercase text-sm mb-3">
            Campaign Month
          </p>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-light mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {month.title}
          </h2>
          <p className="text-text-mid text-lg md:text-xl max-w-2xl mx-auto">
            {month.subtitle}
          </p>
          <div className="gold-divider mx-auto mt-6" />
        </div>

        {/* Environment */}
        <div className="text-center mb-12">
          <p className="text-text-mid text-lg leading-relaxed max-w-3xl mx-auto">
            {month.environment}
          </p>
        </div>

        {/* Top-level monthly stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-16">
          <StatCard
            value={month.monthlyOutput.impressions}
            label="Monthly Impressions"
            icon={BarChart3}
          />
          <StatCard
            value={month.monthlyOutput.realEyes}
            label="Real Eyes"
            icon={Eye}
          />
          <StatCard
            value={month.touchpoints}
            label="Event Touchpoints"
            icon={CalendarCheck}
          />
          <StatCard
            value={month.measurement.totalDailyImpressions}
            label="Daily Impressions"
            icon={Activity}
          />
        </div>

        {/* Two-column detail grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Event activity */}
          <div className="luxury-card rounded-2xl p-8">
            <h3
              className="text-xl font-bold text-text-light mb-6"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Key Event Activity
            </h3>
            <div className="space-y-3">
              {month.events.map((event) => (
                <div key={event} className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-base shrink-0" />
                  <span className="text-text-mid">{event}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Audience and movement */}
          <div className="luxury-card rounded-2xl p-8">
            <h3
              className="text-xl font-bold text-text-light mb-6"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Audience and Movement Zones
            </h3>
            <div className="space-y-3">
              {month.audienceZones.map((zone) => (
                <div key={zone} className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-gold-base shrink-0" />
                  <span className="text-text-mid">{zone}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Measurement model */}
        <div className="luxury-card rounded-2xl p-8 md:p-10 max-w-3xl mx-auto mb-16">
          <h3
            className="text-xl font-bold text-text-light mb-6 text-center"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Measurement Model
          </h3>
          <MeasurementRow
            icon={Car}
            label="Vehicles Per Hour"
            value={month.measurement.vehiclesPerHour}
          />
          <MeasurementRow
            icon={Clock}
            label="Campaign Hours Per Day"
            value={`${month.measurement.campaignHours}`}
          />
          <MeasurementRow
            icon={Car}
            label="Vehicle Exposure"
            value={month.measurement.vehicleExposure}
          />
          <MeasurementRow
            icon={Users}
            label="Occupancy Rate"
            value={`${month.measurement.occupancy}`}
          />
          <MeasurementRow
            icon={BarChart3}
            label="Vehicle Impressions"
            value={month.measurement.vehicleImpressions}
          />
          <MeasurementRow
            icon={Footprints}
            label="Pedestrian Exposure"
            value={month.measurement.pedestrianExposure}
          />
          <MeasurementRow
            icon={Activity}
            label="Total Daily Impressions"
            value={month.measurement.totalDailyImpressions}
          />
        </div>

        {/* Performance characteristics */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          {month.performance.map((trait) => (
            <span
              key={trait}
              className="px-6 py-3 rounded-full border border-gold-base/20 text-gold-base font-semibold text-sm tracking-wide"
            >
              {trait}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================================================================
   PAGE
   ================================================================ */

export default function OffSeasonPage() {
  const q1 = QUARTER_1;

  return (
    <div className="min-h-screen bg-black-hero">
      {/* ──────────────────────── 1. HERO ──────────────────────── */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(227,176,75,0.08)_0%,transparent_70%)]" />

        <div className="relative z-10 container mx-auto px-4 py-32 text-center max-w-4xl">
          <Link
            href="/events"
            className="inline-flex items-center gap-2 text-text-mid hover:text-gold-highlight transition-colors mb-8 text-sm"
          >
            <ArrowRight className="h-4 w-4 rotate-180" />
            All Events
          </Link>

          <p className="text-gold-base font-semibold tracking-widest uppercase text-sm mb-4">
            Off Season Subscription Campaign
          </p>

          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-text-light leading-tight"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Off Season Does Not Mean Low Attention
          </h1>

          <p className="text-lg md:text-xl text-text-mid max-w-3xl mx-auto mb-12 leading-relaxed">
            BrightPath places your brand inside daily movement, events,
            nightlife, dining corridors, and high traffic environments across the
            Coachella Valley.
          </p>

          {/* Top CTA */}
          <div className="flex justify-center mb-12">
            <a
              href="https://buy.stripe.com/5kQ6oI3P57ZVcZw3hS5Vu00"
              target="_blank"
              rel="noopener noreferrer"
              className="luxury-button px-8 py-4 text-lg font-semibold rounded-lg"
            >
              Start a Subscription Campaign
            </a>
          </div>

          {/* Hero stat row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 max-w-3xl mx-auto mb-12">
            <div className="luxury-card rounded-2xl p-6">
              <p
                className="text-2xl md:text-3xl font-bold text-gold-base mb-1"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                10.5M to 16.2M
              </p>
              <p className="text-text-mid text-sm">Projected Impressions</p>
            </div>
            <div className="luxury-card rounded-2xl p-6">
              <p
                className="text-2xl md:text-3xl font-bold text-gold-base mb-1"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                3.15M to 6.48M
              </p>
              <p className="text-text-mid text-sm">Real Eyes</p>
            </div>
            <div className="luxury-card rounded-2xl p-6">
              <p
                className="text-2xl md:text-3xl font-bold text-gold-base mb-1"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                310 to 395
              </p>
              <p className="text-text-mid text-sm">Event Touchpoints</p>
            </div>
          </div>

          {/* Middle CTA */}
          <div className="flex justify-center mb-12">
            <a
              href="https://buy.stripe.com/5kQ6oI3P57ZVcZw3hS5Vu00"
              target="_blank"
              rel="noopener noreferrer"
              className="luxury-button px-8 py-4 text-lg font-semibold rounded-lg"
            >
              Start a Subscription Campaign
            </a>
          </div>

          <div className="flex justify-center">
            <a
              href="/media-kit.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold-highlight hover:text-gold-base transition-colors text-sm font-semibold underline"
            >
              Download Media Kit
            </a>
          </div>

        </div>
      </section>

      {/* ──────────── 2. OFF SEASON FRAMEWORK INTRODUCTION ──────────── */}
      <EventSection title="A Multi Month Off Season Opportunity" id="framework">
        <p className="text-text-mid text-lg leading-relaxed max-w-3xl mx-auto text-center">
          The off season creates a longer window for brands to build visibility,
          frequency, and local presence. Quarter 1 covers May through July, where
          attention shifts from post festival movement into dining,
          entertainment, nightlife, and concentrated summer activity.
        </p>
      </EventSection>

      {/* ──────────── 3. QUARTER 1 OVERVIEW ──────────── */}
      <section
        id="quarter-1-overview"
        className="py-20 md:py-28 bg-black-panel"
      >
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-14">
            <p className="text-gold-base font-semibold tracking-widest uppercase text-sm mb-3">
              {q1.label}
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold text-text-light mb-4"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {q1.label} Off Season Performance
            </h2>
            <div className="gold-divider mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
            <StatCard
              value={q1.totalTouchpoints}
              label="Total Event Touchpoints"
              icon={CalendarCheck}
              large
            />
            <StatCard
              value={q1.totalImpressions}
              label="Total Impressions"
              icon={BarChart3}
              large
            />
            <StatCard
              value={q1.totalRealEyes}
              label="Total Real Eyes"
              icon={Eye}
              large
            />
          </div>

          <p className="text-text-mid text-lg leading-relaxed max-w-3xl mx-auto text-center">
            {q1.label} demonstrates how a three month campaign builds repeated
            exposure across real movement patterns, events, retail corridors,
            hotels, and nightlife environments.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 mt-10">
            <a
              href="/BrightPath_Route_Coverage.png"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold-highlight hover:text-gold-base transition-colors text-sm font-semibold underline"
            >
              View Route Coverage
            </a>
            <a
              href="/price-card.png"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold-highlight hover:text-gold-base transition-colors text-sm font-semibold underline"
            >
              View Pricing
            </a>
          </div>
        </div>
      </section>

      {/* ──────────── 4 / 5 / 6. MONTHLY CAMPAIGN SECTIONS ──────────── */}
      {q1.monthData.map((month, idx) => (
        <MonthSection key={month.title} month={month} index={idx} />
      ))}

      {/* ──────────── OFF-SEASON ACTIVITY BY MONTH ──────────── */}
      <section className="py-20 md:py-28 bg-black-panel">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-14">
            <h2
              className="text-3xl md:text-4xl font-bold text-text-light mb-4"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Off-Season Activity by Month
            </h2>
            <p className="text-text-mid text-lg">
              Real movement. Real traffic. Real opportunity.
            </p>
            <div className="gold-divider mx-auto mt-6" />
          </div>

          <div className="grid lg:grid-cols-3 gap-6 mb-12">
            {/* May */}
            <div className="luxury-card rounded-2xl p-8">
              <h3
                className="text-xl font-bold text-gold-base mb-2"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                May
              </h3>
              <p className="text-text-light font-semibold text-sm mb-4">
                Transition and High-Intent Traffic
              </p>
              <div className="space-y-2 mb-6">
                {[
                  "Post-Coachella hotel occupancy",
                  "Memorial Day surge",
                  "Downtown nightlife patterns",
                  "Retail corridor traffic",
                  "Resort pool activity",
                  "Weekend events and markets",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-base shrink-0" />
                    <span className="text-text-mid text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <div className="pt-4 border-t border-gold-base/10 space-y-3">
                <div>
                  <p className="text-gold-base text-sm font-semibold">Estimated Daily Impressions</p>
                  <p className="text-text-light text-sm font-bold mt-0.5">80,000 &ndash; 140,000+</p>
                </div>
                <div>
                  <p className="text-gold-base text-sm font-semibold">Audience Behavior</p>
                  <p className="text-text-mid text-sm mt-0.5">
                    Local + visitor crossover with active spending patterns
                  </p>
                </div>
                <div>
                  <p className="text-gold-base text-sm font-semibold">Impact</p>
                  <p className="text-text-mid text-sm mt-0.5">
                    High visibility with reduced competition
                  </p>
                </div>
              </div>
            </div>

            {/* June */}
            <div className="luxury-card rounded-2xl p-8">
              <h3
                className="text-xl font-bold text-gold-base mb-2"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                June
              </h3>
              <p className="text-text-light font-semibold text-sm mb-4">
                Indoor and Entertainment Concentration
              </p>
              <div className="space-y-2 mb-6">
                {[
                  "Casino traffic",
                  "Acrisure Arena events",
                  "Indoor dining and nightlife",
                  "Hotel staycations",
                  "Retail and mall traffic",
                  "Weekly nightlife cycles",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-base shrink-0" />
                    <span className="text-text-mid text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <div className="pt-4 border-t border-gold-base/10 space-y-3">
                <div>
                  <p className="text-gold-base text-sm font-semibold">Estimated Daily Impressions</p>
                  <p className="text-text-light text-sm font-bold mt-0.5">70,000 &ndash; 120,000+</p>
                </div>
                <div>
                  <p className="text-gold-base text-sm font-semibold">Audience Behavior</p>
                  <p className="text-text-mid text-sm mt-0.5">
                    Longer dwell times in indoor environments
                  </p>
                </div>
                <div>
                  <p className="text-gold-base text-sm font-semibold">Impact</p>
                  <p className="text-text-mid text-sm mt-0.5">
                    More consistent exposure and retention
                  </p>
                </div>
              </div>
            </div>

            {/* July */}
            <div className="luxury-card rounded-2xl p-8">
              <h3
                className="text-xl font-bold text-gold-base mb-2"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                July
              </h3>
              <p className="text-text-light font-semibold text-sm mb-4">
                Holiday and Weekend Dominance
              </p>
              <div className="space-y-2 mb-6">
                {[
                  "4th of July tourism",
                  "Resort and family travel",
                  "Pool and hotel peak usage",
                  "Nightlife and dining patterns",
                  "Retail promotions",
                  "Weekend inflow traffic",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-base shrink-0" />
                    <span className="text-text-mid text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <div className="pt-4 border-t border-gold-base/10 space-y-3">
                <div>
                  <p className="text-gold-base text-sm font-semibold">Estimated Daily Impressions</p>
                  <p className="text-text-light text-sm font-bold mt-0.5">90,000 &ndash; 160,000+</p>
                </div>
                <div>
                  <p className="text-gold-base text-sm font-semibold">Audience Behavior</p>
                  <p className="text-text-mid text-sm mt-0.5">
                    High weekend density and repeat exposure
                  </p>
                </div>
                <div>
                  <p className="text-gold-base text-sm font-semibold">Impact</p>
                  <p className="text-text-mid text-sm mt-0.5">
                    Strong recall driven by consistent traffic
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quarterly Impact */}
          <div className="luxury-card rounded-2xl p-8 md:p-10 max-w-3xl mx-auto">
            <h3
              className="text-xl font-bold text-text-light mb-6 text-center"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Quarterly Impact (May&ndash;July)
            </h3>
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              <div>
                <p className="text-gold-base text-sm font-semibold">Combined Daily Impressions</p>
                <p className="text-text-light text-sm font-bold mt-0.5">70,000 &ndash; 160,000+</p>
              </div>
              <div>
                <p className="text-gold-base text-sm font-semibold">Total Quarterly Reach</p>
                <p className="text-text-light text-sm font-bold mt-0.5">2.5M &ndash; 4M+ impressions</p>
              </div>
            </div>
            <div className="space-y-2 mb-6">
              {[
                "Lower competition than peak season",
                "Higher repetition and recall",
                "Consistent visibility across the valley",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-base shrink-0" />
                  <span className="text-text-mid text-sm">{item}</span>
                </div>
              ))}
            </div>
            <div className="pt-4 border-t border-gold-base/10 text-center">
              <p className="text-gold-base font-semibold text-sm">
                This is where brands build presence while others go quiet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────── 7. QUARTER 1 SUMMARY ──────────── */}
      <section className="py-20 md:py-28 bg-black-hero">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-14">
            <h2
              className="text-3xl md:text-4xl font-bold text-text-light mb-4"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {q1.label} Campaign Output
            </h2>
            <div className="gold-divider mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <StatCard
              value={q1.totalTouchpoints}
              label="Events"
              icon={CalendarCheck}
              large
            />
            <StatCard
              value={q1.totalImpressions}
              label="Impressions"
              icon={BarChart3}
              large
            />
            <StatCard
              value={q1.totalRealEyes}
              label="Real Eyes"
              icon={Eye}
              large
            />
          </div>
        </div>
      </section>

      {/* ──────────── 8. MEASUREMENT METHODOLOGY ──────────── */}
      <EventSection
        title="How Campaign Performance Is Measured"
        dark
        id="measurement"
      >
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {[
            {
              icon: Car,
              label: "Traffic flow analysis across major corridors",
            },
            {
              icon: BarChart3,
              label: "Vehicle counts and exposure modeling",
            },
            {
              icon: Users,
              label: "Vehicle occupancy rates",
            },
            {
              icon: Footprints,
              label:
                "Pedestrian density in events and high traffic zones",
            },
            {
              icon: Clock,
              label: "Campaign duration and routing",
            },
            {
              icon: ShieldCheck,
              label:
                "Visibility adjustment using industry standards from Geopath",
            },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-4">
              <div className="shrink-0 w-10 h-10 rounded-lg bg-gold-base/10 flex items-center justify-center">
                <item.icon className="h-5 w-5 text-gold-base" />
              </div>
              <p className="text-text-mid leading-relaxed">{item.label}</p>
            </div>
          ))}
        </div>

        <div className="luxury-card rounded-2xl p-8 max-w-2xl mx-auto">
          <div className="space-y-4 text-center">
            <p className="text-text-light font-semibold">
              Impressions represent total exposure.
            </p>
            <p className="text-text-light font-semibold">
              Real Eyes represent visibility adjusted views.
            </p>
            <div className="pt-4 border-t border-gold-base/10">
              <p className="text-text-mid text-sm leading-relaxed">
                All projections are conservative and based on standard out of
                home measurement practices.
              </p>
            </div>
          </div>
        </div>
      </EventSection>

      {/* ──────────── 9. BRAND NOTORIETY AND LOCATION LIFT ──────────── */}
      <EventSection title="What This Builds Over Time" id="brand-growth">
        <div className="grid sm:grid-cols-3 gap-6 mb-12">
          <StatCard
            value="3x to 5x"
            label="Increase in Brand Recognition"
            icon={TrendingUp}
            large
          />
          <StatCard
            value="10% to 25%"
            label="Increase in Foot Traffic"
            icon={Footprints}
            large
          />
          <StatCard
            value="20% to 40%"
            label="Increase in Search Activity"
            icon={Target}
            large
          />
        </div>
        <div className="flex justify-center">
          <a
            href="/BrightPath_What_You_Are_Paying_For.png"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold-highlight hover:text-gold-base transition-colors text-sm font-semibold underline"
          >
            Download Full Breakdown
          </a>
        </div>
      </EventSection>

      {/* ──────────── 10. FUTURE QUARTER CONTINUITY ──────────── */}
      <section className="py-20 md:py-28 bg-black-panel">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <div className="mb-8">
            <Layers className="h-12 w-12 text-gold-base mx-auto mb-6" />
            <h2
              className="text-3xl md:text-4xl font-bold text-text-light mb-6"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Quarter 2 Will Extend This Framework
            </h2>
            <div className="gold-divider mx-auto mt-6 mb-8" />
          </div>
          <p className="text-text-mid text-lg leading-relaxed">
            This structure is designed to expand into August, September, and
            October without redesign.
          </p>
        </div>
      </section>

      {/* ──────────── 11. URGENCY + FINAL CTA ──────────── */}
      <section className="py-24 md:py-32 bg-black-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(227,176,75,0.06)_0%,transparent_60%)]" />

        <div className="relative z-10 container mx-auto px-4 text-center max-w-3xl">
          {/* Urgency block */}
          <div className="mb-12">
            <p className="text-gold-base font-semibold tracking-widest uppercase text-sm mb-4">
              Limited Off-Season Availability
            </p>
            <p className="text-text-mid text-base leading-relaxed max-w-2xl mx-auto">
              Only 5 campaign slots available for May through July. Once routes
              are filled, no additional placements will be added.
            </p>
            <div className="gold-divider mx-auto mt-6" />
          </div>

          {/* Pricing */}
          <div className="mb-10">
            <p
              className="text-4xl md:text-5xl font-bold text-gold-base mb-2"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              $5,000 per month
            </p>
            <p className="text-text-mid text-lg">
              Quarterly subscription
            </p>
          </div>

          <h2
            className="text-3xl md:text-5xl font-bold text-text-light mb-6"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Own Attention Across Quarter 1
          </h2>
          <p className="text-text-mid text-lg mb-10 leading-relaxed">
            Put your brand in front of real audiences across events, nightlife,
            dining, hotels, and daily movement.
          </p>

          {/* Primary CTA — Stripe payment link */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <a
              href="https://buy.stripe.com/5kQ6oI3P57ZVcZw3hS5Vu00"
              target="_blank"
              rel="noopener noreferrer"
              className="luxury-button px-10 py-4 text-lg font-semibold rounded-lg"
            >
              Start a Subscription Campaign
            </a>

            {/* Secondary CTA */}
            <a
              href="#quarter-1-overview"
              className="inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold rounded-lg border border-gold-base/30 text-gold-highlight hover:bg-gold-base/10 transition-all duration-300"
            >
              View Quarter 1 Breakdown
            </a>
          </div>

          {/* Third CTA — Call */}
          <a
            href="tel:7603858989"
            className="inline-flex items-center gap-2 text-gold-highlight hover:text-gold-base transition-colors text-sm font-semibold"
          >
            <Phone className="h-4 w-4" />
            Call Now — (760) 385-8989
          </a>

          <div className="mt-6">
            <a
              href="/launch-overview.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold-highlight hover:text-gold-base transition-colors text-sm font-semibold underline"
            >
              View Launch Overview
            </a>
          </div>

          <div className="mt-4">
            <Link
              href="/launch"
              className="text-gold-highlight hover:text-gold-base transition-colors text-sm font-semibold underline"
            >
              Explore the BrightPath Launch offer
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

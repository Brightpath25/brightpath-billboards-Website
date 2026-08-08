import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  MapPin,
  Menu,
  Route,
  ShieldCheck,
  Truck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About BrightPath Billboards | Built in the Coachella Valley",
  description:
    "The story behind BrightPath Billboards, a Coachella Valley mobile LED advertising company built around movement, local knowledge, and campaign proof.",
};

const navItems = [
  ["How It Works", "/services/mobile-led-advertising"],
  ["Campaigns", "/services/targeted-campaigns"],
  ["Events", "/events"],
  ["BrightPathIQ Demo", "/brightpathiq-demo"],
  ["About", "/about"],
];

const principles = [
  {
    icon: Truck,
    number: "01",
    title: "Movement is the medium",
    body: "BrightPath is built around mobile visibility: putting a brand into the routes, destinations, and traffic patterns where people are already moving.",
  },
  {
    icon: Route,
    number: "02",
    title: "Local context matters",
    body: "The Coachella Valley changes by hour, season, event, and city. Campaign planning starts with where the audience is going, not with a fixed piece of inventory.",
  },
  {
    icon: ShieldCheck,
    number: "03",
    title: "Delivery should be visible",
    body: "BrightPathIQ supports the work with campaign documentation, route information, proof photos, and reporting that help clients review what was delivered.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#0A0A0A] text-white">
      <header className="relative z-50 border-b border-white/10 bg-[#0A0A0A]/95 backdrop-blur-xl">
        <nav
          className="mx-auto flex min-h-[82px] max-w-[1280px] items-center justify-between gap-6 px-5 sm:px-8 lg:px-12"
          aria-label="Primary navigation"
        >
          <Link href="/" className="flex shrink-0 items-center" aria-label="BrightPath Billboards home">
            <Image
              src="/brightpath-logo.png"
              alt="BrightPath Billboards"
              width={180}
              height={52}
              priority
              className="h-12 w-auto"
            />
          </Link>

          <div className="hidden items-center gap-5 lg:flex">
            {navItems.map(([label, href]) => (
              <Link
                key={label}
                href={href}
                aria-current={label === "About" ? "page" : undefined}
                className={`text-sm font-semibold transition-colors ${
                  label === "About"
                    ? "text-[#E79E15]"
                    : "text-[#E8E8E8] hover:text-[#E79E15]"
                }`}
              >
                {label}
              </Link>
            ))}
            <Link
              href="/quote"
              className="inline-flex min-h-12 items-center justify-center rounded-xl bg-[#E79E15] px-5 text-sm font-bold text-[#0A0A0A] transition hover:bg-[#f3b13b] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E79E15] focus-visible:ring-offset-4 focus-visible:ring-offset-[#0A0A0A]"
            >
              Build My Campaign
            </Link>
          </div>

          <details className="group relative lg:hidden">
            <summary className="flex min-h-11 min-w-11 cursor-pointer list-none items-center justify-center rounded-lg border border-white/15 text-white transition hover:border-[#E79E15]/60 hover:text-[#E79E15] [&::-webkit-details-marker]:hidden">
              <Menu className="h-5 w-5" aria-hidden="true" />
              <span className="sr-only">Open navigation menu</span>
            </summary>
            <div className="absolute right-0 top-14 w-[min(82vw,320px)] rounded-2xl border border-white/10 bg-[#151515] p-3 shadow-2xl">
              {navItems.map(([label, href]) => (
                <Link
                  key={label}
                  href={href}
                  className="block rounded-xl px-4 py-3 text-sm font-semibold text-[#E8E8E8] hover:bg-white/5 hover:text-[#E79E15]"
                >
                  {label}
                </Link>
              ))}
              <Link
                href="/quote"
                className="mt-2 flex min-h-12 items-center justify-center rounded-xl bg-[#E79E15] px-4 text-sm font-bold text-[#0A0A0A]"
              >
                Build My Campaign
              </Link>
            </div>
          </details>
        </nav>
      </header>

      <section className="relative isolate overflow-hidden border-b border-white/10 bg-[#0A0A0A]">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute -right-40 top-8 h-[42rem] w-[42rem] rounded-full border border-[#E79E15]/15" />
          <div className="absolute -right-10 top-40 h-[26rem] w-[26rem] rounded-full border border-white/[0.06]" />
          <div className="absolute bottom-0 left-0 h-px w-2/3 bg-gradient-to-r from-[#E79E15]/60 via-[#E79E15]/10 to-transparent" />
        </div>

        <div className="relative mx-auto grid max-w-[1280px] gap-14 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:px-12 lg:py-28">
          <div className="max-w-4xl">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.24em] text-[#E79E15] sm:text-sm">
              Our story
            </p>
            <h1 className="max-w-[14ch] text-[2.8rem] font-black leading-[0.98] tracking-[-0.04em] text-white sm:text-6xl lg:text-[4.75rem]">
              Built in the Coachella Valley. Built for the businesses moving it forward.
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-[1.65] text-[#A7A7A7] sm:text-xl">
              BrightPath grew from a simple observation: local businesses work hard to earn attention, but meaningful visibility should not depend on being tied to one fixed location.
            </p>
            <div className="mt-9 flex flex-wrap gap-3 text-sm font-semibold text-[#E8E8E8]">
              {["Coachella Valley roots", "Mobile visibility", "Campaign proof"].map((item) => (
                <span key={item} className="rounded-full border border-white/15 bg-white/[0.03] px-4 py-2">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <aside className="relative rounded-3xl border border-[#E79E15]/25 bg-[#151515] p-7 shadow-[0_26px_80px_rgba(0,0,0,0.3)] sm:p-9">
            <div className="flex items-center gap-5 border-b border-white/10 pb-6">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-[#E79E15]/30 bg-[#E79E15]/10 text-xl font-black text-[#E79E15]">
                MT
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#E79E15]">Founder</p>
                <h2 className="mt-1 text-2xl font-black text-white">Marcus Tillman</h2>
              </div>
            </div>
            <p className="mt-6 text-base leading-[1.7] text-[#A7A7A7]">
              The idea for BrightPath came while Marcus was building a local service business door by door. The more businesses he met, the clearer the same challenge became: getting seen locally was harder than it should be.
            </p>
            <div className="mt-7 flex items-center gap-3 text-sm font-semibold text-[#E8E8E8]">
              <MapPin className="h-4 w-4 text-[#E79E15]" aria-hidden="true" />
              Coachella Valley, California
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-[#F5F0E7] text-[#0A0A0A]">
        <div className="mx-auto grid max-w-[1280px] gap-12 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[0.72fr_1.28fr] lg:px-12 lg:py-28">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#B8750B] sm:text-sm">
              Where it started
            </p>
            <h2 className="mt-4 max-w-[12ch] text-4xl font-black leading-[1.02] tracking-[-0.035em] sm:text-5xl">
              BrightPath did not start in a boardroom.
            </h2>
          </div>

          <div className="max-w-3xl space-y-6 text-lg leading-[1.75] text-[#4A4A4A]">
            <p>
              Before BrightPath, Marcus was running a subscription window-cleaning business and knocking on doors across the desert. More than 1,000 conversations with homeowners and local operators gave him a ground-level view of what it takes to build something here.
            </p>
            <p>
              In those conversations, one problem kept showing up: businesses needed attention, but many of the advertising options around them felt either fixed, distant, or difficult to connect to the places where customers were actually moving.
            </p>
            <p className="font-semibold text-[#0A0A0A]">
              BrightPath was built around a different idea: take the message to the audience, plan the movement intentionally, and give the client a clearer record of the work afterward.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#151515]">
        <div className="mx-auto max-w-[1280px] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
          <div className="mb-14 grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#E79E15] sm:text-sm">
                What guides the work
              </p>
              <h2 className="mt-4 max-w-[14ch] text-4xl font-black leading-[1.02] tracking-[-0.035em] text-white sm:text-5xl">
                A media company built around movement, context, and proof.
              </h2>
            </div>
            <p className="max-w-xl text-lg leading-[1.65] text-[#A7A7A7] lg:justify-self-end">
              The technology matters, but the larger job is simpler: understand the campaign, put it into the right environment, and make the delivery easier to review.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {principles.map(({ icon: Icon, number, title, body }) => (
              <article key={title} className="rounded-2xl border border-white/10 bg-[#0A0A0A] p-7 sm:p-8">
                <div className="mb-10 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#E79E15] text-[#0A0A0A]">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <span className="text-sm font-black text-[#E79E15]">{number}</span>
                </div>
                <h3 className="text-2xl font-black text-white">{title}</h3>
                <p className="mt-4 leading-[1.7] text-[#A7A7A7]">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F5F0E7] text-[#0A0A0A]">
        <div className="mx-auto grid max-w-[1280px] gap-12 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-2 lg:items-center lg:px-12 lg:py-28">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#B8750B] sm:text-sm">
              Why BrightPath exists
            </p>
            <h2 className="mt-4 max-w-[13ch] text-4xl font-black leading-[1.02] tracking-[-0.035em] sm:text-5xl">
              Make local visibility more active and more accountable.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-[1.7] text-[#4A4A4A]">
              BrightPath serves businesses, organizations, venues, events, and brands that want to be seen in the flow of the Coachella Valley rather than from one permanent point on a map.
            </p>
          </div>

          <div className="rounded-3xl border border-[#d8d2c8] bg-white/55 p-7 sm:p-9">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#B8750B]">The mission in practice</p>
            <div className="mt-7 space-y-5">
              {[
                "Start with the audience and campaign objective.",
                "Plan visibility around routes, destinations, timing, and events.",
                "Keep the message clear enough to work in motion.",
                "Document campaign delivery so the work can be reviewed afterward.",
              ].map((item) => (
                <div key={item} className="flex gap-4 border-b border-[#ded7cc] pb-5 last:border-b-0 last:pb-0">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#0A0A0A] text-[#E79E15]">
                    <Check className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <p className="font-semibold leading-[1.55] text-[#242424]">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-white/10 bg-[#0A0A0A]">
        <div className="pointer-events-none absolute -bottom-52 left-1/2 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full border border-[#E79E15]/15" aria-hidden="true" />
        <div className="relative mx-auto max-w-[1000px] px-5 py-20 text-center sm:px-8 sm:py-24 lg:py-28">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#E79E15] sm:text-sm">The next chapter</p>
          <h2 className="mx-auto mt-4 max-w-[15ch] text-4xl font-black leading-[1.02] tracking-[-0.035em] text-white sm:text-5xl lg:text-6xl">
            Put your brand in motion.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-[1.65] text-[#A7A7A7]">
            Tell us what you are trying to accomplish, where you want to be seen, and when the campaign needs to move.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/quote"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#E79E15] px-6 font-bold text-[#0A0A0A] transition hover:bg-[#f3b13b]"
            >
              Build My Campaign <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Link>
            <a
              href="tel:7603858989"
              className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/20 px-6 font-semibold text-white transition hover:border-[#E79E15] hover:text-[#E79E15]"
            >
              Call BrightPath
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  BarChart3,
  Camera,
  CheckCircle2,
  MessageSquare,
  QrCode,
  ChevronRight,
  ExternalLink,
  MapPin,
  RefreshCcw,
  Route,
  ShieldCheck,
  Info,
  X,
} from "lucide-react";

type View = "overview" | "route" | "proof" | "report";

const views: { id: View; label: string; icon: typeof Route }[] = [
  { id: "overview", label: "Campaign", icon: BarChart3 },
  { id: "route", label: "Route", icon: Route },
  { id: "proof", label: "Proof", icon: Camera },
  { id: "report", label: "Report", icon: ShieldCheck },
];

const proofCards = [
  { label: "Start proof", time: "9:02 AM", detail: "Palm Desert corridor", image: "/brightpathiq-demo/proof-1.jpg" },
  { label: "Mid-route proof", time: "12:18 PM", detail: "La Quinta business district", image: "/brightpathiq-demo/proof-2.jpg" },
  { label: "Audience-area proof", time: "2:36 PM", detail: "Palm Desert retail corridor", image: "/brightpathiq-demo/proof-3.jpg" },
  { label: "End proof", time: "4:57 PM", detail: "Indio event corridor", image: "/brightpathiq-demo/proof-4.jpg" },
];

export default function BrightPathIQDemoPage() {
  const [activeView, setActiveView] = useState<View>("overview");
  const [isGuideOpen, setIsGuideOpen] = useState(true);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsGuideOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <main className="brightpathiq-demo min-h-screen bg-[#f7f5f0] text-[#241d16]">
      <header className="border-b border-[#ded8ce] bg-[#fbfaf7]">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-5 sm:px-8 lg:px-10">
          <Link href="/" className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#3d2d1d] text-sm font-semibold text-[#f3c46b]">BP</span>
            <span>
              <span className="block text-[11px] font-semibold tracking-[0.22em] text-[#b27b18]">BRIGHTPATHIQ</span>
              <span className="block text-xs text-[#8c8175]">Client experience demo</span>
            </span>
          </Link>
          <div className="flex items-center gap-3">
            <a href="https://bpmobilebillboardsiq.live" target="_blank" rel="noopener noreferrer" className="hidden items-center gap-2 rounded-full border border-[#d9d0c3] px-4 py-2 text-sm font-medium text-[#4d4032] transition hover:border-[#b27b18] sm:inline-flex">
              Visit BrightPathIQ <ExternalLink className="h-3.5 w-3.5" />
            </a>
            <Link href="/quote" className="rounded-full bg-[#3d2d1d] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#5a4328]">Plan a campaign</Link>
          </div>
        </div>
      </header>

      <div className="border-b border-[#ddc79e] bg-[#f5ead1]">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-3 text-sm sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
          <p><span className="mr-2 rounded-full bg-[#b27b18] px-2 py-1 text-[10px] font-bold tracking-[0.14em] text-white">DEMO ACCOUNT</span> This is a guided sample using simulated campaign information.</p>
          <span className="text-xs font-medium text-[#806b4d]">No live client data is displayed.</span>
        </div>
      </div>

      <section className="mx-auto max-w-6xl px-5 pb-10 pt-12 sm:px-8 md:pt-16 lg:px-10">
        <div className="mb-8 max-w-3xl">
          <p className="mb-4 text-xs font-bold tracking-[0.2em] text-[#b27b18]">SEE THE CLIENT VIEW</p>
          <h1 className="text-4xl font-semibold leading-[1.05] tracking-[-0.035em] text-[#2b2118] sm:text-5xl md:text-6xl">Your campaign, organized from route to report.</h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[#756a5e]">BrightPathIQ gives clients one clear place to see what is running, where the truck went, the proof collected, and the campaign report delivered afterward.</p>
        </div>

        <div className="rounded-[24px] border border-[#e2ddd4] bg-white p-3 shadow-[0_18px_60px_rgba(65,47,25,0.08)] sm:p-5">
          <div className="flex flex-col gap-4 border-b border-[#ece7df] pb-5 md:flex-row md:items-start md:justify-between">
            <div>
              <div className="flex flex-wrap items-center gap-2"><p className="text-[11px] font-semibold tracking-[0.2em] text-[#b27b18]">BRIGHTPATHIQ CAMPAIGN REPORT</p><span className="rounded-full border border-[#ddc79e] px-2 py-1 text-[10px] font-semibold tracking-[0.12em] text-[#806b4d]">CLIENT VIEW</span></div>
              <h2 className="mt-2 text-2xl font-semibold text-[#2b2118] sm:text-3xl">Desert Bloom Summer Campaign</h2>
              <p className="mt-2 text-sm text-[#8b8074]">Sample Beverage Brand · Aug 2, 2026 – Aug 15, 2026</p>
            </div>
            <div className="flex flex-wrap items-center gap-2"><button type="button" onClick={() => setIsGuideOpen(true)} className="inline-flex items-center gap-2 rounded-full border border-[#d9d0c3] px-3 py-2 text-xs font-semibold text-[#756a5e] transition hover:border-[#b27b18] hover:text-[#b27b18]"><Info className="h-4 w-4" /> How to read this demo</button><div className="flex items-center gap-2 rounded-full bg-[#e9f4eb] px-3 py-2 text-xs font-semibold text-[#3f7b4d]"><CheckCircle2 className="h-4 w-4" /> Sample campaign</div></div>
          </div>

          <div className="py-5">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <p className="text-[10px] font-semibold tracking-[0.16em] text-[#998c7e]">ILLUSTRATIVE CAMPAIGN METRICS</p>
              <p className="text-xs text-[#8b8074]">Example figures shown for demonstration only.</p>
            </div>
            <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
              {[["Routes", "1"], ["Photo proof", "4"]].map(([label, value]) => (
                <div key={label} className="rounded-2xl bg-[#faf9f6] p-4 lg:col-span-1">
                  <p className="text-[10px] font-semibold tracking-[0.14em] text-[#998c7e]">{label}</p>
                  <p className="mt-2 text-2xl font-semibold text-[#2b2118]">{value}</p>
                </div>
              ))}
              <div className="grid grid-cols-2 gap-x-4 gap-y-3 rounded-2xl border border-[#e5e0d8] px-4 py-3 sm:col-span-2 sm:grid-cols-4 lg:col-span-4">
                {[["QR scans", "126"], ["SMS actions", "48"], ["Miles documented", "150"], ["Verification", "100%"]].map(([label, value]) => (
                  <div key={label}>
                    <p className="text-[10px] font-semibold tracking-[0.12em] text-[#998c7e]">{label}</p>
                    <p className="mt-1 text-lg font-semibold text-[#2b2118]">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 rounded-2xl bg-[#f7f5f0] p-2">
            {views.map(({ id, label, icon: Icon }) => (
              <button key={id} type="button" onClick={() => setActiveView(id)} className={`inline-flex flex-1 items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold transition sm:flex-none ${activeView === id ? "bg-[#3d2d1d] text-white shadow-sm" : "text-[#756a5e] hover:bg-white hover:text-[#2b2118]"}`}>
                <Icon className="h-4 w-4" /> {label}
              </button>
            ))}
          </div>

          <div className="mt-5">
            {activeView === "overview" && <Overview />}
            {activeView === "route" && <RouteView />}
            {activeView === "proof" && <ProofView />}
            {activeView === "report" && <ReportView />}
          </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-16 sm:px-8 lg:px-10">
        <div className="grid gap-5 md:grid-cols-3">
          {[["01", "Campaign", "The campaign name, dates, truck, market, and current status stay in one view."], ["02", "Delivery proof", "Route records, mileage, photos, and verification notes are organized for review."], ["03", "Client report", "A clean summary gives you a record of what ran and what was delivered."]].map(([number, title, body]) => (
            <article key={number} className="rounded-2xl border border-[#e2ddd4] bg-white p-6">
              <span className="text-3xl font-semibold text-[#c58a24]">{number}</span>
              <h3 className="mt-5 text-xl font-semibold text-[#2b2118]">{title}</h3>
              <p className="mt-2 leading-relaxed text-[#756a5e]">{body}</p>
            </article>
          ))}
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-5 rounded-[24px] bg-[#3d2d1d] p-7 text-white sm:p-9 md:flex-row md:items-center">
          <div><p className="text-xs font-semibold tracking-[0.18em] text-[#f3c46b]">READY TO SEE YOUR CAMPAIGN HERE?</p><h2 className="mt-2 text-2xl font-semibold">Let’s plan the route and build the proof.</h2></div>
          <Link href="/quote" className="inline-flex items-center gap-2 rounded-full bg-[#f3c46b] px-5 py-3 text-sm font-bold text-[#3d2d1d] transition hover:bg-white">Start a campaign <ChevronRight className="h-4 w-4" /></Link>
        </div>
      </section>
      {isGuideOpen && (
        <div className="iq-guide-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setIsGuideOpen(false); }}>
          <section className="iq-guide-modal" role="dialog" aria-modal="true" aria-labelledby="iq-guide-title">
            <div className="flex items-start justify-between gap-5 border-b border-white/10 pb-5">
              <div><p className="text-[10px] font-bold tracking-[0.2em] text-[#f3c76c]">BRIGHTPATHIQ DEMO GUIDE</p><h2 id="iq-guide-title" className="mt-2 text-2xl font-semibold text-white sm:text-3xl">Follow the campaign from start to finish</h2><p className="mt-3 max-w-xl text-sm leading-relaxed text-[#aab7b0]">This is the client view. Start with the campaign, then follow the work from route to proof to report.</p></div>
              <button type="button" aria-label="Close demo guide" onClick={() => setIsGuideOpen(false)} className="rounded-full border border-white/10 p-2 text-[#aab7b0] transition hover:border-[#f3c76c] hover:text-white"><X className="h-5 w-5" /></button>
            </div>
            <div className="iq-guide-list py-5">
              {[["Campaign", "The starting point: client, dates, market, service, and current status."], ["Route", "Where the campaign ran: coverage area, cities, operating window, and mileage."], ["Proof", "The record of delivery: representative photos tied to moments along the route."], ["Report", "The finished review: delivery records, proof, engagement, and verification in one place."]].map(([title, body], index) => <div key={title} className="iq-guide-item"><span className="iq-guide-number">0{index + 1}</span><div><h3 className="text-sm font-semibold text-white">{title}</h3><p className="mt-1 text-sm leading-relaxed text-[#9ba9a2]">{body}</p></div></div>)}
            </div>
            <div className="flex flex-col gap-3 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between"><p className="text-xs text-[#8f9d96]">All figures and records shown here are simulated demonstration content.</p><button type="button" onClick={() => setIsGuideOpen(false)} className="inline-flex items-center justify-center rounded-full bg-[#f3c76c] px-5 py-2.5 text-sm font-bold text-[#111716] transition hover:bg-white">Continue to demo</button></div>
          </section>
        </div>
      )}
    </main>
  );
}

function Overview() {
  return (
    <div className="grid gap-5 lg:grid-cols-[1.35fr_0.65fr]">
      <div className="overflow-hidden rounded-2xl border border-[#e5e0d8]">
        <div className="flex items-center justify-between border-b border-[#e5e0d8] px-5 py-4"><div><p className="text-[10px] font-semibold tracking-[0.15em] text-[#9b8e80]">CAMPAIGN OVERVIEW</p><h3 className="mt-1 text-lg font-semibold">What is running</h3></div><span className="rounded-full bg-[#f5ead1] px-3 py-1 text-xs font-semibold text-[#8a631a]">Demonstration</span></div>
        <div className="grid gap-3 p-5 sm:grid-cols-2">{[["Campaign ID", "BP-DEMO-2026-0815"], ["Objective", "Build local awareness and visits"], ["Market", "Coachella Valley"], ["Service", "Mobile LED advertising"], ["Campaign dates", "Aug 2 – Aug 15, 2026"], ["Operating window", "8:00 AM – 4:00 PM"], ["Assigned truck", "BP 01"], ["Route area", "Indio · La Quinta · Palm Desert"], ["Creative", "Sample beverage brand message"]].map(([label, value]) => <div key={label} className="rounded-xl bg-[#faf9f6] p-4"><p className="text-[10px] font-semibold tracking-[0.12em] text-[#9b8e80]">{label}</p><p className="mt-2 font-semibold text-[#3a2c20]">{value}</p></div>)}</div>
      </div>
      <div className="rounded-2xl border border-[#e5e0d8] bg-[#faf9f6] p-5"><div className="flex items-center justify-between"><p className="text-[10px] font-semibold tracking-[0.15em] text-[#9b8e80]">CAMPAIGN STATUS</p><RefreshCcw className="h-4 w-4 text-[#b27b18]" /></div><div className="mt-6 space-y-5">{["Campaign scheduled", "Route assigned", "Delivery documented", "Report prepared"].map((item, index) => <div key={item} className="flex items-center gap-3"><span className={`flex h-7 w-7 items-center justify-center rounded-full ${index < 3 ? "bg-[#e9f4eb] text-[#3f7b4d]" : "bg-[#f5ead1] text-[#b27b18]"}`}>{index < 3 ? <CheckCircle2 className="h-4 w-4" /> : <span className="text-xs font-bold">{index + 1}</span>}</span><span className="text-sm font-medium text-[#4b3c2f]">{item}</span></div>)}</div></div>
    </div>
  );
}

function RouteView() {
  return (
    <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
      <div className="relative min-h-[300px] overflow-hidden rounded-2xl border border-[#d9d1c3] bg-[#dfe6dc]">
        <iframe
          title="Google Maps sample route area for the Coachella Valley"
          src="https://www.google.com/maps?q=Coachella+Valley,+CA&output=embed"
          className="absolute inset-0 h-full min-h-[300px] w-full border-0 grayscale-[18%] contrast-[96%]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <div className="pointer-events-none absolute inset-0 bg-[#ead7ad]/10" />
        <div className="absolute left-4 top-4 flex flex-wrap gap-2">
          <span className="rounded-full bg-white/92 px-3 py-2 text-xs font-semibold text-[#4a5d4b] shadow-sm">Google Maps area view</span>
          <span className="rounded-full bg-[#3d2d1d]/90 px-3 py-2 text-xs font-semibold text-white shadow-sm">Sample route</span>
        </div>
        <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-3 rounded-xl bg-white/92 px-4 py-3 text-xs font-semibold text-[#4d5e4b] shadow-sm">
          <span>Indio</span><span className="text-[#b27b18]">→</span><span>La Quinta</span><span className="text-[#b27b18]">→</span><span>Palm Desert</span>
        </div>
      </div>
      <div className="rounded-2xl border border-[#e5e0d8] p-5">
        <p className="text-[10px] font-semibold tracking-[0.15em] text-[#9b8e80]">ROUTE SUMMARY</p>
        <h3 className="mt-2 text-xl font-semibold">Coachella Valley Business & Event Corridor</h3>
        <p className="mt-3 text-sm leading-relaxed text-[#756a5e]">The client view shows the campaign area, planned coverage, and delivery record in one place.</p>
        <div className="mt-5 space-y-3">
          {[[ "Operating window", "8:00 AM – 4:00 PM" ], [ "Cities covered", "3" ], [ "Miles documented", "150" ], [ "GPS record", "Complete" ]].map(([label, value]) => (
            <div key={label} className="flex items-center justify-between border-b border-[#eee9e2] py-3 text-sm">
              <span className="text-[#8b8074]">{label}</span><span className="font-semibold text-[#3a2c20]">{value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProofView() {
  return <div>
    <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <div><p className="text-[10px] font-semibold tracking-[0.15em] text-[#9b8e80]">PROOF GALLERY</p><h3 className="mt-1 text-xl font-semibold">Photo proof collected along the route</h3><p className="mt-2 text-sm text-[#8b8074]">Sample campaign photography used to illustrate the client experience.</p></div>
      <span className="w-fit rounded-full bg-[#e9f4eb] px-3 py-1 text-xs font-semibold text-[#3f7b4d]">4 examples</span>
    </div>
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {proofCards.map((card, index) => <article key={card.label} className="overflow-hidden rounded-2xl border border-[#e5e0d8] bg-white">
        <div className="relative h-48 overflow-hidden bg-[#e8e1d6]">
          <img src={card.image} alt={`Sample campaign photo: ${card.detail}`} className="h-full w-full object-cover transition duration-500 hover:scale-105" loading="lazy" />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 pt-10 text-white"><p className="text-sm font-semibold">BrightPath photo {index + 1}</p><p className="mt-1 text-xs text-white/80">{card.detail}</p></div>
        </div>
        <div className="flex items-center justify-between p-4"><div><p className="text-sm font-semibold">{card.label}</p><p className="mt-1 text-xs text-[#8b8074]">{card.time}</p></div><CheckCircle2 className="h-5 w-5 text-[#3f7b4d]" /></div>
      </article>)}
    </div>
  </div>;
}
function ReportView() {
  return (
    <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
      <div className="rounded-2xl bg-[#3d2d1d] p-6 text-white">
        <p className="text-[10px] font-semibold tracking-[0.15em] text-[#f3c46b]">VERIFICATION SUMMARY</p>
        <h3 className="mt-3 text-2xl font-semibold">Delivery is organized for review.</h3>
        <p className="mt-4 leading-relaxed text-white/75">BrightPathIQ brings route records, photo proof, QR engagement, SMS actions, mileage, and delivery notes into one client-facing report.</p>
        <div className="mt-7 space-y-3">
          {["1 route block documented", "4 photo proof records collected", "126 QR scans shown", "48 SMS actions shown", "150 miles recorded", "Client report ready"].map((item) => (
            <div key={item} className="flex items-center gap-3 text-sm"><CheckCircle2 className="h-4 w-4 text-[#f3c46b]" /> {item}</div>
          ))}
        </div>
      </div>

      <div className="rounded-2xl border border-[#e5e0d8] bg-white p-6">
        <div className="flex flex-col gap-3 border-b border-[#eee9e2] pb-5 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-[10px] font-semibold tracking-[0.15em] text-[#9b8e80]">CLIENT REPORT PREVIEW</p>
            <h3 className="mt-1 text-xl font-semibold text-[#2b2118]">Campaign delivery summary</h3>
            <p className="mt-1 text-xs text-[#8b8074]">Desert Bloom Summer Campaign · BP-DEMO-2026-0815</p>
          </div>
          <span className="w-fit rounded-full bg-[#e9f4eb] px-3 py-1 text-xs font-semibold text-[#3f7b4d]">Verification example</span>
        </div>

        <div className="grid gap-3 py-5 sm:grid-cols-2">
          {[
            ["Campaign dates", "Aug 2 – Aug 15, 2026"],
            ["Market", "Coachella Valley"],
            ["Assigned truck", "BP 01"],
            ["Delivery status", "Completed for review"],
          ].map(([label, value]) => (
            <div key={label} className="rounded-xl bg-[#faf9f6] p-4">
              <p className="text-[10px] font-semibold tracking-[0.12em] text-[#9b8e80]">{label}</p>
              <p className="mt-2 text-sm font-semibold text-[#3a2c20]">{value}</p>
            </div>
          ))}
        </div>

        <div className="rounded-xl border border-[#eee9e2] p-4">
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold text-[#3a2c20]">Delivery summary</p>
            <span className="text-xs font-semibold text-[#3f7b4d]">Proof example</span>
          </div>
          <div className="mt-3 grid grid-cols-2 gap-3 text-sm sm:grid-cols-4">
            {[
              ["Route", "1 block"],
              ["Miles", "150"],
              ["Photos", "4"],
              ["GPS", "Complete"],
            ].map(([label, value]) => (
              <div key={label}>
                <p className="text-xs text-[#8b8074]">{label}</p>
                <p className="mt-1 font-semibold text-[#3a2c20]">{value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl bg-[#f7f5f0] p-4">
            <div className="flex items-center gap-2">
              <QrCode className="h-4 w-4 text-[#b27b18]" />
              <p className="text-sm font-semibold text-[#3a2c20]">QR engagement</p>
            </div>
            <p className="mt-3 text-2xl font-semibold text-[#2b2118]">126</p>
            <p className="text-xs text-[#8b8074]">sample scans shown</p>
          </div>
          <div className="rounded-xl bg-[#f7f5f0] p-4">
            <div className="flex items-center gap-2">
              <MessageSquare className="h-4 w-4 text-[#b27b18]" />
              <p className="text-sm font-semibold text-[#3a2c20]">SMS actions</p>
            </div>
            <p className="mt-3 text-2xl font-semibold text-[#2b2118]">48</p>
            <p className="text-xs text-[#8b8074]">sample actions shown</p>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between rounded-xl border border-[#eee9e2] px-4 py-3">
          <div>
            <p className="text-sm font-semibold text-[#3a2c20]">Photo proof</p>
            <p className="mt-1 text-xs text-[#8b8074]">Start, mid-route, audience-area, and end records</p>
          </div>
          <span className="rounded-full bg-[#f5ead1] px-3 py-1 text-xs font-semibold text-[#8a631a]">4 records</span>
        </div>

        <p className="mt-4 text-xs leading-relaxed text-[#8b8074]">A sample client-ready record of what ran, where it ran, and what was documented.</p>
      </div>
    </div>
  );
}

"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
}

const inputClass =
  "mt-2 h-[52px] w-full rounded-xl border border-[#d8d2c8] bg-white px-4 text-base text-[#0A0A0A] outline-none transition placeholder:text-[#858079] hover:border-[#bdb5a8] focus:border-[#E79E15] focus:ring-2 focus:ring-[#E79E15]/20";
const selectClass =
  "mt-2 h-[52px] w-full appearance-none rounded-xl border border-[#d8d2c8] bg-white px-4 pr-10 text-base text-[#0A0A0A] outline-none transition hover:border-[#bdb5a8] focus:border-[#E79E15] focus:ring-2 focus:ring-[#E79E15]/20";
const labelClass = "text-sm font-semibold text-[#4A4A4A]";
const fieldsetClass =
  "rounded-2xl border border-[#ddd6ca] bg-white/55 p-5 shadow-[0_18px_50px_rgba(36,36,36,0.04)] sm:p-7";

export default function QuotePage() {
  const [formData, setFormData] = useState({
    fullName: "",
    businessName: "",
    email: "",
    phone: "",
    campaignType: "",
    startDate: "",
    duration: "",
    budget: "",
    targetAreas: "",
    creativeNeeds: "",
    comments: "",
    "bot-field": "",
  });

  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});
  const firstErrorRef = useRef<HTMLInputElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    if (errors[name as keyof FormErrors]) {
      setErrors({
        ...errors,
        [name]: undefined,
      });
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Please enter your full name.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Please enter your phone number.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      setTimeout(() => {
        firstErrorRef.current?.focus();
      }, 100);
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setStatus("loading");
    setMessage("");

    try {
      const netlifyBody = new URLSearchParams({
        "form-name": "quote",
        ...formData,
      }).toString();

      const netlifyResponse = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: netlifyBody,
      });

      const { "bot-field": botField, ...apiData } = formData;
      fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...apiData, _hp: botField }),
      }).catch(() => {});

      if (netlifyResponse.ok) {
        if (
          typeof window !== "undefined" &&
          typeof (window as any).fbq === "function"
        ) {
          (window as any).fbq("track", "Lead");
        }
        router.push("/thank-you");
      } else {
        setStatus("error");
        setMessage("There was an issue sending your request. Please try again.");
      }
    } catch (error) {
      setStatus("error");
      setMessage("There was an issue sending your request. Please try again.");
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const delayId = setTimeout(() => {
      const nocache = Math.random().toString(36).substring(7);
      const script = document.createElement("script");
      script.src =
        "https://assets.apollo.io/js/apollo-inbound.js?nocache=" + nocache;
      script.defer = true;
      script.onload = function () {
        try {
          (window as any).ApolloInbound.formEnrichment.init({
            appId: "69bd745a4274040015b3f1c7",
          });
        } catch (err) {
          // Apollo init failed silently
        }
      };
      document.head.appendChild(script);
    }, 2000);

    return () => {
      clearTimeout(delayId);
    };
  }, []);

  return (
    <main className="min-h-screen bg-[#0A0A0A] text-[#0A0A0A]">
      <div className="grid min-h-screen lg:grid-cols-[0.78fr_1.22fr]">
        <aside className="relative isolate overflow-hidden border-b border-white/10 bg-[#0A0A0A] px-5 py-7 text-white sm:px-8 sm:py-9 lg:sticky lg:top-0 lg:h-screen lg:border-b-0 lg:border-r lg:px-12 lg:py-10 xl:px-16">
          <div className="absolute inset-0" aria-hidden="true">
            <div className="absolute -right-36 top-[18%] h-[34rem] w-[34rem] rounded-full border border-[#E79E15]/15" />
            <div className="absolute -right-20 top-[24%] h-[22rem] w-[22rem] rounded-full border border-white/[0.07]" />
            <div className="absolute bottom-[18%] left-0 h-px w-2/3 bg-gradient-to-r from-[#E79E15]/60 to-transparent" />
          </div>

          <div className="relative z-10 flex h-full min-h-[520px] flex-col">
            <div className="flex items-center justify-between gap-5">
              <Link href="/" aria-label="BrightPath Billboards home" className="inline-flex">
                <Image
                  src="/brightpath-logo.png"
                  alt="BrightPath Billboards"
                  width={168}
                  height={44}
                  priority
                  className="h-10 w-auto sm:h-11"
                />
              </Link>
              <Link
                href="/"
                className="inline-flex min-h-11 items-center text-sm font-semibold text-[#A7A7A7] transition-colors hover:text-[#E79E15] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E79E15] focus-visible:ring-offset-4 focus-visible:ring-offset-[#0A0A0A]"
              >
                ← Back home
              </Link>
            </div>

            <div className="mt-auto max-w-[620px] pt-20 lg:pb-8 lg:pt-12">
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.24em] text-[#E79E15] sm:text-sm">
                Build your campaign
              </p>
              <h1 className="max-w-[10ch] text-[2.7rem] font-black leading-[0.98] tracking-[-0.035em] text-white sm:text-6xl lg:text-[4.25rem]">
                Put your message where the valley is moving.
              </h1>
              <p className="mt-7 max-w-xl text-lg leading-[1.6] text-[#A7A7A7]">
                Tell us what you are trying to accomplish. We will help shape the
                route, timing, and campaign approach around the people you need
                to reach.
              </p>

              <div className="mt-10 grid max-w-xl gap-3 sm:grid-cols-3 lg:mt-12 lg:grid-cols-1 xl:grid-cols-3">
                {[
                  ["01", "Tell us the goal"],
                  ["02", "Shape the route"],
                  ["03", "Build the plan"],
                ].map(([number, text]) => (
                  <div
                    key={number}
                    className="border-t border-white/15 pt-4 sm:min-h-24 lg:min-h-0 xl:min-h-24"
                  >
                    <span className="block text-sm font-bold text-[#E79E15]">{number}</span>
                    <span className="mt-2 block text-sm font-semibold leading-snug text-[#E8E8E8]">
                      {text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-5 gap-y-2 border-t border-white/10 pt-5 text-sm text-[#A7A7A7] lg:mt-0">
              <span>Coachella Valley mobile media</span>
              <span className="text-[#E79E15]" aria-hidden="true">•</span>
              <span>BrightPathIQ reporting</span>
            </div>
          </div>
        </aside>

        <section className="bg-[#F5F0E7] px-5 py-10 sm:px-8 sm:py-12 md:px-10 lg:px-12 lg:py-14 xl:px-16 xl:py-16">
          <div className="mx-auto max-w-[820px]">
            <header className="mb-9 border-b border-[#d8d2c8] pb-8 sm:mb-10 sm:pb-10">
              <div className="flex flex-wrap items-start justify-between gap-5">
                <div className="max-w-2xl">
                  <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-[#B8750B] sm:text-sm">
                    Campaign consultation
                  </p>
                  <h2 className="max-w-[14ch] text-4xl font-black leading-[1.02] tracking-[-0.03em] text-[#0A0A0A] sm:text-5xl">
                    Let&apos;s build the right campaign.
                  </h2>
                  <p className="mt-5 max-w-2xl text-base leading-[1.65] text-[#4A4A4A] sm:text-lg">
                    A few details help us recommend the right visibility, timing,
                    and next step.
                  </p>
                </div>
                <p className="rounded-full border border-[#d8d2c8] bg-white/70 px-3 py-2 text-xs font-semibold text-[#4A4A4A]">
                  <span className="text-[#C64040]">*</span> Required
                </p>
              </div>
            </header>

            {status === "error" && (
              <div
                role="alert"
                aria-live="assertive"
                className="mb-8 rounded-xl border border-[#C64040]/30 bg-[#C64040]/10 px-4 py-3 text-sm text-[#8d2626]"
              >
                <strong className="font-semibold">Error:</strong> {message}
              </div>
            )}

            <form
              name="quote"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="space-y-5 sm:space-y-6"
              noValidate
            >
              <input type="hidden" name="form-name" value="quote" />

              <fieldset className={fieldsetClass}>
                <legend className="sr-only">Contact details</legend>
                <div className="mb-6 flex items-start gap-4 border-b border-[#e1dbd1] pb-5">
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#0A0A0A] text-xs font-bold text-[#E79E15]">
                    01
                  </span>
                  <div>
                    <h3 className="text-xl font-bold text-[#0A0A0A]">Contact details</h3>
                    <p className="mt-1 text-sm leading-relaxed text-[#4A4A4A]">Who should we speak with about the campaign?</p>
                  </div>
                </div>

                <div className="grid gap-x-6 gap-y-6 md:grid-cols-2">
                  <div>
                    <label htmlFor="fullName" className={labelClass}>
                      Full name <span className="text-[#C64040]">*</span>
                    </label>
                    <input
                      ref={errors.fullName ? firstErrorRef : null}
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      aria-invalid={!!errors.fullName}
                      aria-describedby={errors.fullName ? "fullName-error" : undefined}
                      className={inputClass}
                    />
                    {errors.fullName && (
                      <p id="fullName-error" className="mt-2 text-sm font-medium text-[#C64040]">
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="businessName" className={labelClass}>
                      Business or organization
                    </label>
                    <input
                      type="text"
                      id="businessName"
                      name="businessName"
                      value={formData.businessName}
                      onChange={handleChange}
                      placeholder="Who are we building for?"
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className={labelClass}>
                      Email <span className="text-[#C64040]">*</span>
                    </label>
                    <input
                      ref={!errors.fullName && errors.email ? firstErrorRef : null}
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="you@company.com"
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "email-error" : undefined}
                      className={inputClass}
                    />
                    {errors.email && (
                      <p id="email-error" className="mt-2 text-sm font-medium text-[#C64040]">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className={labelClass}>
                      Phone <span className="text-[#C64040]">*</span>
                    </label>
                    <input
                      ref={!errors.fullName && !errors.email && errors.phone ? firstErrorRef : null}
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="(760) 555-1234"
                      aria-invalid={!!errors.phone}
                      aria-describedby={errors.phone ? "phone-error" : undefined}
                      className={inputClass}
                    />
                    {errors.phone && (
                      <p id="phone-error" className="mt-2 text-sm font-medium text-[#C64040]">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>
              </fieldset>

              <fieldset className={fieldsetClass}>
                <legend className="sr-only">Campaign direction</legend>
                <div className="mb-6 flex items-start gap-4 border-b border-[#e1dbd1] pb-5">
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#0A0A0A] text-xs font-bold text-[#E79E15]">
                    02
                  </span>
                  <div>
                    <h3 className="text-xl font-bold text-[#0A0A0A]">Campaign direction</h3>
                    <p className="mt-1 text-sm leading-relaxed text-[#4A4A4A]">What should move, and where should people see it?</p>
                  </div>
                </div>

                <div className="grid gap-x-6 gap-y-6 md:grid-cols-2">
                  <div className="relative">
                    <label htmlFor="campaignType" className={labelClass}>
                      What are you promoting?
                    </label>
                    <select id="campaignType" name="campaignType" value={formData.campaignType} onChange={handleChange} className={selectClass}>
                      <option value="">Choose a campaign type</option>
                      <option value="Business Advertising">Business Advertising</option>
                      <option value="Event Promotion">Event Promotion</option>
                      <option value="Political Campaign">Political Campaign</option>
                      <option value="Community Outreach">Community Outreach</option>
                      <option value="Other">Other</option>
                    </select>
                    <span className="pointer-events-none absolute bottom-[15px] right-4 text-[#B8750B]">⌄</span>
                  </div>

                  <div className="relative">
                    <label htmlFor="creativeNeeds" className={labelClass}>
                      Creative support
                    </label>
                    <select id="creativeNeeds" name="creativeNeeds" value={formData.creativeNeeds} onChange={handleChange} className={selectClass}>
                      <option value="">Tell us where you are</option>
                      <option value="I have ready-to-go visuals">I have ready-to-go visuals</option>
                      <option value="I need design assistance">I need design assistance</option>
                    </select>
                    <span className="pointer-events-none absolute bottom-[15px] right-4 text-[#B8750B]">⌄</span>
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="targetAreas" className={labelClass}>
                      Where should people see you?
                    </label>
                    <input type="text" id="targetAreas" name="targetAreas" value={formData.targetAreas} onChange={handleChange} placeholder="Cities, corridors, venues, or events" className={inputClass} />
                  </div>
                </div>
              </fieldset>

              <fieldset className={fieldsetClass}>
                <legend className="sr-only">Timing and investment</legend>
                <div className="mb-6 flex items-start gap-4 border-b border-[#e1dbd1] pb-5">
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#0A0A0A] text-xs font-bold text-[#E79E15]">
                    03
                  </span>
                  <div>
                    <h3 className="text-xl font-bold text-[#0A0A0A]">Timing &amp; investment</h3>
                    <p className="mt-1 text-sm leading-relaxed text-[#4A4A4A]">Give us the timing and working range you have in mind.</p>
                  </div>
                </div>

                <div className="grid gap-x-6 gap-y-6 md:grid-cols-2">
                  <div>
                    <label htmlFor="startDate" className={labelClass}>
                      When would you like to start?
                    </label>
                    <input type="date" id="startDate" name="startDate" value={formData.startDate} onChange={handleChange} className={inputClass} />
                  </div>

                  <div className="relative">
                    <label htmlFor="duration" className={labelClass}>
                      How long do you need visibility?
                    </label>
                    <select id="duration" name="duration" value={formData.duration} onChange={handleChange} className={selectClass}>
                      <option value="">Choose a duration</option>
                      <option value="1–2 days">1–2 days</option>
                      <option value="1 week">1 week</option>
                      <option value="2–4 weeks">2–4 weeks</option>
                      <option value="Ongoing">Ongoing</option>
                    </select>
                    <span className="pointer-events-none absolute bottom-[15px] right-4 text-[#B8750B]">⌄</span>
                  </div>

                  <div className="relative md:col-span-2">
                    <label htmlFor="budget" className={labelClass}>
                      Working budget
                    </label>
                    <select id="budget" name="budget" value={formData.budget} onChange={handleChange} className={selectClass}>
                      <option value="">Choose a range</option>
                      <option value="$500–$1,000">$500–$1,000</option>
                      <option value="$1,000–$3,000">$1,000–$3,000</option>
                      <option value="$3,000–$10,000">$3,000–$10,000</option>
                      <option value="$10K+">$10K+</option>
                    </select>
                    <span className="pointer-events-none absolute bottom-[15px] right-4 text-[#B8750B]">⌄</span>
                  </div>
                </div>
              </fieldset>

              <fieldset className={fieldsetClass}>
                <legend className="sr-only">Additional details</legend>
                <div className="mb-6 flex items-start gap-4 border-b border-[#e1dbd1] pb-5">
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#0A0A0A] text-xs font-bold text-[#E79E15]">
                    04
                  </span>
                  <div>
                    <h3 className="text-xl font-bold text-[#0A0A0A]">Anything we should know?</h3>
                    <p className="mt-1 text-sm leading-relaxed text-[#4A4A4A]">Add the goal, key dates, or priorities that would help us prepare.</p>
                  </div>
                </div>

                <div>
                  <label htmlFor="comments" className={labelClass}>
                    Your goal, key dates, or priorities
                  </label>
                  <textarea
                    id="comments"
                    name="comments"
                    value={formData.comments}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Tell us what a successful campaign would accomplish."
                    className="mt-2 min-h-36 w-full resize-y rounded-xl border border-[#d8d2c8] bg-white px-4 py-3 text-base leading-relaxed text-[#0A0A0A] outline-none transition placeholder:text-[#858079] hover:border-[#bdb5a8] focus:border-[#E79E15] focus:ring-2 focus:ring-[#E79E15]/20"
                  />
                </div>
              </fieldset>

              <div className="rounded-2xl border border-[#d8d2c8] bg-[#eee7dc] p-5 sm:p-6">
                <p className="text-sm leading-relaxed text-[#4A4A4A]">
                  We typically respond within minutes during business hours. Your
                  information is used to prepare a relevant campaign conversation.
                </p>

                <p className="hidden">
                  <label>
                    Don&#8217;t fill this out if you&#8217;re human:
                    <input
                      type="text"
                      name="bot-field"
                      value={formData["bot-field"]}
                      onChange={handleChange}
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </label>
                </p>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="mt-5 inline-flex min-h-[52px] w-full items-center justify-center rounded-xl bg-[#E79E15] px-7 py-3 text-base font-bold text-[#0A0A0A] shadow-[0_12px_30px_rgba(183,117,11,0.18)] transition hover:bg-[#B8750B] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A0A0A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#eee7dc] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                >
                  {status === "loading" ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="h-5 w-5 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Sending…
                    </span>
                  ) : (
                    "Start the conversation"
                  )}
                </button>
              </div>
            </form>

            <div className="mt-8 flex flex-col gap-2 border-t border-[#d8d2c8] pt-6 text-sm text-[#4A4A4A] sm:flex-row sm:items-center sm:justify-between">
              <span>Prefer to talk first?</span>
              <a
                href="tel:+17603858989"
                className="inline-flex min-h-11 items-center font-bold text-[#B8750B] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E79E15]"
              >
                Call (760) 385-8989
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

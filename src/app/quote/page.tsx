"use client";

import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
}

const inputClass =
  "mt-2 w-full border-b border-[#cfd2cc] bg-transparent px-0 py-3 text-[#171a17] placeholder:text-[#8c928b] focus:border-[#b77918] focus:outline-none";
const selectClass =
  "mt-2 w-full appearance-none border-b border-[#cfd2cc] bg-transparent px-0 py-3 pr-8 text-[#171a17] focus:border-[#b77918] focus:outline-none";

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
    <main
      className="min-h-screen bg-[#f0f0e9] text-[#171a17]"
      style={{ fontFamily: "var(--font-event)" }}
    >
      <div className="grid min-h-screen lg:grid-cols-[0.82fr_1.18fr]">
        <aside className="relative isolate overflow-hidden bg-[#101411] px-6 py-8 text-[#f4f1e8] sm:px-10 lg:px-14 lg:py-12">
          <div className="absolute inset-0 opacity-40" aria-hidden="true">
            <div className="absolute -right-20 top-24 h-[34rem] w-px rotate-[24deg] bg-[#e3b04b]" />
            <div className="absolute right-20 top-0 h-[28rem] w-px rotate-[24deg] bg-white/20" />
            <div className="absolute bottom-32 -left-16 h-px w-[34rem] rotate-[-8deg] bg-[#e3b04b]/60" />
            <div className="absolute bottom-20 left-0 h-px w-[20rem] bg-white/15" />
          </div>

          <div className="relative z-10 flex min-h-[34rem] flex-col lg:min-h-full">
            <Link
              href="/"
              className="w-fit text-sm text-[#d7d8d1] transition-colors hover:text-[#f7d382]"
            >
              BrightPath
            </Link>

            <div className="mt-auto max-w-xl pt-24 lg:pb-8">
              <p className="mb-5 text-xs font-medium tracking-[0.18em] text-[#e3b04b]">
                CAMPAIGN CONSULTATION
              </p>
              <h1 className="max-w-lg text-5xl font-medium leading-[1.02] tracking-normal sm:text-6xl">
                Put your message where the valley is moving.
              </h1>
              <p className="mt-7 max-w-md text-base leading-[1.75] text-[#c7ccc6]">
                Tell us what you are trying to accomplish. We will help shape the
                route, timing, and campaign approach around the people you need
                to reach.
              </p>

              <div className="mt-12 grid max-w-md grid-cols-3 border-t border-white/15 pt-5 text-xs text-[#b7bdb6]">
                <div>
                  <span className="block text-lg text-[#f4f1e8]">01</span>
                  Tell us the goal
                </div>
                <div>
                  <span className="block text-lg text-[#f4f1e8]">02</span>
                  Shape the route
                </div>
                <div>
                  <span className="block text-lg text-[#f4f1e8]">03</span>
                  Build the plan
                </div>
              </div>
            </div>

            <p className="relative z-10 mt-12 text-sm text-[#9fa79e] lg:mt-0">
              Coachella Valley mobile media · BrightPathIQ reporting
            </p>
          </div>
        </aside>

        <section className="px-5 py-10 sm:px-10 md:py-14 lg:px-16 lg:py-16">
          <div className="mx-auto max-w-3xl">
            <div className="mb-10 flex items-start justify-between gap-6">
              <div>
                <p className="mb-3 text-xs font-medium tracking-[0.16em] text-[#a36d17]">
                  START HERE
                </p>
                <h2 className="text-3xl font-medium leading-tight sm:text-4xl">
                  Let&apos;s build the right campaign.
                </h2>
                <p className="mt-4 max-w-xl text-base leading-[1.7] text-[#667067]">
                  A few details help us recommend the right visibility, timing,
                  and next step.
                </p>
              </div>
              <Link
                href="/"
                className="hidden shrink-0 text-sm text-[#667067] transition-colors hover:text-[#a36d17] sm:block"
              >
                Back home
              </Link>
            </div>

            {status === "error" && (
              <div
                role="alert"
                aria-live="assertive"
                className="mb-8 border-l-2 border-red-600 bg-red-50 px-4 py-3 text-sm text-red-700"
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
              className="space-y-12"
              noValidate
            >
              <input type="hidden" name="form-name" value="quote" />

              <fieldset className="space-y-7">
                <legend className="mb-1 text-lg font-medium">About you</legend>
                <div className="h-px w-16 bg-[#b77918]" />
                <div className="grid gap-x-8 gap-y-7 md:grid-cols-2">
                  <div>
                    <label htmlFor="fullName" className="text-sm text-[#4e574f]">
                      Full name <span className="text-red-600">*</span>
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
                      <p id="fullName-error" className="mt-2 text-xs text-red-600">
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="businessName" className="text-sm text-[#4e574f]">
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
                    <label htmlFor="email" className="text-sm text-[#4e574f]">
                      Email <span className="text-red-600">*</span>
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
                      <p id="email-error" className="mt-2 text-xs text-red-600">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className="text-sm text-[#4e574f]">
                      Phone <span className="text-red-600">*</span>
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
                      <p id="phone-error" className="mt-2 text-xs text-red-600">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>
              </fieldset>

              <fieldset className="space-y-7">
                <legend className="mb-1 text-lg font-medium">The campaign</legend>
                <div className="h-px w-16 bg-[#b77918]" />
                <div className="grid gap-x-8 gap-y-7 md:grid-cols-2">
                  <div className="relative">
                    <label htmlFor="campaignType" className="text-sm text-[#4e574f]">
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
                    <span className="pointer-events-none absolute right-0 top-9 text-[#a36d17]">⌄</span>
                  </div>

                  <div>
                    <label htmlFor="startDate" className="text-sm text-[#4e574f]">
                      When would you like to start?
                    </label>
                    <input type="date" id="startDate" name="startDate" value={formData.startDate} onChange={handleChange} className={inputClass} />
                  </div>

                  <div className="relative">
                    <label htmlFor="duration" className="text-sm text-[#4e574f]">
                      How long do you need visibility?
                    </label>
                    <select id="duration" name="duration" value={formData.duration} onChange={handleChange} className={selectClass}>
                      <option value="">Choose a duration</option>
                      <option value="1–2 days">1–2 days</option>
                      <option value="1 week">1 week</option>
                      <option value="2–4 weeks">2–4 weeks</option>
                      <option value="Ongoing">Ongoing</option>
                    </select>
                    <span className="pointer-events-none absolute right-0 top-9 text-[#a36d17]">⌄</span>
                  </div>

                  <div className="relative">
                    <label htmlFor="budget" className="text-sm text-[#4e574f]">
                      Working budget
                    </label>
                    <select id="budget" name="budget" value={formData.budget} onChange={handleChange} className={selectClass}>
                      <option value="">Choose a range</option>
                      <option value="$500–$1,000">$500–$1,000</option>
                      <option value="$1,000–$3,000">$1,000–$3,000</option>
                      <option value="$3,000–$10,000">$3,000–$10,000</option>
                      <option value="$10K+">$10K+</option>
                    </select>
                    <span className="pointer-events-none absolute right-0 top-9 text-[#a36d17]">⌄</span>
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="targetAreas" className="text-sm text-[#4e574f]">
                      Where should people see you?
                    </label>
                    <input type="text" id="targetAreas" name="targetAreas" value={formData.targetAreas} onChange={handleChange} placeholder="Cities, corridors, venues, or events" className={inputClass} />
                  </div>

                  <div className="relative md:col-span-2">
                    <label htmlFor="creativeNeeds" className="text-sm text-[#4e574f]">
                      Creative support
                    </label>
                    <select id="creativeNeeds" name="creativeNeeds" value={formData.creativeNeeds} onChange={handleChange} className={selectClass}>
                      <option value="">Tell us where you are</option>
                      <option value="I have ready-to-go visuals">I have ready-to-go visuals</option>
                      <option value="I need design assistance">I need design assistance</option>
                    </select>
                    <span className="pointer-events-none absolute right-0 top-9 text-[#a36d17]">⌄</span>
                  </div>
                </div>
              </fieldset>

              <fieldset className="space-y-7">
                <legend className="mb-1 text-lg font-medium">Anything we should know?</legend>
                <div className="h-px w-16 bg-[#b77918]" />
                <div>
                  <label htmlFor="comments" className="text-sm text-[#4e574f]">
                    Your goal, key dates, or priorities
                  </label>
                  <textarea
                    id="comments"
                    name="comments"
                    value={formData.comments}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Tell us what a successful campaign would accomplish."
                    className="mt-2 w-full resize-y border-b border-[#cfd2cc] bg-transparent px-0 py-3 text-[#171a17] placeholder:text-[#8c928b] focus:border-[#b77918] focus:outline-none"
                  />
                </div>
              </fieldset>

              <p className="text-sm leading-relaxed text-[#667067]">
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
                className="inline-flex w-full items-center justify-center bg-[#b77918] px-6 py-4 text-base font-medium text-white transition-colors hover:bg-[#8d5e12] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
              >
                {status === "loading" ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="h-5 w-5 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Sending…
                  </span>
                ) : (
                  "Start the conversation"
                )}
              </button>
            </form>

            <div className="mt-10 border-t border-[#d4d7d0] pt-5 text-sm text-[#667067]">
              Prefer to talk first?{" "}
              <a href="tel:+17603858989" className="text-[#8d5e12] hover:underline">
                Call (760) 385-8989
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

"use client";

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
}

export default function QuotePage() {
  const [formData, setFormData] = useState({
    fullName: '',
    businessName: '',
    email: '',
    phone: '',
    campaignType: '',
    startDate: '',
    duration: '',
    budget: '',
    targetAreas: '',
    creativeNeeds: '',
    comments: '',
    _hp: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<FormErrors>({});
  const firstErrorRef = useRef<HTMLInputElement>(null);
  const successAlertRef = useRef<HTMLDivElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
      newErrors.fullName = 'Please enter your full name.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Please enter your phone number.';
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

    setStatus('loading');
    setMessage('');

    try {
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        setMessage('Thank you! Our team will contact you within 24 hours.');
        setFormData({
          fullName: '',
          businessName: '',
          email: '',
          phone: '',
          campaignType: '',
          startDate: '',
          duration: '',
          budget: '',
          targetAreas: '',
          creativeNeeds: '',
          comments: '',
          _hp: '',
        });
        setErrors({});
        setTimeout(() => {
          successAlertRef.current?.focus();
        }, 100);
      } else {
        setStatus('error');
        setMessage(data.message || 'There was an issue sending your request. Please try again.');
      }
    } catch (error) {
      setStatus('error');
      setMessage('There was an issue sending your request. Please try again.');
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1601581987809-a874a81309c9?q=80&w=2400&auto=format&fit=crop')",
        }}
      />

      <div className="absolute inset-0 bg-black/50" />

      <section className="relative z-10 mx-auto max-w-5xl px-4 py-14 md:py-20">
        <header className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white drop-shadow-lg mb-3">
            Request a Quote
          </h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
            Tell us about your campaign and our team will respond within 24 hours.
          </p>
        </header>

        <div className="mx-auto max-w-3xl rounded-2xl bg-white/95 backdrop-blur-xl shadow-2xl p-5 md:p-8">
          {status === 'success' && (
            <div
              ref={successAlertRef}
              tabIndex={-1}
              role="alert"
              aria-live="polite"
              className="mb-6 rounded-xl bg-green-50 border border-green-200 p-4 text-green-700 text-sm md:text-base"
            >
              <strong className="font-semibold">Success!</strong> {message}
            </div>
          )}

          {status === 'error' && (
            <div
              role="alert"
              aria-live="assertive"
              className="mb-6 rounded-xl bg-red-50 border border-red-200 p-4 text-red-700 text-sm md:text-base"
            >
              <strong className="font-semibold">Error:</strong> {message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-8" noValidate>
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold text-black mb-2">Contact Information</h2>
                <div className="h-[2px] w-full bg-gradient-to-r from-[#d18d00] to-transparent" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-black mb-1">
                    Full Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    ref={errors.fullName ? firstErrorRef : null}
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    aria-invalid={!!errors.fullName}
                    aria-describedby={errors.fullName ? "fullName-error" : undefined}
                    className="mt-1 w-full rounded-xl border border-black/10 bg-white text-black placeholder-gray-500 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#d18d00] focus:border-transparent"
                  />
                  {errors.fullName && (
                    <p id="fullName-error" className="mt-1 text-xs text-red-600">{errors.fullName}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="businessName" className="block text-sm font-medium text-black mb-1">
                    Business Name
                  </label>
                  <input
                    type="text"
                    id="businessName"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleChange}
                    placeholder="Your Business LLC"
                    className="mt-1 w-full rounded-xl border border-black/10 bg-white text-black placeholder-gray-500 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#d18d00] focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-black mb-1">
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
                    placeholder="john@example.com"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    className="mt-1 w-full rounded-xl border border-black/10 bg-white text-black placeholder-gray-500 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#d18d00] focus:border-transparent"
                  />
                  {errors.email && (
                    <p id="email-error" className="mt-1 text-xs text-red-600">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-black mb-1">
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
                    className="mt-1 w-full rounded-xl border border-black/10 bg-white text-black placeholder-gray-500 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#d18d00] focus:border-transparent"
                  />
                  {errors.phone && (
                    <p id="phone-error" className="mt-1 text-xs text-red-600">{errors.phone}</p>
                  )}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold text-black mb-2">Campaign Details</h2>
                <div className="h-[2px] w-full bg-gradient-to-r from-[#d18d00] to-transparent" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="campaignType" className="block text-sm font-medium text-black mb-1">
                    Campaign Type
                  </label>
                  <div className="relative">
                    <select
                      id="campaignType"
                      name="campaignType"
                      value={formData.campaignType}
                      onChange={handleChange}
                      className="mt-1 w-full appearance-none rounded-xl border border-black/10 bg-white text-black px-4 py-3 pr-10 focus:outline-none focus:ring-2 focus:ring-[#d18d00] focus:border-transparent"
                    >
                      <option value="">Select a type…</option>
                      <option value="Business Advertising">Business Advertising</option>
                      <option value="Event Promotion">Event Promotion</option>
                      <option value="Political Campaign">Political Campaign</option>
                      <option value="Community Outreach">Community Outreach</option>
                      <option value="Other">Other</option>
                    </select>
                    <svg className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-black/70" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>

                <div>
                  <label htmlFor="startDate" className="block text-sm font-medium text-black mb-1">
                    Desired Start Date
                  </label>
                  <input
                    type="date"
                    id="startDate"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleChange}
                    className="mt-1 w-full rounded-xl border border-black/10 bg-white text-black px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#d18d00] focus:border-transparent [&::-webkit-calendar-picker-indicator]:opacity-100 [&::-webkit-calendar-picker-indicator]:cursor-pointer"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="duration" className="block text-sm font-medium text-black mb-1">
                    Campaign Duration
                  </label>
                  <div className="relative">
                    <select
                      id="duration"
                      name="duration"
                      value={formData.duration}
                      onChange={handleChange}
                      className="mt-1 w-full appearance-none rounded-xl border border-black/10 bg-white text-black px-4 py-3 pr-10 focus:outline-none focus:ring-2 focus:ring-[#d18d00] focus:border-transparent"
                    >
                      <option value="">Select duration…</option>
                      <option value="1–2 days">1–2 days</option>
                      <option value="1 week">1 week</option>
                      <option value="2–4 weeks">2–4 weeks</option>
                      <option value="Ongoing">Ongoing</option>
                    </select>
                    <svg className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-black/70" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>

                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-black mb-1">
                    Budget Range
                  </label>
                  <div className="relative">
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="mt-1 w-full appearance-none rounded-xl border border-black/10 bg-white text-black px-4 py-3 pr-10 focus:outline-none focus:ring-2 focus:ring-[#d18d00] focus:border-transparent"
                    >
                      <option value="">Select budget…</option>
                      <option value="$500–$1,000">$500–$1,000</option>
                      <option value="$1,000–$3,000">$1,000–$3,000</option>
                      <option value="$3,000–$10,000">$3,000–$10,000</option>
                      <option value="$10K+">$10K+</option>
                    </select>
                    <svg className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-black/70" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="targetAreas" className="block text-sm font-medium text-black mb-1">
                  Target Areas / Events
                </label>
                <input
                  type="text"
                  id="targetAreas"
                  name="targetAreas"
                  value={formData.targetAreas}
                  onChange={handleChange}
                  placeholder="e.g., Downtown Palm Springs, Coachella Weekend 1, PGA AmEx"
                  className="mt-1 w-full rounded-xl border border-black/10 bg-white text-black placeholder-gray-500 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#d18d00] focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="creativeNeeds" className="block text-sm font-medium text-black mb-1">
                  Creative Needs
                </label>
                <div className="relative">
                  <select
                    id="creativeNeeds"
                    name="creativeNeeds"
                    value={formData.creativeNeeds}
                    onChange={handleChange}
                    className="mt-1 w-full appearance-none rounded-xl border border-black/10 bg-white text-black px-4 py-3 pr-10 focus:outline-none focus:ring-2 focus:ring-[#d18d00] focus:border-transparent"
                  >
                    <option value="">Select option…</option>
                    <option value="I have ready-to-go visuals">I have ready-to-go visuals</option>
                    <option value="I need design assistance">I need design assistance</option>
                  </select>
                  <svg className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-black/70" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="comments" className="block text-sm font-medium text-black">
                Additional Comments
              </label>
              <textarea
                id="comments"
                name="comments"
                value={formData.comments}
                onChange={handleChange}
                rows={5}
                placeholder="Tell us more about your campaign goals, target audience, or any special requirements…"
                className="w-full rounded-xl border border-black/10 bg-white text-black placeholder-gray-500 px-4 py-3 resize-vertical focus:outline-none focus:ring-2 focus:ring-[#d18d00] focus:border-transparent"
              />
            </div>

            <input
              type="text"
              name="_hp"
              value={formData._hp}
              onChange={handleChange}
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
            />

            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full rounded-2xl bg-[#d18d00] py-4 px-6 font-semibold text-black shadow-md hover:shadow-lg hover:bg-[#9a711a] active:scale-[0.99] transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed text-lg"
            >
              {status === 'loading' ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending…
                </span>
              ) : (
                'Submit Quote Request'
              )}
            </button>
          </form>
        </div>

        <div className="text-center mt-6">
          <Link
            href="/"
            className="text-white underline underline-offset-4 hover:text-[#d18d00] font-medium transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </section>
    </main>
  );
}

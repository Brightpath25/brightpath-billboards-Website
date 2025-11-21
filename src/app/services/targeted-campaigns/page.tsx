"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Target, MapPin, Users, Building2, TrendingUp, Clock, CheckCircle2, Crosshair, BarChart3, Zap, DollarSign, Heart, ShoppingBag, Plane, Home, Briefcase, Download, HelpCircle, ChevronDown } from 'lucide-react';
import LeadMagnetModal from '@/components/LeadMagnetModal';

export default function TargetedCampaignsPage() {
  const [scrolled, setScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black-hero">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient"></div>
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: "url('https://www.bluelinemedia.com/images/mobile-a-1-500x375.jpg')",
          }}
        ></div>

        <div className="relative z-10 text-center max-w-5xl mx-auto px-4 pt-32 pb-20">
          <Link href="/" className="inline-flex items-center gap-2 text-gold-base hover:text-gold-highlight transition-colors mb-8">
            <ArrowLeft className="h-5 w-5" />
            Back to Home
          </Link>

          <div className="inline-flex items-center gap-2 bg-gold-base/10 border border-gold-base/30 text-gold-highlight px-6 py-2 rounded-full font-bold text-sm mb-6 backdrop-blur-sm">
            <Crosshair className="h-4 w-4" />
            PRECISION MARKETING
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-gold-gradient shimmer">Targeted</span>
            <br />
            <span className="text-text-light">Campaigns</span>
          </h1>

          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed text-text-mid">
            Tailored routes for casinos, resorts, luxury retail, dispensaries, and healthcare. Precision targeting for maximum ROI.
          </p>

          <Link href="/quote" target="_blank" rel="noopener noreferrer" className="luxury-button text-lg inline-block">
            Plan Your Campaign
          </Link>
        </div>
      </section>

      <div className="gold-divider"></div>

      {/* Why Targeted Campaigns Work */}
      <section className="py-24 bg-black-panel">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-text-light mb-6">
              Why <span className="text-gold-gradient">Precision</span> Matters
            </h2>
            <p className="text-lg text-text-mid max-w-3xl mx-auto">
              Not all advertising is created equal. Targeted campaigns focus your budget on reaching the right people at the right time and place.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Target className="h-8 w-8" />,
                title: "Higher ROI",
                description: "Spend less, achieve more by focusing on qualified audiences"
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "Demographic Precision",
                description: "Reach specific age groups, income levels, and lifestyle segments"
              },
              {
                icon: <MapPin className="h-8 w-8" />,
                title: "Geographic Control",
                description: "Target neighborhoods, business districts, or competitor locations"
              },
              {
                icon: <Clock className="h-8 w-8" />,
                title: "Optimal Timing",
                description: "Advertise when your target audience is most receptive"
              }
            ].map((benefit, idx) => (
              <div key={idx} className="luxury-card text-center group">
                <div className="w-16 h-16 bg-gold-gradient rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:animate-float">
                  <div className="text-black-hero">{benefit.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-text-light mb-3">{benefit.title}</h3>
                <p className="text-text-mid leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="gold-divider"></div>

      {/* Industry-Specific Solutions */}
      <section className="py-24 bg-black-hero">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-text-light mb-6">
              Industry-Specific <span className="text-gold-gradient">Solutions</span>
            </h2>
            <p className="text-lg text-text-mid max-w-3xl mx-auto">
              We understand the unique challenges and opportunities in each industry
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: <DollarSign className="h-8 w-8" />,
                industry: "Casinos & Gaming",
                targets: ["High rollers & VIP players", "Tournament participants", "Convention attendees", "Luxury hotel guests"],
                routes: ["Luxury resort corridors", "Airport pickup zones", "Fine dining districts", "Competitor casino routes"],
                timing: "Peak gaming hours, weekend evenings, tournament dates"
              },
              {
                icon: <Plane className="h-8 w-8" />,
                industry: "Resorts & Hotels",
                targets: ["Vacationers & tourists", "Business travelers", "Event attendees", "Destination wedding parties"],
                routes: ["Airport arrival areas", "Downtown shopping districts", "Golf courses & spas", "Restaurant corridors"],
                timing: "Check-in times, weekend arrivals, peak vacation seasons"
              },
              {
                icon: <ShoppingBag className="h-8 w-8" />,
                industry: "Luxury Retail",
                targets: ["High-income shoppers", "Fashion enthusiasts", "Gift buyers", "Luxury brand loyalists"],
                routes: ["El Paseo shopping district", "Upscale neighborhoods", "Country clubs", "Resort shopping areas"],
                timing: "Shopping hours, holiday seasons, special sales events"
              },
              {
                icon: <Heart className="h-8 w-8" />,
                industry: "Healthcare & Wellness",
                targets: ["Health-conscious residents", "Senior communities", "Fitness enthusiasts", "Insurance decision-makers"],
                routes: ["Medical districts", "Retirement communities", "Fitness centers", "Pharmacy corridors"],
                timing: "Morning commutes, lunch hours, early evenings"
              },
              {
                icon: <Building2 className="h-8 w-8" />,
                industry: "Dispensaries & Cannabis",
                targets: ["21+ consumers", "Medical patients", "Cannabis tourists", "Wellness seekers"],
                routes: ["Entertainment districts", "Hotel zones", "Concert venues", "High-traffic retail areas"],
                timing: "Evening hours, weekend nights, event days"
              },
              {
                icon: <Home className="h-8 w-8" />,
                industry: "Real Estate & Property",
                targets: ["Home buyers", "Investors", "Renters", "Luxury property seekers"],
                routes: ["Target neighborhoods", "Open house routes", "Shopping centers", "Business districts"],
                timing: "Weekend mornings, open house hours, evening commutes"
              }
            ].map((industry, idx) => (
              <div key={idx} className="luxury-card">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gold-gradient rounded-xl flex items-center justify-center flex-shrink-0">
                    <div className="text-black-hero">{industry.icon}</div>
                  </div>
                  <h3 className="text-2xl font-bold text-text-light">{industry.industry}</h3>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-gold-base mb-2 uppercase">Target Audiences</h4>
                    <div className="flex flex-wrap gap-2">
                      {industry.targets.map((target, i) => (
                        <span key={i} className="text-xs bg-black-hero px-3 py-1 rounded-full text-text-mid border border-gold-base/20">
                          {target}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-gold-base mb-2 uppercase">Strategic Routes</h4>
                    <ul className="space-y-1">
                      {industry.routes.map((route, i) => (
                        <li key={i} className="text-sm text-text-mid flex items-center gap-2">
                          <MapPin className="h-3 w-3 text-gold-base flex-shrink-0" />
                          {route}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-gold-base mb-2 uppercase">Optimal Timing</h4>
                    <p className="text-sm text-text-mid flex items-center gap-2">
                      <Clock className="h-3 w-3 text-gold-base flex-shrink-0" />
                      {industry.timing}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="gold-divider"></div>

      {/* Campaign Strategy Process */}
      <section className="py-24 bg-black-panel">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-text-light mb-6">
              Our Targeting <span className="text-gold-gradient">Process</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-12">
            {[
              {
                step: "01",
                title: "Audience Analysis",
                description: "We start by deeply understanding your ideal customer: demographics, behaviors, locations they frequent, and times they're most active."
              },
              {
                step: "02",
                title: "Competitive Intelligence",
                description: "We analyze your competitors' locations and identify opportunities to intercept their customers or target underserved markets."
              },
              {
                step: "03",
                title: "Route Optimization",
                description: "Using traffic data, event schedules, and local knowledge, we design routes that maximize exposure to your target audience."
              },
              {
                step: "04",
                title: "Creative Customization",
                description: "We tailor your message and visuals to resonate with your specific audience and stand out in their environment."
              },
              {
                step: "05",
                title: "Performance Tracking",
                description: "Real-time GPS tracking, impression estimates, and customer response tracking to measure and optimize ROI."
              },
              {
                step: "06",
                title: "Continuous Refinement",
                description: "We adjust routes, timing, and messaging based on performance data to continuously improve results."
              }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-8 items-start group">
                <div className="flex-shrink-0 w-20 h-20 bg-gold-gradient rounded-2xl flex items-center justify-center font-bold text-2xl text-black-hero group-hover:scale-110 transition-transform">
                  {item.step}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-text-light mb-3 group-hover:text-gold-highlight transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-text-mid text-lg leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="gold-divider"></div>

      {/* Campaign Packages */}
      <section className="py-24 bg-black-hero">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-text-light mb-6">
              Targeted Campaign <span className="text-gold-gradient">Packages</span>
            </h2>
            <p className="text-lg text-text-mid max-w-3xl mx-auto">
              Choose the package that best fits your targeting needs and budget
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Precision Strike",
                price: "$750-$1,500",
                duration: "3-5 Days",
                features: [
                  "1 LED truck",
                  "Single target area focus",
                  "4-6 hours daily coverage",
                  "Custom route planning",
                  "Industry-specific creative",
                  "Basic performance report"
                ],
                popular: false
              },
              {
                name: "Market Penetration",
                price: "$2,000-$5,000",
                duration: "1-2 Weeks",
                features: [
                  "1-2 LED trucks",
                  "Multi-location targeting",
                  "6-8 hours daily coverage",
                  "Advanced route optimization",
                  "A/B creative testing",
                  "Real-time tracking dashboard",
                  "Weekly strategy calls",
                  "Competitive analysis"
                ],
                popular: true
              },
              {
                name: "Market Domination",
                price: "$5,000+",
                duration: "Ongoing",
                features: [
                  "Multiple LED trucks",
                  "Territory-wide coverage",
                  "Extended daily hours",
                  "Dynamic route adjustments",
                  "Premium creative development",
                  "Dedicated campaign manager",
                  "Advanced analytics suite",
                  "Competitor tracking",
                  "Monthly ROI reporting"
                ],
                popular: false
              }
            ].map((pkg, idx) => (
              <div
                key={idx}
                className={`luxury-card relative ${pkg.popular ? 'border-2 border-gold-base' : ''}`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gold-gradient px-6 py-2 rounded-full font-bold text-black-hero text-sm">
                    MOST POPULAR
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-text-light mb-2">{pkg.name}</h3>
                  <div className="text-4xl font-bold text-gold-gradient mb-2">{pkg.price}</div>
                  <p className="text-text-mid">{pkg.duration}</p>
                </div>
                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-gold-base flex-shrink-0 mt-0.5" />
                      <span className="text-text-mid">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/quote"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full text-center py-3 px-6 rounded-xl font-semibold transition-all ${
                    pkg.popular
                      ? 'bg-gold-gradient text-black-hero hover:shadow-lg'
                      : 'bg-black-hero text-gold-base border border-gold-base/30 hover:bg-gold-base/10'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="gold-divider"></div>

      {/* ROI & Results */}
      <section className="py-24 bg-black-panel">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-text-light mb-6">
              Measurable <span className="text-gold-gradient">Results</span>
            </h2>
          </div>

          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
            {[
              {
                metric: "Up to 70%",
                label: "Lower Cost Per Impression",
                description: "vs. traditional billboards"
              },
              {
                metric: "3-5x",
                label: "Higher Engagement",
                description: "with targeted audiences"
              },
              {
                metric: "Real-Time",
                label: "Performance Data",
                description: "Track and optimize daily"
              }
            ].map((stat, idx) => (
              <div key={idx} className="luxury-card text-center">
                <div className="text-5xl font-bold text-gold-gradient mb-3">{stat.metric}</div>
                <h3 className="text-xl font-bold text-text-light mb-2">{stat.label}</h3>
                <p className="text-text-mid">{stat.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 max-w-3xl mx-auto luxury-card bg-gold-gradient/5 border border-gold-base/30">
            <h3 className="text-2xl font-bold text-gold-base mb-6 text-center">What You'll Track</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Daily impression estimates",
                "Route coverage maps",
                "Time-in-zone analytics",
                "Demographic reach data",
                "Competitive proximity tracking",
                "Customer response metrics",
                "Cost per thousand impressions",
                "Campaign ROI analysis"
              ].map((metric, i) => (
                <div key={i} className="flex items-center gap-3">
                  <BarChart3 className="h-5 w-5 text-gold-base flex-shrink-0" />
                  <span className="text-text-mid">{metric}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="gold-divider"></div>

      {/* Lead Magnet Section */}
      <section className="py-24 bg-black-panel">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto luxury-card bg-gold-gradient/5 border-2 border-gold-base/40 text-center">
            <div className="w-20 h-20 bg-gold-gradient rounded-2xl flex items-center justify-center mx-auto mb-6">
              <BarChart3 className="h-10 w-10 text-black-hero" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-text-light mb-4">
              Free ROI Calculator & Planning Template
            </h2>
            <p className="text-lg text-text-mid mb-8 max-w-2xl mx-auto">
              Calculate your projected ROI, plan your budget, and map your target areas with our
              comprehensive mobile LED advertising planning template. Includes industry benchmarks and best practices.
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="luxury-button text-lg inline-flex items-center gap-2"
            >
              <Download className="h-5 w-5" />
              Download ROI Calculator
            </button>
          </div>
        </div>
      </section>

      <div className="gold-divider"></div>

      {/* FAQ Section */}
      <section className="py-24 bg-black-hero">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-text-light mb-6">
              Targeting <span className="text-gold-gradient">Questions</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {[
              {
                question: "How specific can I get with geographic targeting?",
                answer: "Extremely specific. We can target individual neighborhoods, business districts, zip codes, or even create custom routes around specific competitor locations. Our GPS tracking allows us to design routes down to the street level, ensuring your ad appears exactly where you want it."
              },
              {
                question: "Can you target my competitors' locations?",
                answer: "Yes, this is one of our most popular strategies. We can create routes that circle competitor locations, position trucks in their parking lots (on public property), or saturate areas where their customers shop and dine. It's completely legal and highly effective for stealing market share."
              },
              {
                question: "How do you determine the best times to advertise?",
                answer: "We analyze your industry, target demographic, and location data to identify optimal windows. For restaurants, we might focus on lunch and dinner hours. For dispensaries, evening and weekend hours. For healthcare, morning commutes and lunch breaks. We customize timing to match when your audience is most receptive."
              },
              {
                question: "What's the minimum campaign duration for targeted advertising?",
                answer: "Our Precision Strike package starts at 3-5 days, but we typically recommend at least 1-2 weeks for targeted campaigns to build awareness and achieve measurable results. Ongoing monthly campaigns deliver the best ROI for most businesses."
              },
              {
                question: "Can I target different areas on different days?",
                answer: "Absolutely! We can create rotating schedules that target different neighborhoods or districts each day of the week. For example, Monday-Wednesday in Palm Desert, Thursday-Friday in La Quinta, and weekends in Palm Springs. This maximizes geographic reach while maintaining focused targeting."
              },
              {
                question: "How do you measure campaign success?",
                answer: "We provide GPS tracking data, estimated impressions based on traffic counts, time-in-zone analytics showing how long the truck spent in each target area, and route coverage maps. Many clients also track website traffic, phone calls, and in-store visits during campaign periods to measure direct response."
              },
              {
                question: "Is targeted advertising more expensive than regular routes?",
                answer: "Not necessarily. While route planning requires more customization, targeted campaigns often deliver better ROI because they focus your budget on qualified audiences. You're not paying to reach people who will never be customers – you're investing in precision exposure to your ideal demographic."
              },
              {
                question: "Can I get demographic data about who sees my ad?",
                answer: "Yes. Based on route data and census information, we can provide demographic breakdowns including age ranges, income levels, and household types for the areas we target. This helps you understand exactly who you're reaching and refine future campaigns."
              }
            ].map((faq, idx) => (
              <div
                key={idx}
                className="luxury-card cursor-pointer"
                onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-start gap-4 flex-1">
                    <HelpCircle className="h-6 w-6 text-gold-base flex-shrink-0 mt-1" />
                    <h3 className="text-lg font-semibold text-text-light">{faq.question}</h3>
                  </div>
                  <ChevronDown
                    className={`h-5 w-5 text-gold-base transition-transform flex-shrink-0 ${
                      openFaqIndex === idx ? 'rotate-180' : ''
                    }`}
                  />
                </div>
                {openFaqIndex === idx && (
                  <p className="mt-4 pl-10 text-text-mid leading-relaxed">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-text-mid mb-4">Need help planning your targeting strategy?</p>
            <a href="tel:4076868294" className="text-gold-base hover:text-gold-highlight font-semibold">
              Call us at (407) 686-8294
            </a>
          </div>
        </div>
      </section>

      <div className="gold-divider"></div>

      {/* CTA Section */}
      <section className="py-24 bg-black-panel">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-text-light mb-6">
              Ready to Target <span className="text-gold-gradient">Your Perfect Audience?</span>
            </h2>
            <p className="text-xl text-text-mid mb-12">
              Stop wasting budget on broad advertising. Let's create a precision-targeted campaign that delivers measurable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/quote" target="_blank" rel="noopener noreferrer" className="luxury-button text-lg">
                Request Custom Strategy
              </Link>
              <a href="tel:4076868294" className="luxury-button text-lg bg-black-hero text-gold-base border-2 border-gold-base hover:bg-gold-base/10">
                Call (760) 555-1234
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Magnet Modal */}
      <LeadMagnetModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        leadType="roi-calculator"
        title="ROI Calculator & Planning Template"
        description="Calculate your campaign ROI and plan your targeted advertising strategy"
      />
    </div>
  );
}

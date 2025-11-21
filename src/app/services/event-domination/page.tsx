"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Calendar, Users, Trophy, Megaphone, Clock, MapPin, CheckCircle2, Star, Zap, TrendingUp, Music, PartyPopper, Download, HelpCircle, ChevronDown } from 'lucide-react';
import LeadMagnetModal from '@/components/LeadMagnetModal';

export default function EventDominationPage() {
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
            backgroundImage: "url('https://cantmiss.us/wp-content/uploads/2022/09/Miami-Digital-Mobile-Billboards-4.jpeg')",
          }}
        ></div>

        <div className="relative z-10 text-center max-w-5xl mx-auto px-4 pt-32 pb-20">
          <Link href="/" className="inline-flex items-center gap-2 text-gold-base hover:text-gold-highlight transition-colors mb-8">
            <ArrowLeft className="h-5 w-5" />
            Back to Home
          </Link>

          <div className="inline-flex items-center gap-2 bg-gold-base/10 border border-gold-base/30 text-gold-highlight px-6 py-2 rounded-full font-bold text-sm mb-6 backdrop-blur-sm">
            <Trophy className="h-4 w-4" />
            PREMIUM EVENT MARKETING
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-gold-gradient shimmer">Event Domination</span>
            <br />
            <span className="text-text-light">Packages</span>
          </h1>

          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed text-text-mid">
            Saturate major events like Coachella, Stagecoach, PGA Tour, Monster Jam, and more with our specialized event advertising packages
          </p>

          <Link href="/quote" target="_blank" rel="noopener noreferrer" className="luxury-button text-lg inline-block">
            Dominate Your Event
          </Link>
        </div>
      </section>

      <div className="gold-divider"></div>

      {/* Featured Events */}
      <section className="py-24 bg-black-panel">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-text-light mb-6">
              Coachella Valley's <span className="text-gold-gradient">Biggest Events</span>
            </h2>
            <p className="text-lg text-text-mid max-w-3xl mx-auto">
              We specialize in advertising at the region's most high-profile events where thousands of engaged attendees gather
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Music className="h-8 w-8" />,
                event: "Coachella Music Festival",
                attendance: "250,000+ attendees",
                duration: "2 weekends in April",
                description: "The world's premier music festival attracts a young, affluent, trendsetting audience"
              },
              {
                icon: <Music className="h-8 w-8" />,
                event: "Stagecoach Festival",
                attendance: "75,000+ attendees",
                duration: "3 days in April",
                description: "California's biggest country music festival with a loyal, engaged fanbase"
              },
              {
                icon: <Trophy className="h-8 w-8" />,
                event: "PGA Tour - The American Express",
                attendance: "100,000+ attendees",
                duration: "4 days in January",
                description: "Elite golf tournament attracting high-net-worth individuals and corporate sponsors"
              },
              {
                icon: <Users className="h-8 w-8" />,
                event: "BNP Paribas Open",
                attendance: "450,000+ attendees",
                duration: "2 weeks in March",
                description: "One of the largest tennis tournaments outside the Grand Slams"
              },
              {
                icon: <PartyPopper className="h-8 w-8" />,
                event: "Modernism Week",
                attendance: "100,000+ attendees",
                duration: "11 days in February",
                description: "Architecture and design celebration attracting affluent homeowners and designers"
              },
              {
                icon: <Zap className="h-8 w-8" />,
                event: "Monster Jam",
                attendance: "40,000+ attendees",
                duration: "2 days (various dates)",
                description: "High-energy motor sports event popular with families and thrill-seekers"
              }
            ].map((event, idx) => (
              <div key={idx} className="luxury-card group">
                <div className="w-16 h-16 bg-gold-gradient rounded-xl flex items-center justify-center mb-6 group-hover:animate-float">
                  <div className="text-black-hero">{event.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-text-light mb-2">{event.event}</h3>
                <div className="flex items-center gap-2 text-gold-base text-sm mb-2">
                  <Users className="h-4 w-4" />
                  {event.attendance}
                </div>
                <div className="flex items-center gap-2 text-text-mid text-sm mb-4">
                  <Clock className="h-4 w-4" />
                  {event.duration}
                </div>
                <p className="text-text-mid leading-relaxed">{event.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="gold-divider"></div>

      {/* Event Domination Strategy */}
      <section className="py-24 bg-black-hero">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-text-light mb-6">
              Our Event Domination <span className="text-gold-gradient">Strategy</span>
            </h2>
          </div>

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Pre-Event Saturation",
                description: "We start advertising 1-2 weeks before the event in key areas where attendees stay, dine, and shop. Build anticipation and awareness early.",
                icon: <Calendar className="h-6 w-6" />
              },
              {
                title: "Event Day Presence",
                description: "Multiple LED trucks circulate around event entrances, parking areas, and high-traffic routes to and from the venue. Maximum visibility.",
                icon: <MapPin className="h-6 w-6" />
              },
              {
                title: "Strategic Positioning",
                description: "We know the best spots: hotel corridors, restaurant districts, shuttle routes, and afterparty locations. Your ad where attendees gather.",
                icon: <TrendingUp className="h-6 w-6" />
              },
              {
                title: "Extended Impact",
                description: "Post-event coverage targets attendees as they leave, head to airports, or continue their vacation. Capture them before they go home.",
                icon: <Zap className="h-6 w-6" />
              }
            ].map((strategy, idx) => (
              <div key={idx} className="luxury-card">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-gold-gradient rounded-xl flex items-center justify-center flex-shrink-0">
                    <div className="text-black-hero">{strategy.icon}</div>
                  </div>
                  <h3 className="text-2xl font-bold text-text-light">{strategy.title}</h3>
                </div>
                <p className="text-text-mid leading-relaxed text-lg">{strategy.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="gold-divider"></div>

      {/* Event Packages */}
      <section className="py-24 bg-black-panel">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-text-light mb-6">
              Event Advertising <span className="text-gold-gradient">Packages</span>
            </h2>
            <p className="text-lg text-text-mid max-w-3xl mx-auto">
              Tailored packages designed to maximize your brand's presence at major events
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Event Sampler",
                price: "$1,500-$3,000",
                duration: "Single Day",
                features: [
                  "1 LED truck",
                  "8-10 hours event day coverage",
                  "Strategic route near venue",
                  "Real-time GPS tracking",
                  "Event-specific creative",
                  "Post-event analytics"
                ],
                popular: false
              },
              {
                name: "Event Takeover",
                price: "$5,000-$10,000",
                duration: "Full Event Duration",
                features: [
                  "2-3 LED trucks",
                  "Multi-day coverage",
                  "Pre-event + event day + post-event",
                  "Premium positioning",
                  "Multiple creative rotations",
                  "Dedicated event coordinator",
                  "Comprehensive analytics",
                  "Social media amplification"
                ],
                popular: true
              },
              {
                name: "Event Domination",
                price: "$10,000+",
                duration: "Extended Campaign",
                features: [
                  "Fleet of LED trucks",
                  "Full event saturation",
                  "Week before + during + week after",
                  "Multi-location targeting",
                  "VIP area proximity",
                  "Dynamic content updates",
                  "Partnership activation support",
                  "Exclusive territory rights",
                  "Premium analytics dashboard"
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
                  Book Package
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="gold-divider"></div>

      {/* Success Stories */}
      <section className="py-24 bg-black-hero">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-text-light mb-6">
              Who Benefits from <span className="text-gold-gradient">Event Marketing?</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                category: "Brands & Sponsors",
                examples: [
                  "Activate sponsorships with high-visibility presence",
                  "Compete with official sponsors at lower cost",
                  "Extend brand reach beyond venue boundaries",
                  "Target specific attendee demographics"
                ]
              },
              {
                category: "Restaurants & Bars",
                examples: [
                  "Promote happy hours and special menus",
                  "Attract event-goers to your location",
                  "Advertise afterparty venues and VIP areas",
                  "Build awareness for new openings"
                ]
              },
              {
                category: "Hotels & Resorts",
                examples: [
                  "Fill rooms during peak event weekends",
                  "Promote special packages and amenities",
                  "Target next year's attendees",
                  "Showcase luxury accommodations"
                ]
              },
              {
                category: "Local Businesses",
                examples: [
                  "Capitalize on increased foot traffic",
                  "Promote event-day sales and offers",
                  "Build brand awareness with tourists",
                  "Drive immediate in-store traffic"
                ]
              }
            ].map((item, idx) => (
              <div key={idx} className="luxury-card">
                <h3 className="text-2xl font-bold text-gold-gradient mb-6">{item.category}</h3>
                <ul className="space-y-3">
                  {item.examples.map((example, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Star className="h-5 w-5 text-gold-base flex-shrink-0 mt-0.5" />
                      <span className="text-text-mid leading-relaxed">{example}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="gold-divider"></div>

      {/* Timing & Booking */}
      <section className="py-24 bg-black-panel">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-text-light mb-6">
                Book Early for <span className="text-gold-gradient">Peak Events</span>
              </h2>
              <p className="text-lg text-text-mid">
                Major events sell out fast. Secure your event domination package 4-8 weeks in advance to guarantee availability.
              </p>
            </div>

            <div className="luxury-card bg-gold-gradient/5 border border-gold-base/30">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-gold-base mb-4">Upcoming Major Events 2024-2025</h3>
                  <ul className="space-y-3 text-text-mid">
                    <li className="flex justify-between">
                      <span>PGA Tour - The American Express</span>
                      <span className="text-gold-highlight">Jan 2025</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Modernism Week</span>
                      <span className="text-gold-highlight">Feb 2025</span>
                    </li>
                    <li className="flex justify-between">
                      <span>BNP Paribas Open</span>
                      <span className="text-gold-highlight">Mar 2025</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Coachella Music Festival</span>
                      <span className="text-gold-highlight">Apr 2025</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Stagecoach Festival</span>
                      <span className="text-gold-highlight">Apr 2025</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gold-base mb-4">Booking Timeline</h3>
                  <ul className="space-y-4">
                    {[
                      { period: "6-8 weeks before", action: "Best availability, most routes" },
                      { period: "4-6 weeks before", action: "Good availability, flexible options" },
                      { period: "2-4 weeks before", action: "Limited availability, premium pricing" },
                      { period: "Less than 2 weeks", action: "Subject to availability only" }
                    ].map((timeline, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Clock className="h-5 w-5 text-gold-base flex-shrink-0 mt-0.5" />
                        <div>
                          <div className="font-semibold text-text-light">{timeline.period}</div>
                          <div className="text-sm text-text-mid">{timeline.action}</div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="gold-divider"></div>

      {/* Lead Magnet Section */}
      <section className="py-24 bg-black-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto luxury-card bg-gold-gradient/5 border-2 border-gold-base/40 text-center">
            <div className="w-20 h-20 bg-gold-gradient rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Calendar className="h-10 w-10 text-black-hero" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-text-light mb-4">
              Free 2024-2025 Event Calendar
            </h2>
            <p className="text-lg text-text-mid mb-8 max-w-2xl mx-auto">
              Download our complete calendar of major Coachella Valley events with dates, attendance figures,
              and optimal advertising windows. Plan your event marketing strategy now.
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="luxury-button text-lg inline-flex items-center gap-2"
            >
              <Download className="h-5 w-5" />
              Download Event Calendar
            </button>
          </div>
        </div>
      </section>

      <div className="gold-divider"></div>

      {/* FAQ Section */}
      <section className="py-24 bg-black-panel">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-text-light mb-6">
              Event Advertising <span className="text-gold-gradient">FAQs</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {[
              {
                question: "How early should I book for Coachella or Stagecoach?",
                answer: "We recommend booking 6-8 weeks before major festivals for best route availability. Premium positioning near venue entrances and hotel corridors sells out quickly. For smaller events, 3-4 weeks is usually sufficient."
              },
              {
                question: "Can you advertise inside the event venue?",
                answer: "Our trucks operate on public roads around the venue, in parking areas, along access routes, and in surrounding neighborhoods where attendees stay and dine. We cannot enter ticketed private property, but we maximize visibility at all entry/exit points and high-traffic zones."
              },
              {
                question: "What's the difference between pre-event and event-day coverage?",
                answer: "Pre-event coverage (1-2 weeks before) targets attendees as they arrive in town, book hotels, and plan their schedule. Event-day coverage saturates routes to/from the venue during peak hours. Post-event targets attendees at afterparties, restaurants, and as they depart. Full campaigns include all three phases."
              },
              {
                question: "Do you offer exclusive territory rights for events?",
                answer: "Yes, our Event Domination package includes exclusive territory options where we won't run competing ads in your category within a specific radius of the venue. This is particularly valuable for restaurants, hotels, and entertainment venues. Contact us for details."
              },
              {
                question: "Can I track where my ad appears during the event?",
                answer: "Absolutely. All event packages include real-time GPS tracking. You can see exactly where your truck is at any moment, route maps, time spent in each zone, and photo documentation from the campaign."
              },
              {
                question: "What if the event gets cancelled or rescheduled?",
                answer: "If a major event is officially cancelled, we'll offer a full refund or credit toward a future campaign. If rescheduled, we'll work with you to transfer your booking to the new dates (subject to availability)."
              },
              {
                question: "Can I combine event advertising with regular routes?",
                answer: "Yes! Many clients run extended campaigns that include both event saturation and ongoing weekly coverage. We offer discounted rates for multi-week packages that span events and regular business promotion."
              },
              {
                question: "How do you handle multiple clients at the same event?",
                answer: "We stagger routes and time slots to ensure all clients get optimal coverage. Non-competing businesses (e.g., a hotel and a restaurant) may even share complementary routes for better value. We ensure no overlap for competing brands in the same category."
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
            <p className="text-text-mid mb-4">Ready to book your event campaign?</p>
            <a href="tel:4076868294" className="text-gold-base hover:text-gold-highlight font-semibold">
              Call us at (407) 686-8294
            </a>
          </div>
        </div>
      </section>

      <div className="gold-divider"></div>

      {/* CTA Section */}
      <section className="py-24 bg-black-hero">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-text-light mb-6">
              Ready to <span className="text-gold-gradient">Dominate</span> Your Event?
            </h2>
            <p className="text-xl text-text-mid mb-12">
              Don't let your competitors steal the spotlight. Reserve your event advertising package today and make your brand impossible to miss.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/quote" target="_blank" rel="noopener noreferrer" className="luxury-button text-lg">
                Request Event Package
              </Link>
              <a href="tel:4076868294" className="luxury-button text-lg bg-black-panel text-gold-base border-2 border-gold-base hover:bg-gold-base/10">
                Call (760) 555-1234
              </a>
            </div>
            <p className="text-sm text-text-mid mt-8">
              Event packages are subject to availability. Book early for guaranteed positioning.
            </p>
          </div>
        </div>
      </section>

      {/* Lead Magnet Modal */}
      <LeadMagnetModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        leadType="event-calendar"
        title="2024-2025 Event Calendar"
        description="Complete guide to major Coachella Valley events and advertising opportunities"
      />
    </div>
  );
}

"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Truck, Users, BarChart3, MapPin, Clock, DollarSign, CheckCircle2, Sparkles, TrendingUp, Eye, Zap, Download, HelpCircle, ChevronDown } from 'lucide-react';
import LeadMagnetModal from '@/components/LeadMagnetModal';

export default function MobileLEDAdvertisingPage() {
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
            backgroundImage: "url('https://cantmiss.us/wp-content/uploads/2022/09/Salt-Lake-City-SLC-Digital-Mobile-billboard-Trucks-Utah-1-1.jpeg')",
          }}
        ></div>

        <div className="relative z-10 text-center max-w-5xl mx-auto px-4 pt-32 pb-20">
          <Link href="/" className="inline-flex items-center gap-2 text-gold-base hover:text-gold-highlight transition-colors mb-8">
            <ArrowLeft className="h-5 w-5" />
            Back to Home
          </Link>

          <div className="inline-flex items-center gap-2 bg-gold-base/10 border border-gold-base/30 text-gold-highlight px-6 py-2 rounded-full font-bold text-sm mb-6 backdrop-blur-sm">
            <Truck className="h-4 w-4" />
            PREMIUM SERVICE
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-gold-gradient shimmer">Mobile LED</span>
            <br />
            <span className="text-text-light">Advertising</span>
          </h1>

          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed text-text-mid">
            Reach thousands daily with large-format digital ads on our fleet of LED billboard trucks across the Coachella Valley
          </p>

          <Link href="/quote" target="_blank" rel="noopener noreferrer" className="luxury-button text-lg inline-block">
            Get Custom Quote
          </Link>
        </div>
      </section>

      <div className="gold-divider"></div>

      {/* Key Features */}
      <section className="py-24 bg-black-panel">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-text-light mb-6">
              Why Mobile LED <span className="text-gold-gradient">Works</span>
            </h2>
            <p className="text-lg text-text-mid max-w-3xl mx-auto">
              Traditional billboards are static. Our LED trucks go where your audience is, delivering dynamic content that captures attention.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Eye className="h-8 w-8" />,
                title: "Maximum Visibility",
                description: "High-resolution LED displays visible day and night, rain or shine"
              },
              {
                icon: <MapPin className="h-8 w-8" />,
                title: "Strategic Routes",
                description: "Target high-traffic areas, events, and your ideal customer locations"
              },
              {
                icon: <Zap className="h-8 w-8" />,
                title: "Dynamic Content",
                description: "Change your message in real-time based on time, location, or event"
              },
              {
                icon: <BarChart3 className="h-8 w-8" />,
                title: "Real-Time Analytics",
                description: "GPS tracking and impression data to measure campaign performance"
              }
            ].map((feature, idx) => (
              <div key={idx} className="luxury-card text-center group">
                <div className="w-16 h-16 bg-gold-gradient rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:animate-float">
                  <div className="text-black-hero">{feature.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-text-light mb-3">{feature.title}</h3>
                <p className="text-text-mid leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="gold-divider"></div>

      {/* How It Works */}
      <section className="py-24 bg-black-hero">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-text-light mb-6">
              How It <span className="text-gold-gradient">Works</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-12">
            {[
              {
                step: "01",
                title: "Consultation & Strategy",
                description: "We discuss your goals, target audience, and budget to create a custom campaign strategy."
              },
              {
                step: "02",
                title: "Creative Development",
                description: "Our team helps design eye-catching LED content optimized for mobile viewing, or we can use your existing assets."
              },
              {
                step: "03",
                title: "Route Planning",
                description: "We map strategic routes targeting high-traffic areas, events, and locations where your audience spends time."
              },
              {
                step: "04",
                title: "Campaign Launch",
                description: "Our LED trucks hit the road, displaying your message to thousands of potential customers daily."
              },
              {
                step: "05",
                title: "Tracking & Optimization",
                description: "Receive real-time GPS tracking, impression estimates, and route data. We adjust based on performance."
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

      {/* Service Packages */}
      <section className="py-24 bg-black-panel">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-text-light mb-6">
              Service <span className="text-gold-gradient">Packages</span>
            </h2>
            <p className="text-lg text-text-mid max-w-3xl mx-auto">
              Flexible options to fit any budget and campaign goal
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Starter",
                price: "$500-$1,000",
                duration: "1-2 Days",
                features: [
                  "1 LED truck",
                  "4-6 hours daily coverage",
                  "Basic route planning",
                  "Digital creative assistance",
                  "Post-campaign report"
                ],
                popular: false
              },
              {
                name: "Professional",
                price: "$1,000-$3,000",
                duration: "1 Week",
                features: [
                  "1-2 LED trucks",
                  "6-8 hours daily coverage",
                  "Strategic route optimization",
                  "Full creative development",
                  "Real-time GPS tracking",
                  "Daily performance reports",
                  "Route adjustments included"
                ],
                popular: true
              },
              {
                name: "Enterprise",
                price: "$3,000+",
                duration: "2-4 Weeks+",
                features: [
                  "Multiple LED trucks",
                  "Extended daily coverage",
                  "Multi-location campaigns",
                  "Premium creative services",
                  "Dedicated account manager",
                  "Advanced analytics dashboard",
                  "Priority route planning",
                  "Event targeting included"
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

      {/* Use Cases */}
      <section className="py-24 bg-black-hero">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-text-light mb-6">
              Perfect For <span className="text-gold-gradient">Every Industry</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                industry: "Retail & Shopping",
                examples: "Grand openings, sales events, seasonal promotions, new product launches"
              },
              {
                industry: "Restaurants & Hospitality",
                examples: "Happy hour specials, new menu items, event hosting, catering services"
              },
              {
                industry: "Real Estate",
                examples: "Open houses, new developments, luxury properties, broker promotions"
              },
              {
                industry: "Healthcare & Wellness",
                examples: "New services, wellness programs, facility openings, community health events"
              },
              {
                industry: "Entertainment & Events",
                examples: "Concert promotions, festival announcements, venue openings, ticket sales"
              },
              {
                industry: "Political Campaigns",
                examples: "Candidate awareness, issue advocacy, voter registration, election day reminders"
              }
            ].map((useCase, idx) => (
              <div key={idx} className="luxury-card">
                <h3 className="text-xl font-bold text-gold-base mb-3">{useCase.industry}</h3>
                <p className="text-text-mid leading-relaxed">{useCase.examples}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="gold-divider"></div>

      {/* Lead Magnet Section */}
      <section className="py-24 bg-black-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto luxury-card bg-gold-gradient/5 border-2 border-gold-base/40 text-center">
            <div className="w-20 h-20 bg-gold-gradient rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Download className="h-10 w-10 text-black-hero" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-text-light mb-4">
              Free 2024 Pricing Guide
            </h2>
            <p className="text-lg text-text-mid mb-8 max-w-2xl mx-auto">
              Get our comprehensive pricing guide with detailed breakdowns for all mobile LED advertising packages,
              route examples, and ROI calculations. Instantly delivered to your inbox.
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="luxury-button text-lg inline-flex items-center gap-2"
            >
              <Download className="h-5 w-5" />
              Download Free Guide
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
              Frequently Asked <span className="text-gold-gradient">Questions</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {[
              {
                question: "How many people will see my ad?",
                answer: "Impression counts vary based on routes and duration, but our trucks typically generate 30,000-100,000 impressions per day. High-traffic routes during events can exceed 200,000 daily impressions. We provide detailed analytics showing GPS tracking, time spent in each zone, and estimated reach."
              },
              {
                question: "What file format do you need for my ad?",
                answer: "We accept most common formats (PNG, JPG, PDF, AI, PSD). Our creative team will optimize your design for LED display to ensure maximum impact. If you don't have ready-to-go creative, we offer full design services as part of our packages."
              },
              {
                question: "Can I target specific neighborhoods or businesses?",
                answer: "Absolutely! That's one of the biggest advantages of mobile LED advertising. We can create custom routes targeting specific zip codes, neighborhoods, competitor locations, or any geographic area you want to reach. We'll work with you to map the perfect route."
              },
              {
                question: "How far in advance should I book?",
                answer: "For standard campaigns, 1-2 weeks notice is typically sufficient. For major events like Coachella or Stagecoach, we recommend booking 4-8 weeks in advance to guarantee availability and secure premium routes."
              },
              {
                question: "Can I change my ad creative during the campaign?",
                answer: "Yes! One of the benefits of digital advertising is flexibility. You can update your message, add time-sensitive offers, or rotate multiple designs. We can make creative changes within 24-48 hours depending on the complexity."
              },
              {
                question: "What's included in the analytics report?",
                answer: "You'll receive GPS route maps, time stamps showing where the truck was at each moment, estimated impressions based on traffic data, total miles covered, hours of operation, and photographs from the campaign. Professional and Enterprise packages include more advanced metrics."
              },
              {
                question: "Do you offer payment plans?",
                answer: "Yes, we offer flexible payment options for campaigns over $2,500. Contact us to discuss terms that work for your budget."
              },
              {
                question: "What makes mobile LED better than traditional billboards?",
                answer: "Mobile LED trucks can target your exact audience, change locations throughout the day, update messaging in real-time, and cost significantly less than traditional billboard rentals. You're not limited to one static location – your ad goes where your customers are."
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
            <p className="text-text-mid mb-4">Still have questions?</p>
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
              Ready to Amplify Your <span className="text-gold-gradient">Brand?</span>
            </h2>
            <p className="text-xl text-text-mid mb-12">
              Let's create a mobile LED advertising campaign that gets your message in front of thousands of potential customers across the Coachella Valley.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/quote" target="_blank" rel="noopener noreferrer" className="luxury-button text-lg">
                Request a Quote
              </Link>
              <a href="tel:4076868294" className="luxury-button text-lg bg-black-panel text-gold-base border-2 border-gold-base hover:bg-gold-base/10">
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
        leadType="pricing-guide"
        title="Free 2024 Pricing Guide"
        description="Comprehensive pricing breakdown for all mobile LED services"
      />
    </div>
  );
}

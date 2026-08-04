import Image from "next/image";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Truck, Target, Calendar, Phone, Mail, MapPin, Sparkles, Zap, TrendingUp, ArrowUpRight, ChevronDown } from "lucide-react";
import HomepageHero from "@/components/HomepageHero";
import { HomepageCampaignViewer, ScrollRevealController } from "@/components/HomepageEnhancements";

export default function Home() {
  return (
    <div className="min-h-screen bg-black-hero">
      <ScrollRevealController />
      <HomepageHero />

      {/* Gold Divider */}
      <div className="gold-divider"></div>
      <section className="py-24 bg-black-panel scroll-reveal">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
            Reach Thousands Daily Across the{" "}
            <span className="text-gold-gradient">Coachella Valley</span>
          </h2>
          <p className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed mb-16 text-text-mid">
            Unlock the power of mobile LED advertising with BrightPath Billboards' cutting-edge digital billboard trucks.
            Our fleet delivers stunning visuals and attention-grabbing content designed to captivate your audience
            no matter where they go.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { src: "/brightpathbillboards-traffic.jpeg", alt: "LED billboard truck in parking lot" },
              { src: "/brightpathbillboards-night.jpeg", alt: "LED billboard truck driving at night" },
              { src: "/brightpathbillboards-traffic-1.jpeg", alt: "LED billboard truck at event" }
            ].map((img, idx) => (
              <div key={idx} className="group luxury-image">
                <div className="absolute inset-0 bg-gold-gradient opacity-0 group-hover:opacity-20 transition-opacity duration-500 z-10"></div>
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={400}
                  height={300}
                  className="transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gold Divider */}
      <div className="gold-divider"></div>

      {/* How It Works Section */}
      <section
        id="how-it-works"
        aria-labelledby="how-it-works-heading"
        className="py-24 bg-black-hero scroll-reveal"
      >
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.24em] text-gold-highlight">
              THE BRIGHTPATH PROCESS
            </p>
            <h2 id="how-it-works-heading" className="mb-6 text-4xl font-bold text-text-light md:text-5xl">
              From campaign idea to documented delivery<span className="text-gold-base">.</span>
            </h2>
            <p className="text-lg leading-relaxed text-text-mid md:text-xl">
              BrightPath turns your campaign goals into a practical route, a clear screen plan, and documented delivery across the Coachella Valley.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <article className="relative rounded-2xl border border-gold-base/20 bg-black-panel/70 p-7 transition-colors hover:border-gold-base/50">
              <div className="mb-6 flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-gradient text-black-hero">
                  <Target className="h-6 w-6" aria-hidden="true" />
                </div>
                <span className="text-4xl font-bold text-gold-base/30" aria-hidden="true">01</span>
              </div>
              <h3 className="mb-3 text-xl font-bold text-text-light">Define the campaign</h3>
              <p className="leading-relaxed text-text-mid">
                Share your audience, goals, timing, service area, and the action you want people to take.
              </p>
            </article>

            <article className="relative rounded-2xl border border-gold-base/20 bg-black-panel/70 p-7 transition-colors hover:border-gold-base/50">
              <div className="mb-6 flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-gradient text-black-hero">
                  <Calendar className="h-6 w-6" aria-hidden="true" />
                </div>
                <span className="text-4xl font-bold text-gold-base/30" aria-hidden="true">02</span>
              </div>
              <h3 className="mb-3 text-xl font-bold text-text-light">Build the route and screen plan</h3>
              <p className="leading-relaxed text-text-mid">
                Approved creative is adapted for three LED screens while BrightPath maps the campaign around relevant commercial areas and timing.
              </p>
            </article>

            <article className="relative rounded-2xl border border-gold-base/20 bg-black-panel/70 p-7 transition-colors hover:border-gold-base/50">
              <div className="mb-6 flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-gradient text-black-hero">
                  <Truck className="h-6 w-6" aria-hidden="true" />
                </div>
                <span className="text-4xl font-bold text-gold-base/30" aria-hidden="true">03</span>
              </div>
              <h3 className="mb-3 text-xl font-bold text-text-light">Deploy and document</h3>
              <p className="leading-relaxed text-text-mid">
                The campaign runs through planned weekday delivery with safety-aware routing, route records, and proof photography.
              </p>
            </article>

            <article className="relative rounded-2xl border border-gold-base/20 bg-black-panel/70 p-7 transition-colors hover:border-gold-base/50">
              <div className="mb-6 flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-gradient text-black-hero">
                  <TrendingUp className="h-6 w-6" aria-hidden="true" />
                </div>
                <span className="text-4xl font-bold text-gold-base/30" aria-hidden="true">04</span>
              </div>
              <h3 className="mb-3 text-xl font-bold text-text-light">Review in BrightPathIQ</h3>
              <p className="leading-relaxed text-text-mid">
                Campaign records, route information, photography, and reporting are organized for review and ongoing decisions.
              </p>
            </article>
          </div>

          <div className="mx-auto mt-12 max-w-4xl rounded-xl border border-gold-base/20 bg-gold-base/5 px-6 py-5 text-center">
            <p className="text-sm leading-relaxed text-text-mid md:text-base">
              Routes and schedules may adjust for traffic, weather, safety, road conditions, restrictions, events, or campaign performance.
            </p>
          </div>

          <div className="mt-12 text-center">
            <Link href="/quote" className="luxury-button inline-block text-lg">
              Build My Campaign
            </Link>
          </div>
        </div>
      </section>

      {/* Gold Divider */}
      <div className="gold-divider"></div>

      {/* Services Section */}
      <section id="services" aria-labelledby="services-heading" className="py-24 bg-black-hero scroll-reveal">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">
            <div className="max-w-3xl">
              <p className="text-sm font-bold tracking-[0.28em] text-gold-highlight uppercase mb-5">Campaign options</p>
              <h2 id="services-heading" className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-light mb-6">
                Choose how your brand <span className="text-gold-highlight">moves.</span>
              </h2>
              <p className="text-lg md:text-xl text-text-mid max-w-2xl leading-relaxed">
                Three ways to put your message in motion across the Coachella Valley, from everyday visibility to event-focused reach.
              </p>
            </div>
            <a
              href="/price-card.png"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gold-highlight hover:text-gold-base transition-colors text-sm font-semibold underline underline-offset-4 shrink-0"
            >
              View pricing <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                number: "01",
                icon: Truck,
                title: "Mobile LED Advertising",
                description: "Reach thousands daily with large-format digital ads on our fleet of LED billboard trucks. Perfect for brand awareness campaigns across the Coachella Valley.",
                href: "/services/mobile-led-advertising",
                label: "Everyday visibility"
              },
              {
                number: "02",
                icon: Calendar,
                title: "Event Domination Packages",
                description: "Saturate major events like Coachella, Stagecoach, PGA Tour, Monster Jam, and more with our specialized event advertising packages.",
                href: "/services/event-domination",
                label: "Event-focused reach"
              },
              {
                number: "03",
                icon: Target,
                title: "Targeted Campaigns",
                description: "Tailored routes for casinos, resorts, luxury retail, dispensaries, and healthcare. Precision targeting for maximum ROI.",
                href: "/services/targeted-campaigns",
                label: "Route-specific focus"
              }
            ].map(({ number, icon: Icon, title, description, href, label }) => (
              <article key={title} className="group relative flex min-h-[390px] flex-col rounded-2xl border border-gold-base/20 bg-black-panel/70 p-7 md:p-8 transition-all duration-300 hover:-translate-y-1 hover:border-gold-base/60 hover:bg-black-panel">
                <div className="flex items-start justify-between gap-4 mb-12">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gold-base">
                    <Icon className="h-7 w-7 text-black-hero" aria-hidden="true" />
                  </div>
                  <span className="text-sm font-semibold tracking-[0.2em] text-gold-highlight/70">{number}</span>
                </div>
                <p className="text-xs font-bold tracking-[0.18em] text-gold-highlight uppercase mb-3">{label}</p>
                <h3 className="text-2xl font-bold text-text-light mb-4">{title}</h3>
                <p className="text-text-mid leading-relaxed">{description}</p>
                <Link href={href} className="mt-auto pt-8 inline-flex items-center gap-2 text-gold-base hover:text-gold-highlight font-semibold transition-colors">
                  Explore service <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>

          <div className="mt-14 flex flex-col items-center text-center">
            <Link href="/launch" className="inline-flex items-center gap-2 rounded-lg bg-gold-base px-8 py-4 text-lg font-semibold text-black-hero transition-colors hover:bg-gold-highlight">
              See how it works live <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
            </Link>
            <p className="text-sm text-gold-highlight/70 italic mt-3">Understand how campaigns show up in real environments</p>
          </div>
        </div>
      </section>

      {/* Gold Divider */}
      <div className="gold-divider"></div>

      {/* BrightPathIQ Reporting Section */}
      <section
        id="brightpathiq"
        aria-labelledby="brightpathiq-heading"
        className="scroll-reveal bg-black-panel py-24"
      >
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.24em] text-gold-highlight">
              BRIGHTPATHIQ CAMPAIGN REPORTING
            </p>
            <h2 id="brightpathiq-heading" className="mb-6 text-4xl font-bold text-text-light md:text-5xl">
              Visibility you can see. Delivery you can verify<span className="text-gold-base">.</span>
            </h2>
            <p className="text-lg leading-relaxed text-text-mid md:text-xl">
              BrightPathIQ organizes campaign delivery, route activity, and supporting proof into a client-safe reporting workspace.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                number: "01",
                title: "Campaign status",
                text: "Review the campaign record, schedule, and current delivery status in one place."
              },
              {
                number: "02",
                title: "Route activity",
                text: "See the route information associated with campaign delivery and operating coverage."
              },
              {
                number: "03",
                title: "Proof review",
                text: "Review required proof photography, additional documentation, and verification details."
              },
              {
                number: "04",
                title: "Campaign reporting",
                text: "Access structured reports and client-safe analytics tied to the campaign record."
              }
            ].map(({ number, title, text }) => (
              <article key={title} className="rounded-2xl border border-gold-base/20 bg-black-hero/70 p-7 transition-colors hover:border-gold-base/50">
                <div className="mb-7 flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-gold-base text-sm font-bold text-black-hero">
                    {number}
                  </span>
                  <span className="h-px w-12 bg-gold-base/40" aria-hidden="true"></span>
                </div>
                <h3 className="mb-3 text-xl font-bold text-text-light">{title}</h3>
                <p className="leading-relaxed text-text-mid">{text}</p>
              </article>
            ))}
          </div>

          <div className="mx-auto mt-12 flex max-w-4xl flex-col items-center justify-between gap-6 rounded-2xl border border-gold-base/20 bg-black-hero px-7 py-7 text-center md:flex-row md:text-left">
            <div>
              <h3 className="mb-2 text-2xl font-bold text-text-light">A clearer campaign record</h3>
              <p className="max-w-2xl leading-relaxed text-text-mid">
                QR activity can be included when it is part of the campaign. BrightPathIQ keeps that information with the campaign report instead of separating it from delivery proof.
              </p>
            </div>
            <a
              href="https://bpmobilebillboardsiq.live"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center justify-center rounded-lg bg-gold-base px-6 py-3 font-semibold text-black-hero transition-colors hover:bg-gold-highlight"
            >
              Experience BrightPathIQ
            </a>
          </div>
        </div>
      </section>

      {/* Gold Divider */}
      <div className="gold-divider"></div>

      {/* About Section */}
      {/* About BrightPath Billboards - NEW SECTION */}
      <section id="about" className="py-24 bg-black-hero scroll-reveal">
        <div className="container mx-auto px-4 max-w-5xl">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gold-base/10 border border-gold-base/30 text-gold-highlight px-6 py-2 rounded-full font-bold text-sm mb-6 backdrop-blur-sm">
              <Sparkles className="h-4 w-4" />
              OUR STORY
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-light mb-6">
              About <span className="text-gold-gradient">BrightPath Billboards</span>
            </h2>
          </div>

          {/* Origin Story */}
          <div className="mb-16">
            <p className="text-lg md:text-xl text-text-light leading-relaxed mb-6 text-center max-w-4xl mx-auto">
              BrightPath Billboards was born in the Coachella Valley from real hustle, persistence, and community need.
              Founder Marcus Tillman developed the idea while running a subscription window-cleaning business, knocking
              on over 1,000 doors in the desert heat to provide for his daughter, Rayna. During that journey, he noticed
              local entrepreneurs had almost no accessible advertising options, especially in a region built on festivals,
              casinos, events, and tourism. BrightPath was created to solve that problem and give the community a real,
              modern advertising platform.
            </p>
          </div>

          {/* Mission Statement */}
          <div className="mb-16 p-8 bg-gradient-to-br from-gold-base/10 to-transparent border border-gold-base/20 rounded-2xl backdrop-blur-sm">
            <h3 className="text-2xl md:text-3xl font-bold text-gold-highlight mb-4 text-center">Our Mission</h3>
            <p className="text-lg text-text-light leading-relaxed text-center max-w-3xl mx-auto">
              BrightPath empowers local businesses, creators, nonprofits, brands, and national partners with high-impact
              mobile LED advertising. Our mission is to bring big-city marketing power to the Coachella Valley—without
              big-city pricing. We operate on innovation, hustle, and community-first values.
            </p>
          </div>

          {/* Brand Philosophy Pull Quote */}
          <div className="mb-16 text-center">
            <blockquote className="relative">
              <div className="absolute -top-6 -left-6 text-8xl text-gold-base/20 font-serif">"</div>
              <p className="text-3xl md:text-4xl font-bold text-gold-gradient mb-6 relative z-10">
                Where Innovation, Hustle, and Community Meet.
              </p>
              <div className="absolute -bottom-6 -right-6 text-8xl text-gold-base/20 font-serif">"</div>
            </blockquote>
            <p className="text-lg text-text-mid leading-relaxed max-w-3xl mx-auto mt-8">
              BrightPath blends relentless drive, advanced LED technology, and deep local roots to amplify brands
              in a way the Coachella Valley has never seen before.
            </p>
          </div>

          {/* Community Connection */}
          <div className="mb-16">
            <p className="text-lg text-text-light leading-relaxed text-center max-w-4xl mx-auto">
              BrightPath was built from struggle, determination, and a commitment to uplift the community that shaped
              its founder. We support businesses at every level—from first-time entrepreneurs to large venues and national
              brands. Every campaign brought into the Valley contributes to economic growth, visibility, and opportunity
              for people who work hard and dream big.
            </p>
          </div>

          {/* What Makes BrightPath Different */}
          <div className="mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-text-light mb-10 text-center">
              What Makes BrightPath <span className="text-gold-gradient">Different</span>
            </h3>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                "First mobile LED billboard company truly rooted in the Coachella Valley",
                "Real analytics, real routes, real results",
                "Premium LED screens with full daytime visibility",
                "Fast creative support & quick turnaround",
                "Local expertise on traffic patterns, events, and festival surges",
                "Pricing designed for small businesses, scalable for major brands"
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 group">
                  <div className="w-2 h-2 bg-gold-gradient rounded-full mt-2 flex-shrink-0 group-hover:scale-150 transition-transform"></div>
                  <span className="text-text-light text-lg leading-relaxed group-hover:text-gold-highlight transition-colors">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gold Divider */}
      <div className="gold-divider"></div>

      {/* Why Us Section - RENAMED FROM OLD ABOUT */}
      <section className="py-24 bg-black-panel scroll-reveal">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-text-light mb-4">
              Why Us<span className="text-gold-base">?</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-lg text-text-mid leading-relaxed mb-10">
                BrightPath Billboards is the Coachella Valley's first dedicated LED mobile billboard company.
                Our fleet of cutting-edge trucks combines advanced technology, flexible route planning, and
                real-time analytics to guarantee that your brand gets in front of the right audience at the right time.
              </p>
              <div className="space-y-5">
                {[
                  { icon: <Sparkles className="h-5 w-5" />, text: "First-mover advantage in the Coachella Valley" },
                  { icon: <TrendingUp className="h-5 w-5" />, text: "Real-time GPS tracking and analytics" },
                  { icon: <Zap className="h-5 w-5" />, text: "Event domination strategy" },
                  { icon: <Target className="h-5 w-5" />, text: "Local expertise and relationships" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 group">
                    <div className="w-10 h-10 bg-gold-gradient rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <span className="text-text-light group-hover:text-gold-highlight transition-colors">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-4 bg-gold-gradient opacity-20 rounded-3xl blur-2xl group-hover:opacity-30 transition-opacity"></div>
              <div className="luxury-image">
                <Image
                  src="/brightpathbillboards-laquinta.jpeg"
                  alt="BrightPath LED billboard truck displaying dynamic digital advertising"
                  width={600}
                  height={400}
                  className="relative group-hover:border-gold-base/60 transition-all"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-gold-gradient px-6 py-3 rounded-xl font-bold text-black-hero shadow-luxury">
                LED Truck in Action
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-24 text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-text-light mb-4">
              Ready to Grow with <span className="text-gold-gradient">BrightPath</span>?
            </h3>
            <p className="text-lg text-text-mid mb-10 max-w-2xl mx-auto">
              Join the brands, businesses, and creators already dominating the Coachella Valley with mobile LED advertising.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="/quote"
                target="_blank"
                rel="noopener noreferrer"
                className="luxury-button text-lg inline-block"
              >
                Get a Quote
              </a>
              <a
                href="#services"
                className="px-8 py-4 bg-transparent border border-gold-base/50 text-gold-base/80 rounded-xl font-medium hover:bg-gold-base hover:text-black-hero transition-all duration-300 inline-block"
              >
                See Event Routes
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Gold Divider */}
      <div className="gold-divider"></div>

      {/* 360° Preview Section — presentation wrapper only. The viewer itself remains protected. */}
      <section
        id="preview"
        aria-labelledby="preview-section-heading"
        className="scroll-reveal bg-black-panel py-16 md:py-24"
      >
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-10 max-w-3xl text-center md:mb-14">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.24em] text-gold-highlight">
              CAMPAIGN VISUALIZATION
            </p>
            <h2 id="preview-section-heading" className="mb-5 text-3xl font-bold text-text-light md:text-5xl">
              See your message in motion<span className="text-gold-base">.</span>
            </h2>
            <p className="text-base leading-relaxed text-text-mid md:text-lg">
              Use the interactive preview to explore how approved creative can appear across the mobile LED truck screens.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-gold-base/20 bg-black-hero">
            <HomepageCampaignViewer />
          </div>
        </div>
      </section>

      {/* Gold Divider */}
      <div className="gold-divider"></div>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-black-panel scroll-reveal">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-text-light mb-6">
              Partner with <span className="text-gold-gradient">BrightPath</span>
            </h2>
            <p className="text-xl text-text-mid">Ready to make your mark on the Coachella Valley?</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="luxury-card">
              <h3 className="text-3xl font-bold mb-8 text-gold-gradient">Get Started Today</h3>
              <div className="space-y-6">
                {[
                  { icon: <Phone className="h-6 w-6" />, text: "(760) 385-8989", href: "tel:7603858989" },
                  { icon: <Mail className="h-6 w-6" />, text: "Brightpathbillboards@gmail.com", href: "mailto:Brightpathbillboards@gmail.com" },
                  { icon: <MapPin className="h-6 w-6" />, text: "La Quinta, CA", href: "#" }
                ].map((item, idx) => (
                  <a
                    key={idx}
                    href={item.href}
                    className="flex items-center gap-4 p-4 rounded-xl bg-black-hero/50 hover:bg-black-hero transition-all border border-gold-base/20 hover:border-gold-base/50 group"
                  >
                    <div className="text-gold-base group-hover:text-gold-highlight transition-colors">
                      {item.icon}
                    </div>
                    <span className="text-text-light group-hover:text-gold-highlight transition-colors">{item.text}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="luxury-card">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input placeholder="Name" />
                  <Input placeholder="Email" />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <Input placeholder="Phone" />
                  <Input placeholder="Business Name" />
                </div>
                <Input placeholder="Campaign Budget" />
                <Textarea
                  placeholder="Tell us about your campaign goals..."
                  rows={4}
                />
                <button
                  id="contact-launch-button"
                  type="submit"
                  className="luxury-button w-full"
                >
                  Launch Your Campaign
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
}

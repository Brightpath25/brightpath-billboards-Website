import type { Metadata } from "next";
import Image from "next/image";
import MediaKitNavigation from "./MediaKitNavigation";
import "./media-kit.css";

export const metadata: Metadata = {
  title: "BrightPath Billboards Media Kit | Mobile DOOH Coachella Valley",
  description:
    "Enterprise media information for BrightPath Billboards mobile digital out-of-home campaigns in the Coachella Valley.",
};

const inventoryFacts = [
  [
    "Mobile inventory",
    "One deployable BrightPath mobile LED vehicle assigned around the requirements of each confirmed campaign.",
  ],
  [
    "Planned deployment",
    "Campaign objectives, timing, route practicality, access, safety, and applicable operating requirements inform deployment planning.",
  ],
  [
    "Local market focus",
    "Campaign planning is grounded in Coachella Valley commercial, hospitality, retail, dining, and event environments.",
  ],
  [
    "Campaign records",
    "Available reporting can organize route records, operating information, proof photography, and campaign documentation for review.",
  ],
] as const;

const platformFacts = [
  ["Inventory", "One deployable mobile LED advertising vehicle"],
  ["Display configuration", "LED display surfaces on both sides and the rear"],
  ["Operating model", "Driver-operated mobile LED deployment"],
] as const;

const contexts = [
  [
    "01",
    "Commercial corridors",
    "Visibility is planned around active business environments and practical movement.",
  ],
  [
    "02",
    "Event proximity",
    "Campaign timing and placement can respond to the movement surrounding confirmed events and destinations.",
  ],
  [
    "03",
    "Hospitality",
    "Hotels, resorts, and visitor-serving areas create distinct planning contexts throughout the valley.",
  ],
  [
    "04",
    "Retail and dining",
    "Storefronts and dining districts place media close to everyday commercial activity.",
  ],
  [
    "05",
    "Daypart flexibility",
    "Operating windows can be planned around the campaign objective and confirmed deployment conditions.",
  ],
] as const;

const planningAreas = [
  "Palm Springs",
  "Palm Desert",
  "Indian Wells",
  "La Quinta",
  "Indio",
  "Coachella",
  "Desert Hot Springs",
] as const;

const audienceContexts = [
  ["01", "Hospitality + tourism", "Resorts, hotels, visitor destinations, and the movement around them create distinct campaign-planning environments."],
  ["02", "Commercial + retail", "Retail districts, dining areas, and active business corridors place mobile media near everyday commercial activity."],
  ["03", "Events", "Confirmed events and surrounding destinations can shape timing, access planning, and practical route decisions."],
  ["04", "Commuter activity", "Recurring roadway movement provides an operating context, not a claim about measured audience identity or reach."],
  ["05", "Seasonal movement", "Visitor patterns and seasonal activity may inform planning when supported by the campaign objective and current operating conditions."],
] as const;

const deliveryEvidence = [
  ["GPS activity / route evidence", "Recorded location activity can document where the assigned vehicle traveled.", "It does not verify which creative played or how many people saw it."],
  ["Deployment windows", "Recorded start and end information can document an operating period.", "It does not establish continuous screen uptime or audience exposure."],
  ["Route records", "Campaign records can preserve an assigned or completed route record for review.", "A route record is not proof of ad playback."],
  ["Mileage where recorded", "Recorded mileage can support documentation of vehicle activity during a deployment.", "Mileage does not measure impressions, reach, or attention."],
  ["Proof photography", "Approved campaign photographs can document the vehicle, setting, and visible creative at specific moments.", "A photograph does not establish continuous playback or total campaign exposure."],
  ["Report publication", "A published campaign report can organize available operational records for client review.", "Publication is not independent audience measurement or an external audit."],
] as const;

const brightPathIQCapabilities = [
  ["Campaign", "Campaign information and confirmed dates"],
  ["Route", "Available route activity, deployment windows, mileage, and operational notes"],
  ["Proof", "Proof photography and available verification status"],
  ["Report", "Organized campaign records and report publication"],
  ["CTA activity", "QR or call-to-action activity where specifically enabled"],
] as const;

const measurementClasses = [
  {
    key: "proven",
    title: "Proven",
    definition: "Directly recorded operational information.",
    examples: "Deployment windows, available route records, recorded mileage, proof photography, and published campaign records.",
    source: "Must originate from the applicable BrightPath operational record or reporting system.",
    limitation: "Operational evidence documents delivery activity; it does not automatically prove creative playback or audience exposure.",
  },
  {
    key: "estimated",
    title: "Estimated",
    definition: "Modeled or third-party-supported information.",
    examples: "Audience or exposure estimates only when a defined third-party source and calculation are available.",
    source: "Must identify the source, geography, period, calculation, and material assumptions.",
    limitation: "An estimate is not verified reach and must not be presented as a directly observed audience count.",
  },
  {
    key: "study",
    title: "Pilot / Study",
    definition: "Separately scoped research or effectiveness methodology.",
    examples: "Potential effectiveness work such as brand, visitation, or sales studies when separately designed and approved.",
    source: "Requires a defined research question, methodology, data authority, study period, and limitations.",
    limitation: "Study outcomes are not a standard campaign-reporting capability and must not be promised before methodology is confirmed.",
  },
] as const;

const campaignFormats = [
  {
    title: "Event + Destination Campaigns",
    description:
      "Concentrated visibility planned around confirmed audience movement, timing, access, and practical deployment conditions.",
    applications:
      "Casinos, festivals, sports, entertainment, conferences, and hospitality events",
  },
  {
    title: "Mobile Visibility Campaigns",
    description:
      "Recurring market presence planned around the places and operating windows relevant to an awareness objective.",
    applications:
      "Retail, restaurants, hospitality, regional services, and brand awareness",
  },
  {
    title: "Brand Activations",
    description:
      "Mobile media coordinated with a physical engagement or promotional environment.",
    applications:
      "Product launches, sampling, experiential activity, community events, and promotional activations",
  },
  {
    title: "Private + Exclusive Deployment",
    description:
      "Dedicated vehicle use with specialized timing, custom route planning, and controlled brand presence.",
    applications:
      "Major launches, premium campaigns, dedicated deployments, and high-priority events",
  },
] as const;

const creativeGroups = [
  {
    label: "Confirmed submission process",
    title: "Plan, confirm, then prepare final creative.",
    copy: "Campaign objectives and deployment conditions are reviewed before final production requirements are confirmed. Submitted creative is reviewed against the agreed campaign plan before deployment.",
  },
  {
    label: "Recommended creative practices",
    title: "Design for a moving, street-level environment.",
    items: [
      "Use strong contrast and concise messaging.",
      "Prioritize legibility and a simple call to action.",
      "Prepare creative for the specific screen orientation.",
      "Use QR codes only where the viewing context makes them appropriate.",
    ],
  },
  {
    label: "Final production specifications",
    title: "Campaign-ready details are provided during planning.",
    copy: "Exact production specifications, accepted delivery formats, and campaign-specific requirements are confirmed for the approved deployment rather than published here as unverified universal limits.",
  },
] as const;

const campaignProcess = [
  ["01", "Objective", "Align the campaign purpose, audience context, timing, and intended response."],
  ["02", "Planning", "Develop the deployment around practical routes, access, operating conditions, and confirmed requirements."],
  ["03", "Creative", "Confirm production requirements and prepare approved creative for the assigned display surfaces."],
  ["04", "Deployment", "Operate the assigned BrightPath vehicle during the confirmed campaign window."],
  ["05", "Verification", "Organize available route records, operating information, and proof photography."],
  ["06", "Reporting", "Publish available campaign records for client review through the applicable reporting process."],
] as const;

const pricingStructures = [
  {
    type: "Daily deployment",
    variables:
      "Operating hours, geography, timing, and route requirements.",
    confirmation:
      "Scope is confirmed through campaign planning and a written proposal for the approved deployment.",
  },
  {
    type: "Multi-day campaigns",
    variables:
      "Deployment days, recurring operating windows, geography, and campaign continuity.",
    confirmation:
      "Scope is confirmed after the operating pattern and campaign requirements are reviewed.",
  },
  {
    type: "Event campaigns",
    variables:
      "Event timing, access, operating conditions, and event-specific route requirements.",
    confirmation:
      "Scope is confirmed against the approved event plan and practical operating conditions.",
  },
  {
    type: "Private / exclusive campaigns",
    variables:
      "Dedicated vehicle use, operating window, geography, and specialized route requirements.",
    confirmation:
      "Scope is confirmed for the dedicated campaign plan and approved operating window.",
  },
] as const;

export default function MediaKitPage() {
  return (
    <main className="media-kit">
      <MediaKitNavigation />

      <section
        id="overview"
        className="mk-cover"
        data-media-kit-chapter="overview"
        aria-labelledby="media-kit-title"
      >
        <div className="mk-cover-photo">
          <Image
            src="/media-kit/campaign764936.jpeg"
            alt="BrightPath mobile LED vehicle operating on a Coachella Valley roadway"
            fill
            priority
            sizes="100vw"
          />
        </div>
        <div className="mk-cover-copy">
          <p className="mk-cover-brand">BrightPath Billboards</p>
          <h1 id="media-kit-title">Be seen the right way.</h1>
          <p className="mk-cover-subtitle">Mobile Digital Out of Home</p>
          <div className="mk-cover-meta" aria-label="Media kit coverage">
            <span>BrightPathIQ Campaign Reporting</span>
            <span>Coachella Valley</span>
          </div>
        </div>
      </section>

      <section
        className="mk-inventory"
        data-media-kit-chapter="overview"
        aria-labelledby="inventory-overview-title"
      >
        <div className="mk-editorial-grid">
          <header className="mk-section-heading">
            <p className="mk-eyebrow">01 / Inventory overview</p>
            <h2 id="inventory-overview-title">
              Mobile visibility built around real movement.
            </h2>
          </header>
          <div className="mk-inventory-content">
            <p className="mk-lead">
              BrightPath brings digital out-of-home media into the environments
              a campaign is designed to address. The inventory is planned as a
              mobile deployment—not a fixed placement or an abstract audience
              promise.
            </p>
            <dl className="mk-fact-list">
              {inventoryFacts.map(([term, description]) => (
                <div key={term}>
                  <dt>{term}</dt>
                  <dd>{description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section
        id="inventory"
        className="mk-platform"
        data-media-kit-chapter="inventory"
        aria-labelledby="platform-title"
      >
        <div className="mk-technical-shell">
          <header className="mk-section-heading mk-platform-heading">
            <p className="mk-eyebrow">02 / Technical overview</p>
            <h2 id="platform-title">The media platform</h2>
            <p className="mk-lead">
              A physical mobile LED platform presented with only the operating
              facts currently approved for publication.
            </p>
          </header>
          <div className="mk-platform-grid">
            <figure className="mk-truck-figure">
              <Image
                src="/media-kit/LED_Truck_Mobile_Billboad-cutout.png"
                alt="BrightPath mobile LED vehicle shown from the rear and passenger side"
                width={974}
                height={691}
                sizes="(max-width: 767px) 100vw, 50vw"
              />
              <figcaption>BrightPath mobile LED inventory</figcaption>
            </figure>
            <div className="mk-specification-panel">
              <p className="mk-technical-label">
                Verified platform information
              </p>
              <dl>
                {platformFacts.map(([term, value]) => (
                  <div key={term}>
                    <dt>{term}</dt>
                    <dd>{value}</dd>
                  </div>
                ))}
              </dl>
              <p className="mk-specification-note">
                Detailed production and creative specifications are confirmed
                during campaign planning. Unverified hardware values are
                intentionally omitted.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="mk-context"
        data-media-kit-chapter="inventory"
        aria-labelledby="context-title"
      >
        <div className="mk-context-grid">
          <figure className="mk-context-photo">
            <Image
              src="/media-kit/beautyadps.jpeg"
              alt="BrightPath mobile LED vehicle beside storefronts in an active commercial setting"
              fill
              sizes="(max-width: 767px) 100vw, 66vw"
            />
          </figure>
          <div className="mk-context-copy">
            <header className="mk-section-heading">
              <p className="mk-eyebrow mk-eyebrow-clay">
                03 / Operating context
              </p>
              <h2 id="context-title">Context before reach</h2>
              <p className="mk-lead">
                Media value begins with the environment: where movement happens,
                when attention is available, and how a campaign fits the setting
                around it.
              </p>
            </header>
            <ol className="mk-context-index">
              {contexts.map(([number, title, description]) => (
                <li key={number}>
                  <span>{number}</span>
                  <div>
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section
        id="market"
        className="mk-market"
        data-media-kit-chapter="market"
        aria-labelledby="market-title"
      >
        <div className="mk-market-intro">
          <p className="mk-eyebrow">04 / Market + route intelligence</p>
          <h2 id="market-title">Where the inventory operates</h2>
          <p className="mk-lead">
            BrightPath plans mobile LED campaigns within approved Coachella
            Valley operating areas, with final routes determined by campaign
            objectives, access, timing, safety, operating conditions, and
            applicable restrictions.
          </p>
        </div>
        <div className="mk-market-grid">
          <figure className="mk-map-figure">
            <Image
              src="/media-kit/desert9citymap.png"
              alt="Reference map showing nine Coachella Valley cities and principal highway corridors"
              width={1110}
              height={740}
              sizes="(max-width: 900px) 100vw, 66vw"
            />
            <figcaption>
              Geographic reference only. Final campaign routes remain subject
              to confirmed operating conditions and applicable restrictions.
            </figcaption>
          </figure>
          <aside className="mk-market-legend" aria-label="Market classification and planning model">
            <div className="mk-legend-group mk-legend-planning">
              <p>Campaign planning areas</p>
              <ul>
                {planningAreas.map((city) => <li key={city}>{city}</li>)}
              </ul>
            </div>
            <div className="mk-legend-group mk-legend-transit">
              <p>Transit / route connection</p>
              <ul>
                <li>Cathedral City</li>
                <li>Rancho Mirage</li>
              </ul>
              <small>
                These cities remain geographically visible and may be
                traversed when necessary. They are not presented as targeted
                BrightPath advertising markets.
              </small>
            </div>
            <div className="mk-planning-model" aria-label="Campaign planning sequence">
              <p>Planning model</p>
              <ol>
                <li>Audience</li><li>Place</li><li>Time</li><li>Frequency</li>
              </ol>
            </div>
          </aside>
        </div>
      </section>

      <section className="mk-audience" data-media-kit-chapter="market" aria-labelledby="audience-title">
        <div className="mk-audience-shell">
          <div className="mk-audience-heading">
            <p className="mk-eyebrow">05 / Audience context</p>
            <h2 id="audience-title">Environment before audience claims</h2>
          </div>
          <p className="mk-audience-declaration">
            Operating environments help explain who the vehicle may naturally
            be near. They do not establish measured demographic identity,
            impressions, reach, or dwell time.
          </p>
          <ol className="mk-audience-bands">
            {audienceContexts.map(([number, title, description]) => (
              <li key={number}>
                <span>{number}</span><h3>{title}</h3><p>{description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="measurement" className="mk-delivery" data-media-kit-chapter="measurement" aria-labelledby="delivery-title">
        <div className="mk-delivery-shell">
          <header className="mk-delivery-heading">
            <div><p className="mk-eyebrow">06 / Proof of delivery</p><h2 id="delivery-title">What BrightPath can document</h2></div>
            <p>Prove delivery. Estimate exposure. Study lift.</p>
          </header>
          <dl className="mk-evidence-ledger">
            {deliveryEvidence.map(([term, proves, limitation]) => (
              <div key={term}>
                <dt>{term}</dt>
                <dd><strong>What it documents</strong>{proves}</dd>
                <dd><strong>What it does not prove</strong>{limitation}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="mk-iq" data-media-kit-chapter="measurement" aria-labelledby="iq-title">
        <div className="mk-iq-shell">
          <div className="mk-iq-copy">
            <p className="mk-eyebrow">07 / BrightPathIQ</p>
            <h2 id="iq-title">Campaign information, organized for review</h2>
            <p className="mk-lead">BrightPathIQ can organize available campaign execution information without presenting operational records as independent audience measurement.</p>
            <dl>
              {brightPathIQCapabilities.map(([term, description]) => <div key={term}><dt>{term}</dt><dd>{description}</dd></div>)}
            </dl>
          </div>
          <aside className="mk-iq-status" aria-label="BrightPathIQ client view status">
            <span>Client view status</span>
            <strong>Approved client capture not included in the current asset handoff</strong>
            <p>No dashboard interface has been reconstructed or simulated for this presentation.</p>
          </aside>
        </div>
      </section>

      <section className="mk-measurement" data-media-kit-chapter="measurement" aria-labelledby="measurement-title">
        <div className="mk-measurement-shell">
          <header>
            <p className="mk-eyebrow">08 / Measurement framework</p>
            <h2 id="measurement-title">Proven. Estimated. Pilot / Study.</h2>
            <p>Three classifications keep operational evidence, modeled information, and separately scoped research from being blurred together.</p>
          </header>
          <div className="mk-measurement-policy">
            {measurementClasses.map((item) => (
              <article key={item.key} className={`mk-policy-row mk-policy-${item.key}`}>
                <div className="mk-policy-name"><span aria-hidden="true" /><h3>{item.title}</h3><p>{item.definition}</p></div>
                <dl>
                  <div><dt>Examples</dt><dd>{item.examples}</dd></div>
                  <div><dt>Source / methodology</dt><dd>{item.source}</dd></div>
                  <div><dt>Limitation</dt><dd>{item.limitation}</dd></div>
                </dl>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="campaigns" className="mk-formats" data-media-kit-chapter="campaigns" aria-labelledby="formats-title">
        <div className="mk-formats-shell">
          <header className="mk-formats-heading">
            <p className="mk-eyebrow mk-eyebrow-clay">09 / Campaign formats</p>
            <h2 id="formats-title">Built around the campaign objective.</h2>
            <p>One mobile LED platform can be planned differently according to the environment, timing, and role the campaign needs it to perform.</p>
          </header>
          <div className="mk-format-feature">
            <figure className="mk-format-event-photo">
              <Image src="/media-kit/brightpathbillboardstruck(1).jpeg" alt="BrightPath mobile LED vehicle operating near a Ferris wheel in an event environment" fill sizes="(max-width: 900px) 100vw, 64vw" />
            </figure>
            <article>
              <p>Lead format</p>
              <h3>{campaignFormats[0].title}</h3>
              <p>{campaignFormats[0].description}</p>
              <span>{campaignFormats[0].applications}</span>
            </article>
          </div>
          <div className="mk-format-support">
            <div className="mk-format-list">
              {campaignFormats.slice(1).map((format, index) => (
                <article key={format.title}>
                  <span>0{index + 2}</span>
                  <div><h3>{format.title}</h3><p>{format.description}</p><small>{format.applications}</small></div>
                </article>
              ))}
            </div>
            <figure className="mk-format-secondary-photo">
              <Image src="/media-kit/bpiqpspd.jpeg" alt="BrightPath mobile LED vehicle in a commercial deployment setting" width={768} height={494} sizes="(max-width: 767px) 90vw, 360px" />
              <figcaption>Commercial deployment setting</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="mk-creative" data-media-kit-chapter="campaigns" aria-labelledby="creative-title">
        <div className="mk-creative-shell">
          <header>
            <p className="mk-eyebrow">10 / Creative + campaign requirements</p>
            <h2 id="creative-title">Practical guidance for preparing campaign creative.</h2>
          </header>
          <div className="mk-creative-groups">
            {creativeGroups.map((group, index) => (
              <article key={group.label}>
                <span>0{index + 1}</span>
                <div>
                  <p className="mk-technical-label">{group.label}</p>
                  <h3>{group.title}</h3>
                  {"copy" in group && <p>{group.copy}</p>}
                  {"items" in group && <ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul>}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mk-process" data-media-kit-chapter="campaigns" aria-labelledby="process-title">
        <div className="mk-process-shell">
          <header>
            <p className="mk-eyebrow">11 / Campaign process</p>
            <h2 id="process-title">From brief to report.</h2>
            <p>A concise operating sequence keeps responsibilities and available documentation understandable from the outset.</p>
          </header>
          <ol className="mk-process-sequence">
            {campaignProcess.map(([number, title, description]) => (
              <li key={number}><span>{number}</span><h3>{title}</h3><p>{description}</p></li>
            ))}
          </ol>
        </div>
      </section>

      <section id="proof" className="mk-proof" data-media-kit-chapter="proof" aria-labelledby="proof-title">
        <div className="mk-proof-heading">
          <p className="mk-eyebrow">12 / Real campaign proof</p>
          <h2 id="proof-title">Real vehicle. Real operating environments.</h2>
          <p>Photography documents the assigned BrightPath vehicle, visible creative, and the environment present at a recorded moment.</p>
        </div>
        <div className="mk-proof-gallery">
          <figure className="mk-proof-primary">
            <Image src="/media-kit/beautyadps.jpeg" alt="BrightPath mobile LED vehicle beside storefronts in a commercial environment" fill sizes="(max-width: 767px) 100vw, 66vw" />
            <figcaption>Commercial corridor</figcaption>
          </figure>
          <figure className="mk-proof-event">
            <Image src="/media-kit/brightpathbillboardstruck(1).jpeg" alt="BrightPath mobile LED vehicle near a Ferris wheel and event activity" fill sizes="(max-width: 767px) 100vw, 34vw" />
            <figcaption>Event environment</figcaption>
          </figure>
          <figure className="mk-proof-street">
            <Image src="/media-kit/campaign764936.jpeg" alt="BrightPath mobile LED vehicle operating on a roadway with surrounding traffic" fill sizes="(max-width: 767px) 100vw, 34vw" />
            <figcaption>Street-level deployment</figcaption>
          </figure>
        </div>
      </section>

      <section className="mk-media" data-media-kit-chapter="proof" aria-labelledby="media-title">
        <div className="mk-media-shell">
          <header>
            <p className="mk-eyebrow mk-eyebrow-sky">13 / Media + community credibility</p>
            <h2 id="media-title">Featured on NBC Palm Springs.</h2>
          </header>
          <article className="mk-media-citation">
            <div><span>Publisher</span><strong>NBC Palm Springs</strong></div>
            <div><span>Format</span><strong>Local news feature</strong></div>
            <div className="mk-media-title"><span>Feature</span><strong>Mobile LED Advertising in Palm Springs | BrightPath Billboards on Local News</strong></div>
            <a href="https://youtu.be/EBo7axZM_GE" target="_blank" rel="noreferrer" aria-label="Watch the BrightPath Billboards feature on NBC Palm Springs on YouTube (opens in a new tab)">Watch the feature on YouTube <span aria-hidden="true">↗</span></a>
          </article>
        </div>
      </section>

      <section id="pricing" className="mk-pricing" data-media-kit-chapter="campaigns" aria-labelledby="pricing-title">
        <div className="mk-pricing-shell">
          <header>
            <p className="mk-eyebrow">14 / Pricing structure</p>
            <h2 id="pricing-title">Commercial structure, confirmed around the campaign.</h2>
            <p>Campaign scope is confirmed through planning and a written proposal. Structure may vary based on operating time, geography, scheduling, access, route requirements, and the needs of the campaign. Current terms are not represented through a public rate card.</p>
          </header>
          <div className="mk-pricing-ledger" role="table" aria-label="BrightPath campaign pricing structure">
            <div className="mk-pricing-columns" role="row">
              <span role="columnheader">Engagement type</span>
              <span role="columnheader">Typical planning variables</span>
              <span role="columnheader">How scope is confirmed</span>
            </div>
            {pricingStructures.map((item) => (
              <div className="mk-pricing-row" role="row" key={item.type}>
                <h3 role="rowheader">{item.type}</h3>
                <div role="cell"><span>Typical planning variables</span><p>{item.variables}</p></div>
                <div role="cell"><span>How scope is confirmed</span><p>{item.confirmation}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="company" className="mk-company" data-media-kit-chapter="company" aria-labelledby="company-title">
        <div className="mk-company-shell">
          <header>
            <p className="mk-eyebrow mk-eyebrow-clay">15 / Company + founder</p>
            <h2 id="company-title">Accountability behind the work.</h2>
          </header>
          <div className="mk-company-positioning">
            <p>BrightPath Billboards is a Coachella Valley mobile digital out-of-home advertising company focused on mobile LED deployment, local market planning, campaign verification, and clearer client reporting.</p>
            <p className="mk-operating-standard"><span>Plan carefully.</span><span>Execute professionally.</span><span>Document the work.</span></p>
          </div>
          <article className="mk-founder">
            <div className="mk-founder-identity">
              <span>Founder</span>
              <h3>Marcus Tillman</h3>
            </div>
            <div className="mk-founder-copy">
              <p>BrightPath grew from Marcus Tillman&apos;s experience building and marketing service businesses, where he saw firsthand how difficult it can be for operators to earn meaningful visibility in their own market. That experience shaped a mobile media company built around movement, local knowledge, and clearer proof of campaign execution.</p>
              <span className="mk-brick-marker">Brick by brick.</span>
            </div>
          </article>
        </div>
      </section>

      <section id="contact" className="mk-contact" data-media-kit-chapter="company" aria-labelledby="contact-title">
        <div className="mk-contact-shell">
          <header>
            <p className="mk-eyebrow">16 / Contact</p>
            <h2 id="contact-title">BrightPath Billboards</h2>
            <p>Enterprise media inquiries and campaign planning.</p>
          </header>
          <address className="mk-contact-details">
            <div><span>Contact</span><strong>Marcus Tillman</strong></div>
            <div><span>Title</span><strong>Founder</strong></div>
            <div><span>Phone</span><a href="tel:+17603858989">(760) 385-8989</a></div>
            <div><span>Email</span><a href="mailto:Brightpathbillboards@gmail.com">Brightpathbillboards@gmail.com</a></div>
            <div><span>Website</span><a href="https://bpmobilebillboards.com/">bpmobilebillboards.com</a></div>
            <div><span>Operating market</span><strong>Coachella Valley, California</strong></div>
          </address>
        </div>
      </section>
    </main>
  );
}

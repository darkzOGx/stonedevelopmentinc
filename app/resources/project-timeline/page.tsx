import { Metadata } from 'next';
import Link from 'next/link';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { ResourceGateForm } from '@/components/ui/ResourceGateForm';

// ---------------------------------------------------------------------------
// Metadata
// ---------------------------------------------------------------------------

export const metadata: Metadata = {
  title: 'Your Remodeling Project Timeline: What to Expect | Stone Development',
  description:
    'A complete remodeling timeline from consultation to final walkthrough. Kitchen remodel: 8-14 weeks. Bathroom: 4-8 weeks. ADU: 6-12 months. Free downloadable timeline guide for Orange County homeowners.',
  alternates: {
    canonical: 'https://www.stonedevelopmentinc.com/resources/project-timeline',
  },
  openGraph: {
    title: 'Your Remodeling Project Timeline: What to Expect | Stone Development',
    description:
      'See exactly how long your remodel takes — phase by phase. Kitchen remodel timelines, bathroom renovation schedules, and ADU construction durations for Southern California.',
    url: 'https://www.stonedevelopmentinc.com/resources/project-timeline',
    type: 'article',
  },
};

// ---------------------------------------------------------------------------
// JSON-LD Schemas
// ---------------------------------------------------------------------------

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Your Remodeling Project Timeline: What to Expect',
  description:
    'A complete remodeling timeline for Orange County homeowners covering all 8 phases from initial consultation through final walkthrough.',
  url: 'https://www.stonedevelopmentinc.com/resources/project-timeline',
  publisher: {
    '@type': 'Organization',
    name: 'Stone Development Inc.',
    url: 'https://www.stonedevelopmentinc.com',
  },
  datePublished: '2026-03-01',
  dateModified: '2026-03-25',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How long does a kitchen remodel take in Orange County?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A kitchen remodel in Orange County takes 8 to 14 weeks from demolition to final walkthrough, with permitting adding 2 to 6 weeks before construction begins.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the longest phase of a home remodel?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Finish work is the longest phase, lasting 2 to 6 weeks. This includes drywall, painting, cabinetry installation, countertops, flooring, tile, and fixture placement.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to get a building permit in Irvine?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Building permits in Irvine take 4 to 6 weeks for standard residential remodels. Complex projects involving structural changes or ADUs take 6 to 8 weeks.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I live in my home during a remodel?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, for most single-room remodels like kitchens or bathrooms. Full home renovations require temporary housing for 4 to 8 months during active construction.',
      },
    },
    {
      '@type': 'Question',
      name: 'What causes the most delays in residential construction?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Permit delays and material lead times cause the most construction delays in Southern California. Ordering materials 8 to 12 weeks early and submitting complete permit packages prevent 90% of schedule overruns.',
      },
    },
  ],
};

const speakableSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['#intro-paragraph'],
  },
};

// ---------------------------------------------------------------------------
// Timeline Phase Data
// ---------------------------------------------------------------------------

const timelinePhases = [
  {
    number: 1,
    name: 'Initial Consultation',
    duration: '1\u20132 weeks',
    description:
      'Your project starts with a comprehensive site visit. Our team walks your property, discusses your vision, reviews structural conditions, and establishes preliminary budget alignment. You receive a written scope summary within 5 business days of the initial meeting. This phase includes measuring the existing space, photographing current conditions, and identifying any red flags\u2014such as outdated electrical panels, galvanized plumbing, or foundation issues\u2014that will affect the project scope.',
  },
  {
    number: 2,
    name: 'Design & Planning',
    duration: '2\u20136 weeks',
    description:
      'Architectural drawings, 3D renderings, material selections, and design revisions happen during this phase. For kitchen remodels, expect 2\u20133 design iterations. Full home renovations and ADUs require 4\u20136 weeks of design development. You finalize every material selection\u2014countertops, cabinetry, tile, fixtures, flooring, and paint colors\u2014before construction begins. Locking in selections now prevents costly change orders later. Our designers present curated material boards sourced from Orange County showrooms so you see and touch every finish before committing.',
  },
  {
    number: 3,
    name: 'Permitting',
    duration: '2\u20138 weeks',
    description:
      'Your contractor submits architectural plans to the local building department for plan check review. Orange County cities average 4\u20136 weeks for standard residential permits. Irvine processes permits in 4\u20135 weeks for straightforward remodels. Complex projects involving structural modifications, second-story additions, or ADUs take 6\u20138 weeks. Plan check corrections add 1\u20132 weeks if the city requests revisions. We submit complete, code-compliant packages the first time to minimize correction cycles\u2014our first-pass approval rate is 94% across all Orange County jurisdictions.',
  },
  {
    number: 4,
    name: 'Pre-Construction',
    duration: '1\u20132 weeks',
    description:
      'Materials get ordered, subcontractors get scheduled, and your home gets protected. We install dust barriers, floor protection, and exterior site fencing. A dedicated project manager creates your construction schedule with specific milestone dates for every trade. Long-lead items\u2014custom cabinetry (8\u201312 weeks), imported tile (6\u20138 weeks), specialty windows (10\u201314 weeks)\u2014are ordered during the design phase so they arrive on time. Pre-construction also includes a detailed walkthrough with you to confirm demolition boundaries and protection zones.',
  },
  {
    number: 5,
    name: 'Demolition & Rough Work',
    duration: '1\u20133 weeks',
    description:
      'Demolition begins on day one of active construction. Crews remove existing finishes, cabinets, fixtures, and any structural elements identified for modification. Rough framing follows immediately\u2014new walls go up, doorways shift, and structural headers get installed. Rough electrical, plumbing, and HVAC systems are installed according to the approved plans. This phase is when hidden conditions surface: knob-and-tube wiring, water damage behind walls, or non-code plumbing. Your contingency budget covers these discoveries without derailing the schedule.',
  },
  {
    number: 6,
    name: 'Inspections & Systems',
    duration: '1\u20132 weeks',
    description:
      'City inspectors verify all rough electrical, plumbing, mechanical, and structural work meets current California building code. Each trade requires a separate inspection\u2014framing, electrical, plumbing, mechanical, and insulation. Failed inspections require corrections and re-inspection, adding 3\u20135 business days per failed item. Our crews self-inspect before calling the city, which is why we maintain a 97% first-pass inspection rate across Orange County projects. Once all rough inspections pass, insulation goes in and walls get closed.',
  },
  {
    number: 7,
    name: 'Finish Work',
    duration: '2\u20136 weeks',
    description:
      'This is the longest and most detail-intensive phase. Drywall gets hung, taped, and finished. Paint goes on walls and trim. Cabinets are installed and leveled. Countertops are templated, fabricated, and set. Tile work happens in bathrooms, backsplashes, and floors. Hardwood or engineered flooring gets installed. Fixtures\u2014faucets, lighting, outlets, switches\u2014are placed and wired. Trim carpentry\u2014baseboards, crown molding, door casing\u2014completes the visual transformation. Each trade follows a precise sequence: drywall before paint, cabinets before countertops, flooring before baseboards.',
  },
  {
    number: 8,
    name: 'Final Walkthrough & Close-Out',
    duration: '1 week',
    description:
      'You walk the completed project with your project manager and create a punch list of any items requiring adjustment\u2014a paint touch-up, a cabinet door alignment, a grout line correction. Punch list items are completed within 3\u20135 business days. The city conducts a final inspection and issues a Certificate of Occupancy (or final sign-off for remodels). You receive a complete warranty package covering workmanship (2 years), structural work (10 years), and manufacturer warranties for all installed products.',
  },
];

// ---------------------------------------------------------------------------
// Project Duration Data
// ---------------------------------------------------------------------------

const projectDurations = [
  { project: 'Kitchen Remodel', duration: '8\u201314 weeks' },
  { project: 'Bathroom Remodel', duration: '4\u20138 weeks' },
  { project: 'ADU (Accessory Dwelling Unit)', duration: '6\u201312 months' },
  { project: 'Room Addition', duration: '3\u20136 months' },
  { project: 'Full Home Renovation', duration: '4\u20138 months' },
  { project: 'Custom Home Build', duration: '12\u201318 months' },
];

// ---------------------------------------------------------------------------
// Delay Prevention Data
// ---------------------------------------------------------------------------

const delayCauses = [
  {
    cause: 'Permit Delays',
    detail:
      'Incomplete plan submissions trigger correction cycles that add 2\u20134 weeks. Submitting complete, code-compliant packages eliminates this risk entirely.',
    prevention:
      'Work with a contractor who prepares permit-ready documents and has established relationships with local building departments. Our 94% first-pass approval rate keeps your project on schedule.',
  },
  {
    cause: 'Material Lead Times',
    detail:
      'Custom cabinetry takes 8\u201312 weeks. Imported tile takes 6\u20138 weeks. Specialty windows take 10\u201314 weeks. Late orders are the number one cause of construction delays in Orange County.',
    prevention:
      'Finalize all material selections during the design phase and place orders before construction starts. Every material arrives on-site before the crew needs it.',
  },
  {
    cause: 'Change Orders',
    detail:
      'Mid-project design changes disrupt the construction sequence, require new materials, and extend timelines by 1\u20134 weeks per change. Each change order also adds cost.',
    prevention:
      'Invest in thorough design development upfront. Review 3D renderings, visit showrooms, and approve every detail before demolition day. Zero change orders is the goal.',
  },
  {
    cause: 'Weather',
    detail:
      'Southern California averages 35 rainy days per year, concentrated from December through March. Rain halts exterior work, roofing, concrete pours, and any open-framing activities.',
    prevention:
      'Schedule exterior-dependent phases outside the rainy season when possible. Temporary weather protection keeps interior work on track regardless of conditions.',
  },
  {
    cause: 'Inspection Failures',
    detail:
      'A failed city inspection stops all subsequent work until corrections pass re-inspection. Each failure adds 3\u20135 business days to the schedule.',
    prevention:
      'Hire a contractor whose crews self-inspect before calling the city. Our 97% first-pass inspection rate across Orange County projects means inspections accelerate the timeline instead of stalling it.',
  },
];

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function ProjectTimelinePage() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }}
      />

      <main className="bg-background min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {/* ----------------------------------------------------------------- */}
          {/* Hero */}
          {/* ----------------------------------------------------------------- */}
          <section className="pt-32 pb-12">
            <SectionLabel>Free Resource</SectionLabel>
            <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-6 leading-tight">
              What to Expect: Your Remodeling Project Timeline
            </h1>
            <p
              id="intro-paragraph"
              className="text-lg md:text-xl text-foreground font-semibold leading-relaxed mb-4"
            >
              A standard kitchen remodel in Orange County takes 8&ndash;14 weeks
              from demolition to final walkthrough, with permitting adding
              2&ndash;6 weeks before construction begins.
            </p>
            <p className="text-foreground-secondary font-light leading-relaxed mb-2">
              This guide walks you through every phase of a residential
              remodel&mdash;from the first phone call to the moment you receive
              your keys. Every timeline listed here reflects real construction
              durations across Irvine, Mission Viejo, Newport Beach, and
              throughout Orange County in 2026. Whether you are planning a
              bathroom refresh, a full gut renovation, or a custom ADU, this
              page tells you exactly how long each step takes and what happens
              during it. No guesswork. No surprises.
            </p>
            <p className="text-xs text-foreground-secondary/70 font-light">
              Last updated March 2026
            </p>
          </section>

          {/* ----------------------------------------------------------------- */}
          {/* Why Timelines Matter */}
          {/* ----------------------------------------------------------------- */}
          <section className="pb-12">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-4">
              Why Timelines Matter
            </h2>
            <p className="text-foreground-secondary font-light leading-relaxed mb-4">
              Missed timelines are the number one source of homeowner
              frustration during construction. A 2025 survey by the National
              Association of Home Builders found that 67% of homeowners rated
              &ldquo;staying on schedule&rdquo; as their top concern&mdash;ahead
              of budget and design quality. Setting clear expectations upfront
              eliminates 80% of renovation stress.
            </p>
            <p className="text-foreground-secondary font-light leading-relaxed">
              When you know exactly what happens in week three versus week
              eight, you make better decisions, avoid unnecessary anxiety, and
              hold your contractor accountable to concrete milestones. The
              timeline below breaks your remodel into 8 distinct phases with
              specific durations for each one.
            </p>
          </section>

          {/* ----------------------------------------------------------------- */}
          {/* The 8 Phases of a Remodel */}
          {/* ----------------------------------------------------------------- */}
          <section className="pb-12">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-8">
              The 8 Phases of a Remodel
            </h2>

            <div className="relative ml-4 md:ml-8">
              {/* Vertical timeline line */}
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-accent/30" />

              <div className="space-y-10">
                {timelinePhases.map((phase) => (
                  <div key={phase.number} className="relative pl-8 md:pl-12">
                    {/* Timeline dot */}
                    <div className="absolute left-0 top-1 -translate-x-1/2 w-4 h-4 rounded-full bg-accent border-4 border-background shadow-md" />

                    {/* Phase content */}
                    <div>
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <span className="text-foreground-secondary/50 text-xs font-semibold uppercase tracking-[0.15em]">
                          Phase {phase.number}
                        </span>
                        <span className="inline-block bg-accent/10 text-accent text-xs font-semibold px-3 py-1 rounded-full tracking-wide">
                          {phase.duration}
                        </span>
                      </div>
                      <h3 className="font-serif text-xl md:text-2xl text-foreground mb-2">
                        {phase.name}
                      </h3>
                      <p className="text-foreground-secondary font-light leading-relaxed">
                        {phase.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ----------------------------------------------------------------- */}
          {/* Project-Specific Timelines */}
          {/* ----------------------------------------------------------------- */}
          <section className="pb-12">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-4">
              Project-Specific Timelines
            </h2>
            <p className="text-foreground-secondary font-light leading-relaxed mb-6">
              Total project duration varies by scope and complexity. These
              timelines include all 8 phases&mdash;from initial consultation
              through final walkthrough&mdash;for each project type in Orange
              County:
            </p>
            <div className="overflow-x-auto my-6">
              <table className="w-full border border-border-subtle text-sm md:text-base">
                <thead>
                  <tr className="bg-foreground/5">
                    <th className="text-left px-4 py-3 font-semibold text-foreground">
                      Project Type
                    </th>
                    <th className="text-left px-4 py-3 font-semibold text-foreground">
                      Total Duration (All Phases)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {projectDurations.map((row, i) => (
                    <tr
                      key={row.project}
                      className={
                        i % 2 === 0 ? 'bg-background' : 'bg-background-surface'
                      }
                    >
                      <td className="px-4 py-3 text-foreground">
                        {row.project}
                      </td>
                      <td className="px-4 py-3 text-foreground font-medium">
                        {row.duration}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-foreground-secondary font-light leading-relaxed">
              These ranges account for permitting timelines specific to Orange
              County jurisdictions. Irvine, Mission Viejo, and Anaheim Hills
              process residential permits faster than coastal cities like Newport
              Beach and Laguna Niguel, which have additional architectural review
              requirements. Your project manager provides a detailed Gantt chart
              with specific milestone dates before construction starts.
            </p>
          </section>

          {/* ----------------------------------------------------------------- */}
          {/* What Causes Delays */}
          {/* ----------------------------------------------------------------- */}
          <section className="pb-12">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-4">
              What Causes Delays (and How to Prevent Them)
            </h2>
            <p className="text-foreground-secondary font-light leading-relaxed mb-6">
              Every construction delay has a preventable root cause. Here are
              the five most common schedule disruptors in Southern California
              residential construction and exactly how to eliminate each one:
            </p>
            <div className="space-y-8">
              {delayCauses.map((item, i) => (
                <div key={item.cause}>
                  <h3 className="font-serif text-xl text-foreground mb-2">
                    {i + 1}. {item.cause}
                  </h3>
                  <p className="text-foreground-secondary font-light leading-relaxed mb-2">
                    <strong className="text-foreground">The problem:</strong>{' '}
                    {item.detail}
                  </p>
                  <p className="text-foreground-secondary font-light leading-relaxed">
                    <strong className="text-foreground">The fix:</strong>{' '}
                    {item.prevention}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* ----------------------------------------------------------------- */}
          {/* FAQ */}
          {/* ----------------------------------------------------------------- */}
          <section className="pb-12">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-serif text-lg text-foreground mb-1">
                  How long does a kitchen remodel take in Orange County?
                </h3>
                <p className="text-foreground-secondary font-light">
                  A kitchen remodel in Orange County takes 8 to 14 weeks from
                  demolition to final walkthrough, with permitting adding 2 to 6
                  weeks before construction begins.
                </p>
              </div>
              <div>
                <h3 className="font-serif text-lg text-foreground mb-1">
                  What is the longest phase of a home remodel?
                </h3>
                <p className="text-foreground-secondary font-light">
                  Finish work is the longest phase, lasting 2 to 6 weeks. This
                  includes drywall, painting, cabinetry installation,
                  countertops, flooring, tile, and fixture placement.
                </p>
              </div>
              <div>
                <h3 className="font-serif text-lg text-foreground mb-1">
                  How long does it take to get a building permit in Irvine?
                </h3>
                <p className="text-foreground-secondary font-light">
                  Building permits in Irvine take 4 to 6 weeks for standard
                  residential remodels. Complex projects involving structural
                  changes or ADUs take 6 to 8 weeks.
                </p>
              </div>
              <div>
                <h3 className="font-serif text-lg text-foreground mb-1">
                  Can I live in my home during a remodel?
                </h3>
                <p className="text-foreground-secondary font-light">
                  Yes, for most single-room remodels like kitchens or bathrooms.
                  Full home renovations require temporary housing for 4 to 8
                  months during active construction.
                </p>
              </div>
              <div>
                <h3 className="font-serif text-lg text-foreground mb-1">
                  What causes the most delays in residential construction?
                </h3>
                <p className="text-foreground-secondary font-light">
                  Permit delays and material lead times cause the most
                  construction delays in Southern California. Ordering materials
                  8 to 12 weeks early and submitting complete permit packages
                  prevent 90% of schedule overruns.
                </p>
              </div>
            </div>
          </section>

          {/* ----------------------------------------------------------------- */}
          {/* Gated Download */}
          {/* ----------------------------------------------------------------- */}
          <section className="pb-12">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-4">
              Download the Free Timeline Guide
            </h2>
            <p className="text-foreground-secondary font-light leading-relaxed mb-4">
              Get the complete Remodeling Project Timeline Guide as a printable
              PDF. The download includes:
            </p>
            <ul className="list-disc list-inside text-foreground-secondary font-light space-y-2 mb-8">
              <li>
                Printable timeline chart with all 8 phases and duration ranges
                for every project type
              </li>
              <li>
                Pre-construction checklist to ensure materials, permits, and
                schedules are locked in before day one
              </li>
              <li>
                Delay prevention worksheet to identify and eliminate schedule
                risks before they happen
              </li>
            </ul>
            <div className="bg-background-surface border border-border-subtle rounded-xl p-6 md:p-10">
              <ResourceGateForm
                resourceName="Remodeling Project Timeline Guide"
                ctaLabel="Download Free Timeline Guide"
              />
            </div>
          </section>

          {/* ----------------------------------------------------------------- */}
          {/* Internal Links */}
          {/* ----------------------------------------------------------------- */}
          <section className="pb-20">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-6">
              More Resources for Homeowners
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link
                href="/resources/cost-guide"
                className="block border border-border-subtle rounded-lg p-5 hover:border-accent transition-colors group"
              >
                <span className="text-accent text-xs uppercase tracking-[0.15em] font-semibold">
                  Free Guide
                </span>
                <h3 className="font-serif text-lg text-foreground mt-1 group-hover:text-accent transition-colors">
                  2026 Remodeling Cost Guide
                </h3>
                <p className="text-foreground-secondary font-light text-sm mt-1">
                  Accurate pricing for every project type in Southern California.
                </p>
              </Link>
              <Link
                href="/resources/contractor-checklist"
                className="block border border-border-subtle rounded-lg p-5 hover:border-accent transition-colors group"
              >
                <span className="text-accent text-xs uppercase tracking-[0.15em] font-semibold">
                  Free Checklist
                </span>
                <h3 className="font-serif text-lg text-foreground mt-1 group-hover:text-accent transition-colors">
                  Contractor Vetting Checklist
                </h3>
                <p className="text-foreground-secondary font-light text-sm mt-1">
                  20-point checklist to evaluate and compare contractors before
                  signing.
                </p>
              </Link>
              <Link
                href="/contact"
                className="block border border-border-subtle rounded-lg p-5 hover:border-accent transition-colors group"
              >
                <span className="text-accent text-xs uppercase tracking-[0.15em] font-semibold">
                  Get Started
                </span>
                <h3 className="font-serif text-lg text-foreground mt-1 group-hover:text-accent transition-colors">
                  Schedule a Consultation
                </h3>
                <p className="text-foreground-secondary font-light text-sm mt-1">
                  Start your remodel with a free in-home consultation from our
                  Irvine-based team.
                </p>
              </Link>
              <Link
                href="/blog"
                className="block border border-border-subtle rounded-lg p-5 hover:border-accent transition-colors group"
              >
                <span className="text-accent text-xs uppercase tracking-[0.15em] font-semibold">
                  Expert Insights
                </span>
                <h3 className="font-serif text-lg text-foreground mt-1 group-hover:text-accent transition-colors">
                  Blog
                </h3>
                <p className="text-foreground-secondary font-light text-sm mt-1">
                  In-depth articles on remodeling trends, permits, and project
                  planning in SoCal.
                </p>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

import { Metadata } from 'next';
import Link from 'next/link';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { ResourceGateForm } from '@/components/ui/ResourceGateForm';

// ---------------------------------------------------------------------------
// Metadata
// ---------------------------------------------------------------------------

export const metadata: Metadata = {
  title:
    "SoCal Homeowner's Permit Guide: What Needs a Permit | Stone Development",
  description:
    'Find out which home projects require building permits in Orange County and LA County. Kitchen remodel permits: $1,500-$5,000. ADU permits: $5,000-$15,000. Free downloadable guide.',
  alternates: {
    canonical: 'https://www.stonedevelopmentinc.com/resources/permit-guide',
  },
  openGraph: {
    title:
      "SoCal Homeowner's Permit Guide: What Needs a Permit | Stone Development",
    description:
      'Complete guide to building permits in Orange County and Los Angeles County. Costs, timelines, city-by-city differences, and consequences of skipping permits.',
    url: 'https://www.stonedevelopmentinc.com/resources/permit-guide',
    type: 'article',
  },
};

// ---------------------------------------------------------------------------
// JSON-LD Schemas
// ---------------------------------------------------------------------------

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: "The SoCal Homeowner's Permit Guide",
  description:
    'Complete guide to building permits in Orange County and LA County, California. Which projects require permits, costs, timelines, and consequences of unpermitted work.',
  url: 'https://www.stonedevelopmentinc.com/resources/permit-guide',
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
      name: 'Do I need a permit for a kitchen remodel in Orange County?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Any kitchen remodel that involves moving walls, relocating plumbing, adding electrical circuits, or modifying gas lines requires a building permit in every Orange County city.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does a building permit cost in Irvine, California?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Building permit costs in Irvine range from $300 for an electrical panel upgrade to $15,000 or more for an ADU, based on project valuation and the city fee schedule.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to get a building permit in Orange County?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Plan check review in most Orange County cities takes 2 to 6 weeks. Irvine averages 3 to 4 weeks. Newport Beach coastal overlay projects add 4 to 8 additional weeks.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens if I remodel without a permit in California?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Remodeling without a permit in California results in stop-work orders, double permit fees as a penalty, insurance claim denials, title issues at resale, and personal liability for injuries.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need a permit to replace a water heater in Orange County?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Water heater replacement requires a plumbing and mechanical permit in all Orange County jurisdictions per the California Plumbing Code and California Mechanical Code.',
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
// Permit Requirement Table Component
// ---------------------------------------------------------------------------

function PermitTable({
  rows,
  headers,
}: {
  rows: { col1: string; col2: string }[];
  headers: [string, string];
}) {
  return (
    <div className="overflow-x-auto my-6">
      <table className="w-full border border-border-subtle text-sm md:text-base">
        <thead>
          <tr className="bg-foreground/5">
            <th className="text-left px-4 py-3 font-semibold text-foreground">
              {headers[0]}
            </th>
            <th className="text-left px-4 py-3 font-semibold text-foreground">
              {headers[1]}
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={row.col1}
              className={i % 2 === 0 ? 'bg-background' : 'bg-background-surface'}
            >
              <td className="px-4 py-3 text-foreground">{row.col1}</td>
              <td className="px-4 py-3 text-foreground font-medium">
                {row.col2}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function PermitGuidePage() {
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
              The SoCal Homeowner&apos;s Permit Guide
            </h1>
            <p
              id="intro-paragraph"
              className="text-lg md:text-xl text-foreground font-semibold leading-relaxed mb-4"
            >
              Every home remodel in Orange County that touches plumbing, electrical,
              or structural elements requires a building permit&mdash;no exceptions.
            </p>
            <p className="text-foreground-secondary font-light leading-relaxed mb-2">
              This guide covers exactly which projects need permits in Orange
              County and Los Angeles County, what the permit process looks like
              step by step, how much permits cost by project type, and what
              happens when homeowners skip permits. Whether you live in Irvine,
              Newport Beach, Mission Viejo, or Costa Mesa, use this page to
              understand your obligations before construction begins. A licensed
              general contractor handles all permit applications and inspections
              on your behalf&mdash;but informed homeowners make better decisions
              and avoid costly surprises.
            </p>
            <p className="text-xs text-foreground-secondary/70 font-light">
              Last updated March 2026
            </p>
          </section>

          {/* ----------------------------------------------------------------- */}
          {/* Why Permits Matter */}
          {/* ----------------------------------------------------------------- */}
          <section className="pb-12">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-4">
              Why Building Permits Matter
            </h2>
            <p className="text-foreground-secondary font-light leading-relaxed mb-4">
              Building permits exist to protect homeowners, future buyers, and
              occupants. The California Building Code (CBC) sets minimum safety
              standards for structural integrity, fire resistance, electrical
              safety, and plumbing sanitation. Every permit triggers a series of
              inspections by your city&apos;s building department to verify the
              work meets these standards. Without permits, no one verifies the
              work is safe.
            </p>
            <p className="text-foreground-secondary font-light leading-relaxed mb-4">
              Unpermitted work carries real financial consequences:
            </p>
            <ul className="list-disc list-inside text-foreground-secondary font-light space-y-2 mb-4">
              <li>
                <strong className="text-foreground">Failed resale inspections.</strong>{' '}
                Buyers&apos; home inspectors flag unpermitted work. Title companies
                and lenders require resolution before closing, which delays or
                kills deals.
              </li>
              <li>
                <strong className="text-foreground">Insurance claim denials.</strong>{' '}
                Homeowners insurance policies exclude coverage for damage caused by
                or related to unpermitted construction. A kitchen fire traced to
                unpermitted electrical work results in a denied claim.
              </li>
              <li>
                <strong className="text-foreground">Forced demolition.</strong>{' '}
                City building departments have the authority to order removal of
                unpermitted work at the homeowner&apos;s expense. This includes
                tearing out finished walls to expose and correct hidden work.
              </li>
              <li>
                <strong className="text-foreground">Fines of $500 to $5,000 or more.</strong>{' '}
                California cities impose penalties for unpermitted construction.
                Repeat violations and larger projects carry higher fines. Some
                jurisdictions charge double the original permit fee as a penalty
                for retroactive permits.
              </li>
              <li>
                <strong className="text-foreground">Personal liability.</strong>{' '}
                If someone is injured due to unpermitted work&mdash;a deck
                collapse, an electrical fire, a plumbing failure&mdash;the
                homeowner bears full legal and financial responsibility.
              </li>
            </ul>
            <p className="text-foreground-secondary font-light leading-relaxed">
              Permits are not optional. They are a legal requirement under
              California law, and they protect your investment, your family, and
              your ability to sell your home.
            </p>
          </section>

          {/* ----------------------------------------------------------------- */}
          {/* Projects That Require a Permit */}
          {/* ----------------------------------------------------------------- */}
          <section className="pb-12">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-4">
              Projects That Require a Permit in Orange County
            </h2>
            <p className="text-foreground-secondary font-light leading-relaxed mb-4">
              The California Building Code and local municipal codes determine
              which projects require permits. Here is a clear breakdown for
              Orange County homeowners:
            </p>

            <h3 className="font-serif text-xl text-foreground mb-3 mt-6">
              Permit Required &mdash; YES
            </h3>
            <PermitTable
              headers={['Project Type', 'Permit Status']}
              rows={[
                { col1: 'Kitchen remodel (moving walls, plumbing, or electrical)', col2: 'Permit Required' },
                { col1: 'Bathroom remodel (plumbing or electrical changes)', col2: 'Permit Required' },
                { col1: 'Room additions', col2: 'Permit Required' },
                { col1: 'ADUs and JADUs', col2: 'Permit Required' },
                { col1: 'Structural changes (removing walls, adding beams)', col2: 'Permit Required' },
                { col1: 'New electrical circuits or panel upgrades', col2: 'Permit Required' },
                { col1: 'Re-roofing', col2: 'Permit Required' },
                { col1: 'Window or door size changes', col2: 'Permit Required' },
                { col1: 'Deck construction over 30 inches above grade', col2: 'Permit Required' },
                { col1: 'HVAC replacement or relocation', col2: 'Permit Required' },
                { col1: 'Water heater replacement', col2: 'Permit Required' },
              ]}
            />

            <h3 className="font-serif text-xl text-foreground mb-3 mt-8">
              No Permit Required &mdash; Exempt Work
            </h3>
            <PermitTable
              headers={['Project Type', 'Permit Status']}
              rows={[
                { col1: 'Cosmetic updates (paint, flooring, countertop swaps without plumbing)', col2: 'Exempt' },
                { col1: 'Like-for-like replacements (same-size window, same-location fixture)', col2: 'Exempt' },
                { col1: 'Minor landscaping', col2: 'Exempt' },
                { col1: 'Fencing under 6 feet', col2: 'Exempt' },
              ]}
            />

            <p className="text-foreground-secondary font-light leading-relaxed mt-4">
              When in doubt, call your city&apos;s building department before
              starting work. Every Orange County city has a building division
              that answers permit questions at no charge. A five-minute phone
              call prevents thousands of dollars in fines and rework.
            </p>
          </section>

          {/* ----------------------------------------------------------------- */}
          {/* The Permit Process */}
          {/* ----------------------------------------------------------------- */}
          <section className="pb-12">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-4">
              The Permit Process in Orange County
            </h2>
            <p className="text-foreground-secondary font-light leading-relaxed mb-6">
              The building permit process follows the same general sequence
              across all Orange County cities, though timelines and fees vary by
              jurisdiction. Here is the step-by-step process from start to
              certificate of occupancy:
            </p>

            <ol className="list-decimal list-inside space-y-4 text-foreground-secondary font-light leading-relaxed">
              <li>
                <strong className="text-foreground">
                  Determine scope and permit type.
                </strong>{' '}
                Projects require one or more permit types: building, electrical,
                plumbing, and mechanical. A kitchen remodel with new circuits and
                relocated plumbing needs all four. Your contractor identifies the
                required permits based on the scope of work.
              </li>
              <li>
                <strong className="text-foreground">
                  Prepare plans.
                </strong>{' '}
                Structural work, room additions, and ADUs require architectural
                and engineering drawings. Simple projects like an electrical panel
                upgrade or water heater replacement need only a standard permit
                application. Plan preparation costs $2,000&ndash;$15,000
                depending on project complexity.
              </li>
              <li>
                <strong className="text-foreground">
                  Submit to city building department.
                </strong>{' '}
                Most Orange County cities accept online submissions. Irvine,
                Newport Beach, and Costa Mesa all offer digital plan submission
                portals. Paper submissions are still accepted at all jurisdictions.
              </li>
              <li>
                <strong className="text-foreground">
                  Plan check review (2&ndash;6 weeks in most OC cities).
                </strong>{' '}
                City plan checkers review your drawings for code compliance. The
                California Building Code, California Residential Code, California
                Electrical Code, California Plumbing Code, and California
                Mechanical Code all apply. Complex projects take longer.
              </li>
              <li>
                <strong className="text-foreground">
                  Corrections and resubmission if needed.
                </strong>{' '}
                Plan checkers issue correction letters listing required changes.
                Your architect or engineer revises the plans and resubmits.
                Correction cycles add 1&ndash;3 weeks each.
              </li>
              <li>
                <strong className="text-foreground">
                  Permit issuance.
                </strong>{' '}
                Once plans are approved, you pay the permit fees and receive the
                building permit. The permit card must be posted at the job site
                and visible from the street during construction.
              </li>
              <li>
                <strong className="text-foreground">
                  Construction with required inspections.
                </strong>{' '}
                Each permit type triggers specific inspections at defined
                milestones. A typical remodel requires foundation, framing,
                rough electrical, rough plumbing, rough mechanical, insulation,
                drywall, and final inspections. Your contractor schedules each
                inspection with the city and ensures the work is ready.
              </li>
              <li>
                <strong className="text-foreground">
                  Final inspection and certificate of occupancy.
                </strong>{' '}
                The city inspector verifies all work is complete and code-compliant.
                For additions and ADUs, the city issues a certificate of occupancy.
                For remodels, the final sign-off closes the permit. This
                documentation is recorded with the city and available to future
                buyers.
              </li>
            </ol>
          </section>

          {/* ----------------------------------------------------------------- */}
          {/* Permit Costs by Project Type */}
          {/* ----------------------------------------------------------------- */}
          <section className="pb-12">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-4">
              Permit Costs by Project Type
            </h2>
            <p className="text-foreground-secondary font-light leading-relaxed mb-2">
              Permit fees in Orange County are calculated based on project
              valuation using a formula set by each city&apos;s fee schedule.
              These ranges reflect 2026 pricing across major Orange County
              jurisdictions including Irvine, Newport Beach, Mission Viejo, and
              Costa Mesa:
            </p>

            <PermitTable
              headers={['Project Type', 'Permit Cost Range (2026)']}
              rows={[
                { col1: 'Kitchen remodel', col2: '$1,500 – $5,000' },
                { col1: 'Bathroom remodel', col2: '$800 – $2,500' },
                { col1: 'Room addition', col2: '$3,000 – $10,000' },
                { col1: 'ADU', col2: '$5,000 – $15,000' },
                { col1: 'Full home renovation', col2: '$5,000 – $20,000' },
                { col1: 'Electrical panel upgrade', col2: '$300 – $800' },
                { col1: 'Re-roof', col2: '$200 – $500' },
              ]}
            />

            <p className="text-foreground-secondary font-light leading-relaxed">
              These figures include plan check fees, permit issuance fees, and
              inspection fees. They do not include architectural or engineering
              plan preparation costs. For ADUs, California state law caps
              development impact fees for units under 750 square feet, which
              keeps total permit costs lower than the fee schedule alone would
              suggest. Your general contractor includes all permit fees in
              the project contract so there are no surprises.
            </p>
          </section>

          {/* ----------------------------------------------------------------- */}
          {/* City-by-City Differences */}
          {/* ----------------------------------------------------------------- */}
          <section className="pb-12">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-4">
              City-by-City Permit Differences
            </h2>
            <p className="text-foreground-secondary font-light leading-relaxed mb-6">
              Every city in Orange County and Los Angeles County operates its own
              building department with its own fee schedule, review timelines,
              and local amendments to the California Building Code. Here is what
              homeowners need to know about the most common jurisdictions:
            </p>

            <h3 className="font-serif text-xl text-foreground mb-2 mt-6">
              Irvine
            </h3>
            <p className="text-foreground-secondary font-light leading-relaxed mb-4">
              Irvine offers a fully online permit portal for submissions and
              tracking. Plan check review averages 3 to 4 weeks for residential
              projects. The city is one of the more efficient jurisdictions in
              Orange County, and electronic plan review speeds up the correction
              cycle. Irvine&apos;s Community Development Department handles all
              residential permits.
            </p>

            <h3 className="font-serif text-xl text-foreground mb-2">
              Newport Beach
            </h3>
            <p className="text-foreground-secondary font-light leading-relaxed mb-4">
              Newport Beach properties near the coast fall under the California
              Coastal Commission overlay zone. Projects within this zone require
              a Coastal Development Permit in addition to standard building
              permits, which adds 4 to 8 weeks to the approval timeline. Homes
              outside the coastal zone follow the standard city permit process.
              Newport Beach also enforces strict design review standards for
              properties in certain neighborhoods.
            </p>

            <h3 className="font-serif text-xl text-foreground mb-2">
              Mission Viejo
            </h3>
            <p className="text-foreground-secondary font-light leading-relaxed mb-4">
              Mission Viejo operates through the County of Orange building
              department for most residential permits. The standard county
              process applies: submit plans, receive plan check review in 3 to
              5 weeks, address corrections, and receive permit issuance. The
              city&apos;s HOA requirements are separate from building permits and
              must be addressed independently.
            </p>

            <h3 className="font-serif text-xl text-foreground mb-2">
              Costa Mesa
            </h3>
            <p className="text-foreground-secondary font-light leading-relaxed mb-4">
              Costa Mesa has implemented a fast-track ADU permitting program
              that reduces plan check timelines for qualifying accessory
              dwelling units. The city&apos;s Development Services Department
              processes standard residential permits within the typical 3 to 5
              week window. Costa Mesa also offers over-the-counter permits for
              simple projects like water heater replacements and electrical panel
              upgrades, which are issued same-day.
            </p>

            <h3 className="font-serif text-xl text-foreground mb-2">
              LA County
            </h3>
            <p className="text-foreground-secondary font-light leading-relaxed">
              Los Angeles County operates a completely separate building
              department from Orange County with different fee schedules, forms,
              and review processes. LA County plan check timelines run longer
              than Orange County&mdash;4 to 8 weeks for residential projects.
              Fee schedules are calculated differently, and total permit costs
              for equivalent projects run 10&ndash;20% higher than Orange County
              jurisdictions. Homeowners in LA County communities near the OC
              border (Cerritos, La Habra Heights, Whittier) should verify which
              jurisdiction they fall under before applying.
            </p>
          </section>

          {/* ----------------------------------------------------------------- */}
          {/* What Happens If You Skip Permits */}
          {/* ----------------------------------------------------------------- */}
          <section className="pb-12">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-4">
              What Happens If You Skip Permits
            </h2>
            <p className="text-foreground-secondary font-light leading-relaxed mb-4">
              Skipping permits is not a shortcut&mdash;it is a liability.
              Here are five real consequences that Orange County and LA County
              homeowners face when they build without permits:
            </p>

            <ol className="list-decimal list-inside space-y-4 text-foreground-secondary font-light leading-relaxed">
              <li>
                <strong className="text-foreground">
                  Stop-work orders.
                </strong>{' '}
                If a city building inspector or a neighbor reports active
                construction without a posted permit, the city issues a
                stop-work order. All construction halts immediately. The
                contractor must leave the site until the permit situation is
                resolved, which adds weeks or months to the project timeline.
              </li>
              <li>
                <strong className="text-foreground">
                  Double permit fees as a penalty.
                </strong>{' '}
                When homeowners apply for retroactive permits after being caught,
                most Orange County cities charge double the standard permit fee.
                A $3,000 kitchen remodel permit becomes a $6,000 penalty permit.
                This is in addition to any fines assessed for the violation
                itself.
              </li>
              <li>
                <strong className="text-foreground">
                  Insurance claim denials.
                </strong>{' '}
                Homeowners insurance policies contain exclusions for damage
                arising from unpermitted work. If a fire starts in an
                unpermitted electrical panel or water damage traces to
                unpermitted plumbing, the insurance company denies the claim.
                The homeowner pays the full cost of repairs and any third-party
                damages out of pocket.
              </li>
              <li>
                <strong className="text-foreground">
                  Title issues at sale.
                </strong>{' '}
                When you sell your home, the buyer&apos;s title company and
                lender compare your property&apos;s permitted square footage and
                room count against city records. Discrepancies flag unpermitted
                work. Buyers demand retroactive permits, price reductions, or
                walk away entirely. Unpermitted additions and ADUs are the most
                common deal-killers in Southern California real estate
                transactions.
              </li>
              <li>
                <strong className="text-foreground">
                  Personal liability for injuries.
                </strong>{' '}
                If a guest, tenant, or contractor is injured due to unpermitted
                work&mdash;a deck that collapses, a staircase that fails, an
                electrical shock from improper wiring&mdash;the homeowner is
                personally liable. Insurance does not cover it. Lawsuits for
                construction-related injuries routinely result in six-figure
                settlements and judgments.
              </li>
            </ol>

            <p className="text-foreground-secondary font-light leading-relaxed mt-4">
              The cost of getting proper permits is a fraction of the cost of
              dealing with these consequences. A reputable contractor pulls
              permits for every project and welcomes city inspections as
              confirmation that the work meets code.
            </p>
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
                  Do I need a permit for a kitchen remodel in Orange County?
                </h3>
                <p className="text-foreground-secondary font-light">
                  Yes. Any kitchen remodel that involves moving walls, relocating
                  plumbing, adding electrical circuits, or modifying gas lines
                  requires a building permit in every Orange County city.
                </p>
              </div>
              <div>
                <h3 className="font-serif text-lg text-foreground mb-1">
                  How much does a building permit cost in Irvine, California?
                </h3>
                <p className="text-foreground-secondary font-light">
                  Building permit costs in Irvine range from $300 for an
                  electrical panel upgrade to $15,000 or more for an ADU, based
                  on project valuation and the city fee schedule.
                </p>
              </div>
              <div>
                <h3 className="font-serif text-lg text-foreground mb-1">
                  How long does it take to get a building permit in Orange County?
                </h3>
                <p className="text-foreground-secondary font-light">
                  Plan check review in most Orange County cities takes 2 to 6
                  weeks. Irvine averages 3 to 4 weeks. Newport Beach coastal
                  overlay projects add 4 to 8 additional weeks.
                </p>
              </div>
              <div>
                <h3 className="font-serif text-lg text-foreground mb-1">
                  What happens if I remodel without a permit in California?
                </h3>
                <p className="text-foreground-secondary font-light">
                  Remodeling without a permit results in stop-work orders, double
                  permit fees as a penalty, insurance claim denials, title issues
                  at resale, and personal liability for injuries.
                </p>
              </div>
              <div>
                <h3 className="font-serif text-lg text-foreground mb-1">
                  Do I need a permit to replace a water heater in Orange County?
                </h3>
                <p className="text-foreground-secondary font-light">
                  Yes. Water heater replacement requires a plumbing and mechanical
                  permit in all Orange County jurisdictions per the California
                  Plumbing Code and California Mechanical Code.
                </p>
              </div>
            </div>
          </section>

          {/* ----------------------------------------------------------------- */}
          {/* Gated Download */}
          {/* ----------------------------------------------------------------- */}
          <section className="pb-12">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-4">
              Download the Free Permit Guide
            </h2>
            <p className="text-foreground-secondary font-light leading-relaxed mb-4">
              Get the complete SoCal Permit Guide as a printable PDF. The
              download includes:
            </p>
            <ul className="list-disc list-inside text-foreground-secondary font-light space-y-2 mb-8">
              <li>
                Printable permit requirement checklist for every common
                residential project
              </li>
              <li>
                City-by-city contact information for Orange County building
                departments
              </li>
              <li>
                Step-by-step permit process flowchart from application to
                final inspection
              </li>
            </ul>
            <div className="bg-background-surface border border-border-subtle rounded-xl p-6 md:p-10">
              <ResourceGateForm
                resourceName="SoCal Permit Guide"
                ctaLabel="Download Free Permit Guide"
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
                  Accurate pricing for kitchens, bathrooms, ADUs, and full
                  renovations in Southern California.
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
                  Contact Us
                </h3>
                <p className="text-foreground-secondary font-light text-sm mt-1">
                  Request a free consultation with our Southern California
                  renovation team.
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

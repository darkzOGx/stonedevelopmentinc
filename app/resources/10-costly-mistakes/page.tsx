import { Metadata } from 'next';
import Link from 'next/link';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { ResourceGateForm } from '@/components/ui/ResourceGateForm';

// ---------------------------------------------------------------------------
// Metadata
// ---------------------------------------------------------------------------

export const metadata: Metadata = {
  title:
    '10 Remodeling Mistakes That Cost SoCal Homeowners Thousands | Stone Development',
  description:
    'Avoid the 10 most expensive remodeling mistakes California homeowners make. Learn how to protect your budget, timeline, and home value with this free guide from Stone Development Inc.',
  alternates: {
    canonical: 'https://www.stonedevelopmentinc.com/resources/10-costly-mistakes',
  },
  openGraph: {
    title:
      '10 Remodeling Mistakes That Cost SoCal Homeowners Thousands | Stone Development',
    description:
      'Avoid the 10 most expensive remodeling mistakes California homeowners make. Learn how to protect your budget, timeline, and home value.',
    url: 'https://www.stonedevelopmentinc.com/resources/10-costly-mistakes',
    type: 'article',
  },
};

// ---------------------------------------------------------------------------
// JSON-LD Schemas
// ---------------------------------------------------------------------------

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: '10 Remodeling Mistakes That Cost SoCal Homeowners Thousands',
  description:
    'Avoid the 10 most expensive remodeling mistakes California homeowners make. Learn how to protect your budget, timeline, and home value.',
  url: 'https://www.stonedevelopmentinc.com/resources/10-costly-mistakes',
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
      name: 'What is the biggest mistake homeowners make when remodeling?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Hiring an unlicensed or underinsured contractor is the single most expensive remodeling mistake. It exposes homeowners to $15,000-$30,000 or more in rework costs with zero legal recourse through the CSLB.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much should I budget for unexpected remodeling costs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Budget a 20% contingency above your base estimate. The average Orange County remodel runs 15-25% over the initial estimate due to permit fees, material upgrades, and unforeseen structural issues.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens if I remodel without a permit in Orange County?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Unpermitted work triggers failed inspections, forced demolition, fines, and disclosure requirements at resale. Orange County building departments actively enforce permit requirements and penalize violations.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why is the cheapest contractor bid usually a bad choice?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The lowest bid signals cut corners on materials, labor, or both. Cheap bids exclude critical scope items, use inferior products, and rely on unlicensed subcontractors to hit an artificially low price.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do mid-project design changes increase remodeling costs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Every mid-project change costs 3-5x more than the same decision made during pre-construction planning. Changes require rework, reordering materials, rescheduling trades, and extending the project timeline.',
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
// Page
// ---------------------------------------------------------------------------

export default function TenCostlyMistakesPage() {
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
              Before You Remodel: 10 Mistakes That Cost SoCal Homeowners
              Thousands
            </h1>
            <p
              id="intro-paragraph"
              className="text-lg md:text-xl text-foreground font-semibold leading-relaxed mb-4"
            >
              The 10 most expensive remodeling mistakes cost Southern California
              homeowners $10,000&ndash;$50,000 in rework, delays, and lost home
              value&mdash;and every one of them is preventable.
            </p>
            <p className="text-foreground-secondary font-light leading-relaxed mb-2">
              Southern California homeowners invest more in their homes than
              almost any market in the country. A kitchen remodel in Irvine runs
              $80,000&ndash;$250,000. A room addition in Newport Beach starts at
              $150,000. With that much money on the line, a single bad decision
              during planning, hiring, or construction creates financial damage
              that takes years to recover from. This guide breaks down the 10
              mistakes we see repeatedly across Orange County projects and gives
              you the exact steps to avoid each one.
            </p>
            <p className="text-xs text-foreground-secondary/70 font-light">
              Last updated March 2026
            </p>
          </section>

          {/* ----------------------------------------------------------------- */}
          {/* Why These Mistakes Are So Expensive */}
          {/* ----------------------------------------------------------------- */}
          <section className="pb-12">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-4">
              Why These Mistakes Are So Expensive
            </h2>
            <p className="text-foreground-secondary font-light leading-relaxed mb-4">
              Remodeling mistakes in Orange County cost homeowners
              $10,000&ndash;$50,000 in rework, project delays, and lost property
              value. The financial stakes are higher here than in any other
              Southern California market because median home values in Irvine
              exceed $1.3 million and Newport Beach properties routinely surpass
              $2.5 million. A botched renovation does not just waste your
              remodeling budget&mdash;it erodes the equity in one of the most
              valuable assets you own.
            </p>
            <p className="text-foreground-secondary font-light leading-relaxed">
              The CSLB processes over 20,000 homeowner complaints per year, and
              Orange County ranks among the top five California counties for
              contractor-related disputes. The good news: every mistake on this
              list is avoidable. Understanding the risks before you sign a
              contract puts you in control of your project, your budget, and your
              outcome.
            </p>
          </section>

          {/* ----------------------------------------------------------------- */}
          {/* The 10 Mistakes */}
          {/* ----------------------------------------------------------------- */}
          <section className="pb-12">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-8">
              The 10 Mistakes
            </h2>

            {/* 1 */}
            <div className="border-l-2 border-accent pl-6 mb-8">
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-accent font-semibold text-lg">1.</span>
                <h2 className="font-serif text-xl text-foreground">
                  Hiring an Unlicensed or Underinsured Contractor
                </h2>
              </div>
              <p className="text-foreground-secondary font-light leading-relaxed mb-3">
                This is the single most expensive mistake a homeowner makes, and
                it happens constantly across Southern California. An unlicensed
                contractor who abandons a project or delivers substandard work
                leaves you holding the bill for $15,000&ndash;$30,000 or more in
                demolition and rework&mdash;with zero legal recourse through the
                California Contractors State License Board.
              </p>
              <p className="text-foreground-secondary font-light leading-relaxed mb-3">
                The CSLB actively enforces licensing requirements and conducts
                sting operations throughout Orange County. Homeowners who hire
                unlicensed operators forfeit access to the CSLB complaint
                process, the $25,000 contractor bond, and the Contractors State
                License Board Recovery Fund. When work goes wrong, you bear
                100% of the cost.
              </p>
              <p className="text-foreground-secondary font-light leading-relaxed">
                <strong className="text-foreground">How to avoid it:</strong>{' '}
                Verify every contractor&apos;s license at{' '}
                <a
                  href="https://www.cslb.ca.gov/onlineservices/checklicenseII/checklicense.aspx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent underline underline-offset-2 hover:text-accent/80 transition-colors"
                >
                  cslb.ca.gov
                </a>
                . Confirm active general liability insurance ($1M minimum) and
                workers&apos; compensation coverage. Request certificates
                directly and call the insurance carrier to verify.
              </p>
            </div>

            {/* 2 */}
            <div className="border-l-2 border-accent pl-6 mb-8">
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-accent font-semibold text-lg">2.</span>
                <h2 className="font-serif text-xl text-foreground">
                  Skipping Permits
                </h2>
              </div>
              <p className="text-foreground-secondary font-light leading-relaxed mb-3">
                Unpermitted work is a ticking time bomb for your home&apos;s
                value. Orange County building departments actively enforce
                permit requirements, and inspectors flag unpermitted
                modifications during resale transactions, insurance claims, and
                neighboring construction projects. Failed inspections trigger
                forced demolition, fines, and mandatory re-permitting at full
                cost.
              </p>
              <p className="text-foreground-secondary font-light leading-relaxed mb-3">
                Every Orange County city&mdash;Irvine, Newport Beach, Mission
                Viejo, Laguna Beach&mdash;requires permits for structural work,
                electrical modifications, plumbing changes, and additions. Permit
                fees range from $2,000 for a bathroom remodel to $15,000+ for a
                major addition. Skipping permits to save $5,000 on a $200,000
                project creates $20,000&ndash;$40,000 in resale penalties.
              </p>
              <p className="text-foreground-secondary font-light leading-relaxed">
                <strong className="text-foreground">How to avoid it:</strong>{' '}
                Require your contractor to pull all necessary permits before any
                work begins. Verify permits are posted on-site. Attend
                inspections or request written inspection reports at every
                milestone.
              </p>
            </div>

            {/* 3 */}
            <div className="border-l-2 border-accent pl-6 mb-8">
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-accent font-semibold text-lg">3.</span>
                <h2 className="font-serif text-xl text-foreground">
                  Underbudgeting by 20&ndash;30%
                </h2>
              </div>
              <p className="text-foreground-secondary font-light leading-relaxed mb-3">
                The average Orange County remodel runs 15&ndash;25% over the
                initial estimate. This is not a sign of a bad contractor&mdash;it
                is the reality of renovation work in high-value homes where
                opening walls reveals outdated wiring, corroded plumbing, or
                structural deficiencies that must be addressed before new
                finishes go in.
              </p>
              <p className="text-foreground-secondary font-light leading-relaxed mb-3">
                Homeowners who budget to the dollar with zero contingency end up
                making panic decisions mid-project: downgrading finishes,
                eliminating scope, or stopping work entirely while they scramble
                for additional funds. Every project pause adds weeks to the
                timeline and thousands to the final cost.
              </p>
              <p className="text-foreground-secondary font-light leading-relaxed">
                <strong className="text-foreground">How to avoid it:</strong>{' '}
                Always budget a 20% contingency above your base estimate. On a
                $150,000 kitchen remodel, that means reserving $30,000 for
                unknowns. If you do not use it, it goes back in your pocket. If
                you need it, it saves your project.
              </p>
            </div>

            {/* 4 */}
            <div className="border-l-2 border-accent pl-6 mb-8">
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-accent font-semibold text-lg">4.</span>
                <h2 className="font-serif text-xl text-foreground">
                  Choosing the Cheapest Bid
                </h2>
              </div>
              <p className="text-foreground-secondary font-light leading-relaxed mb-3">
                The lowest bid on a remodeling project almost always means
                corners cut on materials, labor, or both. A bid that comes in
                30&ndash;40% below competing estimates excludes critical scope
                items, substitutes inferior products, or relies on unlicensed
                subcontractors to hit an artificially low number. You pay the
                difference later&mdash;in change orders, rework, or a finished
                product that fails within two years.
              </p>
              <p className="text-foreground-secondary font-light leading-relaxed mb-3">
                In the Orange County market, labor and material costs are well
                established. A qualified contractor bidding on a $200,000 kitchen
                remodel in Irvine is working with the same material costs as
                every other licensed builder. If one bid comes in at $130,000,
                the $70,000 gap is coming from somewhere&mdash;and it is coming
                from your quality.
              </p>
              <p className="text-foreground-secondary font-light leading-relaxed">
                <strong className="text-foreground">How to avoid it:</strong>{' '}
                Compare scope, not just price. Request line-item breakdowns from
                every bidder. Verify that each bid covers the same materials,
                labor, permits, and timeline. Disqualify outlier bids that
                cannot explain the price difference.
              </p>
            </div>

            {/* 5 */}
            <div className="border-l-2 border-accent pl-6 mb-8">
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-accent font-semibold text-lg">5.</span>
                <h2 className="font-serif text-xl text-foreground">
                  Not Getting a Detailed Written Contract
                </h2>
              </div>
              <p className="text-foreground-secondary font-light leading-relaxed mb-3">
                Vague contracts are the root cause of the majority of
                contractor-homeowner disputes in California. A one-page proposal
                that says &ldquo;kitchen remodel &mdash; $180,000&rdquo; tells
                you nothing about what is included, what is excluded, what
                materials will be used, or when the project will finish. When
                disagreements arise&mdash;and they always do&mdash;a vague
                contract gives you no leverage.
              </p>
              <p className="text-foreground-secondary font-light leading-relaxed mb-3">
                California law (Business and Professions Code Section 7159)
                requires written contracts for home improvement projects
                exceeding $500. The law mandates specific inclusions: full scope
                of work, start and approximate completion dates, payment
                schedule, and contractor license number. A contract that fails to
                meet these requirements is unenforceable.
              </p>
              <p className="text-foreground-secondary font-light leading-relaxed">
                <strong className="text-foreground">How to avoid it:</strong>{' '}
                Require line-item pricing, material specifications by brand and
                model, a milestone-based payment schedule, and a detailed change
                order process. Review the contract with an attorney if the
                project exceeds $100,000.
              </p>
            </div>

            {/* 6 */}
            <div className="border-l-2 border-accent pl-6 mb-8">
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-accent font-semibold text-lg">6.</span>
                <h2 className="font-serif text-xl text-foreground">
                  Making Design Decisions During Construction
                </h2>
              </div>
              <p className="text-foreground-secondary font-light leading-relaxed mb-3">
                Every mid-project change costs 3&ndash;5x more than the same
                decision made during pre-construction planning. Changing tile
                after the substrate is installed means demolition, reordering,
                and rescheduling the tile installer&mdash;turning a $3,000
                decision into a $12,000 change order. Swapping cabinet layout
                after rough plumbing is complete requires replumbing, new
                cabinetry lead times, and weeks of delay.
              </p>
              <p className="text-foreground-secondary font-light leading-relaxed mb-3">
                Design indecision is the number one cause of budget overruns on
                residential remodeling projects. The pre-construction phase
                exists for exactly this reason: to finalize every material
                selection, every layout decision, and every finish specification
                before the first hammer swings.
              </p>
              <p className="text-foreground-secondary font-light leading-relaxed">
                <strong className="text-foreground">How to avoid it:</strong>{' '}
                Finalize all design decisions before demolition begins. Select
                every tile, fixture, cabinet, countertop, and paint color during
                the design phase. Lock in selections with purchase orders.
                Commit to the plan and resist the urge to change course once
                construction starts.
              </p>
            </div>

            {/* 7 */}
            <div className="border-l-2 border-accent pl-6 mb-8">
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-accent font-semibold text-lg">7.</span>
                <h2 className="font-serif text-xl text-foreground">
                  Ignoring Structural and Mechanical Systems
                </h2>
              </div>
              <p className="text-foreground-secondary font-light leading-relaxed mb-3">
                Cosmetic remodels that skip electrical, plumbing, or structural
                assessments create hidden liabilities that surface months or
                years later. A beautiful new kitchen installed over
                knob-and-tube wiring is a fire hazard. A luxury bathroom built
                on a subfloor with water damage will develop mold within 18
                months. A load-bearing wall removed without engineering creates
                structural failure risk.
              </p>
              <p className="text-foreground-secondary font-light leading-relaxed mb-3">
                Many Orange County homes built in the 1960s through 1980s have
                outdated electrical panels, galvanized steel plumbing, and
                framing that does not meet current seismic code. A remodel is the
                one opportunity to bring these systems up to standard. Skipping
                the assessment saves $5,000&ndash;$10,000 upfront and creates
                $30,000&ndash;$50,000 in future repair costs.
              </p>
              <p className="text-foreground-secondary font-light leading-relaxed">
                <strong className="text-foreground">How to avoid it:</strong>{' '}
                Include structural, electrical, and plumbing assessments in every
                remodeling scope. Address deficiencies during the remodel when
                walls are already open and access is easy.
              </p>
            </div>

            {/* 8 */}
            <div className="border-l-2 border-accent pl-6 mb-8">
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-accent font-semibold text-lg">8.</span>
                <h2 className="font-serif text-xl text-foreground">
                  Over-Improving for the Neighborhood
                </h2>
              </div>
              <p className="text-foreground-secondary font-light leading-relaxed mb-3">
                A $200,000 kitchen renovation in a $600,000 neighborhood never
                recoups at resale. The real estate market prices homes based on
                comparable sales in the immediate area. No matter how stunning
                your finishes are, buyers will not pay $800,000 for a home in a
                $600,000 neighborhood. The result: you absorb the full cost of
                the over-improvement with zero return.
              </p>
              <p className="text-foreground-secondary font-light leading-relaxed mb-3">
                This mistake is common in mid-range Orange County neighborhoods
                where homeowners invest luxury-level finishes in homes that
                cannot support the price premium. Know your area&apos;s ceiling
                before you set your budget. In Irvine, neighborhood price
                ceilings vary by $200,000&ndash;$500,000 depending on the
                specific community and tract.
              </p>
              <p className="text-foreground-secondary font-light leading-relaxed">
                <strong className="text-foreground">How to avoid it:</strong>{' '}
                Research comparable sales in your immediate neighborhood. Set
                your remodeling budget so the total investment (purchase price +
                renovation cost) stays below the top 10% of recent sales in your
                area. Invest in improvements that align with the neighborhood
                standard.
              </p>
            </div>

            {/* 9 */}
            <div className="border-l-2 border-accent pl-6 mb-8">
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-accent font-semibold text-lg">9.</span>
                <h2 className="font-serif text-xl text-foreground">
                  Not Planning for Lead Times
                </h2>
              </div>
              <p className="text-foreground-secondary font-light leading-relaxed mb-3">
                Custom cabinets: 8&ndash;14 weeks. Specialty tile: 6&ndash;10
                weeks. Windows: 4&ndash;8 weeks. European appliances:
                10&ndash;16 weeks. Natural stone countertops: 3&ndash;6 weeks
                after template. These are standard lead times in the current
                Southern California market&mdash;and every week of delay costs
                $1,500&ndash;$3,000 in extended general conditions, idle labor,
                and trade rescheduling.
              </p>
              <p className="text-foreground-secondary font-light leading-relaxed mb-3">
                Homeowners who wait until construction begins to order materials
                guarantee weeks or months of costly downtime. The construction
                crew sits idle, the project timeline extends, and the carrying
                costs accumulate. On a $200,000 remodel, a four-week material
                delay adds $6,000&ndash;$12,000 to the final cost.
              </p>
              <p className="text-foreground-secondary font-light leading-relaxed">
                <strong className="text-foreground">How to avoid it:</strong>{' '}
                Order all long-lead materials during the design and permitting
                phase&mdash;before construction starts. Confirm delivery dates
                in writing. Build lead times into the project schedule so
                materials arrive before they are needed, not after.
              </p>
            </div>

            {/* 10 */}
            <div className="border-l-2 border-accent pl-6 mb-8">
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-accent font-semibold text-lg">10.</span>
                <h2 className="font-serif text-xl text-foreground">
                  Failing to Communicate Expectations
                </h2>
              </div>
              <p className="text-foreground-secondary font-light leading-relaxed mb-3">
                No weekly updates, no daily check-ins, no written change
                orders&mdash;this combination guarantees frustration, cost
                overruns, and a damaged relationship between homeowner and
                contractor. Communication breakdowns are the number one source
                of homeowner complaints in residential construction, and they
                are entirely preventable with upfront agreements.
              </p>
              <p className="text-foreground-secondary font-light leading-relaxed mb-3">
                When expectations are unclear, small issues compound into major
                problems. A missed tile delivery becomes a two-week delay because
                no one communicated the backup plan. A plumbing rough-in gets
                installed in the wrong location because the homeowner assumed
                the contractor read the updated plans. Miscommunication on a
                $150,000 project adds $8,000&ndash;$15,000 in rework and
                schedule extensions.
              </p>
              <p className="text-foreground-secondary font-light leading-relaxed">
                <strong className="text-foreground">How to avoid it:</strong>{' '}
                Establish a communication protocol before work begins. Require
                weekly written progress reports, daily photo updates, and
                written change orders for every modification. Set a standing
                weekly meeting with your contractor to review progress,
                upcoming milestones, and open issues.
              </p>
            </div>
          </section>

          {/* ----------------------------------------------------------------- */}
          {/* How to Protect Yourself */}
          {/* ----------------------------------------------------------------- */}
          <section className="pb-12">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-4">
              How to Protect Yourself
            </h2>
            <p className="text-foreground-secondary font-light leading-relaxed mb-4">
              The 10 mistakes above share a common thread: they all stem from
              inadequate preparation before construction begins. Protect your
              investment with these four actions:
            </p>
            <ul className="list-disc list-inside space-y-3 text-foreground-secondary font-light leading-relaxed">
              <li>
                <strong className="text-foreground">
                  Vet your contractor thoroughly.
                </strong>{' '}
                Use our{' '}
                <Link
                  href="/resources/contractor-checklist"
                  className="text-accent underline underline-offset-2 hover:text-accent/80 transition-colors"
                >
                  15-Point Contractor Vetting Checklist
                </Link>{' '}
                to verify licensing, insurance, references, and contract terms
                before you sign.
              </li>
              <li>
                <strong className="text-foreground">
                  Understand real costs before you budget.
                </strong>{' '}
                Download our{' '}
                <Link
                  href="/resources/cost-guide"
                  className="text-accent underline underline-offset-2 hover:text-accent/80 transition-colors"
                >
                  2026 Remodeling Cost Guide
                </Link>{' '}
                for accurate pricing on kitchens, bathrooms, ADUs, and full
                renovations across Orange County.
              </li>
              <li>
                <strong className="text-foreground">
                  Calculate your budget with a 20% contingency.
                </strong>{' '}
                Use our{' '}
                <Link
                  href="/resources/budget-calculator"
                  className="text-accent underline underline-offset-2 hover:text-accent/80 transition-colors"
                >
                  Budget Calculator
                </Link>{' '}
                to build a realistic project budget that accounts for
                unknowns.
              </li>
              <li>
                <strong className="text-foreground">
                  Finalize every decision before construction starts.
                </strong>{' '}
                Complete all design selections, material orders, and permit
                applications during the pre-construction phase. Zero open
                decisions on day one of demolition is the standard.
              </li>
            </ul>
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
                  What is the biggest mistake homeowners make when remodeling?
                </h3>
                <p className="text-foreground-secondary font-light">
                  Hiring an unlicensed or underinsured contractor is the most
                  expensive remodeling mistake. It exposes you to
                  $15,000&ndash;$30,000 or more in rework costs with zero legal
                  recourse through the CSLB.
                </p>
              </div>
              <div>
                <h3 className="font-serif text-lg text-foreground mb-1">
                  How much should I budget for unexpected remodeling costs?
                </h3>
                <p className="text-foreground-secondary font-light">
                  Budget a 20% contingency above your base estimate. The average
                  Orange County remodel runs 15&ndash;25% over the initial
                  estimate due to permit fees, material upgrades, and
                  unforeseen structural issues.
                </p>
              </div>
              <div>
                <h3 className="font-serif text-lg text-foreground mb-1">
                  What happens if I remodel without a permit in Orange County?
                </h3>
                <p className="text-foreground-secondary font-light">
                  Unpermitted work triggers failed inspections, forced
                  demolition, fines, and disclosure requirements at resale.
                  Orange County building departments actively enforce permit
                  requirements and penalize violations.
                </p>
              </div>
              <div>
                <h3 className="font-serif text-lg text-foreground mb-1">
                  Why is the cheapest contractor bid a bad choice?
                </h3>
                <p className="text-foreground-secondary font-light">
                  The lowest bid signals cut corners on materials, labor, or
                  both. Cheap bids exclude critical scope items, use inferior
                  products, and rely on unlicensed subcontractors to hit an
                  artificially low price.
                </p>
              </div>
              <div>
                <h3 className="font-serif text-lg text-foreground mb-1">
                  How do mid-project design changes increase remodeling costs?
                </h3>
                <p className="text-foreground-secondary font-light">
                  Every mid-project change costs 3&ndash;5x more than the same
                  decision made during pre-construction planning. Changes
                  require rework, reordering materials, rescheduling trades,
                  and extending the project timeline.
                </p>
              </div>
            </div>
          </section>

          {/* ----------------------------------------------------------------- */}
          {/* Gated Download */}
          {/* ----------------------------------------------------------------- */}
          <section className="pb-12">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-4">
              Download the Complete Guide
            </h2>
            <p className="text-foreground-secondary font-light leading-relaxed mb-4">
              Get the full 10 Costly Remodeling Mistakes guide as a printable
              PDF with detailed action steps for each mistake. The download
              includes:
            </p>
            <ul className="list-disc list-inside text-foreground-secondary font-light space-y-2 mb-8">
              <li>
                All 10 mistakes with expanded prevention strategies
              </li>
              <li>
                Pre-construction planning checklist to eliminate budget overruns
              </li>
              <li>
                Material lead-time reference sheet for Orange County projects
              </li>
            </ul>
            <div className="bg-background-surface border border-border-subtle rounded-xl p-6 md:p-10">
              <ResourceGateForm
                resourceName="10 Costly Remodeling Mistakes Guide"
                ctaLabel="Download Free Guide"
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
                  15 questions to ask every contractor before you sign a
                  contract.
                </p>
              </Link>
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
                  renovations across Southern California.
                </p>
              </Link>
              <Link
                href="/resources/budget-calculator"
                className="block border border-border-subtle rounded-lg p-5 hover:border-accent transition-colors group"
              >
                <span className="text-accent text-xs uppercase tracking-[0.15em] font-semibold">
                  Interactive Tool
                </span>
                <h3 className="font-serif text-lg text-foreground mt-1 group-hover:text-accent transition-colors">
                  Budget Calculator
                </h3>
                <p className="text-foreground-secondary font-light text-sm mt-1">
                  Get a personalized cost estimate for your project in under 2
                  minutes.
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
                  Request a free consultation with our Orange County renovation
                  team.
                </p>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

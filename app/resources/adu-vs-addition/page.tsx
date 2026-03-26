import { Metadata } from 'next';
import Link from 'next/link';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { ResourceGateForm } from '@/components/ui/ResourceGateForm';

// ---------------------------------------------------------------------------
// Metadata
// ---------------------------------------------------------------------------

export const metadata: Metadata = {
  title:
    'ADU vs. Room Addition: Which Is Right for Your Property? | Stone Development',
  description:
    'ADU vs room addition — compare costs, timelines, permits, and ROI for Orange County homeowners. Find out whether an ADU or addition is the right investment for your Irvine, Mission Viejo, or Newport Beach property.',
  alternates: {
    canonical: 'https://www.stonedevelopmentinc.com/resources/adu-vs-addition',
  },
  openGraph: {
    title:
      'ADU vs. Room Addition: Which Is Right for Your Property? | Stone Development',
    description:
      'Side-by-side comparison of ADUs and room additions in Orange County. Costs, permits, rental income potential, and a decision framework to choose the right expansion.',
    url: 'https://www.stonedevelopmentinc.com/resources/adu-vs-addition',
    type: 'article',
  },
};

// ---------------------------------------------------------------------------
// JSON-LD Schemas
// ---------------------------------------------------------------------------

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'ADU vs. Room Addition: Which Is Right for Your Property?',
  description:
    'Comprehensive comparison guide for Orange County homeowners choosing between an ADU and a room addition. Includes costs, timelines, permits, ROI, and a decision framework.',
  url: 'https://www.stonedevelopmentinc.com/resources/adu-vs-addition',
  publisher: {
    '@type': 'Organization',
    name: 'Stone Development Inc.',
    url: 'https://www.stonedevelopmentinc.com',
  },
  datePublished: '2026-03-25',
  dateModified: '2026-03-25',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is an ADU or a room addition cheaper to build in Orange County?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A room addition is cheaper upfront at $100,000 to $300,000. An ADU costs $150,000 to $350,000 but generates rental income of $2,200 to $3,500 per month.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to build an ADU vs. an addition in California?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'An ADU takes 6 to 12 months from permit to completion. A room addition takes 3 to 6 months because it shares existing utilities and foundation systems.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does an ADU or room addition add more property value?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'An ADU increases property value by 20 to 30 percent. A room addition increases value by 10 to 20 percent. ADUs add more value because they create rentable square footage.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can my HOA block me from building an ADU in Irvine?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. California law AB 1033 prevents HOAs from blocking ADU construction. Your HOA cannot deny an ADU application in Irvine or anywhere in California.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need separate utility connections for an ADU in Orange County?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. ADUs require independent utility connections for water, sewer, and electrical. Room additions share existing utility connections with your main home.',
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
// Comparison Table Component
// ---------------------------------------------------------------------------

function ComparisonTable({
  rows,
}: {
  rows: { factor: string; adu: string; addition: string }[];
}) {
  return (
    <div className="overflow-x-auto my-8">
      <table className="w-full border border-border-subtle text-sm md:text-base">
        <thead>
          <tr className="bg-foreground/5">
            <th className="text-left px-4 py-3 font-semibold text-foreground">
              Factor
            </th>
            <th className="text-left px-4 py-3 font-semibold text-accent">
              ADU
            </th>
            <th className="text-left px-4 py-3 font-semibold text-foreground">
              Room Addition
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={row.factor}
              className={i % 2 === 0 ? 'bg-background' : 'bg-background-surface'}
            >
              <td className="px-4 py-3 text-foreground font-medium">
                {row.factor}
              </td>
              <td className="px-4 py-3 text-foreground">{row.adu}</td>
              <td className="px-4 py-3 text-foreground">{row.addition}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Decision Node Component
// ---------------------------------------------------------------------------

function DecisionNode({
  question,
  yesLabel,
  yesResult,
  noLabel,
  noResult,
}: {
  question: string;
  yesLabel?: string;
  yesResult: string;
  noLabel?: string;
  noResult: string;
}) {
  return (
    <div className="my-6">
      <div className="border-2 border-accent/40 rounded-lg p-5 bg-background-surface">
        <p className="text-foreground font-semibold text-base md:text-lg mb-4">
          {question}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="border border-accent rounded-md p-4 bg-accent/5">
            <span className="block text-accent font-bold text-sm uppercase tracking-wider mb-1">
              {yesLabel || 'Yes'}
            </span>
            <span className="text-foreground text-sm">{yesResult}</span>
          </div>
          <div className="border border-border-subtle rounded-md p-4 bg-foreground/5">
            <span className="block text-foreground-secondary font-bold text-sm uppercase tracking-wider mb-1">
              {noLabel || 'No'}
            </span>
            <span className="text-foreground text-sm">{noResult}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function AduVsAdditionPage() {
  const comparisonRows = [
    {
      factor: 'Cost',
      adu: '$150K\u2013$350K',
      addition: '$100K\u2013$300K',
    },
    {
      factor: 'Timeline',
      adu: '6\u201312 months',
      addition: '3\u20136 months',
    },
    {
      factor: 'Permits',
      adu: 'Streamlined (CA law)',
      addition: 'Standard building permit',
    },
    {
      factor: 'Rental Income',
      adu: 'Yes \u2014 $2,200\u2013$3,500/mo in OC',
      addition: 'No',
    },
    {
      factor: 'Property Value Increase',
      adu: '20\u201330%',
      addition: '10\u201320%',
    },
    {
      factor: 'Living Space Added',
      adu: '200\u20131,200 sq ft',
      addition: '100\u20131,000 sq ft',
    },
    {
      factor: 'Independent Living',
      adu: 'Full kitchen + bath required',
      addition: 'Extends existing home',
    },
    {
      factor: 'Setback Requirements',
      adu: '4 ft rear/side (CA law)',
      addition: 'Standard zoning setbacks',
    },
    {
      factor: 'HOA Restrictions',
      adu: 'Limited (CA law preempts most)',
      addition: 'Subject to full HOA rules',
    },
    {
      factor: 'Best For',
      adu: 'Rental income, aging parents, adult children',
      addition: 'More bedrooms, larger kitchen, home office',
    },
  ];

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
              ADU vs. Room Addition: Which One Is Right for Your Property?
            </h1>
            <p
              id="intro-paragraph"
              className="text-lg md:text-xl text-foreground font-semibold leading-relaxed mb-4"
            >
              An ADU is a separate dwelling that generates $2,200&ndash;$3,500
              monthly rental income. A room addition expands your existing home
              for 40% less construction time.
            </p>
            <p className="text-foreground-secondary text-base leading-relaxed mb-4">
              Orange County homeowners face this decision every day: invest in a
              self-contained Accessory Dwelling Unit or add square footage to
              their current floor plan. Both options increase property value, but
              they serve fundamentally different purposes. This guide gives you a
              clear framework to make the right choice for your Irvine, Mission
              Viejo, or Newport Beach property.
            </p>
            <p className="text-foreground-secondary/60 text-sm">
              Last updated March 2026
            </p>
          </section>

          {/* ----------------------------------------------------------------- */}
          {/* The Core Difference */}
          {/* ----------------------------------------------------------------- */}
          <section className="pb-12">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-6">
              The Core Difference
            </h2>
            <p className="text-foreground-secondary text-base md:text-lg leading-relaxed mb-4">
              An <strong className="text-foreground">ADU</strong> is a separate,
              self-contained dwelling unit with its own kitchen, bathroom, and
              private entrance. It functions as an independent living space on
              your existing property. California law classifies ADUs as secondary
              residential units with dedicated utility connections and separate
              addresses.
            </p>
            <p className="text-foreground-secondary text-base md:text-lg leading-relaxed mb-4">
              A <strong className="text-foreground">room addition</strong> is an
              expansion of your existing home&rsquo;s footprint. It adds square
              footage directly to your primary residence &mdash; a new bedroom,
              an expanded kitchen, a larger great room. The addition shares your
              home&rsquo;s existing foundation system, utilities, HVAC, and
              entrance points.
            </p>
            <p className="text-foreground-secondary text-base md:text-lg leading-relaxed">
              These two options differ in purpose, permitting pathways, total
              cost, construction timeline, and long-term return on investment.
              Choosing the wrong one wastes tens of thousands of dollars. The
              comparison below breaks down every factor so you make the decision
              with complete clarity.
            </p>
          </section>

          {/* ----------------------------------------------------------------- */}
          {/* Side-by-Side Comparison Table */}
          {/* ----------------------------------------------------------------- */}
          <section className="pb-12">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-6">
              Side-by-Side Comparison
            </h2>
            <p className="text-foreground-secondary text-base md:text-lg leading-relaxed mb-4">
              This table reflects 2026 costs and regulations specific to Orange
              County, California. All figures come from Stone Development
              project data and California state building code requirements.
            </p>
            <ComparisonTable rows={comparisonRows} />
          </section>

          {/* ----------------------------------------------------------------- */}
          {/* When an ADU Is the Right Choice */}
          {/* ----------------------------------------------------------------- */}
          <section className="pb-12">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-6">
              When an ADU Is the Right Choice
            </h2>

            <h3 className="font-serif text-xl text-foreground mt-6 mb-3">
              1. You Want Rental Income to Offset Your Mortgage
            </h3>
            <p className="text-foreground-secondary text-base md:text-lg leading-relaxed mb-4">
              A 600-square-foot ADU in Irvine rents for $2,800 to $3,500 per
              month in 2026. That income covers a significant portion of most
              Orange County mortgages. A one-bedroom ADU in Mission Viejo
              generates $2,200 to $2,800 monthly. No room addition produces
              rental income &mdash; only an ADU creates a new revenue stream
              from your property.
            </p>

            <h3 className="font-serif text-xl text-foreground mt-6 mb-3">
              2. Aging Parents Need Independent but Nearby Living
            </h3>
            <p className="text-foreground-secondary text-base md:text-lg leading-relaxed mb-4">
              ADUs provide complete privacy with a full kitchen, bathroom, and
              separate entrance while keeping family within steps of the main
              house. This arrangement eliminates assisted living costs of $5,000
              to $8,000 per month in Orange County. Your parents maintain
              independence and dignity without sacrificing safety or proximity.
            </p>

            <h3 className="font-serif text-xl text-foreground mt-6 mb-3">
              3. Adult Children Need a Separate Space
            </h3>
            <p className="text-foreground-secondary text-base md:text-lg leading-relaxed mb-4">
              Orange County&rsquo;s median rent for a one-bedroom apartment
              reached $2,450 in early 2026. A backyard ADU gives adult children
              independent living at zero monthly cost while they save for their
              own down payment. The unit retains full rental value when they
              move out.
            </p>

            <h3 className="font-serif text-xl text-foreground mt-6 mb-3">
              4. You Want to Maximize Property Value Before Selling
            </h3>
            <p className="text-foreground-secondary text-base md:text-lg leading-relaxed mb-4">
              An ADU increases Orange County property values by 20% to 30%.
              On a $1.2 million Irvine home, that translates to $240,000 to
              $360,000 in added value. Buyers pay a premium for properties with
              existing rental units because they see immediate income potential
              from day one.
            </p>

            <h3 className="font-serif text-xl text-foreground mt-6 mb-3">
              5. Your Lot Has Unused Backyard or Garage Space
            </h3>
            <p className="text-foreground-secondary text-base md:text-lg leading-relaxed mb-4">
              California law requires only 4-foot rear and side setbacks for
              ADUs. If your lot exceeds 5,000 square feet, you have room for a
              detached ADU without sacrificing usable yard space. Garage
              conversions start at $80,000 to $150,000 and require zero
              additional land. Newport Beach and Irvine lots are prime candidates
              for both detached and converted ADUs.
            </p>
          </section>

          {/* ----------------------------------------------------------------- */}
          {/* When a Room Addition Is the Right Choice */}
          {/* ----------------------------------------------------------------- */}
          <section className="pb-12">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-6">
              When a Room Addition Is the Right Choice
            </h2>

            <h3 className="font-serif text-xl text-foreground mt-6 mb-3">
              1. You Need a Larger Primary Suite
            </h3>
            <p className="text-foreground-secondary text-base md:text-lg leading-relaxed mb-4">
              A primary suite expansion adds 300 to 500 square feet directly to
              your home for $120,000 to $200,000. You gain a walk-in closet, spa
              bathroom, and sitting area that integrate seamlessly with your
              existing floor plan. This is the fastest path to a luxury primary
              suite &mdash; completed in 3 to 5 months.
            </p>

            <h3 className="font-serif text-xl text-foreground mt-6 mb-3">
              2. Your Family Needs an Extra Bedroom
            </h3>
            <p className="text-foreground-secondary text-base md:text-lg leading-relaxed mb-4">
              Adding a bedroom to your Orange County home costs $100,000 to
              $180,000 and takes 3 to 4 months. The new room shares existing
              HVAC, plumbing, and electrical systems, keeping costs lower than a
              standalone structure. This is the right choice when you need space
              inside your home, not a separate unit.
            </p>

            <h3 className="font-serif text-xl text-foreground mt-6 mb-3">
              3. You Want to Expand the Kitchen or Great Room
            </h3>
            <p className="text-foreground-secondary text-base md:text-lg leading-relaxed mb-4">
              Kitchen and great room expansions transform how your family uses
              the home daily. Bumping out 200 to 400 square feet creates an
              open-concept living space that increases both functionality and
              resale appeal. In Irvine and Mission Viejo, expanded kitchens
              recoup 60% to 65% of construction costs at resale.
            </p>

            <h3 className="font-serif text-xl text-foreground mt-6 mb-3">
              4. You Do Not Want to Manage a Separate Dwelling
            </h3>
            <p className="text-foreground-secondary text-base md:text-lg leading-relaxed mb-4">
              ADUs require landlord responsibilities: tenant screening, lease
              management, maintenance calls, and rental income tax reporting. A
              room addition adds space to your home with zero ongoing management
              burden. If you want more space without becoming a landlord, a room
              addition is the clear answer.
            </p>

            <h3 className="font-serif text-xl text-foreground mt-6 mb-3">
              5. Your Lot Is Too Small for a Detached ADU
            </h3>
            <p className="text-foreground-secondary text-base md:text-lg leading-relaxed mb-4">
              Lots under 4,000 square feet in older Newport Beach or Costa Mesa
              neighborhoods leave limited room for a detached ADU after setback
              requirements. A room addition builds upward or extends the
              existing footprint without consuming yard space. Second-story
              additions are particularly effective on compact lots.
            </p>
          </section>

          {/* ----------------------------------------------------------------- */}
          {/* The Decision Framework */}
          {/* ----------------------------------------------------------------- */}
          <section className="pb-12">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-6">
              The Decision Framework
            </h2>
            <p className="text-foreground-secondary text-base md:text-lg leading-relaxed mb-6">
              Answer these five questions to determine which expansion strategy
              fits your property and goals. Each question points you toward a
              clear recommendation.
            </p>

            <DecisionNode
              question="Do you want to generate rental income from your property?"
              yesResult="ADU — a self-contained unit generates $2,200 to $3,500/mo in Orange County."
              noResult="Continue to the next question."
            />

            <DecisionNode
              question="Do you need separate living quarters for a family member?"
              yesResult="ADU — provides a full kitchen, bath, and private entrance for independent living."
              noResult="Continue to the next question."
            />

            <DecisionNode
              question="Do you want to expand existing rooms in your home?"
              yesResult="Room Addition — extends your floor plan with shared utilities and integrated design."
              noResult="Continue to the next question."
            />

            <DecisionNode
              question="Is your lot over 5,000 square feet?"
              yesResult="ADU is viable — you have sufficient space for a detached unit after setbacks."
              noResult="Room Addition or garage-conversion ADU. A standard addition uses vertical space efficiently on compact lots."
            />

            <DecisionNode
              question="Is your primary goal adding bedrooms to your home?"
              yesResult="Room Addition — integrates directly with your existing layout and shares HVAC."
              noResult="Consult with a contractor. Your project has unique requirements that benefit from a professional site assessment."
            />
          </section>

          {/* ----------------------------------------------------------------- */}
          {/* Cost Comparison Deep Dive */}
          {/* ----------------------------------------------------------------- */}
          <section className="pb-12">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-6">
              Cost Comparison Deep Dive
            </h2>
            <p className="text-foreground-secondary text-base md:text-lg leading-relaxed mb-6">
              The following breakdown compares equivalent-size projects in Orange
              County using 2026 construction costs. Both scenarios assume a
              600-square-foot build on a standard residential lot.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* ADU Cost Card */}
              <div className="border border-accent/40 rounded-lg p-6 bg-accent/5">
                <h3 className="font-serif text-xl text-accent mb-4">
                  600 sq ft ADU
                </h3>
                <ul className="space-y-3 text-foreground-secondary text-base">
                  <li className="flex justify-between">
                    <span>Construction</span>
                    <span className="text-foreground font-medium">
                      $180K&ndash;$300K
                    </span>
                  </li>
                  <li className="flex justify-between">
                    <span>Permits &amp; Fees</span>
                    <span className="text-foreground font-medium">
                      $8K&ndash;$15K
                    </span>
                  </li>
                  <li className="flex justify-between">
                    <span>Utility Connections</span>
                    <span className="text-foreground font-medium">
                      $10K&ndash;$25K
                    </span>
                  </li>
                  <li className="flex justify-between">
                    <span>Design &amp; Engineering</span>
                    <span className="text-foreground font-medium">
                      $8K&ndash;$15K
                    </span>
                  </li>
                  <li className="flex justify-between border-t border-border-subtle pt-3 mt-3">
                    <span className="font-semibold text-foreground">Total</span>
                    <span className="font-semibold text-accent">
                      $206K&ndash;$355K
                    </span>
                  </li>
                </ul>
                <p className="text-sm text-accent mt-4">
                  Monthly income: $2,500&ndash;$3,500 &rarr; Payback in 5&ndash;8
                  years
                </p>
              </div>

              {/* Addition Cost Card */}
              <div className="border border-border-subtle rounded-lg p-6 bg-foreground/5">
                <h3 className="font-serif text-xl text-foreground mb-4">
                  600 sq ft Room Addition
                </h3>
                <ul className="space-y-3 text-foreground-secondary text-base">
                  <li className="flex justify-between">
                    <span>Construction</span>
                    <span className="text-foreground font-medium">
                      $150K&ndash;$250K
                    </span>
                  </li>
                  <li className="flex justify-between">
                    <span>Permits &amp; Fees</span>
                    <span className="text-foreground font-medium">
                      $5K&ndash;$10K
                    </span>
                  </li>
                  <li className="flex justify-between">
                    <span>Utility Connections</span>
                    <span className="text-foreground font-medium">
                      $0 (shared)
                    </span>
                  </li>
                  <li className="flex justify-between">
                    <span>Design &amp; Engineering</span>
                    <span className="text-foreground font-medium">
                      $5K&ndash;$12K
                    </span>
                  </li>
                  <li className="flex justify-between border-t border-border-subtle pt-3 mt-3">
                    <span className="font-semibold text-foreground">Total</span>
                    <span className="font-semibold text-foreground">
                      $160K&ndash;$272K
                    </span>
                  </li>
                </ul>
                <p className="text-sm text-foreground-secondary mt-4">
                  Resale ROI: 50%&ndash;65% of construction cost recouped at sale
                </p>
              </div>
            </div>

            <p className="text-foreground-secondary text-base md:text-lg leading-relaxed">
              The ADU costs more upfront, but the rental income stream offsets
              the total investment within 5 to 8 years. After that payback
              period, rental income is pure profit. A room addition delivers
              immediate lifestyle improvement and recoups 50% to 65% at resale,
              but it never generates monthly cash flow. For homeowners in Irvine,
              Newport Beach, and Mission Viejo, the ADU&rsquo;s income potential
              makes it the stronger long-term financial decision.
            </p>
          </section>

          {/* ----------------------------------------------------------------- */}
          {/* Permit and Timeline Differences */}
          {/* ----------------------------------------------------------------- */}
          <section className="pb-12">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-6">
              Permit and Timeline Differences in Orange County
            </h2>

            <h3 className="font-serif text-xl text-foreground mt-6 mb-3">
              ADU Permitting: Streamlined by California Law
            </h3>
            <p className="text-foreground-secondary text-base md:text-lg leading-relaxed mb-4">
              California Senate Bill 9 and Assembly Bill 1033 created a
              streamlined permitting process for ADUs. Orange County cities
              process ADU permits within 60 days of a complete application. The
              state prohibits local governments from imposing minimum lot sizes,
              parking requirements (within half a mile of transit), or
              owner-occupancy mandates. HOAs cannot block ADU construction under
              current California law.
            </p>
            <p className="text-foreground-secondary text-base md:text-lg leading-relaxed mb-4">
              Total ADU timeline from design to certificate of occupancy: 6 to 12
              months. The permit phase accounts for 2 to 3 months, and
              construction runs 4 to 9 months depending on whether you build a
              detached unit or convert an existing garage.
            </p>

            <h3 className="font-serif text-xl text-foreground mt-6 mb-3">
              Room Addition Permitting: Standard Building Process
            </h3>
            <p className="text-foreground-secondary text-base md:text-lg leading-relaxed mb-4">
              Room additions follow the standard building permit process in each
              Orange County city. Permit review takes 4 to 8 weeks in Irvine and
              6 to 10 weeks in Newport Beach. Additions must comply with local
              zoning setbacks, lot coverage limits, and height restrictions.
              HOAs retain full authority to review and approve or deny addition
              plans.
            </p>
            <p className="text-foreground-secondary text-base md:text-lg leading-relaxed">
              Total room addition timeline: 3 to 6 months. Permit review takes
              1 to 2 months, and construction runs 2 to 4 months. Additions
              move faster because they tie into existing structural systems and
              do not require independent utility connections.
            </p>
          </section>

          {/* ----------------------------------------------------------------- */}
          {/* FAQ Section */}
          {/* ----------------------------------------------------------------- */}
          <section className="pb-12">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-8">
              Frequently Asked Questions
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="font-serif text-lg text-foreground mb-2">
                  Is an ADU or a room addition cheaper to build in Orange County?
                </h3>
                <p className="text-foreground-secondary text-base leading-relaxed">
                  A room addition is cheaper upfront at $100,000 to $300,000. An
                  ADU costs $150,000 to $350,000 but generates rental income of
                  $2,200 to $3,500 per month that offsets the higher initial
                  investment within 5 to 8 years.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-lg text-foreground mb-2">
                  How long does it take to build an ADU vs. an addition in
                  California?
                </h3>
                <p className="text-foreground-secondary text-base leading-relaxed">
                  An ADU takes 6 to 12 months from permit to completion. A room
                  addition takes 3 to 6 months because it shares existing
                  utilities and foundation systems. The ADU&rsquo;s longer
                  timeline comes from independent utility connections and
                  separate structural requirements.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-lg text-foreground mb-2">
                  Does an ADU or room addition add more property value?
                </h3>
                <p className="text-foreground-secondary text-base leading-relaxed">
                  An ADU increases Orange County property values by 20% to 30%. A
                  room addition increases value by 10% to 20%. ADUs command
                  higher premiums because buyers recognize the rental income
                  potential as an immediate financial asset.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-lg text-foreground mb-2">
                  Can my HOA block me from building an ADU in Irvine?
                </h3>
                <p className="text-foreground-secondary text-base leading-relaxed">
                  No. California law AB 1033 prevents HOAs from blocking ADU
                  construction anywhere in the state. Your Irvine HOA cannot
                  deny an ADU application. Room additions, however, remain
                  subject to full HOA architectural review and approval.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-lg text-foreground mb-2">
                  Do I need separate utility connections for an ADU in Orange
                  County?
                </h3>
                <p className="text-foreground-secondary text-base leading-relaxed">
                  Yes. ADUs require independent connections for water, sewer, and
                  electrical service. These utility connections add $10,000 to
                  $25,000 to the project cost. Room additions share your
                  home&rsquo;s existing utility infrastructure at no additional
                  connection cost.
                </p>
              </div>
            </div>
          </section>

          {/* ----------------------------------------------------------------- */}
          {/* Gated Download */}
          {/* ----------------------------------------------------------------- */}
          <section className="pb-12">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-4">
              Download the Complete Comparison Guide
            </h2>
            <p className="text-foreground-secondary text-base md:text-lg leading-relaxed mb-8">
              Get the full ADU vs. Addition comparison guide as a PDF &mdash;
              includes cost worksheets, permit checklists, and the decision
              framework in a printable format.
            </p>
            <div className="border border-border-subtle rounded-xl p-6 md:p-10 bg-background-surface">
              <ResourceGateForm
                resourceName="ADU vs Addition Comparison Guide"
                ctaLabel="Download Free Comparison Guide"
              />
            </div>
          </section>

          {/* ----------------------------------------------------------------- */}
          {/* Internal Links */}
          {/* ----------------------------------------------------------------- */}
          <section className="pb-20">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-6">
              Continue Your Research
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link
                href="/resources/adu-starter-kit"
                className="block border border-border-subtle rounded-lg p-5 hover:border-accent transition-colors group"
              >
                <span className="text-accent text-sm uppercase tracking-wider font-semibold">
                  Next Resource
                </span>
                <span className="block text-foreground font-serif text-lg mt-1 group-hover:text-accent transition-colors">
                  ADU Planning Starter Kit
                </span>
              </Link>
              <Link
                href="/resources/cost-guide"
                className="block border border-border-subtle rounded-lg p-5 hover:border-accent transition-colors group"
              >
                <span className="text-accent text-sm uppercase tracking-wider font-semibold">
                  Related Guide
                </span>
                <span className="block text-foreground font-serif text-lg mt-1 group-hover:text-accent transition-colors">
                  Construction Cost Guide
                </span>
              </Link>
              <Link
                href="/resources/budget-calculator"
                className="block border border-border-subtle rounded-lg p-5 hover:border-accent transition-colors group"
              >
                <span className="text-accent text-sm uppercase tracking-wider font-semibold">
                  Free Tool
                </span>
                <span className="block text-foreground font-serif text-lg mt-1 group-hover:text-accent transition-colors">
                  Budget Calculator
                </span>
              </Link>
              <Link
                href="/contact"
                className="block border border-accent rounded-lg p-5 bg-accent/5 hover:bg-accent/10 transition-colors group"
              >
                <span className="text-accent text-sm uppercase tracking-wider font-semibold">
                  Ready to Start?
                </span>
                <span className="block text-foreground font-serif text-lg mt-1 group-hover:text-accent transition-colors">
                  Schedule a Free Consultation
                </span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

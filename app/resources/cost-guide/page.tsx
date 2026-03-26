import { Metadata } from 'next';
import Link from 'next/link';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { ResourceGateForm } from '@/components/ui/ResourceGateForm';
import { buildResourceSchemas } from '@/lib/resource-schemas';

// ---------------------------------------------------------------------------
// Metadata
// ---------------------------------------------------------------------------

export const metadata: Metadata = {
  title: '2026 Southern California Remodeling Cost Guide | Stone Development',
  description:
    'Accurate 2026 remodeling costs for Southern California. Kitchen remodel: $35K-$150K. Bathroom: $20K-$75K. ADU: $150K-$350K. Free downloadable cost guide.',
  alternates: {
    canonical: 'https://www.stonedevelopmentinc.com/resources/cost-guide',
  },
  openGraph: {
    title: '2026 Southern California Remodeling Cost Guide | Stone Development',
    description:
      'Accurate 2026 remodeling costs for Southern California. Kitchen, bathroom, ADU, and full renovation pricing with free downloadable guide.',
    url: 'https://www.stonedevelopmentinc.com/resources/cost-guide',
    type: 'article',
  },
};

// ---------------------------------------------------------------------------
// JSON-LD Schemas
// ---------------------------------------------------------------------------

const jsonLd = buildResourceSchemas({
  slug: 'cost-guide',
  title: '2026 Southern California Remodeling Cost Guide',
  description:
    'Accurate 2026 remodeling costs for Southern California including kitchen, bathroom, ADU, and full home renovation pricing.',
  faqs: [
    {
      question: 'How much does a kitchen remodel cost in Orange County?',
      answer:
        'A kitchen remodel in Orange County costs $35,000 to $250,000 depending on scope, with mid-range projects averaging $65,000 to $120,000.',
    },
    {
      question: 'What is the average cost to build an ADU in California?',
      answer:
        'Building an ADU in Southern California costs $150,000 to $375,000 depending on size, with a typical one-bedroom unit at $200,000 to $275,000.',
    },
    {
      question: 'How long does a full home renovation take?',
      answer:
        'A full home renovation in Southern California takes 4 to 12 months depending on scope, permits, and material lead times.',
    },
    {
      question: 'Do I need a permit for a bathroom remodel in Orange County?',
      answer:
        'Yes. Any bathroom remodel involving plumbing, electrical, or structural changes requires a building permit from your local Orange County jurisdiction.',
    },
    {
      question: 'What is the most cost-effective home renovation?',
      answer:
        'Bathroom remodels and kitchen updates deliver the highest ROI in Southern California, returning 60-80% of investment at resale.',
    },
  ],
});

// ---------------------------------------------------------------------------
// Cost Table Component
// ---------------------------------------------------------------------------

function CostTable({
  rows,
}: {
  rows: { tier: string; range: string }[];
}) {
  return (
    <div className="overflow-x-auto my-6">
      <table className="w-full border border-border-subtle text-sm md:text-base">
        <thead>
          <tr className="bg-foreground/5">
            <th className="text-left px-4 py-3 font-semibold text-foreground">
              Tier
            </th>
            <th className="text-left px-4 py-3 font-semibold text-foreground">
              Price Range (2026)
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={row.tier}
              className={i % 2 === 0 ? 'bg-background' : 'bg-background-surface'}
            >
              <td className="px-4 py-3 text-foreground">{row.tier}</td>
              <td className="px-4 py-3 text-foreground font-medium">
                {row.range}
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

export default function CostGuidePage() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="bg-background min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {/* ----------------------------------------------------------------- */}
          {/* Hero */}
          {/* ----------------------------------------------------------------- */}
          <section className="pt-32 pb-12">
            <SectionLabel>Free Resource</SectionLabel>
            <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-6 leading-tight">
              2026 Southern California Remodeling Cost Guide
            </h1>
            <p
              id="intro-paragraph"
              className="text-lg md:text-xl text-foreground font-semibold leading-relaxed mb-4"
            >
              A full home remodel in Southern California costs $150,000 to
              $500,000 in 2026, with kitchens at $35,000&ndash;$250,000 and
              bathrooms at $20,000&ndash;$100,000.
            </p>
            <p className="text-foreground-secondary font-light leading-relaxed mb-2">
              This guide breaks down real pricing data for every major project
              type&mdash;from kitchen and bathroom remodels to ADU construction,
              room additions, and full-scale renovations. Every dollar figure
              reflects actual 2026 contractor pricing across Orange County, Los
              Angeles County, and the Inland Empire. Whether you own a home in
              Irvine, Newport Beach, Mission Viejo, or Anaheim Hills, use this
              page to set an accurate budget before you talk to a single
              contractor.
            </p>
            <p className="text-xs text-foreground-secondary/70 font-light">
              Last updated March 2026
            </p>
          </section>

          {/* ----------------------------------------------------------------- */}
          {/* Kitchen Remodel Costs */}
          {/* ----------------------------------------------------------------- */}
          <section className="pb-12">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-4">
              Kitchen Remodel Costs in Southern California
            </h2>
            <p className="text-foreground-secondary font-light leading-relaxed mb-2">
              The kitchen is the single highest-impact remodel you can
              undertake. In Orange County, a standard kitchen renovation
              starts at $35,000 for cosmetic updates&mdash;new countertops,
              refaced cabinets, updated fixtures&mdash;and climbs past $250,000
              for full luxury gut-renovations with custom cabinetry, imported
              stone, and commercial-grade appliance packages.
            </p>
            <CostTable
              rows={[
                { tier: 'Standard', range: '$35,000 – $65,000' },
                { tier: 'Mid-Range', range: '$65,000 – $120,000' },
                { tier: 'Luxury', range: '$120,000 – $250,000+' },
              ]}
            />
            <p className="text-foreground-secondary font-light leading-relaxed">
              Three factors dominate kitchen budgets in Southern California:
              cabinetry (30&ndash;40% of total cost), countertop material
              (quartz runs $60&ndash;$120/sq ft installed; natural stone starts
              at $100/sq ft), and the appliance package. A Wolf/Sub-Zero suite
              alone adds $25,000&ndash;$50,000 to the project. Labor in Orange
              County averages $75&ndash;$125 per hour for licensed tradespeople,
              which is 20% above the national average.
            </p>
          </section>

          {/* ----------------------------------------------------------------- */}
          {/* Bathroom Remodel Costs */}
          {/* ----------------------------------------------------------------- */}
          <section className="pb-12">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-4">
              Bathroom Remodel Costs
            </h2>
            <p className="text-foreground-secondary font-light leading-relaxed mb-2">
              Bathroom renovations deliver the strongest return on investment
              for Southern California homeowners. A standard refresh&mdash;new
              tile, vanity, fixtures, and paint&mdash;starts at $20,000. A
              luxury primary bathroom with heated floors, frameless glass
              enclosure, freestanding soaking tub, and custom tile work reaches
              $100,000 or more in coastal Orange County markets like Newport
              Beach and Laguna Niguel.
            </p>
            <CostTable
              rows={[
                { tier: 'Standard', range: '$20,000 – $35,000' },
                { tier: 'Mid-Range', range: '$35,000 – $55,000' },
                { tier: 'Luxury', range: '$55,000 – $100,000+' },
              ]}
            />
            <p className="text-foreground-secondary font-light leading-relaxed">
              Plumbing relocation is the largest hidden cost driver. Moving a
              shower drain or toilet flange adds $3,000&ndash;$8,000 in
              plumbing labor alone. If your bathroom layout works, keep the
              existing plumbing footprint and invest the savings into premium
              tile and fixtures instead.
            </p>
          </section>

          {/* ----------------------------------------------------------------- */}
          {/* ADU Construction Costs */}
          {/* ----------------------------------------------------------------- */}
          <section className="pb-12">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-4">
              ADU Construction Costs
            </h2>
            <p className="text-foreground-secondary font-light leading-relaxed mb-2">
              Accessory Dwelling Units are the fastest-growing segment of
              residential construction in California. Since AB 68 and SB 9
              streamlined the permitting process, homeowners in Irvine, Mission
              Viejo, and throughout Orange County have added ADUs for rental
              income, multigenerational living, and home office space. A new
              detached ADU in 2026 costs $375&ndash;$475 per square foot fully
              built out.
            </p>
            <CostTable
              rows={[
                { tier: 'Studio (400 sq ft)', range: '$150,000 – $200,000' },
                {
                  tier: '1-Bedroom (600 sq ft)',
                  range: '$200,000 – $275,000',
                },
                {
                  tier: '2-Bedroom (800+ sq ft)',
                  range: '$275,000 – $375,000',
                },
              ]}
            />
            <p className="text-foreground-secondary font-light leading-relaxed">
              California&apos;s streamlined ADU permitting means most
              jurisdictions now process permits within 60 days. Orange County
              cities have eliminated impact fees for units under 750 sq ft,
              saving homeowners $10,000&ndash;$20,000 in upfront costs.
              Factor in $8,000&ndash;$15,000 for architectural plans and
              $5,000&ndash;$12,000 for utility connections when budgeting your
              ADU project.
            </p>
          </section>

          {/* ----------------------------------------------------------------- */}
          {/* Full Home Renovation */}
          {/* ----------------------------------------------------------------- */}
          <section className="pb-12">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-4">
              Full Home Renovation Costs
            </h2>
            <p className="text-foreground-secondary font-light leading-relaxed mb-2">
              A comprehensive whole-home renovation transforms every room,
              updates all systems (electrical, plumbing, HVAC), and often
              reconfigures the floor plan. In Southern California, full
              renovation pricing breaks down on a per-square-foot basis
              depending on the finish level you select.
            </p>
            <CostTable
              rows={[
                { tier: 'Standard ($100–$300/sq ft)', range: '$150,000 – $300,000' },
                { tier: 'Mid-Range ($300–$500/sq ft)', range: '$300,000 – $500,000' },
                { tier: 'Luxury ($500–$800+/sq ft)', range: '$500,000 – $1,000,000+' },
              ]}
            />
            <p className="text-foreground-secondary font-light leading-relaxed">
              A typical 2,000 sq ft home renovation in Anaheim Hills or Mission
              Viejo runs $200,000&ndash;$400,000 at a mid-range finish level.
              Luxury renovations in Newport Beach and Laguna Niguel regularly
              exceed $600,000 due to premium material selections and the
              complexity of working within custom-built homes. Full renovations
              take 4&ndash;12 months depending on scope, and you should plan for
              alternative housing during construction.
            </p>
          </section>

          {/* ----------------------------------------------------------------- */}
          {/* Room Addition */}
          {/* ----------------------------------------------------------------- */}
          <section className="pb-12">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-4">
              Room Addition Costs
            </h2>
            <p className="text-foreground-secondary font-light leading-relaxed mb-2">
              Adding square footage to your home is one of the most effective
              ways to increase both livable space and property value. Room
              additions in Southern California cost $200&ndash;$500+ per
              square foot depending on complexity, structural requirements, and
              finish level.
            </p>
            <CostTable
              rows={[
                { tier: 'Standard (single-story, simple roof tie-in)', range: '$200 – $350/sq ft' },
                { tier: 'Mid-Range (bathroom included, vaulted ceiling)', range: '$350 – $450/sq ft' },
                { tier: 'Luxury (second-story, structural steel)', range: '$450 – $500+/sq ft' },
              ]}
            />
            <p className="text-foreground-secondary font-light leading-relaxed">
              A typical 400 sq ft room addition&mdash;enough for a generous
              primary suite or family room&mdash;costs $100,000&ndash;$250,000
              in Orange County. Second-story additions require structural
              engineering, seismic reinforcement, and extended timelines. Budget
              $15,000&ndash;$30,000 for engineering and permits alone on a
              second-story project. Foundation work for ground-floor additions
              adds $12,000&ndash;$25,000 depending on soil conditions.
            </p>
          </section>

          {/* ----------------------------------------------------------------- */}
          {/* What Drives Costs */}
          {/* ----------------------------------------------------------------- */}
          <section className="pb-12">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-4">
              What Drives Costs in Southern California
            </h2>

            <h3 className="font-serif text-xl text-foreground mb-2 mt-6">
              Labor Costs
            </h3>
            <p className="text-foreground-secondary font-light leading-relaxed mb-4">
              Skilled trades labor in Orange County and Los Angeles County runs
              15&ndash;25% above the national average. Licensed electricians
              charge $85&ndash;$130 per hour, plumbers $90&ndash;$140 per hour,
              and finish carpenters $70&ndash;$110 per hour. The demand for
              qualified tradespeople in Southern California consistently
              outpaces supply, which keeps labor rates elevated year over year.
            </p>

            <h3 className="font-serif text-xl text-foreground mb-2">
              Materials and Supply Chain
            </h3>
            <p className="text-foreground-secondary font-light leading-relaxed mb-4">
              Material costs account for 40&ndash;50% of any remodeling budget.
              In 2026, lumber prices have stabilized compared to the 2021&ndash;2023
              volatility, but imported tile, natural stone, and custom millwork
              carry lead times of 6&ndash;12 weeks. Ordering materials early is
              essential to keeping your project on schedule.
            </p>

            <h3 className="font-serif text-xl text-foreground mb-2">
              Permit Costs
            </h3>
            <p className="text-foreground-secondary font-light leading-relaxed mb-4">
              Building permits in Orange County range from $2,000 for a basic
              bathroom remodel to $15,000+ for a full addition or ADU. Permit
              fees are calculated as a percentage of project valuation, and each
              city sets its own fee schedule. Irvine, Newport Beach, and Mission
              Viejo all have different rate structures. Your contractor should
              handle all permit applications and inspections as part of their
              scope of work.
            </p>

            <h3 className="font-serif text-xl text-foreground mb-2">
              Site Access and Lot Conditions
            </h3>
            <p className="text-foreground-secondary font-light leading-relaxed">
              Hillside lots, narrow driveways, and homes with limited staging
              area increase construction costs by 10&ndash;20%. Many homes in
              Laguna Niguel and the Anaheim Hills foothills sit on sloped lots
              that require additional grading, retaining walls, or crane access
              for material delivery. Flat, easily accessible lots in Irvine and
              Mission Viejo keep logistics costs lower.
            </p>
          </section>

          {/* ----------------------------------------------------------------- */}
          {/* Regional Price Variations */}
          {/* ----------------------------------------------------------------- */}
          <section className="pb-12">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-4">
              Regional Price Variations
            </h2>
            <p className="text-foreground-secondary font-light leading-relaxed mb-4">
              Remodeling costs shift significantly based on your exact location
              within Southern California. Here is how pricing breaks down by
              region in 2026:
            </p>
            <div className="overflow-x-auto my-6">
              <table className="w-full border border-border-subtle text-sm md:text-base">
                <thead>
                  <tr className="bg-foreground/5">
                    <th className="text-left px-4 py-3 font-semibold text-foreground">
                      Region
                    </th>
                    <th className="text-left px-4 py-3 font-semibold text-foreground">
                      Price Adjustment vs. Baseline
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      region: 'Orange County Coastal (Newport Beach, Laguna Niguel)',
                      adj: '10–20% above baseline',
                    },
                    {
                      region: 'Irvine / Mission Viejo',
                      adj: 'Baseline pricing',
                    },
                    {
                      region: 'Inland Empire',
                      adj: '15–20% below coastal rates',
                    },
                    {
                      region: 'LA County',
                      adj: '5–10% above OC baseline',
                    },
                  ].map((row, i) => (
                    <tr
                      key={row.region}
                      className={
                        i % 2 === 0 ? 'bg-background' : 'bg-background-surface'
                      }
                    >
                      <td className="px-4 py-3 text-foreground">{row.region}</td>
                      <td className="px-4 py-3 text-foreground font-medium">
                        {row.adj}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-foreground-secondary font-light leading-relaxed">
              Coastal premiums reflect higher land values, stricter HOA and
              architectural review requirements, and the expectation of
              luxury-level finishes. A mid-range kitchen remodel that costs
              $85,000 in Irvine will run $95,000&ndash;$102,000 in Newport
              Beach for the same scope of work. Conversely, homeowners in
              Riverside and San Bernardino counties save substantially on both
              labor and permitting compared to their coastal counterparts.
            </p>
          </section>

          {/* ----------------------------------------------------------------- */}
          {/* How to Budget Smart */}
          {/* ----------------------------------------------------------------- */}
          <section className="pb-12">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-4">
              How to Budget Smart for Your Remodel
            </h2>
            <p className="text-foreground-secondary font-light leading-relaxed mb-4">
              Smart budgeting separates successful renovations from stressful
              ones. Follow these four principles to protect your investment:
            </p>
            <ol className="list-decimal list-inside space-y-4 text-foreground-secondary font-light leading-relaxed">
              <li>
                <strong className="text-foreground">
                  Set aside a 15&ndash;20% contingency fund.
                </strong>{' '}
                Every remodel uncovers surprises behind walls&mdash;outdated
                wiring, water damage, or non-code plumbing. A $100,000 project
                needs $15,000&ndash;$20,000 in reserves. Do not skip this step.
              </li>
              <li>
                <strong className="text-foreground">
                  Phase your project if the budget is tight.
                </strong>{' '}
                Complete the kitchen this year and the bathrooms next year.
                Phasing lets you maintain quality without cutting corners or
                taking on excessive debt. Your contractor can design the work in
                logical phases that minimize disruption.
              </li>
              <li>
                <strong className="text-foreground">
                  Order materials 8&ndash;12 weeks before construction starts.
                </strong>{' '}
                Custom cabinetry, imported tile, and specialty fixtures all carry
                long lead times. Late material arrivals are the number one cause
                of construction delays in Southern California. Lock in your
                selections early.
              </li>
              <li>
                <strong className="text-foreground">
                  Use our free{' '}
                  <Link
                    href="/resources/budget-calculator"
                    className="text-accent underline underline-offset-2 hover:text-accent/80 transition-colors"
                  >
                    Budget Calculator
                  </Link>{' '}
                  to estimate your total project cost.
                </strong>{' '}
                Input your project type, square footage, and finish level to
                get a personalized estimate based on real Southern California
                pricing data.
              </li>
            </ol>
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
                  How much does a kitchen remodel cost in Orange County?
                </h3>
                <p className="text-foreground-secondary font-light">
                  A kitchen remodel in Orange County costs $35,000 to $250,000
                  depending on scope, with mid-range projects averaging $65,000
                  to $120,000.
                </p>
              </div>
              <div>
                <h3 className="font-serif text-lg text-foreground mb-1">
                  What is the average cost to build an ADU in California?
                </h3>
                <p className="text-foreground-secondary font-light">
                  Building an ADU in Southern California costs $150,000 to
                  $375,000 depending on size, with a typical one-bedroom unit at
                  $200,000 to $275,000.
                </p>
              </div>
              <div>
                <h3 className="font-serif text-lg text-foreground mb-1">
                  How long does a full home renovation take?
                </h3>
                <p className="text-foreground-secondary font-light">
                  A full home renovation in Southern California takes 4 to 12
                  months depending on scope, permits, and material lead times.
                </p>
              </div>
              <div>
                <h3 className="font-serif text-lg text-foreground mb-1">
                  Do I need a permit for a bathroom remodel in Orange County?
                </h3>
                <p className="text-foreground-secondary font-light">
                  Yes. Any bathroom remodel involving plumbing, electrical, or
                  structural changes requires a building permit from your local
                  Orange County jurisdiction.
                </p>
              </div>
              <div>
                <h3 className="font-serif text-lg text-foreground mb-1">
                  What is the most cost-effective home renovation?
                </h3>
                <p className="text-foreground-secondary font-light">
                  Bathroom remodels and kitchen updates deliver the highest ROI
                  in Southern California, returning 60&ndash;80% of investment
                  at resale.
                </p>
              </div>
            </div>
          </section>

          {/* ----------------------------------------------------------------- */}
          {/* Gated Download */}
          {/* ----------------------------------------------------------------- */}
          <section className="pb-12">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-4">
              Download the Complete Cost Guide
            </h2>
            <p className="text-foreground-secondary font-light leading-relaxed mb-4">
              Get the full 2026 Southern California Remodeling Cost Guide as a
              printable PDF. The download includes:
            </p>
            <ul className="list-disc list-inside text-foreground-secondary font-light space-y-2 mb-8">
              <li>
                Printable room-by-room cost breakdown sheets for kitchens,
                bathrooms, ADUs, additions, and full renovations
              </li>
              <li>
                Budget worksheets to track material selections, labor bids, and
                contingency allocations
              </li>
              <li>
                Vendor comparison templates to evaluate contractor bids
                side-by-side
              </li>
            </ul>
            <div className="bg-background-surface border border-border-subtle rounded-xl p-6 md:p-10">
              <ResourceGateForm
                resourceName="2026 SoCal Remodeling Cost Guide"
                ctaLabel="Download Free Cost Guide"
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
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

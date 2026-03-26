import { Metadata } from 'next';
import Link from 'next/link';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { ResourceGateForm } from '@/components/ui/ResourceGateForm';
import { buildResourceSchemas } from '@/lib/resource-schemas';

// ---------------------------------------------------------------------------
// Metadata
// ---------------------------------------------------------------------------

export const metadata: Metadata = {
  title: 'ADU Planning Starter Kit: Build Your Orange County ADU | Stone Development',
  description:
    'Complete ADU planning guide for Orange County homeowners. California ADU regulations, permit timelines (60-90 days), cost breakdowns ($60K-$350K), and a step-by-step checklist for Irvine, Costa Mesa, Newport Beach, and Mission Viejo.',
  alternates: {
    canonical: 'https://www.stonedevelopmentinc.com/resources/adu-starter-kit',
  },
  openGraph: {
    title: 'ADU Planning Starter Kit: Build Your Orange County ADU | Stone Development',
    description:
      'Everything you need to plan and build an ADU in Orange County. California regulations, permit process, cost breakdowns, and a free downloadable planning checklist.',
    url: 'https://www.stonedevelopmentinc.com/resources/adu-starter-kit',
    type: 'article',
  },
};

// ---------------------------------------------------------------------------
// JSON-LD Schemas
// ---------------------------------------------------------------------------

const jsonLd = buildResourceSchemas({
  slug: 'adu-starter-kit',
  title: 'ADU Planning Starter Kit for Orange County Homeowners',
  description:
    'Complete ADU planning resource covering California regulations, Orange County permit timelines, cost breakdowns, and a step-by-step planning checklist.',
  faqs: [
    {
      question: 'How much does it cost to build an ADU in Orange County?',
      answer:
        'A detached ADU in Orange County costs $150,000 to $350,000. Garage conversions start at $60,000.',
    },
    {
      question: 'How long does it take to get an ADU permit in Orange County?',
      answer:
        'Orange County cities process ADU permits in 60 to 90 days under California streamlined review requirements.',
    },
    {
      question: 'What is the maximum size for an ADU in California?',
      answer:
        'California allows 850 square feet for a one-bedroom ADU and 1,000 square feet for two or more bedrooms.',
    },
    {
      question: 'Do I need owner-occupancy to build an ADU in California?',
      answer:
        'No. California eliminated owner-occupancy requirements for ADUs through 2025 and extended the exemption indefinitely.',
    },
    {
      question: 'Can I build an ADU if I have an HOA in Irvine?',
      answer:
        'Yes. California law AB 1033 prohibits HOAs from blocking ADU construction. HOAs cannot deny your ADU application.',
    },
  ],
});

// ---------------------------------------------------------------------------
// ADU Cost Table Component
// ---------------------------------------------------------------------------

function AduCostTable({
  rows,
}: {
  rows: { type: string; range: string }[];
}) {
  return (
    <div className="overflow-x-auto my-6">
      <table className="w-full border border-border-subtle text-sm md:text-base">
        <thead>
          <tr className="bg-foreground/5">
            <th className="text-left px-4 py-3 font-semibold text-foreground">
              ADU Type
            </th>
            <th className="text-left px-4 py-3 font-semibold text-foreground">
              Cost Range (2026)
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={row.type}
              className={i % 2 === 0 ? 'bg-background' : 'bg-background-surface'}
            >
              <td className="px-4 py-3 text-foreground">{row.type}</td>
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

export default function AduStarterKitPage() {
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
              ADU Planning Starter Kit for Orange County Homeowners
            </h1>
            <p
              id="intro-paragraph"
              className="text-lg md:text-xl text-foreground font-semibold leading-relaxed mb-4"
            >
              Building an ADU in Orange County costs $60,000 to $350,000 and
              takes 6&ndash;14 months from design to certificate of occupancy.
            </p>
            <p className="text-foreground-secondary font-light leading-relaxed mb-2">
              This starter kit gives you everything you need to plan, permit,
              and build an Accessory Dwelling Unit in Irvine, Costa Mesa,
              Newport Beach, Mission Viejo, or anywhere in Orange County.
              California&apos;s landmark ADU legislation&mdash;AB 68, SB 9, and
              AB 1033&mdash;has removed the barriers that once made backyard
              homes impossible. Today, every single-family lot in the state is
              eligible for at least one ADU and one Junior ADU. This guide
              covers regulations, costs, permits, and a step-by-step checklist
              so you can move forward with confidence. Every dollar figure and
              timeline reflects actual 2026 data from Orange County projects
              completed by Stone Development Inc.
            </p>
            <p className="text-xs text-foreground-secondary/70 font-light">
              Last updated March 2026
            </p>
          </section>

          {/* ----------------------------------------------------------------- */}
          {/* Why Build an ADU */}
          {/* ----------------------------------------------------------------- */}
          <section className="pb-12">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-4">
              Why Build an ADU in Orange County
            </h2>
            <p className="text-foreground-secondary font-light leading-relaxed mb-4">
              Orange County has a severe housing shortage. The California
              Department of Housing and Community Development (HCD) assigned
              Orange County a Regional Housing Needs Allocation of 183,861 new
              units through 2029. ADUs are the fastest, most cost-effective way
              for homeowners to contribute to that goal while generating
              significant personal financial returns.
            </p>

            <h3 className="font-serif text-xl text-foreground mb-2 mt-6">
              California AB 68, SB 9, and AB 1033
            </h3>
            <p className="text-foreground-secondary font-light leading-relaxed mb-4">
              California&apos;s ADU legislation eliminated minimum lot size
              requirements, removed parking mandates for properties within half
              a mile of public transit, and forced all cities to approve
              compliant ADU applications within 60 days. AB 1033, signed in
              2023, allows homeowners to sell ADUs as condominiums&mdash;creating
              a brand-new pathway to affordable homeownership. These laws apply
              statewide, overriding local zoning restrictions that previously
              blocked ADU construction in cities like Irvine, Newport Beach, and
              Laguna Niguel.
            </p>

            <h3 className="font-serif text-xl text-foreground mb-2">
              Rental Income Potential
            </h3>
            <p className="text-foreground-secondary font-light leading-relaxed mb-4">
              A one-bedroom ADU in Orange County generates $2,200 to $3,500 per
              month in rental income based on 2026 market rates. A
              two-bedroom unit in Irvine or Costa Mesa commands $3,000 to $4,200
              per month. At the midpoint, a $2,800/month rental income produces
              $33,600 per year&mdash;delivering a full return on a $200,000 ADU
              investment in under six years.
            </p>

            <h3 className="font-serif text-xl text-foreground mb-2">
              Property Value Increase
            </h3>
            <p className="text-foreground-secondary font-light leading-relaxed mb-4">
              Adding an ADU increases property value by 20&ndash;30% in Orange
              County. A $900,000 single-family home with a completed ADU
              appraises at $1,080,000 to $1,170,000. This appreciation happens
              immediately upon completion, not over time. The ADU functions as
              both a cash-flowing asset and a permanent equity increase.
            </p>

            <h3 className="font-serif text-xl text-foreground mb-2">
              Multigenerational Living
            </h3>
            <p className="text-foreground-secondary font-light leading-relaxed">
              Southern California families increasingly use ADUs to house aging
              parents, adult children, or live-in caregivers. An ADU provides
              independent living space with a private entrance, kitchen, and
              bathroom&mdash;keeping family close while preserving everyone&apos;s
              privacy. This arrangement eliminates $4,000&ndash;$8,000 per month
              in assisted living or apartment rental costs.
            </p>
          </section>

          {/* ----------------------------------------------------------------- */}
          {/* ADU Types and Costs */}
          {/* ----------------------------------------------------------------- */}
          <section className="pb-12">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-4">
              ADU Types and What They Cost
            </h2>
            <p className="text-foreground-secondary font-light leading-relaxed mb-2">
              California recognizes four ADU categories. Each has different cost
              profiles, construction timelines, and permit requirements. The
              following table reflects 2026 all-in pricing for Orange County,
              including design, permits, construction, and utility connections.
            </p>
            <AduCostTable
              rows={[
                { type: 'Detached ADU (new construction)', range: '$150,000 – $350,000' },
                { type: 'Attached / Conversion ADU', range: '$80,000 – $200,000' },
                { type: 'Garage Conversion', range: '$60,000 – $150,000' },
                { type: 'Junior ADU (JADU, under 500 sq ft)', range: '$40,000 – $100,000' },
              ]}
            />
            <p className="text-foreground-secondary font-light leading-relaxed mb-4">
              <strong className="text-foreground">Detached ADUs</strong> are
              standalone structures built from the ground up on your existing
              lot. They offer maximum design flexibility and the highest rental
              returns but carry the largest construction budget. A typical
              750 sq ft detached ADU in Irvine costs $250,000 to $300,000
              all-in.
            </p>
            <p className="text-foreground-secondary font-light leading-relaxed mb-4">
              <strong className="text-foreground">Attached and Conversion ADUs</strong>{' '}
              transform existing interior space&mdash;such as a bonus room,
              basement, or unused wing of the home&mdash;into a self-contained
              unit with a separate entrance, kitchen, and bathroom. These
              projects save on foundation and framing costs.
            </p>
            <p className="text-foreground-secondary font-light leading-relaxed mb-4">
              <strong className="text-foreground">Garage Conversions</strong>{' '}
              repurpose an existing two-car garage into a living unit. The
              structure, roof, and slab already exist, which reduces costs by
              40&ndash;60% compared to new construction. Garage conversions in
              Mission Viejo and Costa Mesa run $80,000 to $120,000 for a
              finished one-bedroom unit.
            </p>
            <p className="text-foreground-secondary font-light leading-relaxed">
              <strong className="text-foreground">Junior ADUs (JADUs)</strong>{' '}
              are created within the existing footprint of your primary home and
              must be 500 sq ft or less. JADUs require only an efficiency
              kitchen (no full-size appliances) and can share a bathroom with
              the main house. They carry the lowest cost and the simplest permit
              path.
            </p>
          </section>

          {/* ----------------------------------------------------------------- */}
          {/* Orange County ADU Regulations */}
          {/* ----------------------------------------------------------------- */}
          <section className="pb-12">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-4">
              Orange County ADU Regulations
            </h2>
            <p className="text-foreground-secondary font-light leading-relaxed mb-4">
              California state law sets the floor for ADU regulations, and
              Orange County cities must comply. Here are the rules that govern
              every ADU project in Irvine, Costa Mesa, Newport Beach, Mission
              Viejo, and surrounding jurisdictions:
            </p>

            <h3 className="font-serif text-xl text-foreground mb-2 mt-6">
              Size Limits
            </h3>
            <p className="text-foreground-secondary font-light leading-relaxed mb-4">
              One-bedroom ADUs: 850 sq ft maximum. Two-bedroom (or more) ADUs:
              1,000 sq ft maximum. JADUs: 500 sq ft maximum. These are state
              minimums&mdash;no city in Orange County is permitted to impose a
              smaller size cap. Detached ADUs can also reach 1,200 sq ft if the
              local jurisdiction has adopted the expanded limit.
            </p>

            <h3 className="font-serif text-xl text-foreground mb-2">
              Setback Requirements
            </h3>
            <p className="text-foreground-secondary font-light leading-relaxed mb-4">
              State law requires a 4-foot rear setback and a 4-foot side
              setback for detached ADUs. No front setback applies beyond the
              existing front setback of the primary dwelling. Conversion ADUs
              (including garage conversions) have zero additional setback
              requirements&mdash;if the existing structure meets code, it
              qualifies.
            </p>

            <h3 className="font-serif text-xl text-foreground mb-2">
              Height Limits
            </h3>
            <p className="text-foreground-secondary font-light leading-relaxed mb-4">
              Detached ADUs: 16 feet for single-story, 18 feet if within half a
              mile of a major transit stop, and up to 25 feet for two-story ADUs
              on multifamily lots. Attached ADUs must not exceed the height of
              the primary dwelling. These limits allow for comfortable 9-foot
              ceilings and pitched roof designs.
            </p>

            <h3 className="font-serif text-xl text-foreground mb-2">
              Parking Exemptions
            </h3>
            <p className="text-foreground-secondary font-light leading-relaxed mb-4">
              No additional parking is required for any ADU located within half
              a mile of public transit. In Orange County, OCTA bus routes cover
              the vast majority of residential areas in Irvine, Costa Mesa, and
              Mission Viejo&mdash;making most properties exempt. Even outside
              transit zones, maximum parking requirements are capped at one
              space, and tandem or street parking counts.
            </p>

            <h3 className="font-serif text-xl text-foreground mb-2">
              Owner-Occupancy Rules
            </h3>
            <p className="text-foreground-secondary font-light leading-relaxed">
              California suspended owner-occupancy requirements for ADUs
              permitted before January 1, 2025. The state legislature extended
              this exemption indefinitely, meaning you do not need to live on
              the property to rent out your ADU. Both the primary home and the
              ADU can be rented simultaneously.
            </p>
          </section>

          {/* ----------------------------------------------------------------- */}
          {/* Permit Process */}
          {/* ----------------------------------------------------------------- */}
          <section className="pb-12">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-4">
              The Permit Process Step by Step
            </h2>
            <p className="text-foreground-secondary font-light leading-relaxed mb-4">
              Orange County cities process ADU permits in 60 to 90 days under
              California&apos;s streamlined review mandate. Here is the complete
              timeline from initial planning to certificate of occupancy:
            </p>
            <ol className="list-decimal list-inside space-y-4 text-foreground-secondary font-light leading-relaxed">
              <li>
                <strong className="text-foreground">
                  Site Assessment and Feasibility (Week 1&ndash;2)
                </strong>{' '}
                A licensed contractor evaluates your lot for setbacks, utility
                access, soil conditions, and optimal ADU placement. This
                assessment costs $500&ndash;$1,500 and determines which ADU type
                works best for your property.
              </li>
              <li>
                <strong className="text-foreground">
                  Architectural Design (Week 2&ndash;6)
                </strong>{' '}
                An architect or designer produces construction drawings,
                structural calculations, and a Title 24 energy compliance
                report. Full architectural plans for a detached ADU cost
                $8,000&ndash;$15,000. Pre-designed plan sets reduce this to
                $3,000&ndash;$6,000.
              </li>
              <li>
                <strong className="text-foreground">
                  Permit Submission (Week 6&ndash;7)
                </strong>{' '}
                Your contractor submits the complete plan set to the local
                building department. Plan check fees in Orange County range from
                $3,000 to $8,000 depending on project valuation and the city.
                Irvine, Costa Mesa, and Mission Viejo all accept digital
                submissions.
              </li>
              <li>
                <strong className="text-foreground">
                  Plan Check Review (Week 7&ndash;15)
                </strong>{' '}
                The city reviews your plans for building code compliance, fire
                safety, structural adequacy, and zoning conformance. California
                law requires cities to complete ADU plan review within 60 days
                of a complete application. Most Orange County cities meet this
                deadline. Corrections, if required, add 2&ndash;4 weeks.
              </li>
              <li>
                <strong className="text-foreground">
                  Permit Issuance and Impact Fees (Week 15&ndash;16)
                </strong>{' '}
                Once approved, you pay the building permit fee and any
                applicable impact fees. California exempts ADUs under 750 sq ft
                from impact fees. For larger units, impact fees in Orange County
                range from $5,000 to $15,000. School district fees add
                $4.79/sq ft statewide.
              </li>
              <li>
                <strong className="text-foreground">
                  Utility Connections (Week 16&ndash;18)
                </strong>{' '}
                Coordinate water, sewer, electrical, and gas connections with
                local utility providers. New utility connections cost
                $5,000&ndash;$12,000 depending on the distance from existing
                service lines. Irvine Ranch Water District and Mesa Water
                District both have streamlined ADU connection processes.
              </li>
              <li>
                <strong className="text-foreground">
                  Construction (Week 18&ndash;38)
                </strong>{' '}
                A detached ADU takes 4&ndash;6 months to build. Garage
                conversions take 2&ndash;3 months. Your contractor manages all
                inspections during construction: foundation, framing, rough
                mechanical/electrical/plumbing, insulation, and final.
              </li>
              <li>
                <strong className="text-foreground">
                  Final Inspection and Certificate of Occupancy (Week 38&ndash;40)
                </strong>{' '}
                The building department conducts a final inspection to verify
                code compliance. Once passed, the city issues a Certificate of
                Occupancy (CO), and your ADU is legally habitable. Total
                elapsed time from design to CO: 8&ndash;14 months for a
                detached ADU, 5&ndash;8 months for a garage conversion.
              </li>
            </ol>
          </section>

          {/* ----------------------------------------------------------------- */}
          {/* Planning Checklist */}
          {/* ----------------------------------------------------------------- */}
          <section className="pb-12">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-4">
              Your ADU Planning Checklist
            </h2>
            <p className="text-foreground-secondary font-light leading-relaxed mb-4">
              Follow these 12 steps in order to keep your ADU project on track,
              on budget, and fully compliant with California and Orange County
              requirements:
            </p>
            <ol className="list-decimal list-inside space-y-3 text-foreground-secondary font-light leading-relaxed">
              <li>
                <strong className="text-foreground">Assess your property.</strong>{' '}
                Measure your lot, identify setback zones, locate utility
                connections, and confirm there is adequate access for
                construction equipment.
              </li>
              <li>
                <strong className="text-foreground">Check your city&apos;s zoning code.</strong>{' '}
                Verify your property is zoned for an ADU. In Orange County,
                every single-family residential lot qualifies under state law,
                but confirm any city-specific overlay zones.
              </li>
              <li>
                <strong className="text-foreground">Set your total budget.</strong>{' '}
                Include design, permits, construction, utility connections,
                landscaping, and a 15&ndash;20% contingency. Use our{' '}
                <Link
                  href="/resources/budget-calculator"
                  className="text-accent underline underline-offset-2 hover:text-accent/80 transition-colors"
                >
                  Budget Calculator
                </Link>{' '}
                for a personalized estimate.
              </li>
              <li>
                <strong className="text-foreground">Choose your ADU type.</strong>{' '}
                Decide between detached, attached, garage conversion, or JADU
                based on your lot, budget, and intended use (rental income,
                family housing, home office).
              </li>
              <li>
                <strong className="text-foreground">Hire a licensed architect or designer.</strong>{' '}
                Select a professional experienced with Orange County ADU
                permitting. Verify their California license through the
                Architects Board (LATC) or CSLB.
              </li>
              <li>
                <strong className="text-foreground">Select a licensed general contractor.</strong>{' '}
                Choose a contractor with a proven track record of ADU
                construction in Orange County. Verify their CSLB license,
                insurance, and bonding. Use our{' '}
                <Link
                  href="/resources/contractor-checklist"
                  className="text-accent underline underline-offset-2 hover:text-accent/80 transition-colors"
                >
                  Contractor Vetting Checklist
                </Link>{' '}
                to evaluate candidates.
              </li>
              <li>
                <strong className="text-foreground">Finalize your floor plan and design.</strong>{' '}
                Lock in the layout, finishes, fixtures, and appliance
                selections before submitting for permits. Changes during
                construction add 15&ndash;30% to your budget.
              </li>
              <li>
                <strong className="text-foreground">Submit for permits.</strong>{' '}
                Your contractor submits the complete plan set to the building
                department. Expect 60&ndash;90 days for plan check approval in
                Orange County.
              </li>
              <li>
                <strong className="text-foreground">Arrange financing.</strong>{' '}
                Options include home equity lines of credit (HELOC),
                construction loans, cash-out refinancing, or the CalHFA ADU
                Grant Program (up to $40,000 for qualifying homeowners).
              </li>
              <li>
                <strong className="text-foreground">Notify your HOA.</strong>{' '}
                California law (AB 1033) prevents HOAs from blocking ADU
                construction, but you must submit a courtesy notification.
                Document everything in writing.
              </li>
              <li>
                <strong className="text-foreground">Prepare for construction.</strong>{' '}
                Clear the build area, notify neighbors, confirm staging and
                material delivery access, and establish a communication plan
                with your contractor for weekly progress updates.
              </li>
              <li>
                <strong className="text-foreground">Plan for occupancy.</strong>{' '}
                Decide whether you will rent the ADU (research local rental
                comps), house a family member, or use it as a home office.
                Set up separate utility metering if required by your city.
              </li>
            </ol>
          </section>

          {/* ----------------------------------------------------------------- */}
          {/* Common Mistakes */}
          {/* ----------------------------------------------------------------- */}
          <section className="pb-12">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-4">
              Common ADU Mistakes to Avoid
            </h2>
            <p className="text-foreground-secondary font-light leading-relaxed mb-4">
              These five mistakes derail ADU projects across Orange County every
              year. Avoid all of them:
            </p>

            <h3 className="font-serif text-xl text-foreground mb-2 mt-6">
              1. Underbudgeting Utility Connections
            </h3>
            <p className="text-foreground-secondary font-light leading-relaxed mb-4">
              New water, sewer, and electrical connections cost $5,000 to
              $12,000&mdash;and up to $20,000 if the main sewer line requires
              relocation or if your property needs a new electrical panel
              upgrade. Homeowners who budget only for the structure itself face
              $10,000&ndash;$20,000 in surprise costs at the utility connection
              stage.
            </p>

            <h3 className="font-serif text-xl text-foreground mb-2">
              2. Ignoring HOA Restrictions
            </h3>
            <p className="text-foreground-secondary font-light leading-relaxed mb-4">
              California law overrides HOA bans on ADUs, but many HOAs in Irvine
              master-planned communities (Woodbridge, Northwood, Portola
              Springs) still send violation letters or attempt to impose
              architectural review delays. Know your rights under AB 1033. File
              the courtesy notification, document every interaction, and proceed
              with your permitted plans. The HOA cannot stop you.
            </p>

            <h3 className="font-serif text-xl text-foreground mb-2">
              3. Skipping the Soil Report on Hillside Lots
            </h3>
            <p className="text-foreground-secondary font-light leading-relaxed mb-4">
              Properties in Mission Viejo, Laguna Niguel, and the Anaheim Hills
              foothills sit on expansive clay soils and sloped terrain. A
              geotechnical soil report ($2,500&ndash;$4,000) determines
              foundation requirements before construction begins. Skipping this
              step leads to foundation failures, cracked slabs, and six-figure
              repair bills. Every hillside ADU project requires a soil report.
            </p>

            <h3 className="font-serif text-xl text-foreground mb-2">
              4. Not Planning for Parking
            </h3>
            <p className="text-foreground-secondary font-light leading-relaxed mb-4">
              If you convert your garage to an ADU, you lose covered parking for
              the primary residence. While California waives additional parking
              requirements for the ADU itself, your household still needs
              functional parking. Plan for a driveway extension, carport, or
              street parking strategy before you commit to a garage conversion.
            </p>

            <h3 className="font-serif text-xl text-foreground mb-2">
              5. Choosing the Cheapest Contractor
            </h3>
            <p className="text-foreground-secondary font-light leading-relaxed">
              An ADU is a fully permitted, code-compliant dwelling unit with
              plumbing, electrical, HVAC, fire safety, and structural
              requirements identical to new home construction. Unlicensed or
              underqualified contractors produce work that fails inspection,
              requires costly rework, and delays your project by months. Hire a
              licensed Class B general contractor with specific ADU experience
              in Orange County. Verify their license at{' '}
              <span className="text-foreground font-medium">cslb.ca.gov</span>{' '}
              before signing any contract.
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
                  How much does it cost to build an ADU in Orange County?
                </h3>
                <p className="text-foreground-secondary font-light">
                  A detached ADU in Orange County costs $150,000 to $350,000.
                  Garage conversions start at $60,000.
                </p>
              </div>
              <div>
                <h3 className="font-serif text-lg text-foreground mb-1">
                  How long does it take to get an ADU permit in Orange County?
                </h3>
                <p className="text-foreground-secondary font-light">
                  Orange County cities process ADU permits in 60 to 90 days
                  under California streamlined review requirements.
                </p>
              </div>
              <div>
                <h3 className="font-serif text-lg text-foreground mb-1">
                  What is the maximum size for an ADU in California?
                </h3>
                <p className="text-foreground-secondary font-light">
                  California allows 850 square feet for a one-bedroom ADU and
                  1,000 square feet for two or more bedrooms.
                </p>
              </div>
              <div>
                <h3 className="font-serif text-lg text-foreground mb-1">
                  Do I need owner-occupancy to build an ADU in California?
                </h3>
                <p className="text-foreground-secondary font-light">
                  No. California eliminated owner-occupancy requirements for
                  ADUs through 2025 and extended the exemption indefinitely.
                </p>
              </div>
              <div>
                <h3 className="font-serif text-lg text-foreground mb-1">
                  Can I build an ADU if I have an HOA in Irvine?
                </h3>
                <p className="text-foreground-secondary font-light">
                  Yes. California law AB 1033 prohibits HOAs from blocking ADU
                  construction. HOAs cannot deny your ADU application.
                </p>
              </div>
            </div>
          </section>

          {/* ----------------------------------------------------------------- */}
          {/* Gated Download */}
          {/* ----------------------------------------------------------------- */}
          <section className="pb-12">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-4">
              Download the ADU Planning Starter Kit
            </h2>
            <p className="text-foreground-secondary font-light leading-relaxed mb-4">
              Get the complete ADU Planning Starter Kit as a printable PDF. The
              download includes:
            </p>
            <ul className="list-disc list-inside text-foreground-secondary font-light space-y-2 mb-8">
              <li>
                Printable ADU planning checklist with all 12 steps and
                documentation requirements
              </li>
              <li>
                Orange County ADU regulation summary sheet covering size limits,
                setbacks, height, and parking
              </li>
              <li>
                Cost breakdown worksheets for detached ADUs, garage conversions,
                and JADUs
              </li>
              <li>
                Permit timeline tracker to monitor your application from
                submission to certificate of occupancy
              </li>
            </ul>
            <div className="bg-background-surface border border-border-subtle rounded-xl p-6 md:p-10">
              <ResourceGateForm
                resourceName="ADU Planning Starter Kit"
                ctaLabel="Download Free ADU Kit"
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
                  Get a personalized cost estimate for your ADU or remodel in
                  under 2 minutes.
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
                  Full cost breakdowns for kitchens, bathrooms, ADUs, and whole-home
                  renovations.
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
                  Request a free ADU consultation with our Orange County
                  construction team.
                </p>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

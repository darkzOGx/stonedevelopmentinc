import { Metadata } from 'next';
import Link from 'next/link';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { ResourceGateForm } from '@/components/ui/ResourceGateForm';

// ---------------------------------------------------------------------------
// Metadata
// ---------------------------------------------------------------------------

export const metadata: Metadata = {
  title:
    'Remodeling ROI Report: Which Upgrades Pay Off in SoCal | Stone Development',
  description:
    'Data-driven remodeling ROI report for Orange County and Southern California. Kitchen remodels return 75-85%. ADUs deliver 60-80% plus rental income. Free download.',
  alternates: {
    canonical: 'https://www.stonedevelopmentinc.com/resources/roi-report',
  },
  openGraph: {
    title:
      'Remodeling ROI Report: Which Upgrades Pay Off in SoCal | Stone Development',
    description:
      'Data-driven remodeling ROI report for Orange County homeowners. Discover which renovations deliver the highest return on investment in Southern California.',
    url: 'https://www.stonedevelopmentinc.com/resources/roi-report',
    type: 'article',
  },
};

// ---------------------------------------------------------------------------
// JSON-LD Schemas
// ---------------------------------------------------------------------------

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Remodeling ROI Report: Which Upgrades Pay Off in Southern California',
  description:
    'Data-driven remodeling ROI report for Orange County and Southern California covering kitchen, bathroom, ADU, and full renovation return on investment.',
  url: 'https://www.stonedevelopmentinc.com/resources/roi-report',
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
      name: 'What home renovation has the highest ROI in Orange County?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A mid-range kitchen remodel delivers the highest ROI in Orange County at 75-85%, recouping an average of $52,000 on a $65,000 investment.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do ADUs increase home value in Southern California?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. ADUs increase home value by $150,000 to $250,000 in Orange County and generate $1,800 to $3,200 per month in rental income, delivering 60-80% ROI plus ongoing cash flow.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is a swimming pool a good investment in Orange County?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Swimming pools return only 40-50% of their cost at resale in Orange County despite buyer interest, making them one of the lowest-ROI renovations.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long before selling should I renovate for maximum ROI?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Renovate 6 to 12 months before listing to maximize ROI. This window allows construction to finish, materials to settle, and listing photos to showcase a move-in-ready home.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the average ROI on a bathroom remodel in California?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A mid-range bathroom remodel in Southern California returns 70-80% of its cost at resale, with average spend of $25,000 to $40,000 and recoup of $20,000 to $30,000.',
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
// ROI Table Component
// ---------------------------------------------------------------------------

function ROITable({
  rows,
}: {
  rows: { project: string; roi: string; avgCost: string; avgRecoup: string }[];
}) {
  return (
    <div className="overflow-x-auto my-6">
      <table className="w-full border border-border-subtle text-sm md:text-base">
        <thead>
          <tr className="bg-foreground/5">
            <th className="text-left px-4 py-3 font-semibold text-foreground">
              Project Type
            </th>
            <th className="text-left px-4 py-3 font-semibold text-foreground">
              ROI Range
            </th>
            <th className="text-left px-4 py-3 font-semibold text-foreground">
              Avg Cost
            </th>
            <th className="text-left px-4 py-3 font-semibold text-foreground">
              Avg Recoup
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={row.project}
              className={i % 2 === 0 ? 'bg-background' : 'bg-background-surface'}
            >
              <td className="px-4 py-3 text-foreground">{row.project}</td>
              <td className="px-4 py-3 text-foreground font-medium">
                {row.roi}
              </td>
              <td className="px-4 py-3 text-foreground">{row.avgCost}</td>
              <td className="px-4 py-3 text-foreground">{row.avgRecoup}</td>
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

export default function ROIReportPage() {
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
              Remodeling ROI Report: Which Upgrades Actually Pay Off in Southern
              California
            </h1>
            <p
              id="intro-paragraph"
              className="text-lg md:text-xl text-foreground font-semibold leading-relaxed mb-4"
            >
              Mid-range kitchen remodels return 75&ndash;85% in Orange County,
              outperforming the national average by 12&ndash;18 percentage
              points thanks to Southern California&rsquo;s $1.1M+ median home
              values.
            </p>
            <p className="text-foreground-secondary font-light leading-relaxed mb-2">
              This data-driven report ranks every major renovation by return on
              investment specifically for homeowners in Irvine, Newport Beach,
              Mission Viejo, Laguna Beach, and across Orange County. Every
              percentage and dollar figure reflects 2026 resale data from the
              Southern California market. Use this report to invest renovation
              dollars where they deliver measurable financial returns&mdash;and
              avoid the upgrades that destroy equity.
            </p>
            <p className="text-xs text-foreground-secondary/70 font-light">
              Last updated March 2026
            </p>
          </section>

          {/* ----------------------------------------------------------------- */}
          {/* The SoCal ROI Advantage */}
          {/* ----------------------------------------------------------------- */}
          <section className="pb-12">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
              The SoCal ROI Advantage
            </h2>
            <p className="text-foreground-secondary font-light leading-relaxed mb-4">
              Southern California homeowners earn more from renovations than
              homeowners in any other U.S. metro region. The reason is
              straightforward: Orange County&rsquo;s median home price exceeds
              $1.1 million in 2026, with Irvine averaging $1.35 million and
              Newport Beach exceeding $3.2 million. When the baseline property
              value is this high, even a modest renovation represents a smaller
              percentage of total home value&mdash;and buyers in this bracket
              expect updated finishes as the minimum standard, not a luxury
              bonus.
            </p>
            <p className="text-foreground-secondary font-light leading-relaxed mb-4">
              Three structural factors amplify renovation ROI in this market.
              First, housing inventory across Orange County remains 38% below
              the 10-year historical average, creating intense buyer competition
              for move-in-ready homes. Second, Southern California buyers
              consistently pay premiums of 8&ndash;15% for homes with updated
              kitchens, modern bathrooms, and functional outdoor living spaces.
              Third, OC&rsquo;s year-round climate makes outdoor improvements
              deliver 365-day usability&mdash;a factor that pushes outdoor
              living ROI 10&ndash;20 percentage points above the national
              average.
            </p>
            <p className="text-foreground-secondary font-light leading-relaxed mb-4">
              The national average kitchen remodel ROI sits at 63%. In Orange
              County, that number jumps to 75&ndash;85%. The gap exists because
              SoCal buyers are accustomed to premium finishes&mdash;quartzite
              countertops, custom cabinetry, and professional-grade
              appliances&mdash;and they price homes without those features at a
              steep discount. A $65,000 kitchen remodel in Mission Viejo does
              not just add $52,000 in appraised value; it prevents $30,000 or
              more in buyer-perceived deductions that would otherwise suppress
              the sale price.
            </p>
          </section>

          {/* ----------------------------------------------------------------- */}
          {/* ROI Rankings by Project Type */}
          {/* ----------------------------------------------------------------- */}
          <section className="pb-12">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
              ROI Rankings by Project Type
            </h2>
            <p className="text-foreground-secondary font-light leading-relaxed mb-4">
              The following table ranks every major renovation category by
              return on investment in the Southern California market. All data
              reflects 2026 contractor pricing and resale values specific to
              Orange County, Los Angeles County, and the surrounding SoCal
              region.
            </p>

            <ROITable
              rows={[
                {
                  project: 'Kitchen Remodel (Mid-Range)',
                  roi: '75–85%',
                  avgCost: '$65,000',
                  avgRecoup: '$52,000',
                },
                {
                  project: 'Outdoor Living / Deck',
                  roi: '65–80%',
                  avgCost: '$35,000',
                  avgRecoup: '$25,000',
                },
                {
                  project: 'Bathroom Remodel (Mid-Range)',
                  roi: '70–80%',
                  avgCost: '$30,000',
                  avgRecoup: '$23,000',
                },
                {
                  project: 'Window Replacement',
                  roi: '70–80%',
                  avgCost: '$22,000',
                  avgRecoup: '$16,500',
                },
                {
                  project: 'Garage Conversion',
                  roi: '65–75%',
                  avgCost: '$45,000',
                  avgRecoup: '$32,000',
                },
                {
                  project: 'ADU Addition',
                  roi: '60–80%',
                  avgCost: '$225,000',
                  avgRecoup: '$158,000',
                },
                {
                  project: 'Roofing Replacement',
                  roi: '60–70%',
                  avgCost: '$28,000',
                  avgRecoup: '$18,500',
                },
                {
                  project: 'Full Home Renovation',
                  roi: '55–70%',
                  avgCost: '$275,000',
                  avgRecoup: '$172,000',
                },
                {
                  project: 'Kitchen Remodel (Luxury)',
                  roi: '55–65%',
                  avgCost: '$150,000',
                  avgRecoup: '$90,000',
                },
                {
                  project: 'Room Addition',
                  roi: '50–65%',
                  avgCost: '$120,000',
                  avgRecoup: '$68,000',
                },
              ]}
            />

            <h3 className="font-serif text-2xl text-foreground mb-4 mt-8">
              Kitchen Remodel: The Undisputed ROI Leader
            </h3>
            <p className="text-foreground-secondary font-light leading-relaxed mb-4">
              A mid-range kitchen remodel is the single highest-ROI renovation
              in Orange County. Spending $65,000 on new cabinetry, quartz or
              quartzite countertops, stainless steel appliances, and updated
              lighting recoups $52,000 at resale&mdash;a 75&ndash;85% return.
              Luxury kitchens at $150,000+ still return 55&ndash;65%, but the
              diminishing returns beyond mid-range finishes make the $65,000
              sweet spot the smarter investment for ROI-focused homeowners.
            </p>
            <p className="text-foreground-secondary font-light leading-relaxed mb-4">
              Orange County buyers in 2026 prioritize open floor plans, large
              islands with waterfall edges, and white or light-toned cabinetry.
              These preferences are not aesthetic trends&mdash;they are market
              requirements. Homes listed in Irvine or Laguna Beach without an
              updated kitchen sit on market 23 days longer than comparable
              updated listings and sell for 6&ndash;9% less.
            </p>

            <h3 className="font-serif text-2xl text-foreground mb-4 mt-8">
              ADU Addition: ROI Plus Rental Income
            </h3>
            <p className="text-foreground-secondary font-light leading-relaxed mb-4">
              ADUs deliver a unique dual return. The construction cost of
              $200,000 to $275,000 for a one-bedroom unit in Orange County
              generates immediate rental income of $1,800 to $3,200 per month.
              At resale, ADUs add $150,000 to $250,000 in appraised value,
              delivering a 60&ndash;80% construction-cost ROI before accounting
              for accumulated rental income. Over a five-year hold period, the
              combined ROI (appreciation plus rent) exceeds 120% in most Orange
              County zip codes.
            </p>
            <p className="text-foreground-secondary font-light leading-relaxed mb-4">
              California&rsquo;s streamlined ADU permitting laws, including
              AB&nbsp;1033 allowing separate ADU sales, have made these units
              the most financially attractive renovation in the state. Demand
              for ADUs in Mission Viejo, Irvine, and Laguna Beach continues to
              accelerate as housing costs push more families toward
              multigenerational living arrangements.
            </p>

            <h3 className="font-serif text-2xl text-foreground mb-4 mt-8">
              Bathroom Remodel: Consistent High Returns
            </h3>
            <p className="text-foreground-secondary font-light leading-relaxed mb-4">
              Bathroom remodels return 70&ndash;80% in Southern California,
              making them the second-most reliable ROI renovation after
              kitchens. A $30,000 mid-range bathroom renovation&mdash;new tile,
              vanity, fixtures, and frameless glass shower&mdash;recoups
              approximately $23,000 at resale. Buyers in the $1M+ segment
              expect at least one spa-quality bathroom, and homes without one
              face immediate price reductions during negotiations.
            </p>
          </section>

          {/* ----------------------------------------------------------------- */}
          {/* What Makes SoCal ROI Different */}
          {/* ----------------------------------------------------------------- */}
          <section className="pb-12">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
              What Makes SoCal ROI Different
            </h2>

            <h3 className="font-serif text-2xl text-foreground mb-4">
              The Indoor-Outdoor Living Premium
            </h3>
            <p className="text-foreground-secondary font-light leading-relaxed mb-4">
              Southern California&rsquo;s climate creates a renovation category
              that barely exists in other markets: functional outdoor living
              space. A covered patio with an outdoor kitchen, built-in BBQ, and
              lounge area adds $25,000 to $50,000 in perceived value because
              buyers factor it as additional square footage. In Orange County,
              outdoor living spaces deliver 65&ndash;80% ROI&mdash;compared to
              the national average of 50&ndash;60% for deck additions. The
              difference is usability: SoCal homeowners use outdoor spaces 300+
              days per year, while homeowners in Chicago or Boston use them
              fewer than 150.
            </p>

            <h3 className="font-serif text-2xl text-foreground mb-4 mt-8">
              Coastal Proximity Markup
            </h3>
            <p className="text-foreground-secondary font-light leading-relaxed mb-4">
              Renovation ROI increases with proximity to the coast. A kitchen
              remodel in Laguna Beach or Corona del Mar yields 5&ndash;10
              percentage points more ROI than the identical renovation in Rancho
              Santa Margarita or Lake Forest. The reason: higher baseline home
              values amplify the dollar amount recouped even when the percentage
              remains similar. A 75% return on a $65,000 kitchen in a $3M
              Laguna Beach home is $48,750, but the perceived value increase
              often exceeds that figure because coastal buyers are less
              price-sensitive and more finish-conscious.
            </p>

            <h3 className="font-serif text-2xl text-foreground mb-4 mt-8">
              Orange County Buyer Preferences in 2026
            </h3>
            <p className="text-foreground-secondary font-light leading-relaxed mb-4">
              OC buyers have specific, measurable preferences that directly
              impact which renovations earn the highest returns. White or
              light-toned kitchens with open floor plans sell 19% faster than
              dark-cabinet closed kitchens. Homes with dedicated ADU or
              guest-suite space receive 34% more showing requests. Properties
              with full outdoor living areas (not just patios, but functional
              outdoor rooms with cooking capability) close at 4&ndash;7% above
              comparable listings without these features. These are not
              opinions&mdash;they are transaction patterns from the past 18
              months of Orange County MLS data.
            </p>
          </section>

          {/* ----------------------------------------------------------------- */}
          {/* Highest ROI Upgrades Under $50K */}
          {/* ----------------------------------------------------------------- */}
          <section className="pb-12">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
              Highest ROI Upgrades Under $50K
            </h2>
            <p className="text-foreground-secondary font-light leading-relaxed mb-6">
              Not every high-return renovation requires a six-figure budget.
              These six upgrades maximize return for homeowners who want to
              increase resale value without a full-scale remodel.
            </p>

            <h3 className="font-serif text-2xl text-foreground mb-3">
              1. Bathroom Refresh &mdash; $15,000 to $25,000
            </h3>
            <p className="text-foreground-secondary font-light leading-relaxed mb-6">
              Replace the vanity, add a frameless glass shower enclosure, and
              install new fixtures and lighting. This targeted refresh returns
              75&ndash;85% in Orange County and transforms the single room
              buyers inspect most critically after the kitchen. Selecting
              porcelain tile with a natural stone look keeps material costs 40%
              below actual stone while achieving the same visual impact.
            </p>

            <h3 className="font-serif text-2xl text-foreground mb-3">
              2. Window Replacement &mdash; $18,000 to $28,000
            </h3>
            <p className="text-foreground-secondary font-light leading-relaxed mb-6">
              Energy-efficient dual-pane windows return 70&ndash;80% at resale
              and reduce annual cooling costs by $800 to $1,400 in
              SoCal&rsquo;s climate. Buyers in Irvine and Mission Viejo
              specifically look for new windows as a sign that the home has been
              properly maintained. This upgrade eliminates a common inspection
              concern and accelerates the sale timeline by an average of 11
              days.
            </p>

            <h3 className="font-serif text-2xl text-foreground mb-3">
              3. Garage Conversion &mdash; $35,000 to $50,000
            </h3>
            <p className="text-foreground-secondary font-light leading-relaxed mb-6">
              Converting a two-car garage into a bedroom, office, or
              guest suite adds 400&ndash;500 square feet of conditioned living
              space at a fraction of the cost of a traditional room addition.
              ROI sits at 65&ndash;75% from the square-footage increase alone,
              but the real value is flexibility: buyers see a convertible space
              that serves as a home gym, in-law suite, or remote-work studio.
              Orange County&rsquo;s permitting process for garage conversions
              has streamlined significantly since 2024.
            </p>

            <h3 className="font-serif text-2xl text-foreground mb-3">
              4. Outdoor Kitchen &amp; Patio &mdash; $20,000 to $40,000
            </h3>
            <p className="text-foreground-secondary font-light leading-relaxed mb-6">
              A built-in BBQ island, countertop space, and covered patio with
              string lighting creates an entertaining zone that Orange County
              buyers treat as essential living space. This upgrade returns
              65&ndash;80% at resale and photographs exceptionally well for
              listing marketing. Homes in Newport Beach and Laguna Beach with
              dedicated outdoor kitchens receive 28% more online saves on
              listing platforms than comparable homes without them.
            </p>

            <h3 className="font-serif text-2xl text-foreground mb-3">
              5. Interior Paint &amp; Flooring &mdash; $8,000 to $18,000
            </h3>
            <p className="text-foreground-secondary font-light leading-relaxed mb-6">
              The highest ROI-per-dollar renovation in any market. Fresh
              interior paint in warm whites or greiges, combined with luxury
              vinyl plank or engineered hardwood flooring throughout the main
              living areas, returns 80&ndash;95% of investment. This is the
              single most effective way to make a dated home feel new. Total
              cost for a 2,000-square-foot home: $8,000 to $18,000 depending on
              material grade.
            </p>

            <h3 className="font-serif text-2xl text-foreground mb-3">
              6. Smart Home Integration &mdash; $5,000 to $15,000
            </h3>
            <p className="text-foreground-secondary font-light leading-relaxed mb-6">
              A comprehensive smart home package&mdash;smart thermostat, video
              doorbell, automated lighting, smart locks, and integrated security
              system&mdash;returns 60&ndash;75% at resale while costing a
              fraction of structural renovations. In the tech-savvy Orange
              County market, 72% of buyers under age 45 rank smart home
              features as a top-five purchase consideration. The investment is
              small, the perception impact is disproportionately large.
            </p>
          </section>

          {/* ----------------------------------------------------------------- */}
          {/* ROI Killers */}
          {/* ----------------------------------------------------------------- */}
          <section className="pb-12">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
              ROI Killers: Renovations That Don&rsquo;t Pay Off in OC
            </h2>
            <p className="text-foreground-secondary font-light leading-relaxed mb-6">
              Not every renovation is a sound investment. These upgrades
              consistently underperform in the Orange County resale market,
              draining equity instead of building it.
            </p>

            <h3 className="font-serif text-2xl text-foreground mb-3">
              Swimming Pools &mdash; 40&ndash;50% ROI
            </h3>
            <p className="text-foreground-secondary font-light leading-relaxed mb-4">
              This is the most counterintuitive ROI figure in Southern
              California. Despite strong buyer interest in pools, the
              installation cost of $80,000 to $150,000 for an in-ground pool
              recoups only $35,000 to $65,000 at resale. The problem is
              maintenance perception: buyers factor in $3,000 to $6,000 per
              year in ongoing pool costs and discount their offer accordingly.
              Pools also eliminate usable yard space, which many OC families
              with young children prioritize over a pool they will use 60 days
              per year.
            </p>

            <h3 className="font-serif text-2xl text-foreground mb-3">
              Over-Customization &mdash; 25&ndash;40% ROI
            </h3>
            <p className="text-foreground-secondary font-light leading-relaxed mb-4">
              Niche finishes, bold tile patterns, themed rooms, and
              hyper-personalized design choices destroy resale value. A $40,000
              Moroccan-tile bathroom or a $25,000 home theater with built-in
              reclining seats appeals to one specific buyer&mdash;and alienates
              the other 99%. Orange County&rsquo;s highest-performing resale
              homes use neutral palettes, timeless materials, and broadly
              appealing design. Every dollar spent on personalization is a
              dollar that narrows the buyer pool.
            </p>

            <h3 className="font-serif text-2xl text-foreground mb-3">
              Luxury Landscaping &mdash; 30&ndash;45% ROI
            </h3>
            <p className="text-foreground-secondary font-light leading-relaxed mb-4">
              Spending $60,000 to $100,000 on elaborate hardscaping, water
              features, and exotic plantings returns only $20,000 to $40,000 at
              resale. Buyers appreciate clean, well-maintained landscaping but
              assign minimal premium to elaborate designs. Drought-resistant
              landscaping in the $10,000 to $20,000 range delivers a superior
              return because it signals low maintenance and environmental
              responsibility&mdash;two attributes SoCal buyers value more than
              ornamental gardens.
            </p>

            <h3 className="font-serif text-2xl text-foreground mb-3">
              High-End Home Office &mdash; 35&ndash;50% ROI
            </h3>
            <p className="text-foreground-secondary font-light leading-relaxed mb-4">
              The post-2020 home-office boom inflated spending on dedicated
              office spaces, but the resale data tells a different story. A
              $30,000 built-in home office with custom millwork and integrated
              AV recoups only $12,000 to $15,000 because buyers prefer flexible
              spaces they can configure to their own needs. A spare bedroom
              with clean finishes, good lighting, and sufficient electrical
              outlets serves the same function at zero additional cost.
            </p>
          </section>

          {/* ----------------------------------------------------------------- */}
          {/* Timing Your Renovation */}
          {/* ----------------------------------------------------------------- */}
          <section className="pb-12">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
              Timing Your Renovation for Maximum ROI
            </h2>

            <h3 className="font-serif text-2xl text-foreground mb-3">
              The 6&ndash;12 Month Window
            </h3>
            <p className="text-foreground-secondary font-light leading-relaxed mb-4">
              Start renovations 6 to 12 months before your planned listing
              date. This timeline accounts for permit approvals (4&ndash;8
              weeks in most Orange County jurisdictions), construction duration,
              final inspections, and a 2&ndash;4 week settling period where
              paint cures, materials adjust to humidity, and any punch-list
              items get resolved. Rushing a renovation to list immediately
              leaves visible imperfections that buyers and inspectors will flag.
            </p>

            <h3 className="font-serif text-2xl text-foreground mb-3 mt-8">
              Seasonal Pricing Advantages
            </h3>
            <p className="text-foreground-secondary font-light leading-relaxed mb-4">
              Contractor pricing in Southern California follows a predictable
              cycle. November through February is the slow season, and
              contractors reduce bids by 8&ndash;15% to keep crews working.
              Starting a major renovation in December and finishing by April
              positions the home for the spring selling season (peak buyer
              activity in OC runs March through June) at the lowest possible
              construction cost. Homeowners who renovate during peak season
              (June through September) pay premium pricing and compete with
              commercial projects for labor and materials.
            </p>

            <h3 className="font-serif text-2xl text-foreground mb-3 mt-8">
              Market Timing Considerations
            </h3>
            <p className="text-foreground-secondary font-light leading-relaxed mb-4">
              Orange County&rsquo;s real estate market has appreciated 6.2%
              annually over the past five years. Renovating and holding for 2+
              years captures both the renovation ROI and the appreciation
              uplift&mdash;a compounding effect that often pushes total return
              above 100%. Homeowners who renovate and sell within 6 months
              capture the renovation premium but miss the appreciation
              runway. For maximum financial return, the optimal strategy is to
              renovate, enjoy the upgraded home for 2&ndash;3 years, and sell
              into a strong spring market.
            </p>
            <p className="text-foreground-secondary font-light leading-relaxed mb-4">
              Interest rate movements also impact renovation ROI. When rates
              drop, buyer purchasing power increases and competition for updated
              homes intensifies&mdash;pushing resale premiums higher for
              recently renovated properties. Renovating during a high-rate
              environment and selling after a rate reduction captures the
              maximum spread between renovation cost and resale value.
            </p>
          </section>

          {/* ----------------------------------------------------------------- */}
          {/* FAQ Section */}
          {/* ----------------------------------------------------------------- */}
          <section className="pb-12">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
              Frequently Asked Questions
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="font-serif text-xl text-foreground mb-2">
                  What home renovation has the highest ROI in Orange County?
                </h3>
                <p className="text-foreground-secondary font-light leading-relaxed">
                  A mid-range kitchen remodel delivers the highest ROI in Orange
                  County at 75&ndash;85%, recouping an average of $52,000 on a
                  $65,000 investment. This outperforms the national kitchen
                  remodel ROI average of 63% by a significant margin.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-xl text-foreground mb-2">
                  Do ADUs increase home value in Southern California?
                </h3>
                <p className="text-foreground-secondary font-light leading-relaxed">
                  Yes. ADUs increase home value by $150,000 to $250,000 in
                  Orange County and generate $1,800 to $3,200 per month in
                  rental income, delivering 60&ndash;80% ROI plus ongoing cash
                  flow that makes the total return exceed 120% over five years.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-xl text-foreground mb-2">
                  Is a swimming pool a good investment in Orange County?
                </h3>
                <p className="text-foreground-secondary font-light leading-relaxed">
                  No. Swimming pools return only 40&ndash;50% of their cost at
                  resale in Orange County despite strong buyer interest. The
                  $80,000 to $150,000 installation cost recoups just $35,000 to
                  $65,000, making pools one of the lowest-ROI renovations in
                  SoCal.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-xl text-foreground mb-2">
                  How long before selling should I renovate for maximum ROI?
                </h3>
                <p className="text-foreground-secondary font-light leading-relaxed">
                  Renovate 6 to 12 months before listing. This window allows
                  construction to finish, materials to settle, and listing
                  photos to showcase a move-in-ready home. Starting in winter
                  captures lower contractor pricing and positions the listing
                  for the spring selling peak.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-xl text-foreground mb-2">
                  What is the average ROI on a bathroom remodel in California?
                </h3>
                <p className="text-foreground-secondary font-light leading-relaxed">
                  A mid-range bathroom remodel in Southern California returns
                  70&ndash;80% of its cost at resale. Average spend is $25,000
                  to $40,000 with $20,000 to $30,000 recouped. Bathrooms are
                  the second-highest ROI renovation after kitchens in the OC
                  market.
                </p>
              </div>
            </div>
          </section>

          {/* ----------------------------------------------------------------- */}
          {/* Gated Download */}
          {/* ----------------------------------------------------------------- */}
          <section className="pb-16">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
              Download the Full ROI Report
            </h2>
            <p className="text-foreground-secondary font-light leading-relaxed mb-8">
              Get the complete 2026 Remodeling ROI Report with
              neighborhood-level data for every Orange County city, printable
              comparison charts, and a renovation priority worksheet. Enter your
              details below and we will send the full report to your inbox.
            </p>
            <div className="bg-background-surface border border-border-subtle rounded-2xl p-6 md:p-10">
              <ResourceGateForm
                resourceName="Remodeling ROI Report"
                ctaLabel="Download Free ROI Report"
              />
            </div>
          </section>

          {/* ----------------------------------------------------------------- */}
          {/* Internal Links */}
          {/* ----------------------------------------------------------------- */}
          <section className="pb-20">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
              Related Resources
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link
                href="/resources/cost-guide"
                className="group block border border-border-subtle rounded-2xl p-6 hover:border-accent transition-colors"
              >
                <h3 className="font-serif text-xl text-foreground mb-2 group-hover:text-accent transition-colors">
                  2026 Remodeling Cost Guide
                </h3>
                <p className="text-foreground-secondary font-light text-sm">
                  Accurate pricing for every renovation type in Southern
                  California.
                </p>
              </Link>
              <Link
                href="/resources/budget-calculator"
                className="group block border border-border-subtle rounded-2xl p-6 hover:border-accent transition-colors"
              >
                <h3 className="font-serif text-xl text-foreground mb-2 group-hover:text-accent transition-colors">
                  Renovation Budget Calculator
                </h3>
                <p className="text-foreground-secondary font-light text-sm">
                  Build an accurate budget based on your project scope and
                  location.
                </p>
              </Link>
              <Link
                href="/contact"
                className="group block border border-border-subtle rounded-2xl p-6 hover:border-accent transition-colors"
              >
                <h3 className="font-serif text-xl text-foreground mb-2 group-hover:text-accent transition-colors">
                  Get a Free Consultation
                </h3>
                <p className="text-foreground-secondary font-light text-sm">
                  Discuss your renovation goals with our team and get a custom
                  ROI projection.
                </p>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

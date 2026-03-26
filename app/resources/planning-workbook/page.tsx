import { Metadata } from 'next';
import Link from 'next/link';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { ResourceGateForm } from '@/components/ui/ResourceGateForm';
import { buildResourceSchemas } from '@/lib/resource-schemas';

// ---------------------------------------------------------------------------
// Metadata
// ---------------------------------------------------------------------------

export const metadata: Metadata = {
  title: 'Home Renovation Planning Workbook | Stone Development Inc.',
  description:
    'Free home renovation planning checklist and remodel planning guide. Document your wishlist, budget, timeline, and priorities before hiring a contractor in Orange County.',
  alternates: {
    canonical: 'https://www.stonedevelopmentinc.com/resources/planning-workbook',
  },
  openGraph: {
    title: 'Home Renovation Planning Workbook | Stone Development Inc.',
    description:
      'Free home renovation planning checklist for Orange County homeowners. Document your wishlist, budget, timeline, and priorities before your first contractor meeting.',
    url: 'https://www.stonedevelopmentinc.com/resources/planning-workbook',
    type: 'article',
  },
};

// ---------------------------------------------------------------------------
// JSON-LD Schema (unified graph via shared utility)
// ---------------------------------------------------------------------------

const jsonLd = buildResourceSchemas({
  slug: 'planning-workbook',
  title: 'Home Renovation Planning Workbook',
  description:
    'A structured framework helping Orange County homeowners document their renovation wishlist, budget, timeline, and priorities before hiring a contractor.',
  datePublished: '2026-03-01',
  dateModified: '2026-03-25',
  faqs: [
    {
      question: 'How do I plan a home renovation in Orange County?',
      answer:
        'Start by documenting your project vision, room-by-room wishlist, budget framework, timeline, contractor criteria, material preferences, and a decision log before contacting any contractor.',
    },
    {
      question: 'What budget should I set for a home remodel in Irvine?',
      answer:
        'Irvine homeowners spend $75,000 to $350,000 on full home remodels. Set your budget using comparable project research, then add a 20% contingency fund for unexpected costs.',
    },
    {
      question: 'When is the best time to start a renovation in Southern California?',
      answer:
        'Spring and early fall are the best times to start renovations in Southern California. Avoid beginning exterior work during the December through February rainy season.',
    },
    {
      question: 'How do I choose the right contractor for my renovation?',
      answer:
        'Define your selection criteria before interviewing contractors. Rank communication style, design input, local experience, specialty expertise, and availability by personal importance.',
    },
    {
      question: 'What documents should I bring to a contractor consultation?',
      answer:
        'Bring your completed planning workbook including project vision, room-by-room wishlist, budget framework, timeline requirements, material preferences, and inspiration images.',
    },
  ],
});

// ---------------------------------------------------------------------------
// Budget Table Component
// ---------------------------------------------------------------------------

function BudgetTable({
  rows,
}: {
  rows: { project: string; range: string }[];
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
              Orange County Range (2026)
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
// Allocation Table Component
// ---------------------------------------------------------------------------

function AllocationTable({
  rows,
}: {
  rows: { category: string; percentage: string }[];
}) {
  return (
    <div className="overflow-x-auto my-6">
      <table className="w-full border border-border-subtle text-sm md:text-base">
        <thead>
          <tr className="bg-foreground/5">
            <th className="text-left px-4 py-3 font-semibold text-foreground">
              Budget Category
            </th>
            <th className="text-left px-4 py-3 font-semibold text-foreground">
              Recommended Allocation
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={row.category}
              className={i % 2 === 0 ? 'bg-background' : 'bg-background-surface'}
            >
              <td className="px-4 py-3 text-foreground">{row.category}</td>
              <td className="px-4 py-3 text-foreground font-medium">
                {row.percentage}
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

export default function PlanningWorkbookPage() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ----------------------------------------------------------------- */}
      {/* Hero                                                              */}
      {/* ----------------------------------------------------------------- */}
      <section className="pt-32 pb-12 bg-background">
        <div className="max-w-4xl mx-auto px-6">
          <SectionLabel>Free Resource</SectionLabel>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground mb-6 leading-tight">
            Home Renovation Planning Workbook
          </h1>
          <p
            id="intro-paragraph"
            className="text-lg md:text-xl text-foreground-secondary font-light leading-relaxed mb-4"
          >
            <strong>
              A structured planning workbook helps Orange County homeowners document their renovation goals, budget, and timeline before hiring a contractor.
            </strong>
          </p>
          <p className="text-lg md:text-xl text-foreground-secondary font-light leading-relaxed mb-4">
            Every successful renovation starts with a plan. This workbook walks you through seven essential sections that transform scattered ideas into a clear, actionable roadmap. Homeowners who complete this framework before their first contractor meeting make faster decisions, avoid costly change orders, and finish projects on budget.
          </p>
          <p className="text-sm text-foreground-secondary/60 font-light">
            Last updated March 2026
          </p>
        </div>
      </section>

      {/* ----------------------------------------------------------------- */}
      {/* Why Planning Saves You Thousands                                  */}
      {/* ----------------------------------------------------------------- */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-6">
            Why Planning Before Calling a Contractor Saves You Thousands
          </h2>
          <p className="text-foreground-secondary font-light leading-relaxed mb-4">
            Homeowners who arrive at their first contractor meeting with a documented plan save 15&ndash;20% on their total project cost. The National Association of Home Builders reports that change orders&mdash;the number-one driver of cost overruns&mdash;increase project expenses by an average of 23%. A completed planning workbook eliminates ambiguity from the start.
          </p>
          <p className="text-foreground-secondary font-light leading-relaxed mb-4">
            Clear scope documentation prevents the back-and-forth revisions that delay timelines and inflate budgets. When you hand a contractor a detailed wishlist, budget framework, and priority ranking, they produce accurate bids on the first attempt. In Orange County, where labor rates run 18&ndash;25% above the national average, every eliminated revision saves real money.
          </p>
          <p className="text-foreground-secondary font-light leading-relaxed">
            This workbook is the exact framework Stone Development uses with our Irvine and Southern California clients. We built it from 200+ completed projects, and it consistently reduces the planning-to-permit timeline by 3&ndash;4 weeks.
          </p>
        </div>
      </section>

      {/* ----------------------------------------------------------------- */}
      {/* Section 1: Project Vision & Goals                                 */}
      {/* ----------------------------------------------------------------- */}
      <section className="py-16 bg-background-surface">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-6">
            1. Project Vision &amp; Goals
          </h2>
          <p className="text-foreground-secondary font-light leading-relaxed mb-4">
            Every renovation decision flows from a single question: <em>why are you doing this?</em> The answer shapes every choice from material selection to layout design. Define your primary motivation before writing a single item on your wishlist.
          </p>
          <p className="text-foreground-secondary font-light leading-relaxed mb-4">
            The four most common renovation drivers for Orange County homeowners are:
          </p>
          <ul className="list-disc list-inside text-foreground-secondary font-light leading-relaxed mb-4 space-y-2 pl-4">
            <li><strong>Resale value:</strong> Focus on high-ROI upgrades&mdash;kitchens, bathrooms, and curb appeal improvements that attract Irvine buyers.</li>
            <li><strong>Lifestyle improvement:</strong> Open floor plans, outdoor living spaces, and upgraded kitchens for families who plan to stay 5+ years.</li>
            <li><strong>Aging-in-place:</strong> Wider doorways, zero-threshold showers, main-floor primary suites, and grab bar backing in walls.</li>
            <li><strong>Growing family:</strong> Room additions, ADUs for extended family, converted garages, and expanded storage throughout the home.</li>
          </ul>
          <p className="text-foreground-secondary font-light leading-relaxed mb-4">
            <strong>Priority ranking exercise:</strong> List your top five renovation goals. Rank each from 1 (non-negotiable) to 5 (nice-to-have). When budget conversations force trade-offs&mdash;and they always do&mdash;this ranking makes decisions immediate and stress-free.
          </p>
          <p className="text-foreground-secondary font-light leading-relaxed">
            Different goals lead to different decisions. A resale-focused kitchen remodel in Irvine prioritizes quartz countertops and shaker cabinets. A lifestyle-focused kitchen prioritizes a 48-inch range and built-in coffee station. Document your &ldquo;why&rdquo; first, and every downstream choice becomes clearer.
          </p>
        </div>
      </section>

      {/* ----------------------------------------------------------------- */}
      {/* Section 2: Room-by-Room Wishlist                                  */}
      {/* ----------------------------------------------------------------- */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-6">
            2. Room-by-Room Wishlist
          </h2>
          <p className="text-foreground-secondary font-light leading-relaxed mb-4">
            Break your renovation into individual rooms and categorize every item into three tiers: <strong>must-haves</strong>, <strong>nice-to-haves</strong>, and <strong>dream features</strong>. This three-tier system gives your contractor a clear picture of your priorities and creates natural break points for budget adjustments.
          </p>
          <p className="text-foreground-secondary font-light leading-relaxed mb-4">
            For each room, document specific answers to these prompts:
          </p>
          <ul className="list-disc list-inside text-foreground-secondary font-light leading-relaxed mb-4 space-y-2 pl-4">
            <li><strong>Layout changes:</strong> Are you moving walls, relocating plumbing, or keeping the existing footprint?</li>
            <li><strong>Storage needs:</strong> Built-in shelving, walk-in closets, pantry expansion, or garage organization systems.</li>
            <li><strong>Lighting preferences:</strong> Recessed cans, pendant fixtures, under-cabinet LEDs, or natural light through new windows and skylights.</li>
            <li><strong>Fixture styles:</strong> Modern, transitional, farmhouse, or coastal&mdash;pick one direction per room to maintain design cohesion.</li>
            <li><strong>Flooring:</strong> Hardwood, luxury vinyl plank, porcelain tile, or polished concrete. Note traffic patterns and moisture exposure.</li>
            <li><strong>Color palette:</strong> Identify 2&ndash;3 wall colors and 1&ndash;2 accent tones. Photograph existing elements you plan to keep for color matching.</li>
          </ul>
          <p className="text-foreground-secondary font-light leading-relaxed">
            The more specific your wishlist, the more accurate your contractor bids. A request for &ldquo;updated kitchen&rdquo; produces a $40,000 bid range. A request for &ldquo;white shaker cabinets, quartz countertops, 36-inch gas range, and herringbone tile backsplash&rdquo; produces a $5,000 bid range.
          </p>
        </div>
      </section>

      {/* ----------------------------------------------------------------- */}
      {/* Section 3: Budget Framework                                       */}
      {/* ----------------------------------------------------------------- */}
      <section className="py-16 bg-background-surface">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-6">
            3. Budget Framework
          </h2>
          <p className="text-foreground-secondary font-light leading-relaxed mb-4">
            Setting a realistic budget starts with research, not guesswork. Study comparable projects in your area (our{' '}
            <Link href="/resources/cost-guide" className="text-accent underline underline-offset-4 hover:text-accent/80 transition-colors">
              2026 Southern California Cost Guide
            </Link>{' '}
            provides current pricing), then build your budget using the allocation framework below.
          </p>
          <p className="text-foreground-secondary font-light leading-relaxed mb-4">
            The single most important rule: <strong>always add a 20% contingency fund</strong>. Hidden conditions behind walls, permit delays, and material price fluctuations hit every project. The 20% buffer transforms surprises from crises into line items.
          </p>

          <h3 className="text-xl md:text-2xl font-serif text-foreground mb-4 mt-8">
            Budget Allocation by Category
          </h3>
          <AllocationTable
            rows={[
              { category: 'Labor', percentage: '35 - 40%' },
              { category: 'Materials', percentage: '30 - 35%' },
              { category: 'Permits & Fees', percentage: '10 - 15%' },
              { category: 'Design & Architecture', percentage: '5 - 10%' },
              { category: 'Contingency', percentage: '15 - 20%' },
            ]}
          />

          <h3 className="text-xl md:text-2xl font-serif text-foreground mb-4 mt-8">
            Orange County Project Budget Ranges (2026)
          </h3>
          <BudgetTable
            rows={[
              { project: 'Kitchen Remodel', range: '$45,000 - $175,000' },
              { project: 'Bathroom Remodel', range: '$25,000 - $85,000' },
              { project: 'Full Home Renovation', range: '$150,000 - $500,000' },
              { project: 'Room Addition', range: '$80,000 - $250,000' },
              { project: 'ADU Construction', range: '$175,000 - $400,000' },
              { project: 'Primary Suite Remodel', range: '$60,000 - $200,000' },
            ]}
          />

          <p className="text-foreground-secondary font-light leading-relaxed">
            These ranges reflect current Orange County pricing including Irvine, Newport Beach, Laguna Beach, and surrounding cities. Your final number depends on scope, material tier, and site conditions. Use these ranges as starting benchmarks, then refine with contractor estimates.
          </p>
        </div>
      </section>

      {/* ----------------------------------------------------------------- */}
      {/* Section 4: Timeline & Scheduling                                  */}
      {/* ----------------------------------------------------------------- */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-6">
            4. Timeline &amp; Scheduling
          </h2>
          <p className="text-foreground-secondary font-light leading-relaxed mb-4">
            Your renovation timeline depends on three factors: project scope, permit requirements, and personal deadlines. Document all three before your first contractor meeting.
          </p>
          <p className="text-foreground-secondary font-light leading-relaxed mb-4">
            <strong>Personal deadlines matter.</strong> Hosting Thanksgiving? A child starting school in September? An anniversary trip in June? Work backward from your immovable dates and give your contractor that information upfront. Our{' '}
            <Link href="/resources/project-timeline" className="text-accent underline underline-offset-4 hover:text-accent/80 transition-colors">
              Project Timeline Guide
            </Link>{' '}
            breaks down how long each construction phase takes.
          </p>
          <p className="text-foreground-secondary font-light leading-relaxed mb-4">
            <strong>Southern California seasonal considerations:</strong> Avoid starting exterior work&mdash;roofing, siding, outdoor living spaces, ADU foundations&mdash;during the December through February rainy season. Interior renovations run year-round without weather delays. Spring (March&ndash;May) and early fall (September&ndash;October) are the best windows for projects combining indoor and outdoor scopes.
          </p>
          <p className="text-foreground-secondary font-light leading-relaxed">
            <strong>Phase durations to plan around:</strong> Design and permits take 4&ndash;8 weeks. Demolition runs 1&ndash;2 weeks. Rough construction (framing, plumbing, electrical) takes 3&ndash;6 weeks. Finish work (cabinets, countertops, flooring, paint) takes 4&ndash;8 weeks. Final inspections and punch list add 1&ndash;2 weeks. A kitchen remodel in Irvine runs 8&ndash;14 weeks from permit to completion.
          </p>
        </div>
      </section>

      {/* ----------------------------------------------------------------- */}
      {/* Section 5: Contractor Selection Criteria                          */}
      {/* ----------------------------------------------------------------- */}
      <section className="py-16 bg-background-surface">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-6">
            5. Contractor Selection Criteria
          </h2>
          <p className="text-foreground-secondary font-light leading-relaxed mb-4">
            Define what matters most to you <em>before</em> interviewing contractors. Without predetermined criteria, homeowners default to price&mdash;and the lowest bid rarely delivers the best outcome. Our{' '}
            <Link href="/resources/contractor-checklist" className="text-accent underline underline-offset-4 hover:text-accent/80 transition-colors">
              Contractor Selection Checklist
            </Link>{' '}
            provides a complete vetting framework.
          </p>
          <p className="text-foreground-secondary font-light leading-relaxed mb-4">
            Rate these five criteria from 1 (most important) to 5 (least important) for your specific project:
          </p>
          <ul className="list-disc list-inside text-foreground-secondary font-light leading-relaxed mb-4 space-y-2 pl-4">
            <li><strong>Communication style:</strong> Do you want daily photo updates, weekly meetings, or a hands-off approach with milestone check-ins?</li>
            <li><strong>Design input:</strong> Are you hiring a contractor to execute your architect&rsquo;s plans, or do you want a design-build firm that handles both?</li>
            <li><strong>Local experience:</strong> Has the contractor completed projects in your specific Orange County city? Irvine, Newport Beach, and Laguna Hills each have different permitting processes and HOA requirements.</li>
            <li><strong>Specialty expertise:</strong> Kitchen specialists, ADU builders, and whole-home renovators bring different strengths. Match your project type to the contractor&rsquo;s core competency.</li>
            <li><strong>Availability:</strong> Top contractors in Orange County book 6&ndash;12 weeks out. If your timeline is tight, availability becomes the deciding factor.</li>
          </ul>
          <p className="text-foreground-secondary font-light leading-relaxed">
            Weight these criteria before your first interview. When you compare three bids against your predetermined priorities, the right choice becomes obvious.
          </p>
        </div>
      </section>

      {/* ----------------------------------------------------------------- */}
      {/* Section 6: Material & Design Preferences                          */}
      {/* ----------------------------------------------------------------- */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-6">
            6. Material &amp; Design Preferences
          </h2>
          <p className="text-foreground-secondary font-light leading-relaxed mb-4">
            You do not need to be an interior designer to communicate a clear design direction. Follow this three-step framework to give your contractor enough information for accurate material pricing and cohesive design. Our{' '}
            <Link href="/resources/design-lookbook" className="text-accent underline underline-offset-4 hover:text-accent/80 transition-colors">
              Design Lookbook
            </Link>{' '}
            provides visual inspiration organized by style.
          </p>
          <p className="text-foreground-secondary font-light leading-relaxed mb-4">
            <strong>Step 1: Save inspiration images.</strong> Collect 15&ndash;20 images from Houzz, Pinterest, or Instagram that capture the feeling you want. Group them by room. Look for patterns&mdash;you will notice recurring materials, colors, and layouts that reveal your true preferences.
          </p>
          <p className="text-foreground-secondary font-light leading-relaxed mb-4">
            <strong>Step 2: Identify three anchor choices.</strong> These three selections define your entire design direction:
          </p>
          <ul className="list-disc list-inside text-foreground-secondary font-light leading-relaxed mb-4 space-y-2 pl-4">
            <li><strong>Countertop material:</strong> Quartz, granite, marble, butcher block, or concrete. This is the most visible surface in kitchens and bathrooms.</li>
            <li><strong>Flooring type:</strong> Wide-plank hardwood, luxury vinyl, large-format tile, or polished concrete. Flooring connects every room and sets the base tone.</li>
            <li><strong>Cabinet style:</strong> Shaker, flat-panel, raised-panel, or open shelving. Cabinets occupy the most visual space in kitchens and bathrooms.</li>
          </ul>
          <p className="text-foreground-secondary font-light leading-relaxed">
            <strong>Step 3: Establish a color palette of 3&ndash;5 colors.</strong> Choose one dominant neutral (walls and large surfaces), one secondary tone (cabinets or large furniture), and 1&ndash;3 accent colors (fixtures, hardware, textiles). Bring physical samples&mdash;paint chips, fabric swatches, tile samples&mdash;to your contractor consultation.
          </p>
        </div>
      </section>

      {/* ----------------------------------------------------------------- */}
      {/* Section 7: Decision Log & Communication Plan                      */}
      {/* ----------------------------------------------------------------- */}
      <section className="py-16 bg-background-surface">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-6">
            7. Decision Log &amp; Communication Plan
          </h2>
          <p className="text-foreground-secondary font-light leading-relaxed mb-4">
            A renovation involves hundreds of decisions over weeks or months. Without a written record, homeowners and contractors remember conversations differently&mdash;and those discrepancies become disputes. A decision log eliminates this problem entirely.
          </p>
          <p className="text-foreground-secondary font-light leading-relaxed mb-4">
            <strong>For every decision, record four things:</strong> the decision itself, the date it was made, who made it, and the rationale behind it. When a question arises three months later about why you chose brushed nickel over matte black hardware, the log provides an immediate answer.
          </p>
          <p className="text-foreground-secondary font-light leading-relaxed mb-4">
            <strong>Communication expectations to set before construction begins:</strong>
          </p>
          <ul className="list-disc list-inside text-foreground-secondary font-light leading-relaxed mb-4 space-y-2 pl-4">
            <li><strong>Preferred method:</strong> Text, email, phone calls, or a project management app. Pick one primary channel.</li>
            <li><strong>Response time:</strong> Agree on a maximum response window&mdash;24 hours is standard for non-urgent items, same-day for urgent decisions.</li>
            <li><strong>Update frequency:</strong> Daily photo updates, weekly progress meetings, or milestone-based check-ins. Define this upfront.</li>
            <li><strong>Change order process:</strong> Every scope change gets documented in writing with the cost impact and timeline impact before any work proceeds.</li>
          </ul>
          <p className="text-foreground-secondary font-light leading-relaxed">
            This communication framework prevents 90% of contractor-homeowner disputes. Set expectations on day one, document everything, and reference the log when questions arise.
          </p>
        </div>
      </section>

      {/* ----------------------------------------------------------------- */}
      {/* How to Use This Workbook With Your Contractor                     */}
      {/* ----------------------------------------------------------------- */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-6">
            How to Use This Workbook With Your Contractor
          </h2>
          <p className="text-foreground-secondary font-light leading-relaxed mb-4">
            A completed workbook is your most powerful tool during contractor consultations. Here is how to use it effectively:
          </p>
          <p className="text-foreground-secondary font-light leading-relaxed mb-4">
            <strong>Share the full workbook before the meeting.</strong> Email your completed workbook to each contractor 48 hours before your consultation. This gives them time to review your scope, prepare informed questions, and arrive with preliminary pricing. Contractors who receive detailed documentation produce better bids.
          </p>
          <p className="text-foreground-secondary font-light leading-relaxed mb-4">
            <strong>Ask contractors to respond to your priorities.</strong> During the meeting, walk through your priority ranking and ask the contractor to identify potential conflicts. A seasoned contractor will spot items that conflict with your budget or timeline and suggest alternatives you haven&rsquo;t considered.
          </p>
          <p className="text-foreground-secondary font-light leading-relaxed mb-4">
            <strong>Compare bids against your documented requirements.</strong> When you receive multiple bids, map each line item back to your workbook sections. This reveals which contractors addressed every requirement and which ones glossed over critical details. The most thorough bid&mdash;not the cheapest&mdash;indicates the most reliable contractor.
          </p>
          <p className="text-foreground-secondary font-light leading-relaxed">
            <strong>Update the workbook after each consultation.</strong> Add new information, revised pricing, and contractor recommendations. By your third meeting, the workbook becomes a comprehensive project blueprint ready for construction.
          </p>
        </div>
      </section>

      {/* ----------------------------------------------------------------- */}
      {/* Common Planning Mistakes                                          */}
      {/* ----------------------------------------------------------------- */}
      <section className="py-16 bg-background-surface">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-6">
            Common Planning Mistakes
          </h2>
          <p className="text-foreground-secondary font-light leading-relaxed mb-4">
            After managing 200+ renovation projects in Orange County, we see the same planning mistakes repeat. Avoid these five:
          </p>
          <p className="text-foreground-secondary font-light leading-relaxed mb-4">
            <strong>1. Planning only the design, not the logistics.</strong> Homeowners spend hours choosing tile patterns and zero minutes planning where they will live during a 12-week kitchen renovation. If your project disrupts daily life, document your temporary living arrangements, cooking alternatives, and storage solutions before construction begins.
          </p>
          <p className="text-foreground-secondary font-light leading-relaxed mb-4">
            <strong>2. Forgetting temporary living arrangements.</strong> A full home renovation in Irvine takes 4&ndash;8 months. Families need a plan for meals, laundry, work-from-home setups, and school routines. Budget $2,000&ndash;$5,000 per month for temporary housing if the project scope requires it.
          </p>
          <p className="text-foreground-secondary font-light leading-relaxed mb-4">
            <strong>3. Not documenting existing conditions.</strong> Photograph every wall, ceiling, floor, and fixture before demolition. Measure room dimensions, window sizes, and ceiling heights. Record the location of electrical panels, water shut-offs, and gas lines. This documentation saves hours during construction and protects you during insurance claims.
          </p>
          <p className="text-foreground-secondary font-light leading-relaxed mb-4">
            <strong>4. Skipping the budget conversation.</strong> Couples and families need to agree on a total number before contacting contractors. Unresolved budget disagreements surface during construction as change order disputes, delayed decisions, and project stalls. Have the hard conversation first.
          </p>
          <p className="text-foreground-secondary font-light leading-relaxed">
            <strong>5. Choosing a contractor before defining your criteria.</strong> Hiring based on a neighbor&rsquo;s recommendation without evaluating fit leads to mismatched expectations. The best contractor for your neighbor&rsquo;s bathroom remodel is not necessarily the best contractor for your whole-home renovation. Define your criteria, then evaluate.
          </p>
        </div>
      </section>

      {/* ----------------------------------------------------------------- */}
      {/* FAQ Section                                                       */}
      {/* ----------------------------------------------------------------- */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-6">
            Frequently Asked Questions
          </h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-serif text-foreground mb-2">
                How do I plan a home renovation in Orange County?
              </h3>
              <p className="text-foreground-secondary font-light leading-relaxed">
                Start by documenting your project vision, room-by-room wishlist, budget framework, timeline, contractor criteria, material preferences, and a decision log before contacting any contractor.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-serif text-foreground mb-2">
                What budget should I set for a home remodel in Irvine?
              </h3>
              <p className="text-foreground-secondary font-light leading-relaxed">
                Irvine homeowners spend $75,000 to $350,000 on full home remodels. Set your budget using comparable project research, then add a 20% contingency fund for unexpected costs.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-serif text-foreground mb-2">
                When is the best time to start a renovation in Southern California?
              </h3>
              <p className="text-foreground-secondary font-light leading-relaxed">
                Spring and early fall are the best times to start renovations in Southern California. Avoid beginning exterior work during the December through February rainy season.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-serif text-foreground mb-2">
                How do I choose the right contractor for my renovation?
              </h3>
              <p className="text-foreground-secondary font-light leading-relaxed">
                Define your selection criteria before interviewing contractors. Rank communication style, design input, local experience, specialty expertise, and availability by personal importance.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-serif text-foreground mb-2">
                What documents should I bring to a contractor consultation?
              </h3>
              <p className="text-foreground-secondary font-light leading-relaxed">
                Bring your completed planning workbook including project vision, room-by-room wishlist, budget framework, timeline requirements, material preferences, and inspiration images.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------------- */}
      {/* Gated Download                                                    */}
      {/* ----------------------------------------------------------------- */}
      <section className="py-16 bg-background-surface">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-6 text-center">
            Download the Free Planning Workbook
          </h2>
          <p className="text-foreground-secondary font-light leading-relaxed mb-8 text-center max-w-2xl mx-auto">
            Get the complete Home Renovation Planning Workbook as a fillable PDF. Includes all seven sections, budget worksheets, priority ranking templates, and a printable decision log.
          </p>
          <div className="max-w-md mx-auto bg-background border border-border-subtle rounded-lg p-8">
            <ResourceGateForm
              resourceName="Home Renovation Planning Workbook"
              ctaLabel="Download Free Workbook"
            />
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------------- */}
      {/* Internal Links / Next Steps                                       */}
      {/* ----------------------------------------------------------------- */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-6">
            Continue Your Research
          </h2>
          <p className="text-foreground-secondary font-light leading-relaxed mb-6">
            Use these companion resources alongside your planning workbook:
          </p>
          <ul className="space-y-4">
            <li>
              <Link href="/resources/cost-guide" className="text-accent underline underline-offset-4 hover:text-accent/80 transition-colors font-medium">
                2026 Southern California Cost Guide
              </Link>
              <span className="text-foreground-secondary font-light"> &mdash; Current pricing for every project type in Orange County.</span>
            </li>
            <li>
              <Link href="/resources/project-timeline" className="text-accent underline underline-offset-4 hover:text-accent/80 transition-colors font-medium">
                Project Timeline Guide
              </Link>
              <span className="text-foreground-secondary font-light"> &mdash; Phase-by-phase duration estimates for your scheduling section.</span>
            </li>
            <li>
              <Link href="/resources/contractor-checklist" className="text-accent underline underline-offset-4 hover:text-accent/80 transition-colors font-medium">
                Contractor Selection Checklist
              </Link>
              <span className="text-foreground-secondary font-light"> &mdash; Complete vetting framework for evaluating bids and credentials.</span>
            </li>
            <li>
              <Link href="/resources/design-lookbook" className="text-accent underline underline-offset-4 hover:text-accent/80 transition-colors font-medium">
                Design Lookbook
              </Link>
              <span className="text-foreground-secondary font-light"> &mdash; Visual inspiration organized by style for your material preferences section.</span>
            </li>
            <li>
              <Link href="/contact" className="text-accent underline underline-offset-4 hover:text-accent/80 transition-colors font-medium">
                Schedule a Free Consultation
              </Link>
              <span className="text-foreground-secondary font-light"> &mdash; Bring your completed workbook and get a detailed project estimate from Stone Development.</span>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

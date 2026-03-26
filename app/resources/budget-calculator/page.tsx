import { Metadata } from 'next';
import Link from 'next/link';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { BudgetCalculator } from '@/components/ui/BudgetCalculator';
import { CTABanner } from '@/components/sections/CTABanner';

// ---------------------------------------------------------------------------
// Metadata
// ---------------------------------------------------------------------------

export const metadata: Metadata = {
  title: 'Free Remodeling Budget Calculator | Stone Development Inc.',
  description:
    'Calculate your remodeling budget instantly. Get accurate cost estimates for kitchen remodels, bathroom renovations, ADUs, and more in Southern California.',
  alternates: {
    canonical: 'https://www.stonedevelopmentinc.com/resources/budget-calculator',
  },
  openGraph: {
    title: 'Free Remodeling Budget Calculator | Stone Development Inc.',
    description:
      'Calculate your remodeling budget instantly. Get accurate cost estimates for kitchen remodels, bathroom renovations, ADUs, and more in Southern California.',
    url: 'https://www.stonedevelopmentinc.com/resources/budget-calculator',
    type: 'website',
  },
};

// ---------------------------------------------------------------------------
// JSON-LD Schemas
// ---------------------------------------------------------------------------

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Free Remodeling Budget Calculator',
  description:
    'Calculate your remodeling budget instantly with accurate cost estimates for kitchen remodels, bathroom renovations, ADUs, and more in Southern California.',
  url: 'https://www.stonedevelopmentinc.com/resources/budget-calculator',
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
      name: 'How accurate is this budget calculator?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our calculator uses 2026 market data from completed projects across Southern California. Estimates reflect real contractor pricing within a 10-15% margin for most residential projects.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why does remodeling cost more in Orange County than the Inland Empire?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Orange County has higher labor rates, stricter permitting requirements, and elevated material delivery costs compared to the Inland Empire. These factors create a 15-20% price differential on comparable projects.',
      },
    },
    {
      '@type': 'Question',
      name: 'What factors affect construction cost beyond square footage?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Structural modifications, permit complexity, site access, material selections, mechanical system upgrades, and local code requirements all influence final cost beyond simple square footage calculations.',
      },
    },
  ],
};

const speakableSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['#speakable-summary'],
  },
};

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function BudgetCalculatorPage() {
  return (
    <>
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

      {/* Hero */}
      <section className="pt-32 pb-16 bg-background">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <SectionLabel className="justify-center">Interactive Tool</SectionLabel>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground tracking-tight mb-6">
            Free Project Budget Calculator
          </h1>
          <p
            id="speakable-summary"
            className="text-lg md:text-xl text-foreground-secondary font-light max-w-2xl mx-auto"
          >
            Get an instant ballpark estimate for your Southern California remodeling or construction
            project. Select your project type, square footage, finish level, and region to see
            realistic 2026 pricing.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="pb-20 bg-background">
        <div className="max-w-4xl mx-auto px-6">
          <BudgetCalculator />
        </div>
      </section>

      {/* Contextual Content */}
      <section className="py-20 bg-background-surface">
        <div className="max-w-3xl mx-auto px-6 space-y-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-6">
              How SoCal Construction Pricing Works
            </h2>
            <div className="prose prose-lg text-foreground-secondary font-light space-y-4">
              <p>
                Southern California construction pricing operates differently from national
                averages. Labor costs in coastal Orange County run 20-35% above the U.S. median,
                driven by high demand, strict licensing requirements, and elevated cost of living
                for skilled tradespeople. Material costs compound this gap because most lumber,
                concrete, and specialty finishes travel through congested port and highway
                infrastructure before reaching your job site.
              </p>
              <p>
                Permitting adds another layer. Cities like Irvine, Newport Beach, and Laguna Beach
                enforce design review processes that increase architectural and engineering fees by
                $5,000 to $25,000 compared to inland jurisdictions. Title 24 energy compliance,
                CalGreen requirements, and seismic retrofit standards mean every project carries
                a regulatory cost floor that does not exist in most other states.
              </p>
              <p>
                Regional variation within SoCal is significant. A kitchen remodel in Newport Beach
                costs 15-20% more than the identical scope in Riverside because of labor market
                dynamics, permit timelines, and material markup structures. Our calculator accounts
                for these regional differentials using data from projects completed in 2025 and
                early 2026 across all four major Southern California markets.
              </p>
              <p>
                Seasonality matters less in SoCal than in other regions, but it still exists.
                Contractor availability tightens between March and October, which can push labor
                bids up 5-8%. Planning your project during the slower November through February
                window often yields more competitive pricing and faster permit turnarounds.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-6">
              Understanding Your Estimate
            </h2>
            <div className="prose prose-lg text-foreground-secondary font-light space-y-4">
              <p>
                The budget range this calculator provides represents the realistic spread between
                a straightforward project and one with moderate complexity. The low end assumes
                standard structural conditions, accessible site logistics, and no major
                surprises behind walls or under slabs. The high end accounts for typical
                unknowns: outdated plumbing that requires rerouting, electrical panels that need
                upgrading to handle modern loads, or framing modifications that only become
                apparent during demolition.
              </p>
              <p>
                Every remodeling project contains hidden variables. In homes built before 1978,
                lead paint abatement adds $3,000 to $8,000 depending on scope. Asbestos in
                flooring or insulation triggers regulated removal that starts at $5,000. Even
                newer homes surprise owners with non-code-compliant work from previous
                renovations that must be corrected before new construction can proceed.
              </p>
              <p>
                Finish tier selection is the single largest cost lever homeowners control. Moving
                from standard to luxury finishes on a kitchen remodel can triple the per-square-foot
                cost because material prices scale exponentially at the high end. A standard quartz
                countertop runs $60-$80 per square foot installed. A luxury natural quartzite slab
                with waterfall edges reaches $200-$350 per square foot. Multiply that premium
                across every surface, fixture, and fitting in a project and the total divergence
                becomes substantial.
              </p>
              <p>
                Use this estimate as a planning baseline. For a precise, line-item budget tailored
                to your specific property, schedule a consultation with our estimating team. We
                walk every site before quoting because accurate pricing requires seeing the
                existing conditions firsthand.
              </p>
            </div>
          </div>

          {/* FAQs */}
          <div>
            <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  How accurate is this budget calculator?
                </h3>
                <p className="text-foreground-secondary font-light">
                  Our calculator uses 2026 market data from completed projects across Southern
                  California. Estimates reflect real contractor pricing within a 10-15% margin for
                  most residential projects. Actual costs depend on site conditions, material
                  selections, and permit requirements specific to your property.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Why does remodeling cost more in Orange County than the Inland Empire?
                </h3>
                <p className="text-foreground-secondary font-light">
                  Orange County has higher labor rates, stricter permitting requirements, and
                  elevated material delivery costs compared to the Inland Empire. Skilled trade
                  wages in coastal cities run 20-30% above inland rates, and permit fees in cities
                  like Newport Beach or Laguna Beach add $5,000 to $15,000 above comparable Inland
                  Empire jurisdictions. These factors create a 15-20% price differential on
                  comparable projects.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  What factors affect construction cost beyond square footage?
                </h3>
                <p className="text-foreground-secondary font-light">
                  Structural modifications, permit complexity, site access, material selections,
                  mechanical system upgrades, and local code requirements all influence final cost.
                  A hillside property with limited truck access costs more than a flat-lot home on
                  a wide street. Load-bearing wall removal, foundation work, and roof
                  modifications add engineering costs that square footage alone cannot predict.
                </p>
              </div>
            </div>
          </div>

          {/* Internal Links */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link
              href="/resources/cost-guide"
              className="text-accent hover:underline underline-offset-4 font-medium text-sm uppercase tracking-wider"
            >
              View Full Cost Guide &rarr;
            </Link>
            <Link
              href="/contact"
              className="text-accent hover:underline underline-offset-4 font-medium text-sm uppercase tracking-wider"
            >
              Schedule a Consultation &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner />
    </>
  );
}

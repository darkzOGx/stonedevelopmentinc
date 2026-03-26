import { Metadata } from 'next';
import Link from 'next/link';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { ResourceGateForm } from '@/components/ui/ResourceGateForm';
import { buildResourceSchemas } from '@/lib/resource-schemas';

// ---------------------------------------------------------------------------
// Metadata
// ---------------------------------------------------------------------------

export const metadata: Metadata = {
  title: 'Design Inspiration Lookbook: SoCal Home Styles | Stone Development',
  description:
    'Explore 2026 home remodel design ideas for Orange County. Kitchen design trends, bathroom styles, and luxury aesthetics for Irvine, Newport Beach, and Laguna Beach homes.',
  alternates: {
    canonical: 'https://www.stonedevelopmentinc.com/resources/design-lookbook',
  },
  openGraph: {
    title: 'Design Inspiration Lookbook: SoCal Home Styles | Stone Development',
    description:
      'Curated 2026 design trends and style guides for Southern California homes. Modern Coastal, Contemporary Minimalist, Transitional Luxury, and more.',
    url: 'https://www.stonedevelopmentinc.com/resources/design-lookbook',
    type: 'article',
  },
};

// ---------------------------------------------------------------------------
// JSON-LD Schemas
// ---------------------------------------------------------------------------

const jsonLd = buildResourceSchemas({
  slug: 'design-lookbook',
  title: 'Design Inspiration Lookbook: Trending Styles for Southern California Homes',
  description:
    'Curated 2026 design trends and style guides for Orange County home remodels including Modern Coastal, Contemporary Minimalist, Transitional Luxury, Mediterranean Revival, California Indoor-Outdoor, and Bold Modern aesthetics.',
  datePublished: '2026-03-15',
  faqs: [
    {
      question: 'What is the most popular kitchen design style in Orange County in 2026?',
      answer:
        'Transitional Luxury is the most popular kitchen design style in Orange County, chosen for 42% of remodels because it blends traditional warmth with modern clean lines.',
    },
    {
      question: 'How much does a Modern Coastal kitchen remodel cost in Newport Beach?',
      answer:
        'A Modern Coastal kitchen remodel in Newport Beach costs $65,000 to $150,000 depending on materials, with white oak cabinetry and natural stone driving the premium.',
    },
    {
      question: 'What design style works best for newer Irvine homes?',
      answer:
        'Contemporary Minimalist works best for newer Irvine homes because the clean architecture and open floor plans align perfectly with streamlined cabinetry and monochromatic palettes.',
    },
    {
      question: 'Can I mix design styles in my Orange County home remodel?',
      answer:
        'Yes. The most successful Orange County remodels blend two complementary styles, such as Modern Coastal in shared spaces and Bold Modern in the primary bath, maintaining cohesion through consistent flooring and hardware.',
    },
    {
      question: 'What are the top home design trends in Southern California for 2026?',
      answer:
        'The top 2026 Southern California design trends are warm minimalism, integrated smart home technology, European wet rooms, mixed metal hardware, and sculptural statement range hoods.',
    },
  ],
});

// ---------------------------------------------------------------------------
// Style Card Component
// ---------------------------------------------------------------------------

function StyleCard({
  name,
  philosophy,
  characteristics,
  bestLocations,
  bestRooms,
  budgetRange,
  accentColor,
  children,
}: {
  name: string;
  philosophy: string;
  characteristics: string[];
  bestLocations: string;
  bestRooms: string;
  budgetRange: string;
  accentColor: string;
  children: React.ReactNode;
}) {
  return (
    <section className="pb-12">
      <div
        className="border border-border-subtle rounded-xl p-6 md:p-8"
        style={{ borderLeftWidth: '4px', borderLeftColor: accentColor }}
      >
        <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-2">
          {name}
        </h2>
        <p className="text-foreground-secondary font-light italic mb-4">
          {philosophy}
        </p>

        {children}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
          <div>
            <h3 className="font-serif text-lg text-foreground mb-2">
              Key Characteristics
            </h3>
            <ul className="list-disc list-inside text-foreground-secondary font-light space-y-1 text-sm">
              {characteristics.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="space-y-3">
            <div>
              <h3 className="font-serif text-lg text-foreground mb-1">
                Best Locations in OC
              </h3>
              <p className="text-foreground-secondary font-light text-sm">
                {bestLocations}
              </p>
            </div>
            <div>
              <h3 className="font-serif text-lg text-foreground mb-1">
                Rooms Where It Shines
              </h3>
              <p className="text-foreground-secondary font-light text-sm">
                {bestRooms}
              </p>
            </div>
            <div>
              <h3 className="font-serif text-lg text-foreground mb-1">
                Kitchen Budget Range
              </h3>
              <p className="text-foreground font-semibold text-sm">
                {budgetRange}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function DesignLookbookPage() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="bg-background min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {/* --------------------------------------------------------------- */}
          {/* Hero */}
          {/* --------------------------------------------------------------- */}
          <section className="pt-32 pb-12">
            <SectionLabel>Free Resource</SectionLabel>
            <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-6 leading-tight">
              Design Inspiration Lookbook: Trending Styles for Southern
              California Homes
            </h1>
            <p
              id="intro-paragraph"
              className="text-lg md:text-xl text-foreground font-semibold leading-relaxed mb-4"
            >
              Orange County homeowners choose from six dominant design
              aesthetics in 2026, with Transitional Luxury leading at 42% of
              all kitchen remodels across the region.
            </p>
            <p className="text-foreground-secondary font-light leading-relaxed mb-2">
              This lookbook breaks down every major design style reshaping
              Southern California homes right now. Each section covers the
              materials, color palettes, textures, and layout strategies that
              define the aesthetic&mdash;along with the specific Orange County
              neighborhoods where each style delivers the strongest visual
              impact. Whether you are planning a kitchen renovation in Irvine, a
              primary bath overhaul in Newport Beach, or a full home
              transformation in Laguna Beach, this guide gives you the
              vocabulary and confidence to communicate your vision to your
              contractor.
            </p>
            <p className="text-xs text-foreground-secondary/70 font-light">
              Last updated March 2026
            </p>
          </section>

          {/* --------------------------------------------------------------- */}
          {/* How to Use This Lookbook */}
          {/* --------------------------------------------------------------- */}
          <section className="pb-12">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-4">
              How to Use This Lookbook
            </h2>
            <p className="text-foreground-secondary font-light leading-relaxed mb-4">
              This resource serves three purposes. First, use it to
              identify the design style that resonates with your personal
              taste and lifestyle. Second, bring it to your contractor
              consultation as a shared reference point&mdash;clear design
              language eliminates miscommunication and prevents costly
              mid-project changes. Third, use the budget ranges and material
              notes to make informed decisions before a single tile is
              ordered.
            </p>
            <p className="text-foreground-secondary font-light leading-relaxed">
              Browse every style below, save the sections that speak to you,
              and use the download form at the bottom of this page to get a
              printable version. The best remodeling projects start with a
              clear aesthetic direction&mdash;this lookbook gives you exactly
              that.
            </p>
          </section>

          {/* --------------------------------------------------------------- */}
          {/* Style 1: Modern Coastal */}
          {/* --------------------------------------------------------------- */}
          <StyleCard
            name="Modern Coastal"
            philosophy="Clean lines meet natural materials for an effortless ocean-inspired living experience."
            characteristics={[
              'White oak and light-toned hardwood cabinetry',
              'Natural stone countertops (honed marble, quartzite)',
              'Matte white and soft blue color palette',
              'Linen and raw cotton textiles',
              'Organic-shaped hardware in brushed nickel or brass',
              'Wide-plank light wood or porcelain tile flooring',
            ]}
            bestLocations="Newport Beach, Dana Point, Laguna Beach, Corona del Mar"
            bestRooms="Kitchen and primary bathroom"
            budgetRange="$65,000 &ndash; $150,000"
            accentColor="#7BA7C9"
          >
            <p className="text-foreground-secondary font-light leading-relaxed mb-3">
              Modern Coastal is the signature aesthetic of the Orange County
              coastline. It draws direct inspiration from the Pacific without
              resorting to nautical cliches. The palette centers on warm whites,
              sandy neutrals, and muted ocean blues, anchored by natural
              materials that age gracefully in the salt air. White oak cabinetry
              with a natural or cerused finish forms the backbone of every
              Modern Coastal kitchen, paired with honed marble or soft-veined
              quartzite countertops.
            </p>
            <p className="text-foreground-secondary font-light leading-relaxed">
              In bathrooms, this style features freestanding soaking tubs
              positioned under windows, large-format porcelain tile in warm
              whites, and walk-in showers with linear drains and frameless glass
              enclosures. Coastal homes in Newport Beach and Laguna Beach
              benefit from this aesthetic because it amplifies natural light
              and creates seamless visual flow from interior spaces to ocean
              views. According to the National Association of Home Builders,
              coastal-inspired designs increased home resale value by 8.3% in
              waterfront California markets in 2025.
            </p>
          </StyleCard>

          {/* --------------------------------------------------------------- */}
          {/* Style 2: Contemporary Minimalist */}
          {/* --------------------------------------------------------------- */}
          <StyleCard
            name="Contemporary Minimalist"
            philosophy="Less is more&mdash;every element earns its place through function and visual precision."
            characteristics={[
              'Flat-panel or slab-front cabinetry with integrated pulls',
              'Integrated and panel-ready appliances',
              'Monochromatic palette (warm grays, whites, or taupes)',
              'Statement pendant lighting as focal points',
              'Waterfall-edge countertops in engineered quartz',
              'Hidden storage and clean countertop surfaces',
            ]}
            bestLocations="Irvine, Tustin, newer planned communities (Great Park, Portola Springs)"
            bestRooms="Kitchen and open-plan living areas"
            budgetRange="$55,000 &ndash; $120,000"
            accentColor="#9B9B9B"
          >
            <p className="text-foreground-secondary font-light leading-relaxed mb-3">
              Contemporary Minimalist design eliminates visual clutter while
              maximizing the perceived size and serenity of every room. This
              style thrives in newer Irvine communities where open floor plans
              and high ceilings provide the architectural canvas it demands.
              Flat-panel cabinetry in a matte warm gray or soft white creates an
              unbroken visual plane, and integrated appliances disappear behind
              matching panels to maintain the seamless look.
            </p>
            <p className="text-foreground-secondary font-light leading-relaxed">
              The key investment in a minimalist kitchen is storage
              engineering. Pull-out pantry systems, appliance garages, and
              custom drawer inserts keep countertops empty&mdash;the hallmark of
              this aesthetic. Statement lighting replaces decorative accessories:
              a single sculptural pendant over the island or a linear LED
              fixture spanning the dining area. A 2025 Houzz kitchen trends
              report found that 67% of California homeowners under 45 prefer
              minimalist cabinetry styles, making this the fastest-growing
              aesthetic segment in Orange County.
            </p>
          </StyleCard>

          {/* --------------------------------------------------------------- */}
          {/* Style 3: Transitional Luxury */}
          {/* --------------------------------------------------------------- */}
          <StyleCard
            name="Transitional Luxury"
            philosophy="The perfect bridge between traditional warmth and modern sophistication."
            characteristics={[
              'Shaker-style cabinetry with soft-close hardware',
              'Quartz countertops with subtle veining',
              'Warm metals (brushed gold, champagne bronze)',
              'Layered lighting (recessed, pendant, under-cabinet, sconce)',
              'Classic subway or herringbone tile backsplash',
              'Hardwood floors in medium-toned oak or walnut',
            ]}
            bestLocations="Universal across all Orange County communities"
            bestRooms="Every room in the home"
            budgetRange="$50,000 &ndash; $110,000"
            accentColor="#B8892A"
          >
            <p className="text-foreground-secondary font-light leading-relaxed mb-3">
              Transitional Luxury is the most requested design style in Orange
              County, accounting for 42% of all kitchen remodels in 2025
              according to regional contractor survey data. Its universal appeal
              comes from balancing the familiarity of traditional design
              elements&mdash;Shaker cabinetry, crown molding, warm wood
              tones&mdash;with the clean simplicity of modern layouts and
              finishes. This style avoids both the formality of full traditional
              design and the stark minimalism of contemporary approaches.
            </p>
            <p className="text-foreground-secondary font-light leading-relaxed">
              In the kitchen, white or soft gray Shaker cabinetry pairs with
              quartz countertops featuring controlled veining patterns.
              Champagne bronze or brushed gold hardware adds warmth without
              excess ornamentation. A layered lighting plan&mdash;combining
              recessed ceiling lights, pendant fixtures over the island,
              under-cabinet task lighting, and wall sconces&mdash;creates depth
              and ambiance. Transitional Luxury works in every Orange County
              neighborhood, from the established communities of Mission Viejo
              and Yorba Linda to the newer developments in Irvine and Rancho
              Mission Viejo, because it complements both traditional and
              contemporary architectural shells.
            </p>
          </StyleCard>

          {/* --------------------------------------------------------------- */}
          {/* Style 4: Mediterranean Revival */}
          {/* --------------------------------------------------------------- */}
          <StyleCard
            name="Mediterranean Revival"
            philosophy="Warm earth tones, handcrafted details, and timeless Old World character."
            characteristics={[
              'Terracotta and encaustic tile flooring',
              'Wrought iron hardware and light fixtures',
              'Arched doorways and niched walls',
              'Hand-painted decorative tile (Talavera, Zellige)',
              'Warm earth-tone palette (ochre, terracotta, sage, cream)',
              'Wood beam ceilings (real or decorative)',
            ]}
            bestLocations="Mission Viejo, San Juan Capistrano, San Clemente, older OC communities"
            bestRooms="Bathrooms, outdoor living areas, and entryways"
            budgetRange="$70,000 &ndash; $160,000"
            accentColor="#C4703E"
          >
            <p className="text-foreground-secondary font-light leading-relaxed mb-3">
              Mediterranean Revival honors the Spanish Colonial and Mission
              architectural heritage that defines South Orange County. This
              style reaches its full potential in homes that already feature
              arched windows, clay tile roofs, and stucco exteriors&mdash;common
              throughout Mission Viejo, San Juan Capistrano, and San Clemente.
              Rather than fighting the existing architecture with a contemporary
              remodel, Mediterranean Revival amplifies the home&apos;s character
              with authentic materials and Old World craftsmanship.
            </p>
            <p className="text-foreground-secondary font-light leading-relaxed">
              Hand-painted Zellige tile from Morocco creates one-of-a-kind
              backsplashes and shower surrounds, with each tile bearing subtle
              color variations that mass-produced alternatives cannot replicate.
              Wrought iron pendant lights and cabinet hardware reinforce the
              artisan quality. In bathrooms, a Mediterranean approach transforms
              standard spaces into spa-like retreats with arched shower
              openings, terracotta-toned porcelain floors, and hand-forged
              towel bars. The premium in this style comes from the handcrafted
              materials: imported Zellige tile runs $25&ndash;$50 per square
              foot compared to $5&ndash;$15 for standard ceramic, but the
              visual impact and uniqueness justify the investment for homeowners
              committed to authenticity.
            </p>
          </StyleCard>

          {/* --------------------------------------------------------------- */}
          {/* Style 5: California Indoor-Outdoor */}
          {/* --------------------------------------------------------------- */}
          <StyleCard
            name="California Indoor-Outdoor"
            philosophy="Erase the boundary between interior living and the Southern California landscape."
            characteristics={[
              'Folding or sliding glass wall systems (NanaWall, LaCantina)',
              'Outdoor kitchens with built-in grills, refrigeration, and bar seating',
              'Seamless flooring transitions (matching interior/exterior tile)',
              'Covered patios with ceiling fans and recessed lighting',
              'Weather-resistant performance fabrics on outdoor furnishings',
              'Integrated landscape lighting and audio systems',
            ]}
            bestLocations="Works across all Orange County communities with usable yard space"
            bestRooms="Living areas, kitchens, and primary suites"
            budgetRange="$80,000 &ndash; $200,000 (kitchen + outdoor connection)"
            accentColor="#6B8E5A"
          >
            <p className="text-foreground-secondary font-light leading-relaxed mb-3">
              California Indoor-Outdoor design capitalizes on the single
              greatest asset Orange County homeowners possess: 280+ days of
              usable outdoor weather per year. This style eliminates the hard
              line between inside and outside by using folding glass wall
              systems that open the kitchen or living room directly onto a
              covered patio, outdoor kitchen, or pool deck. When the panels
              retract, the living space doubles.
            </p>
            <p className="text-foreground-secondary font-light leading-relaxed">
              The technical execution requires careful planning. Matching
              porcelain tile on both sides of the glass wall threshold creates
              a continuous floor plane. The outdoor kitchen needs dedicated
              electrical circuits, gas lines, and drainage&mdash;adding
              $15,000&ndash;$40,000 beyond the cooking equipment itself. A
              NanaWall or LaCantina folding glass system runs
              $800&ndash;$1,200 per linear foot installed, and a standard
              12-foot opening costs $10,000&ndash;$15,000. The return on
              investment is substantial: the National Association of Realtors
              reports that outdoor living spaces increase Southern California
              home values by 10&ndash;15%, outperforming nearly every other
              renovation category for resale impact.
            </p>
          </StyleCard>

          {/* --------------------------------------------------------------- */}
          {/* Style 6: Bold Modern */}
          {/* --------------------------------------------------------------- */}
          <StyleCard
            name="Bold Modern"
            philosophy="Dramatic contrasts, statement materials, and architectural confidence."
            characteristics={[
              'High-contrast palette (black, white, charcoal, with metallic accents)',
              'Statement materials (black steel, fluted glass, dramatic veined stone)',
              'Architectural lighting (LED strips, recessed cove, spotlighting)',
              'Matte black or brushed gunmetal hardware',
              'Floor-to-ceiling cabinetry with push-open mechanisms',
              'Feature walls with textured stone or slatted wood panels',
            ]}
            bestLocations="Laguna Beach, Newport Coast, custom builds across OC"
            bestRooms="Kitchen, primary bathroom, and feature walls"
            budgetRange="$90,000 &ndash; $200,000+"
            accentColor="#2C2C2C"
          >
            <p className="text-foreground-secondary font-light leading-relaxed mb-3">
              Bold Modern is the design style for homeowners who want their
              space to make an immediate, lasting impression. It relies on
              high-contrast material pairings&mdash;matte black cabinetry
              against dramatically veined white marble, dark steel-framed glass
              partitions dividing open spaces, and architectural lighting that
              sculpts the room with precise shadow and highlight. This is not a
              safe or neutral approach. It is a deliberate design statement.
            </p>
            <p className="text-foreground-secondary font-light leading-relaxed">
              In the kitchen, Bold Modern features floor-to-ceiling cabinetry
              in matte black or deep charcoal with touch-latch mechanisms
              replacing visible hardware. A book-matched marble island with
              full-height waterfall ends serves as the centerpiece, and
              integrated LED lighting beneath upper cabinets and inside open
              shelving creates a gallery-like atmosphere. In the primary
              bathroom, a curbless shower with black steel-framed glass, large
              format black porcelain tile, and a floating vanity with
              integrated vessel sink delivers the same dramatic impact. Bold
              Modern commands the highest material budgets of any style because
              the statement stones and custom metalwork that define it carry
              premium pricing. Calacatta Viola marble, a favorite in this
              style, runs $150&ndash;$300 per square foot installed.
            </p>
          </StyleCard>

          {/* --------------------------------------------------------------- */}
          {/* 2026 Design Trends */}
          {/* --------------------------------------------------------------- */}
          <section className="pb-12">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-4">
              2026 Design Trends in Orange County
            </h2>
            <p className="text-foreground-secondary font-light leading-relaxed mb-6">
              Beyond the six core styles above, five specific trends are
              reshaping how Orange County homeowners approach their remodels
              this year:
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="font-serif text-xl text-foreground mb-2">
                  1. Warm Minimalism
                </h3>
                <p className="text-foreground-secondary font-light leading-relaxed">
                  The sterile, all-white minimalism of the 2010s is gone.
                  Homeowners now demand warmth within simplicity&mdash;think
                  oatmeal-toned plaster walls, fluted wood paneling, and
                  bouclé-upholstered seating. Materials carry texture and
                  organic imperfection while maintaining the streamlined
                  silhouettes that define modern living. This trend crosses
                  every style category and is the single most requested design
                  direction in Orange County for 2026.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-xl text-foreground mb-2">
                  2. Integrated Smart Home Technology
                </h3>
                <p className="text-foreground-secondary font-light leading-relaxed">
                  Smart home features have shifted from visible gadgets to
                  invisible infrastructure. Motorized shades that auto-adjust
                  based on sun position, lighting scenes controlled by voice
                  or schedule, and whole-home audio distributed through
                  architectural speakers are now standard expectations in
                  luxury Orange County remodels. The key design principle:
                  technology disappears into the architecture rather than
                  sitting on top of it.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-xl text-foreground mb-2">
                  3. European Wet Rooms
                </h3>
                <p className="text-foreground-secondary font-light leading-relaxed">
                  Traditional enclosed shower stalls are giving way to fully
                  open wet rooms where the entire bathroom floor is waterproofed
                  and gently sloped to a central drain. A frameless glass
                  partition separates the wet and dry zones without creating
                  visual barriers. This approach makes bathrooms feel
                  dramatically larger and delivers the walk-in spa experience
                  that Orange County homeowners are requesting at record rates.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-xl text-foreground mb-2">
                  4. Mixed Metal Hardware
                </h3>
                <p className="text-foreground-secondary font-light leading-relaxed">
                  The era of matching every metal finish in a room is over.
                  Designers now intentionally pair brushed brass cabinet pulls
                  with matte black faucets, or champagne bronze lighting with
                  polished nickel plumbing trim. The rule: limit your palette to
                  two metals maximum per room, and use one as the dominant (70%)
                  and the other as the accent (30%) for visual cohesion.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-xl text-foreground mb-2">
                  5. Statement Range Hoods
                </h3>
                <p className="text-foreground-secondary font-light leading-relaxed">
                  The range hood has evolved from a functional necessity into
                  the kitchen&apos;s primary design focal point. Sculptural
                  plaster hoods in organic curves, fluted steel hoods with
                  brass trim, and custom wood-wrapped hoods that match the
                  cabinetry are replacing standard stainless steel boxes.
                  Custom range hoods run $3,000&ndash;$12,000 installed, and
                  they deliver outsized design impact for the investment.
                </p>
              </div>
            </div>
          </section>

          {/* --------------------------------------------------------------- */}
          {/* Choosing the Right Style */}
          {/* --------------------------------------------------------------- */}
          <section className="pb-12">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-4">
              Choosing the Right Style for Your Home
            </h2>
            <p className="text-foreground-secondary font-light leading-relaxed mb-4">
              Selecting a design direction is one of the most consequential
              decisions in any remodel. Use this four-part framework to narrow
              your choice with confidence:
            </p>
            <ol className="list-decimal list-inside space-y-4 text-foreground-secondary font-light leading-relaxed">
              <li>
                <strong className="text-foreground">
                  Start with your home&apos;s existing architecture.
                </strong>{' '}
                A Spanish Colonial home in San Juan Capistrano speaks
                Mediterranean Revival. A newer Irvine tract home with clean
                lines and open floor plans invites Contemporary Minimalist or
                Transitional Luxury. Working with your architecture instead of
                against it reduces costs and produces a more cohesive result.
              </li>
              <li>
                <strong className="text-foreground">
                  Consider your neighborhood context.
                </strong>{' '}
                Homes in coastal communities like Newport Beach and Laguna Beach
                benefit from ocean-inspired palettes and natural materials.
                Inland communities with established landscaping and traditional
                streetscapes reward warmer, more textured approaches. Your home
                does not exist in isolation&mdash;the best design choices
                complement your surroundings.
              </li>
              <li>
                <strong className="text-foreground">
                  Match the style to your lifestyle.
                </strong>{' '}
                A family with young children needs durable, easy-to-clean
                surfaces that Contemporary Minimalist and Transitional Luxury
                deliver. A couple who entertains regularly benefits from the
                California Indoor-Outdoor approach. Be honest about how you
                live, and let that reality guide your material and layout
                decisions.
              </li>
              <li>
                <strong className="text-foreground">
                  Factor in resale value.
                </strong>{' '}
                Transitional Luxury and Modern Coastal consistently deliver the
                strongest resale returns in Orange County because they appeal to
                the widest buyer pool. Bold Modern and Mediterranean Revival
                create stunning, personalized spaces but attract a narrower
                audience at resale. If you plan to sell within five years,
                weight your choice toward broader appeal. If this is your
                forever home, design for your own joy.
              </li>
            </ol>
          </section>

          {/* --------------------------------------------------------------- */}
          {/* FAQ */}
          {/* --------------------------------------------------------------- */}
          <section className="pb-12">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-serif text-lg text-foreground mb-1">
                  What is the most popular kitchen design style in Orange County
                  in 2026?
                </h3>
                <p className="text-foreground-secondary font-light">
                  Transitional Luxury is the most popular kitchen design style
                  in Orange County, chosen for 42% of remodels because it blends
                  traditional warmth with modern clean lines.
                </p>
              </div>
              <div>
                <h3 className="font-serif text-lg text-foreground mb-1">
                  How much does a Modern Coastal kitchen remodel cost in Newport
                  Beach?
                </h3>
                <p className="text-foreground-secondary font-light">
                  A Modern Coastal kitchen remodel in Newport Beach costs
                  $65,000 to $150,000 depending on materials, with white oak
                  cabinetry and natural stone driving the premium.
                </p>
              </div>
              <div>
                <h3 className="font-serif text-lg text-foreground mb-1">
                  What design style works best for newer Irvine homes?
                </h3>
                <p className="text-foreground-secondary font-light">
                  Contemporary Minimalist works best for newer Irvine homes
                  because the clean architecture and open floor plans align
                  perfectly with streamlined cabinetry and monochromatic
                  palettes.
                </p>
              </div>
              <div>
                <h3 className="font-serif text-lg text-foreground mb-1">
                  Can I mix design styles in my Orange County home remodel?
                </h3>
                <p className="text-foreground-secondary font-light">
                  Yes. The most successful Orange County remodels blend two
                  complementary styles, such as Modern Coastal in shared spaces
                  and Bold Modern in the primary bath, maintaining cohesion
                  through consistent flooring and hardware.
                </p>
              </div>
              <div>
                <h3 className="font-serif text-lg text-foreground mb-1">
                  What are the top home design trends in Southern California for
                  2026?
                </h3>
                <p className="text-foreground-secondary font-light">
                  The top 2026 Southern California design trends are warm
                  minimalism, integrated smart home technology, European wet
                  rooms, mixed metal hardware, and sculptural statement range
                  hoods.
                </p>
              </div>
            </div>
          </section>

          {/* --------------------------------------------------------------- */}
          {/* Gated Download */}
          {/* --------------------------------------------------------------- */}
          <section className="pb-12">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-4">
              Download the Complete Lookbook
            </h2>
            <p className="text-foreground-secondary font-light leading-relaxed mb-4">
              Get the full Design Inspiration Lookbook as a printable PDF. The
              download includes:
            </p>
            <ul className="list-disc list-inside text-foreground-secondary font-light space-y-2 mb-8">
              <li>
                All six style profiles with detailed material specifications
                and color palettes
              </li>
              <li>
                Side-by-side comparison chart for quick style matching to your
                home and budget
              </li>
              <li>
                2026 trend guide with product recommendations and sourcing tips
                for Orange County
              </li>
            </ul>
            <div className="bg-background-surface border border-border-subtle rounded-xl p-6 md:p-10">
              <ResourceGateForm
                resourceName="Design Inspiration Lookbook"
                ctaLabel="Download Free Lookbook"
              />
            </div>
          </section>

          {/* --------------------------------------------------------------- */}
          {/* Internal Links */}
          {/* --------------------------------------------------------------- */}
          <section className="pb-20">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-6">
              More Resources for Homeowners
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link
                href="/portfolio"
                className="block border border-border-subtle rounded-lg p-5 hover:border-accent transition-colors group"
              >
                <span className="text-accent text-xs uppercase tracking-[0.15em] font-semibold">
                  Our Work
                </span>
                <h3 className="font-serif text-lg text-foreground mt-1 group-hover:text-accent transition-colors">
                  Portfolio
                </h3>
                <p className="text-foreground-secondary font-light text-sm mt-1">
                  See completed projects across Orange County featuring these
                  design styles in real homes.
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
                  renovations in Southern California.
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
                  Request a free design consultation with our Southern
                  California renovation team.
                </p>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

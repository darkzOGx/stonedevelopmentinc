import { Metadata } from 'next';
import Link from 'next/link';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { ResourceGateForm } from '@/components/ui/ResourceGateForm';

// ---------------------------------------------------------------------------
// Metadata
// ---------------------------------------------------------------------------

export const metadata: Metadata = {
  title:
    'Seasonal Home Maintenance Checklist for SoCal Homes | Stone Development',
  description:
    'The complete seasonal home maintenance checklist for Southern California homes. Quarter-by-quarter tasks for spring, summer, fall, and winter in Orange County and coastal communities.',
  keywords: [
    'home maintenance checklist california',
    'seasonal home maintenance southern california',
    'socal home maintenance',
    'orange county home maintenance',
    'irvine home maintenance checklist',
  ],
  alternates: {
    canonical:
      'https://www.stonedevelopmentinc.com/resources/maintenance-checklist',
  },
  openGraph: {
    title:
      'Seasonal Home Maintenance Checklist for SoCal Homes | Stone Development',
    description:
      'The complete seasonal home maintenance checklist for Southern California homes. Quarter-by-quarter tasks covering HVAC, roof, fire safety, and rain prep.',
    url: 'https://www.stonedevelopmentinc.com/resources/maintenance-checklist',
    type: 'article',
  },
};

// ---------------------------------------------------------------------------
// JSON-LD Schemas
// ---------------------------------------------------------------------------

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Seasonal Home Maintenance Checklist for SoCal Homes',
  description:
    'The complete seasonal home maintenance checklist for Southern California homes. Quarter-by-quarter tasks for spring, summer, fall, and winter in Orange County and coastal communities.',
  url: 'https://www.stonedevelopmentinc.com/resources/maintenance-checklist',
  publisher: {
    '@type': 'Organization',
    name: 'Stone Development Inc.',
    url: 'https://www.stonedevelopmentinc.com',
  },
  datePublished: '2026-03-25',
  dateModified: '2026-03-25',
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['#intro-paragraph'],
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How often should I service my HVAC system in Southern California?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Service your HVAC system twice per year in Southern California: once in spring before summer heat and once in fall before the heating season. Annual service costs $150 to $300 and extends system life by 5 to 10 years.',
      },
    },
    {
      '@type': 'Question',
      name: 'What home maintenance is unique to coastal Orange County properties?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Coastal Orange County homes require salt air corrosion management including bi-annual exterior paint touch-ups, quarterly hardware inspections, monthly window washing, and annual metal fixture replacement for exposed hinges, locks, and railings.',
      },
    },
    {
      '@type': 'Question',
      name: 'When should I prepare my home for Santa Ana winds?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Prepare for Santa Ana winds in September before peak season runs October through January. Secure loose outdoor items, trim trees away from structures and power lines, clean gutters, and verify roof flashings are sealed.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does skipping home maintenance cost in California?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Skipping routine maintenance costs Southern California homeowners $3,000 to $10,000 per year in emergency repairs. A neglected HVAC system costs $5,000 to $12,000 to replace versus $300 for annual service.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need to clean gutters in Southern California if it rarely rains?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Debris from trees, Santa Ana winds, and construction dust clogs gutters in SoCal even without rain. Clean gutters twice per year, in spring and fall, to prevent water damage when winter rains arrive.',
      },
    },
  ],
};

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function MaintenanceChecklistPage() {
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

      <main className="bg-background min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {/* ----------------------------------------------------------------- */}
          {/* Hero */}
          {/* ----------------------------------------------------------------- */}
          <section className="pt-32 pb-12">
            <SectionLabel>Free Resource</SectionLabel>
            <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-6 leading-tight">
              Seasonal Home Maintenance Checklist for Southern California Homes
            </h1>
            <p
              id="intro-paragraph"
              className="text-lg md:text-xl text-foreground font-semibold leading-relaxed mb-4"
            >
              Southern California homes require a climate-specific maintenance
              schedule addressing dry heat, salt air, Santa Ana winds, and UV
              exposure to prevent $3,000&ndash;$10,000 in annual emergency
              repairs.
            </p>
            <p className="text-foreground-secondary font-light leading-relaxed mb-2">
              Standard home maintenance checklists are written for climates with
              freezing winters and humid summers. Southern California&apos;s
              unique conditions&mdash;330 days of sunshine, Santa Ana wind
              events reaching 80+ mph, salt air corrosion along the coast, and
              concentrated rain seasons&mdash;demand a completely different
              approach. This quarter-by-quarter guide covers every critical
              maintenance task for homes in Orange County, Irvine, Mission
              Viejo, and coastal communities from Newport Beach to Dana Point.
              Follow it consistently, and you will add years to your home&apos;s
              systems while avoiding the catastrophic repair bills that hit
              homeowners who skip preventive maintenance.
            </p>
            <p className="text-xs text-foreground-secondary/70 font-light">
              Last updated March 2026
            </p>
          </section>

          {/* ----------------------------------------------------------------- */}
          {/* Why SoCal Homes Need a Different Schedule */}
          {/* ----------------------------------------------------------------- */}
          <section className="pb-12">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-4">
              Why SoCal Homes Need a Different Maintenance Schedule
            </h2>
            <p className="text-foreground-secondary font-light leading-relaxed mb-4">
              Southern California&apos;s Mediterranean climate creates
              maintenance challenges that do not exist in the rest of the
              country. The average home in Orange County receives 281 days of
              full sun exposure per year, accelerating UV degradation of paint,
              roofing materials, wood trim, and exterior sealants at twice the
              rate of homes in the Pacific Northwest. Exterior paint in Irvine
              lasts 5 to 7 years compared to 10 to 15 years in Portland or
              Seattle.
            </p>
            <p className="text-foreground-secondary font-light leading-relaxed mb-4">
              Coastal properties in Newport Beach, Laguna Beach, and Dana Point
              face an additional threat: salt air corrosion. Airborne salt
              particles attack metal hardware, window frames, exterior fixtures,
              and even concrete surfaces. The California Coastal Commission
              identifies properties within 1,000 feet of the shoreline as the
              highest-risk zone, but corrosion effects extend up to 5 miles
              inland during strong onshore winds.
            </p>
            <p className="text-foreground-secondary font-light leading-relaxed mb-4">
              Santa Ana winds, which peak from October through January, deliver
              sustained gusts of 40 to 60 mph with recorded peaks above 100 mph
              in canyon areas of Orange County. These winds strip loose roofing
              materials, scatter debris, topple poorly maintained trees, and
              create extreme fire danger throughout the region. The National
              Weather Service issues Red Flag Warnings for Orange County an
              average of 15 to 20 times per year during Santa Ana season.
            </p>
            <p className="text-foreground-secondary font-light leading-relaxed">
              Preventive maintenance tailored to these conditions saves Southern
              California homeowners $3,000 to $10,000 per year in avoided
              emergency repairs. This checklist organizes every task by
              quarter so you address each threat at the right time&mdash;before
              damage occurs, not after.
            </p>
          </section>

          {/* ----------------------------------------------------------------- */}
          {/* Spring (March - May) */}
          {/* ----------------------------------------------------------------- */}
          <section className="pb-12">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-2">
              Spring (March&ndash;May): The Inspection Season
            </h2>
            <p className="text-foreground-secondary font-light leading-relaxed mb-6">
              Spring is the foundation of your maintenance year. Winter rains
              have ended, and the dry season is approaching. This is the window
              to inspect everything, fix what winter damaged, and prepare your
              home for the intense heat and UV exposure ahead.
            </p>

            <div className="space-y-5">
              <div className="border-l-2 border-accent pl-6">
                <h3 className="font-serif text-lg text-foreground mb-1">
                  1. Service Your HVAC System ($150&ndash;$300)
                </h3>
                <p className="text-foreground-secondary font-light leading-relaxed">
                  Schedule professional HVAC maintenance before summer heat
                  arrives. A technician cleans coils, checks refrigerant levels,
                  tests electrical connections, and replaces the air filter.
                  Annual service extends the life of your system by 5 to 10
                  years and keeps energy costs 15% to 25% lower than an
                  unserviced unit. In Orange County, summer electricity bills for
                  a home with a failing AC unit run $200 to $400 higher per
                  month.
                </p>
              </div>

              <div className="border-l-2 border-accent pl-6">
                <h3 className="font-serif text-lg text-foreground mb-1">
                  2. Clean Gutters and Downspouts
                </h3>
                <p className="text-foreground-secondary font-light leading-relaxed">
                  SoCal homeowners assume gutters do not matter because rain is
                  rare. That assumption causes water damage every winter. Debris
                  from trees, wind-blown dirt, and construction dust clogs
                  gutters throughout the dry months. Clean them now so they
                  function when next winter&apos;s rains arrive.
                </p>
              </div>

              <div className="border-l-2 border-accent pl-6">
                <h3 className="font-serif text-lg text-foreground mb-1">
                  3. Inspect the Roof for Winter Storm Damage
                </h3>
                <p className="text-foreground-secondary font-light leading-relaxed">
                  Walk the perimeter and use binoculars to check for cracked,
                  missing, or lifted tiles and shingles. Look for damaged
                  flashings around vents, chimneys, and skylights. Winter rains
                  and Santa Ana winds create roof damage that remains invisible
                  until the next heavy rain causes interior water damage.
                </p>
              </div>

              <div className="border-l-2 border-accent pl-6">
                <h3 className="font-serif text-lg text-foreground mb-1">
                  4. Test and Adjust Irrigation Systems
                </h3>
                <p className="text-foreground-secondary font-light leading-relaxed">
                  Run every irrigation zone and check for broken heads, clogged
                  emitters, and leaking valves. Adjust watering schedules for
                  the transition to dry season. Irvine and most Orange County
                  cities enforce water conservation ordinances with fines for
                  runoff and overwatering&mdash;a properly tuned system prevents
                  waste and penalties.
                </p>
              </div>

              <div className="border-l-2 border-accent pl-6">
                <h3 className="font-serif text-lg text-foreground mb-1">
                  5. Inspect Exterior Paint and Stucco
                </h3>
                <p className="text-foreground-secondary font-light leading-relaxed">
                  Walk the entire exterior and look for cracking, peeling,
                  chalking, or bubbling paint. Check stucco surfaces for
                  hairline cracks that allow moisture infiltration. UV exposure
                  degrades exterior coatings faster in Southern California than
                  anywhere else in the continental United States. Address cracks
                  now before summer heat expands them further.
                </p>
              </div>

              <div className="border-l-2 border-accent pl-6">
                <h3 className="font-serif text-lg text-foreground mb-1">
                  6. Check Window and Door Seals
                </h3>
                <p className="text-foreground-secondary font-light leading-relaxed">
                  Inspect weatherstripping and caulking around every window and
                  exterior door. UV exposure hardens and cracks rubber seals
                  within 3 to 5 years in SoCal. Damaged seals allow conditioned
                  air to escape, increasing summer cooling costs by 10% to 20%.
                </p>
              </div>

              <div className="border-l-2 border-accent pl-6">
                <h3 className="font-serif text-lg text-foreground mb-1">
                  7. Service Pool Equipment
                </h3>
                <p className="text-foreground-secondary font-light leading-relaxed">
                  Inspect the pump, filter, heater, and automation system.
                  Replace worn gaskets and O-rings. Verify the pool barrier and
                  gate latches meet current California safety code. Over 40% of
                  homes in Irvine and Mission Viejo have pools, making this a
                  critical spring task for the majority of homeowners.
                </p>
              </div>

              <div className="border-l-2 border-accent pl-6">
                <h3 className="font-serif text-lg text-foreground mb-1">
                  8. Schedule a Pest Inspection ($100&ndash;$200)
                </h3>
                <p className="text-foreground-secondary font-light leading-relaxed">
                  Termites, Argentine ants, and rodents are active year-round in
                  Southern California. Spring is the peak swarming season for
                  drywood termites. A professional inspection identifies
                  infestations before they cause structural damage. The average
                  termite treatment in Orange County costs $1,500 to $3,000;
                  undetected infestations that reach structural members cost
                  $15,000 to $50,000 to repair.
                </p>
              </div>

              <div className="border-l-2 border-accent pl-6">
                <h3 className="font-serif text-lg text-foreground mb-1">
                  9. Test Smoke Detectors, CO Detectors, and Replace Batteries
                </h3>
                <p className="text-foreground-secondary font-light leading-relaxed">
                  Press the test button on every smoke and carbon monoxide
                  detector in the home. Replace batteries regardless of whether
                  they test positive&mdash;batteries degrade faster in high-heat
                  environments. California law requires working smoke detectors
                  in every bedroom and on every floor.
                </p>
              </div>
            </div>
          </section>

          {/* ----------------------------------------------------------------- */}
          {/* Summer (June - August) */}
          {/* ----------------------------------------------------------------- */}
          <section className="pb-12">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-2">
              Summer (June&ndash;August): Protection from Heat and Dryness
            </h2>
            <p className="text-foreground-secondary font-light leading-relaxed mb-6">
              Summer in Orange County brings sustained temperatures above 90&deg;F
              inland, intense UV radiation, and the driest conditions of the
              year. Focus on fire safety, heat-related material degradation, and
              protecting your home&apos;s exterior surfaces.
            </p>

            <div className="space-y-5">
              <div className="border-l-2 border-accent pl-6">
                <h3 className="font-serif text-lg text-foreground mb-1">
                  1. Maintain Fire Defensible Space
                </h3>
                <p className="text-foreground-secondary font-light leading-relaxed">
                  Clear all dead vegetation, dry brush, and combustible
                  materials within 100 feet of your home. This is required by
                  California Public Resources Code 4291 and enforced by local
                  fire departments. Properties in the hills of Orange
                  County&mdash;Anaheim Hills, Trabuco Canyon, Coto de
                  Caza&mdash;face mandatory fire inspections. Non-compliance
                  results in fines up to $500 per violation and personal
                  liability if fire spreads to neighboring properties.
                </p>
              </div>

              <div className="border-l-2 border-accent pl-6">
                <h3 className="font-serif text-lg text-foreground mb-1">
                  2. Inspect and Seal Hardscape and Concrete
                </h3>
                <p className="text-foreground-secondary font-light leading-relaxed">
                  Extreme heat causes concrete driveways, patios, and walkways
                  to expand and contract, creating cracks that worsen with each
                  thermal cycle. Fill cracks with flexible sealant and apply a
                  penetrating concrete sealer to driveways and pool decks. A
                  $200 sealing job prevents $2,000 to $5,000 in concrete
                  replacement costs.
                </p>
              </div>

              <div className="border-l-2 border-accent pl-6">
                <h3 className="font-serif text-lg text-foreground mb-1">
                  3. Deep-Clean Dryer Vents
                </h3>
                <p className="text-foreground-secondary font-light leading-relaxed">
                  Lint buildup in dryer vents is the leading cause of home
                  laundry fires in the United States. Fire risk peaks during
                  hot, dry summer months in Southern California. Professional
                  dryer vent cleaning costs $100 to $180 and eliminates a fire
                  hazard that causes an estimated 2,900 home fires nationally
                  each year.
                </p>
              </div>

              <div className="border-l-2 border-accent pl-6">
                <h3 className="font-serif text-lg text-foreground mb-1">
                  4. Check Plumbing for Leaks
                </h3>
                <p className="text-foreground-secondary font-light leading-relaxed">
                  Higher summer water usage from irrigation, pools, and outdoor
                  showers reveals leaks that remain hidden during lower-use
                  months. Check your water meter with all fixtures off&mdash;any
                  movement indicates a leak. Inspect under all sinks, around
                  toilets, and behind the washing machine. A single undetected
                  slab leak costs $2,000 to $6,000 to repair in Orange County.
                </p>
              </div>

              <div className="border-l-2 border-accent pl-6">
                <h3 className="font-serif text-lg text-foreground mb-1">
                  5. Inspect and Maintain Exterior Wood
                </h3>
                <p className="text-foreground-secondary font-light leading-relaxed">
                  Pergolas, deck boards, fence panels, and wood trim deteriorate
                  rapidly under SoCal&apos;s UV exposure. Check for splitting,
                  warping, and finish failure. Apply UV-resistant stain or
                  sealant to all exposed wood surfaces. Untreated wood in direct
                  Southern California sun lasts 3 to 5 years before requiring
                  replacement.
                </p>
              </div>

              <div className="border-l-2 border-accent pl-6">
                <h3 className="font-serif text-lg text-foreground mb-1">
                  6. Service Garage Door Mechanisms
                </h3>
                <p className="text-foreground-secondary font-light leading-relaxed">
                  Lubricate hinges, rollers, tracks, and springs. Test the
                  auto-reverse safety feature by placing a board in the
                  door&apos;s path. Garage doors in SoCal accumulate dust and
                  grit that accelerates wear on moving parts. Annual service
                  prevents the $800 to $1,500 cost of spring or opener
                  replacement.
                </p>
              </div>

              <div className="border-l-2 border-accent pl-6">
                <h3 className="font-serif text-lg text-foreground mb-1">
                  7. Check Attic Ventilation and Insulation
                </h3>
                <p className="text-foreground-secondary font-light leading-relaxed">
                  Attic temperatures in Orange County homes reach 150&deg;F to
                  170&deg;F during summer. Inadequate ventilation traps heat,
                  degrades roofing materials from below, and forces HVAC systems
                  to work 30% harder. Verify soffit vents are clear, ridge
                  vents are unobstructed, and insulation meets current
                  California Title 24 energy standards (R-38 minimum for attic
                  floors).
                </p>
              </div>

              <div className="border-l-2 border-accent pl-6">
                <h3 className="font-serif text-lg text-foreground mb-1">
                  8. Clean and Inspect Outdoor Living Spaces
                </h3>
                <p className="text-foreground-secondary font-light leading-relaxed">
                  Pressure-wash patios, decks, and outdoor kitchens. Inspect
                  built-in BBQ gas lines, outdoor electrical outlets, and shade
                  structures for weather damage. Southern California&apos;s
                  outdoor living culture means these spaces receive heavy use
                  and require the same maintenance attention as interior rooms.
                </p>
              </div>
            </div>
          </section>

          {/* ----------------------------------------------------------------- */}
          {/* Fall (September - November) */}
          {/* ----------------------------------------------------------------- */}
          <section className="pb-12">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-2">
              Fall (September&ndash;November): Santa Ana Wind and Rain Prep
            </h2>
            <p className="text-foreground-secondary font-light leading-relaxed mb-6">
              Fall is the most critical maintenance season for Southern
              California homes. Santa Ana winds begin in October, and the rain
              season follows in December. Every task in this section prepares
              your home for the two most destructive forces it faces all year.
            </p>

            <div className="space-y-5">
              <div className="border-l-2 border-accent pl-6">
                <h3 className="font-serif text-lg text-foreground mb-1">
                  1. Secure Loose Items Before Santa Ana Season
                </h3>
                <p className="text-foreground-secondary font-light leading-relaxed">
                  Patio furniture, potted plants, umbrellas, decorative items,
                  and trash cans become projectiles in 60+ mph winds. Store or
                  secure everything that is not anchored to the ground. Wind
                  damage claims in Orange County spike 400% during Santa Ana
                  events compared to normal weather periods.
                </p>
              </div>

              <div className="border-l-2 border-accent pl-6">
                <h3 className="font-serif text-lg text-foreground mb-1">
                  2. Clean and Inspect Gutters and Downspouts Before Rain
                </h3>
                <p className="text-foreground-secondary font-light leading-relaxed">
                  This is your second gutter cleaning of the year and the most
                  important one. Six months of dry-season debris plus Santa Ana
                  wind deposits will have filled gutters. Clear everything and
                  verify downspouts discharge at least 3 feet away from the
                  foundation. Clogged gutters during a heavy rain event send
                  water into walls, foundations, and crawl spaces.
                </p>
              </div>

              <div className="border-l-2 border-accent pl-6">
                <h3 className="font-serif text-lg text-foreground mb-1">
                  3. Check Roof Flashings and Seals
                </h3>
                <p className="text-foreground-secondary font-light leading-relaxed">
                  Inspect flashings around chimneys, vents, skylights, and roof
                  penetrations. Summer heat and UV exposure dry out roofing
                  sealants, and Santa Ana winds lift flashing edges. Repair any
                  gaps or lifted sections before the first rain. A $500 flashing
                  repair prevents $10,000 to $30,000 in water damage.
                </p>
              </div>

              <div className="border-l-2 border-accent pl-6">
                <h3 className="font-serif text-lg text-foreground mb-1">
                  4. Inspect Chimney and Fireplace
                </h3>
                <p className="text-foreground-secondary font-light leading-relaxed">
                  Have the chimney inspected and swept before the first use of
                  the season. Check the flue damper, firebox, and chimney cap.
                  South Coast Air Quality Management District (SCAQMD) no-burn
                  days are enforced in Orange County during winter&mdash;install
                  a certified gas insert if you want guaranteed fireplace use
                  throughout the season.
                </p>
              </div>

              <div className="border-l-2 border-accent pl-6">
                <h3 className="font-serif text-lg text-foreground mb-1">
                  5. Test Sump Pump If Applicable
                </h3>
                <p className="text-foreground-secondary font-light leading-relaxed">
                  Homes in lower-lying areas of Irvine, Tustin, and Santa Ana
                  with below-grade spaces need functional sump pumps before the
                  rain season. Pour water into the sump pit to confirm the pump
                  activates, runs properly, and discharges away from the
                  foundation.
                </p>
              </div>

              <div className="border-l-2 border-accent pl-6">
                <h3 className="font-serif text-lg text-foreground mb-1">
                  6. Weatherstrip Doors and Windows
                </h3>
                <p className="text-foreground-secondary font-light leading-relaxed">
                  Replace cracked or compressed weatherstripping on all exterior
                  doors and operable windows. This prevents wind-driven rain
                  from infiltrating during winter storms and reduces heating
                  costs during the few weeks SoCal homes actually need heat.
                </p>
              </div>

              <div className="border-l-2 border-accent pl-6">
                <h3 className="font-serif text-lg text-foreground mb-1">
                  7. Service the Heating System
                </h3>
                <p className="text-foreground-secondary font-light leading-relaxed">
                  SoCal homeowners neglect heating systems because they run
                  infrequently. A furnace that sits idle for 8 months
                  accumulates dust in the heat exchanger, burner assembly, and
                  blower motor. Run the system, check for unusual smells or
                  noises, and replace the air filter. A cracked heat exchanger
                  leaks carbon monoxide&mdash;schedule a professional inspection
                  if your furnace is over 10 years old.
                </p>
              </div>

              <div className="border-l-2 border-accent pl-6">
                <h3 className="font-serif text-lg text-foreground mb-1">
                  8. Check Grading and Drainage Around the Foundation
                </h3>
                <p className="text-foreground-secondary font-light leading-relaxed">
                  Walk the perimeter of your home and confirm the ground slopes
                  away from the foundation at a minimum of 6 inches over 10
                  feet. Settling soil, landscaping changes, and erosion from
                  irrigation can reverse the grade over time, directing
                  rainwater toward the foundation instead of away from it.
                  Improper grading is the number one cause of foundation water
                  intrusion in Orange County homes.
                </p>
              </div>

              <div className="border-l-2 border-accent pl-6">
                <h3 className="font-serif text-lg text-foreground mb-1">
                  9. Trim Trees Away from Structures and Power Lines
                </h3>
                <p className="text-foreground-secondary font-light leading-relaxed">
                  Remove any branches within 10 feet of your roof, walls, or
                  power lines. Santa Ana winds turn overhanging branches into
                  battering rams that damage roofing, siding, and windows.
                  Fallen limbs on power lines cause outages and fire ignition.
                  Hire a certified arborist for large trees&mdash;improper
                  pruning weakens the tree and increases the risk of failure
                  during high winds.
                </p>
              </div>
            </div>
          </section>

          {/* ----------------------------------------------------------------- */}
          {/* Winter (December - February) */}
          {/* ----------------------------------------------------------------- */}
          <section className="pb-12">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-2">
              Winter (December&ndash;February): Rain Season Management
            </h2>
            <p className="text-foreground-secondary font-light leading-relaxed mb-6">
              Winter is when your preventive maintenance either proves its value
              or reveals its gaps. Southern California receives 75% of its
              annual rainfall between December and March, often in intense
              storms that overwhelm unprepared homes. Winter maintenance focuses
              on monitoring, early detection, and planning.
            </p>

            <div className="space-y-5">
              <div className="border-l-2 border-accent pl-6">
                <h3 className="font-serif text-lg text-foreground mb-1">
                  1. Monitor for Leaks During Rain Events
                </h3>
                <p className="text-foreground-secondary font-light leading-relaxed">
                  Walk through your home during the first significant rain of
                  the season. Check ceilings, walls, and window sills for water
                  stains, drips, or dampness. Inspect the attic with a
                  flashlight for active leaks at roof penetrations. Early
                  detection limits a $500 repair from becoming a $10,000 mold
                  and drywall restoration project.
                </p>
              </div>

              <div className="border-l-2 border-accent pl-6">
                <h3 className="font-serif text-lg text-foreground mb-1">
                  2. Check for Standing Water and Drainage Issues
                </h3>
                <p className="text-foreground-secondary font-light leading-relaxed">
                  After each rain, walk the yard and check for areas where water
                  pools for more than 24 hours. Standing water near the
                  foundation indicates drainage failure and creates conditions
                  for foundation settlement, mold, and mosquito breeding.
                  Address drainage problems immediately&mdash;they worsen with
                  every subsequent storm.
                </p>
              </div>

              <div className="border-l-2 border-accent pl-6">
                <h3 className="font-serif text-lg text-foreground mb-1">
                  3. Inspect for Mold in Bathrooms and Under Sinks
                </h3>
                <p className="text-foreground-secondary font-light leading-relaxed">
                  Winter humidity levels in Southern California homes rise from
                  a summer baseline of 30% to 50%&ndash;65% during the rain
                  season. This increase, combined with reduced ventilation from
                  closed windows, creates ideal conditions for mold growth.
                  Check under every sink, around every toilet, and in bathroom
                  corners where caulk meets tile. Black mold remediation in
                  Orange County ranges from $1,500 to $5,000 per affected room.
                </p>
              </div>

              <div className="border-l-2 border-accent pl-6">
                <h3 className="font-serif text-lg text-foreground mb-1">
                  4. Test GFCI Outlets
                </h3>
                <p className="text-foreground-secondary font-light leading-relaxed">
                  Press the test and reset buttons on every GFCI outlet in
                  bathrooms, kitchens, garages, and outdoor locations. GFCI
                  outlets prevent electrocution in wet conditions and are
                  required by California electrical code in all moisture-prone
                  areas. Replace any outlet that does not trip and reset
                  properly.
                </p>
              </div>

              <div className="border-l-2 border-accent pl-6">
                <h3 className="font-serif text-lg text-foreground mb-1">
                  5. Flush the Water Heater
                </h3>
                <p className="text-foreground-secondary font-light leading-relaxed">
                  Orange County water is hard, with mineral content averaging
                  15&ndash;25 grains per gallon. Sediment accumulates at the
                  bottom of the tank, reducing heating efficiency and
                  accelerating corrosion. Drain 2 to 3 gallons from the tank
                  valve until the water runs clear. This 15-minute task extends
                  the water heater&apos;s life by 3 to 5 years and prevents the
                  $1,500 to $3,000 cost of emergency replacement.
                </p>
              </div>

              <div className="border-l-2 border-accent pl-6">
                <h3 className="font-serif text-lg text-foreground mb-1">
                  6. Inspect the Garage for Moisture
                </h3>
                <p className="text-foreground-secondary font-light leading-relaxed">
                  Check the garage floor for water intrusion along the door
                  threshold, side walls, and any shared walls with the house.
                  Verify the garage door weather seal is intact and making full
                  contact with the floor. Moisture in the garage leads to mold,
                  rust on stored items, and water migration into adjacent living
                  spaces.
                </p>
              </div>

              <div className="border-l-2 border-accent pl-6">
                <h3 className="font-serif text-lg text-foreground mb-1">
                  7. Plan Spring Renovation Projects
                </h3>
                <p className="text-foreground-secondary font-light leading-relaxed">
                  Winter is the ideal time to plan and design renovation
                  projects for spring construction starts. Contractors in Orange
                  County are busiest from April through November. Booking your
                  project in January or February secures better scheduling
                  priority, and permit processing times at the City of Irvine
                  and Orange County Building Department are 30% shorter during
                  winter months due to lower application volume.
                </p>
              </div>
            </div>
          </section>

          {/* ----------------------------------------------------------------- */}
          {/* The Cost of Skipping Maintenance */}
          {/* ----------------------------------------------------------------- */}
          <section className="pb-12">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-4">
              The Cost of Skipping Maintenance
            </h2>
            <p className="text-foreground-secondary font-light leading-relaxed mb-6">
              Every item on this checklist exists because skipping it leads to a
              repair bill that dwarfs the cost of prevention. Here are the most
              common&mdash;and most expensive&mdash;consequences of deferred
              maintenance in Southern California homes:
            </p>

            <div className="space-y-6">
              <div className="bg-background-surface border border-border-subtle rounded-lg p-5">
                <h3 className="font-serif text-lg text-foreground mb-2">
                  Unserviced HVAC System
                </h3>
                <p className="text-foreground-secondary font-light leading-relaxed">
                  <strong className="text-foreground">Prevention:</strong> $300
                  per year for professional maintenance.{' '}
                  <strong className="text-foreground">Failure cost:</strong>{' '}
                  $5,000 to $12,000 for full system replacement. HVAC systems
                  in Southern California run 8+ months per year under heavy
                  load. Without annual service, compressor failure occurs 40%
                  sooner than the manufacturer&apos;s rated lifespan.
                </p>
              </div>

              <div className="bg-background-surface border border-border-subtle rounded-lg p-5">
                <h3 className="font-serif text-lg text-foreground mb-2">
                  Neglected Roof Maintenance
                </h3>
                <p className="text-foreground-secondary font-light leading-relaxed">
                  <strong className="text-foreground">Prevention:</strong> $500
                  per year for inspection and minor repairs.{' '}
                  <strong className="text-foreground">Failure cost:</strong>{' '}
                  $10,000 to $30,000 for water damage restoration. A single
                  undetected roof leak during a winter storm saturates
                  insulation, drywall, and framing. Mold growth begins within
                  48 hours in Southern California&apos;s mild temperatures, and
                  remediation costs multiply with every day of delay.
                </p>
              </div>

              <div className="bg-background-surface border border-border-subtle rounded-lg p-5">
                <h3 className="font-serif text-lg text-foreground mb-2">
                  Undetected Termite Infestation
                </h3>
                <p className="text-foreground-secondary font-light leading-relaxed">
                  <strong className="text-foreground">Prevention:</strong> $200
                  per year for professional inspection.{' '}
                  <strong className="text-foreground">Failure cost:</strong>{' '}
                  $15,000 to $50,000 for structural repair. Drywood termites are
                  endemic to Southern California and cause more property damage
                  in Orange County than all natural disasters combined. A colony
                  works silently for 3 to 5 years before visible signs
                  appear&mdash;by that point, structural members are
                  compromised.
                </p>
              </div>

              <div className="bg-background-surface border border-border-subtle rounded-lg p-5">
                <h3 className="font-serif text-lg text-foreground mb-2">
                  Failed Drainage and Foundation Damage
                </h3>
                <p className="text-foreground-secondary font-light leading-relaxed">
                  <strong className="text-foreground">Prevention:</strong> $0
                  to $500 for grading correction and downspout
                  extensions.{' '}
                  <strong className="text-foreground">Failure cost:</strong>{' '}
                  $8,000 to $25,000 for foundation repair. Orange County&apos;s
                  expansive clay soils shift dramatically between wet and dry
                  seasons. Improper drainage concentrates water against the
                  foundation, causing differential settlement, cracking, and
                  structural movement that requires underpinning or piering to
                  correct.
                </p>
              </div>
            </div>
          </section>

          {/* ----------------------------------------------------------------- */}
          {/* Coastal vs Inland */}
          {/* ----------------------------------------------------------------- */}
          <section className="pb-12">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-4">
              Coastal vs. Inland Maintenance Differences
            </h2>
            <p className="text-foreground-secondary font-light leading-relaxed mb-4">
              Not every home on this checklist faces the same threats. Coastal
              and inland properties in Orange County have distinct maintenance
              priorities based on their exposure to salt air, heat, and fire
              risk.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border border-border-subtle rounded-lg p-5">
                <h3 className="font-serif text-lg text-foreground mb-3">
                  Coastal Properties
                </h3>
                <p className="text-xs text-accent uppercase tracking-[0.15em] font-semibold mb-3">
                  Newport Beach &bull; Laguna Beach &bull; Dana Point
                </p>
                <ul className="space-y-2 text-foreground-secondary font-light text-sm">
                  <li>
                    &bull; Exterior paint touch-ups every 2&ndash;3 years (vs.
                    5&ndash;7 inland)
                  </li>
                  <li>
                    &bull; Quarterly hardware inspections for salt corrosion on
                    hinges, locks, and railings
                  </li>
                  <li>
                    &bull; Monthly window washing to remove salt film that etches
                    glass over time
                  </li>
                  <li>
                    &bull; Annual replacement of exposed metal fixtures
                    (stainless steel corrodes within 18 months at the coast)
                  </li>
                  <li>
                    &bull; Bi-annual exterior rinse of all surfaces to remove
                    salt deposits
                  </li>
                  <li>
                    &bull; Upgraded weather seals rated for marine environments
                  </li>
                </ul>
              </div>

              <div className="border border-border-subtle rounded-lg p-5">
                <h3 className="font-serif text-lg text-foreground mb-3">
                  Inland Properties
                </h3>
                <p className="text-xs text-accent uppercase tracking-[0.15em] font-semibold mb-3">
                  Irvine &bull; Mission Viejo &bull; Tustin &bull; Lake Forest
                </p>
                <ul className="space-y-2 text-foreground-secondary font-light text-sm">
                  <li>
                    &bull; Fire defensible space maintenance is the top priority
                    (especially near wildland-urban interface)
                  </li>
                  <li>
                    &bull; More aggressive UV protection for exterior surfaces
                    (less marine layer = more direct sun)
                  </li>
                  <li>
                    &bull; Higher HVAC load and more frequent filter changes (no
                    coastal cooling effect)
                  </li>
                  <li>
                    &bull; Increased focus on irrigation efficiency due to
                    stricter inland water restrictions
                  </li>
                  <li>
                    &bull; Concrete and hardscape maintenance priority due to
                    wider daily temperature swings
                  </li>
                  <li>
                    &bull; Tree maintenance for Santa Ana wind protection
                    (canyon-adjacent properties face highest wind speeds)
                  </li>
                </ul>
              </div>
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
                  How often should I service my HVAC system in Southern
                  California?
                </h3>
                <p className="text-foreground-secondary font-light">
                  Service your HVAC system twice per year: once in spring before
                  summer heat and once in fall before the heating season. Annual
                  service costs $150 to $300 and extends system life by 5 to 10
                  years.
                </p>
              </div>
              <div>
                <h3 className="font-serif text-lg text-foreground mb-1">
                  What home maintenance is unique to coastal Orange County
                  properties?
                </h3>
                <p className="text-foreground-secondary font-light">
                  Coastal homes require salt air corrosion management: bi-annual
                  exterior paint touch-ups, quarterly hardware inspections,
                  monthly window washing, and annual metal fixture replacement
                  for exposed hinges, locks, and railings.
                </p>
              </div>
              <div>
                <h3 className="font-serif text-lg text-foreground mb-1">
                  When should I prepare my home for Santa Ana winds?
                </h3>
                <p className="text-foreground-secondary font-light">
                  Prepare in September before peak season runs October through
                  January. Secure loose outdoor items, trim trees away from
                  structures and power lines, clean gutters, and verify roof
                  flashings are sealed.
                </p>
              </div>
              <div>
                <h3 className="font-serif text-lg text-foreground mb-1">
                  How much does skipping home maintenance cost in California?
                </h3>
                <p className="text-foreground-secondary font-light">
                  Skipping routine maintenance costs Southern California
                  homeowners $3,000 to $10,000 per year in emergency repairs. A
                  neglected HVAC system costs $5,000 to $12,000 to replace
                  versus $300 for annual service.
                </p>
              </div>
              <div>
                <h3 className="font-serif text-lg text-foreground mb-1">
                  Do I need to clean gutters in Southern California if it rarely
                  rains?
                </h3>
                <p className="text-foreground-secondary font-light">
                  Yes. Debris from trees, Santa Ana winds, and construction dust
                  clogs gutters even without rain. Clean gutters twice per year,
                  in spring and fall, to prevent water damage when winter rains
                  arrive.
                </p>
              </div>
            </div>
          </section>

          {/* ----------------------------------------------------------------- */}
          {/* Gated Download */}
          {/* ----------------------------------------------------------------- */}
          <section className="pb-12">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-4">
              Download the Complete Checklist
            </h2>
            <p className="text-foreground-secondary font-light leading-relaxed mb-4">
              Get the full Seasonal Home Maintenance Checklist as a printable
              PDF you can post in your garage or utility room. The download
              includes:
            </p>
            <ul className="list-disc list-inside text-foreground-secondary font-light space-y-2 mb-8">
              <li>
                Printable quarterly checklist with all 33 maintenance tasks
              </li>
              <li>
                Coastal vs. inland supplement with location-specific additions
              </li>
              <li>
                Cost reference sheet with prevention vs. repair pricing
              </li>
            </ul>
            <div className="bg-background-surface border border-border-subtle rounded-xl p-6 md:p-10">
              <ResourceGateForm
                resourceName="Seasonal Home Maintenance Checklist"
                ctaLabel="Download Free Checklist"
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
                  renovations across Southern California.
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
                  15 questions to ask every contractor before you sign a
                  contract.
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

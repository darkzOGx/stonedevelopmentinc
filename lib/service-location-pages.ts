export interface ServiceLocationPage {
  serviceSlug: string;
  locationSlug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  angle: string;
  localNotes: string[];
  relatedBlogSlugs: string[];
  relatedResourceSlugs: string[];
  projectSlug: string;
  updatedAt: string;
}

export const SERVICE_LOCATION_PAGES: ServiceLocationPage[] = [
  {
    serviceSlug: 'kitchen-remodeling',
    locationSlug: 'irvine',
    title: 'Irvine Kitchen Remodeling',
    metaTitle: 'Irvine Kitchen Remodeling | Stone Development Inc.',
    metaDescription:
      'Irvine kitchen remodeling for tract-home layout upgrades, finish planning, permits, and build discipline from a local general contractor.',
    intro:
      'Irvine kitchens usually reward layout clarity and finish restraint more than dramatic reinvention. The strongest projects improve daily use and resale fit without forcing the house into a design language it cannot support cleanly.',
    angle:
      'This combination works because Irvine homeowners often know the kitchen needs to improve but still need help deciding how far the scope should go.',
    localNotes: [
      'Tract-home layouts in Irvine often create repeatable opportunities around circulation, storage, and sightline improvement.',
      'The market punishes decorative drift faster than many neighboring cities because the baseline housing stock is already strong.',
      'Kitchen scopes here benefit from a contractor who can separate value-driving layout work from upgrades that mostly add cost.',
    ],
    relatedBlogSlugs: ['kitchen-remodel-cost-irvine-2026', 'kitchen-remodeling-orange-county-2026-guide'],
    relatedResourceSlugs: ['cost-guide', 'budget-calculator', 'permit-guide'],
    projectSlug: 'modern-kitchen-renovation',
    updatedAt: '2026-03-31T12:00:00.000Z',
  },
  {
    serviceSlug: 'kitchen-remodeling',
    locationSlug: 'newport-beach',
    title: 'Newport Beach Kitchen Remodeling',
    metaTitle: 'Newport Beach Kitchen Remodeling | Stone Development Inc.',
    metaDescription:
      'Newport Beach kitchen remodeling with coastal finish planning, layout strategy, and stronger scope discipline for premium homes.',
    intro:
      'Newport Beach kitchen projects need stronger finish judgment than most inland markets. The room has to feel credible inside a premium home, but the scope still needs to stay buildable and locally appropriate.',
    angle:
      'This page exists for homeowners who are comparing premium finishes, coastal material performance, and whether a larger layout move is worth the disruption.',
    localNotes: [
      'Finish expectations are higher in Newport Beach, which makes weak material coordination more obvious and more expensive.',
      'The right kitchen here often feels calmer and more precise, not simply more elaborate.',
      'Scope discipline matters because an overbuilt kitchen can miss the property almost as badly as an underbuilt one.',
    ],
    relatedBlogSlugs: ['newport-beach-kitchen-remodel-2026-coastal-pricing', 'luxury-kitchen-upgrades-that-pay-off-orange-county-2026'],
    relatedResourceSlugs: ['cost-guide', 'contractor-checklist', 'planning-workbook'],
    projectSlug: 'modern-kitchen-renovation',
    updatedAt: '2026-03-31T12:00:00.000Z',
  },
  {
    serviceSlug: 'kitchen-remodeling',
    locationSlug: 'huntington-beach',
    title: 'Huntington Beach Kitchen Remodeling',
    metaTitle: 'Huntington Beach Kitchen Remodeling | Stone Development Inc.',
    metaDescription:
      'Huntington Beach kitchen remodeling for older-home upgrades, coastal durability, and smarter layout planning.',
    intro:
      'Huntington Beach kitchens often sit inside older homes that need more than a cosmetic update. The layout, infrastructure, and finish package all need to make sense together once the room is open.',
    angle:
      'This is a high-intent combination because many Huntington Beach owners are modernizing kitchens in homes that were not designed for today’s use patterns.',
    localNotes: [
      '1960s and 1970s homes frequently reveal more electrical, plumbing, or ventilation work than the homeowner expects at the start.',
      'Coastal use and older-house conditions create a different project than a simple tract-home refresh in a newer market.',
      'The strongest result comes from solving the room structurally and functionally before chasing high-visibility finishes.',
    ],
    relatedBlogSlugs: ['huntington-beach-1960s-kitchen-remodel-2026', 'kitchen-remodeling-orange-county-2026-guide'],
    relatedResourceSlugs: ['permit-guide', 'cost-guide', 'contractor-checklist'],
    projectSlug: 'modern-kitchen-renovation',
    updatedAt: '2026-03-31T12:00:00.000Z',
  },
  {
    serviceSlug: 'kitchen-remodeling',
    locationSlug: 'costa-mesa',
    title: 'Costa Mesa Kitchen Remodeling',
    metaTitle: 'Costa Mesa Kitchen Remodeling | Stone Development Inc.',
    metaDescription:
      'Costa Mesa kitchen remodeling for ranch homes and neighborhood-specific upgrades with stronger layout and resale planning.',
    intro:
      'Costa Mesa kitchen projects often hinge on whether the homeowner is improving a practical ranch layout, setting up a broader renovation, or sharpening the property for long-term value. The right kitchen scope depends on that answer.',
    angle:
      'This combination is especially useful for owners who need help deciding whether the kitchen should lead the entire property strategy or stay a tighter standalone remodel.',
    localNotes: [
      'Ranch-style properties in Costa Mesa often reward clean spatial improvement more than decorative excess.',
      'Neighborhood context can shift how much kitchen investment makes sense from one part of the city to another.',
      'Kitchen work here often overlaps with bigger property questions around additions, ADUs, or whole-home planning.',
    ],
    relatedBlogSlugs: ['costa-mesa-kitchen-remodel-1950s-ranch-2026', 'kitchen-remodeling-orange-county-2026-guide'],
    relatedResourceSlugs: ['cost-guide', 'budget-calculator', 'project-timeline'],
    projectSlug: 'modern-kitchen-renovation',
    updatedAt: '2026-03-31T12:00:00.000Z',
  },
  {
    serviceSlug: 'kitchen-remodeling',
    locationSlug: 'lake-forest',
    title: 'Lake Forest Kitchen Remodeling',
    metaTitle: 'Lake Forest Kitchen Remodeling | Stone Development Inc.',
    metaDescription:
      'Lake Forest kitchen remodeling for family homes that need better function, stronger finishes, and practical scope control.',
    intro:
      'Lake Forest kitchen work tends to be most successful when the homeowner is solving a real usability problem, not just chasing a visual reset. Function, finish quality, and long-term value need to move together.',
    angle:
      'This page helps Lake Forest homeowners compare practical kitchen scope decisions before they drift into a broader renovation without meaning to.',
    localNotes: [
      'Family homes in Lake Forest often benefit from kitchen upgrades that improve circulation and day-to-day use first.',
      'The kitchen can be the right lead scope for a broader renovation, but only if the house actually needs the broader work.',
      'Practical planning usually wins here over purely trend-led material decisions.',
    ],
    relatedBlogSlugs: ['lake-forest-kitchen-renovation-hoa-upgrades-2026', 'kitchen-remodeling-orange-county-2026-guide'],
    relatedResourceSlugs: ['cost-guide', 'budget-calculator', 'maintenance-checklist'],
    projectSlug: 'modern-kitchen-renovation',
    updatedAt: '2026-03-31T12:00:00.000Z',
  },
  {
    serviceSlug: 'bathroom-remodeling',
    locationSlug: 'irvine',
    title: 'Irvine Bathroom Remodeling',
    metaTitle: 'Irvine Bathroom Remodeling | Stone Development Inc.',
    metaDescription:
      'Irvine bathroom remodeling for primary baths, guest baths, and layout upgrades with planning-first execution.',
    intro:
      'Irvine bathroom remodels often need tighter decisions about layout, fixture quality, and whether the scope is truly functional or just decorative. The best rooms feel sharper because the plan is cleaner, not because the finish list is longer.',
    angle:
      'This combination is strongest for homeowners who want a bath upgrade that fits the house and the market instead of looking disconnected from both.',
    localNotes: [
      'Irvine bathrooms often benefit from layout refinement and finish discipline more than full reinvention.',
      'Because the local housing stock is relatively strong, poor fixture and material choices stand out faster.',
      'A contractor-led path helps keep waterproofing, lighting, and finish decisions aligned before the room is opened.',
    ],
    relatedBlogSlugs: ['bathroom-remodel-cost-irvine-2026-pricing-tiers', 'bathroom-remodeling-orange-county-2026-guide'],
    relatedResourceSlugs: ['cost-guide', 'budget-calculator', 'permit-guide'],
    projectSlug: 'spa-inspired-bathroom',
    updatedAt: '2026-03-31T12:00:00.000Z',
  },
  {
    serviceSlug: 'bathroom-remodeling',
    locationSlug: 'newport-beach',
    title: 'Newport Beach Bathroom Remodeling',
    metaTitle: 'Newport Beach Bathroom Remodeling | Stone Development Inc.',
    metaDescription:
      'Newport Beach bathroom remodeling for primary suites, guest baths, and premium finish planning with coastal-market discipline.',
    intro:
      'Newport Beach bathroom projects need the room to feel elevated without losing build discipline. Waterproofing, fixture quality, and finish restraint matter more here because the market notices when they are missing.',
    angle:
      'This page is built for homeowners comparing primary-suite investment, guest-bath updates, and how far a premium bathroom scope should really go.',
    localNotes: [
      'Higher-end coastal homes raise the finish expectation and the cost of getting the material package wrong.',
      'Primary baths in Newport Beach need better sequencing because the visible standard is high and the room is still trade-dense.',
      'The strongest result usually comes from calm material choices and tighter execution, not visual excess.',
    ],
    relatedBlogSlugs: ['master-bath-vs-guest-bath-remodel-newport-beach', 'bathroom-remodeling-orange-county-2026-guide'],
    relatedResourceSlugs: ['cost-guide', 'contractor-checklist', 'planning-workbook'],
    projectSlug: 'spa-inspired-bathroom',
    updatedAt: '2026-03-31T12:00:00.000Z',
  },
  {
    serviceSlug: 'bathroom-remodeling',
    locationSlug: 'mission-viejo',
    title: 'Mission Viejo Bathroom Remodeling',
    metaTitle: 'Mission Viejo Bathroom Remodeling | Stone Development Inc.',
    metaDescription:
      'Mission Viejo bathroom remodeling for aging-in-place upgrades, primary baths, and practical family-use improvements.',
    intro:
      'Mission Viejo bathroom projects often carry a practical question: how do you make the room work better for the next stage of life without overspending on the wrong scope. That is where bathroom planning becomes valuable.',
    angle:
      'This combination is especially strong for homeowners balancing comfort, safety, and realistic investment in a house they intend to keep using.',
    localNotes: [
      'Aging-in-place and primary-suite decisions are more central here than style-only remodeling.',
      'Bathroom work in Mission Viejo often ties into wider family-use planning around the home.',
      'The right scope usually improves function first and luxury second.',
    ],
    relatedBlogSlugs: ['mission-viejo-bathroom-remodel-aging-in-place-2026', 'bathroom-remodeling-orange-county-2026-guide'],
    relatedResourceSlugs: ['planning-workbook', 'project-timeline', 'cost-guide'],
    projectSlug: 'spa-inspired-bathroom',
    updatedAt: '2026-03-31T12:00:00.000Z',
  },
  {
    serviceSlug: 'bathroom-remodeling',
    locationSlug: 'tustin',
    title: 'Tustin Bathroom Remodeling',
    metaTitle: 'Tustin Bathroom Remodeling | Stone Development Inc.',
    metaDescription:
      'Tustin bathroom remodeling for older-home upgrades, primary baths, and smarter sequencing around hidden conditions.',
    intro:
      'Tustin bathroom remodels often look smaller than they are. Once the room opens, older plumbing, ventilation, and framing conditions can turn a simple update into a sequencing-heavy project.',
    angle:
      'This page is built for homeowners comparing a bath refresh with the deeper reality of older-home renovation work in Tustin.',
    localNotes: [
      'Old Town and older Tustin homes can shift the scope quickly once rough conditions are exposed.',
      'Bathroom upgrades here often need more hidden-work budgeting than newer-market owners expect.',
      'A tighter contractor-led sequence helps prevent older-home surprises from derailing the finish plan.',
    ],
    relatedBlogSlugs: ['tustin-bathroom-remodel-old-town-vs-ranch-2026', 'bathroom-remodeling-orange-county-2026-guide'],
    relatedResourceSlugs: ['contractor-checklist', 'permit-guide', 'project-timeline'],
    projectSlug: 'spa-inspired-bathroom',
    updatedAt: '2026-03-31T12:00:00.000Z',
  },
  {
    serviceSlug: 'bathroom-remodeling',
    locationSlug: 'huntington-beach',
    title: 'Huntington Beach Bathroom Remodeling',
    metaTitle: 'Huntington Beach Bathroom Remodeling | Stone Development Inc.',
    metaDescription:
      'Huntington Beach bathroom remodeling for coastal homes and older-house upgrades with stronger waterproofing and systems planning.',
    intro:
      'Huntington Beach bathrooms compress coastal wear, aging conditions, and trade density into one compact room. That makes sequencing and build quality far more important than the room size suggests.',
    angle:
      'This page serves homeowners who need to modernize a bath while staying realistic about what older coastal houses may reveal once work begins.',
    localNotes: [
      'Bathroom work here can pull hidden plumbing, waterproofing, and ventilation issues into the scope quickly.',
      'Coastal use makes the finish and material package matter more, not less.',
      'The best outcome comes from handling the room like a systems project first and a finish project second.',
    ],
    relatedBlogSlugs: ['huntington-beach-bathroom-remodel-coastal-2026', 'bathroom-remodeling-orange-county-2026-guide'],
    relatedResourceSlugs: ['cost-guide', 'permit-guide', 'contractor-checklist'],
    projectSlug: 'spa-inspired-bathroom',
    updatedAt: '2026-03-31T12:00:00.000Z',
  },
  {
    serviceSlug: 'adu-construction',
    locationSlug: 'irvine',
    title: 'Irvine ADU Construction',
    metaTitle: 'Irvine ADU Builder | Stone Development Inc.',
    metaDescription:
      'Irvine ADU construction for homeowners comparing lot fit, permit path, utility scope, and detached-unit feasibility.',
    intro:
      'Irvine ADU work is strongest when the owner starts with the use case and property fit instead of the floor plan. The right answer depends on the lot, the homeowner goal, and whether the ADU beats the alternatives cleanly enough.',
    angle:
      'This page is built for Irvine homeowners actively comparing detached ADUs, conversions, and broader property strategy.',
    localNotes: [
      'Irvine ADU planning often needs stronger upfront discipline because the property already sits in a premium, structured market.',
      'The cleanest ADU projects start with lot and utility feasibility before design costs rise.',
      'An ADU should outperform the addition alternative on this property, not just sound exciting in theory.',
    ],
    relatedBlogSlugs: ['adu-builder-irvine-permit-cost-2026', 'adu-construction-orange-county-2026-guide'],
    relatedResourceSlugs: ['adu-starter-kit', 'adu-vs-addition', 'budget-calculator'],
    projectSlug: 'backyard-adu',
    updatedAt: '2026-03-31T12:00:00.000Z',
  },
  {
    serviceSlug: 'adu-construction',
    locationSlug: 'costa-mesa',
    title: 'Costa Mesa ADU Construction',
    metaTitle: 'Costa Mesa ADU Builder | Stone Development Inc.',
    metaDescription:
      'Costa Mesa ADU construction for homeowners comparing detached units, conversions, and property-use strategy.',
    intro:
      'Costa Mesa is one of the clearest markets for comparing ADU upside with other improvement paths. The project only makes sense when the use case, lot conditions, and utility reality all line up.',
    angle:
      'This combination matters because many Costa Mesa owners are deciding between an ADU, a remodel, or a different way of improving the property entirely.',
    localNotes: [
      'Costa Mesa ADUs need to be judged against broader property-use options, not in isolation.',
      'Lot fit and utility planning are central because they determine whether the ADU path is genuinely efficient.',
      'The best ADU outcome is strategic, not just additive.',
    ],
    relatedBlogSlugs: ['adu-construction-costa-mesa-what-to-expect', 'adu-construction-orange-county-2026-guide'],
    relatedResourceSlugs: ['adu-starter-kit', 'adu-vs-addition', 'budget-calculator'],
    projectSlug: 'backyard-adu',
    updatedAt: '2026-03-31T12:00:00.000Z',
  },
  {
    serviceSlug: 'home-additions',
    locationSlug: 'irvine',
    title: 'Irvine Home Additions',
    metaTitle: 'Irvine Home Additions | Stone Development Inc.',
    metaDescription:
      'Irvine home additions for room additions and second-story planning with lot-fit, HOA-aware, and family-use discipline.',
    intro:
      'Irvine additions are strongest when the owner needs more function without losing the neighborhood. The real decision is not just whether to add space, but whether the property should expand at all and how that compares with the alternatives.',
    angle:
      'This page supports Irvine homeowners weighing room additions and second-story moves against remodel-only or ADU paths.',
    localNotes: [
      'Additions in Irvine often work best when they respect tract-home patterns and neighborhood fit.',
      'The right addition should solve a family-use problem without turning the house into an overbuilt mismatch.',
      'A planning-first comparison between addition and ADU paths is especially valuable here.',
    ],
    relatedBlogSlugs: ['room-addition-cost-irvine-2026', 'home-additions-guide-orange-county'],
    relatedResourceSlugs: ['adu-vs-addition', 'project-timeline', 'cost-guide'],
    projectSlug: 'contemporary-home-addition',
    updatedAt: '2026-03-31T12:00:00.000Z',
  },
  {
    serviceSlug: 'home-additions',
    locationSlug: 'mission-viejo',
    title: 'Mission Viejo Home Additions',
    metaTitle: 'Mission Viejo Home Additions | Stone Development Inc.',
    metaDescription:
      'Mission Viejo home additions for room additions and family-space planning with realistic scope and move-versus-build comparison.',
    intro:
      'Mission Viejo additions often begin as a family-use problem rather than a pure real estate play. The homeowner usually needs more space, but still needs help deciding whether an addition is the cleanest answer.',
    angle:
      'This page is built for Mission Viejo homeowners comparing added square footage with moving, reconfiguring, or phasing a larger renovation.',
    localNotes: [
      'Mission Viejo additions often succeed when they solve a very practical family-layout problem.',
      'The strongest scopes avoid forcing extra square footage that the rest of the home cannot absorb gracefully.',
      'A move-versus-build comparison matters here because neighborhood continuity often carries real value.',
    ],
    relatedBlogSlugs: ['room-addition-myths-mission-viejo', 'home-additions-guide-orange-county'],
    relatedResourceSlugs: ['adu-vs-addition', 'planning-workbook', 'project-timeline'],
    projectSlug: 'contemporary-home-addition',
    updatedAt: '2026-03-31T12:00:00.000Z',
  },
  {
    serviceSlug: 'home-additions',
    locationSlug: 'huntington-beach',
    title: 'Huntington Beach Home Additions',
    metaTitle: 'Huntington Beach Home Additions | Stone Development Inc.',
    metaDescription:
      'Huntington Beach home additions for room additions and second-story planning with older-home and coastal context in view.',
    intro:
      'Huntington Beach additions often carry more structural and hidden-condition risk than homeowners expect at first. The payoff can still be strong, but the scope has to respect the age of the house and the reality of the site.',
    angle:
      'This combination is best for homeowners comparing added space against the older-home complexity that may come with it.',
    localNotes: [
      'Older housing stock can change the structural and utility demands of an addition faster than in newer cities.',
      'Coastal use and existing-home conditions make feasibility work especially valuable here.',
      'The right addition improves the property meaningfully instead of simply attaching more square footage to a weak plan.',
    ],
    relatedBlogSlugs: ['huntington-beach-room-addition-1960s-homes-2026', 'home-additions-guide-orange-county'],
    relatedResourceSlugs: ['adu-vs-addition', 'contractor-checklist', 'project-timeline'],
    projectSlug: 'contemporary-home-addition',
    updatedAt: '2026-03-31T12:00:00.000Z',
  },
  {
    serviceSlug: 'home-additions',
    locationSlug: 'newport-beach',
    title: 'Newport Beach Home Additions',
    metaTitle: 'Newport Beach Home Additions | Stone Development Inc.',
    metaDescription:
      'Newport Beach home additions for room additions and second-story planning with stronger design, lot-fit, and market discipline.',
    intro:
      'Newport Beach additions demand better judgment because the land is valuable, the finish expectation is high, and the cost of misalignment is larger. The project has to earn its footprint.',
    angle:
      'This page supports owners comparing second-story and room addition paths against the realities of a premium coastal market.',
    localNotes: [
      'The right addition in Newport Beach balances square footage gain with design coherence and neighborhood fit.',
      'Second-story planning and premium finish expectations raise the stakes quickly here.',
      'A disciplined builder protects the homeowner from spending into a scope that is locally impressive but strategically weak.',
    ],
    relatedBlogSlugs: ['second-story-addition-newport-beach-worth-it-2026', 'home-additions-guide-orange-county'],
    relatedResourceSlugs: ['adu-vs-addition', 'cost-guide', 'planning-workbook'],
    projectSlug: 'contemporary-home-addition',
    updatedAt: '2026-03-31T12:00:00.000Z',
  },
];

export function getServiceLocationPath(serviceSlug: string, locationSlug: string) {
  return `/services/${serviceSlug}/${locationSlug}`;
}

export function getServiceLocationPage(serviceSlug: string, locationSlug: string) {
  return SERVICE_LOCATION_PAGES.find(
    (page) => page.serviceSlug === serviceSlug && page.locationSlug === locationSlug
  );
}

export function getServiceLocationPagesByService(serviceSlug: string) {
  return SERVICE_LOCATION_PAGES.filter((page) => page.serviceSlug === serviceSlug);
}

export function getServiceLocationPagesByLocation(locationSlug: string) {
  return SERVICE_LOCATION_PAGES.filter((page) => page.locationSlug === locationSlug);
}

export interface LocationPage {
  slug: string;
  name: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  answer: string;
  intro: string;
  neighborhoods: string[];
  stats: Array<{ label: string; value: string; detail: string }>;
  notes: string[];
  serviceSlugs: string[];
  relatedBlogSlugs: string[];
  relatedResourceSlugs: string[];
  relatedProjectSlugs: string[];
  faq: Array<{ question: string; answer: string }>;
  updatedAt: string;
}

export const LOCATION_PAGES: LocationPage[] = [
  {
    slug: 'orange-county',
    name: 'Orange County',
    title: 'Orange County General Contractor',
    metaTitle: 'Orange County General Contractor | Stone Development Inc.',
    metaDescription:
      'Kitchen remodeling, bathroom remodeling, ADUs, additions, and whole-home renovation across Orange County with Irvine-based planning discipline.',
    answer:
      'Stone Development serves Orange County homeowners who need a general contractor for kitchens, bathrooms, ADUs, additions, whole-home renovations, custom homes, and reconstruction work.',
    intro:
      'Orange County is not one flat construction market. Irvine, Newport Beach, Huntington Beach, Mission Viejo, and Costa Mesa all reward different scope decisions, which is why we build around local context instead of generic county-wide assumptions.',
    neighborhoods: [
      'Coastal Orange County',
      'Central Orange County',
      'South Orange County',
      'Master-planned communities',
      'Older tract neighborhoods',
    ],
    stats: [
      {
        label: 'Office',
        value: 'Irvine-based',
        detail: 'Stone Development operates from 1 Jenner Suite 150, Irvine, CA 92618.',
      },
      {
        label: 'Core services',
        value: '7 high-intent service lines',
        detail: 'Kitchens, baths, ADUs, additions, whole-home work, custom homes, and restoration.',
      },
      {
        label: 'Best fit',
        value: 'Planning-heavy residential work',
        detail: 'Especially projects where permits, sequencing, and finish discipline all matter.',
      },
    ],
    notes: [
      'Irvine usually rewards cleaner scope planning inside established tract layouts.',
      'Newport Beach and other coastal markets raise the finish and design-sensitivity bar.',
      'Huntington Beach, Tustin, and other older-home markets often expose more systems risk once work begins.',
    ],
    serviceSlugs: ['kitchen-remodeling', 'bathroom-remodeling', 'adu-construction', 'home-additions'],
    relatedBlogSlugs: [
      'kitchen-remodeling-orange-county-2026-guide',
      'bathroom-remodeling-orange-county-2026-guide',
      'adu-construction-orange-county-2026-guide',
      'home-additions-guide-orange-county',
      'whole-home-renovation-orange-county-2026',
    ],
    relatedResourceSlugs: ['cost-guide', 'contractor-checklist', 'project-timeline'],
    relatedProjectSlugs: [
      'modern-kitchen-renovation',
      'spa-inspired-bathroom',
      'backyard-adu',
      'contemporary-home-addition',
    ],
    faq: [
      {
        question: 'Which Orange County cities does Stone Development serve?',
        answer:
          'We focus heavily on Irvine, Newport Beach, Huntington Beach, Costa Mesa, Mission Viejo, Tustin, Lake Forest, and the wider Orange County market.',
      },
      {
        question: 'What project types are the best fit in Orange County?',
        answer:
          'Kitchen remodels, bathroom remodels, ADUs, additions, whole-home renovations, custom homes, and reconstruction work are the strongest fit.',
      },
      {
        question: 'Is Stone Development based in Orange County?',
        answer:
          'Yes. Our office is in Irvine, which gives us strong access to planning context and project logistics across the county.',
      },
    ],
    updatedAt: '2026-03-31T12:00:00.000Z',
  },
  {
    slug: 'irvine',
    name: 'Irvine',
    title: 'Irvine General Contractor',
    metaTitle: 'Irvine General Contractor | Stone Development Inc.',
    metaDescription:
      'Irvine general contractor for kitchen remodels, bathroom remodels, ADUs, additions, and whole-home renovation with planning-first execution.',
    answer:
      'Stone Development works with Irvine homeowners on remodeling and construction projects that need scope clarity, permit awareness, HOA sensitivity, and stronger finish discipline.',
    intro:
      'Irvine is one of the strongest fits for planning-led construction because the neighborhoods are organized, the baseline housing stock is strong, and the wrong scope stands out quickly in a premium market.',
    neighborhoods: ['Woodbridge', 'Northwood', 'Turtle Rock', 'University Park', 'Portola Springs'],
    stats: [
      {
        label: 'Office proximity',
        value: 'Local office',
        detail: 'Stone Development operates directly from Irvine.',
      },
      {
        label: 'Best fit',
        value: 'Kitchens, baths, ADUs, additions',
        detail: 'Especially in tract communities where layout upgrades create immediate value.',
      },
      {
        label: 'Typical challenge',
        value: 'Scope versus finish balance',
        detail: 'Irvine projects often need restraint as much as ambition.',
      },
    ],
    notes: [
      'Irvine remodels reward layout logic and finish clarity more than decorative drift.',
      'Neighborhood fit matters because the housing stock is planned and comparable.',
      'Local office proximity helps keep site access and early planning more responsive.',
    ],
    serviceSlugs: ['kitchen-remodeling', 'adu-construction', 'home-additions'],
    relatedBlogSlugs: [
      'kitchen-remodel-cost-irvine-2026',
      'bathroom-remodel-cost-irvine-2026-guide',
      'adu-builder-irvine-permit-cost-2026',
      'room-addition-cost-irvine-2026',
    ],
    relatedResourceSlugs: ['cost-guide', 'budget-calculator', 'permit-guide'],
    relatedProjectSlugs: ['modern-kitchen-renovation', 'backyard-adu'],
    faq: [
      {
        question: 'Does Stone Development serve all of Irvine?',
        answer:
          'Yes. We work across Irvine neighborhoods including Woodbridge, Northwood, Turtle Rock, University Park, and Portola Springs.',
      },
      {
        question: 'What are the strongest project types in Irvine?',
        answer:
          'Kitchen remodeling, bathroom remodeling, ADUs, room additions, and whole-home planning are especially strong fits in Irvine.',
      },
      {
        question: 'Can Stone Development help with HOA-aware planning in Irvine?',
        answer:
          'Yes. Irvine projects often benefit from early awareness around review paths, approvals, and visible scope changes.',
      },
    ],
    updatedAt: '2026-03-31T12:00:00.000Z',
  },
  {
    slug: 'newport-beach',
    name: 'Newport Beach',
    title: 'Newport Beach General Contractor',
    metaTitle: 'Newport Beach General Contractor | Stone Development Inc.',
    metaDescription:
      'Newport Beach contractor for kitchen remodels, bathrooms, additions, and custom homes with coastal-market and finish-planning discipline.',
    answer:
      'Stone Development supports Newport Beach homeowners who need high-finish remodeling, additions, and custom-home planning handled with stronger coastal-market awareness.',
    intro:
      'Newport Beach rewards quality and punishes loose assumptions. The finish bar is high, the site context can be sensitive, and the margin for a generic remodel is small.',
    neighborhoods: ['Corona del Mar', 'Newport Heights', 'Eastbluff', 'Harbor View Homes', 'Balboa Peninsula'],
    stats: [
      {
        label: 'Best fit',
        value: 'High-finish remodels and additions',
        detail: 'Projects where market expectations are part of the planning brief.',
      },
      {
        label: 'Typical challenge',
        value: 'Design ambition versus buildability',
        detail: 'Coastal and view-sensitive properties need tighter front-end judgment.',
      },
      {
        label: 'Primary value add',
        value: 'Scope restraint',
        detail: 'The right project here is not just expensive. It is properly aligned with the property.',
      },
    ],
    notes: [
      'Newport Beach projects need cleaner finish logic than most inland markets.',
      'Neighborhood visibility and property value make bad scope decisions more expensive.',
      'A contractor should protect the project from overreach, not just execute ambitious ideas.',
    ],
    serviceSlugs: ['kitchen-remodeling', 'bathroom-remodeling', 'home-additions', 'custom-homes'],
    relatedBlogSlugs: [
      'newport-beach-kitchen-remodel-2026-coastal-pricing',
      'master-bath-vs-guest-bath-remodel-newport-beach',
      'second-story-addition-newport-beach-worth-it-2026',
    ],
    relatedResourceSlugs: ['cost-guide', 'contractor-checklist', 'planning-workbook'],
    relatedProjectSlugs: ['spa-inspired-bathroom', 'contemporary-home-addition'],
    faq: [
      {
        question: 'Does Stone Development serve Newport Beach?',
        answer:
          'Yes. We work with Newport Beach homeowners across neighborhoods such as Corona del Mar, Newport Heights, Eastbluff, and Harbor View Homes.',
      },
      {
        question: 'What project types are the best fit in Newport Beach?',
        answer:
          'Kitchen remodeling, bathroom remodeling, additions, custom homes, and whole-home planning are especially strong fits in Newport Beach.',
      },
      {
        question: 'Why does Newport Beach require more scope discipline?',
        answer:
          'Because coastal-market expectations, design sensitivity, and the cost of overbuilding are all higher than in many inland markets.',
      },
    ],
    updatedAt: '2026-03-31T12:00:00.000Z',
  },
  {
    slug: 'huntington-beach',
    name: 'Huntington Beach',
    title: 'Huntington Beach General Contractor',
    metaTitle: 'Huntington Beach General Contractor | Stone Development Inc.',
    metaDescription:
      'Huntington Beach contractor for kitchens, bathrooms, additions, and renovation planning with strong older-home and coastal-use awareness.',
    answer:
      'Stone Development helps Huntington Beach homeowners modernize kitchens, bathrooms, additions, and broader renovation scopes with stronger awareness around older housing stock and coastal use.',
    intro:
      'Huntington Beach projects often live at the intersection of older-house reality and coastal lifestyle expectations. The best scopes account for both.',
    neighborhoods: ['Downtown Huntington Beach', 'Seacliff', 'Goldenwest', 'Huntington Harbour', 'South Huntington Beach'],
    stats: [
      {
        label: 'Best fit',
        value: 'Kitchens, baths, additions',
        detail: 'Especially for homes that need systems-aware modernization.',
      },
      {
        label: 'Typical challenge',
        value: 'Aging conditions',
        detail: 'Older plumbing, wiring, and envelope issues can change the scope quickly.',
      },
      {
        label: 'Primary value add',
        value: 'Systems-aware planning',
        detail: 'The visible finish work only succeeds when the hidden conditions are handled correctly.',
      },
    ],
    notes: [
      'Many Huntington Beach homes reveal more infrastructure work once walls are opened.',
      'Coastal lifestyle expectations still push finishes and layout quality upward.',
      'The strongest projects combine modernization with honest older-home underwriting.',
    ],
    serviceSlugs: ['kitchen-remodeling', 'bathroom-remodeling', 'home-additions'],
    relatedBlogSlugs: [
      'huntington-beach-1960s-kitchen-remodel-2026',
      'huntington-beach-bathroom-remodel-coastal-2026',
      'huntington-beach-room-addition-1960s-homes-2026',
    ],
    relatedResourceSlugs: ['permit-guide', 'contractor-checklist', 'project-timeline'],
    relatedProjectSlugs: ['modern-kitchen-renovation', 'spa-inspired-bathroom'],
    faq: [
      {
        question: 'Does Stone Development serve Huntington Beach?',
        answer:
          'Yes. We work across Huntington Beach, including Downtown, Seacliff, Goldenwest, Huntington Harbour, and South Huntington Beach.',
      },
      {
        question: 'What project types are the best fit in Huntington Beach?',
        answer:
          'Kitchen remodels, bathroom remodels, home additions, and broader renovation planning are especially strong fits.',
      },
      {
        question: 'Why do Huntington Beach homes need more systems-aware planning?',
        answer:
          'Because older housing stock often introduces plumbing, electrical, or moisture issues that can materially change the scope once walls are opened.',
      },
    ],
    updatedAt: '2026-03-31T12:00:00.000Z',
  },
  {
    slug: 'costa-mesa',
    name: 'Costa Mesa',
    title: 'Costa Mesa General Contractor',
    metaTitle: 'Costa Mesa General Contractor | Stone Development Inc.',
    metaDescription:
      'Costa Mesa contractor for kitchen remodels, ADUs, bathroom remodeling, and renovation planning with neighborhood-specific scope guidance.',
    answer:
      'Stone Development supports Costa Mesa homeowners who need kitchen remodels, ADUs, bathrooms, and broader renovation scopes planned around real lot and neighborhood dynamics.',
    intro:
      'Costa Mesa can reward both smart remodels and well-scoped ADUs, but the right answer changes quickly by property. We help homeowners compare those paths before design costs pile up.',
    neighborhoods: ['Eastside Costa Mesa', 'Mesa Verde', 'College Park', 'Westside Costa Mesa', 'Halecrest'],
    stats: [
      {
        label: 'Best fit',
        value: 'Kitchens and ADUs',
        detail: 'Especially where homeowners are comparing flexibility, property use, and resale strategy.',
      },
      {
        label: 'Typical challenge',
        value: 'Lot-use tradeoffs',
        detail: 'Projects often hinge on how the owner values space, privacy, parking, and future use.',
      },
      {
        label: 'Primary value add',
        value: 'Option comparison',
        detail: 'The best project is often the one that survives a real feasibility test.',
      },
    ],
    notes: [
      'Costa Mesa homeowners often need help choosing between remodeling and ADU investment.',
      'Neighborhood context can shift the right answer dramatically from one property to another.',
      'Property-specific planning matters more here than generic city-wide assumptions.',
    ],
    serviceSlugs: ['kitchen-remodeling', 'adu-construction', 'bathroom-remodeling'],
    relatedBlogSlugs: [
      'adu-construction-costa-mesa-what-to-expect',
      'kitchen-remodel-costa-mesa-ranch-house-2026',
    ],
    relatedResourceSlugs: ['adu-starter-kit', 'adu-vs-addition', 'budget-calculator'],
    relatedProjectSlugs: ['backyard-adu', 'modern-kitchen-renovation'],
    faq: [
      {
        question: 'Does Stone Development serve Costa Mesa?',
        answer:
          'Yes. We work across Costa Mesa, including Eastside Costa Mesa, Mesa Verde, College Park, Halecrest, and Westside neighborhoods.',
      },
      {
        question: 'What project types are the best fit in Costa Mesa?',
        answer:
          'Kitchen remodeling, ADU construction, bathroom remodeling, and broader renovation planning are especially strong fits.',
      },
      {
        question: 'Can Stone Development help compare ADUs and remodeling in Costa Mesa?',
        answer:
          'Yes. That comparison is often one of the highest-value early decisions for Costa Mesa homeowners.',
      },
    ],
    updatedAt: '2026-03-31T12:00:00.000Z',
  },
  {
    slug: 'mission-viejo',
    name: 'Mission Viejo',
    title: 'Mission Viejo General Contractor',
    metaTitle: 'Mission Viejo General Contractor | Stone Development Inc.',
    metaDescription:
      'Mission Viejo contractor for bathrooms, additions, kitchens, and whole-home renovation with family-use and planning discipline.',
    answer:
      'Stone Development works with Mission Viejo homeowners on kitchens, bathrooms, additions, and whole-home scopes that need smarter family-use planning and stronger control over older-house surprises.',
    intro:
      'Mission Viejo often presents a practical remodeling question rather than a flashy one: how do you make the home work better for the next stage of family life without overspending into the wrong scope?',
    neighborhoods: ['Pacific Hills', 'Madrid Del Lago', 'Casta del Sol', 'Aegean Hills', 'Mission Ridge'],
    stats: [
      {
        label: 'Best fit',
        value: 'Bathrooms, additions, whole-home planning',
        detail: 'Strong for households trying to improve function without leaving the neighborhood.',
      },
      {
        label: 'Typical challenge',
        value: 'Family-stage transitions',
        detail: 'Homes often need better bedroom count, bath utility, or updated core spaces.',
      },
      {
        label: 'Primary value add',
        value: 'Scope prioritization',
        detail: 'The best Mission Viejo projects usually start by deciding what truly needs to happen now.',
      },
    ],
    notes: [
      'Mission Viejo projects often revolve around family-use improvement rather than trend-driven remodeling.',
      'Additions and phased whole-home plans can be stronger than all-at-once overhauls.',
      'The key early question is usually which problem the project is actually solving.',
    ],
    serviceSlugs: ['bathroom-remodeling', 'home-additions', 'full-home-renovation'],
    relatedBlogSlugs: [
      'bathroom-remodel-cost-mission-viejo-2026',
      'room-addition-myths-mission-viejo',
      'whole-home-renovation-orange-county-2026',
    ],
    relatedResourceSlugs: ['planning-workbook', 'project-timeline', 'cost-guide'],
    relatedProjectSlugs: ['full-home-renovation', 'contemporary-home-addition'],
    faq: [
      {
        question: 'Does Stone Development serve Mission Viejo?',
        answer:
          'Yes. We work with Mission Viejo homeowners across neighborhoods such as Pacific Hills, Madrid Del Lago, Casta del Sol, Aegean Hills, and Mission Ridge.',
      },
      {
        question: 'What project types are the best fit in Mission Viejo?',
        answer:
          'Bathroom remodels, additions, kitchens, and whole-home renovation planning are especially strong fits.',
      },
      {
        question: 'Can Stone Development help compare an addition with moving?',
        answer:
          'Yes. That comparison is often central to the Mission Viejo decision process.',
      },
    ],
    updatedAt: '2026-03-31T12:00:00.000Z',
  },
  {
    slug: 'tustin',
    name: 'Tustin',
    title: 'Tustin General Contractor',
    metaTitle: 'Tustin General Contractor | Stone Development Inc.',
    metaDescription:
      'Tustin contractor for bathrooms, kitchens, additions, and whole-home renovation with older-home and neighborhood-fit planning.',
    answer:
      'Stone Development helps Tustin homeowners modernize kitchens, bathrooms, additions, and whole-home scopes with stronger awareness around older housing stock and neighborhood context.',
    intro:
      'Tustin offers a mix of older neighborhoods, ranch homes, and established family-use properties that can improve dramatically with the right scope. The opportunity is real, but so is the need for honest planning before demolition starts.',
    neighborhoods: ['Old Town Tustin', 'Tustin Ranch', 'North Tustin', 'Columbus Square', 'Peppertree'],
    stats: [
      {
        label: 'Best fit',
        value: 'Bathrooms, kitchens, whole-home work',
        detail: 'Strong for homes that need meaningful modernization without losing neighborhood fit.',
      },
      {
        label: 'Typical challenge',
        value: 'Older-house coordination',
        detail: 'Layout, systems, and finish decisions often need to be solved together.',
      },
      {
        label: 'Primary value add',
        value: 'Renovation sequencing',
        detail: 'The best Tustin scopes deal with the hidden work before celebrating the visible work.',
      },
    ],
    notes: [
      'Old Town and older North Tustin properties often require more infrastructure awareness.',
      'Newer planned neighborhoods may lean more toward refinement than deep system replacement.',
      'The best early decision is often whether the house needs phased work or a fuller renovation approach.',
    ],
    serviceSlugs: ['bathroom-remodeling', 'kitchen-remodeling', 'full-home-renovation'],
    relatedBlogSlugs: ['tustin-bathroom-remodel-old-town-vs-ranch-2026', 'whole-home-renovation-orange-county-2026'],
    relatedResourceSlugs: ['contractor-checklist', 'planning-workbook', 'project-timeline'],
    relatedProjectSlugs: ['spa-inspired-bathroom', 'full-home-renovation'],
    faq: [
      {
        question: 'Does Stone Development serve Tustin?',
        answer:
          'Yes. We work across Tustin neighborhoods including Old Town Tustin, Tustin Ranch, North Tustin, Columbus Square, and Peppertree.',
      },
      {
        question: 'What project types are the best fit in Tustin?',
        answer:
          'Bathroom remodeling, kitchen remodeling, additions, and whole-home renovation planning are especially strong fits.',
      },
      {
        question: 'Why do older Tustin homes need more careful planning?',
        answer:
          'Because once work begins, hidden plumbing, electrical, ventilation, and framing conditions can change the real scope quickly.',
      },
    ],
    updatedAt: '2026-03-31T12:00:00.000Z',
  },
  {
    slug: 'lake-forest',
    name: 'Lake Forest',
    title: 'Lake Forest General Contractor',
    metaTitle: 'Lake Forest General Contractor | Stone Development Inc.',
    metaDescription:
      'Lake Forest contractor for kitchens, bathrooms, whole-home renovation, and reconstruction work with practical planning discipline.',
    answer:
      'Stone Development serves Lake Forest homeowners who need kitchens, bathrooms, whole-home renovations, and restoration work managed with practical sequencing and scope discipline.',
    intro:
      'Lake Forest homeowners often need a contractor who can distinguish between cosmetic improvement and real renovation value. The strongest projects improve function, finish quality, and long-term reliability together.',
    neighborhoods: ['Foothill Ranch', 'Portola Hills', 'Baker Ranch', 'Serrano Highlands', 'The Woods'],
    stats: [
      {
        label: 'Best fit',
        value: 'Kitchens, baths, whole-home work',
        detail: 'Strong for dated homes that need coherent planning instead of disconnected upgrades.',
      },
      {
        label: 'Typical challenge',
        value: 'Practical prioritization',
        detail: 'Homeowners often need to decide what truly improves the house versus what simply adds spend.',
      },
      {
        label: 'Primary value add',
        value: 'Sequencing discipline',
        detail: 'The project wins when systems, scope, and finishes are handled in the right order.',
      },
    ],
    notes: [
      'Lake Forest projects often benefit from whole-home thinking rather than disconnected room-by-room work.',
      'Damage restoration and reconstruction can overlap with broader renovation planning here.',
      'Practical scope control matters more than decorative complexity.',
    ],
    serviceSlugs: ['kitchen-remodeling', 'bathroom-remodeling', 'full-home-renovation', 'damage-restoration'],
    relatedBlogSlugs: ['kitchen-remodel-lake-forest-family-home-2026', 'whole-home-renovation-orange-county-2026'],
    relatedResourceSlugs: ['cost-guide', 'project-timeline', 'maintenance-checklist'],
    relatedProjectSlugs: ['full-home-renovation', 'exterior-home-renovation'],
    faq: [
      {
        question: 'Does Stone Development serve Lake Forest?',
        answer:
          'Yes. We work across Lake Forest, including Foothill Ranch, Portola Hills, Baker Ranch, Serrano Highlands, and surrounding neighborhoods.',
      },
      {
        question: 'What project types are the best fit in Lake Forest?',
        answer:
          'Kitchen remodels, bathroom remodels, whole-home renovations, and damage restoration work are especially strong fits.',
      },
      {
        question: 'Can Stone Development help with reconstruction after damage?',
        answer:
          'Yes. We support reconstruction-focused scopes where the property needs a coherent contractor-led rebuild plan.',
      },
    ],
    updatedAt: '2026-03-31T12:00:00.000Z',
  },
];

export function getLocationPageBySlug(slug: string) {
  return LOCATION_PAGES.find((location) => location.slug === slug);
}

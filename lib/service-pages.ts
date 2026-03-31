export interface ServicePage {
  slug: string;
  name: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  answer: string;
  intro: string;
  stats: Array<{ label: string; value: string; detail: string }>;
  deliverables: string[];
  sections: Array<{ heading: string; body: string }>;
  faq: Array<{ question: string; answer: string }>;
  relatedBlogSlugs: string[];
  relatedResourceSlugs: string[];
  relatedProjectSlugs: string[];
  relatedLocationSlugs: string[];
  updatedAt: string;
}

export const SERVICE_PAGES: ServicePage[] = [
  {
    slug: 'home-additions',
    name: 'Home Additions',
    title: 'Orange County Home Additions',
    metaTitle: 'Home Additions in Orange County | Stone Development Inc.',
    metaDescription:
      'Room additions and second-story planning for Orange County homeowners. Stone Development scopes additions around lot fit, permits, structure, and finish expectations.',
    eyebrow: 'New Construction Service',
    answer:
      'Stone Development helps Orange County homeowners plan and build room additions around real constraints like lot coverage, structural load, HOA review, permit sequencing, and whether the added square footage truly improves the house.',
    intro:
      'Additions are high-value projects only when the extra square footage fits the lot, the house, and the market. The right contractor will tell you when to build, when to reconfigure inside the envelope, and when the scope is drifting toward an overbuilt mistake.',
    stats: [
      {
        label: 'Typical investment',
        value: '$200 to $500+ per square foot',
        detail: 'Driven by structure, plumbing, story count, and finish expectations.',
      },
      {
        label: 'Typical timeline',
        value: '5 to 12 months',
        detail: 'Longer on second stories, coastal review, or structurally complex sites.',
      },
      {
        label: 'Best fit',
        value: 'Bedroom, family room, suite, and second-story additions',
        detail: 'Especially relevant where staying in the neighborhood matters more than moving.',
      },
    ],
    deliverables: [
      'Feasibility planning before full design spend',
      'Lot, setback, and structural coordination',
      'Permit and HOA sequencing where applicable',
      'Construction management for additions tied into occupied homes',
      'Decision support around build-out, build-up, ADU, or deeper renovation',
    ],
    sections: [
      {
        heading: 'What makes a home addition worth doing in Orange County?',
        body: 'The value is not just square footage. It is whether the added space solves the right problem without breaking the lot, budget, or resale logic. In some neighborhoods the addition is the obvious move. In others, a smarter interior reconfiguration or ADU path wins. We treat that decision as part of the scope, not something the homeowner has to guess alone.',
      },
      {
        heading: 'Why do second-story and bathroom additions change the risk profile?',
        body: 'The moment the project adds plumbing, major structural reinforcement, or a second floor, the complexity climbs. Foundations, framing strategy, utility loads, plan review, and staging all become more consequential. That is why addition pricing moves so widely and why city-specific guidance matters so much.',
      },
      {
        heading: 'How does Stone Development keep additions buildable while the house remains occupied?',
        body: 'Occupied-home additions require sequencing discipline. Access, dust control, safety barriers, utility interruptions, rough inspection timing, and homeowner communication all need to be planned before production ramps. We build additions as live-site projects, not empty-shell assumptions.',
      },
    ],
    faq: [
      {
        question: 'How much do home additions cost in Orange County?',
        answer:
          'Many additions land in the $200 to $500+ per square foot range, with total cost shaped heavily by structure, plumbing, story count, and finish scope.',
      },
      {
        question: 'How long does a home addition usually take?',
        answer:
          'Many Orange County additions take roughly 5 to 12 months from early planning through final inspection.',
      },
      {
        question: 'Can Stone Development help compare an addition with an ADU?',
        answer:
          'Yes. That comparison is often one of the most important early feasibility decisions for homeowners who need more space or more housing flexibility.',
      },
      {
        question: 'Do you handle second-story planning too?',
        answer:
          'Yes. We can help homeowners evaluate whether a second-story addition is structurally, financially, and locally appropriate before they overcommit to drawings.',
      },
    ],
    relatedBlogSlugs: [
      'home-additions-guide-orange-county',
      'room-addition-cost-irvine-2026',
      'second-story-addition-newport-beach-worth-it-2026',
      'huntington-beach-room-addition-1960s-homes-2026',
    ],
    relatedResourceSlugs: ['adu-vs-addition', 'project-timeline', 'cost-guide'],
    relatedProjectSlugs: ['contemporary-home-addition'],
    relatedLocationSlugs: ['orange-county', 'irvine', 'newport-beach', 'huntington-beach'],
    updatedAt: '2026-03-31T12:00:00.000Z',
  },
  {
    slug: 'full-home-renovation',
    name: 'Full Home Renovation',
    title: 'Orange County Full Home Renovation',
    metaTitle: 'Full Home Renovation in Orange County | Stone Development Inc.',
    metaDescription:
      'Whole-home renovation planning and construction for Orange County homeowners who need major scope alignment, systems upgrades, and finish discipline.',
    eyebrow: 'Remodeling Service',
    answer:
      'Stone Development manages full home renovation projects across Orange County for homeowners who need layout, systems, finishes, and permitting coordinated as one disciplined scope instead of a chain of disconnected remodels.',
    intro:
      'Whole-home work only pays off when the scope is phased intelligently, systems are addressed in the right order, and the finish package matches the house and submarket. This is where weak planning creates the biggest overruns and where strong sequencing creates the biggest savings.',
    stats: [
      {
        label: 'Typical investment',
        value: '$150,000 to $1,000,000+',
        detail: 'Wide range because whole-home scope can mean cosmetic reset or full structural and systems overhaul.',
      },
      {
        label: 'Typical timeline',
        value: '4 to 12 months',
        detail: 'Driven by scope, permit path, utilities, and homeowner decision speed.',
      },
      {
        label: 'Best fit',
        value: 'Layout, systems, and finish modernization',
        detail: 'Especially effective for dated homes that need one coherent plan instead of room-by-room patching.',
      },
    ],
    deliverables: [
      'Scope alignment across structure, MEP, finishes, and permits',
      'Phasing strategy when homeowners cannot or should not do everything at once',
      'Trade sequencing built around inspections and long-lead materials',
      'Clear pricing logic around systems-first and finish-first decisions',
      'Project management for major occupied or temporary-relocation remodels',
    ],
    sections: [
      {
        heading: 'When should a homeowner choose a full home renovation instead of piecemeal work?',
        body: 'The answer is usually yes when several rooms need work, the systems are dated, and the layout no longer supports the way the house is used. Piecemeal remodeling can look cheaper at the start, but once walls reopen twice and trades are re-sequenced twice, the hidden cost becomes obvious.',
      },
      {
        heading: 'What usually drives the budget on a whole-home project?',
        body: 'Electrical, plumbing, HVAC, windows, layout changes, and finish level move the budget fastest. In older Orange County housing stock, systems and code alignment are often the real cost floor. In higher-end markets, finish expectations and structural rework pull harder.',
      },
      {
        heading: 'How does Stone Development keep full renovations from turning into chaos?',
        body: 'We treat whole-home work as a sequencing problem first. Scope clarity, long-lead procurement, permit bundling, and homeowner decision deadlines are established early so the project does not stall halfway through rough work or finish ordering.',
      },
    ],
    faq: [
      {
        question: 'How much does a full home renovation cost in Orange County?',
        answer:
          'Many full home renovations start around $150,000 and can exceed $1,000,000 depending on square footage, systems scope, structural work, and finish level.',
      },
      {
        question: 'How long does a whole-home remodel usually take?',
        answer:
          'Many projects run roughly 4 to 12 months from planning through completion, depending on scope and permit path.',
      },
      {
        question: 'Does Stone Development help phase large renovation scopes?',
        answer:
          'Yes. Phasing can be the right move when the homeowner wants to protect quality without forcing every room into one construction window.',
      },
      {
        question: 'Is a full renovation better than moving?',
        answer:
          'Sometimes yes, especially when the existing location still works but the house itself is the problem. The real answer depends on scope, neighborhood value, and replacement cost.',
      },
    ],
    relatedBlogSlugs: ['whole-home-renovation-orange-county-2026'],
    relatedResourceSlugs: ['cost-guide', 'planning-workbook', 'project-timeline'],
    relatedProjectSlugs: ['full-home-renovation', 'exterior-home-renovation'],
    relatedLocationSlugs: ['orange-county', 'mission-viejo', 'lake-forest', 'tustin'],
    updatedAt: '2026-03-31T12:00:00.000Z',
  },
  {
    slug: 'custom-homes',
    name: 'Custom Homes',
    title: 'Custom Home Building in Orange County',
    metaTitle: 'Custom Home Builder in Orange County | Stone Development Inc.',
    metaDescription:
      'Stone Development builds custom homes in Orange County with disciplined planning, finish alignment, and general contractor oversight from first scope through final turnover.',
    eyebrow: 'New Construction Service',
    answer:
      'Stone Development supports custom home clients in Orange County who need a general contractor focused on scope discipline, high-finish execution, permit management, and a build path aligned with the property and market.',
    intro:
      'Custom homes reward precise leadership and punish loose assumptions. The wrong builder lets design momentum outrun constructability, budget, and municipal reality. The right builder keeps the project grounded in a buildable sequence from the start.',
    stats: [
      {
        label: 'Project structure',
        value: 'Custom scoped',
        detail: 'Every custom home carries a unique entitlement, design, and finish path.',
      },
      {
        label: 'Primary focus',
        value: 'Buildability and finish discipline',
        detail: 'The risk is rarely the idea itself. It is whether the scope remains executable through permitting and construction.',
      },
      {
        label: 'Best fit',
        value: 'Ground-up homes and major rebuild programs',
        detail: 'Especially valuable when the project needs contractor leadership early, not just at mobilization.',
      },
    ],
    deliverables: [
      'Scope and constructability alignment during planning',
      'Permit path awareness and build sequencing',
      'Trade and finish coordination for high-detail construction',
      'Budget clarity around scope decisions that materially move the build',
      'Project oversight through turnover and punch completion',
    ],
    sections: [
      {
        heading: 'What should homeowners expect from a custom home builder before construction starts?',
        body: 'The strongest builders do not wait for the permit to think like builders. They pressure-test scope, details, budget assumptions, lead times, and site logistics while the project is still flexible enough to improve. That is where the biggest value is created.',
      },
      {
        heading: 'How does Stone Development approach custom home execution?',
        body: 'We focus on the handoff between planning and production. When design, entitlement, procurement, and field sequencing stay aligned, the project stays credible. When they drift apart, even expensive homes start making cheap decisions under pressure.',
      },
      {
        heading: 'Why does market context matter so much on a custom home project?',
        body: 'Orange County is not a single build environment. Coastal expectations, lot constraints, neighborhood scale, and review culture all change the right path. A disciplined builder has to read that context early and keep the construction plan honest as the scope sharpens.',
      },
    ],
    faq: [
      {
        question: 'Does Stone Development build custom homes in Orange County?',
        answer:
          'Yes. Custom home work is part of our broader Southern California general contracting focus, especially where disciplined planning and finish execution matter.',
      },
      {
        question: 'Can Stone Development support custom home planning before mobilization?',
        answer:
          'Yes. Contractor input is most valuable when scope, constructability, and sequencing decisions are still flexible.',
      },
      {
        question: 'Is custom home work handled differently from renovations?',
        answer:
          'Yes. Ground-up and major rebuild projects carry a different permit, sequencing, and procurement path than remodel-first work.',
      },
      {
        question: 'Which markets are the best fit for custom home conversations?',
        answer:
          'Orange County and nearby Southern California markets where site conditions, review path, and finish expectations need contractor leadership early.',
      },
    ],
    relatedBlogSlugs: ['whole-home-renovation-orange-county-2026'],
    relatedResourceSlugs: ['planning-workbook', 'contractor-checklist'],
    relatedProjectSlugs: ['exterior-renovation-after'],
    relatedLocationSlugs: ['orange-county', 'newport-beach', 'irvine'],
    updatedAt: '2026-03-31T12:00:00.000Z',
  },
  {
    slug: 'damage-restoration',
    name: 'Damage Restoration',
    title: 'Orange County Damage Restoration',
    metaTitle: 'Damage Restoration in Orange County | Stone Development Inc.',
    metaDescription:
      'Stone Development helps Orange County homeowners recover from water and fire damage with disciplined scope control, repair planning, and reconstruction management.',
    eyebrow: 'Specialty Service',
    answer:
      'Stone Development supports damage restoration and reconstruction projects in Orange County for homeowners who need a general contractor to turn an unstable property condition into a buildable repair scope.',
    intro:
      'Restoration work is rarely just cleanup. Once the house is opened, the job becomes a scope-definition problem: what is damaged, what must be replaced, what now has to be brought to code, and what sequence gets the home stable again without compounding the loss.',
    stats: [
      {
        label: 'Project structure',
        value: 'Inspection-led',
        detail: 'The repair path depends on what the opening reveals about damage spread and rebuild requirements.',
      },
      {
        label: 'Primary focus',
        value: 'Stabilize, define, rebuild',
        detail: 'The early win is clarity around the real repair scope and sequencing.',
      },
      {
        label: 'Best fit',
        value: 'Water and fire-related reconstruction',
        detail: 'Especially where the property needs contractor leadership beyond basic remediation.',
      },
    ],
    deliverables: [
      'Scope clarification after damage exposure and demolition',
      'Repair planning tied to code-compliant reconstruction',
      'Trade sequencing for drying, rebuild, and finish recovery',
      'Clear communication around what is salvageable and what is not',
      'General contractor oversight through reconstruction closeout',
    ],
    sections: [
      {
        heading: 'What does a restoration-focused general contractor actually do?',
        body: 'The job is to translate damage into a coherent rebuild path. That means clarifying structural, electrical, plumbing, finish, and schedule implications after the property is safe to inspect. Homeowners need more than emergency action. They need a credible reconstruction plan.',
      },
      {
        heading: 'Why do restoration scopes expand so quickly?',
        body: 'Because the visible damage is often only the front edge of the real damage. Once walls, ceilings, cabinetry, or flooring open, the scope may pick up code issues, hidden moisture paths, smoke migration, or underlying utility damage that must be corrected before finishes can return.',
      },
      {
        heading: 'How does Stone Development approach reconstruction after damage?',
        body: 'We focus on restoring the house with the same discipline we apply to major renovations: scope clarity, sequencing, permitting where required, and finish recovery that does not ignore the upgraded conditions the house now needs.',
      },
    ],
    faq: [
      {
        question: 'Does Stone Development handle water and fire damage reconstruction?',
        answer:
          'Yes. We can support the rebuild side of damage restoration where a property needs disciplined contractor oversight and reconstruction planning.',
      },
      {
        question: 'Can hidden damage change the repair scope after demolition?',
        answer:
          'Yes. That is common, which is why early scope clarification matters so much on restoration work.',
      },
      {
        question: 'Do restoration projects sometimes require permits?',
        answer:
          'Yes when the repair path touches structural, electrical, plumbing, mechanical, or other code-regulated work.',
      },
      {
        question: 'Which markets do you serve for restoration work?',
        answer:
          'We focus on Orange County and nearby Southern California homeowners who need the reconstruction side of the project handled with general contractor discipline.',
      },
    ],
    relatedBlogSlugs: ['whole-home-renovation-orange-county-2026'],
    relatedResourceSlugs: ['contractor-checklist', 'project-timeline'],
    relatedProjectSlugs: ['exterior-home-renovation'],
    relatedLocationSlugs: ['orange-county', 'mission-viejo', 'lake-forest'],
    updatedAt: '2026-03-31T12:00:00.000Z',
  },
  {
    slug: 'kitchen-remodeling',
    name: 'Kitchen Remodeling',
    title: 'Orange County Kitchen Remodeling',
    metaTitle: 'Kitchen Remodeling in Orange County | Stone Development Inc.',
    metaDescription:
      'Stone Development delivers kitchen remodeling across Orange County, from Irvine layout reworks to coastal finish packages. Transparent planning, permits, and construction.',
    eyebrow: 'Remodeling Service',
    answer:
      'Stone Development handles kitchen remodeling across Orange County, combining layout planning, permit coordination, and high-finish construction for homes that need more function and better resale positioning.',
    intro:
      'Our kitchen work is built for Southern California homes that cannot afford generic planning. Irvine tract layouts, coastal material exposure, premium finish expectations, and older infrastructure all change the right scope before demolition even starts.',
    stats: [
      {
        label: 'Typical investment',
        value: '$35,000 to $250,000+',
        detail: 'Aligned to the live 2026 SoCal cost guide already published on the site.',
      },
      {
        label: 'Typical timeline',
        value: '8 to 14 weeks',
        detail: 'Longer when structural changes, coastal review, or major MEP relocation enter the scope.',
      },
      {
        label: 'Best fit',
        value: 'Layout, finish, and resale upgrades',
        detail: 'Especially strong for kitchens that need both better daily function and stronger market positioning.',
      },
    ],
    deliverables: [
      'Layout review and scope planning before pricing',
      'Permit coordination for structural, electrical, gas, and plumbing work',
      'Cabinet, stone, appliance, and lighting sequencing',
      'Trade coordination through rough inspections and finish turnover',
      'Clear line from concept through final punch',
    ],
    sections: [
      {
        heading: 'How does Stone Development scope kitchen remodels in Orange County?',
        body: 'We start with how the kitchen fails today: circulation, storage, sightlines, utility capacity, or resale drag. That keeps the project grounded in measurable improvement instead of decorative drift. In Irvine and Mission Viejo, the fastest wins often come from cleaner layout logic and better finish coordination. In Newport Beach and Huntington Beach, the material package and environmental conditions carry more weight.',
      },
      {
        heading: 'What changes the budget on a Southern California kitchen project?',
        body: 'Cabinetry, countertops, appliance grade, and whether the plumbing or structure moves still drive the budget hardest. The wrong assumption is treating every Orange County kitchen as interchangeable. A tract-home opening in Irvine, a coastal corrosion-resistant package in Newport Beach, and a 1960s modernization in Huntington Beach do not share the same labor path.',
      },
      {
        heading: 'Why do homeowners use Stone Development instead of a design-only or trade-only path?',
        body: 'Kitchen projects break down when design, permits, rough work, and finish procurement are handed across too many separate parties. Stone Development keeps the estimating logic tied to the build path, which is why we can tell you early when a wall removal, panel upgrade, or plumbing relocation is worth it and when it is just budget drag.',
      },
    ],
    faq: [
      {
        question: 'How much does a kitchen remodel cost in Orange County?',
        answer:
          'Most Orange County kitchen remodels land between $35,000 and $250,000+ depending on scope, finish level, and whether plumbing or structure moves.',
      },
      {
        question: 'Do kitchen remodels require permits in California?',
        answer:
          'Yes when the project touches electrical, gas, plumbing, mechanical, or structural work. Cosmetic-only swaps usually do not.',
      },
      {
        question: 'Which cities does Stone Development serve for kitchen remodeling?',
        answer:
          'We focus heavily on Irvine, Newport Beach, Huntington Beach, Costa Mesa, Mission Viejo, Tustin, Lake Forest, and wider Orange County.',
      },
      {
        question: 'Can Stone Development help with both design alignment and construction?',
        answer:
          'Yes. The process is built around scope planning, pricing clarity, permit sequencing, and finish coordination so the kitchen is managed as one job instead of disconnected decisions.',
      },
    ],
    relatedBlogSlugs: [
      'kitchen-remodeling-orange-county-2026-guide',
      'kitchen-remodel-cost-irvine-2026',
      'newport-beach-kitchen-remodel-2026-coastal-pricing',
      'huntington-beach-1960s-kitchen-remodel-2026',
    ],
    relatedResourceSlugs: ['cost-guide', 'budget-calculator', 'permit-guide'],
    relatedProjectSlugs: ['modern-kitchen-renovation'],
    relatedLocationSlugs: ['orange-county', 'irvine', 'newport-beach', 'huntington-beach'],
    updatedAt: '2026-03-31T12:00:00.000Z',
  },
  {
    slug: 'bathroom-remodeling',
    name: 'Bathroom Remodeling',
    title: 'Orange County Bathroom Remodeling',
    metaTitle: 'Bathroom Remodeling in Orange County | Stone Development Inc.',
    metaDescription:
      'Bathroom remodeling across Orange County with permit planning, finish coordination, and build discipline for primary baths, guest baths, and accessibility upgrades.',
    eyebrow: 'Remodeling Service',
    answer:
      'Stone Development delivers bathroom remodeling across Orange County, from focused guest bath upgrades to full primary-suite transformations that require plumbing, electrical, waterproofing, and accessibility planning.',
    intro:
      'Bathroom projects look compact on paper but they punish weak planning fast. Waterproofing, venting, rough plumbing, fixture lead times, and aging conditions behind the walls all compress into a small footprint where mistakes are expensive.',
    stats: [
      {
        label: 'Typical investment',
        value: '$20,000 to $100,000+',
        detail: 'Guest baths, primary suites, and coastal luxury scopes sit on very different cost bands.',
      },
      {
        label: 'Typical timeline',
        value: '4 to 10 weeks',
        detail: 'Longer when the layout moves or the project includes accessibility or major infrastructure upgrades.',
      },
      {
        label: 'Best fit',
        value: 'Primary baths, guest baths, accessibility upgrades',
        detail: 'Especially valuable when the existing room is dated, cramped, or not aging-in-place ready.',
      },
    ],
    deliverables: [
      'Scope planning around layout, fixture, and waterproofing risk',
      'Permit coordination for plumbing, electrical, and structural work',
      'Tile, glass, vanity, and plumbing fixture sequencing',
      'Tight management of inspections inside compact footprints',
      'Finish-driven closeout with punch discipline',
    ],
    sections: [
      {
        heading: 'What makes bathroom remodels harder than they look?',
        body: 'The room is small, but the trades are dense. Plumbing, electrical, waterproofing, tile tolerances, glazing, and ventilation all stack in the same space. When the sequence slips, you feel it immediately. That is why we build bathroom projects around decisions that remove downstream conflicts before the room is open.',
      },
      {
        heading: 'How does Orange County housing stock change a bathroom scope?',
        body: 'Older homes in Huntington Beach, Mission Viejo, and Tustin regularly bring galvanized plumbing, undersized wiring, or hidden water damage into the scope. Newer Irvine homes usually shift the challenge toward finish expectations and layout refinement instead of systems replacement. Treating both groups the same is how budgets get blindsided.',
      },
      {
        heading: 'Where does Stone Development add value on higher-end bath projects?',
        body: 'Primary suites and accessibility upgrades need more than better tile. They need drainage planning, fixture discipline, waterproofing quality, and a build path that respects the rest of the house. That is where a general contractor with sequencing control matters more than a finish-only mindset.',
      },
    ],
    faq: [
      {
        question: 'How much does bathroom remodeling cost in Orange County?',
        answer:
          'Bathroom remodels generally range from $20,000 to $100,000+ depending on room size, finish level, and whether plumbing or structure moves.',
      },
      {
        question: 'Do bathroom remodels require permits?',
        answer:
          'Yes when plumbing, electrical, gas, mechanical, or structural changes are involved. Cosmetic-only work usually sits outside that permit path.',
      },
      {
        question: 'Can Stone Development handle accessibility-focused bathrooms?',
        answer:
          'Yes. We can plan for walk-in showers, safer circulation, better lighting, and other build decisions that support aging in place.',
      },
      {
        question: 'Which Orange County markets do you serve for bathroom remodeling?',
        answer:
          'We regularly target Irvine, Newport Beach, Huntington Beach, Mission Viejo, Tustin, Lake Forest, Costa Mesa, and broader Orange County.',
      },
    ],
    relatedBlogSlugs: [
      'bathroom-remodeling-orange-county-2026-guide',
      'master-bath-vs-guest-bath-remodel-newport-beach',
      'huntington-beach-bathroom-remodel-coastal-2026',
      'tustin-bathroom-remodel-old-town-vs-ranch-2026',
    ],
    relatedResourceSlugs: ['cost-guide', 'contractor-checklist', 'permit-guide'],
    relatedProjectSlugs: ['spa-inspired-bathroom'],
    relatedLocationSlugs: ['orange-county', 'newport-beach', 'huntington-beach', 'tustin'],
    updatedAt: '2026-03-31T12:00:00.000Z',
  },
  {
    slug: 'adu-construction',
    name: 'ADU Construction',
    title: 'Orange County ADU Construction',
    metaTitle: 'ADU Builder in Orange County | Stone Development Inc.',
    metaDescription:
      'Detached ADUs, garage conversions, and planning support for Orange County homeowners. Stone Development handles scope, permits, and construction discipline.',
    eyebrow: 'New Construction Service',
    answer:
      'Stone Development builds ADUs across Orange County, helping homeowners evaluate lot fit, permit path, utility scope, and whether detached new construction or conversion work makes the best financial sense.',
    intro:
      'ADU demand is strong because the underlying homeowner goals are strong: rental income, multigenerational living, flexible housing, and smarter land use. The hard part is not wanting the ADU. It is underwriting the real approval, utility, and construction path before design costs pile up.',
    stats: [
      {
        label: 'Typical investment',
        value: '$150,000 to $375,000+',
        detail: 'Detached units, conversions, and larger two-bedroom programs sit on different cost bands.',
      },
      {
        label: 'Typical timeline',
        value: '10 to 18 months',
        detail: 'From early planning through permit, construction, and final signoff.',
      },
      {
        label: 'Best fit',
        value: 'Detached ADUs, conversions, and feasibility reviews',
        detail: 'Especially strong for homeowners comparing rental return, family use, and addition alternatives.',
      },
    ],
    deliverables: [
      'Lot and scope feasibility planning before heavy design spend',
      'Permit and planning coordination for Orange County jurisdictions',
      'Utility, access, and sequencing management through construction',
      'Clear distinction between detached units, garage conversions, and JADUs',
      'Decision support around ADU versus addition tradeoffs',
    ],
    sections: [
      {
        heading: 'What should homeowners decide before designing an ADU?',
        body: 'The smartest first question is not square footage. It is use case. Rental income, family housing, office space, and resale strategy create different program priorities and different risk tolerances. Once that is clear, lot fit, utility routing, parking assumptions, and approval friction become much easier to evaluate honestly.',
      },
      {
        heading: 'Why are Orange County ADU projects so city-specific?',
        body: 'The state framework matters, but site context still matters. Irvine, Costa Mesa, and other Orange County cities create different front-end realities through lot coverage, utility conditions, neighborhood patterns, and review workflows. A county-level average is useful, but the project succeeds or fails at the parcel level.',
      },
      {
        heading: 'How does Stone Development keep ADU projects from drifting?',
        body: 'ADUs fail when owners move into design too quickly or compare detached construction with conversions as if they are the same scope. We front-load the feasibility conversation, pricing logic, and permit strategy so the homeowner knows what they are actually committing to before the spend accelerates.',
      },
    ],
    faq: [
      {
        question: 'How much does an ADU cost in Orange County?',
        answer:
          'Detached ADUs often range from $150,000 to $375,000+, while conversions or smaller units may land below that depending on size and utility scope.',
      },
      {
        question: 'Does Stone Development only build detached ADUs?',
        answer:
          'No. We can help evaluate detached ADUs, garage conversions, and other secondary-unit strategies based on the property and the homeowner goal.',
      },
      {
        question: 'How long does an ADU take from planning to completion?',
        answer:
          'Many Orange County ADU projects run roughly 10 to 18 months from early scope planning through final occupancy.',
      },
      {
        question: 'Which markets do you prioritize for ADU construction?',
        answer:
          'We focus heavily on Orange County with especially strong relevance for Irvine, Costa Mesa, and other cities where homeowners are actively comparing ADUs with additions.',
      },
    ],
    relatedBlogSlugs: [
      'adu-construction-orange-county-2026-guide',
      'adu-builder-irvine-permit-cost-2026',
      'adu-construction-costa-mesa-what-to-expect',
    ],
    relatedResourceSlugs: ['adu-starter-kit', 'adu-vs-addition', 'budget-calculator'],
    relatedProjectSlugs: ['backyard-adu'],
    relatedLocationSlugs: ['orange-county', 'irvine', 'costa-mesa'],
    updatedAt: '2026-03-31T12:00:00.000Z',
  },
];

export function getServicePageBySlug(slug: string) {
  return SERVICE_PAGES.find((service) => service.slug === slug);
}

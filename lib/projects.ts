import type { StaticImageData } from 'next/image';
import bgAdu from '@/src/assets/project-adu.jpg';
import bgAddition from '@/src/assets/project-addition.jpg';
import bgBathroom from '@/src/assets/project-bathroom.jpg';
import bgExteriorAfter from '@/src/assets/project-exterior-after.jpg';
import bgExterior from '@/src/assets/project-exterior.jpg';
import bgFullHome from '@/src/assets/full-home.jpg';
import bgKitchen from '@/src/assets/project-kitchen.jpg';

export interface ProjectCaseStudy {
  slug: string;
  title: string;
  category: string;
  filterTags: Array<'Remodeling' | 'New Construction' | 'ADU' | 'Commercial'>;
  image: StaticImageData;
  imageAlt: string;
  market: string;
  marketSlug: string;
  serviceSlug: string;
  summary: string;
  planningRange: string;
  deliveryWindow: string;
  challenge: string;
  solution: string;
  outcome: string;
  highlights: string[];
  updatedAt: string;
}

export const PROJECTS: ProjectCaseStudy[] = [
  {
    slug: 'modern-kitchen-renovation',
    title: 'Modern Kitchen Renovation',
    category: 'Kitchen Remodeling',
    filterTags: ['Remodeling'],
    image: bgKitchen,
    imageAlt: 'Modern kitchen renovation with a large island and custom cabinetry',
    market: 'Irvine',
    marketSlug: 'irvine',
    serviceSlug: 'kitchen-remodeling',
    summary:
      'A kitchen-focused remodel built around better circulation, cleaner finishes, and stronger resale alignment for an Irvine family home.',
    planningRange: '$35,000 to $250,000+ for comparable Orange County kitchen scopes',
    deliveryWindow: 'Comparable kitchen projects often run 8 to 14 weeks after permits and cabinets are ready',
    challenge:
      'The original kitchen felt dated, boxed in, and too disconnected from the surrounding living area.',
    solution:
      'Stone Development treated the project as a layout, sequencing, and finish-alignment problem instead of a cosmetic swap.',
    outcome:
      'The new kitchen reads brighter, more useful, and more credible inside a premium Orange County market.',
    highlights: [
      'Layout-led kitchen planning',
      'Occupied-home remodel sequencing',
      'Finish package aligned with Irvine resale expectations',
    ],
    updatedAt: '2026-03-31T12:00:00.000Z',
  },
  {
    slug: 'spa-inspired-bathroom',
    title: 'Spa-Inspired Bathroom',
    category: 'Bathroom Remodeling',
    filterTags: ['Remodeling'],
    image: bgBathroom,
    imageAlt: 'Luxury bathroom remodel with modern stone finishes and custom lighting',
    market: 'Newport Beach',
    marketSlug: 'newport-beach',
    serviceSlug: 'bathroom-remodeling',
    summary:
      'A bathroom remodel centered on calmer materials, tighter waterproofing discipline, and a stronger primary-suite experience.',
    planningRange: '$20,000 to $100,000+ for comparable Orange County bathroom scopes',
    deliveryWindow: 'Comparable bathroom remodels often run 4 to 10 weeks depending on layout and rough-trade changes',
    challenge:
      'The existing bathroom lacked the finish quality and spatial clarity expected in a premium coastal home.',
    solution:
      'The project was built around waterproofing, fixture sequencing, and restrained finish choices that could feel elevated without becoming visually noisy.',
    outcome:
      'The finished space feels quieter, sharper, and far more aligned with the rest of the home.',
    highlights: [
      'Primary-suite upgrade strategy',
      'Waterproofing and finish sequencing handled together',
      'Coastal-market finish discipline',
    ],
    updatedAt: '2026-03-31T12:00:00.000Z',
  },
  {
    slug: 'exterior-home-renovation',
    title: 'Exterior Home Renovation',
    category: 'Full Home Remodeling',
    filterTags: ['Remodeling'],
    image: bgExterior,
    imageAlt: 'Exterior home renovation before final facade improvements',
    market: 'Lake Forest',
    marketSlug: 'lake-forest',
    serviceSlug: 'full-home-renovation',
    summary:
      'An exterior-led renovation story showing how curb appeal improvement can support a broader whole-home strategy.',
    planningRange: '$150,000 to $1,000,000+ for comparable whole-home renovation scopes',
    deliveryWindow: 'Comparable major renovations often run 4 to 12 months depending on systems and envelope work',
    challenge:
      'The property needed a stronger first impression without losing practical build logic.',
    solution:
      'Stone Development aligned facade updates with a broader renovation framework instead of treating the exterior as a standalone cosmetic fix.',
    outcome:
      'The house now reads more deliberate, current, and market-ready without feeling overworked.',
    highlights: [
      'Exterior improvement tied to broader house strategy',
      'Useful proof point for phased renovation planning',
      'Curb appeal improved through disciplined scope control',
    ],
    updatedAt: '2026-03-31T12:00:00.000Z',
  },
  {
    slug: 'exterior-renovation-after',
    title: 'Exterior Renovation - After',
    category: 'Full Home Remodeling',
    filterTags: ['Remodeling'],
    image: bgExteriorAfter,
    imageAlt: 'Completed exterior home renovation with refined finishes',
    market: 'Orange County',
    marketSlug: 'orange-county',
    serviceSlug: 'custom-homes',
    summary:
      'A finished exterior view that highlights how strong contractor restraint can create a more credible high-end result.',
    planningRange: 'Custom scoped for comparable rebuild and custom-home programs',
    deliveryWindow: 'Comparable rebuild and custom-home schedules vary by design, approvals, and site conditions',
    challenge:
      'The project needed to look materially stronger without drifting into disconnected design decisions.',
    solution:
      'The exterior language was kept cohesive and buildable instead of chasing upgrades that the property could not support cleanly.',
    outcome:
      'The finished facade feels intentional, higher-value, and much better aligned with the property.',
    highlights: [
      'Good reference for custom-home and rebuild conversations',
      'Finish restraint used to create a stronger final presence',
      'Buildability protected through design decisions',
    ],
    updatedAt: '2026-03-31T12:00:00.000Z',
  },
  {
    slug: 'contemporary-home-addition',
    title: 'Contemporary Home Addition',
    category: 'New Construction',
    filterTags: ['New Construction'],
    image: bgAddition,
    imageAlt: 'Contemporary home addition with integrated new living space',
    market: 'Newport Beach',
    marketSlug: 'newport-beach',
    serviceSlug: 'home-additions',
    summary:
      'A home addition case study focused on adding square footage without losing lot fit, architectural continuity, or build discipline.',
    planningRange: '$200 to $500+ per square foot for comparable Orange County addition scopes',
    deliveryWindow: 'Comparable addition projects often run 5 to 12 months depending on structure and permit path',
    challenge:
      'The homeowners needed more living space, but the addition still had to feel like part of the house instead of an expensive compromise.',
    solution:
      'Stone Development framed the project around lot fit, structural integration, and finish continuity across the old and new spaces.',
    outcome:
      'The added area feels intentional, livable, and better matched to the house and neighborhood than a purely size-driven solution.',
    highlights: [
      'Addition planning centered on fit, not just square footage',
      'Useful comparison point for moving versus building',
      'Coastal-market addition discipline',
    ],
    updatedAt: '2026-03-31T12:00:00.000Z',
  },
  {
    slug: 'full-home-renovation',
    title: 'Full Home Renovation',
    category: 'Interior Remodeling',
    filterTags: ['Remodeling'],
    image: bgFullHome,
    imageAlt: 'Full home renovation interior with modernized open living areas',
    market: 'Mission Viejo',
    marketSlug: 'mission-viejo',
    serviceSlug: 'full-home-renovation',
    summary:
      'A whole-home renovation example for homeowners balancing layout change, systems thinking, and finish modernization in one coordinated scope.',
    planningRange: '$150,000 to $1,000,000+ for comparable Orange County whole-home projects',
    deliveryWindow: 'Comparable whole-home renovations often run 4 to 12 months depending on systems, permits, and phasing',
    challenge:
      'The home needed a more coherent interior story and better daily function across multiple spaces.',
    solution:
      'The renovation was approached as a sequencing problem first so layout work, systems updates, and finishes could move as one plan.',
    outcome:
      'The completed home feels significantly more current and organized without the mismatch common to piecemeal remodel histories.',
    highlights: [
      'Whole-home thinking instead of room-by-room patching',
      'Strong example for phased-versus-full renovation decisions',
      'Layout, systems, and finish coordination handled together',
    ],
    updatedAt: '2026-03-31T12:00:00.000Z',
  },
  {
    slug: 'backyard-adu',
    title: 'Backyard ADU',
    category: 'Accessory Dwelling Unit',
    filterTags: ['ADU', 'New Construction'],
    image: bgAdu,
    imageAlt: 'Backyard ADU project designed for flexible living and property value',
    market: 'Costa Mesa',
    marketSlug: 'costa-mesa',
    serviceSlug: 'adu-construction',
    summary:
      'An ADU case study built around flexible property use, front-end feasibility, and a cleaner comparison between detached construction and other expansion options.',
    planningRange: '$150,000 to $375,000+ for comparable Orange County ADU scopes',
    deliveryWindow: 'Comparable ADU projects often run 10 to 18 months from planning through final signoff',
    challenge:
      'The property needed a second structure that added flexibility without forcing the wrong detached build path.',
    solution:
      'Stone Development used feasibility-first planning to align site use, utilities, and the homeowner’s long-term goals before construction accelerated.',
    outcome:
      'The finished ADU reads like a strategic property improvement instead of a generic second building.',
    highlights: [
      'Use-case-first ADU planning',
      'Strong reference for Costa Mesa and wider Orange County owners',
      'Detached-unit strategy grounded in site and utility logic',
    ],
    updatedAt: '2026-03-31T12:00:00.000Z',
  },
];

export const projects = PROJECTS;

export function getProjectBySlug(slug: string) {
  return PROJECTS.find((project) => project.slug === slug);
}

import type { BlogPost } from '@/src/data/blog-posts';
import { PROJECTS } from '@/lib/projects';

export const SERVICE_SLUG_BY_CTA: Record<string, string> = {
  adu: 'adu-construction',
  'bathroom-remodel': 'bathroom-remodeling',
  'full-renovation': 'full-home-renovation',
  'kitchen-remodel': 'kitchen-remodeling',
  'room-addition': 'home-additions',
};

export const SERVICE_SLUG_BY_CATEGORY: Record<BlogPost['category'], string> = {
  'ADU Construction': 'adu-construction',
  'Bathroom Remodeling': 'bathroom-remodeling',
  'Construction Costs & ROI': 'kitchen-remodeling',
  'Custom Homes': 'custom-homes',
  'Damage Restoration': 'damage-restoration',
  'Full Home Renovation': 'full-home-renovation',
  'Hiring a Contractor': 'kitchen-remodeling',
  'Home Additions': 'home-additions',
  'Kitchen Remodeling': 'kitchen-remodeling',
  'Permits & Building Codes': 'kitchen-remodeling',
};

export const LOCATION_SLUG_BY_CITY: Record<string, string> = {
  'Costa Mesa': 'costa-mesa',
  'Huntington Beach': 'huntington-beach',
  Irvine: 'irvine',
  'Laguna Beach': 'orange-county',
  'Laguna Niguel': 'orange-county',
  'Lake Forest': 'lake-forest',
  'Mission Viejo': 'mission-viejo',
  'Newport Beach': 'newport-beach',
  'Orange County': 'orange-county',
  Tustin: 'tustin',
};

export function getServiceSlugFromPost(post: BlogPost) {
  return SERVICE_SLUG_BY_CTA[post.ctaServiceType] ?? SERVICE_SLUG_BY_CATEGORY[post.category];
}

export function getLocationSlugFromCity(city: string) {
  return LOCATION_SLUG_BY_CITY[city] ?? 'orange-county';
}

export function getPrimaryLocationSlugFromPost(post: BlogPost) {
  if (post.targetCities.length === 0) {
    return 'orange-county';
  }

  if (post.targetCities.length > 1) {
    return 'orange-county';
  }

  return getLocationSlugFromCity(post.targetCities[0]);
}

export function getPrimaryProjectSlug(serviceSlug: string, locationSlug?: string) {
  const exactMatch = PROJECTS.find(
    (project) =>
      project.serviceSlug === serviceSlug &&
      (!locationSlug || project.marketSlug === locationSlug)
  );

  if (exactMatch) {
    return exactMatch.slug;
  }

  return PROJECTS.find((project) => project.serviceSlug === serviceSlug)?.slug ?? null;
}

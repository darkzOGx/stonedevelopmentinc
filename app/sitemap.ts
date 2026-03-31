import { MetadataRoute } from 'next';
import { getPostUrl, isSitemapIncluded } from '@/lib/blog';
import { getFileLastModified, toIsoDate } from '@/lib/content-dates';
import { LOCATION_PAGES } from '@/lib/location-pages';
import { PROJECTS } from '@/lib/projects';
import { SERVICE_PAGES } from '@/lib/service-pages';
import {
  SERVICE_LOCATION_PAGES,
  getServiceLocationPath,
} from '@/lib/service-location-pages';
import { absoluteUrl } from '@/lib/site';
import { BLOG_POSTS } from '@/src/data/blog-posts';

const STATIC_ROUTES = [
  { path: '/', file: 'app/page.tsx', changeFrequency: 'monthly' as const, priority: 1 },
  { path: '/about', file: 'app/about/page.tsx', changeFrequency: 'monthly' as const, priority: 0.7 },
  { path: '/services', file: 'app/services/page.tsx', changeFrequency: 'weekly' as const, priority: 0.95 },
  { path: '/locations', file: 'app/locations/page.tsx', changeFrequency: 'weekly' as const, priority: 0.9 },
  { path: '/contact', file: 'app/contact/page.tsx', changeFrequency: 'monthly' as const, priority: 0.85 },
  { path: '/portfolio', file: 'app/portfolio/page.tsx', changeFrequency: 'monthly' as const, priority: 0.9 },
  { path: '/blog', file: 'app/blog/page.tsx', changeFrequency: 'weekly' as const, priority: 0.9 },
  { path: '/resources', file: 'app/resources/page.tsx', changeFrequency: 'weekly' as const, priority: 0.8 },
  {
    path: '/resources/cost-guide',
    file: 'app/resources/cost-guide/page.tsx',
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  },
  {
    path: '/resources/budget-calculator',
    file: 'app/resources/budget-calculator/page.tsx',
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  },
  {
    path: '/resources/contractor-checklist',
    file: 'app/resources/contractor-checklist/page.tsx',
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  },
  {
    path: '/resources/adu-starter-kit',
    file: 'app/resources/adu-starter-kit/page.tsx',
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  },
  {
    path: '/resources/roi-report',
    file: 'app/resources/roi-report/page.tsx',
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  },
  {
    path: '/resources/10-costly-mistakes',
    file: 'app/resources/10-costly-mistakes/page.tsx',
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  },
  {
    path: '/resources/project-timeline',
    file: 'app/resources/project-timeline/page.tsx',
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  },
  {
    path: '/resources/design-lookbook',
    file: 'app/resources/design-lookbook/page.tsx',
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  },
  {
    path: '/resources/permit-guide',
    file: 'app/resources/permit-guide/page.tsx',
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  },
  {
    path: '/resources/planning-workbook',
    file: 'app/resources/planning-workbook/page.tsx',
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  },
  {
    path: '/resources/maintenance-checklist',
    file: 'app/resources/maintenance-checklist/page.tsx',
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  },
  {
    path: '/resources/adu-vs-addition',
    file: 'app/resources/adu-vs-addition/page.tsx',
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = STATIC_ROUTES.map((route) => ({
    url: absoluteUrl(route.path),
    lastModified: getFileLastModified(route.file),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const servicePages: MetadataRoute.Sitemap = SERVICE_PAGES.map((service) => ({
    url: absoluteUrl(`/services/${service.slug}`),
    lastModified: service.updatedAt,
    changeFrequency: 'monthly',
    priority: 0.9,
  }));

  const locationPages: MetadataRoute.Sitemap = LOCATION_PAGES.map((location) => ({
    url: absoluteUrl(`/locations/${location.slug}`),
    lastModified: location.updatedAt,
    changeFrequency: 'monthly',
    priority: 0.85,
  }));

  const serviceLocationPages: MetadataRoute.Sitemap = SERVICE_LOCATION_PAGES.map((page) => ({
    url: absoluteUrl(getServiceLocationPath(page.serviceSlug, page.locationSlug)),
    lastModified: page.updatedAt,
    changeFrequency: 'monthly',
    priority: 0.84,
  }));

  const projectPages: MetadataRoute.Sitemap = PROJECTS.map((project) => ({
    url: absoluteUrl(`/portfolio/${project.slug}`),
    lastModified: project.updatedAt,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const blogPages: MetadataRoute.Sitemap = BLOG_POSTS.filter(isSitemapIncluded).map((post) => ({
    url: getPostUrl(post),
    lastModified: toIsoDate(post.lastUpdated),
    changeFrequency: 'monthly' as const,
    priority: post.indexPriority,
  }));

  return [
    ...staticPages,
    ...servicePages,
    ...locationPages,
    ...serviceLocationPages,
    ...projectPages,
    ...blogPages,
  ];
}

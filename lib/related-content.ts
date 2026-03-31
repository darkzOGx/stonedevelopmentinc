import { isBlogIndexVisible } from '@/lib/blog';
import { LOCATION_PAGES } from '@/lib/location-pages';
import { PROJECTS } from '@/lib/projects';
import { getResourceBySlug } from '@/lib/resources';
import { SERVICE_PAGES } from '@/lib/service-pages';
import {
  SERVICE_LOCATION_PAGES,
  getServiceLocationPath,
} from '@/lib/service-location-pages';
import { BLOG_POSTS } from '@/src/data/blog-posts';

export interface RelatedLink {
  title: string;
  href: string;
  description: string;
}

export function getRelatedBlogLinks(slugs: string[]): RelatedLink[] {
  return slugs
    .map((slug) => BLOG_POSTS.find((post) => post.slug === slug))
    .filter((post): post is (typeof BLOG_POSTS)[number] => Boolean(post))
    .filter((post) => isBlogIndexVisible(post))
    .map((post) => ({
      title: post.title,
      href: `/blog/${post.slug}`,
      description: post.excerpt,
    }));
}

export function getRelatedResourceLinks(slugs: string[]): RelatedLink[] {
  return slugs
    .map((slug) => getResourceBySlug(slug))
    .filter((resource): resource is NonNullable<ReturnType<typeof getResourceBySlug>> => Boolean(resource))
    .map((resource) => ({
      title: resource.shortTitle,
      href: `/resources/${resource.slug}`,
      description: resource.description,
    }));
}

export function getRelatedProjectLinks(slugs: string[]): RelatedLink[] {
  return slugs
    .map((slug) => PROJECTS.find((project) => project.slug === slug))
    .filter((project): project is (typeof PROJECTS)[number] => Boolean(project))
    .map((project) => ({
      title: project.title,
      href: `/portfolio/${project.slug}`,
      description: project.summary,
    }));
}

export function getRelatedLocationLinks(slugs: string[]): RelatedLink[] {
  return slugs
    .map((slug) => LOCATION_PAGES.find((location) => location.slug === slug))
    .filter((location): location is (typeof LOCATION_PAGES)[number] => Boolean(location))
    .map((location) => ({
      title: location.title,
      href: `/locations/${location.slug}`,
      description: location.answer,
    }));
}

export function getRelatedServiceLinks(slugs: string[]): RelatedLink[] {
  return slugs
    .map((slug) => SERVICE_PAGES.find((service) => service.slug === slug))
    .filter((service): service is (typeof SERVICE_PAGES)[number] => Boolean(service))
    .map((service) => ({
      title: service.title,
      href: `/services/${service.slug}`,
      description: service.answer,
    }));
}

export function getRelatedServiceLocationLinks(
  pairs: Array<{ serviceSlug: string; locationSlug: string }>
): RelatedLink[] {
  return pairs
    .map(({ serviceSlug, locationSlug }) =>
      SERVICE_LOCATION_PAGES.find(
        (page) =>
          page.serviceSlug === serviceSlug && page.locationSlug === locationSlug
      )
    )
    .filter((page): page is (typeof SERVICE_LOCATION_PAGES)[number] => Boolean(page))
    .map((page) => ({
      title: page.title,
      href: getServiceLocationPath(page.serviceSlug, page.locationSlug),
      description: page.angle,
    }));
}

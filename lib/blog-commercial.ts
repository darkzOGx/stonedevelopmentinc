import type { BlogPost } from '@/src/data/blog-posts';
import {
  getPrimaryLocationSlugFromPost,
  getPrimaryProjectSlug,
  getServiceSlugFromPost,
} from '@/lib/local-intent';
import { getLocationPageBySlug } from '@/lib/location-pages';
import {
  getRelatedLocationLinks,
  getRelatedProjectLinks,
  getRelatedResourceLinks,
  getRelatedServiceLinks,
  getRelatedServiceLocationLinks,
} from '@/lib/related-content';
import { getServicePageBySlug } from '@/lib/service-pages';
import {
  getServiceLocationPage,
  getServiceLocationPath,
} from '@/lib/service-location-pages';

export function getCommercialTargetsForPost(post: BlogPost) {
  const serviceSlug = getServiceSlugFromPost(post);
  const locationSlug = getPrimaryLocationSlugFromPost(post);
  const servicePage = getServicePageBySlug(serviceSlug);
  const locationPage = getLocationPageBySlug(locationSlug);
  const serviceLocationPage = getServiceLocationPage(serviceSlug, locationSlug);
  const projectSlug = getPrimaryProjectSlug(serviceSlug, locationSlug);

  return {
    serviceSlug,
    locationSlug,
    servicePage,
    locationPage,
    serviceLocationPage,
    projectSlug,
    serviceLinks: getRelatedServiceLinks([serviceSlug]),
    locationLinks: getRelatedLocationLinks([locationSlug]),
    comboLinks: serviceLocationPage
      ? getRelatedServiceLocationLinks([{ serviceSlug, locationSlug }])
      : [],
    projectLinks: projectSlug ? getRelatedProjectLinks([projectSlug]) : [],
    resourceLinks: getRelatedResourceLinks(
      serviceLocationPage?.relatedResourceSlugs ??
        servicePage?.relatedResourceSlugs ??
        []
    ),
  };
}

function buildCommercialLinkBlock(post: BlogPost) {
  const { servicePage, locationPage, serviceLocationPage, projectSlug } =
    getCommercialTargetsForPost(post);

  if (!servicePage || !locationPage) {
    return '';
  }

  const comboHref = serviceLocationPage
    ? getServiceLocationPath(serviceLocationPage.serviceSlug, serviceLocationPage.locationSlug)
    : null;
  const comboLabel = serviceLocationPage?.title;
  const projectHref = projectSlug ? `/portfolio/${projectSlug}` : null;
  const serviceLabel = servicePage.title;
  const locationLabel = locationPage.title;

  const linkRow = [
    comboHref && comboLabel
      ? `<a href="${comboHref}" style="color: #B8892A; font-weight: 600;">${comboLabel}</a>`
      : null,
    `<a href="/services/${servicePage.slug}" style="color: #B8892A; font-weight: 600;">${serviceLabel}</a>`,
    `<a href="/locations/${locationPage.slug}" style="color: #B8892A; font-weight: 600;">${locationLabel}</a>`,
    projectHref
      ? `<a href="${projectHref}" style="color: #B8892A; font-weight: 600;">Relevant case study</a>`
      : null,
  ]
    .filter(Boolean)
    .join(' &middot; ');

  const locationName = locationPage.name;

  return `
<div class="money-page-links" style="background: #141414; color: #F5F3EF; padding: 1.75rem; border-radius: 8px; margin: 1.75rem 0;">
  <p style="font-family: 'Cormorant Garamond', serif; font-size: 1.5rem; color: #F5F3EF; margin-bottom: 0.75rem;">Planning the next step for this project?</p>
  <p style="line-height: 1.8; margin-bottom: 1rem; color: rgba(245,243,239,0.82);">This article answers the search question. The pages below take you into the actual hiring and planning path for ${locationName} homeowners comparing scope, timing, and contractor fit.</p>
  <p style="line-height: 1.8; margin: 0;">${linkRow}</p>
</div>`;
}

export function enrichBlogPostContent(post: BlogPost) {
  if (post.content.includes('money-page-links')) {
    return post.content;
  }

  const block = buildCommercialLinkBlock(post);

  if (!block) {
    return post.content;
  }

  const answerCapsulePattern = /(<div class="answer-capsule"[\s\S]*?<\/div>)/;

  if (answerCapsulePattern.test(post.content)) {
    return post.content.replace(answerCapsulePattern, `$1${block}`);
  }

  const firstParagraphPattern = /(<\/p>)/;

  if (firstParagraphPattern.test(post.content)) {
    return post.content.replace(firstParagraphPattern, `$1${block}`);
  }

  return `${block}${post.content}`;
}

import { BlogPost } from '@/src/data/blog-posts';

export const SITE_URL = 'https://www.stonedevelopmentinc.com';

function isAbsoluteUrl(value: string) {
  return /^https?:\/\//i.test(value);
}

function resolveBlogReference(reference: string, baseUrl = SITE_URL) {
  if (isAbsoluteUrl(reference)) {
    return reference;
  }

  if (reference.startsWith('/')) {
    return `${baseUrl}${reference}`;
  }

  if (reference.startsWith('blog/')) {
    return `${baseUrl}/${reference}`;
  }

  return `${baseUrl}/blog/${reference}`;
}

export function getPostUrl(post: BlogPost, baseUrl = SITE_URL) {
  return `${baseUrl}/blog/${post.slug}`;
}

export function getCanonicalUrl(post: BlogPost, baseUrl = SITE_URL) {
  return post.canonicalTo
    ? resolveBlogReference(post.canonicalTo, baseUrl)
    : getPostUrl(post, baseUrl);
}

export function getMergeTargetUrl(post: BlogPost, baseUrl = SITE_URL) {
  return post.mergeTarget
    ? resolveBlogReference(post.mergeTarget, baseUrl)
    : null;
}

export function isNoindexPost(post: BlogPost) {
  return post.noindex === true;
}

export function isCanonicalizedPost(post: BlogPost) {
  return Boolean(post.canonicalTo);
}

export function isBlogIndexVisible(post: BlogPost) {
  return !isNoindexPost(post) && !isCanonicalizedPost(post);
}

export function isSitemapIncluded(post: BlogPost) {
  return !isNoindexPost(post) && !isCanonicalizedPost(post);
}

export function getReviewThresholds(post: BlogPost) {
  return {
    reviewAfterDays: post.reviewAfterDays ?? 90,
    reviewAfterImpressions: post.reviewAfterImpressions ?? 300,
  };
}

export function isReviewCandidate(
  post: BlogPost,
  ageInDays: number,
  impressions: number
) {
  const thresholds = getReviewThresholds(post);

  return (
    ageInDays >= thresholds.reviewAfterDays &&
    impressions >= thresholds.reviewAfterImpressions
  );
}

import { existsSync } from 'node:fs';
import { join } from 'node:path';
import type { BlogPost } from '@/src/data/blog-posts';
import { absoluteUrl } from '@/lib/site';

const BLOG_IMAGE_FALLBACK = '/hero-still.jpg';

export function resolvePostImagePath(post: Pick<BlogPost, 'image'>) {
  if (!post.image || !post.image.startsWith('/')) {
    return BLOG_IMAGE_FALLBACK;
  }

  const localPath = join(process.cwd(), 'public', post.image.slice(1));

  return existsSync(localPath) ? post.image : BLOG_IMAGE_FALLBACK;
}

export function resolvePostImageUrl(post: Pick<BlogPost, 'image'>) {
  return absoluteUrl(resolvePostImagePath(post));
}

export function resolvePostImageAlt(post: Pick<BlogPost, 'title' | 'imageAlt'>) {
  const alt = post.imageAlt?.trim();

  if (alt) {
    return alt;
  }

  return `${post.title} by Stone Development Inc.`;
}

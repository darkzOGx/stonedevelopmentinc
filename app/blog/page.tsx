import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { BLOG_POSTS } from '@/src/data/blog-posts';
import { isBlogIndexVisible } from '@/lib/blog';
import { BlogList } from '@/components/sections/BlogList';
import { POSTS_PER_PAGE } from '@/components/sections/BlogList';
import { absoluteUrl } from '@/lib/site';

interface Props {
  searchParams?: Promise<{ page?: string }>;
}

function getCurrentPage(rawPage: string | undefined) {
  const page = Number(rawPage);

  if (!Number.isFinite(page) || page < 1) {
    return 1;
  }

  return Math.floor(page);
}

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const params = searchParams ? await searchParams : undefined;
  const currentPage = getCurrentPage(params?.page);
  const canonical = currentPage <= 1 ? absoluteUrl('/blog') : absoluteUrl(`/blog?page=${currentPage}`);

  return {
    title:
      currentPage <= 1
        ? 'Blog | Stone Development Inc. — Construction Insights & Guides'
        : `Blog Page ${currentPage} | Stone Development Inc.`,
    description:
      'Expert construction guides, cost breakdowns, and renovation tips for Southern California homeowners. Kitchen remodels, ADUs, bathroom renovations, and more.',
    alternates: { canonical },
  };
}

export default async function BlogPage({ searchParams }: Props) {
  const sortedPosts = BLOG_POSTS.filter(isBlogIndexVisible).sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  const params = searchParams ? await searchParams : undefined;
  const totalPages = Math.max(1, Math.ceil(sortedPosts.length / POSTS_PER_PAGE));
  const currentPage = getCurrentPage(params?.page);

  if (currentPage > totalPages) {
    notFound();
  }

  const start = (currentPage - 1) * POSTS_PER_PAGE;
  const visiblePosts = sortedPosts.slice(start, start + POSTS_PER_PAGE);

  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
          Construction Insights
        </h1>
        <p className="text-foreground-secondary text-lg mb-12 max-w-2xl">
          Expert guides on remodeling costs, timelines, permits, and project
          planning for Orange County homeowners.
        </p>

        <BlogList posts={visiblePosts} currentPage={currentPage} totalPages={totalPages} />
      </div>
    </section>
  );
}

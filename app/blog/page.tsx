import { Metadata } from 'next';
import { BLOG_POSTS } from '@/src/data/blog-posts';
import { isBlogIndexVisible } from '@/lib/blog';
import { BlogList } from '@/components/sections/BlogList';

export const metadata: Metadata = {
  title: 'Blog | Stone Development Inc. — Construction Insights & Guides',
  description:
    'Expert construction guides, cost breakdowns, and renovation tips for Southern California homeowners. Kitchen remodels, ADUs, bathroom renovations, and more.',
  alternates: { canonical: 'https://www.stonedevelopmentinc.com/blog' },
};

export default function BlogPage() {
  const sortedPosts = BLOG_POSTS.filter(isBlogIndexVisible).sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

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

        <BlogList posts={sortedPosts} />
      </div>
    </section>
  );
}

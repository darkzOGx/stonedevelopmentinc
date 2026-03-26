import { Metadata } from 'next';
import Link from 'next/link';
import { BLOG_POSTS } from '@/src/data/blog-posts';
import { isBlogIndexVisible } from '@/lib/blog';

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

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {sortedPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block bg-background-surface rounded-lg overflow-hidden border border-border-subtle hover:border-accent/40 transition-all duration-300 hover:shadow-lg"
            >
              <div className="p-6">
                <span className="text-xs uppercase tracking-widest text-accent font-semibold">
                  {post.category}
                </span>
                <h2 className="font-serif text-xl text-foreground mt-2 mb-3 group-hover:text-accent transition-colors">
                  {post.title}
                </h2>
                <p className="text-foreground-secondary text-sm leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-xs text-foreground-secondary">
                  <span>{post.readTime}</span>
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString('en-US', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </time>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

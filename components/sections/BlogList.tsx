import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { BlogPost } from '@/src/data/blog-posts';

export const POSTS_PER_PAGE = 9;

function blogPageHref(page: number) {
  return page <= 1 ? '/blog' : `/blog?page=${page}`;
}

export function BlogList({
  posts,
  currentPage,
  totalPages,
}: {
  posts: BlogPost[];
  currentPage: number;
  totalPages: number;
}) {
  const previousPageHref = blogPageHref(currentPage > 1 ? currentPage - 1 : 1);
  const nextPageHref = blogPageHref(currentPage < totalPages ? currentPage + 1 : totalPages);
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
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

      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-6 mt-12">
          <Link
            href={previousPageHref}
            className={cn(
              'p-2 rounded-full border transition-all duration-300',
              currentPage === 1
                ? 'border-border-subtle text-foreground-secondary/30 cursor-default'
                : 'border-accent/40 text-accent hover:bg-accent/5 hover:-translate-x-0.5'
            )}
            aria-label="Previous page"
            aria-disabled={currentPage === 1}
            tabIndex={currentPage === 1 ? -1 : 0}
          >
            <ChevronLeft size={20} strokeWidth={1.5} />
          </Link>

          <div className="flex items-center gap-2">
            {pageNumbers.map((pageNumber) => (
              <Link
                key={pageNumber}
                href={blogPageHref(pageNumber)}
                className={cn(
                  'flex h-10 w-10 items-center justify-center rounded-full border text-sm transition-colors',
                  pageNumber === currentPage
                    ? 'border-accent bg-accent text-white'
                    : 'border-border-subtle text-foreground-secondary hover:border-accent/40 hover:text-accent'
                )}
                aria-current={pageNumber === currentPage ? 'page' : undefined}
              >
                {pageNumber}
              </Link>
            ))}
          </div>

          <Link
            href={nextPageHref}
            className={cn(
              'p-2 rounded-full border transition-all duration-300',
              currentPage === totalPages
                ? 'border-border-subtle text-foreground-secondary/30 cursor-default'
                : 'border-accent/40 text-accent hover:bg-accent/5 hover:translate-x-0.5'
            )}
            aria-label="Next page"
            aria-disabled={currentPage === totalPages}
            tabIndex={currentPage === totalPages ? -1 : 0}
          >
            <ChevronRight size={20} strokeWidth={1.5} />
          </Link>
        </div>
      )}
    </>
  );
}

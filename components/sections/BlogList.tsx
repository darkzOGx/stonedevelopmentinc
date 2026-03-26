'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { BlogPost } from '@/src/data/blog-posts';

const POSTS_PER_PAGE = 9;

export function BlogList({ posts }: { posts: BlogPost[] }) {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);
  const start = page * POSTS_PER_PAGE;
  const visible = posts.slice(start, start + POSTS_PER_PAGE);

  return (
    <>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {visible.map((post) => (
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
          <button
            onClick={() => setPage((p) => Math.max(0, p - 1))}
            disabled={page === 0}
            className={cn(
              'p-2 rounded-full border transition-all duration-300',
              page === 0
                ? 'border-border-subtle text-foreground-secondary/30 cursor-default'
                : 'border-accent/40 text-accent hover:bg-accent/5 hover:-translate-x-0.5'
            )}
            aria-label="Previous page"
          >
            <ChevronLeft size={20} strokeWidth={1.5} />
          </button>

          <span className="text-sm text-foreground-secondary font-light tracking-wide">
            Page{' '}
            <span className="font-medium text-foreground">{page + 1}</span>
            {' '}of{' '}
            <span className="font-medium text-foreground">{totalPages}</span>
          </span>

          <button
            onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
            disabled={page === totalPages - 1}
            className={cn(
              'p-2 rounded-full border transition-all duration-300',
              page === totalPages - 1
                ? 'border-border-subtle text-foreground-secondary/30 cursor-default'
                : 'border-accent/40 text-accent hover:bg-accent/5 hover:translate-x-0.5'
            )}
            aria-label="Next page"
          >
            <ChevronRight size={20} strokeWidth={1.5} />
          </button>
        </div>
      )}
    </>
  );
}

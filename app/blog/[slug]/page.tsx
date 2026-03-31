import { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { RelatedCardGrid } from '@/components/site/RelatedCardGrid';
import { BLOG_POSTS } from '@/src/data/blog-posts';
import {
  getCanonicalUrl,
  getPostUrl,
  isBlogIndexVisible,
  isNoindexPost,
} from '@/lib/blog';
import {
  enrichBlogPostContent,
  getCommercialTargetsForPost,
} from '@/lib/blog-commercial';
import {
  resolvePostImageAlt,
  resolvePostImagePath,
  resolvePostImageUrl,
} from '@/lib/blog-images';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return {};

  const canonicalUrl = getCanonicalUrl(post);
  const imageUrl = resolvePostImageUrl(post);
  const imageAlt = resolvePostImageAlt(post);

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    robots: isNoindexPost(post)
      ? {
          index: false,
          follow: true,
        }
      : undefined,
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      type: 'article',
      url: canonicalUrl,
      publishedTime: post.date,
      modifiedTime: post.lastUpdated,
      authors: [post.author],
      images: [{ url: imageUrl, alt: imageAlt }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.metaTitle,
      description: post.metaDescription,
      images: [imageUrl],
    },
  };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  const canonicalUrl = getCanonicalUrl(post);
  const postUrl = getPostUrl(post);
  const imagePath = resolvePostImagePath(post);
  const imageUrl = resolvePostImageUrl(post);
  const imageAlt = resolvePostImageAlt(post);
  const enrichedContent = enrichBlogPostContent(post);
  const commercialTargets = getCommercialTargetsForPost(post);

  const relatedPosts = BLOG_POSTS.filter((candidate) =>
    candidate.slug !== post.slug &&
    post.relatedSlugs.includes(candidate.slug) &&
    isBlogIndexVisible(candidate)
  );

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.metaTitle,
    description: post.metaDescription,
    author: {
      '@type': 'Organization',
      name: 'Stone Development Inc.',
      url: 'https://www.stonedevelopmentinc.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Stone Development Inc.',
      url: 'https://www.stonedevelopmentinc.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.stonedevelopmentinc.com/logo.png',
      },
    },
    datePublished: post.date,
    dateModified: post.lastUpdated,
    mainEntityOfPage: canonicalUrl,
    image: imageUrl,
    reviewedBy: {
      '@type': 'Organization',
      name: 'Stone Development Inc.',
      description: 'Licensed General Contractor, CA License #1146382',
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: post.faq.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://www.stonedevelopmentinc.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: 'https://www.stonedevelopmentinc.com/blog',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.title,
        item: postUrl,
      },
    ],
  };

  const speakableSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['.answer-capsule', '.faq-answer'],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }}
      />

      <article className="pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          {/* Breadcrumb */}
          <nav className="text-sm text-foreground-secondary mb-8">
            <Link href="/" className="hover:text-accent transition-colors">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-accent transition-colors">
              Blog
            </Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">{post.category}</span>
          </nav>

          {/* Header */}
          <header className="mb-10">
            <span className="text-xs uppercase tracking-widest text-accent font-semibold">
              {post.category}
            </span>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mt-3 mb-4 leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-sm text-foreground-secondary">
              <span>{post.author}</span>
              <span className="text-accent">|</span>
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </time>
              <span className="text-accent">|</span>
              <span>{post.readTime}</span>
            </div>
          </header>

          <div className="mb-10 overflow-hidden rounded-3xl border border-border-subtle bg-background-surface">
            <div className="relative aspect-[16/9]">
              <Image
                src={imagePath}
                alt={imageAlt}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 768px, 100vw"
              />
            </div>
          </div>

          {/* Content */}
          <div
            className="prose prose-lg max-w-none
              prose-headings:font-serif prose-headings:text-foreground
              prose-p:text-foreground-secondary prose-p:leading-relaxed
              prose-a:text-accent prose-a:no-underline hover:prose-a:underline
              prose-strong:text-foreground
              prose-li:text-foreground-secondary
              prose-table:text-sm"
            dangerouslySetInnerHTML={{ __html: enrichedContent }}
          />

          <RelatedCardGrid
            label="Next Step"
            heading="Money pages tied to this article"
            items={[
              ...commercialTargets.comboLinks,
              ...commercialTargets.serviceLinks,
              ...commercialTargets.locationLinks,
              ...commercialTargets.projectLinks,
            ]}
          />

          <RelatedCardGrid
            label="Planning Tools"
            heading="Resources connected to this topic"
            items={commercialTargets.resourceLinks}
          />

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <section className="mt-16 pt-10 border-t border-border-subtle">
              <h2 className="font-serif text-2xl text-foreground mb-6">
                Related Articles
              </h2>
              <div className="grid gap-6 md:grid-cols-2">
                {relatedPosts.map((related) => (
                  <Link
                    key={related.slug}
                    href={`/blog/${related.slug}`}
                    className="group block p-5 rounded-lg border border-border-subtle hover:border-accent/40 transition-all"
                  >
                    <span className="text-xs uppercase tracking-widest text-accent font-semibold">
                      {related.category}
                    </span>
                    <h3 className="font-serif text-lg text-foreground mt-1 group-hover:text-accent transition-colors">
                      {related.title}
                    </h3>
                    <p className="text-foreground-secondary text-sm mt-2">
                      {related.excerpt}
                    </p>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </article>
    </>
  );
}

import { Metadata } from 'next';
import Link from 'next/link';
import { RESOURCES, TIER_LABELS, type Resource } from '@/lib/resources';
import { BLOG_POSTS } from '@/src/data/blog-posts';
import { isBlogIndexVisible } from '@/lib/blog';
import { CTABanner } from '@/components/sections/CTABanner';
import { SectionLabel } from '@/components/ui/SectionLabel';

// ---------------------------------------------------------------------------
// Metadata
// ---------------------------------------------------------------------------

export const metadata: Metadata = {
  title: 'Free Resources for Homeowners | Stone Development Inc.',
  description:
    'Free cost guides, budget calculators, contractor checklists, and expert renovation resources for Southern California homeowners planning a remodel or new construction.',
  alternates: { canonical: 'https://www.stonedevelopmentinc.com/resources' },
  openGraph: {
    title: 'Free Resources for Homeowners | Stone Development Inc.',
    description:
      'Free cost guides, budget calculators, and expert renovation resources for SoCal homeowners.',
    url: 'https://www.stonedevelopmentinc.com/resources',
    type: 'website',
  },
};

// ---------------------------------------------------------------------------
// JSON-LD
// ---------------------------------------------------------------------------

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'CollectionPage',
      '@id': 'https://www.stonedevelopmentinc.com/resources/#webpage',
      url: 'https://www.stonedevelopmentinc.com/resources',
      name: 'Free Resources for Homeowners',
      description:
        'Free cost guides, budget calculators, contractor checklists, and expert renovation resources for Southern California homeowners.',
      isPartOf: { '@id': 'https://www.stonedevelopmentinc.com/#website' },
      publisher: { '@id': 'https://www.stonedevelopmentinc.com/#organization' },
      breadcrumb: { '@id': 'https://www.stonedevelopmentinc.com/resources/#breadcrumb' },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://www.stonedevelopmentinc.com/resources/#breadcrumb',
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
          name: 'Resources',
          item: 'https://www.stonedevelopmentinc.com/resources',
        },
      ],
    },
    {
      '@type': 'Organization',
      '@id': 'https://www.stonedevelopmentinc.com/#organization',
      name: 'Stone Development Inc.',
      url: 'https://www.stonedevelopmentinc.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.stonedevelopmentinc.com/logo.png',
      },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://www.stonedevelopmentinc.com/#website',
      url: 'https://www.stonedevelopmentinc.com',
      name: 'Stone Development Inc.',
      publisher: { '@id': 'https://www.stonedevelopmentinc.com/#organization' },
    },
  ],
};

// ---------------------------------------------------------------------------
// Tag badge colors
// ---------------------------------------------------------------------------

function tagClasses(tag: Resource['tag']): string {
  switch (tag) {
    case 'Interactive Tool':
      return 'bg-accent/15 text-accent';
    case 'Free Download':
      return 'bg-green-100 text-green-800';
    case 'Coming Soon':
      return 'bg-gray-100 text-gray-500';
  }
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function ResourcesPage() {
  const tiers = [1, 2, 3] as const;

  const latestPosts = BLOG_POSTS.filter(isBlogIndexVisible)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Hero ────────────────────────────────────────────────────────── */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-5xl mx-auto">
          <SectionLabel>Resources</SectionLabel>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground tracking-tight mb-6">
            Resources for Homeowners
          </h1>
          <p className="text-foreground-secondary text-lg md:text-xl max-w-2xl leading-relaxed">
            Expert guides, interactive tools, and actionable insights to help
            you plan your remodel, control costs, and hire the right contractor
            in Southern California.
          </p>
        </div>
      </section>

      {/* ── Resource cards by tier ──────────────────────────────────────── */}
      {tiers.map((tier) => {
        const tierResources = RESOURCES.filter((r) => r.tier === tier);
        const { sectionLabel } = TIER_LABELS[tier];

        return (
          <section key={tier} className="py-12 px-6">
            <div className="max-w-5xl mx-auto">
              <SectionLabel>{sectionLabel}</SectionLabel>

              <div className="grid gap-6 md:grid-cols-2 mt-8">
                {tierResources.map((resource) => {
                  const Icon = resource.icon;
                  const isActive = resource.status === 'active';

                  const card = (
                    <div
                      className={`bg-background-surface rounded-lg border border-border-subtle p-6 transition-all duration-300 ${
                        isActive
                          ? 'hover:border-accent/40 hover:shadow-lg'
                          : 'opacity-60'
                      }`}
                    >
                      <div className="flex items-start gap-4">
                        {/* Icon circle */}
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                          <Icon className="w-5 h-5 text-accent" strokeWidth={1.5} />
                        </div>

                        {/* Text */}
                        <div className="flex-1 min-w-0">
                          <h3 className="font-serif text-lg text-foreground mb-1">
                            {resource.title}
                          </h3>
                          <p className="text-foreground-secondary text-sm leading-relaxed mb-3">
                            {resource.description}
                          </p>
                          <span
                            className={`inline-block text-xs font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${tagClasses(resource.tag)}`}
                          >
                            {resource.tag}
                          </span>
                        </div>
                      </div>
                    </div>
                  );

                  if (isActive) {
                    return (
                      <Link
                        key={resource.slug}
                        href={`/resources/${resource.slug}`}
                        className="group block"
                      >
                        {card}
                      </Link>
                    );
                  }

                  return <div key={resource.slug}>{card}</div>;
                })}
              </div>
            </div>
          </section>
        );
      })}

      {/* ── From the Blog ──────────────────────────────────────────────── */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <SectionLabel>From the Blog</SectionLabel>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground tracking-tight mb-8">
            Latest Insights
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            {latestPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block bg-background-surface rounded-lg overflow-hidden border border-border-subtle hover:border-accent/40 transition-all duration-300 hover:shadow-lg"
              >
                <div className="p-6">
                  <span className="text-xs uppercase tracking-widest text-accent font-semibold">
                    {post.category}
                  </span>
                  <h3 className="font-serif text-xl text-foreground mt-2 mb-3 group-hover:text-accent transition-colors">
                    {post.title}
                  </h3>
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

      {/* ── CTA Banner ─────────────────────────────────────────────────── */}
      <CTABanner />
    </>
  );
}

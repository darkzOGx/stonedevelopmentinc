import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { RelatedCardGrid } from '@/components/site/RelatedCardGrid';
import { StatGrid } from '@/components/site/StatGrid';
import { CTABanner } from '@/components/sections/CTABanner';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { Button } from '@/components/ui/Button';
import {
  getRelatedBlogLinks,
  getRelatedProjectLinks,
  getRelatedResourceLinks,
  getRelatedServiceLinks,
  getRelatedServiceLocationLinks,
} from '@/lib/related-content';
import { LOCATION_PAGES, getLocationPageBySlug } from '@/lib/location-pages';
import { absoluteUrl } from '@/lib/site';
import { getServiceLocationPagesByLocation } from '@/lib/service-location-pages';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return LOCATION_PAGES.map((location) => ({ slug: location.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const location = getLocationPageBySlug(slug);

  if (!location) {
    return {};
  }

  const canonical = absoluteUrl(`/locations/${location.slug}`);

  return {
    title: location.metaTitle,
    description: location.metaDescription,
    alternates: { canonical },
    openGraph: {
      title: location.metaTitle,
      description: location.metaDescription,
      url: canonical,
      type: 'website',
    },
  };
}

export default async function LocationDetailPage({ params }: Props) {
  const { slug } = await params;
  const location = getLocationPageBySlug(slug);

  if (!location) {
    notFound();
  }

  const canonical = absoluteUrl(`/locations/${location.slug}`);
  const relatedServices = getRelatedServiceLinks(location.serviceSlugs);
  const relatedBlogs = getRelatedBlogLinks(location.relatedBlogSlugs);
  const relatedResources = getRelatedResourceLinks(location.relatedResourceSlugs);
  const relatedProjects = getRelatedProjectLinks(location.relatedProjectSlugs);
  const relatedCombos = getRelatedServiceLocationLinks(
    getServiceLocationPagesByLocation(location.slug).map((page) => ({
      serviceSlug: page.serviceSlug,
      locationSlug: page.locationSlug,
    }))
  );

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: absoluteUrl(),
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Service Areas',
        item: absoluteUrl('/locations'),
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: location.title,
        item: canonical,
      },
    ],
  };

  const webpageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${canonical}#webpage`,
    url: canonical,
    name: location.title,
    description: location.metaDescription,
    about: {
      '@id': `${absoluteUrl()}/#organization`,
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: location.faq.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="pt-32 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionLabel>Service Area</SectionLabel>
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <h1 className="max-w-4xl text-4xl md:text-6xl font-serif tracking-tight text-foreground">
                {location.title}
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-foreground-secondary">
                {location.answer}
              </p>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-foreground-secondary">
                {location.intro}
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/contact">
                  <Button size="lg">Start a Local Project</Button>
                </Link>
                <Link href="/services">
                  <Button variant="outline" size="lg">
                    Explore Services
                  </Button>
                </Link>
              </div>
            </div>

            <div className="rounded-3xl border border-border-subtle bg-background-surface p-8">
              <p className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">
                Neighborhood fit
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {location.neighborhoods.map((neighborhood) => (
                  <span
                    key={neighborhood}
                    className="rounded-full border border-border-subtle px-3 py-1 text-xs uppercase tracking-wider text-foreground-secondary"
                  >
                    {neighborhood}
                  </span>
                ))}
              </div>
              <div className="mt-8 space-y-4 rounded-2xl bg-background p-5">
                {location.notes.map((note) => (
                  <p key={note} className="text-sm leading-6 text-foreground-secondary">
                    {note}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-10">
        <div className="max-w-6xl mx-auto">
          <StatGrid items={location.stats} />
        </div>
      </section>

      <section className="px-6 py-12">
        <div className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionLabel>Local Angle</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-serif tracking-tight text-foreground">
              Why this city deserves its own page.
            </h2>
            <p className="mt-6 text-lg leading-8 text-foreground-secondary">
              City pages give Bing a clearer signal that the site understands
              local project context instead of repeating the same copy with a city
              name swapped in. That is why the neighborhoods, scope notes, and
              related links here all stay specific to {location.name}.
            </p>
          </div>

          <div className="space-y-6">
            {location.notes.map((note, index) => (
              <article
                key={note}
                className="rounded-3xl border border-border-subtle bg-background-surface p-6"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">
                  Local note {index + 1}
                </p>
                <p className="mt-4 text-base leading-7 text-foreground-secondary">
                  {note}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <SectionLabel>Questions</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-serif tracking-tight text-foreground">
            Frequently asked questions about working in {location.name}.
          </h2>
          <div className="mt-8 space-y-4">
            {location.faq.map((item) => (
              <article
                key={item.question}
                className="rounded-2xl border border-border-subtle bg-background-surface p-6"
              >
                <h3 className="text-xl font-serif text-foreground">{item.question}</h3>
                <p className="mt-3 text-base leading-7 text-foreground-secondary">
                  {item.answer}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-4">
        <div className="max-w-6xl mx-auto">
          <RelatedCardGrid
            label="Services"
            heading={`Commercial pages tied to ${location.name}`}
            items={relatedServices}
          />
          <RelatedCardGrid
            label="Local Pairings"
            heading={`High-intent service combinations for ${location.name}`}
            items={relatedCombos}
          />
          <RelatedCardGrid
            label="Case Studies"
            heading={`Project proof that supports ${location.name} relevance`}
            items={relatedProjects}
          />
          <RelatedCardGrid
            label="Resources"
            heading={`Planning tools for homeowners in ${location.name}`}
            items={relatedResources}
          />
          <RelatedCardGrid
            label="From the Blog"
            heading={`Search-driven articles connected to ${location.name}`}
            items={relatedBlogs}
          />
        </div>
      </section>

      <CTABanner />
    </>
  );
}

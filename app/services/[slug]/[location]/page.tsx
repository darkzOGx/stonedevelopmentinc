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
  getRelatedLocationLinks,
  getRelatedProjectLinks,
  getRelatedResourceLinks,
  getRelatedServiceLinks,
} from '@/lib/related-content';
import { getLocationPageBySlug } from '@/lib/location-pages';
import { getServicePageBySlug } from '@/lib/service-pages';
import {
  SERVICE_LOCATION_PAGES,
  getServiceLocationPage,
  getServiceLocationPath,
} from '@/lib/service-location-pages';
import { absoluteUrl } from '@/lib/site';

interface Props {
  params: Promise<{ slug: string; location: string }>;
}

export async function generateStaticParams() {
  return SERVICE_LOCATION_PAGES.map((page) => ({
    slug: page.serviceSlug,
    location: page.locationSlug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, location } = await params;
  const page = getServiceLocationPage(slug, location);

  if (!page) {
    return {};
  }

  const canonical = absoluteUrl(getServiceLocationPath(page.serviceSlug, page.locationSlug));

  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: { canonical },
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      url: canonical,
      type: 'website',
    },
  };
}

export default async function ServiceLocationPage({ params }: Props) {
  const { slug, location } = await params;
  const page = getServiceLocationPage(slug, location);

  if (!page) {
    notFound();
  }

  const service = getServicePageBySlug(page.serviceSlug);
  const locationPage = getLocationPageBySlug(page.locationSlug);

  if (!service || !locationPage) {
    notFound();
  }

  const canonical = absoluteUrl(getServiceLocationPath(page.serviceSlug, page.locationSlug));
  const serviceLinks = getRelatedServiceLinks([page.serviceSlug]);
  const locationLinks = getRelatedLocationLinks([page.locationSlug]);
  const projectLinks = getRelatedProjectLinks([page.projectSlug]);
  const resourceLinks = getRelatedResourceLinks(page.relatedResourceSlugs);
  const blogLinks = getRelatedBlogLinks(page.relatedBlogSlugs);

  const faqItems = [
    {
      question: `How does ${service.name.toLowerCase()} in ${locationPage.name} differ from a county-wide average?`,
      answer: page.angle,
    },
    {
      question: `Which ${locationPage.name} homeowners are the best fit for ${service.name.toLowerCase()}?`,
      answer: `${locationPage.name} homeowners who are trying to solve the kind of problem described in this page usually benefit most when the scope is clarified before drawings and procurement accelerate.`,
    },
    {
      question: `Should homeowners start with the local page or the broader ${service.name.toLowerCase()} service page?`,
      answer: `Use this local page when city context matters to the decision. Use the broader service page when you still need the county-wide planning framework before narrowing to ${locationPage.name}.`,
    },
  ];

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
        name: 'Services',
        item: absoluteUrl('/services'),
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: service.title,
        item: absoluteUrl(`/services/${service.slug}`),
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: page.title,
        item: canonical,
      },
    ],
  };

  const webpageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${canonical}#webpage`,
    url: canonical,
    name: page.title,
    description: page.metaDescription,
    about: {
      '@id': `${absoluteUrl()}/#organization`,
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  const stats = [service.stats[0], service.stats[1], locationPage.stats[2]];

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
          <SectionLabel>Local Service Page</SectionLabel>
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <h1 className="max-w-4xl text-4xl md:text-6xl font-serif tracking-tight text-foreground">
                {page.title}
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-foreground-secondary">
                {page.intro}
              </p>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-foreground-secondary">
                {page.angle}
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/contact">
                  <Button size="lg">Talk Through This Scope</Button>
                </Link>
                <Link href={`/services/${service.slug}`}>
                  <Button variant="outline" size="lg">
                    View Broader Service Page
                  </Button>
                </Link>
              </div>
            </div>

            <div className="rounded-3xl border border-border-subtle bg-background-surface p-8">
              <p className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">
                Why this pairing matters
              </p>
              <ul className="mt-6 space-y-4 text-sm leading-6 text-foreground-secondary">
                {page.localNotes.map((note) => (
                  <li key={note} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
                    <span>{note}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-10">
        <div className="max-w-6xl mx-auto">
          <StatGrid items={stats} />
        </div>
      </section>

      <section className="px-6 py-12">
        <div className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionLabel>Local Planning</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-serif tracking-tight text-foreground">
              What changes when {service.name.toLowerCase()} meets {locationPage.name}.
            </h2>
            <p className="mt-6 text-lg leading-8 text-foreground-secondary">
              The point of this page is not to duplicate the broader service page or
              the broader city page. It is to show how this exact service changes when
              it is scoped inside {locationPage.name}, which is what Bing and real
              homeowners both care about when the search becomes local and commercial.
            </p>
          </div>

          <div className="space-y-6">
            <article className="rounded-3xl border border-border-subtle bg-background-surface p-6">
              <h3 className="text-2xl font-serif text-foreground">
                Why is this a high-intent local search?
              </h3>
              <p className="mt-4 text-base leading-7 text-foreground-secondary">
                {page.angle}
              </p>
            </article>
            <article className="rounded-3xl border border-border-subtle bg-background-surface p-6">
              <h3 className="text-2xl font-serif text-foreground">
                Which local signals matter before drawings start?
              </h3>
              <p className="mt-4 text-base leading-7 text-foreground-secondary">
                {locationPage.notes[0]} {service.sections[0].body}
              </p>
            </article>
            <article className="rounded-3xl border border-border-subtle bg-background-surface p-6">
              <h3 className="text-2xl font-serif text-foreground">
                How does Stone Development approach the decision?
              </h3>
              <p className="mt-4 text-base leading-7 text-foreground-secondary">
                {service.sections[1].body}
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <SectionLabel>Questions</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-serif tracking-tight text-foreground">
            Questions homeowners ask about {page.title.toLowerCase()}.
          </h2>
          <div className="mt-8 space-y-4">
            {faqItems.map((item) => (
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
            label="Broader Pages"
            heading="The main service and city pages behind this pairing"
            items={[...serviceLinks, ...locationLinks]}
          />
          <RelatedCardGrid
            label="Case Study"
            heading="Project proof connected to this local service"
            items={projectLinks}
          />
          <RelatedCardGrid
            label="Resources"
            heading="Planning tools connected to this local search"
            items={resourceLinks}
          />
          <RelatedCardGrid
            label="From the Blog"
            heading="Articles already supporting this local service intent"
            items={blogLinks}
          />
        </div>
      </section>

      <CTABanner />
    </>
  );
}

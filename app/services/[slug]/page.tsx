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
  getRelatedServiceLocationLinks,
} from '@/lib/related-content';
import { COMPANY, absoluteUrl } from '@/lib/site';
import { SERVICE_PAGES, getServicePageBySlug } from '@/lib/service-pages';
import { getServiceLocationPagesByService } from '@/lib/service-location-pages';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SERVICE_PAGES.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServicePageBySlug(slug);

  if (!service) {
    return {};
  }

  const canonical = absoluteUrl(`/services/${service.slug}`);

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: canonical,
      type: 'website',
    },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getServicePageBySlug(slug);

  if (!service) {
    notFound();
  }

  const canonical = absoluteUrl(`/services/${service.slug}`);
  const relatedBlogs = getRelatedBlogLinks(service.relatedBlogSlugs);
  const relatedResources = getRelatedResourceLinks(service.relatedResourceSlugs);
  const relatedProjects = getRelatedProjectLinks(service.relatedProjectSlugs);
  const relatedLocations = getRelatedLocationLinks(service.relatedLocationSlugs);
  const relatedCombos = getRelatedServiceLocationLinks(
    getServiceLocationPagesByService(service.slug).map((page) => ({
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
        name: 'Services',
        item: absoluteUrl('/services'),
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: service.title,
        item: canonical,
      },
    ],
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${canonical}#service`,
    name: service.title,
    serviceType: service.name,
    description: service.metaDescription,
    url: canonical,
    provider: {
      '@id': `${absoluteUrl()}/#organization`,
    },
    areaServed: relatedLocations.map((location) => ({
      '@type': 'City',
      name: location.title.replace(' General Contractor', ''),
    })),
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: service.faq.map((item) => ({
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="pt-32 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionLabel>{service.eyebrow}</SectionLabel>
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <h1 className="max-w-4xl text-4xl md:text-6xl font-serif tracking-tight text-foreground">
                {service.title}
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-foreground-secondary">
                {service.answer}
              </p>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-foreground-secondary">
                {service.intro}
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/contact">
                  <Button size="lg">Schedule Consultation</Button>
                </Link>
                <Link href="/portfolio">
                  <Button variant="outline" size="lg">
                    Review Case Studies
                  </Button>
                </Link>
              </div>
            </div>

            <div className="rounded-3xl border border-border-subtle bg-background-surface p-8">
              <p className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">
                Why homeowners use us
              </p>
              <ul className="mt-6 space-y-4 text-sm leading-6 text-foreground-secondary">
                {service.deliverables.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 rounded-2xl bg-background p-5">
                <p className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">
                  Local office
                </p>
                <p className="mt-3 text-sm leading-6 text-foreground-secondary">
                  {COMPANY.address.streetAddress}, {COMPANY.address.addressLocality},{' '}
                  {COMPANY.address.addressRegion} {COMPANY.address.postalCode}
                </p>
                <p className="mt-3 text-sm leading-6 text-foreground-secondary">
                  Call {COMPANY.phone} to talk through scope, timing, and whether this
                  service is the right fit for the property.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-10">
        <div className="max-w-6xl mx-auto">
          <StatGrid items={service.stats} />
        </div>
      </section>

      <section className="px-6 py-12">
        <div className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionLabel>Service Scope</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-serif tracking-tight text-foreground">
              What this page is meant to answer.
            </h2>
            <p className="mt-6 text-lg leading-8 text-foreground-secondary">
              Bing and local search work better when a service page answers the
              commercial question directly instead of hiding it in a home page or
              portfolio gallery. These sections give the page clearer topical depth
              while keeping the copy useful for homeowners who are still choosing a
              path.
            </p>
          </div>

          <div className="space-y-6">
            {service.sections.map((section) => (
              <article
                key={section.heading}
                className="rounded-3xl border border-border-subtle bg-background-surface p-6"
              >
                <h3 className="text-2xl font-serif text-foreground">
                  {section.heading}
                </h3>
                <p className="mt-4 text-base leading-7 text-foreground-secondary">
                  {section.body}
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
            Frequently asked questions about {service.name.toLowerCase()}.
          </h2>
          <div className="mt-8 space-y-4">
            {service.faq.map((item) => (
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
            label="Service Areas"
            heading="Where this service is especially relevant"
            items={relatedLocations}
          />
          <RelatedCardGrid
            label="Local Pairings"
            heading="City-specific commercial pages for this service"
            items={relatedCombos}
          />
          <RelatedCardGrid
            label="Case Studies"
            heading="Project proof tied to this service"
            items={relatedProjects}
          />
          <RelatedCardGrid
            label="Resources"
            heading="Planning tools that support this decision"
            items={relatedResources}
          />
          <RelatedCardGrid
            label="From the Blog"
            heading="Search-driven support content around this service"
            items={relatedBlogs}
          />
        </div>
      </section>

      <CTABanner />
    </>
  );
}

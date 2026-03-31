import Image from 'next/image';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { RelatedCardGrid } from '@/components/site/RelatedCardGrid';
import { CTABanner } from '@/components/sections/CTABanner';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { Button } from '@/components/ui/Button';
import {
  getRelatedLocationLinks,
  getRelatedServiceLinks,
} from '@/lib/related-content';
import { PROJECTS, getProjectBySlug } from '@/lib/projects';
import { absoluteUrl } from '@/lib/site';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {};
  }

  const canonical = absoluteUrl(`/portfolio/${project.slug}`);

  return {
    title: `${project.title} | Stone Development Inc. Case Study`,
    description: project.summary,
    alternates: { canonical },
    openGraph: {
      title: `${project.title} | Stone Development Inc. Case Study`,
      description: project.summary,
      url: canonical,
      type: 'article',
      images: [
        {
          url: absoluteUrl(project.image.src),
          alt: project.imageAlt,
        },
      ],
    },
  };
}

export default async function ProjectCaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const canonical = absoluteUrl(`/portfolio/${project.slug}`);
  const relatedService = getRelatedServiceLinks([project.serviceSlug]);
  const relatedLocation = getRelatedLocationLinks([project.marketSlug]);

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
        name: 'Portfolio',
        item: absoluteUrl('/portfolio'),
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: project.title,
        item: canonical,
      },
    ],
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: project.title,
    description: project.summary,
    image: absoluteUrl(project.image.src),
    mainEntityOfPage: canonical,
    author: {
      '@type': 'Organization',
      name: 'Stone Development Inc.',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Stone Development Inc.',
      logo: {
        '@type': 'ImageObject',
        url: absoluteUrl('/logo.png'),
      },
    },
    dateModified: project.updatedAt,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <section className="pt-32 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionLabel>Case Study</SectionLabel>
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div>
              <h1 className="max-w-4xl text-4xl md:text-6xl font-serif tracking-tight text-foreground">
                {project.title}
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-foreground-secondary">
                {project.summary}
              </p>
              <div className="mt-8 flex flex-wrap gap-3 text-xs uppercase tracking-[0.2em] text-foreground-secondary">
                <span className="rounded-full border border-border-subtle px-4 py-2">
                  {project.category}
                </span>
                <span className="rounded-full border border-border-subtle px-4 py-2">
                  {project.market}
                </span>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/contact">
                  <Button size="lg">Talk Through a Similar Project</Button>
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
                Comparable planning guidance
              </p>
              <div className="mt-6 space-y-5 text-sm leading-6 text-foreground-secondary">
                <div>
                  <p className="font-semibold text-foreground">Comparable range</p>
                  <p>{project.planningRange}</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Comparable timeline</p>
                  <p>{project.deliveryWindow}</p>
                </div>
                <p>
                  These planning figures reflect comparable Orange County scopes, not
                  a published contract value for this specific project.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-10">
        <div className="max-w-6xl mx-auto overflow-hidden rounded-[2rem] border border-border-subtle bg-background-surface">
          <div className="relative aspect-[16/9]">
            <Image
              src={project.image}
              alt={project.imageAlt}
              fill
              className="object-cover"
              placeholder="blur"
            />
          </div>
        </div>
      </section>

      <section className="px-6 py-12">
        <div className="max-w-6xl mx-auto grid gap-6 lg:grid-cols-3">
          {[
            { title: 'Challenge', body: project.challenge },
            { title: 'Solution', body: project.solution },
            { title: 'Outcome', body: project.outcome },
          ].map((item) => (
            <article
              key={item.title}
              className="rounded-3xl border border-border-subtle bg-background-surface p-6"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">
                {item.title}
              </p>
              <p className="mt-4 text-base leading-7 text-foreground-secondary">
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="px-6 py-12">
        <div className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionLabel>Why It Matters</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-serif tracking-tight text-foreground">
              Turning gallery images into searchable proof.
            </h2>
            <p className="mt-6 text-lg leading-8 text-foreground-secondary">
              Bing can understand a case study page far better than a single image
              tile. This page gives the project a clear URL, a commercial context,
              comparable planning guidance, and internal links back into the service
              and location architecture.
            </p>
          </div>

          <div className="rounded-3xl border border-border-subtle bg-background-surface p-8">
            <p className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">
              Project highlights
            </p>
            <ul className="mt-6 space-y-4 text-sm leading-6 text-foreground-secondary">
              {project.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="px-6 py-4">
        <div className="max-w-6xl mx-auto">
          <RelatedCardGrid
            label="Related Service"
            heading="The commercial page connected to this case study"
            items={relatedService}
          />
          <RelatedCardGrid
            label="Related Market"
            heading="The local page connected to this case study"
            items={relatedLocation}
          />
        </div>
      </section>

      <CTABanner />
    </>
  );
}

import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/sections/CTABanner';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { Button } from '@/components/ui/Button';
import { SERVICE_PAGES } from '@/lib/service-pages';
import { absoluteUrl } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Services | Orange County General Contractor | Stone Development Inc.',
  description:
    'Explore kitchen remodeling, bathroom remodeling, ADU construction, additions, whole-home renovation, custom homes, and damage restoration in Orange County.',
  alternates: {
    canonical: absoluteUrl('/services'),
  },
  openGraph: {
    title: 'Services | Orange County General Contractor | Stone Development Inc.',
    description:
      'Kitchen remodels, bathrooms, ADUs, additions, whole-home renovation, custom homes, and restoration across Orange County.',
    url: absoluteUrl('/services'),
    type: 'website',
  },
};

export default function ServicesPage() {
  return (
    <>
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionLabel>Services</SectionLabel>
          <h1 className="max-w-4xl text-4xl md:text-6xl font-serif tracking-tight text-foreground">
            Service pages built around real Orange County construction intent.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-foreground-secondary">
            Bing and local search work better when the site clearly separates
            kitchen remodeling, bathroom remodeling, ADUs, additions, whole-home
            renovation, custom homes, and restoration. These pages do exactly
            that while staying grounded in real project decisions.
          </p>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto grid gap-6 lg:grid-cols-2">
          {SERVICE_PAGES.map((service) => (
            <article
              key={service.slug}
              className="rounded-3xl border border-border-subtle bg-background-surface p-8"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">
                {service.eyebrow}
              </p>
              <h2 className="mt-4 text-3xl font-serif text-foreground">
                {service.title}
              </h2>
              <p className="mt-4 text-base leading-7 text-foreground-secondary">
                {service.answer}
              </p>
              <ul className="mt-6 space-y-3 text-sm leading-6 text-foreground-secondary">
                {service.deliverables.slice(0, 4).map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href={`/services/${service.slug}`}>
                  <Button size="lg">View Service Page</Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" size="lg">
                    Talk Through Scope
                  </Button>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CTABanner />
    </>
  );
}

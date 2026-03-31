import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/sections/CTABanner';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { Button } from '@/components/ui/Button';
import { LOCATION_PAGES } from '@/lib/location-pages';
import { absoluteUrl } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Service Areas | Orange County Contractor | Stone Development Inc.',
  description:
    'Explore Stone Development service areas across Irvine, Newport Beach, Huntington Beach, Costa Mesa, Mission Viejo, Tustin, Lake Forest, and Orange County.',
  alternates: {
    canonical: absoluteUrl('/locations'),
  },
  openGraph: {
    title: 'Service Areas | Orange County Contractor | Stone Development Inc.',
    description:
      'Local service-area pages for Irvine, Newport Beach, Huntington Beach, Costa Mesa, Mission Viejo, Tustin, Lake Forest, and Orange County.',
    url: absoluteUrl('/locations'),
    type: 'website',
  },
};

export default function LocationsPage() {
  return (
    <>
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionLabel>Service Areas</SectionLabel>
          <h1 className="max-w-4xl text-4xl md:text-6xl font-serif tracking-tight text-foreground">
            City-specific pages for the Orange County markets that matter most.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-foreground-secondary">
            Local search is stronger when the site explains how the right scope
            changes by city. These pages give Bing clearer geographic relevance
            for the markets we actually want to grow in.
          </p>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto grid gap-6 lg:grid-cols-2">
          {LOCATION_PAGES.map((location) => (
            <article
              key={location.slug}
              className="rounded-3xl border border-border-subtle bg-background-surface p-8"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">
                {location.name}
              </p>
              <h2 className="mt-4 text-3xl font-serif text-foreground">
                {location.title}
              </h2>
              <p className="mt-4 text-base leading-7 text-foreground-secondary">
                {location.answer}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {location.neighborhoods.slice(0, 4).map((neighborhood) => (
                  <span
                    key={neighborhood}
                    className="rounded-full border border-border-subtle px-3 py-1 text-xs uppercase tracking-wider text-foreground-secondary"
                  >
                    {neighborhood}
                  </span>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href={`/locations/${location.slug}`}>
                  <Button size="lg">View Local Page</Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" size="lg">
                    Start a Local Project
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

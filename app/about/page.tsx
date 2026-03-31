import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/sections/CTABanner';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { Button } from '@/components/ui/Button';
import { absoluteUrl } from '@/lib/site';
import { COMPANY } from '@/lib/site';

export const metadata: Metadata = {
  title: 'About Stone Development Inc. | Orange County General Contractor',
  description:
    'Learn about Stone Development Inc., an Irvine-based general contractor serving Orange County with kitchens, bathrooms, ADUs, additions, whole-home renovation, and custom construction.',
  alternates: {
    canonical: absoluteUrl('/about'),
  },
  openGraph: {
    title: 'About Stone Development Inc. | Orange County General Contractor',
    description:
      'Irvine-based contractor serving Orange County with kitchens, bathrooms, ADUs, additions, and whole-home renovation.',
    url: absoluteUrl('/about'),
    type: 'website',
  },
};

const aboutSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  '@id': `${absoluteUrl('/about')}#webpage`,
  url: absoluteUrl('/about'),
  name: 'About Stone Development Inc.',
  description:
    'About Stone Development Inc., an Irvine-based general contractor serving Orange County homeowners.',
  mainEntity: {
    '@id': `${absoluteUrl()}/#organization`,
  },
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionLabel>About Us</SectionLabel>
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
            <div>
              <h1 className="text-4xl md:text-6xl font-serif tracking-tight text-foreground">
                Irvine-based contractor for remodeling and build work across Orange County.
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-foreground-secondary">
                Stone Development Inc. helps homeowners move from vague project ideas
                to credible build plans. We focus on the scopes where contractor
                discipline matters most: kitchens, bathrooms, ADUs, home additions,
                whole-home renovations, custom homes, and reconstruction work.
              </p>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-foreground-secondary">
                The core value is not just construction. It is scope clarity. We help
                owners understand what the project should be, what it will demand, and
                how to sequence it before momentum and cost start pulling the wrong way.
              </p>
            </div>

            <div className="rounded-3xl border border-border-subtle bg-background-surface p-8">
              <p className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">
                Company Snapshot
              </p>
              <dl className="mt-6 space-y-5 text-sm text-foreground-secondary">
                <div>
                  <dt className="font-semibold text-foreground">Office</dt>
                  <dd>
                    {COMPANY.address.streetAddress}
                    <br />
                    {COMPANY.address.addressLocality}, {COMPANY.address.addressRegion}{' '}
                    {COMPANY.address.postalCode}
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-foreground">Phone</dt>
                  <dd>{COMPANY.phone}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-foreground">License</dt>
                  <dd>{COMPANY.license}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-foreground">Coverage</dt>
                  <dd>{COMPANY.areasServed.join(', ')}</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-10">
        <div className="max-w-6xl mx-auto grid gap-6 md:grid-cols-3">
          {[
            {
              title: 'What we build',
              body: 'Kitchens, bathrooms, ADUs, additions, whole-home renovations, custom homes, and reconstruction scopes.',
            },
            {
              title: 'How we work',
              body: 'Planning-first, estimate-aware, and focused on the handoff between idea, permit path, procurement, and field execution.',
            },
            {
              title: 'Why it matters',
              body: 'Owners make better decisions when the contractor helps define the right project instead of just pricing the first version of it.',
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-border-subtle bg-background-surface p-6"
            >
              <h2 className="text-2xl font-serif text-foreground">{item.title}</h2>
              <p className="mt-4 text-sm leading-6 text-foreground-secondary">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto grid gap-12 lg:grid-cols-2">
          <div>
            <SectionLabel>Where We Work</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-serif tracking-tight text-foreground">
              Local context changes the right scope.
            </h2>
            <p className="mt-6 text-lg leading-8 text-foreground-secondary">
              Irvine, Newport Beach, Huntington Beach, Costa Mesa, Mission Viejo,
              Tustin, and Lake Forest do not reward the same construction decisions.
              We build around that reality so the project fits the property, the
              neighborhood, and the homeowner&apos;s actual goal.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {COMPANY.areasServed.map((area) => (
                <span
                  key={area}
                  className="rounded-full border border-border-subtle px-4 py-2 text-sm text-foreground-secondary"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>

          <div>
            <SectionLabel>Next Step</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-serif tracking-tight text-foreground">
              Start with the decision, not just the drawings.
            </h2>
            <p className="mt-6 text-lg leading-8 text-foreground-secondary">
              The highest-value early move is figuring out whether the project
              should be a remodel, an addition, an ADU, a phased whole-home
              renovation, or something else entirely. That is where we can save
              owners the most time, friction, and unnecessary spend.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/services">
                <Button size="lg">Explore Services</Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg">
                  Schedule Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}

const SITE_URL = 'https://www.stonedevelopmentinc.com';

interface ResourceSchemaConfig {
  slug: string;
  title: string;
  description: string;
  datePublished?: string;
  dateModified?: string;
  faqs: Array<{ question: string; answer: string }>;
}

/**
 * Generates a single combined JSON-LD schema graph for a resource page.
 * Includes: WebPage with Speakable, BreadcrumbList, FAQPage, and Organization.
 * All linked via @id references so Google sees one connected graph.
 */
export function buildResourceSchemas(config: ResourceSchemaConfig) {
  const {
    slug,
    title,
    description,
    datePublished = '2026-03-01',
    dateModified = '2026-03-25',
    faqs,
  } = config;

  const pageUrl = `${SITE_URL}/resources/${slug}`;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      // Organization (referenced by other nodes)
      {
        '@type': 'Organization',
        '@id': `${SITE_URL}/#organization`,
        name: 'Stone Development Inc.',
        url: SITE_URL,
        logo: {
          '@type': 'ImageObject',
          url: `${SITE_URL}/logo.png`,
        },
        address: {
          '@type': 'PostalAddress',
          streetAddress: '1 Jenner Suite 150',
          addressLocality: 'Irvine',
          addressRegion: 'CA',
          postalCode: '92618',
          addressCountry: 'US',
        },
        telephone: '+19495086763',
      },
      // WebPage with Speakable
      {
        '@type': 'WebPage',
        '@id': `${pageUrl}/#webpage`,
        url: pageUrl,
        name: title,
        description,
        datePublished,
        dateModified,
        isPartOf: { '@id': `${SITE_URL}/#website` },
        publisher: { '@id': `${SITE_URL}/#organization` },
        breadcrumb: { '@id': `${pageUrl}/#breadcrumb` },
        speakable: {
          '@type': 'SpeakableSpecification',
          cssSelector: ['h1', '#intro-paragraph'],
        },
      },
      // Website
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: SITE_URL,
        name: 'Stone Development Inc.',
        publisher: { '@id': `${SITE_URL}/#organization` },
      },
      // BreadcrumbList
      {
        '@type': 'BreadcrumbList',
        '@id': `${pageUrl}/#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: SITE_URL,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Resources',
            item: `${SITE_URL}/resources`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: title,
            item: pageUrl,
          },
        ],
      },
      // FAQPage
      {
        '@type': 'FAQPage',
        '@id': `${pageUrl}/#faq`,
        mainEntity: faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      },
    ],
  };
}

/**
 * Variant that also includes a HowTo schema (for checklist/guide pages).
 */
export function buildResourceSchemasWithHowTo(
  config: ResourceSchemaConfig & {
    howTo: {
      name: string;
      description: string;
      steps: Array<{ name: string; text: string }>;
    };
  }
) {
  const base = buildResourceSchemas(config);
  const pageUrl = `${SITE_URL}/resources/${config.slug}`;

  base['@graph'].push({
    '@type': 'HowTo' as const,
    '@id': `${pageUrl}/#howto`,
    name: config.howTo.name,
    description: config.howTo.description,
    step: config.howTo.steps.map((step, i) => ({
      '@type': 'HowToStep' as const,
      position: i + 1,
      name: step.name,
      text: step.text,
    })),
  } as never);

  return base;
}

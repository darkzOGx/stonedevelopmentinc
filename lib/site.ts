export const SITE_URL = 'https://www.stonedevelopmentinc.com';

export const COMPANY = {
  name: 'Stone Development Inc.',
  legalName: 'Stone Development Inc.',
  phone: '(949) 508-6763',
  phoneIntl: '+19495086763',
  email: 'info@stonedevelopmentinc.com',
  license: 'CA License #1146382',
  address: {
    streetAddress: '1 Jenner Suite 150',
    addressLocality: 'Irvine',
    addressRegion: 'CA',
    postalCode: '92618',
    addressCountry: 'US',
  },
  geo: {
    latitude: 33.6554862,
    longitude: -117.7478096,
  },
  officeHours: {
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '08:00',
    closes: '18:00',
  },
  areasServed: [
    'Orange County',
    'Irvine',
    'Newport Beach',
    'Huntington Beach',
    'Costa Mesa',
    'Mission Viejo',
    'Tustin',
    'Lake Forest',
  ],
  serviceCatalog: [
    'Kitchen remodeling',
    'Bathroom remodeling',
    'ADU construction',
    'Home additions',
    'Full home renovation',
    'Custom homes',
    'Damage restoration',
  ],
};

export function absoluteUrl(path = '/') {
  if (!path || path === '/') {
    return SITE_URL;
  }

  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
}

export function buildOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'GeneralContractor',
    '@id': `${SITE_URL}/#organization`,
    name: COMPANY.name,
    legalName: COMPANY.legalName,
    url: SITE_URL,
    image: absoluteUrl('/logo.png'),
    logo: {
      '@type': 'ImageObject',
      url: absoluteUrl('/logo.png'),
    },
    telephone: COMPANY.phoneIntl,
    email: COMPANY.email,
    address: {
      '@type': 'PostalAddress',
      ...COMPANY.address,
    },
    geo: {
      '@type': 'GeoCoordinates',
      ...COMPANY.geo,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      ...COMPANY.officeHours,
    },
    areaServed: COMPANY.areasServed.map((name) => ({
      '@type': name === 'Orange County' ? 'AdministrativeArea' : 'City',
      name,
    })),
    knowsAbout: COMPANY.serviceCatalog,
    priceRange: '$$$$',
  };
}

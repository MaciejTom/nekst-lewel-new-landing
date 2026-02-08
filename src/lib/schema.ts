import { siteConfig } from './config';

const baseUrl = 'https://nekstlewel.pl';

export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${baseUrl}/#organization`,
    name: siteConfig.name,
    url: baseUrl,
    description: siteConfig.description,
    telephone: siteConfig.owner.phone,
    address: {
      '@type': 'PostalAddress',
      addressLocality: siteConfig.owner.location,
      addressCountry: 'PL',
    },
    areaServed: {
      '@type': 'Country',
      name: 'Polska',
    },
    priceRange: `PLN ${siteConfig.pricing.website} - PLN 5000`,
    founder: {
      '@type': 'Person',
      name: siteConfig.owner.name,
    },
  };
}

export function generateServiceSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${baseUrl}/#service`,
    name: 'Tworzenie stron internetowych dla firm budowlanych',
    description: 'Profesjonalne strony internetowe dla firm budowlanych i remontowych. Gotowe nawet w 3 dni.',
    provider: {
      '@type': 'LocalBusiness',
      name: siteConfig.name,
      url: baseUrl,
    },
    serviceType: 'Web Design',
    areaServed: {
      '@type': 'Country',
      name: 'Polska',
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'PLN',
      price: siteConfig.pricing.website.toString(),
      availability: 'https://schema.org/InStock',
      validFrom: '2025-01-01',
    },
  };
}

export function generateWebPageSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${baseUrl}/#webpage`,
    url: baseUrl,
    name: 'Strony internetowe dla firm budowlanych Kraków | Nekst Lewel',
    description: siteConfig.description,
    inLanguage: 'pl-PL',
    isPartOf: {
      '@type': 'WebSite',
      '@id': `${baseUrl}/#website`,
      url: baseUrl,
      name: siteConfig.name,
      publisher: {
        '@type': 'LocalBusiness',
        '@id': `${baseUrl}/#organization`,
      },
    },
  };
}

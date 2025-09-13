/**
 * SEO utility functions for TigerQuant website
 */

const defaultSEO = {
  title: 'TigerQuant | Quantitative Finance Club',
  description: 'TigerQuant - University of Missouri\'s premier quantitative finance club. Learn, build, and compete in the world of quantitative finance.',
  url: 'https://tigerquant.netlify.app',
  image: 'https://tigerquant.netlify.app/og-image.jpg',
  type: 'website',
  siteName: 'TigerQuant'
};

/**
 * Generate SEO meta tags for a page
 * @param {Object} options - SEO options
 * @param {string} options.title - Page title
 * @param {string} options.description - Page description
 * @param {string} options.url - Page URL
 * @param {string} options.image - Social media image URL
 * @param {string} options.type - Content type (website, article, etc.)
 * @returns {Object} SEO meta object
 */
export function generateSEO({
  title = defaultSEO.title,
  description = defaultSEO.description,
  url = defaultSEO.url,
  image = defaultSEO.image,
  type = defaultSEO.type
} = {}) {
  const fullTitle = title === defaultSEO.title ? title : `${title} | TigerQuant`;
  
  return {
    title: fullTitle,
    description,
    url,
    image,
    type,
    siteName: defaultSEO.siteName,
    
    // Open Graph tags
    og: {
      title: fullTitle,
      description,
      url,
      image,
      type,
      siteName: defaultSEO.siteName
    },
    
    // Twitter Card tags
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      image
    }
  };
}

/**
 * Generate structured data for the organization
 * @returns {Object} JSON-LD structured data
 */
export function generateStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'TigerQuant',
    description: 'University of Missouri\'s premier quantitative finance club',
    url: 'https://tigerquant.netlify.app',
    logo: 'https://tigerquant.netlify.app/logo.png',
    sameAs: [
      'https://engage.missouri.edu/tigerquant/home/'
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Columbia',
      addressRegion: 'MO',
      addressCountry: 'US'
    },
    memberOf: {
      '@type': 'Organization',
      name: 'University of Missouri'
    }
  };
}

/**
 * Generate page-specific structured data
 * @param {string} pageType - Type of page (HomePage, AboutPage, etc.)
 * @param {Object} data - Additional data for the page
 * @returns {Object} JSON-LD structured data
 */
export function generatePageStructuredData(pageType, data = {}) {
  const baseData = {
    '@context': 'https://schema.org',
    '@type': pageType,
    name: data.name || 'TigerQuant',
    description: data.description || defaultSEO.description,
    url: data.url || defaultSEO.url
  };

  switch (pageType) {
    case 'WebPage':
      return {
        ...baseData,
        mainEntity: {
          '@type': 'Organization',
          name: 'TigerQuant'
        }
      };
    
    case 'Event':
      return {
        ...baseData,
        startDate: data.startDate,
        endDate: data.endDate,
        location: data.location,
        organizer: {
          '@type': 'Organization',
          name: 'TigerQuant'
        }
      };
    
    default:
      return baseData;
  }
}



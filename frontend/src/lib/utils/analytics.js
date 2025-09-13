/**
 * Analytics utilities for TigerQuant website
 * Supports both Plausible and Google Analytics 4
 */

// Analytics configuration
const ANALYTICS_CONFIG = {
  // Set to true to enable analytics (disabled by default)
  enabled: false,
  
  // Analytics provider: 'plausible' or 'ga4'
  provider: 'plausible',
  
  // Plausible configuration
  plausible: {
    domain: 'tigerquant.netlify.app',
    apiHost: 'https://plausible.io'
  },
  
  // Google Analytics 4 configuration
  ga4: {
    measurementId: 'G-XXXXXXXXXX' // Replace with actual measurement ID
  }
};

/**
 * Initialize analytics based on configuration
 */
export function initAnalytics() {
  if (!ANALYTICS_CONFIG.enabled) {
    console.log('Analytics disabled');
    return;
  }

  switch (ANALYTICS_CONFIG.provider) {
    case 'plausible':
      initPlausible();
      break;
    case 'ga4':
      initGA4();
      break;
    default:
      console.warn('Unknown analytics provider:', ANALYTICS_CONFIG.provider);
  }
}

/**
 * Initialize Plausible Analytics
 */
function initPlausible() {
  if (typeof window === 'undefined') return;

  const script = document.createElement('script');
  script.defer = true;
  script.dataset.domain = ANALYTICS_CONFIG.plausible.domain;
  script.src = `${ANALYTICS_CONFIG.plausible.apiHost}/js/script.js`;
  document.head.appendChild(script);

  console.log('Plausible Analytics initialized');
}

/**
 * Initialize Google Analytics 4
 */
function initGA4() {
  if (typeof window === 'undefined') return;

  // Load GA4 script
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${ANALYTICS_CONFIG.ga4.measurementId}`;
  document.head.appendChild(script);

  // Initialize GA4
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  window.gtag = gtag;
  gtag('js', new Date());
  gtag('config', ANALYTICS_CONFIG.ga4.measurementId);

  console.log('Google Analytics 4 initialized');
}

/**
 * Track page view
 * @param {string} path - Page path
 * @param {string} title - Page title
 */
export function trackPageView(path, title) {
  if (!ANALYTICS_CONFIG.enabled) return;

  switch (ANALYTICS_CONFIG.provider) {
    case 'plausible':
      if (window.plausible) {
        window.plausible('pageview', {
          u: path
        });
      }
      break;
    case 'ga4':
      if (window.gtag) {
        window.gtag('config', ANALYTICS_CONFIG.ga4.measurementId, {
          page_path: path,
          page_title: title
        });
      }
      break;
  }
}

/**
 * Track custom event
 * @param {string} eventName - Event name
 * @param {Object} properties - Event properties
 */
export function trackEvent(eventName, properties = {}) {
  if (!ANALYTICS_CONFIG.enabled) return;

  switch (ANALYTICS_CONFIG.provider) {
    case 'plausible':
      if (window.plausible) {
        window.plausible(eventName, properties);
      }
      break;
    case 'ga4':
      if (window.gtag) {
        window.gtag('event', eventName, properties);
      }
      break;
  }
}

/**
 * Track form submission
 * @param {string} formName - Form name/identifier
 * @param {string} formType - Type of form (contact, registration, etc.)
 */
export function trackFormSubmission(formName, formType) {
  trackEvent('form_submit', {
    form_name: formName,
    form_type: formType
  });
}

/**
 * Track button click
 * @param {string} buttonName - Button name/identifier
 * @param {string} location - Page/section where button was clicked
 */
export function trackButtonClick(buttonName, location) {
  trackEvent('button_click', {
    button_name: buttonName,
    location: location
  });
}

/**
 * Track external link click
 * @param {string} url - External URL
 * @param {string} linkText - Link text or identifier
 */
export function trackExternalLink(url, linkText) {
  trackEvent('external_link_click', {
    url: url,
    link_text: linkText
  });
}

/**
 * Enable analytics (call this to enable analytics)
 */
export function enableAnalytics() {
  ANALYTICS_CONFIG.enabled = true;
  initAnalytics();
}

/**
 * Disable analytics
 */
export function disableAnalytics() {
  ANALYTICS_CONFIG.enabled = false;
}

/**
 * Get analytics configuration
 */
export function getAnalyticsConfig() {
  return { ...ANALYTICS_CONFIG };
}



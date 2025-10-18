export type CookieCategory = 'essential' | 'analytics' | 'marketing' | 'functional';

export interface CookieConsent {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
  functional: boolean;
  timestamp: string;
}

export const COOKIE_CATEGORIES = {
  essential: {
    name: 'Essential',
    description: 'These cookies are necessary for the website to function and cannot be switched off in our systems.',
    required: true,
  },
  analytics: {
    name: 'Analytics & Performance',
    description: 'These cookies allow us to count visits and traffic sources to measure and improve site performance.',
    required: false,
  },
  marketing: {
    name: 'Marketing & Advertising',
    description: 'These cookies may be set through our site by advertising partners to build a profile of your interests.',
    required: false,
  },
  functional: {
    name: 'Functional',
    description: 'These cookies enable the website to provide enhanced functionality and personalization.',
    required: false,
  },
};

export const COOKIE_CONSENT_KEY = 'rialto-cookie-consent';

export function getCookieConsent(): CookieConsent | null {
  if (typeof window === 'undefined') return null;
  
  const stored = localStorage.getItem(COOKIE_CONSENT_KEY);
  if (!stored) return null;
  
  try {
    return JSON.parse(stored);
  } catch {
    return null;
  }
}

export function setCookieConsent(consent: CookieConsent): void {
  if (typeof window === 'undefined') return;
  
  localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(consent));
  
  // Dispatch event for other components to react
  window.dispatchEvent(new CustomEvent('cookieConsentUpdated', { detail: consent }));
}

export function hasUserConsented(): boolean {
  const consent = getCookieConsent();
  return consent !== null;
}

export function clearCookieConsent(): void {
  if (typeof window === 'undefined') return;
  
  localStorage.removeItem(COOKIE_CONSENT_KEY);
  
  // Clear non-essential cookies
  document.cookie.split(';').forEach(cookie => {
    const eqPos = cookie.indexOf('=');
    const name = eqPos > -1 ? cookie.substr(0, eqPos).trim() : cookie.trim();
    
    // Don't remove essential cookies
    if (!name.startsWith('__Secure-') && !name.startsWith('__Host-')) {
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=${window.location.hostname}`;
    }
  });
}

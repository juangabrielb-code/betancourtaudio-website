/**
 * Application constants
 */

export const SUPPORTED_LOCALES = ['en', 'es'] as const;
export const DEFAULT_LOCALE = 'es' as const;

export const NAV_LINKS = [
  { href: '#home', labelKey: 'home' },
  { href: '#services', labelKey: 'services' },
  { href: '#portfolio', labelKey: 'portfolio' },
  { href: '#contact', labelKey: 'contact' },
] as const;


/**
 * Type definitions for Betancourt Audio website
 */

/**
 * Locale type - supported languages
 */
export type Locale = 'en' | 'es';

/**
 * Navigation link structure
 */
export interface NavLink {
  href: string;
  labelKey: string;
}

/**
 * Service/Portfolio item structure
 */
export interface ServiceItem {
  id: string;
  titleKey: string;
  descriptionKey: string;
  imageUrl?: string;
}

/**
 * Metadata for pages
 */
export interface PageMetadata {
  title: string;
  description: string;
}


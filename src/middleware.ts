import createMiddleware from 'next-intl/middleware';

/**
 * i18n Proxy for internationalization
 *
 * Next.js 16 introduces the new "proxy.ts" convention replacing "middleware.ts"
 * This file handles routing and internationalization using next-intl
 *
 * @see https://nextjs.org/docs/app/building-your-application/routing/middleware
 * @see https://next-intl-docs.vercel.app/
 */
export default createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'es'],

  // If this locale is matched, pathnames work without a prefix (e.g. `/about`)
  defaultLocale: 'es'
});

export const config = {
  // Skip all paths that should not be internationalized
  // This matcher skips API routes, Next.js internals, and static files
  matcher: ['/((?!api|_next|_vercel|.*\..*).*)']
};

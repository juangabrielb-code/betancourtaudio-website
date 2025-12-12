import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        clay: 'var(--clay)',   // Tu color primario artesanal
        wood: 'var(--wood)',
        linen: 'var(--linen)',
        sage: 'var(--sage)',
        stone: {
          50: 'var(--stone-50)',
          100: 'var(--stone-100)',
          200: 'var(--stone-200)',
          300: 'var(--stone-300)',
          400: 'var(--stone-400)',
          500: 'var(--stone-500)',
          600: 'var(--stone-600)',
          700: 'var(--stone-700)',
          800: 'var(--stone-800)',
          900: 'var(--stone-900)',
        },
      },
      fontFamily: {
        sans: ["var(--font-body)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "ui-serif", "Georgia", "serif"],
      },
      spacing: {
        xs: "var(--space-xs)",
        sm: "var(--space-sm)",
        md: "var(--space-md)",
        lg: "var(--space-lg)",
        xl: "var(--space-xl)",
        "2xl": "var(--space-2xl)",
      },
      animation: {
        breathe: "breathe 4s ease-in-out infinite",
      },
      keyframes: {
        breathe: {
          "0%, 100%": { transform: "scale(1)", opacity: "0.3" },
          "50%": { transform: "scale(1.1)", opacity: "0.5" },
        },
      }
    },
  },
  plugins: [],
};
export default config;

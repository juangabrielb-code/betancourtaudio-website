import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // El sistema de diseño usa variables CSS nativas
      // Esta configuración es mínima para compatibilidad con Tailwind v4
    },
  },
  plugins: [],
};

export default config;


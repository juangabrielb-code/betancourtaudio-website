import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0a0a0a", // Obsidian
        foreground: "#ededed",
        primary: {
          DEFAULT: "#6366f1", // Electric Indigo
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#d9f99d", // Neon Lime
          foreground: "#1a2e05",
        },
        muted: {
          DEFAULT: "#262626",
          foreground: "#a3a3a3",
        },
        accent: {
          DEFAULT: "#fafafa",
          foreground: "#09090b",
        },
      },
      fontFamily: {
        sans: ["var(--font-space-grotesk)", "sans-serif"],
        display: ["var(--font-syne)", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "sonic-mesh": "radial-gradient(circle at 50% 50%, rgba(99, 102, 241, 0.15) 0%, transparent 50%)",
      },
    },
  },
  plugins: [],
};
export default config;

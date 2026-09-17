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
        brand: {
          blue: '#1e3a8a', // Deep navy
          cyan: '#06b6d4', // Cyan/blue
          aqua: '#2dd4bf', // Aqua/turquoise
          purple: '#c084fc', // Purple accent
          orange: '#fb923c', // Orange accent
          yellow: '#facc15', // Yellow accent
        },
        surface: {
          light: '#f8fafc',
          DEFAULT: '#ffffff',
          dark: '#f1f5f9',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 20px 40px -10px rgba(0,0,0,0.05)',
        glow: '0 4px 14px 0 rgba(6, 182, 212, 0.39)',
      }
    },
  },
  plugins: [],
};
export default config;

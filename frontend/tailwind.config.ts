import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // TigerQuant Design System - Black, White, Gold only
        gold: {
          50: '#fef9e7',
          100: '#fef2cc',
          200: '#fde399',
          300: '#fdd466',
          400: '#fdc533',
          500: '#FDB719', // Primary gold
          600: '#e5a516',
          700: '#cc9213',
          800: '#b27f10',
          900: '#996c0d',
        },
        // Custom grays derived from black/white
        dark: {
          50: '#f8f8f8',
          100: '#f0f0f0',
          200: '#e0e0e0',
          300: '#c0c0c0',
          400: '#a0a0a0',
          500: '#808080',
          600: '#606060',
          700: '#404040',
          800: '#202020',
          900: '#0a0a0a',
        },
        // Surface colors
        surface: {
          DEFAULT: '#2a2a2a',
          elevated: '#1a1a1a',
          light: '#f0f0f0',
          'elevated-light': '#f8f8f8',
        },
        // Text colors
        text: {
          DEFAULT: '#f8f8f8',
          muted: '#a0a0a0',
          subtle: '#808080',
          'muted-light': '#606060',
          light: '#0a0a0a',
          white: '#ffffff',
          black: '#0a0a0a',
        },
        // Border colors
        border: {
          DEFAULT: '#404040',
          light: '#e0e0e0',
        },
      },
      fontFamily: {
        'heading': ['Space Grotesk', 'system-ui', 'sans-serif'],
        'body': ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
export default config;

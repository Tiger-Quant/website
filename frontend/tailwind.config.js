/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: 'class',
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
        // Add muted color as a Tailwind utility
        muted: '#a0a0a0',
        // Add custom surface colors
        surface: '#2a2a2a',
        elevated: '#1a1a1a',
        subtle: '#404040',
      },
      fontFamily: {
        'heading': ['Space Grotesk', 'system-ui', 'sans-serif'],
        'body': ['Inter', 'system-ui', 'sans-serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'bounce-subtle': 'bounceSubtle 0.6s ease-in-out',
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
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-4px)' },
        },
      },
      boxShadow: {
        'gold': '0 0 20px rgba(253, 183, 25, 0.3)',
        'gold-lg': '0 0 30px rgba(253, 183, 25, 0.4)',
        'dark': '0 4px 6px -1px rgba(0, 0, 0, 0.3)',
        'dark-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.4)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

import type { Config } from 'tailwindcss';

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        accent: 'var(--color-accent)',
        highlight: 'var(--color-highlight)',
      },
      fontFamily: {
        custom_spectral: ['var(--font-spectral)'],
        bebas: 'var(--font-bebas)',
      },
      boxShadow: {
        'custom-light': '0 4px 15px rgba(255, 255, 255, 0.2)',
        'custom-dark': '-2px -2px 10px rgba(0, 0, 0, 0.8)',
        glow: '0 0 10px rgba(255, 135, 74, 0.8), 0 4px 15px rgba(255, 135, 74, 0.6)',
        soft: '0 2px 8px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
} satisfies Config;

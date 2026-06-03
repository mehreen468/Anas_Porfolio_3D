import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        surface: '#08101f',
        glow: '#50e5ff',
        accent: '#9b59ff',
        deep: '#02030b'
      },
      boxShadow: {
        neon: '0 0 48px rgba(79, 210, 255, 0.18), 0 0 120px rgba(147, 108, 255, 0.08)',
        panel: '0 20px 80px rgba(0, 0, 0, 0.35)'
      },
      backgroundImage: {
        hero: 'radial-gradient(circle at top, rgba(31, 100, 255, 0.18), transparent 24%), radial-gradient(circle at bottom left, rgba(138, 43, 226, 0.12), transparent 20%)'
      }
    }
  },
  plugins: []
} satisfies Config;

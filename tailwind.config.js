import plugin from 'tailwindcss/plugin'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      colors: {
        midnight: '#0a0f1a',
        navy: '#121a2e',
        cream: '#f7f4ed',
        /** High-contrast text on warm light backgrounds */
        ink: '#070b14',
        inkMuted: '#141c2c',
        inkSoft: '#283548',
        gold: {
          DEFAULT: '#c9a227',
          soft: '#e8d5a3',
          dim: '#8a7020',
        },
        plum: '#6b5b95',
        mist: 'rgba(255, 255, 255, 0.06)',
      },
      backgroundImage: {
        'hero-glow':
          'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(201, 162, 39, 0.25), transparent), radial-gradient(ellipse 60% 40% at 100% 50%, rgba(107, 91, 149, 0.12), transparent), radial-gradient(ellipse 50% 30% at 0% 80%, rgba(201, 162, 39, 0.08), transparent)',
        'hero-glow-light':
          'radial-gradient(ellipse 85% 55% at 50% -15%, rgba(201, 162, 39, 0.14), transparent), radial-gradient(ellipse 55% 45% at 95% 45%, rgba(107, 91, 149, 0.07), transparent), radial-gradient(ellipse 45% 35% at 5% 85%, rgba(201, 162, 39, 0.06), transparent)',
        'section-shine':
          'linear-gradient(180deg, rgba(247, 244, 237, 0.03) 0%, transparent 40%)',
        'section-shine-light':
          'linear-gradient(180deg, rgba(18, 26, 46, 0.05) 0%, transparent 42%)',
      },
      animation: {
        float: 'float 8s ease-in-out infinite',
        'float-slow': 'float 12s ease-in-out infinite',
        shimmer: 'shimmer 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-12px) rotate(2deg)' },
        },
        shimmer: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '1' },
        },
      },
      boxShadow: {
        glow: '0 0 40px rgba(201, 162, 39, 0.15)',
        card: '0 25px 50px -12px rgba(0, 0, 0, 0.45)',
      },
    },
  },
  plugins: [
    plugin(({ addVariant }) => {
      addVariant('light', '.light &')
    }),
  ],
}

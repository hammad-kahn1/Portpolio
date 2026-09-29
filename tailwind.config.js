/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'Inter', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
        heading: ['Playfair Display', 'serif'],
      },
      colors: {
        gold: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
          950: '#451a03',
        },
        dark: {
          bg: '#060608',
          card: '#0b0b10',
          surface: '#111118',
          border: 'rgba(245, 158, 11, 0.15)',
          'border-highlight': 'rgba(245, 158, 11, 0.3)',
        },
        ink: {
          50: '#faf8f5',
          100: '#f3efe8',
          200: '#e7e0d5',
          300: '#d5cbbe',
          400: '#9c9285',
          500: '#73695d',
          600: '#524b42',
          700: '#38322a',
          800: '#221e1a',
          900: '#120f0d',
        },
      },
      boxShadow: {
        'glow-gold': '0 0 35px -5px rgba(245, 158, 11, 0.35)',
        'glow-gold-sm': '0 0 20px -3px rgba(245, 158, 11, 0.25)',
        'glow-amber': '0 0 40px -10px rgba(217, 119, 6, 0.3)',
        'inner-bezel': 'inset 0 1px 1px 0 rgba(255, 255, 255, 0.12)',
      },
      boxShadow: {
        'glow-violet': '0 0 40px -10px rgba(168, 85, 247, 0.3)',
        'glow-pink': '0 0 40px -10px rgba(236, 72, 153, 0.3)',
        'glow-indigo': '0 0 40px -10px rgba(99, 102, 241, 0.3)',
        'inner-bezel': 'inset 0 1px 1px 0 rgba(255, 255, 255, 0.12)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'dark-mesh': 'radial-gradient(at 0% 0%, rgba(168, 85, 247, 0.12) 0px, transparent 50%), radial-gradient(at 100% 100%, rgba(236, 72, 153, 0.08) 0px, transparent 50%)',
      },
      animation: {
        'float': 'float 5s ease-in-out infinite',
        'float-delay': 'float 5s ease-in-out 1.5s infinite',
        'spin-slow': 'spin 16s linear infinite',
        'marquee': 'marquee 25s linear infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
      },
    },
  },
  plugins: [],
}

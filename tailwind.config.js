/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: {
          950: '#050811',
          900: '#080d1a',
          800: '#0f172a',
          700: '#1e293b',
        },
        crescent: {
          navy: '#1C315E',
          'navy-dark': '#0B1B3D',
          'navy-light': '#2A437E',
          crimson: '#D90B1C',
          'crimson-dark': '#A02022',
          gold: '#F7BC31',
          'gold-light': '#FCD34D',
          slate: '#3E4C57',
          'slate-light': '#F8FAFC',
          accent: '#0284C7',
        },
        neon: {
          orange: '#ff6600',
          crimson: '#ff1f4b',
          amber: '#f59e0b',
          cyan: '#06b6d4',
          violet: '#8b5cf6',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      boxShadow: {
        'glow-orange': '0 0 25px -5px rgba(255, 102, 0, 0.45)',
        'glow-crimson': '0 0 25px -5px rgba(255, 31, 75, 0.45)',
        'glow-amber': '0 0 25px -5px rgba(245, 158, 11, 0.45)',
        'isometric': '0 30px 60px -12px rgba(0, 0, 0, 0.7), 0 18px 36px -18px rgba(255, 102, 0, 0.25)',
      },
      animation: {
        'marquee': 'marquee 35s linear infinite',
        'marquee-reverse': 'marquee-reverse 35s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}

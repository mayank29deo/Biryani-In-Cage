/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#070605',
          900: '#0C0A09',
          800: '#15110E',
          700: '#1F1A15',
          600: '#2A231C',
          500: '#3A2F25',
        },
        saffron: {
          50: '#FFF8E1',
          100: '#FFEDB3',
          200: '#FFE082',
          300: '#FFD451',
          400: '#FFC628',
          500: '#F5B800',
          600: '#D89A00',
          700: '#A57600',
          800: '#704F00',
        },
        ember: {
          400: '#FF8A3D',
          500: '#E5651B',
          600: '#B5450B',
          700: '#7A2A05',
        },
        brick: {
          500: '#8B3A1F',
          700: '#5A2410',
        },
        bone: '#F5F1E8',
      },
      fontFamily: {
        display: ['"Cinzel"', 'serif'],
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        hindi: ['"Noto Serif Devanagari"', 'serif'],
      },
      backgroundImage: {
        'radial-glow':
          'radial-gradient(circle at center, rgba(245,184,0,0.18), transparent 60%)',
        'cage-bars':
          'repeating-linear-gradient(90deg, rgba(8,6,4,0.95) 0 14px, transparent 14px 60px)',
        'noise':
          "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.35 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
      },
      boxShadow: {
        neon: '0 0 24px rgba(255,198,40,0.55), 0 0 48px rgba(255,198,40,0.25)',
        'neon-soft': '0 0 12px rgba(255,198,40,0.35)',
        'inner-glow': 'inset 0 0 80px rgba(255,198,40,0.08)',
        plate: '0 32px 60px -28px rgba(0,0,0,0.85)',
      },
      keyframes: {
        flicker: {
          '0%, 19%, 21%, 23%, 25%, 54%, 56%, 100%': { opacity: '1' },
          '20%, 24%, 55%': { opacity: '0.4' },
        },
        steam: {
          '0%': { transform: 'translateY(0) scale(1)', opacity: '0' },
          '15%': { opacity: '0.55' },
          '100%': { transform: 'translateY(-120px) scale(1.6)', opacity: '0' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'cage-open-left': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-105%)' },
        },
        'cage-open-right': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(105%)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        flicker: 'flicker 4s linear infinite',
        steam: 'steam 5s ease-out infinite',
        marquee: 'marquee 35s linear infinite',
        'marquee-fast': 'marquee 18s linear infinite',
        'cage-open-left': 'cage-open-left 1.4s cubic-bezier(.7,0,.3,1) forwards',
        'cage-open-right': 'cage-open-right 1.4s cubic-bezier(.7,0,.3,1) forwards',
        shimmer: 'shimmer 3s linear infinite',
      },
    },
  },
  plugins: [],
};

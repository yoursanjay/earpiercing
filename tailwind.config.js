/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        maroon: {
          950: '#2A040B',
          900: '#3F0511',
          800: '#5A091A',
          700: '#7B0D23',
          600: '#99112C',
        },
        gold: {
          100: '#FDF7E7',
          200: '#F7E7B6',
          300: '#EDD17F',
          400: '#E1B94C',
          500: '#D4AF37', // Antique Gold
          600: '#B8860B',
          700: '#926508',
          800: '#6D4B06',
        },
        turmeric: {
          400: '#FFB830',
          500: '#FFA500',
          600: '#E68900',
        },
        templegreen: {
          800: '#0E3922',
          900: '#082516',
          700: '#175132',
        },
        ivory: {
          50: '#FFFEFA',
          100: '#FDFBF7',
          200: '#FAF5EB',
          300: '#F3EADB',
        }
      },
      fontFamily: {
        tamil: ['"Noto Serif Tamil"', '"Mukta Malar"', 'serif'],
        cinematic: ['"Cinzel Decorative"', '"Cinzel"', 'serif'],
        serif: ['"Playfair Display"', '"Cormorant Garamond"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      backgroundImage: {
        'temple-gradient': 'radial-gradient(ellipse at top, #7B0D23 0%, #3F0511 60%, #1A0206 100%)',
        'gold-shimmer': 'linear-gradient(135deg, #ECC86B 0%, #D4AF37 40%, #FFF3B0 60%, #B8860B 100%)',
        'silk-dark': 'linear-gradient(180deg, rgba(42,4,11,0.92) 0%, rgba(20,2,5,0.98) 100%)',
      },
      keyframes: {
        flameFlicker: {
          '0%, 100%': { transform: 'scale(1) rotate(-1deg)', opacity: '0.95' },
          '50%': { transform: 'scale(1.08, 0.96) rotate(1.5deg)', opacity: '1' },
        },
        pulseGlow: {
          '0%, 100%': { filter: 'drop-shadow(0 0 15px rgba(212, 175, 55, 0.4))' },
          '50%': { filter: 'drop-shadow(0 0 28px rgba(255, 184, 48, 0.8))' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-12px) rotate(3deg)' },
        }
      },
      animation: {
        flame: 'flameFlicker 2.5s ease-in-out infinite alternate',
        pulseGlow: 'pulseGlow 3s ease-in-out infinite',
        floatSlow: 'floatSlow 6s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}

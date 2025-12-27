/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // 2025 Modern Violet-Cyan color palette
        primary: {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
          950: '#2e1065',
        },
        accent: {
          50: '#ecfeff',
          100: '#cffafe',
          200: '#a5f3fc',
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
          700: '#0e7490',
          800: '#155e75',
          900: '#164e63',
          950: '#083344',
        },
        // Rich dark backgrounds for better contrast
        dark: {
          50: '#2a2a3e',
          100: '#1e1e2e',
          200: '#181825',
          300: '#13111c',
          400: '#0d0b14',
          500: '#08070c',
        },
        // Glow effect colors
        glow: {
          violet: 'rgba(139, 92, 246, 0.5)',
          cyan: 'rgba(34, 211, 238, 0.5)',
          pink: 'rgba(236, 72, 153, 0.5)',
        }
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'float-gentle': 'floatGentle 8s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'fade-in': 'fadeIn 0.5s ease-in',
        'gradient': 'gradient 3s ease infinite',
        'gradient-slow': 'gradient 8s ease infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'pulse-ring': 'pulseRing 2s ease-out infinite',
        'aurora': 'aurora 15s ease-in-out infinite',
        'border-flow': 'borderFlow 4s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        floatGentle: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '33%': { transform: 'translateY(-10px) rotate(1deg)' },
          '66%': { transform: 'translateY(-5px) rotate(-1deg)' },
        },
        glow: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(139, 92, 246, 0.3), 0 0 40px rgba(34, 211, 238, 0.2)' },
          '50%': { boxShadow: '0 0 40px rgba(139, 92, 246, 0.5), 0 0 60px rgba(34, 211, 238, 0.4)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        gradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        pulseRing: {
          '0%': { transform: 'scale(0.95)', opacity: '1' },
          '50%': { transform: 'scale(1.05)', opacity: '0.5' },
          '100%': { transform: 'scale(0.95)', opacity: '1' },
        },
        aurora: {
          '0%, 100%': { transform: 'translateX(0) translateY(0) rotate(0deg)' },
          '25%': { transform: 'translateX(5%) translateY(-5%) rotate(1deg)' },
          '50%': { transform: 'translateX(-5%) translateY(5%) rotate(-1deg)' },
          '75%': { transform: 'translateX(3%) translateY(3%) rotate(0.5deg)' },
        },
        borderFlow: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '200% 50%' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'aurora-gradient': 'linear-gradient(135deg, rgba(139, 92, 246, 0.15) 0%, rgba(34, 211, 238, 0.15) 50%, rgba(236, 72, 153, 0.1) 100%)',
      },
      boxShadow: {
        'glow-sm': '0 0 15px rgba(139, 92, 246, 0.3)',
        'glow-md': '0 0 30px rgba(139, 92, 246, 0.4)',
        'glow-lg': '0 0 50px rgba(139, 92, 246, 0.5)',
        'glow-cyan': '0 0 30px rgba(34, 211, 238, 0.4)',
        'glow-pink': '0 0 30px rgba(236, 72, 153, 0.4)',
      },
      backdropBlur: {
        'xs': '2px',
      }
    },
  },
  plugins: [],
}

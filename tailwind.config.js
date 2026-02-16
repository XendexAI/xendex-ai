/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Xendex AI Brand Colors - Based on brand icon
        // Change these values to update the entire site's color scheme
        brand: {
          // Primary - Bright Blue (from icon)
          primary: {
            DEFAULT: '#3b82f6',  // Main brand blue
            light: '#60a5fa',     // Lighter variant
            lighter: '#93c5fd',   // Even lighter
            dark: '#2563eb',      // Darker variant
            darker: '#1d4ed8',    // Even darker
          },
          // Secondary - Dark Navy (from icon)
          secondary: {
            DEFAULT: '#1e293b',   // Main dark navy
            light: '#334155',     // Lighter variant
            lighter: '#475569',   // Even lighter
            dark: '#0f172a',      // Darker variant
            darker: '#020617',    // Almost black
          },
          // Accent colors
          accent: {
            purple: '#8b5cf6',    // Purple accent
            teal: '#14b8a6',      // Teal accent
            orange: '#f97316',    // Orange accent
          },
          // Neutral grays
          gray: {
            50: '#f8fafc',
            100: '#f1f5f9',
            200: '#e2e8f0',
            300: '#cbd5e1',
            400: '#94a3b8',
            500: '#64748b',
            600: '#475569',
            700: '#334155',
            800: '#1e293b',
            900: '#0f172a',
            950: '#020617',
          },
        },
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-in': 'slideIn 0.8s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-30px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

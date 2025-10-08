import type { Config } from 'tailwindcss'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Admin theme colors
        admin: {
          bg: {
            primary: '#1a1d2e',
            secondary: '#222736',
            tertiary: '#2d3142',
            card: '#252836',
            hover: '#2f3349',
          },
          text: {
            primary: '#e4e6eb',
            secondary: '#9ca3af',
            muted: '#6b7280',
          },
          accent: {
            gold: '#c5a467',
            'gold-light': '#d4b87c',
            purple: '#8b5cf6',
            blue: '#3b82f6',
            green: '#10b981',
            red: '#ef4444',
          },
          border: {
            subtle: '#374151',
            medium: '#4b5563',
          },
        },
      },
      boxShadow: {
        'admin-sm': '0 2px 4px rgba(0, 0, 0, 0.3)',
        'admin-md': '0 4px 6px rgba(0, 0, 0, 0.4)',
        'admin-lg': '0 10px 15px rgba(0, 0, 0, 0.5)',
        'admin-xl': '0 20px 25px rgba(0, 0, 0, 0.6)',
        'admin-gold': '0 4px 12px rgba(197, 164, 103, 0.3)',
      },
      borderRadius: {
        'admin-sm': '6px',
        'admin-md': '8px',
        'admin-lg': '12px',
        'admin-xl': '16px',
      },
    },
  },
  plugins: [],
} satisfies Config

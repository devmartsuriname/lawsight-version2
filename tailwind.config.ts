import type { Config } from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Admin Dark Theme (Darkone-inspired)
        'admin-bg-primary': 'hsl(230, 27%, 15%)',      // #1a1d2e
        'admin-bg-secondary': 'hsl(228, 20%, 19%)',    // #222736
        'admin-bg-tertiary': 'hsl(225, 15%, 23%)',     // #2d3142
        'admin-accent-purple': 'hsl(258, 90%, 66%)',   // #8b5cf6
        'admin-accent-blue': 'hsl(217, 91%, 60%)',     // #3b82f6
        'admin-accent-gold': 'hsl(43, 49%, 59%)',      // #c5a467 (VP gold)
        'admin-text-primary': 'hsl(0, 0%, 95%)',       // #f2f2f2
        'admin-text-secondary': 'hsl(220, 13%, 69%)',  // #9ca3af
        'admin-border': 'hsl(228, 15%, 25%)',          // #353845
        
        // VP Brand Colors (from style guide)
        'vp-gold': 'hsl(43, 49%, 59%)',
        'vp-purple': 'hsl(258, 90%, 66%)',
        'vp-blue': 'hsl(217, 91%, 60%)',
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Muli', 'sans-serif'],
      },
      boxShadow: {
        'admin-sm': '0 1px 2px 0 rgba(0, 0, 0, 0.3)',
        'admin-md': '0 4px 6px -1px rgba(0, 0, 0, 0.4)',
        'admin-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.5)',
        'admin-xl': '0 20px 25px -5px rgba(0, 0, 0, 0.6)',
        'admin-glow': '0 0 20px rgba(139, 92, 246, 0.4)',
      },
      borderRadius: {
        'admin-sm': '0.375rem',
        'admin-md': '0.5rem',
        'admin-lg': '0.75rem',
        'admin-xl': '1rem',
      },
    },
  },
  plugins: [],
} satisfies Config;

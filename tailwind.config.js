/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ameen: {
          bg: '#252321',
          surface: '#332D27',
          surfaceLight: '#3E362F',
          coffee: '#4A3528',
          gold: '#D6B477',
          goldLight: '#E5CA97',
          cream: '#F1E6D2',
          muted: '#BDB3A5',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', ' Cambria', '"Times New Roman"', 'Times', 'serif'],
        sans: ['"DM Sans"', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'menu-board': '0 20px 50px rgba(0, 0, 0, 0.55), inset 0 1px 0 rgba(214, 180, 119, 0.18)',
        'gold-glow': '0 4px 24px rgba(214, 180, 119, 0.15)',
      },
    },
  },
  plugins: [],
};

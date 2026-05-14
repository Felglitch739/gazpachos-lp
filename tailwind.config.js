/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand': {
          'dark': '#110c08',
          'amber': '#b65f18',
          'rusty': '#8c3d0b',
          'glass': 'rgba(20, 15, 10, 0.4)',
          'glass-border': 'rgba(255, 255, 255, 0.08)'
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=2000&auto=format&fit=crop')", // Mock image
      }
    },
  },
  plugins: [],
}

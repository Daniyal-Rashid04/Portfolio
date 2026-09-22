/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: '#0f172a',
        darkblue: '#1e3a8a',
        cyan: '#06b6d4',
        orange: '#f97316',
        offwhite: '#f8fafc',
      },
      fontFamily: {
        heading: ['var(--font-poppins)'],
        body: ['var(--font-inter)'],
      },
    },
  },
  plugins: [],
};
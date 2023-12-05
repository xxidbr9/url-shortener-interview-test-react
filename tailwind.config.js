/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class', '[data-mode="dark"]'],
  content: ['src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'cool-gray-800': '#1F2937',
      },
    },
  },
  plugins: [],
};

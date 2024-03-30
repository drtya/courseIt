import defaultTheme from 'tailwindcss/defaultTheme';
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,tsx,js,jsx,ts}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-kellyslab)', ...defaultTheme.fontFamily.sans],
      }
    },
  },
  plugins: [],
}
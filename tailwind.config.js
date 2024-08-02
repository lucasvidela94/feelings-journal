/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ['"inside-out"', "sans-serif"],
        secondary: ["Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    gridTemplateColumns: {
      2: "repeat(2, minmax(0, 1fr))",
    },
    extend: {},
  },
  plugins: [],
};

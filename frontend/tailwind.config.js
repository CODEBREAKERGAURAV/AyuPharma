/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // scan all your source files
  ],
  theme: {
    extend: {
      colors: {
        primary: "#af1ea8",   // cleaned hex (drop `ff` at end)
        secondary: "#9333EA",
        accent: "#F59E0B",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class', // Enable dark mode
    theme: {
      extend: {
        colors: {
          light: "#fcfbf7",
          dark: "#0a0a0a",
        },
      },
    },
    plugins: [],
  }
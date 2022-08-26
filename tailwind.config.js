/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./index.html",
      "./_layouts/*.html",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#7191D6',
      },
    },
  },
  plugins: [],
}

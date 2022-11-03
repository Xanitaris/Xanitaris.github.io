/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "../index.html",
      "../_layouts/*.{html,js}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#7191D6',
      },
    },
  },
  plugins: [
      require('@tailwindcss/typography'),
  ],
}

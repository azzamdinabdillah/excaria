/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/project-html/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'sansita': ['Sansita', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

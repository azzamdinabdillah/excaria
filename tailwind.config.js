/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/project-html/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sansita: ["Sansita", "sans-serif"],
      },
      colors: {
        kelahiranBg: "#FDF4F5",
        kelahiranMain: "#EDD1D2",
        textMain: "#7C1A1F",
      },
    },
  },
  plugins: [],
};

require("tailwindcss/plugin");

module.exports = {
  purge: {
    content: [
      "./src/**/*.vue",
      "./src/**/*.js",
      "./src/**/*.jsx",
      "./src/**/*.html",
      "./src/**/*.pug",
      "./src/**/*.md",
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["'Nanum Gothic'"],
      serif: ["'Nanum Brush Script'"]
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
}

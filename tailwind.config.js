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
    extend: {
      colors: {
        'black-olive': '#404040'
      },
      boxShadow: {
        'cartoon-black-olive': '0px 4px 0px #404040'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
}

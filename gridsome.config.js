// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const contents = require('./contents')
const tailwind = require("tailwindcss");
const postcssPlugins = [tailwind()];

module.exports = {
  siteName: "JangGomGeun",
  siteUrl: "https://janggomgeun.github.io",
  icon: {
    favicon: "src/favicon.png"
  },
  plugins: [
    ...contents,
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        include: ['/about', 'expertises', 'projects']
      }
    }
  ],
  css: {
    loaderOptions: {
      postcss: {
        plugins: postcssPlugins,
      },
    },
  },
}

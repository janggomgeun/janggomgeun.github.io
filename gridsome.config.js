// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const tailwindcss = require("tailwindcss")
const contents = require("./contents")

module.exports = {
  siteName: 'Jang Gom Geun',
  siteUrl: 'https://janggomgeun.github.io',
  siteDescription: 'Software Engineer',
  plugins: [
    ...contents,
    {
      use: "@gridsome/plugin-google-analytics",
      options: {
        id: "UA-127350681-1"
      }
    },
    {
      use: "@gridsome/plugin-sitemap",
      options: {
        cacheTime: 600000, // default
        exclude: ["/exclude-me"],
        config: {
          "/*": {
            changefreq: "weekly",
            priority: 0.5
          }
        }
      }
    }
  ],
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          tailwindcss
        ]
      }
    }
  }
}

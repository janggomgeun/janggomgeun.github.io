// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Jang Gom Geun',
  siteUrl: 'https://janggomgeun.github.io',
  siteDescription: 'Software Engineer',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'contents/posts/**/*.md',
        typeName: 'Post',
        route: '/posts/:id',
        refs: {
          tags: {
            typeName: "Tag",
            route: "/tag/:id",
            create: true
          }
        }
      }
    },
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
    // {
    //   use: 'gridsome-plugin-tailwindcss',
    //   /**
    //   * These are the default options. You don't need to set any options to get
    //   * going. Seriously, you don't need to declare tailwind.config.js.

    //   options: {
    //     tailwindConfig: './tailwind.config.js',
    //     purgeConfig: {},
    //     presetEnvConfig: {},
    //     shouldPurge: true,
    //     shouldImport: true,
    //     shouldTimeTravel: true
    //   }
    //   */
    // }
  ]
}

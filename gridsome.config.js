// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Jang Gom Geun",
  siteUrl: "https://janggomgeun.github.io",
  icon: {
    favicon: "src/favicon.png"
  },
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'contents/projects/**/*.md',
        typeName: 'Project'
      }
    }
  ]
}

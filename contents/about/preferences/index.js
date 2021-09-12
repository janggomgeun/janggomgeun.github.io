module.exports = {
  use: '@gridsome/source-filesystem',
  options: {
    path: 'contents/about/preferences/**/*.md',
    typeName: 'Preference'
  }
}
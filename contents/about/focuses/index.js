module.exports = {
  use: '@gridsome/source-filesystem',
  options: {
    path: 'contents/about/focuses/**/*.md',
    typeName: 'Focus'
  }
}
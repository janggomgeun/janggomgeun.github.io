module.exports = {
  use: '@gridsome/source-filesystem',
  options: {
    path: 'contents/about/principles/**/*.md',
    typeName: 'Principle'
  }
}
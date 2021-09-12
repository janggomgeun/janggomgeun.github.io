module.exports = {
  use: '@gridsome/source-filesystem',
  options: {
    path: 'contents/about/retrospectives/**/*.md',
    typeName: 'Retrospective'
  }
}
module.exports = {
  use: '@gridsome/source-filesystem',
  options: {
    path: 'contents/about/thoughts/**/*.md',
    typeName: 'Thought'
  }
}
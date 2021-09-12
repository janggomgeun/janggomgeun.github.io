module.exports = [
  {
    use: '@gridsome/source-filesystem',
    options: {
      path: 'contents/expertises/cheatsheets/**/*.md',
      typeName: 'Cheatsheet'
    }
  },
  {
    use: '@gridsome/source-filesystem',
    options: {
      path: 'contents/expertises/mechanisms/**/*.md',
      typeName: 'Mechanism'
    }
  }
]
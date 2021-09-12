module.exports = [
  {
    use: '@gridsome/source-filesystem',
    options: {
      path: 'contents/interfaces/interests/**/*.md',
      typeName: 'Interest'
    }
  },
  {
    use: '@gridsome/source-filesystem',
    options: {
      path: 'contents/interfaces/preferences/**/*.md',
      typeName: 'Preference'
    }
  },
  {
    use: '@gridsome/source-filesystem',
    options: {
      path: 'contents/interfaces/principles/**/*.md',
      typeName: 'Principle'
    }
  },
  {
    use: '@gridsome/source-filesystem',
    options: {
      path: 'contents/interfaces/retrospectives/**/*.md',
      typeName: 'Retrospective'
    }
  },
  {
    use: '@gridsome/source-filesystem',
    options: {
      path: 'contents/interfaces/swot/**/*.md',
      typeName: 'SWOT'
    }
  },
  {
    use: '@gridsome/source-filesystem',
    options: {
      path: 'contents/interfaces/thoughts/**/*.md',
      typeName: 'Thought'
    }
  }
]
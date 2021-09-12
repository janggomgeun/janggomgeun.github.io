module.exports = [
  {
    use: '@gridsome/source-filesystem',
    options: {
      path: 'contents/interface/interests/**/*.md',
      typeName: 'Focus'
    }
  },
  {
    use: '@gridsome/source-filesystem',
    options: {
      path: 'contents/interface/preferences/**/*.md',
      typeName: 'Preference'
    }
  },
  {
    use: '@gridsome/source-filesystem',
    options: {
      path: 'contents/interface/principles/**/*.md',
      typeName: 'Principle'
    }
  },
  {
    use: '@gridsome/source-filesystem',
    options: {
      path: 'contents/interface/retrospectives/**/*.md',
      typeName: 'Retrospective'
    }
  },
  {
    use: '@gridsome/source-filesystem',
    options: {
      path: 'contents/interface/swot/**/*.md',
      typeName: 'SWOT'
    }
  },
  {
    use: '@gridsome/source-filesystem',
    options: {
      path: 'contents/interface/thoughts/**/*.md',
      typeName: 'Thought'
    }
  }
]
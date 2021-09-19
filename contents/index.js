module.exports = [
  {
    use: '@gridsome/source-filesystem',
    options: {
      path: 'contents/interests/**/*.md',
      typeName: 'Interest'
    }
  },
  {
    use: '@gridsome/source-filesystem',
    options: {
      path: 'contents/preferences/**/*.md',
      typeName: 'Preference'
    }
  },
  {
    use: '@gridsome/source-filesystem',
    options: {
      path: 'contents/principles/**/*.md',
      typeName: 'Principle'
    }
  },
  {
    use: '@gridsome/source-filesystem',
    options: {
      path: 'contents/retrospectives/**/*.md',
      typeName: 'Retrospective'
    }
  },
  {
    use: '@gridsome/source-filesystem',
    options: {
      path: 'contents/analysis/**/*.md',
      typeName: 'SWOT'
    }
  },
  {
    use: '@gridsome/source-filesystem',
    options: {
      path: 'contents/thoughts/**/*.md',
      typeName: 'Thought'
    }
  },
  {
    use: '@gridsome/source-filesystem',
    options: {
      path: 'contents/projects/**/*.md',
      typeName: 'Project'
    }
  },
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
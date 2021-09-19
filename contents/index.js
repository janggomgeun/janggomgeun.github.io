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
      path: 'contents/values/**/*.md',
      typeName: 'Value'
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
      path: 'contents/analyses/**/*.md',
      typeName: 'Analysis'
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
      path: 'contents/cheatsheets/**/*.md',
      typeName: 'Cheatsheet'
    }
  },
  {
    use: '@gridsome/source-filesystem',
    options: {
      path: 'contents/mechanisms/**/*.md',
      typeName: 'Mechanism'
    }
  }
]
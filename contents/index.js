const expertises = require('./expertises');
const interfaces = require('./interfaces');

module.exports = [
  ...expertises,
  ...interfaces,
  {
    use: '@gridsome/source-filesystem',
    options: {
      path: 'contents/projects/**/*.md',
      typeName: 'Project'
    }
  }
]
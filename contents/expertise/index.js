module.exports = [
    {
        use: '@gridsome/source-filesystem',
        options: {
            path: 'contents/expertise/knowledges/concepts/**/*.md',
            typeName: 'Knowledge',
            route: '/expertise/knowledges/:id'
        }
    },
]
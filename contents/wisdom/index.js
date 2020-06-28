module.exports = [
    {
        use: '@gridsome/source-filesystem',
        options: {
            path: 'contents/wisdom/principles/**/*.md',
            typeName: 'Principle',
            route: '/wisdom/principles/:id'
        }
    },
    {
        use: '@gridsome/source-filesystem',
        options: {
            path: 'contents/wisdom/quotes/**/*.md',
            typeName: 'Quote',
            route: '/wisdom/quotes/:id'
        }
    },
    {
        use: '@gridsome/source-filesystem',
        options: {
            path: 'contents/wisdom/words/**/*.md',
            typeName: 'Word',
            route: '/wisdom/words/:id'
        }
    }
]
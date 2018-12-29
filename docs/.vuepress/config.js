module.exports = {
    title: 'rannikkohurri.net',
    description: 'LuKa\'s Personal Blog',
    head: [
        [ 'link', { rel: 'icon', href: '/favicon.ico'} ]
    ],
    markdown: {
        lineNumbers: true
    },
    themeConfig: {
        lastUpdated: 'Updated',
        navbar: true,
        nav: [
            { text: 'NoSQL', link: '/NoSQL/' }
        ],
        sidebar: {
            '/NoSQL/': [
                '',
                'MongoDB',
                'Redis'
            ]
        }
    }
}
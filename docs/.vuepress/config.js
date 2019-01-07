module.exports = {
    title: 'rannikkohurri.net',
    description: 'LuKa\'s Personal Blog',
    head: [
        [ 'link', { rel: 'icon', href: '/favicon.ico'} ]
    ],
    serviceWorker: true,
    markdown: { lineNumbers: true },
    themeConfig: {
        // activeHeaderLinks: true, // Default: true
        // sidebarDepth: 2,
        // displayAllHeaders: true,
        lastUpdated: 'Updated',
        navbar: true,
        nav: [
            { text: 'Learn', link: '/learn' },
            { text: 'About', link: '/about' }
        ],
        sidebar: [
            '/',
            {
                title: 'Client-Side',
                children: [
                    '/client/polymer',
                    '/client/progressive-web-apps',
                    '/client/react',
                    '/client/vue-basics',
                    '/client/vue-components',
                    '/client/vue-resources',
                    '/client/webcomponents'
                ]
            },
            {
                title: 'Node.js',
                children: [
                    '/node/basics',
                    '/node/graphql',
                    '/node/hapi',
                    '/node/knex',
                    '/node/npm'
                ]
            }, {
                title: 'NoSQL Databases',
                children: [
                    '/nosql/intro',
                    '/nosql/mongodb',
                    '/nosql/redis',
                    '/nosql/firebase',
                    '/nosql/firestore'
                ]
            },
            {
                title: 'Resources',
                children: [
                    '/resources/',
                    '/resources/clientframeworks',
                    '/resources/css',
                    '/resources/db',
                    '/resources/graphics',
                    '/resources/libs',
                    '/resources/markdown',
                    '/resources/node',
                    '/resources/tools',
                    '/resources/ux',
                    '/resources/widgets'
                ]
            },
            {
                title: 'Testing',
                collapsible: true,
                children: [
                    '/testing/',
                    '/testing/mocha',
                    '/testing/nightwatch',
                    '/testing/resources'
                ]
            },
            {
                title: 'Misc Topics',
                collapsible: true,
                children: [
                    '/misc/api-design',
                    '/misc/client-app-tech',
                    '/misc/large-scale-javascript',
                    '/misc/the-mobile-web'
                ]
            }
        ]
    }
}
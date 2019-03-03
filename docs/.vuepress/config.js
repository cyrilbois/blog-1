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
            { text: 'Resources', link: '/resources/' },
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
                    '/client/angular/angular-ui-router'
                ]
            },
            {
                title: 'JavaScript',
                children: [
                    '/js/',
                    '/js/array',
                    '/js/es6',
                    '/js/promises'
                ]
            },
            {
                title: 'Misc Topics',
                collapsible: true,
                children: [
                    '/misc/api-design',
                    '/misc/client-app-tech',
                    '/misc/git-cli',
                    '/misc/golang',
                    '/misc/graphql',
                    '/misc/gulp',
                    '/misc/large-scale-javascript',
                    '/misc/microservices',
                    '/misc/staff-training',
                    '/misc/the-mobile-web',
                    '/misc/typescript'
                ]
            },
            {
                title: 'Node.js',
                children: [
                    '/node/',
                    '/node/basics',
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
                collapsible: true,
                children: [
                    '/resources/',
                    '/resources/angular',
                    '/resources/apis',
                    '/resources/bootstrap',
                    '/resources/clientframeworks',
                    '/resources/css',
                    '/resources/db',
                    '/resources/graphics',
                    '/resources/hapi',
                    '/resources/libs',
                    '/resources/markdown',
                    '/resources/node',
                    '/resources/software',
                    '/resources/testing',
                    '/resources/tools',
                    '/resources/ux',
                    '/resources/vue',
                    '/resources/widgets'
                ]
            },
            {
                title: 'Testing',
                collapsible: true,
                children: [
                    '/testing/',
                    '/testing/jasmine',
                    '/testing/mocha',
                    '/testing/nightwatch'
                ]
            },
            {
                title: 'Vue.js',
                collapsible: true,
                children: [
                    '/vue/',
                    '/vue/basics'
                ]
            }
        ]
    }
}
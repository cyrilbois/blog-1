module.exports = {
  title: 'rannikkohurri.net',
  description: "LuKa's Personal Blog",
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
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
      { text: 'Learn', link: '/learn.md' },
      { text: 'Demos', link: '/demos.md' },
      { text: 'About', link: '/about.md' },
    ],
    sidebar: [
      '/',
      {
        title: 'Client-Side',
        children: [
          '/client/angular/angular-ui-router.md',
          '/client/polymer.md',
          '/client/progressive-web-apps.md',
          '/client/react.md',
          '/client/spa.md',
          '/client/webcomponents.md',
        ],
      },
      {
        title: 'DevOps',
        children: ['/devops/', '/devops/ansible.md', '/devops/powershell.md'],
      },
      {
        title: 'JavaScript',
        children: ['/js/', '/js/array.md', '/js/es6.md'],
      },
      {
        title: 'Misc Topics',
        collapsible: true,
        children: [
          '/misc/api-design.md',
          '/misc/client-app-tech.md',
          '/misc/git-cli.md',
          '/misc/gulp.md',
          '/misc/rhomobile.md',
          '/misc/large-scale-javascript.md',
          '/misc/staff-training.md',
          '/misc/the-mobile-web.md',
        ],
      },
      {
        title: 'Node.js',
        children: [
          '/node/',
          '/node/basics.md',
          '/node/hapi.md',
          '/node/knex.md',
          '/node/npm.md',
        ],
      },
      {
        title: 'NoSQL Databases',
        children: [
          '/nosql/intro.md',
          '/nosql/redis.md',
          '/nosql/firebase.md',
          '/nosql/firestore.md',
        ],
      },
      {
        title: 'Resources',
        collapsible: true,
        children: [
          '/resources/',
          '/resources/angular.md',
          '/resources/apis.md',
          '/resources/bootstrap.md',
          '/resources/clientframeworks.md',
          '/resources/css.md',
          '/resources/db.md',
          '/resources/graphics.md',
          '/resources/hapi.md',
          '/resources/libs.md',
          '/resources/markdown.md',
          '/resources/node.md',
          '/resources/react.md',
          '/resources/software.md',
          '/resources/testing.md',
          '/resources/tools.md',
          '/resources/ux.md',
          '/resources/vue.md',
          '/resources/widgets.md',
        ],
      },
      {
        title: 'Testing',
        collapsible: true,
        children: [
          '/testing/',
          '/testing/jasmine.md',
          '/testing/mocha.md',
          '/testing/nightwatch.md',
        ],
      },
      {
        title: 'Vue.js',
        collapsible: true,
        children: [
          '/vue/',
          '/vue/basics.md',
          '/vue/components.md',
          '/vue/vue-router.md',
          '/vue/vuex.md',
        ],
      },
    ],
  },
};

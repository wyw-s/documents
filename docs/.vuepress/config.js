
module.exports = {
  title: '流星飞过小熊座',
  description: '文档，笔记',
  head: [
    ['link', { rel: 'icon', href: '/logo.jpeg' }]
  ],
  markdown: {
    extractHeaders: ['h2', 'h3', 'h4','h5','h6' ],
    lineNumbers: true,
  },
  themeConfig: {
    lastUpdated: '上次更新',
    nav: [
      {text: '首页', link: '/'},
      { text: '介绍', link: '/guide/' },
      {
        text: '前端',
        items: [
          { text: 'HTML', link: '/view/frontEnd/html/' },
          { text: 'CSS', link: '/view/frontEnd/css/' },
          { text: 'javaScript', link: '/view/frontEnd/javascript/' },
          { text: 'AJAX', link: '/view/frontEnd/ajax/' },
          { text: 'jquery', link: '/view/frontEnd/jquery/' },
          { text: 'VUE', link: '/view/frontEnd/vue/' },
          { text: 'react', link: '/view/frontEnd/react/' },
          { text: 'webpack', link: '/view/frontEnd/webpack/' },
          { text: 'npm', link: '/view/frontEnd/npm/' },
        ]
      },
      {
        text: '后端',
        items: [
          { text: 'nodejs', link: '/view/backEnd/nodejs/' },
          { text: 'linux', link: '/view/backEnd/linux/' },
          { text: 'mysql', link: '/view/backEnd/mysql/' },
          { text: 'jenkins', link: '/view/backEnd/jenkins/' },
          { text: 'nginx', link: '/view/backEnd/nginx/' },
          { text: 'tomcat', link: '/view/backEnd/tomcat/' },
          { text: 'java基础', link: '/view/backEnd/java/basic/' },
        ]
      },
      { text: '问题', link: '/view/issues/' },
      { text: '工具',
        items: [
          { text: 'GIT', link: '/view/tools/git/' },
        ],
      },
      { text: '其它', link: '/view/other/' },
    ],
  },
  plugins: {
    "vuepress-plugin-auto-sidebar": {},
    '@vuepress/back-to-top': true,
    '@vuepress/plugin-active-header-links': true,
    '@vuepress/last-updated': {},
    '@vuepress/plugin-medium-zoom': true,
  }
}

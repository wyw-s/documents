
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
          { text: 'HTML', link: '/views/frontEnd/html/' },
          { text: 'CSS', link: '/views/frontEnd/css/' },
          { text: 'javaScript', link: '/views/frontEnd/javascript/' },
          { text: 'AJAX', link: '/views/frontEnd/ajax/' },
          { text: 'jquery', link: '/views/frontEnd/jquery/' },
          { text: 'VUE', link: '/views/frontEnd/vue/' },
          { text: 'react', link: '/views/frontEnd/react/' },
          { text: 'webpack', link: '/views/frontEnd/webpack/' },
          { text: 'npm', link: '/views/frontEnd/npm/' },
        ]
      },
      {
        text: '后端',
        items: [
          { text: 'nodejs', link: '/views/backEnd/nodejs/' },
          { text: 'linux', link: '/views/backEnd/linux/' },
          { text: 'mysql', link: '/views/backEnd/mysql/' },
          { text: 'jenkins', link: '/views/backEnd/jenkins/' },
          { text: 'nginx', link: '/views/backEnd/nginx/' },
          { text: 'tomcat', link: '/views/backEnd/tomcat/' },
          { text: 'java基础', link: '/views/backEnd/java/basic/' },
        ]
      },
      { text: '问题', link: '/views/issues/' },
      { text: '工具',
        items: [
          { text: 'GIT', link: '/views/tools/git/' },
        ],
      },
      { text: '其它', link: '/views/other/' },
    ],
  },
  plugins: [
    "vuepress-plugin-copy-images",
    "vuepress-plugin-auto-sidebar",
    '@vuepress/back-to-top',
    '@vuepress/plugin-active-header-links',
    '@vuepress/last-updated',
    '@vuepress/plugin-medium-zoom',
  ],
}

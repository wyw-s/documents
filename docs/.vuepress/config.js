const {config} = require('vuepress-theme-hope')

module.exports = config({
  base: '/documents/',
  title: 'Mr. Almost',
  description: 'Smoking the same cigarettes, tapping the same computers, writing the same code  ',
  dest: './dist',
  locales: {
    "/": { lang: "zh-CN" },
  },
  themeConfig: {
    logo: '/logo.jpg',
    hostname: 'http://wangyawei.top',
    author: 'Mr. Almost',
    repo: false,
    breadcrumb: false,
    darkmode: 'auto-switch',
    algoliaType: "full",
    nav: [
      {text: '介绍', link: '/guide/'},
      {
        text: '前端',
        items: [
          {text: 'HTML', link: '/views/frontEnd/html/'},
          {text: 'CSS', link: '/views/frontEnd/css/'},
          {text: 'javaScript', link: '/views/frontEnd/javascript/'},
          {text: 'AJAX', link: '/views/frontEnd/ajax/'},
          {text: 'jquery', link: '/views/frontEnd/jquery/'},
          {text: 'VUE', link: '/views/frontEnd/vue/'},
          {text: 'react', link: '/views/frontEnd/react/'},
          {text: 'webpack', link: '/views/frontEnd/webpack/'}
        ]
      },
      {
        text: '后端',
        items: [
          {
            text: '开发指南',
            items: [
              {text: 'nodejs', link: '/views/backEnd/nodejs/'},
              {text: 'linux', link: '/views/backEnd/linux/'},
              {text: 'mysql', link: '/views/backEnd/mysql/'},
              {text: 'jenkins', link: '/views/backEnd/jenkins/'},
              {text: 'nginx', link: '/views/backEnd/nginx/'},
              {text: 'tomcat', link: '/views/backEnd/tomcat/'},
              {text: 'docker', link: '/views/backEnd/docker/'},
              {text: 'java', link: '/views/backEnd/java/basic/'}
            ]
          },
          {
            text: '框架',
            items: [
              {text: 'express', link: '/views/backEnd/express/'},
              {text: 'koa', link: '/views/backEnd/koa/'}
            ]
          },
        ]
      },
      {
        text: '工具',
        items: [
          {text: 'GIT', link: '/views/tools/git/'},
          {text: 'npm', link: '/views/frontEnd/npm/'}
        ]
      },
      {text: '问题', link: '/views/issues/'},
      {text: '其它', link: '/views/other/'}
    ],
    comment: {
      type: "waline",
      visitor: true,
      serverURL: "https://my-document-e7l8i27lx-wyw-s.vercel.app",
    },
    footer: {
      display: true,
      copyrightText: 'MIT LICENSE',
      content: '<a href="https://beian.miit.gov.cn/" target="_blank">浙ICP备20028697号-2</a>'
    },
    git: {
      timezone: 'Asia/Shanghai',
      contributor: false
    },
    pwa: {
      favicon: '/favicon.ico',
      cachePic: true,
    },
    algolia: {
      apiKey: "25626fae796133dc1e734c6bcaaeac3c",
      indexName: "docsearch",
    },
  },
  plugins: [
    'vuepress-plugin-auto-sidebar',
  ]
})

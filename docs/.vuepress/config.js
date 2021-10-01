const {config} = require('vuepress-theme-hope')

module.exports = config({
  title: 'Mr. Almost',
  description: 'Smoking the same cigarettes, tapping the same computers, writing the same code  ',
  dest: './dist',
  locales: {
    "/": { lang: "zh-CN" },
  },
  themeConfig: {
    logo: '/img/logo.jpg',
    hostname: 'https://wangyawei.top',
    author: 'Mr. Almost',
    repo: false,
    blog: {
      sidebarDisplay: "mobile",
      links: {
        Github: 'https://github.com/wyw-s/documents'
      },
    },
    themeColor: false,
    breadcrumb: false,
    darkmode: 'disable',
    // algoliaType: "full",
    nav: [
      {text: '首页', link: '/'},
      {text: '介绍', link: '/introduce/'},
      {
        text: '设计模式',
        link: '/views/designMode/',
      },
      {
        text: '面试题',
        link: '/views/interviewQuestion/',
      },
      {
        text: '前端',
        items: [
          {text: 'HTML', link: '/views/frontEnd/html/'},
          {text: 'CSS', link: '/views/frontEnd/css/'},
          {text: 'JAVASCRIPT', link: '/views/frontEnd/javascript/'},
          {text: 'AJAX', link: '/views/frontEnd/ajax/'},
          {text: 'JQUERY', link: '/views/frontEnd/jquery/'},
          {text: 'VUE', link: '/views/frontEnd/vue/'},
          {text: 'REACT', link: '/views/frontEnd/react/'},
          {text: 'WEBPACK', link: '/views/frontEnd/webpack/'}
        ]
      },
      {
        text: '后端',
        items: [
          {
            text: '开发指南',
            items: [
              {text: 'NODEJS', link: '/views/backEnd/nodejs/'},
              {text: 'LINUX', link: '/views/backEnd/linux/'},
              {text: 'MYSQL', link: '/views/backEnd/mysql/'},
              {text: 'JENKINS', link: '/views/backEnd/jenkins/'},
              {text: 'NGINX', link: '/views/backEnd/nginx/'},
              {text: 'TOMCAT', link: '/views/backEnd/tomcat/'},
              {text: 'DOCKER', link: '/views/backEnd/docker/'},
              {text: 'JAVA', link: '/views/backEnd/java/basic/'}
            ]
          },
          {
            text: '框架',
            items: [
              {text: 'EXPRESS', link: '/views/backEnd/express/'},
              {text: 'KOA', link: '/views/backEnd/koa/'}
            ]
          },
        ]
      },
      {
        text: '工具',
        items: [
          {text: 'GIT', link: '/views/tools/git/'},
          {text: 'NPM', link: '/views/frontEnd/npm/'}
        ]
      },
      {text: '问题', link: '/views/issues/'},
      {text: '其它', link: '/views/other/'}
    ],
    // comment: {
    //   type: "waline",
    //   visitor: true,
    //   serverURL: "https://my-document-e7l8i27lx-wyw-s.vercel.app",
    // },
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
      favicon: "/favicon.ico",
      cacheHTML: false,
      cachePic: true,
      showInstall: true,
      manifest: {
        icons: [
          {
            src: "/favicon.ico",
            sizes: "200x200"
          }
        ]
      }
    },
    // algolia: {
    //   apiKey: "25626fae796133dc1e734c6bcaaeac3c",
    //   indexName: "docsearch",
    // },
  },
  plugins: [
    'vuepress-plugin-auto-sidebar',
  ]
})

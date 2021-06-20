const {config} = require('vuepress-theme-hope')

module.exports = config({
  title: '棉花糖',
  description: '不要活得太累，不要忙的太疲惫；想吃了不要嫌贵，想穿了不要说浪费',
  dest: './dist',
  locales: {
    "/": { lang: "zh-CN" },
  },
  themeConfig: {
    logo: '/logo.jpeg',
    hostname: 'http://47.114.139.71:8095',
    author: '棉花糖',
    repo: false,
    breadcrumb: false,
    darkmode: 'auto-switch',
    mdEnhance: {
      align: true,
      demo: true,
      flowchart: true,
      footnote: true,
      presentation: true,
      sub: true,
      sup: true,
      tex: true,
    },

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
          {text: 'webpack', link: '/views/frontEnd/webpack/'},
          {text: 'npm', link: '/views/frontEnd/npm/'}
        ]
      },
      {
        text: '后端',
        items: [
          {text: 'nodejs', link: '/views/backEnd/nodejs/'},
          {text: 'linux', link: '/views/backEnd/linux/'},
          {text: 'mysql', link: '/views/backEnd/mysql/'},
          {text: 'jenkins', link: '/views/backEnd/jenkins/'},
          {text: 'nginx', link: '/views/backEnd/nginx/'},
          {text: 'tomcat', link: '/views/backEnd/tomcat/'},
          {text: 'docker', link: '/views/backEnd/docker/'},
          {text: 'java基础', link: '/views/backEnd/java/basic/'}
        ]
      },
      {
        text: '工具',
        items: [
          {text: 'GIT', link: '/views/tools/git/'}
        ]
      },
      {text: '问题', link: '/views/issues/'},
      {text: '其它', link: '/views/other/'}
    ],

    footer: {
      display: true,
      content: ''
    },
    copyright: true,
    git: {
      timezone: 'Asia/Shanghai',
      contributor: false
    },
    mdEnhance: {
      enableAll: true,
      presentation: {
        plugins: [
          'highlight',
          'math',
          'search',
          'notes',
          'zoom',
          'anything',
          'audio',
          'chalkboard'
        ]
      }
    },

    pwa: {
      favicon: '/favicon.ico',
      cachePic: true,
    }
  },
  plugins: [
    'vuepress-plugin-auto-sidebar',
  ]
})

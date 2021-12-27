---
title: react脚手架
category: REACT
date: 2021-12-12
---

## 脚手架的意义

1. 脚手架是开发现代Web 应用的必备。
2. 充分利用`Webpack`、`Babel`、`ESLint `等工具辅助项目开发。 
3. 零配置，无需手动配置繁琐的工具即可使用。 
4. 关注业务，而不是工具配置。

## 项目初始化

1. 创建项⽬： `npx create-react-app my-app `

2. 打开项⽬： `cd my-app `

3. 启动项⽬： `npm start`

4. 暴露配置项： `npm run eject`

5. 目录介绍：

   ```bash
   my-app
   ├── package.json
   ├── public	# 公共资源
   │   ├── favicon.ico
   │   ├── index.html	# 首页(必须有)
   │   ├── logo192.png
   │   ├── logo512.png
   │   ├── manifest.json	#PWA应用的元数据
   │   └── robots.txt
   ├── README.md
   ├── src	# 项目源码，写项目功能代码
   │   ├── App.css
   │   ├── App.js	# 项目的根组件
   │   ├── App.test.js	# App组件的测试文件
   │   ├── index.css
   │   ├── index.js	# 项目入口文件(必须有)
   │   ├── logo.svg
   │   ├── reportWebVitals.js
   │   └── setupTests.js
   └── yarn.lock
   ```

>  `npx`命令介绍
>
>  - `npm v5.2.0` 引入的一条命令 。
>  - 目的：提升包内提供的命令行工具的使用体验 。
>  - 原来：先安装脚手架包，再使用这个包中提供的命令 。
>  - 现在：无需安装脚手架包，就可以直接使用这个包提供的命令 。

## 使用`React`

1. 导入`react `和`react-dom`两个包。 

   ```js
   import React from 'react' 
   import ReactDOM from 'react-dom' 
   ```

2. 调用`React.createElement()`方法创建 react 元素。

   1. **不建议使用代码繁琐**；
   2. 不直观，无法一眼看出所描述的结构。 
   3. 不优雅，用户体验不爽。 
   4. 使用`JSX`替代。

3. 调用`ReactDOM.render()`方法渲染 react 元素到页面中。
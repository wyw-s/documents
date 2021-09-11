---
title: 项目初始化
category: vue
autoGroup-15: 服务器端渲染
date: 2021-09-08 20:25:23
---

> ssr实战开发

## 项目初始化

- 使用vue-cli创建项目

  ```bash
  vue create ssr
  ```

- 安装依赖

  ```bash
  npm install vue vue-server-renderer express -D
  ```

  > 确保vue、vue-server-renderer、vue-template-compiler版本一致  我的版本`2.6.11`

- 新建node脚本文件，并添加ssr；`./bin/server.js`

  ```javascript
  // 导入express作为渲染服务器
  const express = require("express");
  
  // 导入Vue用于声明待渲染实例
  const Vue = require("vue");
  
  // 导入createRenderer用于获取渲染器
  const { createRenderer } = require("vue-server-renderer");
  
  // 创建express实例
  const app = express();
  
  // 获取渲染器
  const renderer = createRenderer();
  
  // 待渲染vue实例
  const vm = new Vue({
      template: `<h1>{{name}}</h1>`,
      data: {
          name: "SSR"
      },
  });
  
  app.get("*", async function (req, res) {
      try {
          // 若未传递回调函数，则返回Promise
          // renderToString可以将vue实例转换为html字符串
          const html = await renderer.renderToString(vm);
          res.send(html);
      } catch (error) {
          res.status(500).send("Internal Server Error");
      }
  });
  
  // 启动node服务
  app.listen(3000, () => {
      console.log("启动成功");
  });
  ```

  > 使用Node启动服务，`node ./server.js` 浏览器访问：`http://localhost:3000`显示SSR。

::: tip

上面的代码只是简单的完成了把vue实例转换为html的过程，但是还没有路由，没有交互，不能添加事件等；

:::

项目目录

```bash
ssr
├── babel.config.js
├── bin
│   └── server.js
├── package.json
├── public
│   ├── favicon.ico
│   └── index.html
├── README.md
├── src
│   ├── App.vue
│   ├── assets
│   │   └── logo.png
│   ├── components
│   │   └── HelloWorld.vue
│   └── main.js
└── yarn.lock
```


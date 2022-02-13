---
title: 处理favicon.icon
category: vue
autoGroup-15: 服务器端渲染
date: 2021-09-09 07:25:23
---

> 通过前面的代码你可以看出，每次我们刷新页面，浏览器都会额外的发送favicon请求，显然对于favicon这个请求我们不需要每次都对它做处理；

- 安装依赖

  ```bash
  # 可以用于请求并指定网页的favicon图标
  npm install serve-favicon -S
  ```

- 使用：`/bin/server.js`添加如下代码

  ```javascript
  const favicon = require('serve-favicon');
  const path = require('path');
  
  // 创建express实例
  const app = express();
  // 处理 favicon
  app.use(favicon(path.join(__dirname, '../public', 'favicon.ico')))
  ...省略
  // 启动node服务
  app.listen(3000, () => {
      console.log("启动成功");
  });
  ```

  > 添加上面的代码后，当请求到来时会先处理favicon,并返回给前端。


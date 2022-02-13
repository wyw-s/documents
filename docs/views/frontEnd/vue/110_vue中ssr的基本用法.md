---
title: vue中ssr的基本用法
category: vue
autoGroup-1: 基础
date: 2021-09-08 20:25:23
---

> 使用vue和nodejs实现vue的ssr渲染；

## 初始化

1. 新建文件夹

   ```bash
   mkdir ssr
   ```

2. npm初始化

   ```bash
   cd ./ssr
   npm init -y
   ```

3. 安装依赖

   ```ba
   npm install express --save
   ```

4. 启动服务

   ```javascript
   // app.js
   const express = require('express');
   
   const app = express();
   
   app.get('/', (req, res) => {
       res.send('<h1>晚上好</h1>')
   })
   
   app.listen(3000, (err) => {
       if (!err) {
           console.log('服务启动成功！端口3000');
       }
   })
   ```

## 渲染Vue实例

> 前面的例子只是简单的启动了一个node服务器，下面我们将创建一个vue实例，并渲染vue组件；

**安装依赖**

```bash
npm install vue vue-server-renderer --save
```

::: tip

- 推荐使用 Node.js 版本 6+。
- `vue-server-renderer` 和 `vue` 必须匹配版本。
- `vue-server-renderer` 依赖一些 Node.js 原生模块，因此只能在 Node.js 中使用。

:::

我们对`app.js`文件进行修改：

```javascript
const express = require('express');
const Vue = require('vue')
const renderer = require('vue-server-renderer').createRenderer()

const app = express();

app.get('/', (req, res) => {
    // 创建vue实例
    const app = new Vue({
        template: `<h1>{{ msg }}</h1>`,
        data: {
            msg: 'Hello World'
        }
    })
    // 将 Vue 实例渲染为 HTML,并发送给前端
    renderer.renderToString(app).then(html => {
        res.send(html)
    })
})

app.listen(3000, (err) => {
    if (!err) {
        console.log('服务启动成功！端口3000');
    }
})
```

> 重启服务器，浏览器访问：`http://localhost:3000`。至此一个简单的ssr就完成了；

::: tip

现在的页面内容只有死的内容(没有交互没有点击事件)，如果要使程序可以交互还需要激活；

:::


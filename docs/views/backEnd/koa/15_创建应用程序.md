---
title: 创建应用程序
category: KOA
time: 2021-07-26 17:36:23
---

## 新建目录

> 新建应用目录，然后进入该目录并将其作为工作目录

```sh
mkdir koa-example
cd koa-example
```

通过`npm`创建`package.json`

```bash
npm init -y
```

安装`koa`依赖包`"koa": "^2.13.1",`

```bash
npm install koa -save
```

## 创建应用程序

```javascript
const koa = require('koa');
const app = new koa()

app.use((ctx) => {
    ctx.body = '晚上好';
})

app.listen(3000, 'localhost', (err) => {
    if (!err) {
        console.log('lister on 300');
    }
})
```

> 到此一个简单的http服务就启动了，浏览器访问：http://localhost:3000，会显示 `晚上好`；

::: tip

上面的`app.listen()`只是一个语法糖；它的实质是下面：

```javascript
const http = require('http');
const Koa = require('koa');
const app = new Koa();
http.createServer(app.callback()).listen(3000);
```

`app.callback()`返回适用于 `http.createServer()` 方法的回调函数来处理请求。

:::


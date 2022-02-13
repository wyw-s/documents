---
title: 错误处理
category: KOA
time: 2021-08-01 17:36:23
---

> Koa有着简单且优雅的中间件机制，因此编写错误处理中间件变得很简单。和Express错误处理中间件需要放置在应用末尾不同，Koa采用了洋葱圈模型，所以Koa的错误处理中间件需要在应用的开始处挂载，这样才能将整个请求-响应周期涵盖，捕获其发生的错误。

## 错误处理

```javascript
const Koa = require('koa');
const app = new Koa();

app.use(async (ctx, next) => {
    try {
        await next();
    } catch (err) {
        ctx.status = err.status || 500;
        ctx.body = `System Error：${err.message}`;
    }
})

app.use((ctx) => {
    ctx.throw(403, 'Forbidden')
})

app.listen(3000);
```

访问：http://localhost:3000 ，浏览器显示：'System Error：Forbidden'。

**调换一下位置呢：**

```javascript
const Koa = require('koa');
const app = new Koa();

app.use((ctx) => {
    ctx.throw(403, 'Forbidden')
})

app.use(async (ctx, next) => {
    try {
        await next();
    } catch (err) {
        ctx.status = err.status || 500;
        ctx.body = `System Error：${err.message}`;
    }
})

app.use((ctx) => {
    ctx.throw(403, 'Forbidden')
})

app.listen(3000);
```

访问：http://localhost:3000 ，浏览器显示：'Forbidden'。

> 也就是说，错误处理函数放在后面不生效，最终会采用koa自带的错误处理机制；

## 多个错误处理

> 在生产环境的应用中，发生错误除了要显示错误信息给客户端之外，还需要上报错误、记录日志等操作，因此为了项目的可维护性，一般需要将错误处理中间件进行拆分，拆分为错误响应中间件、日志记录中间件等，每个中间件只负责一项工作。

```javascript
const Koa = require('koa');
const app = new Koa();

// 错误处理中间件
app.use(async (ctx, next) => {
    try {
        await next();
    } catch (err) {
        ctx.status = err.status || 500;
        ctx.body = `System Error：${err.message}`;
    }
})

// 错误日志记录中间件
app.use(async (ctx, next) => {
    try {
        await next();
    } catch (err) {
        console.log(`${ctx.method} ${ctx.path} Error: ${err.message}`);
        throw err; // 继续抛出错误，这样最外层的中间件才能捕获到该错误；
    }
})

app.use((ctx) => {
    ctx.throw(403, 'Forbidden')
})

app.listen(3000);
```


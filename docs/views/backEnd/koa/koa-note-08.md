---
title: 路由系统
category: koa
time: 2021-08-01 17:36:23
---

> 路由是一个web应用的核心功能，然而，koa为了精简核心未包含路由功能，因此我们需要使用koa-router模块来实现路由功能。

## 安装

```bash
# "koa-router": "^10.0.0",
npm install koa-router -save
```

## 使用

```javascript
const Koa = require('koa');
const Router = require('koa-router');
const app = new Koa();
const router = new Router();

router.get('/', (ctx) => {
    ctx.body = 'Hello world'
})

router.get('/user', (ctx) => {
    ctx.body = 'User'
})

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000);
```

访问：http://localhost:3000 ，浏览器显示 Hello world

## 路由对象

> 路由需要实例化之后才能进行配置和挂载，路由的构造器函数签名如下：

```javascript
function Router([options])
```

- options选项，一般使用的是prefix。
  - profix：路由前缀。

实例化后的路由和express类似，路由定义的方法如下：

```javascript
router[method](path, handler);
```

- method：Http请求方法，支持get/post/put/delete/head/options；
- path：路由路径。
- handler：路由处理函数支持多个。

## 路由路径

> koa-router的路由路径支持字符串和字符串模式。

1. 字符串路径：

   ```javascript
   router.get('/', (ctx) => {
       ctx.body = 'Home';
   })
   
   router.get('/about', (ctx) => {
       ctx.body = '关于';
   })
   
   // 匹配文件
   router.get('/random.text', (ctx) => {
       ctx.body = 'random.text';
   })
   ```

2. 字符串模式:

   ```javascript
   // 匹配到 /users/xxx
   router.get('/users/:userId', (ctx) => {
       ctx.body = {
           userId: ctx.params.userId;
       };
   })
   ```

   

## 路由函数

> koa-router的路由函数和Koa默认的路由函数是相似的，也支持多个路由函数处理同一个请求。但是ctx.params只有koa-router的路由函数才可以访问。

```javascript
router.get('/', async (ctx, next) => {
    ctx.state.data = { logged: true };
    await next();
}, (ctx) => {
    ctx.body = ctx.state.data;
})
```

## 路由中间件

> koa-router也支持多个路由函数，因此可以在指定路由或者整个路由对象上使用中间件。

```javascript
const Koa = require('koa');
const Router = require('koa-router');
const app = new Koa();
const router = new Router();

router.use(async (ctx, next) => {
    console.log(`${ctx.method} ${ctx.path} ${ctx.headers['user-agent']}`);
    await next();
})

router.get('/', (ctx) => {
    ctx.body = 'Hello world'
})

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000);
```

## 路由前缀

> 路由前缀可以将同一个路由模块的路由聚合在一起，提供一个统一的URL前缀共客户端访问；

```javascript
const Koa = require('koa');
const Router = require('koa-router');
const app = new Koa();
const router = new Router({ prefix: '/user' });

router.get('/', (ctx) => {
    ctx.body = 'Hello world'
})

router.get('/list', (ctx) => {
    ctx.body = '/user/list'
})

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000);
```

> 浏览器访问：http://localhost:3000/user和http://localhost:3000/user/list

## 路由模块化

> 为了保持项目的可维护性，建议将路由逻辑拆分到其他模块中，否则不利于代码维护；

- 独立文件中实现路由逻辑；
- 入口文件中挂载路由；

```javascript
// router/site.js
const Router = require('koa-router');
const router = new Router();

router.get('/', (ctx) => {
    ctx.body = '首页';
})

router.get('/about', (ctx) => {
    ctx.body = '关于页';
})

module.exports = router;
```

```javascript
// app.js
const Koa = require('koa');
const Router = require('koa-router');
const app = new Koa();
const router = new Router();
const siteRouter = require('./router/site.js')

app.use(siteRouter.routes()).use(siteRouter.allowedMethods());

app.listen(3000);
```

[官方文档](https://github.com/koajs/router/blob/master/API.md)


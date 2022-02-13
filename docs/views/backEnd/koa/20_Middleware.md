---
title: Middleware
category: KOA
time: 2021-08-01 16:38:23
---

> Koa是一个中间件框架，中间件可以采用两种不同的功能:  

- async function
- common function

## `async function`

> koa中间件可以使用`async`函数，`next`的调用会返回一个`promise`函数;

```javascript
const koa = require('koa');
const app = new koa()

app.use(async (ctx, next) => {
    console.log('111');
    const start = Date.now();

    await next();
    const ms = Date.now() - start;
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

app.use((ctx) => {
    console.log('222');
});

app.listen(3000, 'localhost', (err) => {
    if (!err) {
        console.log('lister on 300');
    }
})
```

浏览器访问：http://localhost:3000/，控制台会输出以下信息：

```ba
111
222
GET / - 0ms
```

> 通过上面打印的结果我们可以得出，第三行的打印是在`await next()`之后，也就是下一个中间件调用后打印的。

## common function

> 中间件通常有两个参数(ctx，next)，ctx是一个请求的上下文，next调用来执行下游中间件的函数。 它返回一个带有then函数的Promise，用于在完成后运行代码。  

```javascript
const koa = require('koa');
const app = new koa()

app.use((ctx, next) => {
    const start = Date.now();
    return next().then(() => {
        const ms = Date.now() - start;
        console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
    });
});

app.use((ctx, next) => {
    console.log('222');
});

app.listen(3000, 'localhost', (err) => {
    if (!err) {
        console.log('lister on 300');
    }
})
```

浏览器访问：http://localhost:3000/，控制台会输出以下信息：

```bash
222
GET / - 2ms
```

## example

> 使用 async 功能，我们可以实现 “真实” 的中间件。通过一系列功能直接传递控制，Koa 调用“下游”，然后控制流回“上游”。下面以 “Hello World” 的响应作为示例：

```javascript
const Koa = require('koa');
const app = new Koa();

// logger

app.use(async (ctx, next) => {
    console.log(1);
    await next();
    console.log(2);
    const rt = ctx.response.get('X-Response-Time');
    console.log(`${ctx.method} ${ctx.url} - ${rt}`);
});

// x-response-time

app.use(async (ctx, next) => {
    console.log(3);
    const start = Date.now();
    await next();
    console.log(4);
    const ms = Date.now() - start;
    ctx.set('X-Response-Time', `${ms}ms`);
});

// response

app.use(async ctx => {
    console.log(5);
    ctx.body = 'Hello World';
});

app.listen(3000);
```

浏览器访问：http://localhost:3000/，控制台会输出以下信息：

```bash
1
3
5
4
2
GET / - 7ms
```

> 当请求开始时首先请求流通过 `x-response-time` 和 `logging` 中间件，然后继续移交控制给 `response` 中间件。当一个中间件调用 `next()`时，则该函数暂停并将控制传递给定义的下一个中间件。当在下游没有更多的中间件执行后，堆栈将展开并且每个中间件恢复执行其上游行为。

::: tip

`app.use(function)`将给定的中间件方法添加到此应用程序。`app.use()` 返回 `this`, 因此可以链式表达:

```javascript
app.use(someMiddleware)
app.use(someOtherMiddleware)
app.listen(3000)

// 等同于

app.use(someMiddleware)
  .use(someOtherMiddleware)
  .listen(3000)
```

:::

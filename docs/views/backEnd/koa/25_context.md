---
title: context
category: KOA
time: 2021-07-28 17:36:23
---

> context在koa应用中又称为”上下文“，该对象包含了koa请求对象、koa响应对象和应用实例，context可以理解一个容器，该容器挂载了本次请求的请求对象和响应对象等信息，中间件通过context对象来获取请求信息，处理之后返回响应。

**context实例有以下常用的几个属性或方法(*号所标记是常用属性或方法)：**

- ctx.request：koa的请求对象，一般不直接使用，通过别名引用来访问。

- ctx.response：koa的响应对象，一般不直接使用，通过别名引用来访问。

- *ctx.state：自定义数据储存，比如中间需要往请求中挂载变量就可以存放在ctx.state中，后续中间件可以读取。

- *ctx.throw()：抛出HTTP异常。

- ctx.headers：请求报头，ctx.request.headers的别名。

- ctx.method：请求方法，ctx.request.method的别名。

- ctx.url：请求链接，ctx.request.url的别名。

- ctx.path：请求路径，ctx.request.path的别名。

- *ctx.query：解析后的GET参数对象，ctx.request.query的别名。

- ctx.host：当前域名，ctx.request.host的别名。

- *ctx.ip：客户端IP，ctx.request.ip的别名。

- ctx.ips：反向代理环境下的客户端IP列表，ctx.request.ips的别名。

- ctx.get()：读取请求报头，ctx.request.get的别名。

- *ctx.body：响应内容，支持字符串、对象、Buffer，ctx.response.body的别名。

- *ctx.status：响应状态码，ctx.response.status的别名。

- ctx.type：响应体类型，ctx.response.type的别名。

- *ctx.redirect()：重定向，ctx.response.redirect的别名。

- *ctx.set()：设置响应报头，ctx.response.set的别名。

以下是一个显示当前请求信息并添加自定义响应报头的示例：

```javascript
const Koa = require('koa');
const app = new Koa();

app.use(async (ctx) => {
    ctx.set('x-version', '1.0.0');
    ctx.body = JSON.stringify({
        method: ctx.method,
        path: ctx.path,
        url: ctx.url,
        query: ctx.query,
        Headers: ctx.headers,
        ip: ctx.ip
    }, null, 4)
})

app.listen(3000);
```

浏览器访问：http://localhost:3000?a=2&b=3，响应如下：

```javascript
{
    "method": "GET",
    "path": "/",
    "url": "/?a=1&b=3",
    "query": {
        "a": "1",
        "b": "3"
    },
    "Headers": {
        "host": "localhost:3000",
        "connection": "keep-alive",
        "cache-control": "max-age=0",
        "sec-ch-ua": "\" Not;A Brand\";v=\"99\", \"Google Chrome\";v=\"91\", \"Chromium\";v=\"91\"",
        "sec-ch-ua-mobile": "?0",
        "upgrade-insecure-requests": "1",
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.164 Safari/537.36",
        "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
        "sec-fetch-site": "none",
        "sec-fetch-mode": "navigate",
        "sec-fetch-user": "?1",
        "sec-fetch-dest": "document",
        "accept-encoding": "gzip, deflate, br",
        "accept-language": "zh-CN,zh;q=0.9"
    },
    "ip": "::1"
}
```


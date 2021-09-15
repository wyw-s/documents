---
title: 路由控制
category: EXPRESS
time: 2021-07-13 8:31:48
---

> 这里主要介绍下，路由相关的内容，路由工作原理及匹配规则；

## 工作原理  

> 当通过浏览器访问 app.js 建立的服务器时，会看到一个简单的页面，实际上浏览器会向服务器发送以下请求：  

```javascript
GET / HTTP/1.1
Host: localhost:3000
Connection: keep-alive
Cache-Control: max-age=0
sec-ch-ua: " Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"
sec-ch-ua-mobile: ?0
Upgrade-Insecure-Requests: 1
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9
Sec-Fetch-Site: none
Sec-Fetch-Mode: navigate
Sec-Fetch-User: ?1
Sec-Fetch-Dest: document
Accept-Encoding: gzip, deflate, br
Accept-Language: zh-CN,zh;q=0.9
If-None-Match: W/"cf-sMq3uu/Hzh7Qc54TveG8DxiBA2U"
```

> 其中第一行是请求的方法、路径和 HTTP 协议版本，后面若干行是 HTTP 请求头。 app 会解析请求的路径，调用相应的逻辑。 app.js 中有一行内容是 app.use('/', indexRouter)，它的作用是规定路径为“/”的请求由 indexRouter 函数处理。 indexRouter会再次匹配get和/最后通过 res.render('index', { title: 'Express' }) 调用视图模板 index，传递 title变量。最终视图模板生成 HTML 页面，返回给浏览器，返回的内容是：  

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Express</title>
    <link rel='stylesheet' href='/stylesheets/style.css' />
  </head>
  <body>
    <h1>Express</h1>
    <p>Welcome to Express</p>
  </body>
</html>
```

> 浏览器在接收到内容以后，经过分析发现要获取 /stylesheets/style.css，因此会再次向服务器发起请求。 app.js 中并没有一个路由规则指派到 /stylesheets/style.css，但 app 通过app.use(express.static(path.join(__dirname, 'public'))); 配置了静态文件服务器，因此/stylesheets/style.css 会定向到 app.js 所在目录的子目录中的文件 public/stylesheets/style.css，向客户端返回以下信息：  

```stylus
body {
  padding: 50px;
  font: 14px "Lucida Grande", Helvetica, Arial, sans-serif;
}

a {
  color: #00B7FF;
}
```

## 创建路由规则

> 当我们在浏览器中访问譬如 http://localhost:3000/abc 这样不存在的页面时，服务器会在响应头中返回 404 Not Found 错误  

这是因为 /abc 是一个不存在的路由规则，而且它也不是一个 public 目录下的文件，所以Express返回了404 Not Found的错误。  

**创建一个地址为 /hello 的页面**

- 在routes文件下新建hello.js文件，内容如下：

  ```javascript
  var express = require('express');
  var router = express.Router();
  
  router.get('/', function(req, res, next) {
      res.send('The time is ' + new Date().toString());
  });
  
  module.exports = router;
  ```

- 修改app.js文件并添加以下代码：

  ```javascript
  var helloRouter = require('./routes/hello');
  app.use('/hello', helloRouter);
  ```

- 重启服务器，并打开浏览器访问；

  ```bash
  $ curl localhost:3000/hello
  The time is Mon Jul 12 2021 23:33:18 GMT+0800 (GMT+08:00)
  ```

  > 服务器在开始监听之前，设置好了所有的路由规则，当请求到达时直接分配到响应函数。  

## 路径匹配  

> express不仅可以为固定的路径设置路由规则， Express 还支持更高级的路径匹配模式。  如我们想要展示一个用户的个人页面，路径为 /[username]，可以用下面的方法定义路由规则：  

```javascript
var express = require('express');
var router = express.Router();

router.get('/:username', function(req, res, next) {
    res.write('<h1>The time is ' + new Date().toString() + '</h1>');
    res.end('<h2>user :' + req.params.username + '</h2>');
});

module.exports = router;
```

修改以后重启服务，访问 http://localhost:3000/hello/xiaoming，  

```bash
$ curl localhost:3000/hello/xiaoming
<h1>The time is Tue Jul 13 2021 07:46:10 GMT+0800 (GMT+08:00)</h1><h2>user :xiaoming</h2>
```

> 路径规则 /:username 会被自动编译为正则表达式。路径参数可以在响应函数中通过 req.params 的属性访问，当然你也可以直接写js表达式。例：`app.get(/\/([^\/]+)?/,callback)`。这样的好处在于可以定义更加复杂的路径规则，而不同之处是匹配的参数是匿名的，因此需要通过 req.params[0]、 req.params[1] 这样的形式访问。  

## REST 风格的路由规则  

> REST 的意思是 表征状态转移（Representational State Transfer），它是一种基于 HTTP 协议的网络应用的接口风格，充分利用 HTTP 的方法实现统一风格接口的服务。  

**HTTP 协议定义了以下8种标准的方法:**

- GET：请求获取指定资源。
- HEAD：请求指定资源的响应头。
- POST：向指定资源提交数据。
- PUT：请求服务器存储一个资源。
- DELETE：请求服务器删除指定资源。
- TRACE：回显服务器收到的请求，主要用于测试或诊断。
- CONNECT： HTTP/1.1 协议中预留给能够将连接改为管道方式的代理服务器。
- OPTIONS：返回服务器支持的HTTP请求方法。  

其中我们经常用到的是 GET、 POST、 PUT 和 DELETE 方法。根据 REST 设计模式，这4种方法通常分别用于实现以下功能：

- GET：获取
- POST：新增
- PUT：更新
- DELETE：删除  

这是因为这4种方法有不同的特点，按照定义，它们的特点如下：

| 请求方式 | 安全 | 幂等 |
| -------- | ---- | ---- |
| GET      | 是   | 是   |
| POST     | 否   | 否   |
| PUT      | 否   | 是   |
| DELETE   | 否   | 是   |

> 所谓安全是指没有副作用，即请求不会对资源产生变动，连续访问多次所获得的结果不受访问者的影响。而幂等指的是重复请求多次与一次请求的效果是一样的，比如获取和更新操作是幂等的，这与新增不同。删除也是幂等的，即重复删除一个资源，和删除一次是一样的。  

Express 对每种 HTTP 请求方法都设计了不同的路由绑定函数，向这个路径发起其他方式的请求不会被响应。  详细内容请[查阅官方文档](https://www.expressjs.com.cn/4x/api.html)

## 控制权转移  

> Express 支持同一路径绑定多个路由响应函数

```javascript
app.all('/article', function (req, res) {
  res.send('all methods captured');
  console.log('all methods captured')
});
app.get('/article', function (req, res) {
  res.send('article: ' + '123');
});
```

> 但当你访问被这两条同样的规则匹配到的路径时，会发现请求总是被前一条路由规则捕获，后面的规则会被忽略。原因是 Express 在处理路由规则时，会优先匹配先定义的路由规则，因此后面相同的规则被屏蔽。Express 提供了路由控制权转移的方法，即回调函数的第三个参数next，通过调用next()，会将路由控制权转移给后面的规则，  

```javascript
app.all('/article', function (req, res, next) {
  console.log('all methods captured')
  next()
});
app.get('/article', function (req, res) {
  res.send('article: ' + '123');
});
```

> 当访问被匹配到的路径时，会发现终端中打印了 all methods captured，而且浏览器中显示了 article: 123。这说明请求先被第一条路由规则捕获，完成 console.log 使用 next() 转移控制权，又被第二条规则捕获，向浏览器返回了信息。  


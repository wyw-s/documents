---
title: 工程结构
category: EXPRESS
time: 2021-07-12 20:32:23
---

> 这里简单说下用express生成器创建的工程结构。除了 package.json，它还生成了其他文件。

## **目录结构**

```bash
express--example
├── app.js
├── bin
│   └── www
├── package-lock.json
├── package.json
├── public
│   ├── images
│   ├── javascripts
│   └── stylesheets
│       └── style.css
├── routes
│   ├── index.js
│   └── users.js
└── views
    ├── error.ejs
    └── index.ejs
```

## bin/www

www 是项目的启动文件，内容如下：

```javascript
#!/usr/bin/env node

/**
 * Module dependencies.
 */

var app = require('../app');
var debug = require('debug')('qwer:server');
var http = require('http');

/**
 * Get port from environment and store in Express.
 */

var port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

/**
 * Create HTTP server.
 */

var server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}

```

> 以上内容主要是引入 app.js和http模块， 然后创建一个服务器并启动；

## app.js

app.js 是工程的入口，内容如下：

```javascript
// 用于处理HTTP Error
var createError = require('http-errors');
// 引入express框架
var express = require('express');
var path = require('path');
// cookie解析器
var cookieParser = require('cookie-parser');
// 请求日志中间件
var logger = require('morgan');

// 引入路由中间件
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

// 创建app应用的实例
var app = express();

// 设置视图模板文件位置
app.set('views', path.join(__dirname, 'views'));
// 设置视图模板引擎
app.set('view engine', 'ejs');

// 使用预定义的 dev 格式输出，
app.use(logger('dev'));
// parse application/json 的传入请求
app.use(express.json());
// parse application/x-www-form-urlencoded 解析文件上传
app.use(express.urlencoded({ extended: false }));
// 解析cookie，挂载到req.cookies上
app.use(cookieParser());
// 托管静态资源 html、js、css
app.use(express.static(path.join(__dirname, 'public')));

// 加载路由中间件
app.use('/', indexRouter);
app.use('/users', usersRouter);

// 捕获404并转发到错误处理程序
app.use(function(req, res, next) {
  next(createError(404));
});

// 错误处理程序
app.use(function(err, req, res, next) {
  // 设置局部，只提供开发中的错误
  // app.locals对象是一个javascript对象，它的属性就是程序本地的变量。
  // 一旦设定，app.locals的各属性值将贯穿程序的整个生命周期，与其相反的是 res.locals ，它只在这次请求的生命周期中有效。
  // 在程序中，你可以在渲染模板时使用这些本地变量.
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // 渲染错误页面
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
```

> 通过以上内容我们可以得出，express使用了很多的中间件；

## routes/index.js  

routes/index.js 是路由文件，相当于控制器，用于组织展示的内容：  

```javascript
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
```

> app.js 中通过 app.use('/', indexRouter);将“/ ”路径映射到 router 函数下。其中只有一个语句 res.render('index', { title: 'Express' })，功能是调用模板解析引擎，翻译名为 index 的模板，并传入一个对象作为参数，这个对象只有一个属性，即 title: 'Express'。  

## views/index.ejs  

> index.ejs 是模板文件，即 routes/index.js 中调用的模板，内容是：  

```html
<!DOCTYPE html>
<html>
  <head>
    <title><%= title %></title>
    <link rel='stylesheet' href='/stylesheets/style.css' />
  </head>
  <body>
    <h1><%= title %></h1>
    <p>Welcome to <%= title %></p>
  </body>
</html>
```

> 它的基础是 HTML 语言，其中包含了形如 <%= title %> 的标签，功能是显示引用的变量，即 res.render 函数第二个参数传入的对象的属性。  

## public

这个文件夹主要是用于存放静态资源的，比如：html、css、js、img等；

```javascript
// 此文件夹中的静态资源需要express来托管；即需要在app.js中引用
app.use(express.static(path.join(__dirname, 'public')));
```


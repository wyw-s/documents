---
title: 视图助手
category: express
time: 2021-07-15 08:33:10
---

> Express 提供了一种叫做视图助手的工具，它的功能是允许在视图中访问一个全局的函数或对象，不用每次调用视图解析的时候单独传入。

**视图助手有两类**

1. 静态视图助手。
2. 动态视图助手。

## 静态视图助手

> 可以是任何类型的对象，包括接受任意参数的函数，但访问到的对象必须是与用户请求无关的。

**修改`app.js`，新增如下内容：**

```javascript
app.locals.title = 'my app';
app.locals.email = '123@qq.com';
app.locals.eat = () => '鸡腿';
```

**修改`views/index.ejs`，内容如下：**

```ejs
<h1><%= title %></h1>
<p><%= email %></p>
```

**修改`routes/index.js`，内容如下：**

```javascript
res.render('index');
```

浏览器访问：http://localhost:3000/ 响应结果如下：

```html
<!DOCTYPE html>
<html>
<head>
    <title>my app</title>
    <link rel="stylesheet" type="text/css" href="/stylesheets/style.css">
</head>
<body>
    <h1>my app</h1>
    <p>123@qq.com</p>
    <p>鸡腿</p>
</body>
</html>
```

::: warning

如果你在使用`res.render('index')`时传入了`res.render('index', {title: ’express‘})`，那么静态视图设置的值会被替换。

:::

::: tip

静态视图助手在`2.x`版本和`3.x`版本的使用是不同的:

```javascript
// 2.x版本
app.helpers({
    title: function(obj) {
    	return util.inspect(obj, true);
    }
});
// 3.x版本
app.locals({
  title: config.title
});
// 4.x版本
app.locals.title = 'my app';
```

:::

## 动态视图助手

> 该视图变量、方法与请求有关，一般用来解析请求信息，如用户登录信息，请求地址等，可以访问到 req 和 res 对象。

修改`app.js`，内容如下：

```javascript
app.use((req, res, next) => {
  res.locals.req = utils.inspect(req, true);
  res.locals.res = res;
  next();
})

// 或 在路由中设置：

router.get('/', function(req, res, next) {
  res.locals.req = utils.inspect(req.headers);
  res.render('index');
});
```

修改`views/index.ejs`，内容如下：

```ejs
<h1><%= title %></h1>
<p><%= email %></p>
<p><%= eat() %></p>
<pre><%= req %></pre>
```

浏览器访问：http://localhost:3000/，响应内容呢如下：

```html
<!DOCTYPE html>
<html>
<head>
    <title>my app</title>
    <link rel="stylesheet" type="text/css" href="/stylesheets/style.css">
</head>
<body>
    <h1>my app</h1>
    <p>123@qq.com</p>
    <p>鸡腿</p>
    <pre>IncomingMessage {
      _readableState: ReadableState {
        objectMode: false,
        highWaterMark: 16384,
        buffer: BufferList { head: null, tail: null, length: 0 },
        length: 0,
        .....以下省略
    }</pre>
</body>
</html>
```

::: tip

动态视图助手在`2.x`版本的使用是不同的，3.x版本的使用和4.x相同:

```javascript
// 2.x
app.dynamicHelpers({
    headers: function(req, res) {
    	return req.headers;
    }
});
```

:::

> 视图助手的本质其实就是给所有视图注册了全局变量，因此无需每次在调用模板引擎时传递数据对象。当我们在后面使用 session 时会发现它是非常有用的。  


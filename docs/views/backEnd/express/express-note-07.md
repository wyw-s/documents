---
title: 片段视图
category: EXPRESS
time: 2021-07-14 00:10:48
---

> Express 的视图系统还支持片段视图（partials），它就是一个页面的片段，通常是重复的内容，用于迭代显示。通过它你可以将相对独立的页面块分割出去，而且可以避免显式地使用 for 循环。**但是在3.x版本及以后就移除掉了这个功能，所以这个时候你就需要替代方案**。这里我只介绍4.x版本使用的`include`，另外一中方法请移步至：[NodeJS - Express 3.0下ejs模板使用 partial展现 片段视图](https://yijiebuyi.com/blog/e503a402ffac43ca1cbaba9d4317b54d.html)

**让我们看一个例子，在 userlist.js 中新增以下内容：**

```javascript
router.get('/list', function (req, res) {
    res.render('list', {
        title: 'List',
        items: [1991, 'byvoid', 'express', 'Node.js']
    });
});
```

**在 views 目录下新建 views/list.ejs，内容是：**  

```ejs
<ul>
    <% items.forEach(function(user){ %>
        <%- include('./listitem', { listitem: user }); %>
    <% }); %>
</ul>
```

**同时新建 views/listitem.ejs，内容是：**  

```ejs
<li><%= listitem %></li>
```

**浏览器访问：http://localhost:3000/userlist/list**,浏览器会响应如下内容：

```bash
<!DOCTYPE html>
<html>
<head>
    <title>List</title>
    <link rel="stylesheet" type="text/css" href="/stylesheets/style.css">
</head>
<body>
    <ul>
    
      <li>1991</li>
    
      <li>byvoid</li>
    
      <li>express</li>
    
      <li>Node.js</li>
    
  </ul>
</body>
</html>
```

> include是`ejs`提供的指令，通过 `include` 指令将相对于模板路径中的模板片段包含进来。(需要提供 'filename' 参数。) 例如，如果存在 "./views/list.ejs" 和 "./views/listitem.ejs" 两个模板文件，你可以通过 `<%- include('./listitem'); %>` 代码包含后者。


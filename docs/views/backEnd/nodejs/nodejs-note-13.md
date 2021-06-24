---
title: HTTP 服务器与客户端
time: 2021-06-23 8:14:35
autoGroup-2: nodejs核心模块
category: 后端
tags: 
  - nodejs
---

> Node.js 标准库提供了 http 模块，其中封装了一个高效的 HTTP 服务器和一个简易的HTTP客户端。http.Server 是一个基于事件的 HTTP服务器，它的核心由 Node.js 下层 C++部分实现，而接口由 JavaScript 封装，兼顾了高性能与简易性。 http.request 则是一个HTTP 客户端工具，用于向 HTTP 服务器发起请求，  

## HTTP 服务器  

> http.Server 是 http 模块中的 HTTP 服务器对象，  

**实现了一个服务器**  

```javascript
//app.js
const http = require('http')

const app = http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.write('<h1>Node.js</h1>')
    res.end('<p>Hello World</p>')
  })

app.listen(3000, (err) => {
  if (!err) {
    console.log('HTTP server is listening at port 3000.')
  }
})
```

```shell
ASUS@yaweidediannao MINGW64 ~/Desktop/test
$ node app.js
HTTP server is listening at port 3000.
```

> http.createServer 创建了一个 http.Server 的实例，将一个函数作为 HTTP 请求处理函数。这个函数接受两个参数，分别是请求对象（ req ）和响应对象（ res ）。在函数体内， res 显式地写回了响应代码 200 （表示请求成功），指定响应头为'Content-Type': 'text/html'，然后写入响应体 '<h1>Node.js</h1>'，通过 res.end结束并发送。最后该实例还调用了 listen 函数，启动服务器并监听 3000 端口。  

## http.Server

> http.Server 是一个基于事件的 HTTP 服务器，所有的请求都被封装为独立的事件，开发者只需要对它的事件编写响应函数即可实现 HTTP 服务器的所有功能。它继承自EventEmitter。

- request：当客户端请求到来时，该事件被触发，提供两个参数 req 和res，分别是http.ServerRequest 和 http.ServerResponse 的实例，表示请求和响应信息。  
- connection：当 TCP 连接建立时，该事件被触发，提供一个参数 socket，为net.Socket 的实例。 connection 事件的粒度要大于 request，因为客户端在Keep-Alive 模式下可能会在同一个连接内发送多次请求。  
- close：当服务器关闭时，该事件被触发。注意不是在用户连接断开时。  

**在 这 些 事 件 中 ， 最 常 用 的 就 是 request 了 ， 因 此 http 提 供 了 一 个 捷 径 ：http.createServer([requestListener]) ， 功 能 是 创 建 一 个 HTTP 服 务 器 并 将requestListener 作为 request 事件的监听函数，这也是我们前面例子中使用的方法。**  事实上它显式的实现方法是：

```javascript
const http = require('http')
const server = new http.Server()

server.on('request', function(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html' })
  res.write('<h1>Node.js</h1>')
  res.end('<p>Hello World</p>')
})

server.listen(3000, err => {
  if (!err) {
    console.log('HTTP server is listening at port 3000.')
  }
})
```

```shell
ASUS@yaweidediannao MINGW64 ~/Desktop/test
$ node module.js 
HTTP server is listening at port 3000.
```

## http.ServerRequest  

> http.ServerRequest 是 HTTP 请求的信息，是后端开发者最关注的内容。它一般由http.Server 的 request 事件发送，作为第一个参数传递，通常简称 request 或 req。  


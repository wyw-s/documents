---
title: 搭建本地服务
---

## 快速搭建本地服务

> 方式一、二、三单个js文件即可操作。

### 方式一：

安装下载`serve `npm包。[https://www.npmjs.com/package/serve](https://www.npmjs.com/package/serve)

```bash
npm i serve

# 建议全局安装，
npm i -g serve
```

安装完成你可以`serve -v`来查看版本号，至此安装成功了，

```bash
serve -v
WARNING: Checking for updates failed (use `--debug` to see full error)
11.3.2
```

直接在打开你的文件目录，执行`serve`就会直接启动一个服务，默认监听 `5000` 端口

> 服务的启动的方式，还可以在 `serve fileName` 后面跟文件夹的名称，以此来作为服务启动的文件目录。

```bash
serve
WARNING: Checking for updates failed (use `--debug` to see full error)

   ┌───────────────────────────────────────────────────┐
   │                                                   │
   │   Serving!                                        │
   │                                                   │
   │   - Local:            http://localhost:5000       │
   │   - On Your Network:  http://192.168.137.1:5000   │
   │                                                   │
   │   Copied local address to clipboard!              │
   │                                                   │
   └───────────────────────────────────────────────────┘


```

恭喜你服务搭建完成！

## 方式二；

使用node的`http`内置模块来快速的新建一个服务，

> 此操作代表你已经安装了`nodejs`不然将不可用。

```js
// 引入http包
const http = require('http')
const app = new http.Server()
// 侦听请求
app.on('request', (req, res) => {
  res.writeHead(200, {
    "Content-Type": 'text/html;charset=UTF-8',
  })
  // 返回响应内容
  res.write('<h1>Node.js-监听3000端口~</h1>')
  // 结束响应，此方法必须调用，不然客户端会一直处于等待状态。
  res.end()
})
// 监听 3000端口
app.listen(3000, (err) => {
  if (!err) {
    console.log('开始监听3000端口')
  }
})

```

shell中启动这个文件，`node fileName`

```bash
node service
开始监听3000端口
```

## 方式三；

下载安装依赖`express`,[点击下载](https://www.npmjs.com/package/express)

```bash
npm i express
```

引入并创建服务

```js
// 引入包 express
const express = require('express')
// 创建服务器；
const app = express()
// 创建get请求
app.get('/', (req, res) => {
  res.send('请求成功')
})
// 启动服务；
app.listen(3000, (err) => {
  if (!err) {
    console.log('server started on port 3000')
  }
})

// ============
node service.js
server started on port 3000
```

## 方式四；

> 此种方式需要初始化一个项目，
>
> 1. 创建一个文件夹，
>
> 2. 执行 npm init 会生成package.json文件，
>
> 3. 同级目录新建webpack.config.js文件，写入一下代码，
>
>    ```js
>    module.exports = {
>      entry: './main.js',
>    }
>    ```
>
> 4. 新建main.js文件，随便写点东西

1. 首先你需要安装`webpack`包，[下载](https://www.npmjs.com/package/webpack)

   ```bash
   npm install --save-dev webpack
   ```

2. 安装`webpack-dev-server`包，[下载](https://www.npmjs.com/package/webpack-dev-server)

   ```bash
   npm install webpack-dev-server --save-dev
   ```

3. 然后在`package.json`文件里面的script字段里面添加，

   ```bash
   "scripts": {
       "test": "echo \"Error: no test specified\" && exit 1",
       "serve": "webpack-dev-server", # 添加此行
     },
   ```

4. 执行cmd命令；

   ```bash
   npm run serve
   
   # webpack: Compiled successfully.
   ```

5. 默认会监听8080端口，浏览器打开访问`localhost`即可，
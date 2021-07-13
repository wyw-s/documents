---
title: 初始化项目
category: express
time: 2021-07-12 8:41:23
---

> 这里主要介绍下怎么开始一个express项目；请确认你已经安装了nodejs！

## 方法1

1. 新建应用目录，然后进入该目录并将其作为工作目录。

   ```shell
   mkdir express-example
   cd express-example
   ```

2. npm 初始化: 会在根目录生成 `package.json`文件。

   ```shell
   npm init -y
   ```

3. 安装`express`

   ```bash
   npm install express --save
   ```

4. 开始编码：新建`app.js`，代码如下

   ```javascript
   // 导入express模块
   const express = require('express');
   // 创建应用 注意 express.createServer() 这种创建的方式已经过时了(大约8年前就被官方弃用了)，我当前的版本是4.17.1
   const app = express();
   
   // 设置路由
   app.get('/', (req, res) => {
       // 设置响应类型
       res.set('Content-Type', 'text/plain')
       // 输出响应
       res.send(JSON.stringify(req.headers, null, 4));
   });
   
   // 开启监听
   app.listen(8000, (err) => {
       if (!err) {
           console.log('listen on 8000')
       }
   });
   ```
   
5. 目录结构

   ```bash
   express-example
   ├── app.js
   ├── package-lock.json
   └── package.json
   ```

6. 启动服务

   ```bash
   PS C:\Users\wangy\Desktop\express--example\zc> node app.js
   listen on 8000
   ```

7. 浏览器访问

   ```bash
   # 浏览器访问：http://localhost:8000/
   {
       "host": "localhost:8000",
       "connection": "keep-alive",
       "cache-control": "max-age=0",
       "sec-ch-ua": "\" Not;A Brand\";v=\"99\", \"Google Chrome\";v=\"91\", \"Chromium\";v=\"91\"",
       "sec-ch-ua-mobile": "?0",
       "upgrade-insecure-requests": "1",
       "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
       "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
       "sec-fetch-site": "none",
       "sec-fetch-mode": "navigate",
       "sec-fetch-user": "?1",
       "sec-fetch-dest": "document",
       "accept-encoding": "gzip, deflate, br",
       "accept-language": "zh-CN,zh;q=0.9",
       "if-none-match": "W/\"33a-S4giK0tKs+4sciW3Ad0JtevYSGM\""
   }
   ```

   

## 方法2

> 借助全局安装的express工具，直接生成一个express模板项目；

**命令**：`express -v ejs qwer`

```bash
PS C:\Users\wangy\Desktop\express--example> express -v ejs qwer

   create : qwer\
   create : qwer\public\
   create : qwer\public\javascripts\
   create : qwer\public\images\
   create : qwer\public\stylesheets\
   create : qwer\public\stylesheets\style.css
   create : qwer\routes\
   create : qwer\routes\index.js
   create : qwer\routes\users.js
   create : qwer\views\
   create : qwer\views\error.ejs
   create : qwer\views\index.ejs
   create : qwer\package.json
   create : qwer\bin\
   create : qwer\bin\www

     > cd qwer

   install dependencies:
     > npm install

     > SET DEBUG=qwer:* & npm start

PS C:\Users\wangy\Desktop\express--example>cd qwer
PS C:\Users\wangy\Desktop\express--example\qwer> npm install
npm notice created a lockfile as package-lock.json. You should commit this file.
added 54 packages from 38 contributors and audited 55 packages in 8.856s
found 0 vulnerabilities

PS C:\Users\wangy\Desktop\express--example\qwer> npm start

> qwer@0.0.0 start C:\Users\wangy\Desktop\express--example\qwer
> SET DEBUG=qwer:* && node ./bin/www

  qwer:server Listening on port 3000 +0ms
```

::: tip

`SET DEBUG=qwer:* & npm start`这一步需要在`package.json`文件中设置，然后再执行`npm start`;

:::

```javascript
  "scripts": {
    "start": "SET DEBUG=qwer:* && node ./bin/www"
  },
```




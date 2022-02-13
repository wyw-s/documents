---
title: 使用nodejs
category: nodejs
autoGroup-2: Node.js快速入门
tags:
  - nodejs
---

> 用 Node.js 编程是一件令人愉快的事情，你会发现像这样的语言是很容易入门的，可以快速了解到它的细节，然后掌握它。  

## Hello World  

> 请保证你已经安装了Nodejs；

1. 打印`hello world`;

   - 打开你常用的文本编辑器，在其中输入：console.log('Hello World'); 

     ```javascript
     // helloWorld.js
     console.log('hello world');
     ```

   - 保存后修改文件名为 helloworld.js ；

   - 打开终端，进入 helloworld.js 所在的目录，

   - 执行以下命令：node helloworld.js  

     ```shell
     C:\Users\ASUS\Desktop\test  (test@1.0.0)
     $ node helloWorld.js
     hello world
     ```

     

## Node.js 命令行工具  

> 在前面的 Hello World 示例中，我们用到了命令行中的 node 命令，输入 node --help可以看到详细的帮助信息：  

```shell
C:\Users\ASUS\Desktop\test  (test@1.0.0)                                           
$ node -h                                                                          
Usage: node [options] [ script.js ] [arguments]                                    
       node inspect [options] [ script.js | host:port ] [arguments]                
                                                                                   
Options:                                                                           
  -                                          script read from stdin (default if no 
                                             interactive mode if a tty)            
  --                                         indicate the end of node options      
  --abort-on-uncaught-exception              aborting instead of exiting causes a c
                                             for analysis                          
  -c, --check                                syntax check script without executing 
  --completion-bash                          print source-able bash completion scri
  --cpu-prof                                 Start the V8 CPU profiler on start up,
                                             profile to disk before exit. If --cpu-
                                             specified, write the profile to the cu
  --cpu-prof-dir=...                         Directory where the V8 profiles genera
                                             be placed. Does not affect --prof.    
  --cpu-prof-interval=...                    specified sampling interval in microse
                                             profile generated with --cpu-prof. (de
  --cpu-prof-name=...                        specified file name of the V8 CPU prof
                                             --cpu-prof                            
  --disable-proto=...                        disable Object.prototype.__proto__    
  --disallow-code-generation-from-strings    disallow eval and friends             
  --enable-source-maps                       experimental Source Map V3 support    
  ....
```

> 其中显示了 node 的用法，运行 Node.js 程序的基本方法就是执行 node script.js，其中 script.js是脚本的文件名。

## REPL 模式 

> REPL （Read-eval-print loop），即输入—求值—输出循环。使用 cmd 打开的 shell，可以进入一个即时求值的运行环境。运行无参数的 node 将会启动一个 JavaScript的交互式 shell：  

```shell
C:\Users\ASUS\Desktop\test  (test@1.0.0)
$ node
Welcome to Node.js v12.18.0.
Type ".help" for more information.
> console.log('Hello World');
Hello World
undefined
> consol.log('Hello World');
Uncaught ReferenceError: consol is not defined
>
```

> 进入 REPL 模式以后，会出现一个“>”提示符提示你输入命令，输入后按回车， Node.js将会解析并执行命令。如果你执行了一个函数，那么 REPL 还会在下面显示这个函数的返回值，上面例子中的 undefined 就是 console.log 的返回值。如果你输入了一个错误的指令， REPL 则会立即显示错误并输出调用栈。在任何时候，连续按两次 Ctrl + C 即可推出Node.js 的 REPL 模式。node 提出的 REPL 在应用开发时会给人带来很大的便利，例如我们可以测试一个包能否正常使用，单独调用应用的某一个模块，执行简单的计算等 ;

## 建立 HTTP 服务器 

> Node.js 将“HTTP服务器”这一层抽离，直接面向浏览器用户,所以我们只需几行代码就可以创建一个http服务器；

```javascript
// app.js
// 引入内置的 http 模块
const http = require('http');
http.createServer((req, res) => {
  // charset=utf-8 识别中文字符
  res.writeHead(200, {
    'Content-Type': 'text/html;charset=utf-8',
  });
  res.write('你好');
  res.write('<h1>Node.js</h1>');
  res.end();
}).listen(3000, (err) => {
  if (!err) {
    console.log('服务启动成功')
  }
})

// 终端：node app.js 你会看到  服务启动成功 
// 打开浏览器访问 http://127.0.0.1:3000  ，你会看到 你好 Node.js
```

> 用 Node.js 实现的最简单的 HTTP 服务器就这样诞生了。这个程序调用了 Node.js 提供的http 模块，对所有 HTTP 请求答复同样的内容并监听 3000 端口。

**小技巧--使用 [nodemon](https://www.npmjs.com/package/nodemon)**

在开发 Node.js 实现的 HTTP 应用时会发现，无论你修改了代码的哪一部份，都必须终止Node.js 再重新运行才会奏效。这是因为 Node.js 只有在第一次引用到某部份时才会去解析脚本文件，以后都会直接访问内存，避免重复载入。 Node.js的这种设计虽然有利于提高性能，却不利于开发调试，因为我们在开发过程中总是希望修改后立即看到效果，而不是每次都要终止进程并重启。
nodemon可以帮助你实现这个功能，它会监视你对代码的改动，并自动重启 Node.js。使用方法很简单，首先使用 npm 安装nodemon：  

```shell
# npm 安装
npm i nodemon

# 查看是否安装成功；
nodemon -v

# 运行app.js
nodemon app.js

ASUS@yaweidediannao MINGW64 ~/Desktop/test
$ nodemon app.js 
[nodemon] 2.0.7
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node app.js`
服务启动成功
```

> 当你的代码被改动时，它会自动检测并运行；

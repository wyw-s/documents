---
title: 应用部署
category: express
autoGroup-1: 案例一
time: 2021-07-19 10:54:10
---

> 在开发的过程中，通过node app.js命令运行服务器即可。但它不适合在产品环境下使用，因为到目前为止这个服务器还有几个重大缺陷。  

1. 不支持故障恢复

   当程序有错误发生时，整个进程就会结束，需要重新在终端中启动服务器。这一点在开发中无可厚非，但在产品环境下就是严重的问题了，因为一旦用户访问时触发了程序中某个隐含的bug， 整个服务器就崩溃了，将无法继续为所有用户提供服务。所以部署应用时一定要考虑到故障恢复，提高系统的可靠性。  

2. 没有日志

   对于开发者来说，日志，尤其是错误日志是及其重要的，经常查看它可以发现测试时没有注意到的程序错误。然而这个服务器运行时没有产生错误日志，只有访问日志，所以有必要实现它的日志功能。  

3. 无法利用多核提高性能

   由于Node.js是单线程的，一个进程只能利用一个CPU 核心。当请求大量到来时，单线程就成为了提高吞吐量的瓶颈。随着多核乃至众核时代的到来，只能利用一个核心所带来的浪费是十分严重的，我们需要使用多进程来提高系统的性能。  

4. 独占端口

   我们一般会在同一个服务器上建立多个网站，而且这些网站不能每个进程都独占80端口，所以我们有必要通过反向代理来实现基于域名的端口共享。

5. 需要手动启动

   目前每次启动服务器都是通过在命令行中直接键入命令来实现的，但在产品环境中，特别是在服务器重启以后，全部靠手动启动是不现实的。因此，我们应该制作一个自动启动服务器的脚本，并且通过该脚本可以实现停止服务器等功能 

## 日志功能

> 主要是实现访问日志和错误日志功能。访问日志就是记录用户对服务器的每个请求，包括客户端IP 地址，访问时间，访问路径，服务器响应以及客户端代理字符串。而错误日志则记录程序发生错误时的信息，由于调试中需要即时查看错误信息，将所有错误直接显示到终端即可，而在产品模式中，需要写入错误日志文件。  

morgan给我们提供了自定义功能，所以我们把修改下，app.js 修改如下：需要下载`moment`

```javascript
app.use(logger(function (tokens, req, res) {
  return [
    `[${moment(new Date()).format('YYYY-MM-DD hh:mm:ss')}]`,
    tokens['remote-addr'](req),
    tokens.method(req, res),
    tokens.url(req, res),
    tokens.status(req, res),
    tokens.res(req, res, 'content-length'), '-',
    tokens['response-time'](req, res), 'ms'
  ].join(' ')
}));
```

重启服务器访问浏览器，输出如下：

```bash
[2021-07-19 11:12:13] ::1 GET /reg 304  - 28.614 ms
[2021-07-19 11:12:14] ::1 GET /stylesheets/bootstrap.min.css 304  - 10.743 ms
[2021-07-19 11:12:14] ::1 GET /stylesheets/style.css 304  - 10.250 ms
[2021-07-19 11:12:14] ::1 GET /javascripts/jquery-3.6.0.min.js 304  - 7.419 ms
[2021-07-19 11:12:14] ::1 GET /javascripts/bootstrap.min.js 304  - 4.551 ms
```

但是这是在我们的控制台输出的，我们需要把日志输出到文件中，修改上面代码为：

```javascript
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' });
app.use(logger((tokens, req, res) => {
  return [
    `[${moment(new Date()).format('YYYY-MM-DD hh:mm:ss')}]`,
    tokens['remote-addr'](req),
    tokens.method(req, res),
    tokens.url(req, res),
    tokens.status(req, res),
    tokens.res(req, res, 'content-length'), '-',
    tokens['response-time'](req, res), 'ms'
  ].join(' ')
}, { stream: accessLogStream }));
```

> 重启服务器访问浏览器可以看到，根目录已经有一个`access.log`文件，并写入了内容；

实现错误响应，并写入文件，`app.js`修改如下：  

```javascript
// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // 将错误写入文件
+  const meta = `[${moment(new Date()).format('YYYY-MM-DD hh:mm:ss')}] ${req.url}\n${err.stack}\n`
+  errorLogfile.write(meta);

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
```

> 到此为止，我们的日志系统就简单完成了；

## 使用cluster模块

> Node.js 提供了一个核心模块： cluster。 cluster的功能是生成与当前进程相同的子进程，并且允许父进程和子进程之间共享端口。 Node.js 的另一个核心模块child_process 也提供了相似的进程生成功能，但最大的区别在于cluster 允许跨进程端口复用，给我们的网络服务器开发带来了很大的方便。  

为了在外部模块调用bin/www， 首先需要禁止服务器自动启动。修改www，在server.listen(port); 前后加上判断语句：  

```javascript
// 可以通过测试 require.main === module 来确定文件是被直接运行。
if (require.main === module) {
  server.listen(port);
}
```

> 这个语句的功能是判断当前模块是不是由其他模块调用的，如果不是，说明它是直接启动的，此时启动调试服务器；如果是，则不自动启动服务器。

::: tip

module.parent  新增于: v0.1.16 弃用于: v14.6.0, v12.19.0 。改为使用 [`require.main`](http://nodejs.cn/api/modules.html#modules_require_main) 和 [`module.children`](http://nodejs.cn/api/modules.html#modules_module_children) 。

:::

创建cluster.js，通过cluster 调用bin/www。内容如下所示：  

```javascript
const cluster = require('cluster');
const os = require('os');

// 获取CPU 的数量
const numCPUs = os.cpus().length;
const workers = {};

if (cluster.isMaster) {
    // 主进程分支
    cluster.on('death', function (worker) {
        // 当一个工作进程结束时，重启工作进程
        delete workers[worker.pid];
        worker = cluster.fork();
        workers[worker.pid] = worker;
    });
    // 初始开启与CPU 数量相同的工作进程
    for (let i = 0; i < numCPUs; i++) {
        const worker = cluster.fork();
        workers[worker.pid] = worker;
    }
} else {
    // 工作进程分支，启动服务器
    const { server, port } = require('./bin/www');
    server.listen(port);
}
// 当主进程被终止时，关闭所有工作进程
process.on('SIGTERM', function () {
    for (var pid in workers) {
        process.kill(pid);
    }
    process.exit(0);
});
```

> cluster.js的功能是创建与CPU 核心个数相同的服务器进程，以确保充分利用多核CPU的资源。主进程生成若干个工作进程，并监听工作进程结束事件，当工作进程结束时，重新启动一个工作进程。分支进程产生时会自顶向下重新执行当前程序，并通过分支判断进入工作进程分支，在其中读取模块并启动服务器。通过cluster启动的工作进程可以直接实现端口复用，因此所有工作进程只需监听同一端口。当主进程终止时，还要主动关闭所有工作进程。  

修改bin/www，导出 server和port,修改如下：

```javascript
module.exports = {
  server,
  port
};
```

在终端中执行node cluster.js 命令， 可以看到进程列表中启动了多个 node进程（4核CPU）：  

```bash
> express-example@1.0.0 start C:\Users\wangy\Desktop\express--example\qwer
> SET DEBUG=express-example:* && node ./cluster.js

express-session deprecated undefined resave option; provide resave option app.js:37:9
express-session deprecated undefined resave option; provide resave option app.js:37:9
express-session deprecated undefined saveUninitialized option; provide saveUninitialized option app.js:37:9
express-session deprecated undefined saveUninitialized option; provide saveUninitialized option app.js:37:9
express-session deprecated undefined resave option; provide resave option app.js:37:9
express-session deprecated undefined saveUninitialized option; provide saveUninitialized option app.js:37:9
  express-example:server Listening on port 3000 +0ms
  express-example:server Listening on port 3000 +0ms
  express-example:server Listening on port 3000 +0ms
express-session deprecated undefined resave option; provide resave option app.js:37:9
express-session deprecated undefined saveUninitialized option; provide saveUninitialized option app.js:37:9
  express-example:server Listening on port 3000 +0ms
```

> 我配置了npm 脚本：  "start": "SET DEBUG=express-example:* && node ./cluster.js"。
>
> 终止工作进程，新的工作进程会立即启动，终止主进程，所有工作进程也会同时结束。

## 启动脚本

> 如果你维护过Linux 服务器，会对/etc/init.d/ 下面的脚本有印象。例如使用/etc/init.d/nginx start 和/etc/init.d/nginx stop 可以启动和关闭Nginx 服务器。我们通过bash 脚本也来实现一个类似的功能，创建microblog 并使用chmod +x microblog 赋予其执行权限，脚本内容为：  

```sh
#! /bin/sh
NODE_ENV=production
DAEMON="node cluster.js"
NAME=Microblog
DESC=Microblog
PIDFILE="microblog.pid"

case "$1" in
start)
    echo "Starting $DESC: "
        nohup $DAEMON > /dev/null &
    echo $! > $PIDFILE
    echo "$NAME."
        ;;
stop)
    echo "Stopping $DESC: "
        pid='cat $PIDFILE'
    kill $pid
        rm $PIDFILE
    echo "$NAME."
        ;;
esac
exit 0
```

> 它的功能是通过nohup 启动服务器，使进程不会因为退出终端而关闭，同时将主进程的pid 写入microblog.pid 文件。当调用结束命令时，从microblog.pid 读取pid 的值，终止主进程以关闭服务器。  

::: warning 

这段脚本只支持 POSIX操作系统，如 Linux、 Mac OS等，在 Windows下不可用。 

:::

## 共享 80 端口

> 到目前为止，网站都是运行在3000端口下的，也就是说用户必须在网址中加入:3000才能访问网站。默认的HTTP 端口是80，因此必须监听80端口才能使网址更加简洁。如果整个服务器只有一个网站，那么只需让app.js 监听80 端口即可。但很多时候一个服务器上运行着不止一个网站，此时虚拟主机可以粉墨登场了。  

在Nginx 中设置反向代理和虚拟主机非常简单，下面是配置文件的一个示例：  

```javascript
server {
    listen 80;
    server_name mysite.com;
    location / {
        proxy_pass http://localhost:3000;
    }
}
```

> 这个配置文件的功能是监听访问mysite.com 80 端口的请求，并将所有的请求转发给http://localhost:3000，即我们的Node.js 服务器。现在访问http://mysite.com/，就相当于服务器访问http://localhost:3000了。  


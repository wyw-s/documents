---
title: node实现自动化部署
category: nodejs
autoGroup-7: nodejs扩展
tags:
  - nodejs
---

## node实现自动化部署；

> 说明：由于本人做的前端，Java就不太会，但是node确实一个对于前端同学写后端代码的一个非常好的技术。个人的项目前端是`vue`写的后端是`Nodejs`,同时利用`jenkjins`实现前后端自动化部署。

## 1、项目上传；

> 前端项目这里就不在概括，以下内容都是node部署内容；注：Node项目写完之后，不需要打包，直接把源码上传到你的远程服务器就可以了，我的服务器用的是阿里云Liunx服务器，下文提到的服务器皆为阿里云服务器。

1. 把你的Node项目进行打包。(node_modules文件不要打包)。
2. 登录你的服务器，然后新建一个文件夹。
3. 把你的node代码上传到你的新建文件夹中。
4. 把你的上传的Node项目解压缩到你的新建文件夹中。

## 2、`jenkins`实现半自动化；

> 为什么这里说是半自动化，因为实现了push拉取代码；但是Node并不会**自动启动**；

1. 登录你的jenkins并新建立一个项目。

2. 配置你的jenkins的shell命令。

3. 具体的jenkins的git配置请查看我的另外一骗文章，传送门。

4. 我的jenkins配置文件；

   ```bash
   #!/bin/bash
   cd /var/lib/jenkins/workspace/herolist #进入Jenkins工作空间下herolist项目目录
   tar -zcvf heroList.tar.gz * #把生成的项目打包成压缩包，方便移动到项目部署目录
   cd /www/herolist # 进入node项目根目录
   mv /var/lib/jenkins/workspace/heroList/heroList.tar.gz ./  # 移动刚刚打包好的项目到web项目根目录
   tar -zxvf heroList.tar.gz  # 解压项目到本目录
   rm -rf heroList.tar.gz # 删除压缩包
   npm install # 安装项目中的依赖
   # npm run dev # 项目启动。
   ```

   > 注意：当我们做到这里时，基本就算搞定了，但是还缺少重要的一步，就是node服务启动。
   >
   > 当一切都感觉完好时，却发现最后一行node服务启动报错，不过我没解决掉，具体的报错原因是：`Error: Cannot find module 'express'`。**我的操作**是在Liunx手动`npm run dev`运行是完好的，但是带来了另一个问题，远程服务不能关闭，不然Node就挂了，在网上找了不少方法可以使用，`nohup npm run dev >myout.file 2>&1 &` 持续运行node并把信息输出到指定的文件中,这样启动的Node服务就不会因为你退出终端而停止了。
   >
   > **但是另一个问题便是，你用jjenkins进行新的构建时，node并不会重启，来加载你的新代码**。**看下文pm2解决**；

## 3、`jenkins + node + pm2`实现自动化；

条件：

- 已完成jenkins和git的配置，
- 已经可以成功部署实现自动化；

**1、安装`pm2`；**

```bash
npm install pm2 -g
```

测试；出现以下类似列表说明安装成功；

```shell
[root@iZbp156pkpio44mis76wmxZ herolist]# pm2 list
┌─────┬────────┬─────────────┬─────────┬─────────┬──────────┬────────┬──────┬───────────┬──────────┬──────────┬──────────┬──────────┐
│ id  │ name   │ namespace   │ version │ mode    │ pid      │ uptime │ ↺    │ status    │ cpu      │ mem      │ user     │ watching │
├─────┼────────┼─────────────┼─────────┼─────────┼──────────┼────────┼──────┼───────────┼──────────┼──────────┼──────────┼──────────┤
│ 0   │ npm    │ default     │ N/A     │ fork    │ 0        │ 0      │ 30   │ stopped   │ 0%       │ 0b       │ root     │ disabled │
└─────┴────────┴─────────────┴─────────┴─────────┴──────────┴────────┴──────┴───────────┴──────────┴──────────┴──────────┴──────────┘
[root@iZbp156pkpio44mis76wmxZ herolist]# cd /
```

**2、使用；**

```bash
# 在你的Jenkins的项目配置文件的shell命令中在最后一行加上：
pm2 restart npm -- run dev # 重启nodejs
```

**3、测试**；

```shell
[root@iZbp156pkpio44mis76wmxZ herolist]# ps -ef | grep node 
root      8981  6550  0 22:29 pts/0    00:00:00 grep --color=auto node # node启动前
[root@iZbp156pkpio44mis76wmxZ herolist]# ps -ef | grep node 
root      9101  9088  0 22:29 ?        00:00:00 sh -c export NODE_ENV=production && node app.js
root      9102  9101  3 22:29 ?        00:00:00 node app.js # node启动后
root      9126  6550  0 22:30 pts/0    00:00:00 grep --color=auto node
[root@iZbp156pkpio44mis76wmxZ herolist]# 

```

**4、常见pm2命令介绍**；[传送门](https://www.cnblogs.com/ywnh/p/14287631.html)；

到此自动化部署结束；

## 4、问题；

1. jenkins执行pm2命令报错；`pm2: command not found`；

   > 一般情况下，如果我们全局安装了的话，在window上不会出现，但是liunx上好像不行，需要我们自己手动建立软连接，类似与window创建的环境变量。部分用户可能安装上 连基础的命令也不能使用，也是需要建立软连接的；

   ```bash
   ......以上省略！
   [heroList] $ /bin/sh -xe /tmp/jenkins4753469389532234169.sh
   [heroList] $ /bin/sh -xe /tmp/jenkins259913818346979744.sh
   + pm2 start npm -- run dev
   /tmp/jenkins259913818346979744.sh: line 6: pm2: command not found
   Build step 'Execute shell' marked build as failure
   Finished: FAILURE
   ```

   解决：

   ```shell
   # 找到pm2的安装根目录；我的：/home/local/mynode/node-v12.18.2-linux-x64/bin/pm2
   [root@iZbp156pkpio44mis76wmxZ herolist]# npm install -g pm2 
   npm WARN deprecated debug@4.1.1: Debug versions >=3.2.0 <3.2.7 || >=4 <4.3.1 have a low-severity ReDos regression when used in a Node.js environment. It is recommended you upgrade to 3.2.7 or 4.3.1. (https://github.com/visionmedia/debug/issues/797)
   /home/local/mynode/node-v12.18.2-linux-x64/bin/pm2 -> /home/local/mynode/node-v12.18.2-linux-x64/lib/node_modules/pm2/bin/pm2
   /home/local/mynode/node-v12.18.2-linux-x64/bin/pm2-dev -> /home/local/mynode/node-v12.18.2-linux-x64/lib/node_modules/pm2/bin/pm2-dev
   /home/local/mynode/node-v12.18.2-linux-x64/bin/pm2-docker -> /home/local/mynode/node-v12.18.2-linux-x64/lib/node_modules/pm2/bin/pm2-docker
   /home/local/mynode/node-v12.18.2-linux-x64/bin/pm2-runtime -> /home/local/mynode/node-v12.18.2-linux-x64/lib/node_modules/pm2/bin/pm2-runtime
   npm WARN ws@7.2.5 requires a peer of bufferutil@^4.0.1 but none is installed. You must install peer dependencies yourself.
   npm WARN ws@7.2.5 requires a peer of utf-8-validate@^5.0.2 but none is installed. You must install peer dependencies yourself.
   npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@2.3.1 (node_modules/pm2/node_modules/fsevents):
   npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@2.3.1: wanted {"os":"darwin","arch":"any"} (current: {"os":"linux","arch":"x64"})
   
   + pm2@4.5.1
   added 195 packages from 195 contributors in 9.346s
   [root@iZbp156pkpio44mis76wmxZ herolist]# 
   # 找到环境变量路径 %PATH; 
   [root@iZbp156pkpio44mis76wmxZ /]# echo $PATH
   /usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/home/local/JDK/jdk1.8.0_251/bin:/home/local/mynode/node-v12.18.2-linux-x64/bin:/home/local/maven/apache-maven-3.6.3/bin:/root/bin
   [root@iZbp156pkpio44mis76wmxZ /]#
   # 建立软连接；
   [root@iZbp156pkpio44mis76wmxZ /]# ln -s /home/local/mynode/node-v12.18.2-linux-x64/bin/pm2 /usr/local/bin/
   ```

   > 注意：第一次建立软连接后，我并没有解决 `pm2: command not found`。需要 /usr/local/bin/ 改为 /usr/bin/
   >
   > 完整命令：`ln -s /home/local/mynode/node-v12.18.2-linux-x64/bin/pm2 /usr/bin/`

2. 测试；jenkins控制台输出日志；

   ```shell
   ......以上省略！
   [heroList] $ /bin/sh -xe /tmp/jenkins4043641238157935034.sh
   [heroList] $ /bin/sh -xe /tmp/jenkins4997403699140616984.sh
   + pm2 start npm -- run dev
   [PM2] Applying action restartProcessId on app [npm](ids: [ 0 ])
   [PM2] [npm](0) ✓
   [PM2] Process successfully started
   ┌─────┬────────┬─────────────┬─────────┬─────────┬──────────┬────────┬──────┬───────────┬──────────┬──────────┬──────────┬──────────┐
   │ id  │ name   │ namespace   │ version │ mode    │ pid      │ uptime │ ↺    │ status    │ cpu      │ mem      │ user     │ watching │
   ├─────┼────────┼─────────────┼─────────┼─────────┼──────────┼────────┼──────┼───────────┼──────────┼──────────┼──────────┼──────────┤
   │ 0   │ npm    │ default     │ N/A     │ fork    │ 10506    │ 0s     │ 30   │ online    │ 0%       │ 3.5mb    │ root     │ disabled │
   └─────┴────────┴─────────────┴─────────┴─────────┴──────────┴────────┴──────┴───────────┴──────────┴──────────┴──────────┴──────────┘
   Finished: SUCCESS
   ```

   
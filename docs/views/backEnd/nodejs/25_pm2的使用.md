---
title: pm2的使用
category: nodejs
autoGroup-7: nodejs扩展
tags:
  - nodejs
---

# pm2的简单使用

> 概述： PM2是具有内置负载平衡器的Node.js应用程序的生产过程管理器。它使您可以使应用程序永远保持活动状态，无需停机即可重新加载它们，并简化常见的系统管理任务。 

## 1、安装；

- [下载PM2](https://www.npmjs.com/package/pm2)

- 安装；`npm install pm2 -g`

- 测试；出现以下类似列表说明安装成功；

  ```shell
  [root@iZbp156pkpio44mis76wmxZ herolist]# pm2 list
  ┌─────┬────────┬─────────────┬─────────┬─────────┬──────────┬────────┬──────┬───────────┬──────────┬──────────┬──────────┬──────────┐
  │ id  │ name   │ namespace   │ version │ mode    │ pid      │ uptime │ ↺    │ status    │ cpu      │ mem      │ user     │ watching │
  ├─────┼────────┼─────────────┼─────────┼─────────┼──────────┼────────┼──────┼───────────┼──────────┼──────────┼──────────┼──────────┤
  │ 0   │ npm    │ default     │ N/A     │ fork    │ 0        │ 0      │ 30   │ stopped   │ 0%       │ 0b       │ root     │ disabled │
  └─────┴────────┴─────────────┴─────────┴─────────┴──────────┴────────┴──────┴───────────┴──────────┴──────────┴──────────┴──────────┘
  [root@iZbp156pkpio44mis76wmxZ herolist]# cd /
  ```

  

## 2、命令；

[githup传送门](https://github.com/Unitech/pm2)

```shell
# 安装pm2
cnpm install pm2 -g

# 启动服务
pm2 start app.js 

# 启动应用并设置name
pm2 start app.js --name demo 

# 停止服务
pm2 stop all # 停止所有应用
pm2 stop [AppName] # 根据应用名停止指定应用

# 删除应用
# 关闭并删除应用
pm2 delete all 

# 根据应用名关闭并删除应用
pm2 delete [AppName] 

# 根据应用ID关闭并删除应用
pm2 delete [ID] 

# 创建开机自启动
pm2 startup

# 监听模式当文件发生变化，自动重启
pm2 start app.js --watch 

# 重新启动
pm2 restart app.js

# 更新PM2
pm2 updatePM2
pm2 update

# 静态服务器 将目录dist作为静态服务器根目录，端口为9090
pm2 serve ./dist 9090

# 启用群集模式（自动负载均衡）
pm2 start app.js -i max

# 0秒停机重新加载
# 重新启动所有进程，始终保持至少一个进程在运行
pm2 reload app.js 
# 优雅地以群集模式重新加载所有应用程序
pm2 gracefulReload all 

# 查看启动列表
pm2 list

# 日志查看
m2 logs  # 查看所有应用日志
pm2 logs [Name] # 根据指定应用名查看应用日志
pm2 logs [ID] # 根据指定应用ID查看应用日志

# 保存当前应用列表
pm2 save

# 重启保存的应用列表
pm2 resurrect

# 清除保存的应用列表
pm2 cleardump

# 监控；
pm2 monit
```

## 3、使用；

1. **方式一；**pm2 启动 `npm` 脚本

   ```shell
   "scripts": {
     "test": "echo \"Error: no test specified\" && exit 1",
     "start": "nodemon app.js",
     "dev": "export NODE_ENV=production && node app.js"
   },
     
   简单用法
   1. npm run dev
   2. pm2 start npm -- run dev 注意: -- run之间有一个空格!!
   以上使用是等效的
   
   pm2 start npm --watch --name nickname -- run dev
   其中 --watch监听代码变化，--name 重命令任务名称，-- run后面跟脚本名字
   ```

2. 方式二；pm2 启动 app.js; 命令：`pm2 start app.js`

3. 方式三；pm2 根据配置文件启动npm脚本；
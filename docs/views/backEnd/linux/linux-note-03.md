---
title: service与systemctl命令区别
category: LINUX
date: 2021-05-02
---

## service与systemctl命令区别

>  从CentOS 7.x开始，CentOS开始使用systemd服务来代替daemon，原来管理系统启动和管理系统服务的相关命令全部由systemctl命令来代替。 

### 1、service命令；

>  service命令是Redhat Linux兼容的发行版中用来控制系统服务的实用工具，它以启动、停止、重新启动和关闭系统服务，还可以显示所有系统服务的当前状态。 

1.  语法： 

   ```bash
   # command:  [start | stop |restart |reload |stauts]
   service < option > | --status-all | [ service_name [ command | --full-restart ] ]
   ```

2. 示例：

   ```bash
   # 查看帮助信息；
   [root@iZbp156pkpio44mis76wmxZ /]# service -h
   Usage: service < option > | --status-all | [ service_name [ command | --full-restart ] ]
   # 查看nginx服务状态
   [root@iZbp156pkpio44mis76wmxZ /]# service nginx status
   Redirecting to /bin/systemctl status nginx.service
   ● nginx.service - nginx - high performance web server
      Loaded: loaded (/usr/lib/systemd/system/nginx.service; disabled; vendor preset: disabled)
      Active: active (running) since Tue 2021-04-20 21:49:30 CST; 1 day 1h ago
        Docs: http://nginx.org/en/docs/
     Process: 17599 ExecStart=/usr/sbin/nginx -c /etc/nginx/nginx.conf (code=exited, status=0/SUCCESS)
    Main PID: 17600 (nginx)
      CGroup: /system.slice/nginx.service
              ├─17600 nginx: master process /usr/sbin/nginx -c /etc/nginx/nginx.conf
              └─17602 nginx: worker process
   
   Apr 20 21:49:30 iZbp156pkpio44mis76wmxZ systemd[1]: Starting nginx - high performance web server...
   Apr 20 21:49:30 iZbp156pkpio44mis76wmxZ systemd[1]: Can't open PID file /var/run/nginx.pid (yet?) after start: No such file or directory
   Apr 20 21:49:30 iZbp156pkpio44mis76wmxZ systemd[1]: Started nginx - high performance web server.
   [root@iZbp156pkpio44mis76wmxZ /]#
   
   # 使用 service 启动/重启/停止网络服务
   [root@iZbp156pkpio44mis76wmxZ /]# service network restart
   Restarting network (via systemctl):                        [  OK  ]
   [root@iZbp156pkpio44mis76wmxZ /]# service network start
   Starting network (via systemctl):                          [  OK  ]
   [root@iZbp156pkpio44mis76wmxZ /]# service network stop
   Stopping network (via systemctl):  Connection reset by 47.114.139.71 port 22
   
   C:\Users\ASUS\Desktop
   ```

   > service network stop 后，网络服务停止，网卡关闭，ssh登录不上。
   >
   > 两种方式解决:
   >
   > - 重启服务器，
   > - 操作台进入系统，执行service network start开启网络服务。 

3. 原理：service命令其实是去`/etc/init.d`目录下，去执行相关程；

   >  **注**：在contos7.x中已经用`systemctl`来代替`service`,所以不建议使用`service `

### 2、systemctl 命令

>  历史上，Linux 的启动一直采用init进程。systemd是Linux系统最新的初始化系统(init),作用是提高系统的启动速度，尽可能启动较少的进程，尽可能更多进程并发启动。 

```

```

> 这种方法有两个缺点：
>
> - 一是启动时间长。init 进程是串行启动，只有前一个进程启动完，才会启动下一个进程。
> - 二是启动脚本复杂。init 进程只是执行启动脚本，不管其他事情。脚本需要自己处理各种情况，这往往使得脚本变得很长
>
> Systemd 就是为了解决上面问题而诞生的。它的设计目标是，为系统的启动和管理提供一套完整的解决方案。根据 Linux 惯例，字母 d 是守护进程（daemon）的缩写。 Systemd 这个名字的含义，就是它要守护整个系统。使用了 Systemd，就不需要再用 init 了。Systemd 取代了 initd，成为系统的第一个进程（PID 等于 1），其他进程都是它的子进程。 

#### 1、兼容service命令

>  systemctl命令兼容了service,即systemctl也会去/etc/init.d目录下，查看，执行相关程序 

```
systemctl redis start
systemctl redis stop
# 开机自启动
systemctl enable redis
```



#### 2、日常用法：

```
systemctl  [start | stop |restart |reload |stauts] 服务名
```


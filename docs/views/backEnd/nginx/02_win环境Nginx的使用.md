---
title: Win环境Nginx使用 
category: NGINX
autoGroup-05: Window
date: 2022/4/9
---

## 安装

- 到官网下载Windows版本，下载地址：http://nginx.org/en/download.html
- 解压到磁盘任一目录。
- 修改配置文件：具体参考备注。
- 停止服务：`nginx -s stop`
- 重新加载配置：`nginx -s  reload`

## 启动：

```bash
# 直接双击`nginx.exe`，启动。

# or

# 守护进程的方式启动
 start nginx
```

## 关闭：

```bash
# 快速停止nginx
nginx -s stop
# 完整有序的停止nginx，并保存相关信息。双击；通过等待工作进程来停止nginx进程 要完成当前请求的服务；
nginx -s quit
```

## 重新启动：

> 在配置文件中所做的更改，在重新加载配置的命令之前不会应用。 

```bash
# 重新加载配置
nginx.exe -s reload
```

## 查看80端口是否被占用；

```bash
netstat -ano | findstr 0.0.0.0:80
```




---
title: 查看linux防火墙
category: LINUX
date: 2021-05-02
---

## 查看防火墙状态

```shell
#查看防火墙状态
systemctl status firewalld
#开启防火墙
systemctl start firewalld
#关闭防火墙
systemctl stop firewalld
#设置开机启动
systemctl enable firewalld
#停止并禁用开机启动
sytemctl disable firewalld
#若遇到无法开启
systemctl unmask firewalld.service 
systemctl start firewalld.service
```

## 查看对外开放的端口状态

```shell
#用于检测端口与网络连接情况
netstat -anpl | grep 端口号
# 查询指定端口是否已开
firewall-cmd --query-port=9501/tcp
#查看端口列表
firewall-cmd --permanent --list-port

netstat命令各个参数说明如下：
-t : 指明显示TCP端口
-u : 指明显示UDP端口
-l : 仅显示监听套接字(所谓套接字就是使应用程序能够读bai写与收发通讯协议(protocol)与资料的程序)
-p : 显示进程标识符和程序名称，每一个套接字/端口都属于一个程序。
-n : 不进行DNS轮询，显示IP(可以加速操作)
即可显示当前服务器上所有端口及进程服务，于grep结合可查看某个具体端口及服务情况··
netstat -ntlp //查看当前所有tcp端口·
netstat -ntulp |grep 80 //查看所有80端口使用情况·
netstat -an | grep 3306 //查看所有3306端口使用情况·
```

## 对外开发端口

```shell
# 单独开放 8080端口
firewall-cmd --permanent --zone=public --add-port=8080/tcp
# 重新加载防火墙
firewall-cmd --reload
# 查看8080端口
firewall-cmd --zone=public --query-port=8080/tcp
# 删除端口
firewall-cmd --permanent --zone=public --remove-port=8080/tcp 
```


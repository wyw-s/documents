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


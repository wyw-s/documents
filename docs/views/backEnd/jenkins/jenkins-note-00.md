---
title: jenkins基础命令；
---

>  简单记录一下==Linux== 中Jenkins启动/重启/停止命令 

## 启动

```bash
service jenkins start
#  or
systemctl start jenkins.service
```

## 停止

```bash
service jenkins stop
# or
systemctl stop jenkins.service
```

## 重启

```bash
service jenkins restart
# or
systemctl restart jenkins.service
```

## 状态

```bash
service jenkins status
# or
systemctl status jenkins.service
# or 展开被省略的行
systemctl -l status jenkins.service 
```

## 重新加载

```bash
service jenkins reload
# or
systemctl reload jenkins.service
```

## 扩展

> 我们还可以通过用url的方式，进行 关闭、重启、重新加载配置文件，假设jenkins的服务为：http://localhost:8080

1. 关闭；

   ```bash
   http://localhost:8080/exit
   ```

2. 重启；

   ```bash
   http://localhost:8080/restart
   ```

3. 重新加载配置文件；

   ```bash
   http://localhost:8080/reload
   ```



[阅读原文](https://www.cnblogs.com/faberbeta/p/jenkins004.html)
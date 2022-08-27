---
title: jenkins基础命令
category: JENKINS
date: 2021-05-02
---

>  简单记录一下==Linux== 中Jenkins启动/重启/停止命令 

## 启动

```bash
service jenkins start
#  or
systemctl start jenkins
```

## 停止

```bash
service jenkins stop
# or
systemctl stop jenkins
```

## 重启

```bash
service jenkins restart
# or
systemctl restart jenkins
```

## 状态

```bash
service jenkins status
# or
systemctl status jenkins
# or 展开被省略的行
systemctl -l status jenkins 
```

## 重新加载

```bash
service jenkins reload
# or
systemctl reload jenkins
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
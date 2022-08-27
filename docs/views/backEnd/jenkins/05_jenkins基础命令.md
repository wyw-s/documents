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

## 配置文件

```bash
# 老版本 jenkins@1.x
cat /etc/sysconfig/jenkins

# 新版本 jenkins@2.x
cat /usr/lib/systemd/system/jenkins.service

# 修改默认端口(老版本)
JENKINS_PORT="9090"

# 修改默认端口(新版本)
Environment="JENKINS_PORT=9090"
```

## 扩展

> 我们还可以通过用url的方式，进行 关闭、重启、重新加载配置文件，假设jenkins的服务为：http://localhost:8080

### 关闭

   ```bash
   http://localhost:8080/exit
   ```

### 重启

   ```bash
   http://localhost:8080/restart
   ```

### 重新加载

   ```bash
   http://localhost:8080/reload
   ```

### 默认安装位置(linux)

```bash
# jenkins 安装完成后 执行以下命令会输出jenkins相关文件。
$ find / -name jenkins
/etc/logrotate.d/jenkins
/etc/sysconfig/jenkins # jenkins配置文件
/etc/rc.d/init.d/jenkins # 此文件可以配置jdk
/usr/share/jenkins
/usr/bin/jenkins # jenkins的可执行程序
/var/lib/jenkins # 默认的JENKINS_HOME。
/var/lib/jenkins/%C/jenkins
/var/log/jenkins # Jenkins日志文件
/var/cache/jenkins
$ 
```
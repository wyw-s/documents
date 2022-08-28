---
title: jenkins构建时无权限
category: issues
date: 2021-08-27
tags:
  - issue:jenkins
---

> 此问题之前记录过，不过这次的错误排查耗了些时间，所以这里就简单记录下。此问题的出现是在我安装了`jenkins@2.346.3`后出现的，以下是解决方式。

## 修改配置文件

::: wanging
在之前的版本中，配置文件在`/etc/sysconfig/jenkins`中。可是我安装的`jenkins@2.346.3`配置文件却是在`/usr/lib/systemd/system/jenkins.service`中，这也是本次错误后排查耗时的主要原因。问题就在于原配置文件虽然存在，但是不生效啊。。。。
:::

> 默认情况下jenkins的启动用户为`jenkins`，因为不是`root`用户启动，所以会缺少某些文件的读写权限，这个时候有两个方案，1. 把某些文件授权`jenkins`权限。2. 把`jenkins`以`root`用户启动并开通某些文件的权限。

1. 查看`jenkins`启动用户：

```bash
# 我这里 root 表示我是以root用户启动的。
$ ps -ef | grep jenkins
root     12028     1  0 19:18 ?        00:01:44 /usr/bin/java -Djava.awt.headless=true -jar /usr/share/java/jenkins.war --webroot=%C/jenkins/war --httpPort=9090
root     24516 24481  0 23:15 pts/2    00:00:00 grep --color=auto jenkins 
```

2. 设置启动用户

```bash
# 打开jenkins配置文件
vim /etc/sysconfig/jenkins

# 找到 JENKINS_USER="jenkins" 并修改为如下值
JENKINS_USER="root"

# 修改Jenkins相关文件夹用户权限
chown -R root:root /var/lib/jenkins
chown -R root:root /var/cache/jenkins
chown -R root:root /var/log/jenkins

# 重启Jenkins
systemctl restart jenkins

# 查看Jenkins进程所属用户
ps -ef | grep jenkins

# 若显示为root用户，则表示修改完成。
```

### 以`jenkins`用户启动

```bash
# 修改Jenkins相关文件夹用户权限
chown -R jenkins /var/lib/jenkins
chown -R jenkins /var/cache/jenkins
chown -R jenkins /var/log/jenkins

# 若没有/xxx/xxx文件的权限则执行
chown -R jenkins /xxx/xxx

# 重启Jenkins
systemctl restart jenkins

# 查看Jenkins进程所属用户
ps -ef | grep jenkins

# 若显示为root用户，则表示修改完成。
```

### 以`root`用户启动

```bash
# 打开jenkins配置文件
vim /etc/sysconfig/jenkins

# 找到 JENKINS_USER="jenkins" 并修改为如下值
JENKINS_USER="root"
JENKINS_GROUP="root"

# 或

# 打开jenkins配置文件
vim /usr/lib/systemd/system/jenkins.service

# 找到 User=jenkins 并修改为如下值
User=root
Group=root

# 重新加载配置文件
systemctl daemon-reload

# 修改Jenkins相关文件夹用户权限
chown -R root:root /var/lib/jenkins
chown -R root:root /var/cache/jenkins
chown -R root:root /var/log/jenkins

# 若没有/xxx/xxx文件的权限则执行
chown -R root:root /xxx/xxx

# 重启Jenkins
systemctl restart jenkins

# 查看Jenkins进程所属用户
ps -ef | grep jenkins

# 若显示为root用户，则表示修改完成。
```

::: info
不论哪一个版本修改的配置文件和解决方法都大同小异
:::

---
title: Failed to start LSB Jenkins Automation Server
category: issues
date: 2021-05-02
tag
  - issue:jenkins
---

## 场景；

```bash
[root@iZbp156pkpio44mis76wmxZ /]# service jenkins start
Starting jenkins (via systemctl):  Job for jenkins.service failed because the control process exited with error code. See "systemctl status jenkins.service" and "journalctl -xe" for details.
                                                           [FAILED]
[root@iZbp156pkpio44mis76wmxZ /]# systemctl -l status jenkins.service 查看更多的详情信息
● jenkins.service - LSB: Jenkins Automation Server
   Loaded: loaded (/etc/rc.d/init.d/jenkins; bad; vendor preset: disabled)
   Active: failed (Result: exit-code) since Sun 2021-05-02 23:34:57 CST; 2min 5s ago
     Docs: man:systemd-sysv-generator(8)
  Process: 29311 ExecStart=/etc/rc.d/init.d/jenkins start (code=exited, status=1/FAILURE)

May 02 23:34:57 iZbp156pkpio44mis76wmxZ systemd[1]: Starting LSB: Jenkins Automation Server...
May 02 23:34:57 iZbp156pkpio44mis76wmxZ runuser[29316]: pam_unix(runuser:session): session opened for user root by (uid=0)
May 02 23:34:57 iZbp156pkpio44mis76wmxZ jenkins[29311]: Starting Jenkins bash: /home/local/JDK/jdk1.8.0_251/bin/java: No such file or directory # 此处问题点！！！
May 02 23:34:57 iZbp156pkpio44mis76wmxZ jenkins[29311]: [FAILED]
May 02 23:34:57 iZbp156pkpio44mis76wmxZ systemd[1]: jenkins.service: control process exited, code=exited status=1
May 02 23:34:57 iZbp156pkpio44mis76wmxZ systemd[1]: Failed to start LSB: Jenkins Automation Server.
May 02 23:34:57 iZbp156pkpio44mis76wmxZ systemd[1]: Unit jenkins.service entered failed state.
May 02 23:34:57 iZbp156pkpio44mis76wmxZ systemd[1]: jenkins.service failed.
[root@iZbp156pkpio44mis76wmxZ /]# 

```

## 分析；

> 通过上面的信息我们可以看到有一行： Starting Jenkins bash: /home/local/JDK/jdk1.8.0_251/bin/java: No such file or directory；
>
> 说明我们的jdk位置不对（这个是由于我自己手动移动过jdk的安装位置）

## 解决；

> 查找我们的jdk安装位置，然后找到jenkins的配置文件修改jdk的指向路径；

1. 查找jdk安装路径；

   ```bash
   [root@iZbp156pkpio44mis76wmxZ /]# find / -name java
   /etc/pki/java
   /etc/pki/ca-trust/extracted/java
   /home/local/webview/documents/view/backEnd/java
   /home/local/application/jdk1.8.0_251/jre/bin/java
   /home/local/application/jdk1.8.0_251/bin/java  # 我的jdk的安装路径
   /usr/java
   [root@iZbp156pkpio44mis76wmxZ /]# 
   
   ```

   > 很明显和我们刚刚报错给出的路径是不样的；

2. 修改jenkins的配置文件；

   ```bash
   [root@iZbp156pkpio44mis76wmxZ /]# cd etc/init.d/
   [root@iZbp156pkpio44mis76wmxZ init.d]# vim jenkins 
   
   # see http://www.nabble.com/guinea-pigs-wanted-----Hudson-RPM-for-RedHat-Linux-td25673707.html
   candidates="
   /etc/alternatives/java
   ......省略
   
   /usr/bin/java
   /home/local/JDK/jdk1.8.0_251/bin/java # 修改为：/home/local/application/jdk1.8.0_251/bin/java
   "
   ......省略
   "jenkins" 184L, 6484C 
   ```

3. 保存并退出；

4. 重启jenkins

   ```bash
   # 重新加载
   [root@iZbp156pkpio44mis76wmxZ init.d]# systemctl daemon-reload
   # 启动
   [root@iZbp156pkpio44mis76wmxZ init.d]# systemctl start jenkins
   # 查看状态
   [root@iZbp156pkpio44mis76wmxZ init.d]# systemctl status jenkins
   ● jenkins.service - LSB: Jenkins Automation Server
      Loaded: loaded (/etc/rc.d/init.d/jenkins; bad; vendor preset: disabled)
      Active: active (running) since Mon 2021-05-03 00:12:45 CST; 1min 31s ago
        Docs: man:systemd-sysv-generator(8)
      CGroup: /system.slice/jenkins.service
              └─31247 /home/local/application/jdk1.8.0_251/bin/java -Dcom.sun.akuma.Daemon=daemonized -Djav...
   
   May 03 00:12:45 iZbp156pkpio44mis76wmxZ systemd[1]: Starting LSB: Jenkins Automation Server...
   May 03 00:12:45 iZbp156pkpio44mis76wmxZ runuser[31233]: pam_unix(runuser:session): session opened for...=0)
   May 03 00:12:45 iZbp156pkpio44mis76wmxZ jenkins[31228]: Starting Jenkins [  OK  ]
   May 03 00:12:45 iZbp156pkpio44mis76wmxZ systemd[1]: Started LSB: Jenkins Automation Server.
   Hint: Some lines were ellipsized, use -l to show in full.
   [root@iZbp156pkpio44mis76wmxZ init.d]# 
   
   ```

5. 启动成功

[阅读原文](https://www.freesion.com/article/1255771646/)

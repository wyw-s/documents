---
title: failed to run command ‘java’ No such file or directory
category: issues
date: 2021-05-02
tags:
  - issue:java
---

> 场景：执行java包的时候；nohup java -jar xxx.jar 2 >&1 &

1. 分析；

   ```shell
   # 查看JAVA_HOME 确认是否和自己的安装路径一样
   echo $JAVA_HOME
   ```

   > 本人的是 设置的环境变量和自己的安装路径不一样，

2. 解决；

   ```shell
   # 编辑 profile 文件，并修改JAVA_HOME的变量值；
   vim /etc/profile
   ```

3. 后台持续运行 java服务；

   ```shell
   nohup java -jar customer.jar > myout.log 2>&1 &;
   ```

   


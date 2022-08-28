---
title: mysql启动错误
category: issues
date: 2021-05-02
tags:
  - issue:mysql
---

## `Can't start server: can't check PID filepath: No such file or directory`

> 我出现这种错误的原因是由于服务器强制关机，导致的。或许还有其他的情况导致的，在这里先记录一下。

1. 出错原因： 一般是由于服务器强制关机导致pid文件丢失。 

2. 错误重现：

   ```bash
   # 启动Mysql
   service mysqld start
   # 错误信息： Can't connect to local MySQL server through socket '/var/lib/mysql/mysql.sock' (111)
   ```

   其实一开始的报错是上面这样的，但是在网上找不到确切的解决办法。

3. 查看错误日志；

   ```bash
   cat /var/log/mysqld.log
   # 查看错误日志里面会有一句这样的错误信息；
   [ERROR] Can't start server: can't check PID filepath: No such file or directory
   # 告诉我们没有PID文件或目录；
   ```

4. 解决： 

   1. 在/etc/my.cnf 中查看pid-file的位置 ，

      ```bash
      cat /etc/my.cnf
       
      # 我的：pid-file=/var/run/mysqld/mysqld.pid
      ```

   2. 创建对应的目录并修改权限 ，

      ```bash
      mkdir -p /var/run/mysqld
      chown mysql.mysql /var/run/mysqld
      # 这时可以尝试重启mysql了，如果还不行继续第三步
      
      # 启动
      [root@iZbp156pkpio44mis76wmxZ mysql]# service mysqld start
      Starting mysqld (via systemctl):                           [  OK  ]
      [root@iZbp156pkpio44mis76wmxZ mysql]#
      ```

   3. 创建一个pid文件并修改权限 .

      - **下面的这种的方式没有实践过**。

      ```bash
      touch /var/run/mysql/mysqld.pid
      chown mysql.mysql /var/run/mysql/mysqld.pid
      # 再启动MySQL应该就没问题了。
      ```

   原文地址：https://blog.csdn.net/qq_31977125/article/details/84318745


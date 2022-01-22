---
title: winMysql使用
category: MYSQL
date: 2021-05-02
---
## 查看连接数 ；

```bash
# show processlist; 

mysql> show processlist;
+----+------+-----------------+------+---------+------+-------+------------------+
| Id | User | Host            | db   | Command | Time | State | Info             |
+----+------+-----------------+------+---------+------+-------+------------------+
|  5 | root | localhost:60424 | NULL | Query   |    0 | NULL  | show processlist |
+----+------+-----------------+------+---------+------+-------+------------------+
1 row in set (0.00 sec)

mysql>
```

## 查看最大连接数 ；

```bash
# show variables like "max_connections";

mysql> show variables like "max_connections";
+-----------------+-------+
| Variable_name   | Value |
+-----------------+-------+
| max_connections | 100   |
+-----------------+-------+
1 row in set (0.00 sec)

mysql>
```

## 修改最大连接数 ；

```
set GLOBAL max_connections=1000; 
```

mysql在关闭一个非交互的连接之前要等待的秒数，默认是28800s 

   ```
   show global variables like 'wait_timeout';
   ```

## 设置wait_timeout;

```bash
 set global wait_timeout=28800;
 
 set global interactive_timeout=28800;
```

## 忘记密码

### 步骤一

进入mysql的安装路径下的bin文件下；

### 步骤二

停止你的Mysql服务；

```bash
# net stop mysql

D:\mysql-8.0.20-winx64\bin
$ net stop mysql
MySQL 服务正在停止.
MySQL 服务已成功停止。
```

### 步骤三

输入以下命令；

```bash
# mysqld --console --skip-grant-tables --shared-memory

D:\mysql-8.0.20-winx64\bin
$ mysqld --console --skip-grant-tables --shared-memory # 1
2021-03-13T13:00:39.507312Z 0 [System] [MY-010116] [Server] D:\mysql-8.0.20-winx64\bin\mysqld.exe (mysqld 8.0.20) starting as process 15836
2021-03-13T13:00:39.632181Z 1 [System] [MY-013576] [InnoDB] InnoDB initialization has started.
2021-03-13T13:00:41.077270Z 1 [System] [MY-013577] [InnoDB] InnoDB initialization has ended.
2021-03-13T13:00:41.422998Z 0 [Warning] [MY-011311] [Server] Plugin mysqlx reported: 'All I/O interfaces are disabled, X Protocol won't be accessible'
2021-03-13T13:00:41.745906Z 0 [Warning] [MY-010068] [Server] CA certificate ca.pem is self signed.
2021-03-13T13:00:41.839456Z 0 [System] [MY-010931] [Server] D:\mysql-8.0.20-winx64\bin\mysqld.exe: ready for connections. Version: '8.0.20'  socket: ''  port: 0  MySQL Community Server - GPL.

```

> 注意窗口不要关闭，然后再打开一个新的窗口，

### 步骤四

登录；

```bash
# 注意不要输入密码，直接回车，然后输入以下命令，
mysql -u root -p

D:\mysql-8.0.20-winx64\bin
$ mysql -u root -p  # 1
Enter password:
Welcome to the MySQL monitor.  Commands end with ; or \g.
Your MySQL connection id is 7
Server version: 8.0.20 MySQL Community Server - GPL

Copyright (c) 2000, 2020, Oracle and/or its affiliates. All rights reserved.

Oracle is a registered trademark of Oracle Corporation and/or its
affiliates. Other names may be trademarks of their respective
owners.

Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.

mysql> use mysql  # 2
Database changed
mysql> update user set authentication_string='' where user='root'; Query OK, 1 row affected (0.14 sec)  # 3
Rows matched: 1  Changed: 1  Warnings: 0

mysql> quit  # 4
Bye
```

### 步骤五

关闭1、2窗口；然后再新开一个窗口；

### 步骤六

执行以下命令；

```bash
D:\mysql-8.0.20-winx64\bin
$ net start mysql  # 1
MySQL 服务正在启动 ..
MySQL 服务已经启动成功。

D:\mysql-8.0.20-winx64\bin
$ mysql -u root -p  # 2
Enter password:
Welcome to the MySQL monitor.  Commands end with ; or \g.
Your MySQL connection id is 8
Server version: 8.0.20 MySQL Community Server - GPL

Copyright (c) 2000, 2020, Oracle and/or its affiliates. All rights reserved.

Oracle is a registered trademark of Oracle Corporation and/or its
affiliates. Other names may be trademarks of their respective
owners.

Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.

mysql> ALTER USER 'root'@'localhost' IDENTIFIED BY 'root2020';  # 3
Query OK, 0 rows affected (0.08 sec)

mysql> quit  # 4
Bye

```

> 此时密码修改为  `root2020`

### 步骤七

使用密码登录；

```bash
D:\mysql-8.0.20-winx64\bin
$ mysql -u root -p
Enter password: ********
Welcome to the MySQL monitor.  Commands end with ; or \g.
Your MySQL connection id is 9
Server version: 8.0.20 MySQL Community Server - GPL

Copyright (c) 2000, 2020, Oracle and/or its affiliates. All rights reserved.

Oracle is a registered trademark of Oracle Corporation and/or its
affiliates. Other names may be trademarks of their respective
owners.

Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.

mysql>
```

[原文地址](https://blog.csdn.net/qq382495414/article/details/107253577/)


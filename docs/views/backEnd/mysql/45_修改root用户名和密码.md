---
title: 修改root用户名和密码
category: MYSQL
date: 2023-03-01
---

## 登录`Mysql`

```bash
[root@iZbp156pkpio44mis76wmxZ /]# mysql -uroot -p
Enter password: 
Welcome to the MySQL monitor.  Commands end with ; or \g.
Your MySQL connection id is 6
Server version: 5.7.24 MySQL Community Server (GPL)

Copyright (c) 2000, 2018, Oracle and/or its affiliates. All rights reserved.

Oracle is a registered trademark of Oracle Corporation and/or its
affiliates. Other names may be trademarks of their respective
owners.

Type 'help;' or '\h' for help. Type '\c' to clear the current input statement

mysql> 
```

## 查看用户

```bash
mysql> select user from mysql.user;
+---------------+
| user          |
+---------------+
| root        |
| mysql.session |
| mysql.sys     |
+---------------+
3 rows in set (0.01 sec)

mysql> 
```

> 除了默认root，mysql.session 和 mysql.sys两个用户是MySQL 5.7 新增默认账号。
> - mysql.sys：用于 sys schema中对象的定义。使用 mysql.sys 用户可避免DBA重命名或者删除root用户时发生的问题。该用户已被锁定，客户端无法连接。
> - mysql.sessio：插件内部使用来访问服务器。该用户已被锁定，客户端无法连接。


## 修改用户

```mysql
# 选择数据库
mysql> use mysql;

# 修改用户
mysql> update user set user="xxx" where user = "root";

# 修改密码
mysql> update user set password=password('xxx') where user = 'xxx';
# 错误原因：mysql数据库下已经没有password这个字段了，password字段改成了authentication_string。
ERROR 1054 (42S22): Unknown error 1054

# 错误原因：MySQL对设置密码进行了默认的限制； 这是因为密码过于简单导致的
ERROR 1819 (HY000): Unknown error 1819
mysql> update user set authentication_string=password('xxx') where user = 'xxx';
Query OK, 1 row affected, 1 warning (0.00 sec)

mysql> 
```

> 在`MySQL`中’%’表示可以在任何主机上登录`MySQL`数据库，

## 刷新权限

```bash
mysql> flush privileges;
Query OK, 0 rows affected (0.00 sec

mysql> 
```

```bash
# 停止mysql
systemctl stop mysqld;
# 启动mysql
systemctl start mysqld;
```

## 验证登录

```bash
[root@iZbp156pkpio44mis76wmxZ /]# mysql -uroot -p
Enter password: 
ERROR 1045 (28000): Unknown error 1045
[root@iZbp156pkpio44mis76wmxZ /]# mysql -uxxx -p
Enter password: 
Welcome to the MySQL monitor.  Commands end with ; or \g.
Your MySQL connection id is 12
Server version: 5.7.24 MySQL Community Server (GPL)

Copyright (c) 2000, 2018, Oracle and/or its affiliates. All rights reserved.

Oracle is a registered trademark of Oracle Corporation and/or its
affiliates. Other names may be trademarks of their respective
owners.

Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.

mysql> 
```


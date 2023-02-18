---
title: Mysql数据库的基本使用
category: MYSQL
date: 2023-02-18
---

## 查看数据库

> 使用 **SHOW DATABASES** 语句来查看或显示当前用户权限范围以内的数据库。

语法格式：

```mysql
SHOW DATABASES [LIKE '数据库名'];
```

语法说明：

- LIKE 从句是可选项，用于匹配指定的数据库名称。LIKE 从句可以部分匹配，也可以完全匹配。
- 数据库名由单引号`''`包围。

### 查看所有数据库

> 列出当前用户可查看的所有数据库：

```mysql
mysql> show databases;
+--------------------+
| Database           |
+--------------------+
| information_schema |
| db1                |
| db2                |
| mysql              |
| performance_schema |
| test               |
+--------------------+
6 rows in set (0.08 sec)
```

在上面的列表中有 6 个数据库，其中information_schema 、performance_schema、mysql是安装 MySQL 时系统自动创建的，其功能如下：

- information_schema：主要存储了系统中的一些数据库对象信息，比如用户表信息、列信息、权限信息、字符集信息和分区信息等。
- mysql：MySQL 的核心数据库，类似于 SQL Server 中的 master 表，主要负责存储数据库用户、用户访问权限等 MySQL 自己需要使用的控制和管理信息。常用的比如在 mysql 数据库的 user 表中修改 root 用户密码。
- performance_schema：主要用于收集数据库服务器性能参数。

### 查看某一个数据库

```mysql
mysql> show databases like 'db1';
+----------------+
| Database (db1) |
+----------------+
| db1            |
+----------------+
1 row in set (0.00 sec)
```

### 模糊查询

```mysql
mysql> show databases like 'db%';
+----------------+
| Database (db%) |
+----------------+
| db1            |
| db2            |
+----------------+
2 rows in set (0.00 sec)
```

### 查看正在使用的数据库

```mysql
mysql> select database();
+------------+
| database() |
+------------+
| NULL       |
+------------+
1 row in set (0.00 sec)
```

### 使用数据库

```mysql
mysql> use db2;
Database changed
```

## 查看数据表

> 在查看数据表之前需要先切换到表所对应的数据库；

### 查看表

```mysql
mysql> show tables;
+---------------+
| Tables_in_db2 |
+---------------+
| stu           |
| stu1          |
| student       |
+---------------+
3 rows in set (0.00 sec)
```

### 查看表结构

语法格式：

```mysql
DESCRIBE <表名>;

# 或

DESC <表名>;
```

```mysql
mysql> desc stu;
+-------------+-------------+------+-----+-------------------+-----------------------------+
| Field       | Type        | Null | Key | Default           | Extra                       |
+-------------+-------------+------+-----+-------------------+-----------------------------+
| id          | int(11)     | YES  |     | NULL              |                             |
| name        | varchar(32) | YES  |     | NULL              |                             |
| age         | int(11)     | YES  |     | NULL              |                             |
| score       | double(4,1) | YES  |     | NULL              |                             |
| birthday    | date        | YES  |     | NULL              |                             |
| insert_time | timestamp   | NO   |     | CURRENT_TIMESTAMP | on update CURRENT_TIMESTAMP |
+-------------+-------------+------+-----+-------------------+-----------------------------+
6 rows in set (0.01 sec)
```

其中，各个字段的含义如下：

- Null：表示该列是否可以存储 NULL 值。
- Key：表示该列是否已编制索引。PRI 表示该列是表主键的一部分，UNI 表示该列是 UNIQUE 索引的一部分，MUL 表示在列中某个给定值允许出现多次。
- Default：表示该列是否有默认值，如果有，值是多少。
- Extra：表示可以获取的与给定列有关的附加信息，如 AUTO_INCREMENT 等

### 查询表数据

语法格式：

```mysql
select * from 表名;
```

```mysql
mysql> select * from stu;
+------+------+------+-------+----------+---------------------+
| id   | name | age  | score | birthday | insert_time         |
+------+------+------+-------+----------+---------------------+
|   12 | lisi |    2 |  NULL | NULL     | 2022-01-22 20:35:44 |
|   13 | lisi |  200 |  NULL | NULL     | 2022-01-22 20:37:15 |
+------+------+------+-------+----------+---------------------+
2 rows in set (0.00 sec)
```

## 查看连接数 

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

查看最大连接数 ；

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

## 修改最大连接数 

```
set GLOBAL max_connections=1000; 
```

mysql在关闭一个非交互的连接之前要等待的秒数，默认是28800s 

```
   show global variables like 'wait_timeout';
```

## 设置wait_timeout

```bash
 set global wait_timeout=28800;
 
 set global interactive_timeout=28800;
```

---
title: 数据库的CRUD操作
category: MYSQL
date: 2022-01-22
---

操作数据库简称：CRUD

-  C(Create): 创建。
-  R(Retrieve)：查询。
- U(Update): 修改。
- D(Delete): 删除。

## DDL 操作数据库

### 创建数据库

创建的几种方式：

- 创建数据库

  ```mysql
  CREATE DATABASE 数据库名;
  ```

- 判断数据库是否已经存在，不存在则创建数据库

  ```mysql
  CREATE DATABASE IF NOT EXISTS 数据库名;
  ```

- 创建数据库并指定字符集

  ```mysql
  CREATE DATABASE 数据库名 CHARACTER SET 字符集;
  ```

```mysql
# 创建数据库

mysql> create database db1;
Query OK, 1 row affected (0.01 sec)

# 查看数据库
mysql> show databases;
+--------------------+
| Database           |
+--------------------+
| information_schema |
| db1                |
| mysql              |
| performance_schema |
| test               |
+--------------------+
5 rows in set (0.00 sec)

# 查看创建的数据库
mysql> show create  database db1;
+----------+--------------------------------------------------------------+
| Database | Create Database                                              |
+----------+--------------------------------------------------------------+
| db1      | CREATE DATABASE `db1` /*!40100 DEFAULT CHARACTER SET utf8 */ |
+----------+--------------------------------------------------------------+
1 row in set (0.00 sec)

# 在创建之前判断数据库是否存在，如果存在则不创建，不存在则创建。
mysql> create database if not exists db2;
Query OK, 1 row affected (0.00 sec)

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
6 rows in set (0.00 sec)

# 创建数据库并指定字符集
mysql> create database db3 character set gbk;
Query OK, 1 row affected (0.00 sec)

mysql> show create database db3;
+----------+-------------------------------------------------------------+
| Database | Create Database                                             |
+----------+-------------------------------------------------------------+
| db3      | CREATE DATABASE `db3` /*!40100 DEFAULT CHARACTER SET gbk */ |
+----------+-------------------------------------------------------------+
1 row in set (0.00 sec)

# 创建db4数据库，判断是否存在，并制定字符集为gbk；
mysql> create database if not exists db4 character set gbk;
Query OK, 1 row affected (0.00 sec)

mysql> show create database db4;
+----------+-------------------------------------------------------------+
| Database | Create Database                                             |
+----------+-------------------------------------------------------------+
| db4      | CREATE DATABASE `db4` /*!40100 DEFAULT CHARACTER SET gbk */ |
+----------+-------------------------------------------------------------+
1 row in set (0.00 sec)

mysql>
```

### 查看数据库

> 按 `tab` 键可以自动补全关键字

```mysql
-- 查看所有的数据库
mysql> show databases;
+--------------------+
| Database           |
+--------------------+
| information_schema | -- 描述Mysql中的一些信息，其中存在的表，并不是真正的表。
| mysql              | -- mysql的核心数据库
| performance_schema | -- 对性能提升做一些操作的数据库
| test               |
+--------------------+
4 rows in set (0.00 sec)

-- 查询某个数据库的字符集:查询某个数据库的创建语句
mysql> show create database test;
+----------+---------------------------------------------------------------+
| Database | Create Database                                               |
+----------+---------------------------------------------------------------+
| test     | CREATE DATABASE `test` /*!40100 DEFAULT CHARACTER SET utf8 */ |
+----------+---------------------------------------------------------------+
1 row in set (0.00 sec)

mysql>
```

### 修改数据库

- 修改数据库默认的字符集

  ```mysql
  ALTER DATABASE 数据库名 DEFAULT CHARACTER SET 字符集;
  ```

```mysql
mysql> create database db3 character set gbk;
Query OK, 1 row affected (0.00 sec)

mysql> show create database db3;
+----------+-------------------------------------------------------------+
| Database | Create Database                                             |
+----------+-------------------------------------------------------------+
| db3      | CREATE DATABASE `db3` /*!40100 DEFAULT CHARACTER SET gbk */ |
+----------+-------------------------------------------------------------+
1 row in set (0.00 sec)

mysql> alter database db3 character set utf8;
Query OK, 1 row affected (0.00 sec)

-- 修改数据库的字符集
mysql> show create database db3;
+----------+--------------------------------------------------------------+
| Database | Create Database                                              |
+----------+--------------------------------------------------------------+
| db3      | CREATE DATABASE `db3` /*!40100 DEFAULT CHARACTER SET utf8 */ |
+----------+--------------------------------------------------------------+
1 row in set (0.00 sec)

mysql>
```

### 删除数据库

- 删除数据库

  ```mysql
  DROP DATABASE 数据库名;
  ```

- 判断数据库是否存在，存在则删除数据库

  ```MYSQL
  DROP DATABASE IF EXISTS 数据库名;
  ```

```mysql
mysql> show databases;
+--------------------+
| Database           |
+--------------------+
| information_schema |
| db1                |
| db2                |
| db3                |
| db4                |
| mysql              |
| performance_schema |
| test               |
+--------------------+
8 rows in set (0.00 sec)

-- 删除数据库db4
mysql> drop database db4;
Query OK, 0 rows affected (0.01 sec)

mysql> show databases;
+--------------------+
| Database           |
+--------------------+
| information_schema |
| db1                |
| db2                |
| db3                |
| mysql              |
| performance_schema |
| test               |
+--------------------+
7 rows in set (0.00 sec)

mysql>
```

### 使用数据库

- 查看正在使用的数据库

  ```mysql
  SELECT DATABASE(); 使用的一个 mysql 中的全局函数
  ```

- 使用/切换数据库

  ```mysql
  USE 数据库名;
  ```

```mysql

-- 使用数据库db1
mysql> use db1;
Database changed

-- 查看正在使用的数据库
mysql> select database();
+------------+
| database() |
+------------+
| db1        |
+------------+
1 row in set (0.00 sec)

mysql>
```

## DDL 操作表结构

> 前提先使用某个数据库

### 创建表

语法：

```mysql
CREATE TABLE 表名 (
    字段名 1 字段类型 1,
    字段名 2 字段类型 2
);
```

关键字说明：

- CREATE：创建。
- TABLE：表。



### MySQL 数据类型

### 查看表

### 快速创建一个表结构相同的表

### 删除表

### 修改表结构


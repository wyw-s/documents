(window.webpackJsonp=window.webpackJsonp||[]).push([[237],{820:function(s,a,n){"use strict";n.r(a);var e=n(1),t=Object(e.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("p",[s._v("操作数据库简称：CRUD")]),s._v(" "),n("ul",[n("li",[s._v("C(Create): 创建。")]),s._v(" "),n("li",[s._v("R(Retrieve)：查询。")]),s._v(" "),n("li",[s._v("U(Update): 修改。")]),s._v(" "),n("li",[s._v("D(Delete): 删除。")])]),s._v(" "),n("h2",{attrs:{id:"ddl-操作数据库"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ddl-操作数据库"}},[s._v("#")]),s._v(" DDL 操作数据库")]),s._v(" "),n("h3",{attrs:{id:"创建数据库"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#创建数据库"}},[s._v("#")]),s._v(" 创建数据库")]),s._v(" "),n("p",[s._v("创建的几种方式：")]),s._v(" "),n("ul",[n("li",[n("p",[s._v("创建数据库")]),s._v(" "),n("div",{staticClass:"language-mysql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("CREATE DATABASE 数据库名;\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])])]),s._v(" "),n("li",[n("p",[s._v("判断数据库是否已经存在，不存在则创建数据库")]),s._v(" "),n("div",{staticClass:"language-mysql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("CREATE DATABASE IF NOT EXISTS 数据库名;\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])])]),s._v(" "),n("li",[n("p",[s._v("创建数据库并指定字符集")]),s._v(" "),n("div",{staticClass:"language-mysql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("CREATE DATABASE 数据库名 CHARACTER SET 字符集;\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])])])]),s._v(" "),n("div",{staticClass:"language-mysql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("# 创建数据库\n\nmysql> create database db1;\nQuery OK, 1 row affected (0.01 sec)\n\n# 查看数据库\nmysql> show databases;\n+--------------------+\n| Database           |\n+--------------------+\n| information_schema |\n| db1                |\n| mysql              |\n| performance_schema |\n| test               |\n+--------------------+\n5 rows in set (0.00 sec)\n\n# 查看创建的数据库\nmysql> show create  database db1;\n+----------+--------------------------------------------------------------+\n| Database | Create Database                                              |\n+----------+--------------------------------------------------------------+\n| db1      | CREATE DATABASE `db1` /*!40100 DEFAULT CHARACTER SET utf8 */ |\n+----------+--------------------------------------------------------------+\n1 row in set (0.00 sec)\n\n# 在创建之前判断数据库是否存在，如果存在则不创建，不存在则创建。\nmysql> create database if not exists db2;\nQuery OK, 1 row affected (0.00 sec)\n\nmysql> show databases;\n+--------------------+\n| Database           |\n+--------------------+\n| information_schema |\n| db1                |\n| db2                |\n| mysql              |\n| performance_schema |\n| test               |\n+--------------------+\n6 rows in set (0.00 sec)\n\n# 创建数据库并指定字符集\nmysql> create database db3 character set gbk;\nQuery OK, 1 row affected (0.00 sec)\n\nmysql> show create database db3;\n+----------+-------------------------------------------------------------+\n| Database | Create Database                                             |\n+----------+-------------------------------------------------------------+\n| db3      | CREATE DATABASE `db3` /*!40100 DEFAULT CHARACTER SET gbk */ |\n+----------+-------------------------------------------------------------+\n1 row in set (0.00 sec)\n\n# 创建db4数据库，判断是否存在，并制定字符集为gbk；\nmysql> create database if not exists db4 character set gbk;\nQuery OK, 1 row affected (0.00 sec)\n\nmysql> show create database db4;\n+----------+-------------------------------------------------------------+\n| Database | Create Database                                             |\n+----------+-------------------------------------------------------------+\n| db4      | CREATE DATABASE `db4` /*!40100 DEFAULT CHARACTER SET gbk */ |\n+----------+-------------------------------------------------------------+\n1 row in set (0.00 sec)\n\nmysql>\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br"),n("span",{staticClass:"line-number"},[s._v("50")]),n("br"),n("span",{staticClass:"line-number"},[s._v("51")]),n("br"),n("span",{staticClass:"line-number"},[s._v("52")]),n("br"),n("span",{staticClass:"line-number"},[s._v("53")]),n("br"),n("span",{staticClass:"line-number"},[s._v("54")]),n("br"),n("span",{staticClass:"line-number"},[s._v("55")]),n("br"),n("span",{staticClass:"line-number"},[s._v("56")]),n("br"),n("span",{staticClass:"line-number"},[s._v("57")]),n("br"),n("span",{staticClass:"line-number"},[s._v("58")]),n("br"),n("span",{staticClass:"line-number"},[s._v("59")]),n("br"),n("span",{staticClass:"line-number"},[s._v("60")]),n("br"),n("span",{staticClass:"line-number"},[s._v("61")]),n("br"),n("span",{staticClass:"line-number"},[s._v("62")]),n("br"),n("span",{staticClass:"line-number"},[s._v("63")]),n("br"),n("span",{staticClass:"line-number"},[s._v("64")]),n("br"),n("span",{staticClass:"line-number"},[s._v("65")]),n("br"),n("span",{staticClass:"line-number"},[s._v("66")]),n("br"),n("span",{staticClass:"line-number"},[s._v("67")]),n("br"),n("span",{staticClass:"line-number"},[s._v("68")]),n("br"),n("span",{staticClass:"line-number"},[s._v("69")]),n("br")])]),n("h3",{attrs:{id:"查看数据库"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#查看数据库"}},[s._v("#")]),s._v(" 查看数据库")]),s._v(" "),n("blockquote",[n("p",[s._v("按 "),n("code",[s._v("tab")]),s._v(" 键可以自动补全关键字")])]),s._v(" "),n("div",{staticClass:"language-mysql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("-- 查看所有的数据库\nmysql> show databases;\n+--------------------+\n| Database           |\n+--------------------+\n| information_schema | -- 描述Mysql中的一些信息，其中存在的表，并不是真正的表。\n| mysql              | -- mysql的核心数据库\n| performance_schema | -- 对性能提升做一些操作的数据库\n| test               |\n+--------------------+\n4 rows in set (0.00 sec)\n\n-- 查询某个数据库的字符集:查询某个数据库的创建语句\nmysql> show create database test;\n+----------+---------------------------------------------------------------+\n| Database | Create Database                                               |\n+----------+---------------------------------------------------------------+\n| test     | CREATE DATABASE `test` /*!40100 DEFAULT CHARACTER SET utf8 */ |\n+----------+---------------------------------------------------------------+\n1 row in set (0.00 sec)\n\nmysql>\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br")])]),n("h3",{attrs:{id:"修改数据库"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#修改数据库"}},[s._v("#")]),s._v(" 修改数据库")]),s._v(" "),n("ul",[n("li",[n("p",[s._v("修改数据库默认的字符集")]),s._v(" "),n("div",{staticClass:"language-mysql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("ALTER DATABASE 数据库名 DEFAULT CHARACTER SET 字符集;\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])])])]),s._v(" "),n("div",{staticClass:"language-mysql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("mysql> create database db3 character set gbk;\nQuery OK, 1 row affected (0.00 sec)\n\nmysql> show create database db3;\n+----------+-------------------------------------------------------------+\n| Database | Create Database                                             |\n+----------+-------------------------------------------------------------+\n| db3      | CREATE DATABASE `db3` /*!40100 DEFAULT CHARACTER SET gbk */ |\n+----------+-------------------------------------------------------------+\n1 row in set (0.00 sec)\n\nmysql> alter database db3 character set utf8;\nQuery OK, 1 row affected (0.00 sec)\n\n-- 修改数据库的字符集\nmysql> show create database db3;\n+----------+--------------------------------------------------------------+\n| Database | Create Database                                              |\n+----------+--------------------------------------------------------------+\n| db3      | CREATE DATABASE `db3` /*!40100 DEFAULT CHARACTER SET utf8 */ |\n+----------+--------------------------------------------------------------+\n1 row in set (0.00 sec)\n\nmysql>\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br")])]),n("h3",{attrs:{id:"删除数据库"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#删除数据库"}},[s._v("#")]),s._v(" 删除数据库")]),s._v(" "),n("ul",[n("li",[n("p",[s._v("删除数据库")]),s._v(" "),n("div",{staticClass:"language-mysql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("DROP DATABASE 数据库名;\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])])]),s._v(" "),n("li",[n("p",[s._v("判断数据库是否存在，存在则删除数据库")]),s._v(" "),n("div",{staticClass:"language-MYSQL line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("DROP DATABASE IF EXISTS 数据库名;\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])])])]),s._v(" "),n("div",{staticClass:"language-mysql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("mysql> show databases;\n+--------------------+\n| Database           |\n+--------------------+\n| information_schema |\n| db1                |\n| db2                |\n| db3                |\n| db4                |\n| mysql              |\n| performance_schema |\n| test               |\n+--------------------+\n8 rows in set (0.00 sec)\n\n-- 删除数据库db4\nmysql> drop database db4;\nQuery OK, 0 rows affected (0.01 sec)\n\nmysql> show databases;\n+--------------------+\n| Database           |\n+--------------------+\n| information_schema |\n| db1                |\n| db2                |\n| db3                |\n| mysql              |\n| performance_schema |\n| test               |\n+--------------------+\n7 rows in set (0.00 sec)\n\nmysql>\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br")])]),n("h3",{attrs:{id:"使用数据库"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用数据库"}},[s._v("#")]),s._v(" 使用数据库")]),s._v(" "),n("ul",[n("li",[n("p",[s._v("查看正在使用的数据库")]),s._v(" "),n("div",{staticClass:"language-mysql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("SELECT DATABASE(); 使用的一个 mysql 中的全局函数\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])])]),s._v(" "),n("li",[n("p",[s._v("使用/切换数据库")]),s._v(" "),n("div",{staticClass:"language-mysql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("USE 数据库名;\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])])])]),s._v(" "),n("div",{staticClass:"language-mysql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("\n-- 使用数据库db1\nmysql> use db1;\nDatabase changed\n\n-- 查看正在使用的数据库\nmysql> select database();\n+------------+\n| database() |\n+------------+\n| db1        |\n+------------+\n1 row in set (0.00 sec)\n\nmysql>\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br")])]),n("h2",{attrs:{id:"ddl-操作表结构"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ddl-操作表结构"}},[s._v("#")]),s._v(" DDL 操作表结构")]),s._v(" "),n("blockquote",[n("p",[s._v("前提先使用某个数据库")])]),s._v(" "),n("h3",{attrs:{id:"创建表"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#创建表"}},[s._v("#")]),s._v(" 创建表")]),s._v(" "),n("p",[s._v("语法：")]),s._v(" "),n("div",{staticClass:"language-mysql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("CREATE TABLE 表名 (\n    字段名 1 字段类型 1,\n    字段名 2 字段类型 2\n);\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("p",[s._v("关键字说明：")]),s._v(" "),n("ul",[n("li",[s._v("CREATE：创建。")]),s._v(" "),n("li",[s._v("TABLE：表。")])]),s._v(" "),n("h3",{attrs:{id:"mysql-数据类型"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#mysql-数据类型"}},[s._v("#")]),s._v(" MySQL 数据类型")]),s._v(" "),n("h3",{attrs:{id:"查看表"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#查看表"}},[s._v("#")]),s._v(" 查看表")]),s._v(" "),n("h3",{attrs:{id:"快速创建一个表结构相同的表"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#快速创建一个表结构相同的表"}},[s._v("#")]),s._v(" 快速创建一个表结构相同的表")]),s._v(" "),n("h3",{attrs:{id:"删除表"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#删除表"}},[s._v("#")]),s._v(" 删除表")]),s._v(" "),n("h3",{attrs:{id:"修改表结构"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#修改表结构"}},[s._v("#")]),s._v(" 修改表结构")])])}),[],!1,null,null,null);a.default=t.exports}}]);
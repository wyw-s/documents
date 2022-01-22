---
title: MYSQL使用
category: MYSQL
date: 2021-05-02
---

## 基础命令

### 启动mysql

```bash
service mysqld start;
# or
systemctl start mysqld;
```

![1594485624023](assets/1594485624023.png)

### 关闭mysql

```bash
service mysqld stop;
# or
systemctl stop mysqld;
```

![1594485694723](assets/1594485694723.png)

### 查看Mysql的运行状态；

```bash
service mysqld status;
# or
systemctl status mysqld;
# or 
systemctl -l status mysqld;
```

![1594485553438](assets/1594485553438.png)

### 查看错误日志位置 

```bash
cat /etc/my.cnf | grep log-error
```

### 查看错误日志 

```bash
more /var/log/mysqld.log
```




---
title: MYSQL使用
---

> Error: ER_NOT_SUPPORTED_AUTH_MODE: Client does not support authentication pr

- 错误原因；

  -  原因8.0mysql引入了caching_sha2_password模块作为默认身份验证插件，nodejs还没有跟进 

- 解决；

  -  ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '自己的密码'; 

- 启动mysql;

  ```bash
  service mysqld start;
  ```

  ![1594485624023](assets/1594485624023.png)

- 关闭mysql

  ```bash
  service mysqld stop 
  ```

  ![1594485694723](assets/1594485694723.png)

- 查看Mysql的运行状态；

  ```bash
service mysqld status;
  ```
  
  <img src="assets/1594485553438.png" alt="1594485553438" style="zoom:50%;" />
  
  



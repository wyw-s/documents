---
title: winMysql使用
---
2. 启动；

   ```
   net start mysql
   ```

3. 关闭；

   ```
   net stop mysql
   ```

4. 登录；

   ```
   mysql -uroot -p
   ```

5. 修改密码；

   ```
   ALTER USER '用户名'@'localhost' IDENTIFIED WITH mysql_native_password BY '新密码';
   
   flush privileges;   --刷新MySQL的系统权限相关表
   ```

6. 退出；

   ```
   exit;
   ```

7. 查看连接数 ；

   ```
   show processlist; 
   ```

8. 查看最大连接数 ；

   ```
   show variables like "max_connections";
   ```

9. 修改最大连接数 ；

   ```
   set GLOBAL max_connections=1000; 
   ```

10. mysql在关闭一个非交互的连接之前要等待的秒数，默认是28800s 

   ```
   show global variables like 'wait_timeout';
   ```

11. 设置wait_timeout;

    ```bash
     set global wait_timeout=28800;
     
     set global interactive_timeout=28800;
    ```

    


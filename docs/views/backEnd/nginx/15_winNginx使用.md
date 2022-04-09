---
title: winNginx使用 
category: NGINX
autoGroup-05: Window
date: 2022/4/9
---

1. 启动：

    ```bash
     # 或者直接双击
     start nginx
    ```

2. 关闭：

    ```bash
    # 快速停止nginx
    nginx -s stop
    # 完整有序的停止nginx，并保存相关信息。
    nginx -s quit
    ```

3. 重新启动：

    ```bash
    nginx.exe -s reload
    ```

4. 查看80端口是否被占用；

    ```bash
    netstat -ano | findstr 0.0.0.0:80
    ```

    



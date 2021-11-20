---
title: nodejs的安装
category: LINUX
date: 2021-05-02
---

## 1、下载安装包；

- 系统环境；

  ```
  命令：uname -a
  ```

  ![1594554925522](assets/1594554925522.png)

- [安装包](https://nodejs.org/dist/v12.18.2/node-v12.18.2-linux-x64.tar.xz)

  ![1594553541430](assets/1594553541430.png)

- 下载；

  ```
  命令：wget https://nodejs.org/dist/v12.18.2/node-v12.18.2-linux-x64.tar.xz
  ```

  ![1594553652045](assets/1594553652045.png)

## 2、解压；

```
命令：tar xf node-v12.18.2-linux-x64.tar.xz 
```

![1594554214470](assets/1594554214470.png)

## 3、添加环境变量；

```
命令：vim /etc/profile
```

![1594554576590](assets/1594554576590.png)

- 立即生效；

  ```
  命令：source /etc/profile
  ```

  ![1594554683853](assets/1594554683853.png)

-  安装成功！ 

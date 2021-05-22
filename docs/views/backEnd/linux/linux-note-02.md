---
title: linux软连接的作用
---

## linux软连接的作用

> 介绍：
>
> -  Linux软链接，类似于windows系统的快捷键。譬如你将windows系统的D盘中某一个文件夹放在桌面上当做快捷键。
> - 平时在Linux机子上安装好一些工具之后我们就需要跑到那个源码安装的程序包里面执行启动命令，这样做比较麻烦，有没有直接在全局都通用的方法呢？也就是启动那些应用或者程序就像使用Linux自带的命令一样简单轻松而不必每次都跑到指定的源码目录中去执行。
> - 在安装目录中找到你需要的启动指令，并将其通过软连接的方式链接到`/usr/local/bin`目录下。

### 1、软连接的创建；

- 命令；`ln -s [源文件目录] [软连接名称]`

  ```bash
  # 表示把 /home/local/application/node-v12.18.2-linux-x64/bin/目录下的npm创建为软连接，名字为 npm
  ln -s /home/local/application/node-v12.18.2-linux-x64/bin/npm npm
  
  [root@iZbp156pkpio44mis76wmxZ /]# npm -v
  -bash: npm: command not found  # 不能再全局使用
  [root@iZbp156pkpio44mis76wmxZ /]# cd usr/local/bin/
  [root@iZbp156pkpio44mis76wmxZ bin]# ls
  node  pm2
  [root@iZbp156pkpio44mis76wmxZ bin]# ln -s /home/local/application/node-v12.18.2-linux-x64/bin/npm npm
  [root@iZbp156pkpio44mis76wmxZ bin]# ls
  node  npm  pm2
  [root@iZbp156pkpio44mis76wmxZ bin]# npm -v
  6.14.5
  [root@iZbp156pkpio44mis76wmxZ bin]# cd /
  [root@iZbp156pkpio44mis76wmxZ /]# npm -v
  6.14.5 # 可以再全局使用了
  [root@iZbp156pkpio44mis76wmxZ /]# ^C
  [root@iZbp156pkpio44mis76wmxZ /]# 
   
  ```

### 2、软连接的删除；

- 命令：

  ```bash
  rm -rf 【软链接地址】
  # 如果是rm -rf test/ 那么原目录下的文件都会被删除！！！ 
  rm -rf test #切记不要自动补全
  ```

  > 注意： **软链接地址**最后不能含有“/”，当含有“/”时，删除的是软链接目标目录下的资源，而不是软链接本身。 

### 3、软连接的修改；

- 命令：

  ```bsah
  ln -snf 【新目标目录】 【软链接地址】
  ```

  >  这里修改是指修改软链接的目标目录 

### 4、扩展说明；

1. linux下/bin和/usr/bin和/usr/local/bin的区别 [阅读原文](https://blog.csdn.net/baidu_31788709/article/details/90679657)

   ```
   /bin 是所有用户都可以访问并执行的可执行程序。包括超级用户及一般用户。
   /usr/bin 是系统安装时自带的一些可执行程序。即系统程序，轻易不要去动里面的东西，容易入坑。
   /usr/local/bin 是用户自行编译安装时默认的可执行程序的安装位置，这个不小心误删点什么，不会影响大局。
   ```

   
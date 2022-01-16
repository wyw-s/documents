---
title: 常用DOS命令
category: GoLang
date: 2022-01-16
---

## DOS操作系统

DOS操作系统是Microsoft公司推出的操作系统（在window之前的操作系统）。DOS是英文"Disk Operating System"的缩写，其中文含意是"磁盘操作系统"。DOS是单用户、单任务的操作系统（只能执行一个任务）

## DOS命令

在windows中，我们通过鼠标菜单等来操作系统，而在Dos操作系统中，要通过命令来操作系统，DOS操作系统的命令是一种面向磁盘的操作命令，不区分大小写。

## 命令学习

window给我们保留了类似DOS系统的操作界面，可以直接操作磁盘！

DOS也是一种操作系统，是在window出现以前用的，后来window出来后基本就没有人用了，但是当window崩溃的时候，还是要用dos方式解决，它是一种纯命令方式，cmd其实就是在windows状态下进入dos方式。

**开始 + r -> 输入cmd -> 出现黑窗口，表示进入了dos系统界面。**

```shell
# 切换盘符
C:\Users\wangy>d:
D:\>

# 显示文件夹目录
C:\Users\wangy>dir
 驱动器 C 中的卷是 OS
 卷的序列号是 6AFB-0533

 C:\Users\wangy 的目录

2021/11/21  23:36    <DIR>          .	# 表示当前目录
2021/11/21  23:36    <DIR>          ..	# 表示返回上一级
2021/09/03  22:10    <DIR>          .android
2022/01/16  01:52             8,801 .bash_history # 如果是文件则不显示<DIR>
2021/10/06  15:53    <DIR>          .cache
2021/11/20  17:02    <DIR>          .config
2021/07/17  13:05                 4 .dbshell
2021/12/12  01:59    <DIR>          .docker
2021/05/14  01:54    <DIR>          .dotnet
2021/08/29  14:04                52 .gitconfig
......
              13 个文件         33,639 字节
              28 个目录 131,322,605,568 可用字节

C:\Users\wangy>

# 进入下一级文件夹
D:\>cd nvm
D:\nvm>

# 清屏
D:\nvm>cls
D:\nvm>

# 切换历史命令
上下键即可切换

# 命令补全
D:\nvm>cd node_ + tab键

# 创建目录
D:\md a

# 删除目录
D:\rd a

# 复制文件
D:\copy file

# 删除文件
D:\del file
```


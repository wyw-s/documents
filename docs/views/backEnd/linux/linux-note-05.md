---
title: linux与环境变量
category: LINUX
date: 2021-05-02
---

> 环境变量：简要的说，就是指定一个目录，运行软件的时候，相关的程序将会按照该目录寻找相关文件。设置变量对于一般人最实用的功能就是：不用拷贝某些dll文件到系统目录中了，而path这一系统变量就是系统搜索dll文件的一系列路径。
>
> 在linux系统下，如果你下载并安装了应用程序，很有可能在键入它的名称时出现“command not found”的提示内容。如果每次都到安装目标文件夹内，找到可执行文件来进行操作就太繁琐了。这涉及到环境变量 PATH 的设置问题，而 PATH的设置也是在linux下定制环境变量的一个组成部分。linux 查看环境变量与设置环境变量在使用过程中很常见，本文整理了一些常用的与环境变量相关的命令。

## 变量种类

1. 按变量的生存周期来划分，Linux变量可分为两类： 
   - 永久的：需要修改配置文件，变量永久生效。 
   - 临时的：使用export命令声明即可，变量在关闭shell时失效。 

##  配置方法一：`export `

>  Linux export 命令用于设置或显示环境变量。在 shell 中执行程序时，shell 会提供一组环境变量。export 可新增，修改或删除环境变量，供后续执行的程序使用。export 的效力仅限于该次登陆操作。

1. 语法： `export [-fnp][变量名称]=[变量设置值]`， 

2. 参数说明：

   - -f 　代表[变量名称]中为函数名称。
   - -n 　删除指定的变量。变量实际上并未删除，只是不会输出到后续指令的执行环境中。
   - -p 　列出所有的shell赋予程序的环境变量。

3. 示例：

   - 设置环境变量；

     ```shell
     # 设置环境变量
     [root@iZbp156pkpio44mis76wmxZ /]# export HELLO="hello"
     # export or export -p 两种方式
     [root@iZbp156pkpio44mis76wmxZ /]# export
     ....
     declare -x HELLO="hello" # 设置成功
     declare -x HISTCONTROL="ignoredups"
     ....
     
     # or
     
     # 设置环境变量
     [root@iZbp156pkpio44mis76wmxZ /]# export PATH=$PATH:wangyawei/local
     [root@iZbp156pkpio44mis76wmxZ /]# export
     ....
     declare -x OLDPWD="/etc/init.d"
     declare -x PATH="/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/home/local/JDK/jdk1.8.0_251/bin:/home/local/mynode/node-v12.18.2-linux-x64/bin:/home/local/maven/apache-maven-3.6.3/bin:/root/bin:wangyawei/local" # 设置成功
     ......
     [root@iZbp156pkpio44mis76wmxZ /]#
     ```

   - 修改环境变量；

     ```shell
     # 查看 JAVA_HOME 环境变量及修改
     [root@iZbp156pkpio44mis76wmxZ /]# export -p | grep JAVA_HOME
     declare -x JAVA_HOME="/home/local/JDK/jdk1.8.0_251"
     [root@iZbp156pkpio44mis76wmxZ /]# export JAVA_HOME="/home/local/application/jdk1.8.0_251"
     [root@iZbp156pkpio44mis76wmxZ /]# export -p | grep JAVA_HOME
     declare -x JAVA_HOME="/home/local/application/jdk1.8.0_251"
     [root@iZbp156pkpio44mis76wmxZ /]#
     ```

   - 删除环境变量；

     ```shell
     [root@iZbp156pkpio44mis76wmxZ /]# export -n HELLO
     [root@iZbp156pkpio44mis76wmxZ /]# export -p
     ......
     declare -x CLASSPATH=".:/home/local/JDK/jdk1.8.0_251/lib"
     - declare -x HELLO="hello"  # 已删除
     declare -x HISTCONTROL="ignoredups"
     .....
     ```

     ::: warning

     变量实际上并未删除，只是不会输出到后续指令的执行环境中。

     :::

   - 导出一个函数；

     ```shell
     [root@iZbp156pkpio44mis76wmxZ /]# test () { echo "Test Function"; }
     [root@iZbp156pkpio44mis76wmxZ /]# export -f test
     [root@iZbp156pkpio44mis76wmxZ /]# test
     Test Function
     [root@iZbp156pkpio44mis76wmxZ /]#
     ```

   - 查看某一个环境变量；

     ```shell
     [root@iZbp156pkpio44mis76wmxZ /]# export -p | grep TERM
     declare -x TERM="cygwin"
     [root@iZbp156pkpio44mis76wmxZ /]#
     ```

   ::: warning

     该变量只在当前的shell(BASH)或其子shell(BASH)下是有效的，shell关闭了，变量也就失效了，再打开新shell时就没有这个变	量，需要使用的话还需要重新定义。 

   :::

## 配置方法一：`profile`

>  在 `/etc/profile`文件中添加变量【对所有用户生效(永久的)】  

1. 打开profile文件；

   ```shell
   [root@iZbp156pkpio44mis76wmxZ customer]# vim /etc/profile
   
   # /etc/profile
   
   # System wide environment and startup programs, for login setup
   # Functions and aliases go in /etc/bashrc
   
   # It's NOT a good idea to change this file unless you know what you
   # are doing. It's much better to create a custom.sh shell script in
   # /etc/profile.d/ to make custom changes to your environment, as this
   # will prevent the need for merging in future updates.
   ......
   export JAVA_HOME=/home/local/JDK/jdk1.8.0_251
   export PATH=$PATH:$JAVA_HOME/bin
   export CLASSPATH=.:$JAVA_HOME/lib
   export CATALINA_HOME=/home/local/tomcat
   export JAVA_HOME PATH CLASSPATH CATALINA_HOME
   ......
   
   ```

2. 添加或修改

   ```shell
   # 修改 JAVA_HOME （根据自己的jdk安装位置设置）
   export JAVA_HOME=/home/local/application/jdk1.8.0_251
   ```

   ::: warning

   生效时间：新开终端或者手动执行`source /etc/profile`生效;

   :::

## 配置方法三：`.bash_profile`

> 在用户目录下的.bash_profile文件中增加变量【对单一用户生效(永久的)】,用`vim`在用户目录下的.bash_profile文件中增加变量，改变量仅会对当前用户有效，并且是“永久的”。 这种方法更为安全，它可以把使用这些环境变量的权限控制到用户级别,这里是针对某一个特定的用户，如果你需要给某个用户权限使用这些环境变量，你只需要修改其个人用户主目录下的.bash_profile文件就可以了。通常.bash_profile和.bashrc认为效果一样，也就是此处在 .bashrc中增加环境变量也行。

1. 添加环境变量；

   ```shell
   [root@iZbp156pkpio44mis76wmxZ customer]# vim ~/.bash_profile
   JAVA_HOME=/home/local/application/jdk1.8.0_251
   ```

   ::: warning

   使用相同的用户打开新的终端时生效，或者手动source ~/.bash_profile生效

   :::

## 环境变量加载顺序

> Linux加载环境变量的顺序如下：
>
> 1. /etc/environment
> 2. /etc/profile
> 3. /etc/bashrc 或者 /etc/bash.bashrc
> 4. /etc/profile.d/test.sh
> 5. ~/.profile 或者 ~/.bash_profile
> 6. ~/.bashrc
>
> /etc/profile，/etc/bashrc 是系统全局环境变量设定 
> ~/.profile，~/.bashrc 用户家目录下的私有环境变量设定
>
> 当登入系统时候获得一个shell进程时，其读取环境设定档有三步 ：
> 1、首先读入的是全局环境变量设定档/etc/profile，然后根据其内容读取额外的设定的文档，如 /etc/profile.d和/etc/inputrc 。
> 2、然后根据不同使用者帐号，去其根目录读取~/.bash_profile，如果这读取不了就读取~/.bash_login，这个也读取不了才会读取 ~/.profile，这三个文档设定基本上是一样的，读取有优先关系 。其中，Unbutu默认没有~/.bash_profile文件，可新建。
> 3、最后在根据用户帐号读取~/.bashrc 。

## 查看环境变量

1.  显示已知的环境变量 

   ```shell
   [root@iZbp156pkpio44mis76wmxZ /]# echo $JAVA_HOME
   /home/local/application/jdk1.8.0_251
   [root@iZbp156pkpio44mis76wmxZ /]# 
   ```

2. 显示所有的环境变量 

   ```shell
   [root@iZbp156pkpio44mis76wmxZ /]# env
   ......
   JAVA_HOME=/home/local/application/jdk1.8.0_251
   LANG=en_US.UTF-8
   ......
   [root@iZbp156pkpio44mis76wmxZ /]# 
   
   ```

3.  显示所有本地定义的Shell变量 

   ```shell
   [root@iZbp156pkpio44mis76wmxZ /]# set
   ```

4. 列出所有的shell赋予程序的环境变量。

   ```shell
   [root@iZbp156pkpio44mis76wmxZ /]# export -p
   ......
   declare -x CLASSPATH=".:/home/local/JDK/jdk1.8.0_251/lib"
   declare -x HISTCONTROL="ignoredups"
   .....
   ```

5.  查看当前用户是什么;

   ```shell
   [root@iZbp156pkpio44mis76wmxZ /]# whoami
   root
   [root@iZbp156pkpio44mis76wmxZ /]# 
   ```

## 参考博文：

原文链接：https://blog.csdn.net/ljheee/article/details/53350116

原文链接：https://www.cnblogs.com/qiuhong10/p/7815943.html

原文链接：https://www.linuxprobe.com/environment-variable-configuration.html

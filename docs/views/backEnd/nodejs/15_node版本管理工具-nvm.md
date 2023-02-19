---
title: node版本管理工具-nvm
category: nodejs
autoGroup-7: nodejs扩展
tags:
  - nodejs
---

> 概述： nvm是一个nodejs的版本管理工具。我们可以通过它安装和切换不同版本的node.js。 

## Win环境

### 安装`nvm`；

- [传送门](https://github.com/coreybutler/nvm-windows/releases)
- 双击直接安装即可。

### 测试；

- 桌面打开cmd输入`nvm`,出现以下界面就说明安装成功；

  ```shell
  PS C:\Users\ASUS\Desktop> nvm
  
  Running version 1.1.7.
  
  Usage:
  
    nvm arch                     : Show if node is running in 32 or 64 bit mode.
    nvm install <version> [arch] : The version can be a node.js version or "latest" for the latest stable version.
                                   Optionally specify whether to install the 32 or 64 bit version (defaults to system arch).
                                   Set [arch] to "all" to install 32 AND 64 bit versions.
                                   Add --insecure to the end of this command to bypass SSL validation of the remote download server.
    nvm list [available]         : List the node.js installations. Type "available" at the end to see what can be installed. Aliased as ls.
    nvm on                       : Enable node.js version management.
    nvm off                      : Disable node.js version management.
    nvm proxy [url]              : Set a proxy to use for downloads. Leave [url] blank to see the current proxy.
                                   Set [url] to "none" to remove the proxy.
    nvm node_mirror [url]        : Set the node mirror. Defaults to https://nodejs.org/dist/. Leave [url] blank to use default url.
    nvm npm_mirror [url]         : Set the npm mirror. Defaults to https://github.com/npm/cli/archive/. Leave [url] blank to default url.
    nvm uninstall <version>      : The version must be a specific version.
    nvm use [version] [arch]     : Switch to use the specified version. Optionally specify 32/64bit architecture.
                                   nvm use <arch> will continue using the selected version, but switch to 32/64 bit mode.
    nvm root [path]              : Set the directory where nvm should store different versions of node.js.
                                   If <path> is not set, the current root will be displayed.
    nvm version                  : Displays the current running version of nvm for Windows. Aliased as v.
  
  PS C:\Users\ASUS\Desktop> nvm list
  
  No installations recognized.
  PS C:\Users\ASUS\Desktop>
  ```

### 下载指定版本的node.js

- 使用`nvm list`查看当前已安装的nodejs版本;（理论上应该是没有可用的版本的）；

- 使用`nvm install 8.9`来安装Nodejs8.9版本；使用`nvm list`查看；

  ```sh
  PS C:\Users\ASUS\Desktop> nvm list
  
    * 8.9.0 (Currently using 64-bit executable)
  PS C:\Users\ASUS\Desktop>
  ```

### 使用指定的Nodejs版本；

- 命令；* 表示当前正在使用的版本。

  ```shell
  # 使用nodsjs8.9版本；
  nvm use 15.8
  
  PS C:\Users\ASUS\Desktop> nvm use 8.9
  8.9.0
  Now using node v8.9.0 (64-bit)
  PS C:\Users\ASUS\Desktop> nvm list
  
      15.8.0
      10.0.0
    * 8.9.0 (Currently using 64-bit executable)
  PS C:\Users\ASUS\Desktop> node -v
  v8.9.0
  PS C:\Users\ASUS\Desktop>
  
  ```


### 卸载nvm

直接在`程序和功能`中找到`NVM for Windows`点击卸载即可；

### 注意

首次安装Nodejs请安装全局的即`nvm install 12.22.3 -g` ，不然的话不可以**全局使用**，全局安装的会在`C:\Program Files`文件夹下生成**nodejs软链接**，指向你nvm安装并当前使用的Nodejs版本。

## Linux 环境

### 下载安装包

[官网地址](https://links.jianshu.com/go?to=https%3A%2F%2Fgithub.com%2Fnvm-sh%2Fnvm%2Farchive%2Frefs%2Ftags%2Fv0.38.0.tar.gz)

```bash
wget https://github.com/nvm-sh/nvm/archive/refs/tags/v0.39.3.tar.gz
```

### 解压NVM

```bash
# 创建 .nvm 目录
mkdir /root/.nvm

# 解压
tar -zxvf v0.39.3.tar.gz --strip-components 1  -C /root/.nvm
```

### 环境配置

```bash
vim ~/.bashrc
```

### 配置生效

```bash
source ~/.bashrc
```

### 验证nvm

```bash
[root@iZbp156pkpio44mis76wmxZ ~]# nvm --version
0.39.3
```


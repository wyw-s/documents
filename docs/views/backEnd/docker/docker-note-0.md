---
title: docker安装
---

## win版Docker安装

> Docker 并非是一个通用的容器工具，它依赖于已存在并运行的 Linux 内核环境。Docker 实质上是在已经运行的 Linux 下制造了一个隔离的文件环境，因此它执行的效率几乎等同于所部署的 Linux 主机。因此，Docker 必须部署在 Linux 内核的系统上。如果其他系统想部署 Docker 就必须安装一个虚拟 Linux 环境。在 Windows 上部署 Docker 的方法都是先安装一个虚拟机，并在安装 Linux 系统的的虚拟机中运行 Docker。

1. 安装 Hyper-V;
    - Hyper-V 是微软开发的虚拟机，类似于 VMWare 或 VirtualBox，仅适用于 Windows 10。这是 Docker Desktop for Windows 所使用的虚拟机。
    - 安装步骤请查看另一篇文章：`win10 使用hyper-v`
2. 下载；[官方下载地址](https://hub.docker.com/editions/community/docker-ce-desktop-windows)
3. 双击安装；
4. 安装成功后，桌面会有docker鲸鱼的图标；
5. 双击鲸鱼图标启动；
6. 通知栏上会出现个小鲸鱼的图标![img](https://www.runoob.com/wp-content/uploads/2017/12/1513582421-4552-whale-x-win.png)，这表示 Docker 正在运行。

::: tip

*如果启动中遇到因 WSL 2 导致地错误，请安装* [WSL 2](https://docs.microsoft.com/zh-cn/windows/wsl/install-win10)*。*

:::

**测试docker是否安装成功；**

```shell
# 使用 docker -v
PS C:\Users\ASUS> docker -v
Docker version 20.10.6, build 370c289
PS C:\Users\ASUS>
```

**测试hello world**

```shell
# docker run hello-world 来载入测试镜像测试。以下表示成功
PS C:\Users\ASUS> docker run hello-world
Unable to find image 'hello-world:latest' locally
latest: Pulling from library/hello-world
b8dfde127a29: Pull complete
Digest: sha256:5122f6204b6a3596e048758cabba3c46b1c937a46b5be6225b835d091b90e46c
Status: Downloaded newer image for hello-world:latest

Hello from Docker!
This message shows that your installation appears to be working correctly.

To generate this message, Docker took the following steps:
 1. The Docker client contacted the Docker daemon.
 2. The Docker daemon pulled the "hello-world" image from the Docker Hub.
    (amd64)
 3. The Docker daemon created a new container from that image which runs the
    executable that produces the output you are currently reading.
 4. The Docker daemon streamed that output to the Docker client, which sent it
    to your terminal.

To try something more ambitious, you can run an Ubuntu container with:
 $ docker run -it ubuntu bash

Share images, automate workflows, and more with a free Docker ID:
 https://hub.docker.com/

For more examples and ideas, visit:
 https://docs.docker.com/get-started/

PS C:\Users\ASUS>
```


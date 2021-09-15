---
title: hello world
category: DOCKER
date: 2021-06-08
---

> Docker 允许你在容器内运行应用程序， 使用 **docker run** 命令来在容器内运行一个应用程序。

## 输出hello world

```shell
PS C:\Users\ASUS> docker run ubuntu:15.10 /bin/echo "Hello world"
Unable to find image 'ubuntu:15.10' locally
15.10: Pulling from library/ubuntu
7dcf5a444392: Pull complete
759aa75f3cee: Pull complete
3fa871dc8a2b: Pull complete
224c42ae46e7: Pull complete
Digest: sha256:02521a2d079595241c6793b2044f02eecf294034f31d6e235ac4b2b54ffc41f3
Status: Downloaded newer image for ubuntu:15.10
Hello world
PS C:\Users\ASUS>
```

各个参数解析：

- **docker:** Docker 的二进制执行文件。
- **run:** 与前面的 docker 组合来运行一个容器。
- **ubuntu:15.10** 指定要运行的镜像，**Docker 首先从本地主机上查找镜像是否存在**，如果不存在，Docker 就会从镜像仓库 Docker Hub 下载公共镜像。
- **/bin/echo "Hello world":** 在启动的容器里执行的命令

> 以上命令完整的意思可以解释为：Docker 以 ubuntu15.10 镜像创建一个新容器，然后在容器里执行 bin/echo "Hello world"，然后输出结果。

## 交互式的容器

> 我们通过 docker 的两个参数 -i -t，让 docker 运行的容器实现**"对话"**的能力：

```shell
PS C:\Users\ASUS> docker run -i -t ubuntu:15.10 /bin/bash
root@8a725ffa2d7b:/#
```

各个参数解析：

- **-t:** 在新容器内指定一个伪终端或终端。
- **-i:** 允许你对容器内的标准输入 (STDIN) 进行交互。

> 注意第二行 **root@8a725ffa2d7b:/#**，此时我们已进入一个 ubuntu15.10 系统的容器;

```shell
# 在容器中运行命令 cat /proc/version 和 ls 分别查看当前系统的版本信息和当前目录下的文件列表
root@8a725ffa2d7b:/# cat /proc/version
Linux version 5.4.72-microsoft-standard-WSL2 (oe-user@oe-host) (gcc version 8.2.0 (GCC)) #1 SMP Wed Oct 28 23:40:43 UTC 2020
root@8a725ffa2d7b:/# ls
bin  boot  dev  etc  home  lib  lib64  media  mnt  opt  proc  root  run  sbin  srv  sys  tmp  usr  var
root@8a725ffa2d7b:/#
```

通过运行 exit 命令或者使用 CTRL+D 来退出容器。

```sh
root@8a725ffa2d7b:/# exit
exit
PS C:\Users\ASUS>
```

> 意第三行中 **PS C:\Users\ASUS>** 表明我们已经退出了当前的容器，返回到当前的主机中。

## 后台模式

> 使用命令创建一个以进程方式运行的容器

```shell
PS C:\Users\ASUS> docker run -d ubuntu:15.10 /bin/sh -c "while true; do echo hello world; sleep 1; done"
0fb0e9c06a91be59d233afa078a9edbdcb10e9702fb6531ad777654ad8676a51
PS C:\Users\ASUS>
```

在输出中，我们看到一串长字符

0fb0e9c06a91be59d233afa078a9edbdcb10e9702fb6531ad777654ad8676a51

这个长字符串叫做容器 ID，对每个容器来说都是唯一的，我们可以通过容器 ID 来查看对应的容器发生了什么。

首先，我们需要确认容器有在运行，可以通过 **docker ps** 来查看：

```shell
PS C:\Users\ASUS> docker ps
CONTAINER ID   IMAGE          COMMAND                  CREATED              STATUS              PORTS     NAMES
0fb0e9c06a91   ubuntu:15.10   "/bin/sh -c 'while t…"   About a minute ago   Up About a minute             blissful_bassi
PS C:\Users\ASUS>
```

输出详情介绍：

**CONTAINER ID:** 容器 ID。

**IMAGE:** 使用的镜像。

**COMMAND:** 启动容器时运行的命令。

**CREATED:** 容器的创建时间。

**STATUS:** 容器状态。

状态有7种：

- created（已创建）
- restarting（重启中）
- running 或 Up（运行中）
- removing（迁移中）
- paused（暂停）
- exited（停止）
- dead（死亡）

**PORTS:** 容器的端口信息和使用的连接类型（tcp\udp）。

**NAMES:** 自动分配的容器名称。

在宿主主机内使用 **docker logs** 命令，查看容器内的标准输出：

```sh
PS C:\Users\ASUS> docker logs 0fb0e9c06a91
hello world
hello world
hello world
hello world
hello world
hello world
hello world
```

## 停止容器

> 我们使用 **docker stop ID**  命令来停止容器:

```shell
PS C:\Users\ASUS> docker stop 0fb0e9c06a91
0fb0e9c06a91
PS C:\Users\ASUS> docker ps
CONTAINER ID   IMAGE     COMMAND   CREATED   STATUS    PORTS     NAMES
PS C:\Users\ASUS>
```


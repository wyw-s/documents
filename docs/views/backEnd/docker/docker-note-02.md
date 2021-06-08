---
title: 容器的使用
---

## 获取镜像

> 如果我们本地没有 ubuntu 镜像，我们可以使用 docker pull 命令来载入 ubuntu 镜像：

```bash
PS C:\Users\ASUS> docker ps
CONTAINER ID   IMAGE     COMMAND   CREATED   STATUS    PORTS     NAMES
PS C:\Users\ASUS> docker pull ubuntu
Using default tag: latest
latest: Pulling from library/ubuntu
345e3491a907: Pull complete
57671312ef6f: Pull complete
5e9250ddb7d0: Pull complete
Digest: sha256:adf73ca014822ad8237623d388cedf4d5346aa72c270c5acc01431cc93e18e2d
Status: Downloaded newer image for ubuntu:latest
docker.io/library/ubuntu:latest
PS C:\Users\ASUS>
```

## 启动容器

> 以下命令使用 ubuntu 镜像启动一个容器，参数为以命令行模式进入该容器：

```shell
# docker run -it ubuntu /bin/bash 
wangyawei@yaweidediannao:/mnt/c/Users/ASUS$ docker run -it ubuntu /bin/bash
root@aa996b05499f:/# ls
bin  boot  dev  etc  home  lib  lib32  lib64  libx32  media  mnt  opt  proc  root  run  sbin  srv  sys  tmp  usr  var
root@aa996b05499f:/#
```

参数说明：

- **-i**: 交互式操作。
- **-t**: 终端。
- **ubuntu**: ubuntu 镜像。
- **/bin/bash**：放在镜像名后的是命令，这里我们希望有个交互式 Shell，因此用的是 /bin/bash。

```shell
# exit 退出终端
root@aa996b05499f:/# exit
exit
wangyawei@yaweidediannao:/mnt/c/Users/ASUS$
```

### 启动已停止运行的容器

查看所有容器；

```shell
# docker ps -a
wangyawei@yaweidediannao:/mnt/c/Users/ASUS$ docker ps -a
CONTAINER ID   IMAGE                    COMMAND                  CREATED          STATUS                      PORTS     NAMES
aa996b05499f   ubuntu                   "/bin/bash"              17 minutes ago   Exited (0) 6 seconds ago              hopeful_goodall
c1110cbddef9   ubuntu:latest            "/bin/bash"              4 hours ago      Up 4 hours                            myUbantu
0fb0e9c06a91   ubuntu:15.10             "/bin/sh -c 'while t…"   16 hours ago     Exited (137) 15 hours ago             blissful_bassi
8a725ffa2d7b   ubuntu:15.10             "/bin/bash"              16 hours ago     Exited (0) 16 hours ago               competent_taussig
4f3d7da2824d   ubuntu:15.10             "/bin/echo 'Hello wo…"   16 hours ago     Exited (0) 4 minutes ago              relaxed_wright
1621b955ca78   hello-world              "/hello"                 16 hours ago     Exited (0) 4 minutes ago              vigilant_ramanujan
05cb3af84499   docker/getting-started   "/docker-entrypoint.…"   25 hours ago     Exited (0) 25 hours ago               strange_davinci
wangyawei@yaweidediannao:/mnt/c/Users/ASUS$
```

启动一个已停止的容器：

```shell
wangyawei@yaweidediannao:/mnt/c/Users/ASUS$ docker start aa996b05499f
aa996b05499f
wangyawei@yaweidediannao:/mnt/c/Users/ASUS$ docker ps
CONTAINER ID   IMAGE           COMMAND       CREATED          STATUS         PORTS     NAMES
aa996b05499f   ubuntu          "/bin/bash"   18 minutes ago   Up 8 seconds             hopeful_goodall
c1110cbddef9   ubuntu:latest   "/bin/bash"   4 hours ago      Up 4 hours               myUbantu
wangyawei@yaweidediannao:/mnt/c/Users/ASUS$
```

### 后台运行;

在大部分的场景下，我们希望 docker 的服务是在后台运行的，我们可以过 **-d** 指定容器的运行模式。

```shell
wangyawei@yaweidediannao:/mnt/c/Users/ASUS$ docker run -itd --name ubuntu-test ubuntu /bin/bash
7af0632382d0a7307b9d8cdae5012cd0bf86aa8e32c14e2a1ab36d3049e7ee3b
wangyawei@yaweidediannao:/mnt/c/Users/ASUS$ docker ps
CONTAINER ID   IMAGE           COMMAND       CREATED          STATUS         PORTS     NAMES
7af0632382d0   ubuntu          "/bin/bash"   2 minutes ago    Up 2 minutes             ubuntu-test
aa996b05499f   ubuntu          "/bin/bash"   22 minutes ago   Up 4 minutes             hopeful_goodall
c1110cbddef9   ubuntu:latest   "/bin/bash"   4 hours ago      Up 4 hours               myUbantu
wangyawei@yaweidediannao:/mnt/c/Users/ASUS$
```

> **注：**加了 **-d** 参数默认不会进入容器，想要进入容器需要使用指令 **docker exec**。

## 停止一个容器;

```shell
wangyawei@yaweidediannao:/mnt/c/Users/ASUS$ docker stop 7af0632382d0
7af0632382d0
wangyawei@yaweidediannao:/mnt/c/Users/ASUS$ docker ps
CONTAINER ID   IMAGE           COMMAND       CREATED          STATUS         PORTS     NAMES
aa996b05499f   ubuntu          "/bin/bash"   24 minutes ago   Up 6 minutes             hopeful_goodall
c1110cbddef9   ubuntu:latest   "/bin/bash"   4 hours ago      Up 4 hours               myUbantu
wangyawei@yaweidediannao:/mnt/c/Users/ASUS$
```

##  重启一个容器

```shell
wangyawei@yaweidediannao:/mnt/c/Users/ASUS$ docker ps
CONTAINER ID   IMAGE           COMMAND       CREATED          STATUS         PORTS     NAMES
7af0632382d0   ubuntu          "/bin/bash"   5 minutes ago    Up 6 seconds             ubuntu-test
aa996b05499f   ubuntu          "/bin/bash"   25 minutes ago   Up 7 minutes             hopeful_goodall
c1110cbddef9   ubuntu:latest   "/bin/bash"   4 hours ago      Up 4 hours               myUbantu
wangyawei@yaweidediannao:/mnt/c/Users/ASUS$
```

## 进入容器

> 在使用 **-d** 参数时，容器启动后会进入后台。此时想要进入容器，可以通过以下指令进入：

- **docker attach**
- **docker exec**：推荐大家使用 docker exec 命令，因为此退出容器终端，不会导致容器的停止。

**attach 命令**

```shell
wangyawei@yaweidediannao:/mnt/c/Users/ASUS$ docker ps
CONTAINER ID   IMAGE           COMMAND       CREATED          STATUS         PORTS     NAMES
7af0632382d0   ubuntu          "/bin/bash"   5 minutes ago    Up 6 seconds             ubuntu-test
aa996b05499f   ubuntu          "/bin/bash"   25 minutes ago   Up 7 minutes             hopeful_goodall
c1110cbddef9   ubuntu:latest   "/bin/bash"   4 hours ago      Up 4 hours               myUbantu
wangyawei@yaweidediannao:/mnt/c/Users/ASUS$ docker attach 7af0632382d0
root@7af0632382d0:/# ls
bin  boot  dev  etc  home  lib  lib32  lib64  libx32  media  mnt  opt  proc  root  run  sbin  srv  sys  tmp  usr  var
root@7af0632382d0:/# exit
exit
wangyawei@yaweidediannao:/mnt/c/Users/ASUS$ docker ps
CONTAINER ID   IMAGE           COMMAND       CREATED          STATUS          PORTS     NAMES
aa996b05499f   ubuntu          "/bin/bash"   29 minutes ago   Up 11 minutes             hopeful_goodall
c1110cbddef9   ubuntu:latest   "/bin/bash"   4 hours ago      Up 4 hours                myUbantu
wangyawei@yaweidediannao:/mnt/c/Users/ASUS$
```

> **注意：** 如果从这个容器退出，会导致容器的停止。

**exec 命令**

```shell
wangyawei@yaweidediannao:/mnt/c/Users/ASUS$ docker exec -it 7af0632382d0 /bin/bash
Error response from daemon: Container 7af0632382d0a7307b9d8cdae5012cd0bf86aa8e32c14e2a1ab36d3049e7ee3b is not running
wangyawei@yaweidediannao:/mnt/c/Users/ASUS$ docker exec -it aa996b05499f /bin/bash
root@aa996b05499f:/# ls
bin  boot  dev  etc  home  lib  lib32  lib64  libx32  media  mnt  opt  proc  root  run  sbin  srv  sys  tmp  usr  var
root@aa996b05499f:/# exit
exit
wangyawei@yaweidediannao:/mnt/c/Users/ASUS$ docker ps
CONTAINER ID   IMAGE           COMMAND       CREATED          STATUS          PORTS     NAMES
aa996b05499f   ubuntu          "/bin/bash"   31 minutes ago   Up 13 minutes             hopeful_goodall
c1110cbddef9   ubuntu:latest   "/bin/bash"   4 hours ago      Up 4 hours                myUbantu
wangyawei@yaweidediannao:/mnt/c/Users/ASUS$
```

> **注意：** 如果从这个容器退出，容器不会停止，这就是为什么推荐大家使用 **docker exec** 的原因。

## 导出和导入容器

### **导出容器**

> 如果要导出本地某个容器，可以使用 **docker export** 命令。

```sh
wangyawei@yaweidediannao:/mnt/c/Users/ASUS$ docker ps
CONTAINER ID   IMAGE           COMMAND       CREATED          STATUS          PORTS     NAMES
aa996b05499f   ubuntu          "/bin/bash"   31 minutes ago   Up 13 minutes             hopeful_goodall
c1110cbddef9   ubuntu:latest   "/bin/bash"   4 hours ago      Up 4 hours                myUbantu
wangyawei@yaweidediannao:/mnt/c/Users/ASUS$ docker export aa996b05499f > ubuntu.tar
wangyawei@yaweidediannao:/mnt/c/Users/ASUS$ ll
total 97096
drwxrwxrwx 1 wangyawei wangyawei      512 Jun  6 15:20  ./
dr-xr-xr-x 1 wangyawei wangyawei      512 May 26 22:03  ../
drwxrwxrwx 1 wangyawei wangyawei      512 Feb 10 16:16  .AutoSignMachine/
drwxrwxrwx 1 wangyawei wangyawei      512 May 21 21:56  .Ld2VirtualBox/
drwxrwxrwx 1 wangyawei wangyawei      512 Mar  2  2018  .QtWebEngineProcess/
-rwxrwxrwx 1 wangyawei wangyawei 75085824 Jun  6 15:20  ubuntu.tar* # 导出的文件
'/mnt/c/Users/ASUS/AppData/Roaming/Microsoft/Windows/Start Menu'/
wangyawei@yaweidediannao:/mnt/c/Users/ASUS$
```

> 这样将导出容器快照到本地文件。

### **导入容器快照**

> 可以使用 docker import 从容器快照文件中再导入为镜像，以下实例将快照文件 ubuntu.tar 导入到镜像 test/ubuntu:v1:

```shell
wangyawei@yaweidediannao:/mnt/c/Users/ASUS$ cat ubuntu.tar | docker import - test/ubuntu:v1
sha256:e5b44748d7b698029a4919b2e9e11a5eae9e56d9360dd0ef35a3dc35e36f9579
wangyawei@yaweidediannao:/mnt/c/Users/ASUS$ docker images
REPOSITORY               TAG       IMAGE ID       CREATED          SIZE
test/ubuntu              v1        e5b44748d7b6   12 seconds ago   72.7MB
ubuntu                   latest    7e0aa2d69a15   6 weeks ago      72.7MB
docker/getting-started   latest    3ba8f2ff0727   2 months ago     27.9MB
hello-world              latest    d1165f221234   3 months ago     13.3kB
ubuntu                   15.10     9b9cb95443b5   4 years ago      137MB
wangyawei@yaweidediannao:/mnt/c/Users/ASUS$
```

## 删除容器

> 删除容器使用 **docker rm** 命令：

```shell
wangyawei@yaweidediannao:/mnt/c/Users/ASUS$ docker ps
CONTAINER ID   IMAGE           COMMAND       CREATED          STATUS          PORTS     NAMES
aa996b05499f   ubuntu          "/bin/bash"   47 minutes ago   Up 29 minutes             hopeful_goodall
c1110cbddef9   ubuntu:latest   "/bin/bash"   5 hours ago      Up 5 hours                myUbantu
wangyawei@yaweidediannao:/mnt/c/Users/ASUS$ docker rm -f c1110cbddef9
c1110cbddef9
wangyawei@yaweidediannao:/mnt/c/Users/ASUS$ docker ps
CONTAINER ID   IMAGE     COMMAND       CREATED          STATUS          PORTS     NAMES
aa996b05499f   ubuntu    "/bin/bash"   48 minutes ago   Up 30 minutes             hopeful_goodall
wangyawei@yaweidediannao:/mnt/c/Users/ASUS$
```


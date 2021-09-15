---
title: 创建镜像
category: DOCKER
date: 2021-06-08
---

> 当运行容器时，使用的镜像如果在本地中不存在，docker 就会自动从 docker 镜像仓库中下载，默认是从 Docker Hub 公共镜像源下载。

## 查看本机镜像

> 我们可以使用 **docker images** 来列出本地主机上的镜像。

```sh
wangyawei@yaweidediannao:/mnt/c/Users/ASUS$ docker images
REPOSITORY               TAG       IMAGE ID       CREATED        SIZE
ubuntu                   latest    7e0aa2d69a15   6 weeks ago    72.7MB
docker/getting-started   latest    3ba8f2ff0727   2 months ago   27.9MB
hello-world              latest    d1165f221234   3 months ago   13.3kB
ubuntu                   15.10     9b9cb95443b5   4 years ago    137MB
training/webapp          latest    6fae60ef3446   6 years ago    349MB
wangyawei@yaweidediannao:/mnt/c/Users/ASUS$
```

各个选项说明:

- **REPOSITORY：**表示镜像的仓库源
- **TAG：**镜像的标签
- **IMAGE ID：**镜像ID
- **CREATED：**镜像创建时间
- **SIZE：**镜像大小

同一仓库源可以有多个 TAG，代表这个仓库源的不同个版本，如 ubuntu 仓库源里，有 15.10、14.04 等多个不同的版本，我们使用 REPOSITORY:TAG 来定义不同的镜像。

所以，我们如果要使用版本为15.10的ubuntu系统镜像来运行容器时，命令如下：

```shell
wangyawei@yaweidediannao:/mnt/c/Users/ASUS$ docker run -t -i ubuntu:15.10 /bin/bash
root@7a90e165a7c9:/# ls
bin  boot  dev  etc  home  lib  lib64  media  mnt  opt  proc  root  run  sbin  srv  sys  tmp  usr  var
root@7a90e165a7c9:/#
```

参数说明：

- **-i**: 交互式操作。
- **-t**: 终端。
- **ubuntu:15.10**: 这是指用 ubuntu 15.10 版本镜像为基础来启动容器。
- **/bin/bash**：放在镜像名后的是命令，这里我们希望有个交互式 Shell，因此用的是 /bin/bash。

::: tip

如果你不指定一个镜像的版本标签，例如你只使用 ubuntu，docker 将默认使用 ubuntu:latest 镜像。

:::

## 获取新镜像

> 当我们在本地主机上使用一个不存在的镜像时 Docker 就会自动下载这个镜像。如果我们想预先下载这个镜像，我们可以使用 docker pull 命令来下载它。

```sh
wangyawei@yaweidediannao:/mnt/c/Users/ASUS$ docker pull ubuntu:13.10
13.10: Pulling from library/ubuntu
Image docker.io/library/ubuntu:13.10 uses outdated schema1 manifest format. Please upgrade to a schema2 image for better future compatibility. More information at https://docs.docker.com/registry/spec/deprecated-schema-v1/
a3ed95caeb02: Pull complete
0d8710fc57fd: Pull complete
5037c5cd623d: Pull complete
83b53423b49f: Pull complete
e9e8bd3b94ab: Pull complete
7db00e6b6e5e: Pull complete
Digest: sha256:403105e61e2d540187da20d837b6a6e92efc3eb4337da9c04c191fb5e28c44dc
Status: Downloaded newer image for ubuntu:13.10
docker.io/library/ubuntu:13.10
wangyawei@yaweidediannao:/mnt/c/Users/ASUS$
```

下载完成后，我们可以直接使用这个镜像来运行容器。

## 查找镜像

> 我们可以从 Docker Hub 网站来搜索镜像，Docker Hub 网址为： **https://hub.docker.com/**，我们也可以使用 docker search 命令来搜索镜像。比如我们需要一个 httpd 的镜像来作为我们的 web 服务。我们可以通过 docker search 命令搜索 httpd 来寻找适合我们的镜像。

```sh
wangyawei@yaweidediannao:/mnt/c/Users/ASUS$ docker search httpd
NAME                                    DESCRIPTION                                     STARS     OFFICIAL   AUTOMATED
httpd                                   The Apache HTTP Server Project                  3529      [OK]
centos/httpd-24-centos7                 Platform for running Apache httpd 2.4 or bui…   40
centos/httpd                                                                            34                   [OK]
arm32v7/httpd                           The Apache HTTP Server Project                  9
salim1983hoop/httpd24                   Dockerfile running apache config                2                    [OK]
solsson/httpd-openidc                   mod_auth_openidc on official httpd image, ve…   2                    [OK]
hypoport/httpd-cgi                      httpd-cgi                                       2                    [OK]
publici/httpd                           httpd:latest                                    1                    [OK]
clearlinux/httpd                        httpd HyperText Transfer Protocol (HTTP) ser…   1
jonathanheilmann/httpd-alpine-rewrite   httpd:alpine with enabled mod_rewrite           1                    [OK]
lead4good/httpd-fpm                     httpd server which connects via fcgi proxy h…   1                    [OK]
dockerpinata/httpd                                                                      1
manageiq/httpd                          Container with httpd, built on CentOS for Ma…   1                    [OK]
inanimate/httpd-ssl                     A play container with httpd, ssl enabled, an…   1                    [OK]
dariko/httpd-rproxy-ldap                Apache httpd reverse proxy with LDAP authent…   1                    [OK]
centos/httpd-24-centos8                                                                 0
appertly/httpd                          Customized Apache HTTPD that uses a PHP-FPM …   0                    [OK]
amd64/httpd                             The Apache HTTP Server Project                  0
e2eteam/httpd                                                                           0
manageiq/httpd_configmap_generator      Httpd Configmap Generator                       0                    [OK]
trollin/httpd                                                                           0
manasip/httpd                                                                           0
ysli/httpd                              Httpd for DeepWeb                               0                    [OK]
itsziget/httpd24                        Extended HTTPD Docker image based on the off…   0                    [OK]
interlutions/httpd                      httpd docker image with debian-based config …   0                    [OK]
wangyawei@yaweidediannao:/mnt/c/Users/ASUS$
```

**NAME:** 镜像仓库源的名称

**DESCRIPTION:** 镜像的描述

**OFFICIAL:** 是否 docker 官方发布

**stars:** 类似 Github 里面的 star，表示点赞、喜欢的意思。

**AUTOMATED:** 自动构建。

## 拉取镜像

```shell
wangyawei@yaweidediannao:/mnt/c/Users/ASUS$  docker pull httpd
Using default tag: latest
latest: Pulling from library/httpd
69692152171a: Pull complete
7284b4e0cc7b: Pull complete
3678b2d55ccd: Pull complete
aeb67982a725: Pull complete
06954f8169fd: Pull complete
Digest: sha256:48bae0ac5d0d75168f1c1282c0eb21b43302cb1b5c5dc9fa3b4a758ccfb36fe9
Status: Downloaded newer image for httpd:latest
docker.io/library/httpd:latest
wangyawei@yaweidediannao:/mnt/c/Users/ASUS$ docker run httpd
```

下载完成后，我们就可以使用这个镜像了。

## 创建镜像

当我们从 docker 镜像仓库中下载的镜像不能满足我们的需求时，我们可以通过以下两种方式对镜像进行更改。

- 1、从已经创建的容器中更新镜像，并且提交这个镜像
- 2、使用 Dockerfile 指令来创建一个新的镜像

### 更新镜像

更新镜像之前，我们需要使用镜像来创建一个容器。

```shell
wangyawei@yaweidediannao:/mnt/c/Users/ASUS$ docker run -t -i ubuntu:15.10 /bin/bash
root@f601f176aa29:/# apt-get update
Ign http://archive.ubuntu.com wily InRelease
Ign http://archive.ubuntu.com wily-updates InRelease
Ign http://archive.ubuntu.com wily-security InRelease
Ign http://archive.ubuntu.com wily Release.gpg
Ign http://archive.ubuntu.com wily-updates Release.gpg
Ign http://archive.ubuntu.com wily-security Release.gpg
Ign http://archive.ubuntu.com wily Release
Ign http://archive.ubuntu.com wily-updates Release
Ign http://archive.ubuntu.com wily-security Release
....
```

使用`docker ps -a`找到创建的容器的id。我们可以通过命令 docker commit 来提交容器副本。

```shell
wangyawei@yaweidediannao:/mnt/c/Users/ASUS$ docker commit -m="has update" -a="runoob"  f601f176aa29 runoob/ubuntu:v2
sha256:3a9b73618178c6f0ce4ec1c287de0787b84fddedfa3eff058af358723b3b19e9
wangyawei@yaweidediannao:/mnt/c/Users/ASUS$
```

各个参数说明：

- **-m:** 提交的描述信息
- **-a:** 指定镜像作者
- **e218edb10161：**容器 ID
- **runoob/ubuntu:v2:** 指定要创建的目标镜像名

我们可以使用 **docker images** 命令来查看我们的新镜像 **runoob/ubuntu:v2**：

```sh
wangyawei@yaweidediannao:/mnt/c/Users/ASUS$ docker images
REPOSITORY               TAG       IMAGE ID       CREATED         SIZE
runoob/ubuntu            v2        3a9b73618178   4 minutes ago   137MB # 此处
httpd                    latest    39c2d1c93266   11 days ago     138MB
ubuntu                   latest    7e0aa2d69a15   6 weeks ago     72.7MB
docker/getting-started   latest    3ba8f2ff0727   2 months ago    27.9MB
hello-world              latest    d1165f221234   3 months ago    13.3kB
ubuntu                   15.10     9b9cb95443b5   4 years ago     137MB
training/webapp          latest    6fae60ef3446   6 years ago     349MB
ubuntu                   13.10     7f020f7bf345   6 years ago     185MB
wangyawei@yaweidediannao:/mnt/c/Users/ASUS$
```

使用我们的新镜像 **runoob/ubuntu** 来启动一个容器

```sh
wangyawei@yaweidediannao:/mnt/c/Users/ASUS$ docker run -t -i runoob/ubuntu:v2 /bin/bash
root@28c174d9b40f:/# ls
bin  boot  dev  etc  home  lib  lib64  media  mnt  opt  proc  root  run  sbin  srv  sys  tmp  usr  var
root@28c174d9b40f:/#
```

### 构建镜像

> 我们使用命令 **docker build** ， 从零开始来创建一个新的镜像。为此，我们需要创建一个 Dockerfile 文件，其中包含一组指令来告诉 Docker 如何构建我们的镜像。

```shell
wangyawei@yaweidediannao:/mnt/c/Users/ASUS$ cat Dockerfile
FROM    centos:7
MAINTAINER      Fisher "fisher@sudops.com"
RUN     useradd "runoob"
RUN     /bin/echo 'runoob:123456' |chpasswd
RUN     /bin/echo -e "LANG=\"en_US.UTF-8\"" >/etc/default/local
EXPOSE  22
EXPOSE  80
CMD     /usr/sbin/sshd -D
wangyawei@yaweidediannao:/mnt/c/Users/ASUS$
```

> 每一个指令都会在镜像上创建一个新的层，每一个指令的**前缀都必须是大写**的。
>
> 第一条FROM，指定使用哪个镜像源
>
> RUN 指令告诉docker 在镜像内执行命令，安装了什么。。。

构建镜像；

```shell
wangyawei@yaweidediannao:~/test$ docker build -t runoob/centos:7 .
[+] Building 34.4s (8/8) FINISHED
 => [internal] load build definition from Dockerfile                                                                                                   0.1s
 => => transferring dockerfile: 286B                                                                                                                   0.0s
 => [internal] load .dockerignore                                                                                                                      0.0s
 => => transferring context: 2B                                                                                                                        0.0s
 => [internal] load metadata for docker.io/library/centos:7                                                                                           16.9s
 => [1/4] FROM docker.io/library/centos:7@sha256:0f4ec88e21daf75124b8a9e5ca03c37a5e937e0e108a255d890492430789b60e                                     14.5s
 => => resolve docker.io/library/centos:7@sha256:0f4ec88e21daf75124b8a9e5ca03c37a5e937e0e108a255d890492430789b60e                                      0.0s
 => => sha256:0f4ec88e21daf75124b8a9e5ca03c37a5e937e0e108a255d890492430789b60e 1.20kB / 1.20kB                                                         0.0s
 => => sha256:e4ca2ed0202e76be184e75fb26d14bf974193579039d5573fb2348664deef76e 529B / 529B                                                             0.0s
 => => sha256:8652b9f0cb4c0599575e5a003f5906876e10c1ceb2ab9fe1786712dac14a50cf 2.75kB / 2.75kB                                                         0.0s
 => => sha256:2d473b07cdd5f0912cd6f1a703352c82b512407db6b05b43f2553732b55df3bc 76.10MB / 76.10MB                                                       9.6s
 => => extracting sha256:2d473b07cdd5f0912cd6f1a703352c82b512407db6b05b43f2553732b55df3bc                                                              4.6s
 => [2/4] RUN     useradd "runoob"                                                                                                                     1.6s
 => [3/4] RUN     /bin/echo 'runoob:123456' |chpasswd                                                                                                  0.6s
 => [4/4] RUN     /bin/echo -e "LANG="en_US.UTF-8"" >/etc/default/local                                                                                0.5s
 => exporting to image                                                                                                                                 0.1s
 => => exporting layers                                                                                                                                0.1s
 => => writing image sha256:bfc14340e7fa9da9a815afcc55a7d7c5d3a661965f1d693fe84468fab99b5739                                                           0.0s
 => => naming to docker.io/runoob/centos:7                                                                                                             0.0s

Use 'docker scan' to run Snyk tests against images to find vulnerabilities and learn how to fix them
wangyawei@yaweidediannao:~/test$ docker images
REPOSITORY               TAG       IMAGE ID       CREATED          SIZE
runoob/centos            7         bfc14340e7fa   56 seconds ago   204MB # 创建的镜像
runoob/ubuntu            v2        3a9b73618178   44 minutes ago   137MB
httpd                    latest    39c2d1c93266   11 days ago      138MB
ubuntu                   latest    7e0aa2d69a15   6 weeks ago      72.7MB
docker/getting-started   latest    3ba8f2ff0727   2 months ago     27.9MB
hello-world              latest    d1165f221234   3 months ago     13.3kB
ubuntu                   15.10     9b9cb95443b5   4 years ago      137MB
training/webapp          latest    6fae60ef3446   6 years ago      349MB
ubuntu                   13.10     7f020f7bf345   6 years ago      185MB
wangyawei@yaweidediannao:~/test$
```

参数说明：

- **-t** ：指定要创建的目标镜像名
- **.** ：Dockerfile 文件所在目录，可以指定Dockerfile 的绝对路径

### 创建容器

```sh
wangyawei@yaweidediannao:~/test$ docker run -t -i runoob/centos:7  /bin/bash
[root@1b9dbb4f6ced /]# ls
anaconda-post.log  bin  dev  etc  home  lib  lib64  media  mnt  opt  proc  root  run  sbin  srv  sys  tmp  usr  var
[root@1b9dbb4f6ced /]#
```

### 设置镜像标签

> 我们可以使用 docker tag 命令，为镜像添加一个新的标签。

```sh
wangyawei@yaweidediannao:~/test$ docker tag bfc14340e7fa runoob/centos:dev
wangyawei@yaweidediannao:~/test$ docker images
REPOSITORY               TAG       IMAGE ID       CREATED          SIZE
runoob/centos            7         bfc14340e7fa   8 minutes ago    204MB  # 老标签
runoob/centos            dev       bfc14340e7fa   8 minutes ago    204MB  # 新标签
runoob/ubuntu            v2        3a9b73618178   51 minutes ago   137MB
httpd                    latest    39c2d1c93266   11 days ago      138MB
ubuntu                   latest    7e0aa2d69a15   6 weeks ago      72.7MB
docker/getting-started   latest    3ba8f2ff0727   2 months ago     27.9MB
hello-world              latest    d1165f221234   3 months ago     13.3kB
ubuntu                   15.10     9b9cb95443b5   4 years ago      137MB
training/webapp          latest    6fae60ef3446   6 years ago      349MB
ubuntu                   13.10     7f020f7bf345   6 years ago      185MB
wangyawei@yaweidediannao:~/test$
```


---
title: 运行web应用
category: DOCKER
date: 2021-06-08
---

> 使用 docker 构建一个 web 应用程序。我们将在docker容器中运行一个 Python Flask 应用来运行一个web应用。

## hello world

拉取一个镜像并运行

```shell
wangyawei@yaweidediannao:/mnt/c/Users/ASUS$ docker pull training/webapp
Using default tag: latest
latest: Pulling from training/webapp
Image docker.io/training/webapp:latest uses outdated schema1 manifest format. Please upgrade to a schema2 image for better future compatibility. More information at https://docs.docker.com/registry/spec/deprecated-schema-v1/
e190868d63f8: Pull complete
909cd34c6fd7: Pull complete
0b9bfabab7c1: Pull complete
a3ed95caeb02: Pull complete
10bbbc0fc0ff: Pull complete
fca59b508e9f: Pull complete
e7ae2541b15b: Pull complete
9dd97ef58ce9: Pull complete
a4c1b0cb7af7: Pull complete
Digest: sha256:06e9c1983bd6d5db5fba376ccd63bfa529e8d02f23d5079b8f74a616308fb11d
Status: Downloaded newer image for training/webapp:latest
docker.io/training/webapp:latest
wangyawei@yaweidediannao:/mnt/c/Users/ASUS$ docker run -d -P training/webapp python app.py
fd47761291acb8c593446fafc242fae0083b55a9267736176954151503d04b41
wangyawei@yaweidediannao:/mnt/c/Users/ASUS$
```

参数说明:

- **-d:**让容器在后台运行。
- **-P:**将容器内部使用的网络端口随机映射到我们使用的主机上。

## 查看 WEB 应用容器

> 使用 docker ps 来查看我们正在运行的容器：

```shell
wangyawei@yaweidediannao:/mnt/c/Users/ASUS$ docker ps
CONTAINER ID   IMAGE             COMMAND           CREATED             STATUS             PORTS
   NAMES
fd47761291ac   training/webapp   "python app.py"   2 minutes ago       Up 2 minutes       0.0.0.0:49153->5000/tcp, :::49153->5000/tcp   unruffled_jennings
aa996b05499f   ubuntu            "/bin/bash"       About an hour ago   Up About an hour
   hopeful_goodall
wangyawei@yaweidediannao:/mnt/c/Users/ASUS$
```

> 这里多了个端口信息：0.0.0.0:49153->5000/tcp；
>
> Docker 开放了 5000 端口（默认 Python Flask 端口）映射到主机端口 49153上。这时我们可以通过浏览器访问：`http://127.0.0.1:49153/`WEB应用；

我们也可以通过 -p 参数来设置不一样的端口：

```shell
wangyawei@yaweidediannao:/mnt/c/Users/ASUS$ docker run -d -p 5000:5000 training/webapp python app.py
8075924b1921aa542481db7b599fdf1bf63011cdd2ba21fa87a4d70eaf665abf
wangyawei@yaweidediannao:/mnt/c/Users/ASUS$ docker ps
CONTAINER ID   IMAGE             COMMAND           CREATED             STATUS             PORTS
   NAMES
8075924b1921   training/webapp   "python app.py"   8 seconds ago       Up 3 seconds       0.0.0.0:5000->5000/tcp, :::5000->5000/tcp     reverent_moore
fd47761291ac   training/webapp   "python app.py"   5 minutes ago       Up 5 minutes       0.0.0.0:49153->5000/tcp, :::49153->5000/tcp   unruffled_jennings
aa996b05499f   ubuntu            "/bin/bash"       About an hour ago   Up About an hour
   hopeful_goodall
wangyawei@yaweidediannao:/mnt/c/Users/ASUS$
```

> 容器内部的 5000 端口映射到我们本地主机的 5000 端口上。

## 网络端口的快捷方式

> 通过 **docker ps** 命令可以查看到容器的端口映射，**docker** 还提供了另一个快捷方式 **docker port**，使用 **docker port** 可以查看指定 （ID 或者名字）容器的某个确定端口映射到宿主机的端口号。

```shell
wangyawei@yaweidediannao:/mnt/c/Users/ASUS$ docker ps
CONTAINER ID   IMAGE             COMMAND           CREATED             STATUS             PORTS
   NAMES
8075924b1921   training/webapp   "python app.py"   8 seconds ago       Up 3 seconds       0.0.0.0:5000->5000/tcp, :::5000->5000/tcp     reverent_moore
fd47761291ac   training/webapp   "python app.py"   5 minutes ago       Up 5 minutes       0.0.0.0:49153->5000/tcp, :::49153->5000/tcp   unruffled_jennings
aa996b05499f   ubuntu            "/bin/bash"       About an hour ago   Up About an hour
   hopeful_goodall
wangyawei@yaweidediannao:/mnt/c/Users/ASUS$ docker port 8075924b1921
5000/tcp -> 0.0.0.0:5000
5000/tcp -> :::5000
wangyawei@yaweidediannao:/mnt/c/Users/ASUS$ docker port  reverent_moore
5000/tcp -> 0.0.0.0:5000
5000/tcp -> :::5000
wangyawei@yaweidediannao:/mnt/c/Users/ASUS$
```

## 查看日志

> docker logs [ID或者名字] 可以查看容器内部的标准输出。

```shell
wangyawei@yaweidediannao:/mnt/c/Users/ASUS$ docker logs -f 8075924b1921
 * Running on http://0.0.0.0:5000/ (Press CTRL+C to quit)
172.17.0.1 - - [06/Jun/2021 08:06:29] "GET / HTTP/1.1" 200 -
172.17.0.1 - - [06/Jun/2021 08:06:29] "GET /favicon.ico HTTP/1.1" 404 -
```

**-f:** 让 **docker logs** 像使用 **tail -f** 一样来输出容器内部的标准输出。

从上面，我们可以看到应用程序使用的是 5000 端口并且能够查看到应用程序的访问日志。

## 查看容器进程

> 们还可以使用 docker top name/id 来查看容器内部运行的进程

```shell
wangyawei@yaweidediannao:/mnt/c/Users/ASUS$ docker top 8075924b1921
UID                 PID                 PPID                C                   STIME               TTY                 TIME
       CMD
root                2800                2779                0                   08:05               ?                   00:00:00            python app.py
wangyawei@yaweidediannao:/mnt/c/Users/ASUS$
```

## 检查应用程序

> 使用 **docker inspect** name/id  来查看 Docker 的底层信息。它会返回一个 JSON 文件记录着 Docker 容器的配置和状态信息。

```sh
wangyawei@yaweidediannao:/mnt/c/Users/ASUS$ docker inspect 8075924b1921
[
    {
        "Id": "8075924b1921aa542481db7b599fdf1bf63011cdd2ba21fa87a4d70eaf665abf",
        "Created": "2021-06-06T08:05:16.6358518Z",
        "Path": "python",
        "Args": [
            "app.py"
        ],
        "State": {
            "Status": "running",
            "Running": true,
            "Paused": false,
            "Restarting": false,
            "OOMKilled": false,
            "Dead": false,
            "Pid": 2800,
            "ExitCode": 0,
            "Error": "",
            "StartedAt": "2021-06-06T08:05:21.0384116Z",
            "FinishedAt": "0001-01-01T00:00:00Z"
        },
        "Image": "sha256:6fae60ef344644649a39240b94d73b8ba9c67f898ede85cf8e947a887b3e6557",
        "ResolvConfPath": "/var/lib/docker/containers/8075924b1921aa542481db7b599fdf1bf63011cdd2ba21fa87a4d70eaf665abf/resolv.conf",
    }
]
wangyawei@yaweidediannao:/mnt/c/Users/ASUS$
```

## 停止应用容器

```sh
wangyawei@yaweidediannao:/mnt/c/Users/ASUS$ docker stop 8075924b1921
8075924b1921
wangyawei@yaweidediannao:/mnt/c/Users/ASUS$ ps
```

## 重启应用容器

已经停止的容器，我们可以使用命令 docker start 来启动。

```shell
wangyawei@yaweidediannao:/mnt/c/Users/ASUS$ docker start 8075924b1921
8075924b1921
wangyawei@yaweidediannao:/mnt/c/Users/ASUS$
```

docker ps -l 查询最后一次创建的容器：

```sh
wangyawei@yaweidediannao:/mnt/c/Users/ASUS$ docker ps -l
CONTAINER ID   IMAGE             COMMAND           CREATED          STATUS          PORTS                                       NAMES
8075924b1921   training/webapp   "python app.py"   18 minutes ago   Up 38 seconds   0.0.0.0:5000->5000/tcp, :::5000->5000/tcp   reverent_moore
wangyawei@yaweidediannao:/mnt/c/Users/ASUS$
```

## 移除WEB应用容器

> 我们可以使用 docker rm 命令来删除不需要的容器, **删除之前请先停止该容器**

```sh
wangyawei@yaweidediannao:/mnt/c/Users/ASUS$ docker rm 8075924b1921
8075924b1921
```

> 删除容器时，容器必须是停止状态，否则会报如下错误

```sh
wangyawei@yaweidediannao:/mnt/c/Users/ASUS$ docker rm 8075924b1921
Error response from daemon: You cannot remove a running container 8075924b1921aa542481db7b599fdf1bf63011cdd2ba21fa87a4d70eaf665abf. Stop the container before attempting removal or force remove
```


---
title: Linux 查看磁盘空间
category: LINUX
date: 2021-05-02
---

> Linux 查看磁盘空间可以使用 **df** 和 **du** 命令。

## `df`

> df 以磁盘分区为单位查看文件系统，可以获取硬盘被占用了多少空间，目前还剩下多少空间等信息。例如，我们使用**df -h**命令来查看磁盘信息， **-h** 选项为根据大小适当显示：

```sh
wangyawei@yaweidediannao:/$ df -h
Filesystem      Size  Used Avail Use% Mounted on
/dev/sdd        251G  1.2G  238G   1% /
tmpfs           4.7G  401M  4.3G   9% /mnt/wsl
/dev/sdc        251G  868M  238G   1% /mnt/wsl/docker-desktop-data/isocache
none            4.7G   12K  4.7G   1% /mnt/wsl/docker-desktop/shared-sockets/host-services
/dev/sdb        251G  130M  239G   1% /mnt/wsl/docker-desktop/docker-desktop-proxy
/dev/loop0      430M  430M     0 100% /mnt/wsl/docker-desktop/cli-tools
tools           238G  153G   86G  65% /init
none            4.7G     0  4.7G   0% /dev
none            4.7G   16K  4.7G   1% /run
none            4.7G     0  4.7G   0% /run/lock
none            4.7G     0  4.7G   0% /run/shm
none            4.7G     0  4.7G   0% /run/user
tmpfs           4.7G     0  4.7G   0% /sys/fs/cgroup
C:\             238G  153G   86G  65% /mnt/c
D:\             100G   24G   77G  24% /mnt/d
E:\             754G  540G  215G  72% /mnt/e
F:\              78G   38G   41G  49% /mnt/f
wangyawei@yaweidediannao:/$
```

1. **显示内容参数说明：**

   - **Filesystem**：文件系统
   - **Size**： 分区大小
   - **Used**： 已使用容量
   - **Avail**： 还可以使用的容量
   - **Use%**： 已用百分比
   - **Mounted on**： 挂载点

2. **相关命令：**

   ```sh
   # df -hl：查看磁盘剩余空间
   wangyawei@yaweidediannao:/$ df -hl
   Filesystem      Size  Used Avail Use% Mounted on
   /dev/sdd        251G  1.2G  238G   1% /
   tmpfs           4.7G  401M  4.3G   9% /mnt/wsl
   /dev/sdc        251G  868M  238G   1% /mnt/wsl/docker-desktop-data/isocache
   none            4.7G   12K  4.7G   1% /mnt/wsl/docker-desktop/shared-sockets/host-services
   /dev/sdb        251G  130M  239G   1% /mnt/wsl/docker-desktop/docker-desktop-proxy
   /dev/loop0      430M  430M     0 100% /mnt/wsl/docker-desktop/cli-tools
   tools           238G  153G   86G  65% /init
   none            4.7G     0  4.7G   0% /dev
   none            4.7G   16K  4.7G   1% /run
   none            4.7G     0  4.7G   0% /run/lock
   none            4.7G     0  4.7G   0% /run/shm
   none            4.7G     0  4.7G   0% /run/user
   tmpfs           4.7G     0  4.7G   0% /sys/fs/cgroup
   
   # du -sh [目录名]：返回该目录的大小
   wangyawei@yaweidediannao:/$ du -sh /dev/sdb
   0       /dev/sdb
   wangyawei@yaweidediannao:/$
   ```

## `du`

> **du** 的英文原义为 **disk usage**，含义为显示磁盘空间的使用情况，用于查看当前目录的总大小。

```shell
# 看当前目录的大小：
[root@iZbp156pkpio44mis76wmxZ patient]# du -sh
3.1M    
[root@iZbp156pkpio44mis76wmxZ patient]# du -h test
608K    test/test6
308K    test/test4
4.0K    test/scf/lib
4.0K    test/scf/service/deploy/product
```

## 参考资料

https://www.runoob.com/w3cnote/linux-view-disk-space.html


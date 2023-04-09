---
title: 笔记本centos系统合上屏幕不休眠
category: LINUX
date: 2023-04-09
---

> 最近在折腾 `centos7`，将其安装在我的老式笔记本，实现资源复用。安装完`Centos7`之后，发现合上屏幕之后，电脑就会进入休眠。希望合上屏幕永久待机，以作服务器使用；

```bash
# 修改配置文件，找到 /etc/systemd/logind.conf，使用vim命令进入，如：
vi /etc/systemd/logind.conf

# 找到 HandleLidSwitch=suspend 修改如下：
HandleLidSwitch=lock

# 配置生效
systemctl restart systemd-logind
```
> `HandleLidSwitch`的其它值说明：
>
> 1. ignore 忽略，跳过
> 2. power off 关机
> 3. eboot 重启
> 4. halt 挂起
> 5. suspend 可暂停目前正在执行的shell。若要恢复，则必须使用SIGCONT信息。所有的进程都会暂停，但不是消失
> 6. hibernate 让笔记本进入休眠状态
> 7. hybrid-sleep 混合睡眠，主要是为台式机设计的，是睡眠和休眠的结合体，当你选择Hybird时，系统会像休眠一样把内存里的数据从头到尾复制到硬盘里 ，然后进入睡眠状态，即内存和CPU还是活动的，其他设置不活动，这样你想用电脑时就可以快速恢复到之前的状态了，笔记本一般不用这个功能。
> 8. lock 仅锁屏，计算机继续工作
---
title: centos-7禁用nouveau
category: LINUX
date: 2023-04-09
---

> win10 笔记本安装了 `centos` 系统(CentOS Linux release 7.6.1810 (Core))，但是在开机时会一直报错；

```bash
# 报错信息
no association and the time event is over already
```

最终查找的资料说是显卡驱动问题，需要禁用掉linux内置的显卡驱动(Linux系统一般默认安装的是开源的nouvea显卡驱动，它与nvidia显卡驱动产生冲突，欲装nvidia必禁nouvea)；

```bash
# 查看是否安装了 nouveau；有结果表示正在使用nouveau
lsmod | grep nouveau

# 创建一个新的文件，在文件中加入如下代码
sudo vi /etc/modprobe.d/blacklist-nouveau.conf

blacklist nouveau
options nouveau modeset=0

# 重启
sudo reboot

# 验证是否禁用成功，没有结果表示禁用成功
lsmod | grep nouveau
```


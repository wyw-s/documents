---
title: 普通用户切换到root用户
---

> 在使用ubantu的Linux系统时，终端顶部一直提示：`To run a command as administrator (user "root"), use "sudo <command>".See "man sudo_root" for details.`,而且你会发你进入不了`root`目录，有权限限制的；由于 `Ubuntu` 是基于 `Debian` 的 `linux` 操作系统，在默认的情况下，是没有超级用户(superuser, root)的，但有些系统操作必须有超级用户的权限才能进行，如手动释放内存等。 在其他 linux 操作系统 (如 fedora) 下，可以使用 su 切换到超级用户。 当输入 su 命令后， 系统会要求输入 root 的密码。 可是，在 `Ubuntu` 下我们根本不知道 root 的密码是什么。 这样，在 Ubuntu 下切换到超级用户需要使用其他方法，

```shell
# 没有权限
wangyawei@yaweidediannao:/$ cd root/
bash: cd: root/: Permission denied
wangyawei@yaweidediannao:/$
```

## `sudo`命令；

> Linux sudo命令以系统管理者的身份执行指令，也就是说，经由 sudo 所执行的指令就好像是 root 亲自执行。

### 语法

```shell
# sudo -V 显示版本编号
wangyawei@yaweidediannao:/$ sudo -V
Sudo version 1.8.31
Sudoers policy plugin version 1.8.31
Sudoers file grammar version 46
Sudoers I/O plugin version 1.8.31

# sudo -h 显示版本编号及指令的使用方式说明
wangyawei@yaweidediannao:/$ sudo -h
sudo - execute a command as another user

usage: sudo -h | -K | -k | -V
usage: sudo -v [-AknS] [-g group] [-h host] [-p prompt] [-u user]
usage: sudo -l [-AknS] [-g group] [-h host] [-p prompt] [-U user] [-u user] [command]
usage: sudo [-AbEHknPS] [-r role] [-t type] [-C num] [-g group] [-h host] [-p prompt] [-T timeout] [-u user] [VAR=value] [-i|-s]
            [<command>]
usage: sudo -e [-AknS] [-r role] [-t type] [-C num] [-g group] [-h host] [-p prompt] [-T timeout] [-u user] file ...

Options:
  -A, --askpass                 use a helper program for password prompting
  -b, --background              run command in the background
....省略

# sudo -l 显示出自己（执行 sudo 的使用者）的权限
wangyawei@yaweidediannao:/$ sudo -l
Matching Defaults entries for wangyawei on yaweidediannao:
    env_reset, mail_badpass, secure_path=/usr/local/sbin\:/usr/local/bin\:/usr/sbin\:/usr/bin\:/sbin\:/bin\:/snap/bin

User wangyawei may run the following commands on yaweidediannao:
    (ALL : ALL) ALL
wangyawei@yaweidediannao:/$
```

### `sudo -i`

> `sudo` 是 `su` 的加强版，意思是 `do something as the supervisor`。 不需要密码就可以得到 root 的权限。 但是它也有很多限制，比如，在默认的情况下，只能在 5 分钟之内使用 root 权限。 

```shell
wangyawei@yaweidediannao:/$ sudo -i
Welcome to Ubuntu 20.04.2 LTS (GNU/Linux 5.4.72-microsoft-standard-WSL2 x86_64)

 * Documentation:  https://help.ubuntu.com
 * Management:     https://landscape.canonical.com
 * Support:        https://ubuntu.com/advantage

  System information as of Sat Jun  5 16:57:15 CST 2021

  System load:  0.08               Processes:             21
  Usage of /:   0.4% of 250.98GB   Users logged in:       0
  Memory usage: 6%                 IPv4 address for eth0: 172.19.226.190
  Swap usage:   0%

1 update can be installed immediately.
0 of these updates are security updates.
To see these additional updates run: apt list --upgradable


The list of available updates is more than a week old.
To check for new updates run: sudo apt update


This message is shown once a day. To disable it please create the
/root/.hushlogin file.
root@yaweidediannao:~# cd /
```

## `su`

> 如果想一直使用`root`权限，还是要使用 `su`， 还是要得到 `root` 密码的。 用 `sudo passwd root` 可以设置 root 的密码。 之后就可以自由使用 `su` 命令啦。

```shell
wangyawei@yaweidediannao:/$ sudo passwd root
New password:
Retype new password:
passwd: password updated successfully
wangyawei@yaweidediannao:/$ su root
Password:
root@yaweidediannao:/# cd /
```


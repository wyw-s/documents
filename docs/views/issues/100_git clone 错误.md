---
title: git clone 错误
category: issues
date: 2021-05-02
tag
  - issue:git
---

## `fatal: unable to access 'https://github.com/wyw-s/patient.git/': Encountered end of file`

> 在liunx上克隆项目时出现的错误，

1、出现原因：git clone ...

```bash
[root@xxxx156pkpio44mis76wmxZ www]# git clone https://github.com/xxx/patient.git
Cloning into 'patient'...
fatal: unable to access 'https://github.com/wyw-s/patient.git/': Encountered end of file
```

2、解决：输入以下命令

```bash
[root@xxxx156pkpio44mis76wmxZ www]# git config --global http.sslVerify "false"
```

3、验证；

```bash
[root@xxxx156pkpio44mis76wmxZ www]# git config --global http.sslVerify "false"
[root@xxxx156pkpio44mis76wmxZ www]# git clone https://github.com/xxx/patient.git
Cloning into 'patient'...
remote: Enumerating objects: 507, done.
remote: Counting objects: 100% (507/507), done.
remote: Compressing objects: 100% (285/285), done.
remote: Total 507 (delta 213), reused 423 (delta 138), pack-reused 0
Receiving objects: 100% (507/507), 3.37 MiB | 22.00 KiB/s, done.
Resolving deltas: 100% (213/213), done.
[root@iZbp156pkpio44mis76wmxZ www]# 

```

> 如果不成功可以在尝试一次，

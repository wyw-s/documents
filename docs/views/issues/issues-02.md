---
title: pm2 command not found
---

## `/tmp/jenkins5751570293012104226.sh: line 8: pm2: command not found`

> 使用jenkins部署的时候，原来好好的，但是今天突然就不好使了(我移动了pm2的安装目录)报如下错误；

```bash
.....
[heroList] $ /bin/sh -xe /tmp/jenkins1733537390543316955.sh
[heroList] $ /bin/sh -xe /tmp/jenkins5751570293012104226.sh
+ pm2 restart npm -- run dev
/tmp/jenkins5751570293012104226.sh: line 8: pm2: command not found
Build step 'Execute shell' marked build as failure
Finished: FAILURE
```

### 1、原因分析；

- 我首先想到的是，在系统中看pm2还可以使用不，但是我发现可以使用；

- 查看`/bin`目录下的软连接是否还可以使用；

  ```bash
  [root@iZbp156pkpio44mis76wmxZ /]# cd bin/
  [root@iZbp156pkpio44mis76wmxZ bin]# ls -l
  total 317580
  ......
  -rwxr-xr-x    1 root root      40720 May 11  2020 plymouth
  # 查看此处pm2所对应的安装目录是否是你的pm2的目录
  lrwxrwxrwx    1 root root         55 Apr 12 22:58 pm2 -> /home/local/application/node-v12.18.2-linux-x64/bin/pm2 
  -rwxr-xr-x    1 root root      28272 May 11  2020 pmap
  ......
  [root@iZbp156pkpio44mis76wmxZ bin]# 
  
  ```

  >pm2 -> /home/local/application/node-v12.18.2-linux-x64/bin/pm2   表示我的pm2在bin目录下

### 2、解决方法；

- 如果你的pm2所对应的与你的安装目录不一样，那么你就修改成一样的。
- 如果没有你就创建一个。(**就是创建软连接**)

### 3、验证：

```bash
....
[heroList] $ /bin/sh -xe /tmp/jenkins1503992813040784551.sh
[heroList] $ /bin/sh -xe /tmp/jenkins2178596476171231682.sh
+ pm2 -v
4.5.1
Finished: SUCCESS
```


---
title: permission denied 127.0.0.1:8888
category: issues
date: 2021-05-02
---

## `Error: listen EACCES: permission denied 127.0.0.1:8888`

> 出现这个问题的场景是在我使用`webpack-bundle-analyzer`的时候，结果出现了以下报错信息；

```bash
"C:\Program Files\nodejs\node.exe" "C:\Program Files\nodejs\node_modules\npm\bin\npm-cli.js" run build --scripts-prepend-node-path=auto

> webnode@1.0.0 build
> cross-env NODE_ENV=production DEBUG=app:* node bin/build.js

Build completed in 9.233s

events.js:292
      throw er; // Unhandled 'error' event
      ^

Error: listen EACCES: permission denied 127.0.0.1:8888
    at Server.setupListenHandle [as _listen2] (net.js:1296:21)
    at listenInCluster (net.js:1361:12)
    at doListen (net.js:1498:7)
    at processTicksAndRejections (internal/process/task_queues.js:85:21)
Emitted 'error' event on Server instance at:
    at emitErrorNT (net.js:1340:8)
    at processTicksAndRejections (internal/process/task_queues.js:84:21) {
  code: 'EACCES',
  errno: 'EACCES',
  syscall: 'listen',
  address: '127.0.0.1',
  port: 8888
}
npm ERR! code 1
npm ERR! path E:\webNode
npm ERR! command failed
npm ERR! command C:\WINDOWS\system32\cmd.exe /d /s /c cross-env NODE_ENV=production DEBUG=app:* node bin/bui
ld.js

npm ERR! A complete log of this run can be found in:
npm ERR!     C:\Users\ASUS\AppData\Local\npm-cache\_logs\2021-04-05T14_29_00_634Z-debug.log

Process finished with exit code 1

```

1. 报错解释：没有权限，拒绝访问，然后我就在网上找了相关问题的回答，大多数的回答所对应的问题是：`listen EACCES 127.0.0.1:8000`的问题，没有关于权限的问题，所以我就试了下，结果好使。

2. 查看端口是否占用：

   ```bash
   ASUS@yaweidediannao MINGW64 /e/webNode (master)
   $ netstat -ano | findstr "8888"
     TCP    0.0.0.0:8888           0.0.0.0:0              LISTENING       6460
   
   ```

3. 查看进程ID所对应的服务；

   ```bash
   ASUS@yaweidediannao MINGW64 /e/webNode (master)
   $ tasklist |findstr "6460"
   python.exe                    6460 Services                   0      3,444 K
   
   ```

4. 解决：

   - 杀死占用8888端口的应用；

     ```bash
     # 未验证，自己斟酌
     taskkill -PID 6460 -F
     ```

   - 更换自己的服务端口号(**我才用的是这种**)


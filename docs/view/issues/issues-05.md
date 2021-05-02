---
title: vite启动报错：Cannot call write after a stream was destroyed
---

## vite启动报错：Cannot call write after a stream was destroyed

> vue3.0和vite也算是出来一段时间了，有些公司项目也已经开始使用了(我猜的)，于是自己打算学习一下，结果在启动项目的时候就给我报了一个错误，一天都无头绪，网上也找不到解决的方法，可是呢后面的测试中误打误撞的给解决的，在这里记录一下。

1. 安装；

   ```bash
   # npm
   npm init @vitejs/app myVite
   
   # yarn
   yarn create @vitejs/app
   
   或通过附加的命令行选项直接指定项目名称和你想要使用的模板。例如，要构建一个 Vite + Vue 项目，运行:
   
   # npm 6.x
   npm init @vitejs/app my-vue-app --template vue
   
   # npm 7+, 需要额外的双横线：
   npm init @vitejs/app my-vue-app -- --template vue
   
   # yarn
   yarn create @vitejs/app my-vue-app --template vue
   ```

   > 我执行的是 `npm init @vitejs/app myVite_three`，项目成功的创建。

2. 安装依赖；进入项目的根目录中执行以下命令：

   ```bash
   npm install
   ```

3. 启动服务：

   ```bash
   npm run dev
   ```

4. 报错详情：

   ```bash
   ASUS@yaweidediannao MINGW64 ~/Desktop/vue.3.0/viteee/myVite_three
   $ npm run dev
   
   > myvite-three@0.0.0 dev
   > vite
   
   failed to load config from C:\Users\ASUS\Desktop\vue.3.0\viteee\myVite_three\vite.config.js
   error when starting dev server:
   Error [ERR_STREAM_DESTROYED]: Cannot call write after a stream was destroyed
       at doWrite (_stream_writable.js:399:19)
       at writeOrBuffer (_stream_writable.js:387:5)
       at Socket.Writable.write (_stream_writable.js:318:11)
       at Object.writeToStdin (C:\Users\ASUS\Desktop\vue.3.0\viteee\myVite_three\node_modules\esbuild\lib\main.js:1413:19)
       at sendRequest (C:\Users\ASUS\Desktop\vue.3.0\viteee\myVite_three\node_modules\esbuild\lib\main.js:576:14)
       at Object.buildOrServe (C:\Users\ASUS\Desktop\vue.3.0\viteee\myVite_three\node_modules\esbuild\lib\main.js:1044:11)
       at C:\Users\ASUS\Desktop\vue.3.0\viteee\myVite_three\node_modules\esbuild\lib\main.js:1444:17
       at new Promise (<anonymous>)
       at Object.build (C:\Users\ASUS\Desktop\vue.3.0\viteee\myVite_three\node_modules\esbuild\lib\main.js:1443:14)
       at Object.build (C:\Users\ASUS\Desktop\vue.3.0\viteee\myVite_three\node_modules\esbuild\lib\main.js:1334:51)
   npm ERR! code 1
   npm ERR! path C:\Users\ASUS\Desktop\vue.3.0\viteee\myVite_three
   npm ERR! command failed
   npm ERR! command C:\WINDOWS\system32\cmd.exe /d /s /c vite
   
   npm ERR! A complete log of this run can be found in:
   npm ERR!     C:\Users\ASUS\AppData\Local\npm-cache\_logs\2021-04-04T06_57_46_748Z-debug.log
   
   ```

   > 刚开始出现错误的时候还好，关键问题是找遍全网没有找到答案，心里就慌了。

5. 解决：

   > 在看到官方的另外一种创建项目的方法后(yarn)我果断又重新创建了一个项目，然后成功启动。然后就想npm和yarn的区别就是yarn的下载速度快，也就是下载源不一样，于是我就查看了下自己的npm下载源，果然不是官方的。因为我个人比较喜欢用npm 和官方的下载源，但是下载源不知道什么被设置成了http://r.cnpmjs.org/，随后我就修改为了官方的下载源；

   ```bash
   ASUS@yaweidediannao MINGW64 ~/Desktop/vue.3.0/viteee/myVite_three
   $ npm config get registry
   http://r.cnpmjs.org/
   
   ASUS@yaweidediannao MINGW64 ~/Desktop/vue.3.0/viteee/myVite_three
   $ npm config set registry https://registry.npmjs.org/
   
   ASUS@yaweidediannao MINGW64 ~/Desktop/vue.3.0/viteee/myVite_three
   $ npm config get registry
   https://registry.npmjs.org/
   
   ```

6. 使用修改后的下载源重新创建项目(步骤1、2、3)。

7. 成功启动服务。

   ```bash
   ASUS@yaweidediannao MINGW64 ~/Desktop/vue.3.0/viteee/myVite
   $ npm run dev
   
   > myvite@0.0.0 dev
   > vite
   
   
     vite v2.1.5 dev server running at:
   
     > Network:  http://192.168.137.1:3000/
     > Network:  http://192.168.2.3:3000/
     > Local:    http://localhost:3000/
   
     ready in 590ms.
   
   [@vue/compiler-sfc] <script setup> is still an experimental proposal.
   Follow its status at https://github.com/vuejs/rfcs/pull/227.
   
   [@vue/compiler-sfc] When using experimental features,
   it is recommended to pin your vue dependencies to exact versions to avoid breakage.
   
   ```

8. 遗留问题：

   虽然下载源不一样，但是下载的版本都一样，而且下载的依赖也没有报错，不明白为什么cnpm的下载源，启动服务会出错。
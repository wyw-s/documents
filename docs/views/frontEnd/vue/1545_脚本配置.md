---
title: 脚本配置
category: vue
autoGroup-15: 服务器端渲染
date: 2021-09-09 21:10:23
---
由于我们需要根据环境来控制打包输出，同时为了平台的兼容，我们选择`cross-env`；
1. 安装依赖

   ```bash
   npm i cross-env -D
   ```

2. 配置脚本

   ```json
   "scripts": {
       "build:client": "vue-cli-service build",
       "build:server": "cross-env WEBPACK_TARGET=node vue-cli-service build",
       "build": "npm run build:server && npm run build:client"
   },
   ```

3. 打包

   ```bash
   npm run build
   ```

   ::: tip
   
   如果打包的过程中报：Option 'whitelist' is not supported. Did you mean 'allowlist'? ，那么就把`whitelist`改为`allowlist`即可；
   
   :::
   
4. 打包结果

   ```bash
   dist
   ├── client
   │   ├── favicon.ico
   │   ├── img
   │   │   └── logo.82b9c7a5.png
   │   ├── index.html
   │   ├── js
   │   │   ├── chunk-2d0cfa15.827237a2.js
   │   │   ├── chunk-2d0cfa15.827237a2.js.map
   │   │   ├── chunk-2d0d6f02.9f0d2cb3.js
   │   │   ├── chunk-2d0d6f02.9f0d2cb3.js.map
   │   │   ├── chunk-vendors.af8121ee.js
   │   │   ├── chunk-vendors.af8121ee.js.map
   │   │   ├── main.152046db.js
   │   │   └── main.152046db.js.map
   │   └── vue-ssr-client-manifest.json
   └── server
       └── vue-ssr-server-bundle.json
   ```

   > - dist里面的文件其实需要托管到Nodejs里面的，因为前端需要下载激活；
   >
   > - vue-ssr-client-manifest.json，vue-ssr-server-bundle.json：主要用于告诉webpack首屏渲染时怎么工作，需要用到那些文件等。
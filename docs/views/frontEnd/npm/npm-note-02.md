---
title: 全局安装和本地安装
category: NPM
date: 2021-05-02
---

> 开发web项目你一定会使用npm包管理器安装各种包，那么你知道Npm包的安装方式：全局安装和本地安装的区别吗？**注意：以下示例是`window系统`**

## 全局安装

> 全局安装会将安装包放在 `C:\Users\[username]\AppData\Roaming\npm\node_modules`目录中，可以直接在命令行里使用。

```shell
npm install -g packageName
```

```sh
PS C:\Users\wangy\Desktop> npm install -g serve
npm WARN registry Unexpected warning for https://registry.npmjs.org/: Miscellaneous Warning ECONNRESET: request to https://registry.npmjs.org/ajv failed, reason: read ECONNRESET
npm WARN registry Using stale data from https://registry.npmjs.org/ due to a request error during revalidation.
C:\Users\wangy\AppData\Roaming\npm\serve -> C:\Users\wangy\AppData\Roaming\npm\node_modules\serve\bin\serve.js
+ serve@12.0.0
added 88 packages from 42 contributors in 125.131s
PS C:\Users\wangy\Desktop> serve -v
12.0.0
```

## 本地安装

> 将安装包放在 ./node_modules 下，可以通过 require() 来引入本地安装的包。

```shell
npm install packageName
```

```javascript
const express = require('express');
```


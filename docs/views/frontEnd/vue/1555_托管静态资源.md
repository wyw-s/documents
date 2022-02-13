---
title: 托管静态资源
category: vue
autoGroup-15: 服务器端渲染
date: 2021-09-09 21:10:23
---

> 在前面的打包输出的dist文件需要托管在Node服务中，所以需要配置静态资源托管；

修改`/bin/server.js`文件添加如下代码：

```javascript
app.use(express.static('../dist/client'))
```


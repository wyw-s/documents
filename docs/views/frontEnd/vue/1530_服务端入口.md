---
title: 服务端入口
category: vue
autoGroup-15: 服务器端渲染
date: 2021-09-09 08:22:23
---

服务端入口文件`src/entry-server.js  `

```javascript
import { createApp } from "./main";
// 返回一个函数，接收请求上下文，返回创建的vue实例
export default context => {
    // 这里返回一个Promise，确保客户端入口准备就绪  
    return new Promise((resolve, reject) => {
        const { app, router } = createApp(context);
        // 跳转到首屏的地址
        router.push(context.url);
        // 路由就绪，返回结果
        router.onReady(() => {
            resolve(app);
        }, reject);
    });
};
```


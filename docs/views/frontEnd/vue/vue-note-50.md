---
title: 客户端入口
category: vue
autoGroup-15: 服务器端渲染
date: 2021-09-09 08:28:23
---

客户端入口只需创建vue实例并执行挂载，这一步称为激活。创建entry-client.js：  

```javascript
import { createApp } from "./main";
// 创建vue、router实例
const { app, router } = createApp();
// 路由就绪，执行挂载
router.onReady(() => {
    app.$mount("#app");
});
```




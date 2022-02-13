---
title: 创建VUE实例
category: vue
autoGroup-15: 服务器端渲染
date: 2021-09-09 08:22:23
---

修改`src/main.js`

```javascript
import Vue from 'vue'
import App from './App.vue'
import { createRouter } from "./router";

Vue.config.productionTip = false

// 导出Vue实例工厂函数，为每次请求创建独立实例
export function createApp() {
  const router = createRouter();
  const app = new Vue({
    router,
    render: h => h(App)
  });
  return { app, router };
}
```

::: tip

这里我们也是需要导出一个vue实例的工厂函数，因为需要每次都重新创建一个全新的vue实例给前台；

:::
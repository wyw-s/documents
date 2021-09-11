---
title: 处理路由
category: vue
autoGroup-15: 服务器端渲染
date: 2021-09-09 08:03:23
---

> 因为我们使用的是vue的服务端渲染，显然对于交互少不了路由，但是我们又不太想使用传统的服务端渲染一样，自己重新对请求url处理，然后响应不同的模板页面，既然使用的是vue，那么肯定想使用vue-router。答案是可以的；

## 安装

```bash
# @3.5.2后面会出错  @3.1.x后面不会出错
npm install vue-router -D
```

## 使用

新建`src/router/index.js`和`src/views/about.vue`、`src/views/home.vue`文件，内容如下：

```javascript
// src/router/index.js
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

//导出工厂函数
export function createRouter() {
    return new VueRouter({
        routes: [
            {
                path: '/',
                compoment: () => import('@/views/home.vue')
            },
            {
                path: 'about',
                compoment: () => import('@/views/about.vue')
            }
        ]
    })
}
```

```javascript
// src/views/about.vue
<template>
    <h1>about</h1>
</template>
```

> 上面的代码中和以往不同的是。我导出的不是一个vueRouter实例，**而是一个工厂函数**，之所以这样处理是因为在将来访问我们的网站的用户会又很多个，而不同的用户所访问的页面和内容都不相同，所以需要每次都返回一份最新的router给前台，从而避免污染；


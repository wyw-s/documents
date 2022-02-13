---
title: 整合VUEX
category: vue
autoGroup-15: 服务器端渲染
date: 2021-09-11 15:20:23
---

> 使用vue开发项目，那么vuex是必不可少的功能了，下面就添加vuex到项目中；

## 安装

```bash
npm install -S vuex
```

## 创建createStore

```javascript
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export function createStore () {
    return new Vuex.Store({
        state: {
            count:108
        },
        mutations: {
            add(state){
                state.count += 1;
            }
        }
    })
}
```

## 挂载

```javascript
import Vue from 'vue'
import App from './App.vue'
import { createRouter } from "./router";
import { createStore } from './store'

Vue.config.productionTip = false

// 导出Vue实例工厂函数，为每次请求创建独立实例
export function createApp() {
  const router = createRouter();
  const store = createStore();
  const app = new Vue({
    router,
    store, // 挂载
    render: h => h(App)
  });
  return { app, store, router };
}

```

## 使用

```javascript
<h2 @click="$store.commit('add')">{{$store.state.count}}</h2>
```


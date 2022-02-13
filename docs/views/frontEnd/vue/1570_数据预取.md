---
title: 数据预取
category: vue
autoGroup-15: 服务器端渲染
date: 2021-09-11 20:20:23
---

> 在服务器端渲染(SSR)期间，我们本质上是在渲染我们应用程序的"快照"，所以如果应用程序依赖于一些异步数据，**那么在开始渲染过程之前，需要先预取和解析好这些数据**。

## 异步数据获取

在这里需要先提一个小问题，其实在一开始我不太明白为什么要进行服务器端异步数据预处理？异步数据在客户端请求和在服务端请求，单对请求响应时间来说都是一样的，那为什么还要在服务端预处理异步数据呢？如果在服务端请求的接口响应时间比较长的话，那么客户端不是一样会长时间的白屏吗？

**其实答案很简单：主要是为了SEO,如果提前把异步数据加载好，那么就利于爬虫爬取我们的页面；**

修改`store/index.js`

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
            add(state, count){
                state.count = count;
            }
        },
        actions: {
            // 加一个异步请求count的action
            getCount({ commit }) {
                return new Promise(resolve => {
                    setTimeout(() => {
                        commit("add", Math.random() * 100);
                        resolve();
                    }, 1000);
                });
            },
        },
    })
}
```

> 这一步的主要操作是用于模拟异步请求；异步请求的数据保存在vuex里面；

## 组件中的数据预取

修改`views/home.vue`

```vue
<template>
    <div>
        <h2 @click="$store.commit('add')">{{$store.state.count}}</h2>
        <h1>HOME</h1>
    </div>
</template>
<script>
export default {
    // 约定预取逻辑编写在预取钩子asyncData中
    asyncData({ store }) {
        // 触发action后，返回promise以便确定请求结果
        return store.dispatch('getCount');
    },
}
</script>
```

> 在当前页面中从vuex中获取数据；

## 客户端数据预取

在客户端，处理数据预取有两种不同方式：

1. 在路由导航之前解析数据
2. 匹配要渲染的视图后，再获取数据

### 在路由导航之前解析数据

修改`entry-server.js`

```javascript
import { createApp } from "./main";
// 返回一个函数，接收请求上下文，返回创建的vue实例
export default context => {
    // 这里返回一个Promise，确保客户端入口准备就绪  
    return new Promise((resolve, reject) => {
        const { app, router, store } = createApp();
        // 跳转到首屏的地址
        router.push(context.url);
        // 路由就绪，返回结果
        router.onReady(() => {
            // 获取匹配的路由组件数组
            const matchedComponents = router.getMatchedComponents();

            // 若无匹配则抛出异常；
            if (!matchedComponents.length) {
                return reject({ code: 404, msg: '页面找不到！' })
            }
            // 对所有匹配的路由组件调用可能存在的asyncData();
            Promise.all(matchedComponents.map(component => {
                if (component.asyncData) {
                    return component.asyncData({
                        store,
                        route: router.currentRoute,
                    })
                }
            })).then(() => {
                // 所有预取钩子 resolve 后，
                // store 已经填充完预渲染应用所需数据
                // 将状态附加到上下文，且 `template` 选项用于 renderer 时，
                // 状态将自动序列化为 `window.__INITIAL_STATE__`，并注入 HTML。
                context.state = store.state;
                resolve(app);
            }).catch(reject);
        }, reject);
    });
};
```

> 查找当前路由所有可能匹配的页面，然后调用异步请求函数获取异步请求数据，然后异步数据获取之后自动序列化为 `window.__INITIAL_STATE__`，并注入 HTML。这一步主要特点是数据在路由导航之前就解析好了。

### 匹配要渲染的视图后

修改`main.js`,并添加以下代码

```javascript
Vue.mixin({
  beforeMount() {
    const { asyncData } = this.$options;
    if (asyncData) {
      // 将获取数据操作分配给 promise
      // 以便在组件中，我们可以在数据准备就绪后
      // 通过运行 `this.dataPromise.then(...)` 来执行其他任务
      this.dataPromise = asyncData({
        store: this.$store,
        route: this.$route,
      });
    }
  },
});
```

> 主要特点是：数据是在客户端获取的，在页面加载完后再发送异步请求填充数据；

## 客户端恢复数据

> 当使用 `template` 时，`context.state` 将作为 `window.__INITIAL_STATE__` 状态，自动嵌入到最终的 HTML 中。而在客户端，在挂载到应用程序之前，store 就应该获取到状态：

修改`entry-client.js`

```javascript
import { createApp } from "./main";
// 创建vue、router实例
const { app, router, store } = createApp();

if (window.__INITIAL_STATE__) {
    store.replaceState(window.__INITIAL_STATE__);
}

// 路由就绪，执行挂载
router.onReady(() => {
    app.$mount("#app", true);
});
```

## url改变时重新获取数据

> 当页面url改变时，尤其是一些详情页，那么页面的数据就需要重新获取；

修改`main.js`

```javascript
Vue.mixin({
  beforeUpdate() {
    const { asyncData } = this.$options;
    if (asyncData) {
      // 将获取数据操作分配给 promise
      // 以便在组件中，我们可以在数据准备就绪后
      // 通过运行 `this.dataPromise.then(...)` 来执行其他任务
      this.dataPromise = asyncData({
        store: this.$store,
        route: this.$route,
      });
    }
  },
});
```

> 利用全局混入，在路由路径改变时重新获取最新的数据；

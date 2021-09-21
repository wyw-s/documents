---
title: 简单说一说vuex使用及其理解？
category: 面试题
autoGroup-20: vue相关
time: 2021-09-21 11:42:34
---

> vue中状态管理（登陆验证，购物车，播放器等）  

## vuex 介绍

vuex 实现了一个单向数据流，在全局拥有一个 State 存放数据，当组件要更改 State 中的数据时，必须通过 Mutation 提交修改信息， Mutation 同时提供了订阅者模式供外部插件调用获取 State 数据的更新。而当所有异步操作(常见于调用后端接口异步获取更新数据)或批量的同步操作需要走 Action ，但 Action 也是无法直接修改 State 的，还是需要通过Mutation 来修改State的数据。最后，根据 State 的变化，渲染到视图上。  

## vuex 中核心概念 

### state：

vuex 的唯一数据源，如果获取多个 state ,可以使用 ...mapState 。  

```javascript
export const store = new Vuex.Store({
// 注意Store的S大写
<!-- 状态储存 -->
    state: {
    	productList: [
            { 
                name: 'goods 1',
                price: 100
            }
        ]
    }
})
```

### getter

可以将 getter 理解为计算属性， getter 的返回值根据他的依赖缓存起来，依赖发生变化才会被重新计算。  

```javascript
import Vue from 'vue'
import Vuex from 'vuex';
Vue.use(Vuex)
```

```javascript
export const store = new Vuex.Store({
  state: {
    productList: [
      {
        name: 'goods 1',
        price: 100,
      },
    ],
  },
// 辅助对象 mapGetter
  getters: {
    getSaledPrice: (state) => {
      let saleProduct = state.productList.map((item) => {
        return {
          name: '**' + item.name + '**',
          price: item.price / 2,
        }
      })
      return saleProduct;
    },
  },
})
```

```javascript
// 获取getter计算后的值
export default {
  data () {
    return {
      productList : this.$store.getters.getSaledPrice
    }
  }
}
```

### mutation

更改 state 中唯一的方法是提交 mutation 都有一个字符串和一个回调函数。回调函数就是使劲进行状态修改的地方。并且会接收 state 作为第一个参数 payload 为第二个参数， payload 为自定义函数， mutation 必须是同步函数。  

```javascript

// 辅助对象 mapMutations
mutations: {
  // payload 为自定义函数名
  reducePrice: (state, payload) => {
    return state.productList.forEach((product) => {
      product.price -= payload;
    })
  }
}
```

```javascript
<!-- 页面使用 -->
methods: {
  reducePrice(){
    this.$store.commit('reducePrice', 4)
  }
}
```

### action

action 类似 mutation 都是修改状态，不同之处。

- action 提交的 mutation 不是直接修改状态
- action 可以包含异步操作，而 mutation 不行
- action 中的回调函数第一个参数是 context ，是一个与 store 实例具有相同属性的
  方法的对象
- action 通过 store.dispatch 触发， mutation 通过 store.commit 提交  

```javascript
actions: {
// 提交的是mutation，可以包含异步操作
  reducePriceAsync: (context, payload) => {
    setTimeout(()=> {
      context.commit('reducePrice', payload); 
      // reducePrice为上一步mutation中的属性
    },2000)
  }
}
```

```javascript
<!-- 页面使用 -->
// 辅助对象 mapActions
methods: {
  reducePriceAsync(){
    this.$store.dispatch('reducePriceAsync', 2)
  },
}
```

### module

由于是使用单一状态树，应用的所有状态集中到比较大的对象，当应用变得非常复杂是， store 对象就有可能变得相当臃肿。为了解决以上问题， vuex 允许我们将 store分割成模块，每个模块拥有自己的 state,mutation,action,getter ,甚至是嵌套子模块从上至下进行同样方式分割。  

```javascript
const moduleA = {
  state: {...},
  mutations: {...},
  actions: {...},
  getters: {...}
} 
const moduleB = {
  state: {...},
  mutations: {...},
  actions: {...},
  getters: {...}
} 
const store = new Vuex.Store({
  a: moduleA,
  b: moduleB
})
store.state.a
store.state.b
```

## vuex 中数据存储 localStorage  

> vuex 是 vue 的状态管理器，存储的数据是响应式的。但是并不会保存起来，刷新之后就回到了初始状态，具体做法应该在 vuex 里数据改变的时候把数据拷贝一份保存到 localStorage 里面，刷新之后，如果localStorage 里有保存的数据，取出来再替换 store 里的 state。

```javascript
let defaultCity = "上海"
try {
// 用户关闭了本地存储功能，此时在外层加个try...catch
  if (!defaultCity){
// f复制一份
    defaultCity = JSON.parse(window.localStorage.getItem('defaultCity'))
  }
}catch(e){
  console.log(e)
}
export default new Vuex.Store({
  state: {
    city: defaultCity
  },
  mutations: {
    changeCity(state, city) {
      state.city = city
      try {
        window.localStorage.setItem('defaultCity',
          JSON.stringify(state.city));
        // 数据改变的时候把数据拷贝一份保存到localStorage里面
      } catch (e) {}
    }
  }
})
```

::: tip

注意： vuex 里保存的状态，都是数组，而 localStorage 只支持字符串。  

:::

## 总结

- Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。它采用集中式存储管理应用的所
  有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。
- vuex核心概念 重点同步异步实现 action mutation
- vuex中做数据存储 --------- local storage
- 如何选用vuex  
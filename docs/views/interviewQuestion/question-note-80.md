---
title: vue-router 中的导航钩子由那些？
category: 面试题
autoGroup-20: vue相关
time: 2021-09-21 12:21:34
---

## 全局钩子函数

- beforeEach (to，from，next) 路由改变前调用 ,常用验证用户权限。
  -   参数
    - to ：即将要进入的目标路由对象
    - from：当前正要离开的路由对象
    - next：路由控制参数  
      - next()：如果一切正常，则调用这个方法进入下一个钩子
      - next(false)：取消导航（即路由不发生改变）
      - next('/login')：当前导航被中断，然后进行一个新的导航
      - next(error)：如果一个Error实例，则导航会被终止且该错误会被传递给 router.onError ()  
- afterEach (to，from) 路由改变后的钩子
  - 常用自动让页面返回最顶端
  - 用法相似，少了next参数  

## 路由配置中的导航钩子  

- beforeEnter (to，from，next)  

  ```javascript
  const router = new VueRouter({
    routes: [
      {
        path: '/foo',
        component: Foo,
        beforeEnter: (to, from, next) => {
          // ...
        },
        beforeEnter: (route) => {
          // ...
        }
      }
    ]
  });
  ```

## 组件内的钩子函数

- beforeRouteEnter (to,from,next)  

  - 该组件的对应路由被 comfirm 前调用。
  - 此时实例还没被创建，所以不能获取实例（this）  

- beforeRouteUpdate (to,from,next)  

  - 当前路由改变，但改组件被复用时候调用
  - 该函数内可以访问组件实例(this)

- beforeRouteLeave (to,from,next)  

  - 当导航离开组件的对应路由时调用。
  - 该函数内可以访问获取组件实例（this）  

  ```javascript
  const Foo = {
    template: `...`,
    beforeRouteEnter (to, from, next) {
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当钩子执行前，组件实例还没被创建
    },
    beforeRouteUpdate (to, from, next) {
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
  
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
  
    // 可以访问组件实例 `this`
    },
    beforeRouteLeave (to, from, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
    }
  }
  ```

## 路由监测变化

监听到路由对象发生变化，从而对路由变化做出响应  

```javascript
const user = {
  template: '<div></div>',
  watch: {
    '$route'(to, from) {
    // 对路由做出响应
    // to , from 分别表示从哪跳转到哪，都是一个对象
    // to.path ( 表示的是要跳转到的路由的地址 eg: /home );
    },
  },
}
// 多了一个watch，这会带来依赖追踪的内存开销，
// 修改
const user = {
  template: '<div></div>',
  watch: {
    '$route.query.id' {
      // 请求个人描述
    },
    '$route.query.page' {
      // 请求列表
    },
  },
}
```

## 总结

路由中的导航钩子有三种  

- 全局
- 组件
- 路由配置  

监听路由变化怎么做  

- 使用watch 来对$route 监听  
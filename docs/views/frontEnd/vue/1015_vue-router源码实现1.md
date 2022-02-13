---
title: vue-router源码实现1
category: vue
autoGroup-10: 进阶
date: 2021-08-28 19:55:23
---

> Vue Router 是 [Vue.js (opens new window)](http://cn.vuejs.org/)官方的路由管理器。它和 Vue.js 的核心深度集成，让构建单页面应用变得易如反掌。

包含的功能有：

- 嵌套的路由/视图表
- 模块化的、基于组件的路由配置
- 路由参数、查询、通配符
- 基于 Vue.js 过渡系统的视图过渡效果
- 细粒度的导航控制
- 带有自动激活的 CSS class 的链接
- HTML5 历史模式或 hash 模式，在 IE9 中自动降级
- 自定义的滚动条行为

## 基本使用

- 安装：

  ```bash
  vue add router
  ```

- 使用vue-router插件，router.js  

  ```javascript
  import Router from 'vue-router'
  Vue.use(Router)
  
  // 创建Router实例 并导出
  export default new Router({...})
  ```

- 在根组件上添加该实例，main.js  

  ```javascript
  import router from './router'
  new Vue({
  	router,
  }).$mount("#app");
  ```

- 添加路由视图，App.vue  

  ```vue
  <router-view></router-view>
  ```

- 导航

  ```vue
  <router-link to="/">Home</router-link>
  <router-link to="/about">About</router-link>
  ```

## 源码实现

> 要做的事情就是防着vue-router官方的路由，写一个简单的自己的路由；

分析：

- 根据官方路由的使用和配置，我们需要实现一个插件；
- 它可以监听`#`后面值的变化，然后匹配不同的组件从而显示不同的页面；
- 需要考虑嵌套路由；
- 需要实现`<router-view></router-view>`和`<router-link></router-link>`组件；

## vue-router

> 创建一个vue-router类并导出；

```javascript
class Router {
    constructor(options) {
        this.$options = options;
    }

    // vue默认会执行这个Install方法
    static install (Vue) {
        Vue.mixin({
            beforeCreate() {
                console.log(this.$options)
                // 只有vue根示例有 router 选项；
                if (this.$options.router) {
                    // 把vue根示例的选项挂载到vue的原型上；
                    Vue.prototype.$router = this.$options.router
                }
            }
        })
    }
}

export default Router
```

## 创建router-link

> 实现全局组件router-link，用来导航。

```javascript
// vue默认会执行这个Install方法
static install (Vue) {
   ...省略
    // 创建<router-link>全局组件
    // 注意这里不可以使用template选项，因为没有编译器
    Vue.component('router-link', {
        props: {
            to: {}
        },
        render(createElement) {
            return createElement('a', {
                attrs: {
                    href: `#/${this.to}`,
                },
            }, this.$slots.default,)
        }
    })
}

// 使用
<router-link to="/about"></router-link>
```

## 创建router-view

> 实现全局组件router-view，用作容器书写子路由。

```javascript
// vue默认会执行这个Install方法
static install (Vue) {
   ...省略
   // 创建<router-view>全局组件
   Vue.component('router-view', {
       render(createElement) {
           return createElement('div', '123')
       }
   })
}

// 使用
<router-view></router-view>
```

## 监听路由变化

> 前面实现的内容目前达不到切换路由匹配不同组件的能力，接下载就是监听路由更新组件；

```javascript

class Router {
    constructor(options) {
        this.$options = options;

        this.currentRouter = '/';

        // 监听路由的变化
        window.addEventListener('hashchange', () => {
            this.currentRouter = window.location.hash.slice(1)
        })
    }

	... 省略
    // 创建<router-view>全局组件
    Vue.component('router-view', {
        render(createElement) {
            let component = null;
            // 查找当前的路由并获取组件
            this.$router.$options.routers.forEach((router) => {
                if (router.path === this.$router.currentRouter) {
                    component = router.component
                }
            })
            return createElement(component)
        }
    })
    }
}

export default Router
```

> 以上代码就可以在哈希路由变化的时候，匹配不同的组件；

::: wanging

但是还有一个问题就是，路由变化了，但是render函数没有重新执行;这里需要考虑响应式；

:::

## 实时渲染

> 这里做的目的就是，当匹配到路由变化时，重新执行render函数，达到重新渲染的目的；

```javascript

let Vue;

class Router {
    constructor(options) {

        this.currentRouter = '/';
        // 响应式 currentRouter
        Vue.util.defineReactive(this, 'currentRouter', '/');
    }
}

export default Router

```

## 解决刷新视图消失

```javascript

let Vue;

class Router {
    constructor(options) {
        this.$options = options;

        this.currentRouter = '/';

        // 响应式 currentRouter
        Vue.util.defineReactive(this, 'currentRouter', '/');

        // 监听路由的变化
        window.addEventListener('hashchange', this.onhashchange.bind(this))

        // 解决刷新时，不渲染render的问题；
        window.addEventListener('load', this.onhashchange.bind(this))
    }

    onhashchange() {
        this.currentRouter = window.location.hash.slice(1)
    }
}

export default Router
```

## 完整代码

```javascript

let Vue;

class Router {
    constructor(options) {
        this.$options = options;

        this.currentRouter = '/';

        // 响应式 currentRouter
        Vue.util.defineReactive(this, 'currentRouter', '/');

        // 监听路由的变化
        window.addEventListener('hashchange', () => {
            this.currentRouter = window.location.hash.slice(1)
        })
    }

    // vue默认会执行这个Install方法
    static install (_Vue) {
        Vue = _Vue
        Vue.mixin({
            beforeCreate() {
                // 只有vue根示例有 router 选项；
                if (this.$options.router) {
                    Vue.prototype.$router = this.$options.router
                }
            }
        })

        // 创建<router-link>全局组件
        // 注意这里不可以使用template选项，因为没有编译器
        Vue.component('router-link', {
            props: {
                to: {}
            },
            render(createElement) {
                return createElement('a', {
                    attrs: {
                        href: `#${this.to}`,
                    },
                }, this.$slots.default,)
            }
        })

        // 创建<router-view>全局组件
        Vue.component('router-view', {
            render(createElement) {
                let component = null;
                this.$router.$options.routers.forEach((router) => {
                    if (router.path === this.$router.currentRouter) {
                        component = router.component
                    }
                })
                return createElement(component)
            }
        })
    }
}

export default Router

```

> 好了，至此router的初始版本就这样了，目的也是用于学习，所有实现一个简单的router;

::: tip

使用方式和官方的 `vue-router`一样，不过这里只是实现了路由和容器，有很多细节并没有考虑，比如嵌套路由；

:::

## 嵌套路由




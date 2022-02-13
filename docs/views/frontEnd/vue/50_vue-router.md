---
title: vue-router
category: vue
autoGroup-1: 基础
date: 2021-08-11 23:14:30
---

> * Vue-Router 是 [Vue.js](http://cn.vuejs.org/) 官方的路由管理器。它和 Vue.js 的核心深度集成，让构建**单页面**应用变得易如反掌   **它是一个插件**
> * Vuejs中不包含vue-router
> * 实现根据不同的请求地址 而**`显示不同的组件`**
> * 如果要使用 vue开发项目,前端路由功能**`必须使用`**vue-router来实现

## 使用步骤 

1. 导入`vue`和`vue-router`;

   ```js
   <script src="./vue-router.js"></script>
   ```

2. 设置HTML中的内容;

   ```html
   <!-- router-link 最终会被渲染成a标签，to指定路由的跳转地址 -->
   <router-link to="/users">用户管理</router-link>
   <!-- 路由匹配到的组件将渲染在这里 -->
   <!--定义容器-->
   <router-view></router-view>
   ```

3. 创建组件;

   ```js
   // 创建组件
   // 组件也可以放到单独的js文件中
   var Home = {template: '<div>这是Home内容</div>'};
   var Users = {template: '<div>这是用户管理内容</div>'};
   ```

4. 实例化路由对象,配置路由规则;

   ```js
   // 配置路由规则
   var router = new VueRouter({
       routes: [
           { name: 'home', path: '/', component: Home },
           { name: 'users', path: '/users', component: Users 
           }
       ]
   });
   ```

5. `vue`实例挂载router实例;

   ```js
   var vm = new Vue({el: '#app',router});
   ```

## 动态路由;

> * 点击**`列表页`** 跳转到**`详情页`**时,跳转的链接需要携带参数,会导致**`path`**不同；
> * 当path不同却需要对应同一个组件时,需要用到动态路由这一概念；
> * 动态路由传参 =>  列表 =>详情 => 动态路由id传过去；
> * **注意** 动态路由的参数 可以通过 `vue`实例.`$route.params`获取;

1. **动态路由传参；**

   ```js
   { name: 'users', path: '/users/:id', component: Users },
   ```

2. 通过 `<router-link>` 传参，在路径上传入具体的值;

   ```js
   <router-link to="/users/120">用户管理</router-link>
   ```

3. 在组件内部使用**this.$route** 获取当前路由对象;

   ```js
   var Users = {   
       template: '<div>这是用户管理内容 {{ $route.params.id }}</div>',  
       mounted() {       
           console.log(this.$route.params.id);   
       }
   };
   ```

## 属性赋值；

> to 有多种赋值方式  ;

```html
<!-- 常规跳转 -->      
<!-- <router-link to="/sport">体育</router-link> -->      
<!-- 变量 -->      
<!-- <router-link :to="path">体育</router-link> -->      
<!-- 根据对象name跳转 -->      
<!-- <router-link :to="{name:'abcdefg'}">体育</router-link> -->      
<!-- 根据对象path跳转 -->      
<!-- <router-link :to="{path:'/sport'}">体育</router-link> -->      
<!-- 带参数的跳转 -->      
<router-link :to="{name:'abcdefg',params:{a:1}}">体育</router-link>
```


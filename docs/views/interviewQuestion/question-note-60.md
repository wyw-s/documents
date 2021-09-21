---
title: 你了解哪些Vue性能优化方法
category: 面试题
autoGroup-20: vue相关
time: 2021-09-21 00:24:34
---

> 答题思路：根据题目描述，这里主要探讨Vue代码层面的优化  

1. 路由懒加载

   ```javascript
   const router = new VueRouter({
       routes: [
       	{ path: '/foo', component: () => import('./Foo.vue') }
       ]
   })
   ```

2. keep-alive缓存页面

   ```vue
   <template>
       <div id="app">
           <keep-alive>
               <router-view/>
           </keep-alive>
       </div>
   </template>
   ```

3. 使用v-show复用DOM

   ```vue
   <template>
   <div class="cell">
       <!--这种情况用v-show复用DOM，比v-if效果好-->
       <div v-show="value" class="on">
       	<Heavy :n="10000"/>
       </div>
       <section v-show="!value" class="off">
       	<Heavy :n="10000"/>
       </section>
   </div>
   </template>
   ```

4. v-for 遍历避免同时使用 v-if 

   ```vue
   <template>
   <ul>
       <li
       	v-for="user in activeUsers"
       	:key="user.id">
       	{{ user.name }}
       </li>
   </ul>
   </template>
   <script>
   export default {
       computed: {
           activeUsers: function () {
               return this.users.filter(function (user) {
               	return user.isActive
               })
           }
       }
   }
   </script>
   ```

5. 长列表性能优化

   如果列表是纯粹的数据展示，不会有任何改变，就不需要做响应化

   ```javascript
   export default {
       data: () => ({
           users: []
       }),
       async created() {
       	const users = await axios.get("/api/users");
       	this.users = Object.freeze(users);
       }
   };
   ```

   如果是大数据长列表，可采用虚拟滚动，只渲染少部分区域的内容

   ```vue
   <recycle-scroller
   	class="items"
   	:items="items"
   	:item-size="24"
   >
   <template v-slot="{ item }">
       <FetchItemView
       	:item="item"
       	@vote="voteItem(item)"
       />
   </template>
   </recycle-scroller>
   ```

6. 事件的销毁

   Vue 组件销毁时，会自动解绑它的全部指令及事件监听器，但是仅限于组件本身的事件。

   ```javascript
   created() {
   	this.timer = setInterval(this.refresh, 2000)
   },
   beforeDestroy() {
   	clearInterval(this.timer)
   }
   ```

7. 图片懒加载

   对于图片过多的页面，为了加速页面加载速度，所以很多时候我们需要将页面内未出现在可视区域内的图片先不做加载， 等到滚动到可视区域后再去加载。  

   ```javascript
   <img v-lazy="/static/img/1.png">
   // 参考项目：vue-lazyload
   ```

8. 第三方插件按需引入 

   像element-ui这样的第三方组件库可以按需引入避免体积太大。  

   ```javascript
   import Vue from 'vue';
   import { Button, Select } from 'element-ui';
   Vue.use(Button)
   Vue.use(Select)
   ```

9. 无状态的组件标记为函数式组件

   ```vue
   <template functional>
   	<div class="cell">
   	<div v-if="props.value" class="on"></div>
   	<section v-else class="off"></section>
   </div>
   </template>
   <script>
   export default {
   	props: ['value']
   } 
   </script>
   ```

10. 子组件分割

    ```vue
    <template>
    	<div>
    		<ChildComp/>
    	</div>
    </template>
    <script>
    export default {
        components: {
        	ChildComp: {
                methods: {
                    heavy () { /* 耗时任务 */ }
                },
                render (h) {
                    return h('div', this.heavy())
                }
        	}
        }
    } 
    </script>
    ```

11. 变量本地化

    ```vue
    <template>
        <div :style="{ opacity: start / 300 }">
        {{ result }}
        </div>
    </template>
    <script>
    import { heavy } from '@/utils'
    export default {
        props: ['start'],
        computed: {
        	base () { return 42 },
        	result () {
                const base = this.base // 不要频繁引用this.base
                let result = this.start
                for (let i = 0; i < 1000; i++) {
                    result += heavy(base)
                } 
                return result
            }
        }
    } 
    </script>
    ```

12. SSR
---
title: vue基础总结
---

## `Vue `语法；

```js
new Vue({
    //挂载；
    el: '#app',
    //初始化数据；
    data: {},
    //监听 data 的数据变化；
    watch: {
      todos: {
        //深度监视
			handler() {
				window.localStorage.setItem("todos",JSON.stringify(this.todos))
			},
			deep: true, //默认为false
		}
    },
    //计算属性；
    computed:{},
    //初始化完成要执行的方法；
    created() {},
    //要执行的回调函数；
    methods: {},
})
```



# 指令：

> 概念： 在`vue`中，指令是带有`v-`前缀的特殊特性 ;

-  指令特性的值预期是单个JavaScript**表达式**(v-for除外)，责任就是，当表达式的值改变时，就响应式的作用于DOM，从而做出改变。 

## `v-if` :条件渲染；

- 根据绑定数据的真假来决定是否渲染这个元素；

- 属性值类型为布尔类型；
- 若属性值为空，则默认为`true`；
- 当属性值为`false`时，则隐藏被作用的元素对象；

```html
<!-- 语法：-->
<div v-if='true'>我是第四个div</div>
```

## `v-show` ：条件显示；

- 无论条件的真假始终都渲染元素；
  - 元素会始终渲染，至于是否显示则取决于`css`；

- 属性值类型为布尔类型；
- 若属性值为空，则默认为`false`；
- 当属性值为`false`时，则隐藏被作用的元素对象；不显示（display: none）

```html
<!--语法-->
<div v-show='false'>我是第三个div</div>
```

## `v-text`：

- 可以在标签中插入一段文本；
- 无闪烁问题；

```html
<!--语法-->
<p v-text="msg">
  - `{{msg1}}` 插值表达式；
  - 可以进行简单的逻辑运算；
  - `{{ user.gender === 0 ? '男' : '女' }}`;
  - **有闪烁问题**；
  - 可以通过`v-cloak`解决闪烁问题；并结合`[v-cloak]{display: none;}`来使用；
</p>
```



```html
[v-cloak]{
   display: none;
  }

<p v-cloak>++++++++ {{ msg }} ----------</p>
```

**闪烁**：

- 当网速较慢时，此时的`vue.js`文件还未加载过来，但是此时页面已经显示了`内容`,当文件加载完毕后又进行了替换；

## `v-html`：

- 在渲染时可以解析`html`标签；

```html
<div v-html="msg"></div>
```



## `v-bind` ：

>  1、用来**动态的绑定一个或者多个特性**。没有参数时，可以绑定到一个包含键值对的对象。 
>
> 2、可以简写为：  :class="{w: true}" ；

- 为属性绑定  用于`vue`操作；

- `v-bind:class="{w: true}"` :主要用于应用 `class`  类样式；
  - `属性` ：表示要应用的类样式；
  - `属性值` ：为 `true` 应用，为`false`则不应用；
- `v-bind:style="{color: 'red',fontSize: '40px'}"`:主要用于设置`css`样式；
- `v-bind:style='obj1'`:此时的`obj1`为一个对象；

```vue
<!--语法-->
<p v-bind:class="{w: true}">我是一个p标签</p>
<p v-bind:style="{color: 'red',fontSize: '40px'}">我是一个大大的p标签</p>
<span v-bind:style='obj1'>我是span标签</span>
<!--绑定标准属性实现vue操作-->
<div id='asd' v-bind:title="title">我是div标签</div>
```

## `v-else` ：

- 主要用于判断，可以参考`if(){}`;
-  `v-else`是搭配`v-if`使用的，它必须紧跟在`v-if`或者`v-else-if`后面，否则不起作用。 

```html
<span v-if="age>=78">{{adult}}</span>
<span v-else-if="age>=58">{{juveniles}}</span>
<span v-else="juveniles">{{juveniles}}</span>
```

## `v-model` ：

> 1、双向绑定，即数据和视图的实时更新；
>
> 2、在内部为不同的输入元素使用不同的属性并抛出不同的事件；

- 当应用于`text` 和 `textarea` 元素时`v-model`将用于监听 `value` 属性值的变化并触发 `input` 事件；
- 当应用于`checkbox` 和 `radio` 元素时`v-model` 将用于监听`checked` 属性值的变化并触发 `change` 事件；
- 当应用于`select` 字段将 `value` 作为 prop 并将 `change` 作为事件。**？？？**
- 可以直接获取表单的文本内容；
- 当用于`复选框`

```html
<input type="text" v-model="text">
```

### 修饰符：

- ` .trim`：

  - 其作用是清空两端空白符；
  - **注意：**此时若监听`text`的值，则前面空格的输入不会触发监听函数的执行；

  ```html
  <input type="text" v-model.trim="username" /></li>
  ```

  

- `.lazy`：

  - 用于取代原先的 input事件，改为 change事件;
    - 不会在输入内容时触发事件了，而是在输入完毕后失去焦点时触发事件；

  ```html
  <!--用于取代原先的 input事件，改为 change事件；-->
  <input type="text" v-model.lazy="msg">
  ```

- `.number`：

  - 把数字字符转换为**数字类型**，若第一次输入的是数字则会触发change事件，若后面继续输入其它的字符则不会在触发change事件；

  ```html
  <input type="text" v-model.number="msg1">
  ```

- `.`

### 事件修饰符：

- `.stop`：

  -  阻止事件冒泡；

  ```html
  <a v-on:click.stop="doThis"></a>
  ```

- ` .prevent `：

  -  事件不再重载页面 ；
  -  可以用于阻止`submit`的页面的默认跳转；

  ```
  
  ```

- ` .self `：

  -  只当在 `event.target` 是当前元素**自身**时触发处理函数 ;

  ```
  
  ```

- ` .once `：

  -  事件将只会触发一次 ；

  ```
  
  ```

- ` .passive `：

  -  告诉浏览器你不想阻止事件的默认行为 ；

  ```
  
  ```

> 使用修饰符时，顺序很重要；相应的代码会以同样的顺序产生。因此，用`v-on:click.prevent.self`会**阻止所有的点击**，而 `v-on:click.self.prevent` 只会阻止对元素自身的点击。

## `v-on` ：

> 支持动态参数绑定；

- 用于事件的绑定；
- `v-on`简写为`@`;

```html
 <input @change="change" type="text" v-model="text">
```

## `v-for` ：

> 注意：v-for 不能 与 v-if  一起使用；

- 用于循环遍历：

```JS
//当参数为 1 个时；为值；
<h3 v-for="key in arr">{{key}}</h3>

//当参数为 2 个时； 为值==键；
<p v-for="(value, name) in user"></p>

//当参数为 3 个时； 为值==键==索引；
<p v-for="(value, name, index) in user"></p>
```

- 值范围的遍历；

  -  也可以接受整数。在这种情况下，它会把模板重复对应次数。

  ```html
  <div>
    <span v-for="n in 10">{{ n }} </span>
  </div>
  ```

  

- **`key`的使用；**

  - `key`用作唯一的身份标识，用于告知浏览器，进行`Dom`的重新(创建)渲染，而不是`复用`；
  - 在`Dom`节点的更新过程中，浏览器会识别`key`值的变化，然后判断是否进行`Dom`的重新渲染；

```html
<body>
<div id="app">
  <button @click="ok">点击反转</button>
  <ul>
      <!--key 的值要唯一，key的值不能使用索引值，-->
    <li v-for="item in msg" :key="item.id">
      <span>{{item.name}}</span>
      <input type="text">
    </li>
  </ul>
</div>
</body>
<script src="../../libs/vue.js"></script>
<script>
  new Vue({
    el: "#app",
    data: {
      msg: [
        {id: 1, name: "小明"},
        {id: 2, name: "小红"},
        {id: 3, name: "小李"},
        {id: 4, name: "小绿"}
      ]
    },
    methods: {
      ok: function () {
        //点击反转数组
        this.msg.reverse()
      }
    }
  })
</script>
```



## 例：

```html
<div id='w'>
    //绑定事件 并获取表单内容；
    <input @change="change" type="text" v-model="text">
    <span>{{name}}今年</span>
    <span>{{age}}岁了</span>
    <span v-if="age>=78">{{adult}}</span>
    <span v-else-if="age>=58">{{juveniles}}</span>
    <span v-else="juveniles">{{juveniles}}</span>
    <!--循环遍历-->
    <h3 v-for="a in arr">{{a}}</h3>
</div>
</body>
<script src="./libs/vue.min.js"></script>
<script>
    new Vue({
        el: "#w",
        data: {
            text: "",
            name: '小明',
            age: '',
            adult: "成年了",
            juveniles: "未成年",
            arr: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        },
        methods: {
            change: function () {
                this.age = this.text;
            }
        }
    })
```

## `v-once`：

- 只渲染元素一次;

```html
<!--只渲染一次，点击事件的触发不会改变其内容；相当于禁用了响应式-->
<span v-once>{{msg}}</span>
```

## `v-pre`：

- 所在元素不会被编译处理，可以理解为不被解析或渲染；

```html
<!--此时的{{msg}}不会被解析-->
<span v-pre>{{msg}}哈哈哈</span>
```

## 计算属性：

> 1、 模板内的表达式非常便利，但是设计它们的初衷是用于**简单运算的**。在模板中放入太多的逻辑会让模板过重且难以维护 ；
>
> 2、 在一个计算属性里可以完成各种**复杂的逻辑**，包括运算、函数调用等，只要最终返回一个结果就可以。
>
> 3、**计算属性禁用箭头函数** ；
>
> 4、**计算属性自带缓存机制**；

## 侦听器：

- 能够监听到数据的变化并执行特定的逻辑。
- 只要数据发生变化就执行相关的逻辑代码；

```js
//深度监视；
todos: {
   handler() {
     window.localStorage.setItem("todos",JSON.stringify(this.todos))
    },
     deep: true, //默认为false
}
```



# 列表的更新：

## 遍历数组；

- 可以利用一些常用的数组的方法来更新数组；
  - push()
  - pop()
  - shift()
  - unshift()
  - splice()
  - sort()
  - reverse()


```html
<body>
<div id="app">
  <ul>
    <li v-for="item in arr">{{item}}</li>
  </ul>
</div>

</body>
<script src="../../libs/vue.js"></script>

<script>
  var vm=new Vue({
    el: "#app",
    data: {
      arr:[1,2,3,4,5,6,7,8,9],
    }
  })
</script>
```

> **注意**，以下两种情况都不会更新视图：
>
> - 当你利用索引直接设置一个数组项时，例如：`vm.items[indexOfItem] = newValue`
>- 当你修改数组的长度时，例如：`vm.items.length = newLength`
>   - ` vm.items.splice(newLength) `；

```js
// Vue.set
// 参数1： 实例的数组
// 参数2：索引
// 参数3：你要修改的那个数据新值
Vue.set(vm.items, indexOfItem, newValue)

//例： Vue.set(vm.arr, 6, 100)
```

## 遍历对象；

```html
<div id="app">
    <ul>
      <li v-for="item in msg">{{item.id}}--{{item.title}}</li>
    </ul>
    <!--如果obj对象中没有初始化的对象成员name，那么对象的修改不会响应到视图中-->
    <h1>{{obj.name}}</h1>
</div>

<script>
  var vm =new Vue({
    el: "#app",
    data: {
      msg: [
          //初始化的数据可以正常遍历；
        { id: 1, title: '吃饭1' },
        { id: 2, title: '吃饭2' },
        { id: 3, title: '吃饭3' },
        { id: 4, title: '吃饭4' }
      ],
        //空对象；
      obj: {},
    }
  })
</script>
```

### 对象的更新：

1. 已经初始化的数据可以直接`对象.属性="值"`的方式来进行数据的而更新；

2. 未初始化的数据可以采用**重新赋值**的方式进行数据的更新：`app.obj={"name": "小明"}`；

3. 未初始化的数据可以采用`vue`提供的方法来进行数的更新；

   ```js
   // 参数1：实例的数据对象
   // 参数2：属性名（注意：属性名是一个字符串）
   // 参数3：属性值
   Vue.set(vm.userProfile, 'age', 27)
   
   Vue.set(vm.obj,"name","小明")
   ```

# `template` 遍历渲染：

> 当需要遍历多个元素而又不想增加额外的元素节点的时候，可以结合 `Vue` 中提供的 `template` 遍历渲染；

- 结合`v-for`使用；
- 可以结合`v-if`使用；
- **不能结合`v-show`使用；**
- 渲染的结果``template``标签不会在`Dom`中出现；

> 注：注意：template 上不能使用 key，要把 key 加到真实的 DOM 节点

```html
<body>
   <div id="app">
    <button @click="ok">点击反转</button>
    <template v-for="item in msg">
      <div :key="item.id">
        {{item.name}}
        <input type="text">
      </div>
    </template>
  </div>
</body>

<script>
  new Vue({
    el: "#app",
    data: {
      msg: [
        {id: 1, name: "小明"},
        {id: 2, name: "小红"},
        {id: 3, name: "小李"},
        {id: 4, name: "小绿"}
      ]
    },
    methods: {
      ok: function () {
        //点击反转数组
        this.msg.reverse()
      }
    }
  })
</script>
```

​      

------

# 组件；

> 1. 概述：优化页面结构，简化开发过程；
>
> 2. 组件特点：
>
>    1. 简单、高效、不重复；
>    2. 组件是一个**特殊的 `Vue`实例**；`Vue`实例有的 组件基本都有；
>    3. 组件没有`el` ,但是有`template `组件页面结构；
>
> 3. 注意：
>
>    1. 组件中`data`为一个函数没有`el`选项 ；
>    2. 组件的`data`是一个带**返回值**的函数;
>    3. `template`代表其**页面结构** (有且只能有一个根元素)；
>    4. 每个组件都是**`独立`** 数据 逻辑没有任何关联；
>
> 4. 语法；
>
>    ```html
>    <!--语法-->
>    <div id="app">
>      <!-- 使用组件 直接写组件的名称标签即可   -->
>      <!-- 写了一个标签 相当于 一个组件实例 -->
>      <eight-eight></eight-eight>
>      <eight-eight></eight-eight>
>    </div>
>    
>     Vue.component("组件名称", {
>        // 组件对象
>        template: ``,
>        data: function () {
>          return {name: "字节跳动"};
>        },
>        methods: {},
>        computed: {},
>        watch: {},
>        created() {
>        },
>        mounted() {
>        }
>      });
>      var vm = new Vue({
>        el: "#app",
>        data: {},
>        methods: {}
>      });
>    ```
>
>    

## 全局组件；

- 注册组件名称推荐小写字母加横向的结构；
- 全局组件注册应该放在`Vue`实例化之前 ;
- 全局组件创建后，新创建的`Vue`实例也可以使用；
- 加减进步器案例；

```html
<div id="app">
  <step-counter></step-counter>
  <step-counter></step-counter>
</div>

<div id="app1">
    新创建的VUE实例也可以直接使用
  <step-counter></step-counter>
</div>

<script>
  Vue.component("step-counter", {
    // 页面结构
    template: `<div>
        <button @click="cut">-</button>
        <span>{{count}}</span>
        <button @click="add">+</button>
        </div>`,
    data() {
      return {
        count: 0
      };
    },
    methods: {
      cut() {
         //简化写法，如果前面的不执行，则后面的也不执行，否则执行；
        this.count && this.count--;
      },
      add() {
        this.count++;
      }
    }
  });
  var vm = new Vue({
    el: "#app",
    data: {},
    methods: {}
  });
    
 	var vm = new Vue({
    el: "#app1",
  });
</script>
```



## 局部组件；

> - 局部组件只能在当前实例上注册；

```html
<div id="app">
  <abc-d></abc-d>
  <abc-d></abc-d>
</div>

<script>
  // 局部组件需要在当前实例上注册
  var vm = new Vue({
    el: "#app",
    components: {
      // key(组件名称):value(组件对象)
      "abc-d": {
        template: `<p>我最牛</p>`,
      }
    }
  });
</script>
```



## 组件嵌套；

> 1. 组件嵌套就是在**`组件中`**使用**`其他组件`**;
> 2. 一旦形成组件嵌套 ,就有了**`父子关系`** ;
> 3. 组件嵌套最多不要超过三级；
> 4. 嵌套组件不要跨级访问；
> 5. 组件名称最好采用小写或驼峰命名法；

```html
<div id="app">
  <abc-p></abc-p>
   <!--<edf></edf>-->
</div>

<script>
  //创建全局组件；
  Vue.component("edf", {
    template: `<p style='color:blue'>我是一个全局组件edf</p>`
  });
  Vue.component("abc-p", {
    template: `<div>
        我是一个全局组件abc-p
          <child></child>
          <edf></edf>
          <!--<qwe></qwe> 跨级访问不到 -->
        </div>`,
    components: {
      child: {
        template: `<div style='color:red'>
            我是一个局部组件child
            <qwe></qwe>
            </div>`,
        components: {
          qwe : {
            template: `<div style="color:chartreuse">我式第二个局部组件</div>`
          }
        }
      }
    }
  });
  var vm = new Vue({
    el: "#app",
  });
</script>
```

## 组件通信；

1. 父组件 =》 子组件   需要将数据传给子组件 
2. 子组件 =》 父组件  如果父组件需要 子组件也可以传数据给父组件
3. 兄弟组件1 =》兄弟组件2 ;

## 父组件传值Props；

> - **`注意`**: 父组件传递给子组件的数据是**`只读`**的,即**`只可以用,不可以改`**
> - 用props完成父组件给子组件传值  传值的属性都是定义在 子组件的标签上,可以采用v-bind的形式传递动态值
> - 定义props属性 在标签上定义属性  v-bind传递动态值
> - 在子组件中声明接收的属性
> - 在子组件中使用 组件 记住 属性只可以用 不可改

```js
1. props是组件的选项  定义接收属性
2. props的值可以是 字符串 数组 props:["list"]
3. props数组里面的元素称之为prop(属性) 属性=?值
4. prop的值来源于外部的(组件的外部)
5. prop(我们这里是lists)是组件的属性->自定义标签的属性
6. prop的赋值位置(在使用组件时,通过标签属性去赋值)
7. prop的用法和data中的数据用法一样
```

​      

```html
<div id="app">
  <!-- Vue实例 就是food-meat的父 -->
  <!-- 1.定义属性 => 给谁传就在谁的标签上写属性 属性名随便写-->
  <food-meat :foods="list" a="1" b="2"></food-meat>
</div>

<script>
  var vm = new Vue({
    el: "#app",
    data: {
      list: ["红烧肉", "回锅肉", "四喜丸子", "刀削面"]
    },
    components: {
      "food-meat": {
        //   2 接收属性  props => 字符串/数组
        template: `
            <div>
              我是饭--{{foods}}{{b}}
              <button @click="oncl">按钮</button>
            </div>`,

        props: ["foods", "b"],  // props可以是数组  也可以是对象

        methods: {
          oncl() {
            console.log(this.foods,this.b,this.list,this instanceof Vue)
            // this.foods
            // 1、this指向当前组件实例 this.属性 不能直接拿到 data中的数据 ；
            // 2、拿到data中所有的数据,需要传值才能拿得到
            // 3、也可以拿到 props传递过来的所有属性
            // 3、this 也可以拿到 当前methods所有的方法
            // 3、this 也可以拿到所有的计算属性
          },
        }
      }
    }
  });
</script>
```

##  SPA;

> * 传统模式 每个页面及其内容都需要从服务器一次次请求  如果网络差, 体验则会感觉很慢；
> * spa模式, **`第一次`**加载 会将所有的资源都请求到页面 **`模块之间切换`**不会再请求服务器；

1. **优点；**

   - 用户体验好,因为前段操作几乎感受不到网络的延迟；
   - 完全组件化开发 ,原来属于一个个页面的工作被归类为一个个**`组件`**.；

2. **缺点；**

   - **`首屏`**加载慢->**`按需加载`** 不刷新页面 只请求js模块
   - 不利于SEO->**`服务端渲染`**；
   - **`开发难度高`**(框架) ；

3. **实现原理；**

   ```js
   * 可以通过页面地址的锚链接来实现spa;
   * hash(锚链接)位于链接地址 `#`之后;
   * hash值的改变`不会触发`页面刷新;
   * hash值是url地址的一部分,会存储在页面地址上 我们可以获取到;
   * 可以通过`事件监听`hash值得改变;
   * 拿到了hash值,就可以根据不同的hash值进行不同的`模块切换`;
   ```

   

##  路由-`vue-router`；

> * Vue-Router 是 [Vue.js](http://cn.vuejs.org/) 官方的路由管理器。它和 Vue.js 的核心深度集成，让构建**单页面**应用变得易如反掌   **它是一个插件**
> * Vuejs中不包含vue-router
> * 实现根据不同的请求地址 而**`显示不同的组件`**
> * 如果要使用 vue开发项目,前端路由功能**`必须使用`**vue-router来实现

## 使用步骤 ;

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
   var Home = {
   template: '<div>这是Home内容</div>'
   };
   var Users = {
   template: '<div>这是用户管理内容</div>'
   };
   ```

4. 实例化路由对象,配置路由规则;

   ```js
   // 配置路由规则
   var router = new VueRouter({
   routes: [
   { name: 'home', path: '/', component: Home },
   { name: 'users', path: '/users', component: Users }
   ]
   });
   ```

5. `vue`实例挂载router实例;

   ```js
   var vm = new Vue({
   el: '#app',
   router
   });
   ```

## `vue-router`-动态路由;

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

## `vue-router-to`属性赋值；

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






---
title: vue指令
category: vue
autoGroup-1: 基础
---

> 在`vue`中，指令是带有`v-`前缀的特殊特性；指令特性的值，预期是单个JavaScript**表达式**(v-for除外)，责任就是当表达式的值改变时，就响应式的作用于DOM，从而做出改变。 

## `v-if` 

> 条件渲染；

- 根据绑定数据的真假来决定是否渲染这个元素；

- 属性值类型为布尔类型；
- 当属性值为`false`时，则隐藏被作用的元素对象；

```html
<!-- 语法：-->
<div v-if='true'>我是第四个div</div>
```

## `v-show` 

> 条件显示；隐藏的本质是 css 属性`display: none`；

- 无论条件的真假始终都渲染元素；
  - 元素会始终渲染，至于是否显示则取决于`css`；

- 属性值类型为布尔类型；
- 当属性值为`false`时，则隐藏被作用的元素对象；不显示（display: none）

```html
<!--语法-->
<div v-show='false'>我是第三个div</div>
```

## `v-text`

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

## `v-html`

- 在渲染时可以解析`html`标签；

```html
<div v-html="msg"></div>
```

## `v-bind` 

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

## `v-else` 

- 主要用于判断，可以参考`if(){}`;
-  `v-else`是搭配`v-if`使用的，它必须紧跟在`v-if`或者`v-else-if`后面，否则不起作用。 

```html
<span v-if="age>=78">{{adult}}</span>
<span v-else-if="age>=58">{{juveniles}}</span>
<span v-else="juveniles">{{juveniles}}</span>
```

## `v-model` 

> 1、双向绑定，即数据和视图的实时更新；
>
> 2、在内部为不同的输入元素使用不同的属性并抛出不同的事件；

- 当应用于`text` 和 `textarea` 元素时`v-model`将用于监听 `value` 属性值的变化并触发 `input` 事件；
- 当应用于`checkbox` 和 `radio` 元素时`v-model` 将用于监听`checked` 属性值的变化并触发 `change` 事件；
- 当应用于`select` 字段将 `value` 作为 prop 并将 `change` 作为事件。
- 可以直接获取表单的文本内容；

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

- ` .self `：

  -  只当在 `event.target` 是当前元素**自身**时触发处理函数 ;

- ` .once `：

  -  事件将只会触发一次 ；

- ` .passive `：

  -  告诉浏览器你不想阻止事件的默认行为 ；


> 使用修饰符时，顺序很重要；相应的代码会以同样的顺序产生。因此，用`v-on:click.prevent.self`会**阻止所有的点击**，而 `v-on:click.self.prevent` 只会阻止对元素自身的点击。

## `v-on` 

> 支持动态参数绑定；

- 用于事件的绑定；
- `v-on`简写为`@`;

```html
 <input @change="change" type="text" v-model="text">
```

## `v-for` 

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

  - `key`用作唯一的身份标识，用于告知vue，进行`Dom`的重新(创建)渲染，而不是`复用`；
  - 在`Dom`节点的更新过程中，vue会识别`key`值的变化，然后判断是否进行`Dom`的重新渲染；

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

## `v-once`

- 只渲染元素一次;

```html
<!--只渲染一次，点击事件的触发不会改变其内容；相当于禁用了响应式-->
<span v-once>{{msg}}</span>
```

## `v-pre`

- 所在元素不会被编译处理，可以理解为不被解析或渲染；

```html
<!--此时的{{msg}}不会被解析-->
<span v-pre>{{msg}}哈哈哈</span>
```

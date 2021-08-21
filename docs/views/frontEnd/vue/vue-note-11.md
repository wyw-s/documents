---
title: 插槽
category: vue
autoGroup-1: 基础
---

> 插槽语法是Vue 实现的内容分发 API，用于复合组件开发。该技术在通用组件库开发中有大量应用。  

## 匿名插槽

```javascript
// comp1
<div>
	<slot></slot>
</div>

// parent
<comp>hello</comp>
```

## 具名插槽

```javascript
// comp2
<div>
	<slot></slot>
	<slot name="content"></slot>
</div>

// parent
<Comp2>
	<!-- 默认插槽用default做参数 -->
	<template v-slot:default>具名插槽</template>
	<!-- 具名插槽用插槽名做参数 -->
	<template v-slot:content>内容...</template>
</Comp2>
```

## 作用域插槽

> 分发内容到要用到子组件中的数据

```javascript
// comp3
<div>
	<slot :foo="foo"></slot>
</div>

// parent
<Comp3>
	<!-- 把v-slot的值指定为作用域上下文对象 -->
	<template v-slot:default="slotProps">
	来自子组件数据：{{slotProps.foo}}
	</template>
</Comp3>
```


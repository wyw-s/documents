---
title: redux使用
---

## `Redux概述`

>  Redux 是 JavaScript 状态容器，提供可预测化的状态统一管理。 
>
> **注意**：它不是react独有的，任何地方都可以用：原生`js`、`jQery`、`vue`等。

1. 三大原则：
   1. 单一数据源。
   2. State 是只读的。
   3. 使用纯函数来执行修改。

## 基本使用；

### 1、安装；

- 通过标签引入；

  ```js
  <script src="../node_modules/redux/dist/redux.js"></script>
  
  const { Redux } = window  // 要结构出来使用；
  ```

- 通过`npm`包管理。

  ```js
  // 安装；
  npm install --save redux
  
  // 引入；
  import { createStore } from 'redux';
  ```

## `Action`;

> 1、 **Action** 是把数据从应用传到 store 的有效载荷。它是 store 数据的**唯一**来源。
>
> 2、本质：本质上`javaScript`的普通对象。
>
> 3、注意： action 内必须使用一个字符串类型的 `type` 字段来表示将要执行的动作 。
>
> 4、 多数情况下，`type` 会被定义成字符串常量。**建议使用单独的模块或文件来存放 action。** 
>
> ```js
> // 单独的模块统一管理存放 action；
> import { ADD_TODO, REMOVE_TODO } from '../actionTypes'
> ```

```js
// 添加新 todo 任务的 action ：
const ADD_TODO = 'ADD_TODO'

const action1 = {
  type: ADD_TODO,
  text: 'Build my first Redux app'
}
```

## `Action `创建函数;

> 概述： **Action 创建函数** 就是生成 `action `的方法 。

```js
// action 创建函数只是简单的返回一个 action:

function addTodo(text) {
  return {
    type: ADD_TODO,
    text
  }
}
```

## `Reducer`;

> 概述： **Reducers** 指定了应用状态的变化如何响应 [actions](https://www.redux.org.cn/docs/basics/Actions.html) 并发送到 store 的，注意 actions 只是说明了*有事情发生了*这一事实，并没有说明应用如何更新 state。 

### 1、设计`state`结构；

-  所有的 state 都被保存在一个单一对象中 。

### 2、`Action`处理;

>  确定了 state 对象的结构，就可以开发 reducer。reducer 就是一个**纯函数**，接收旧的 state 和 action，返回新的 state。 

```js
 // 旧数据
  const state = {
    num: 20
  }
  const reducerState = function (state, action) {
    // 新数据
    // const newState = { ...state }
    // 处理不同 action 
    switch (action.type) {
      case 'add':
        const newState1 = {
          ...state
        }
        newState1.num++
        return newState1
      case 'sub':
        const newState2 = {
          ...state
        }
        newState2.num++
        return newState2
      default: 
     	return state // 默认返回原数据
    }
    return newState
  }
```

> 注意：
>
> 1、 **不要**在`reduce `里修改传入的参数。
>
> 2、  **不要**执行有副作用的操作，如 API 请求和路由跳转； 
>
> 3、**不要** 调用非纯函数，如 `Date.now()` 或 `Math.random()`。 

## `Score`

> 概述：
>
> **Store** 就是把它们联系到一起的对象。Store 有以下职责：
>
> - 维持应用的 state；
> - 提供 [`getState()`](https://www.redux.org.cn/docs/api/Store.html#getState) 方法获取 state；
> - 提供 [`dispatch(action)`](https://www.redux.org.cn/docs/api/Store.html#dispatch) 方法更新 state；
> - 通过 [`subscribe(listener)`](https://www.redux.org.cn/docs/api/Store.html#subscribe) 注册监听器;
> - 通过 [`subscribe(listener)`](https://www.redux.org.cn/docs/api/Store.html#subscribe) 返回的函数注销监听器。

### 1、 创建 store ；

```Js
// src导入方式；
const { Redux: {createStore} } = window

// 包引入方式；
import { createStore } from 'redux'
import todoApp from './reducers'
// 创建仓库；
let store = createStore(todoApp)
```


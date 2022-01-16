---
title: context
category: REACT
date: 2022-01-02
---

> Context 提供了一个无需为每层组件手动添加 `props`，就能在组件树间进行数据传递的方法。 【跨组件通讯】
>
> 使用场景：如果两个组件嵌套多层可以使用`Context`实现组件通讯 。

![1577707671143](assets/1577707671143.png)

## 使用步骤

### 创建`Context`对象

> 当 React 渲染⼀个订阅了这个 Context 对象的组件，这个组件会从组件树中离⾃身最近的 那个匹配的 Provider 中读取到当前的 context 值。

调用`React.createContext()`方法创建一个`Context`对象，该对象中包含`Provider`（提供数据） 和`Consumer`（消费数据） 两个组件。

```jsx
import React from 'react';
const { Provider, Consumer } = React.createContext();
```

### 使用`Provider`

> Provider 接收⼀个 value 属性，传递给消费组件，允许消费 组件订阅 context 的变化。⼀个 Provider 可以和多个消费组 件有对应关系。多个 Provider 也可以嵌套使⽤，⾥层的会覆 盖外层的数据。 当 Provider 的 value 值发⽣变化时，它内部的所有消费组 件都会重新渲染。Provider 及其内部 consumer 组件都不受 制于 shouldComponentUpdate 函数，因此当 consumer 组 件在其祖先组件退出更新的情况下也能更新。

使用`Provider`组件包裹根节点；

```jsx
// App.js

import React from 'react';
import Child from './views/context/Child';

// 子组件需要使用 Consumer 来获取值。
export const { Provider, Consumer } = React.createContext();

function App() {
  const obj = {
    count: 100,
  };

  return (
    <div className="App">
      {/* 在`Provider`设置`value`属性，表示要传递的数据 */} 
      <Provider value={ obj }>
        <h1>根元素</h1>
        <Child/>
      </Provider>
    </div>
  );
}

export default App;

```

### 放置`Consumer`

> React 组件也可以订阅到 context 变更。这能让你在函 数式组件中完成订阅 context。 这个函数接收当前的 context 值，返回⼀个 React 节点。传递给函数的 value 值等同于往上组件树离这个 context 最近 的 Provider 提供的 value 值。如果没有对应的 Provider，value 参数等同于传递给 createContext() 的 defaultValue。

在需要接收数据的地方放置`Consumer`来接收数据；

```jsx
// Child.js

import React, { Component }from 'react';
import { Consumer } from '../../App'

const Child2 = () => {
  return (
    <div>
      <h5>子组件 2</h5>
      <Consumer>
        {
          (context) => (<h5>拿到了父组件的数据:{context.count}</h5>)
        }
      </Consumer>
    </div>
  )
}

class Child extends Component{

  getCount = (context) => {
    return (
      <div>
        <h5>子组件 1</h5>
        <h5>拿到了父组件的数据:{context.count}</h5>
      </div>
    )
  }

  render() {
    return (
      <div>
        <Consumer>
          { this.getCount }
        </Consumer>
        <Child2/>
      </div>
    )
  }
}

export default Child;
```

### 挂载`contextType `

> 挂载在 class 上的 contextType 属性会被重赋值为⼀个由 React.createContext() 创建的 Context 对象。这能让你 使⽤ this.context 来消费最近 Context 上的那个值。你可以在任何⽣命周期中访问到它，包括 render 函数中。

::: warning

- `Provider, Consumer`需要**成对**使用，否则拿不到值。
- `Consumer`组件中包裹的必须是一个函数，参数即为context传过来的值。
- `contextType`: 你只通过该 API 订阅单⼀ context

:::

## 优化后

```javascript
// contextCom.js
import React, { createContext } from 'react';

export const Context = createContext();
export const Provider = Context.Provider;
export const Consumer = Context.Consumer;
```

```javascript
// app.js

import React from 'react';
import './App.css';
import Child from './views/context/Child';
import { Provider } from './views/context/ContextCom';

function App() {
  const obj = {
    count: 100,
  };

  return (
    <div className="App">
      <Provider value={ obj }>
        <h1>根元素</h1>
        <Child/>
      </Provider>
    </div>
  );
}

export default App;
```

```javascript
import React, { Component }from 'react';
import { Consumer, Context } from './ContextCom';

const Child = () => {
  return (
    <div>
      <h5>子组件 2</h5>
      <Consumer>
        {
          (context) => (<h5>拿到了父组件的数据:{context.count}</h5>)
        }
      </Consumer>
    </div>
  )
}

class Child extends Component{

  // 把context上下文。挂载到类组件的静态属性上，这样就可以使用 this.context拿到传过来的值
  static contextType = Context;

  child = (context) => {
    return (
      <div>
        <h5>子组件 1</h5>
        <h5>拿到了父组件的数据:{context.count}</h5>
      </div>
    )
  }

  render() {
    return (
      <div>
         { this.child(this.context) }
        <Child/>
      </div>
    )
  }
}

export default Child;
```

> 通过把context上下文挂载到类组件的静态属性上，就可以使用 `this.context`拿到传过来的值。

::: info

- `static contextType = Context`中一定要叫`contextType`否则拿不到值的。
- 挂载到`contextType`后可以不用`Consumer`包裹就可以拿到context传递的值。
- `this.context`在任何生命周期中都可以访问到。

:::

## 总结

1. `Provider, Consumer`需要**成对**使用，否则拿不到值。
2. `Consumer`组件中包裹的必须是一个函数，参数即为context传过来的值。
3. 类组件可以不使用`consumer`来获取值，可以通过挂载到静态属性来访问。
4. 挂载的静态属性必须是`contextType`。
5. `createContext(defaultValue)`可以设置默认值。
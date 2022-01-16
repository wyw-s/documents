---
title: react组件
category: REACT
date: 2021-12-27
---

> 组件的可复用、独立、可组合特性可以让我们用多个组件实现完整的页面功能，进行更快速的项目开发。

react中组件分为两类：

- 类组件；
- 函数组件；

## 函数组件

> 使用js创建的并返回JSX的函数，称为函数组件。函数组件通常**⽆状态**，仅关注内容展示，返回渲染结果即可。

```jsx
// 创建一个函数组件
function Hello() { 
  return ( 
    <div>这是我的第一个函数组件！</div> 
  ) 
} 
// 用函数名作为组件标签名
ReactDOM.render(<Hello />, document.getElementById('root'))
```

> 注意：
>
> - 函数名称必须以**大写字母**开头，使用**大驼峰**命名法；
> - 函数组件必须有**返回值**，表示该组件的结构；
> - **组件标签可以单闭合**；

::: info

从React16.8开始引⼊了hooks，函数组件也能够拥有状态

:::

## 类组件

> 使用`ES6 `的`class`关键字创建的组件称为类组件 。class组件通常拥有**状态**和⽣命周期，继承于**Component**，实现render⽅法。

```jsx
// 类组件应该继承`React.Component`父类，从而可以使用父类中提供的方法和属性。
class Hello extends React.Component { 
  render() { 
    return <div>Hello Class Component!</div> 
  } 
} 
ReactDOM.render(<Hello />, root) 
```

> 注意：
>
> - **类名称也必须以大写字母开头**，**使用大驼峰命名法**  。
> - 类组件必须提供`render()`方法 。
> -  `render()`方法必须有返回值，表示该组件的结构。

## 高阶组件

> 高阶组件本质上就是**高阶函数**，接收要包装的组件，返回增强后的组件。
>

1. 创建一个函数，名称约定以 with 开头 。
2. 指定函数参数，参数应该以大写字母开头（作为要渲染的组件）。
3. 在函数内部创建一个类组件，提供复用的状态逻辑代码，并返回 。
4. 在该组件中，渲染参数组件，同时将状态通过prop传递给参数组件。
5. 调用该高阶组件，传入要增强的组件，通过返回值拿到增强后的组件,并将其渲染到页面中 。

```jsx
// 创建一个高阶组件
function withMouse(WrappedComponent) { 
  // 创建类组件并返回
  return class MouseHoc extends React.Component {
    state = {
      x:0,
      y:0
    }
    
    render() {
      // 使用参数组件并传入状态参数；
      return <WrappedComponent {...this.state} /> 
    }
  } 
} 

// 创建组件 Position为要传入的另一个函数组件；
const MousePosition = withMouse(Position) 
 
// 渲染组件 
<MousePosition /> 
```

::: warning

不要在 render ⽅法中使⽤ HOC，React 的 diff 算法（称为协调）使⽤组件标识来确定它是应该更 新现有⼦树还是将其丢弃并挂载新⼦树。 如果从 render 返回 的组件与前⼀个渲染中的组件相同（===），则 React 通过将 ⼦树与新⼦树进⾏区分来递归更新⼦树。 如果它们不相等，则 完全卸载前⼀个⼦树。

```jsx
render() {
  // 每次调⽤ render 函数都会创建⼀个新的
  EnhancedComponent
  // EnhancedComponent1 !== EnhancedComponent2
  const EnhancedComponent = enhance(MyComponent);
  // 这将导致⼦树每次渲染都会进⾏卸载，和重新挂载的操作！
  return <EnhancedComponent />;
}
```

:::

## 装饰器

> ⾼阶组件本身是对装饰器模式的应⽤，⾃然可以利⽤`ES7`中出现的 装饰器语法来更优雅的书写代码。

### 安装依赖

```bash
npm install -D @babel/plugin-proposal-decorators react-app-rewired customize-cra
```

### 添加配置文件

```javascript
// config-overrides.js

//配置完成后记得重启下
const { addDecoratorsLegacy, override } = require("customize-cra");

module.exports = override(
  //配置装饰器
  addDecoratorsLegacy()
)
```

### 修改启动脚本

```bash
"scripts": {
-  "start": "react-scripts start",
+  "start": "react-app-rewired start",
-  "build": "react-scripts build",
+  "build": "react-app-rewired build",
+  "test": "react-app-rewired test",
+  "eject": "react-app-rewired eject"
},
```

### 使用

```jsx
const Bar = (Child) => (props) => {
  return (<div>
    <h1>BAR</h1>
    <Child {...props} />
  </div>)
}

export default Bar;
```

```jsx
import React, { Component } from 'react';
import Bar from './bar';

// 使用装饰器
@Bar
class Foo extends Component {
  render() {
    return (<div>Foo</div>)
  }
}

export default Foo;
```

```jsx
import React from 'react';
import Foo from './views/foo';

function App() {
  return (
    <div className="App">
      <Foo />
    </div>
  );
}

export default App;
```

::: into

- 装饰器必须`return`一个函数，不能直接返回一个`jsx`；

  ```jsx
  // 正确
  const Bar = (Child) => (props) => {
    return (<Child {...props} />)
  }
  
  // 错误
  const Bar = (Child) => {
    return (<Child {...props} />)
  }
  
  export default Bar;
  ```

- 被装饰的组件，要以组件的方式使用`< Child />`不能`{ Child }`；

- 装饰器只能⽤在class上。

-  多个装饰器，执⾏顺序从下往上。

:::

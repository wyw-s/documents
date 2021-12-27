---
title: state和setState
category: REACT
date: 2021-12-27
---

## `state `和`setState()` ;

### 1、`state `;

1. 状态（state）即数据，是组件内部的私有数据，**只能**在组件内部使用 。
2. state 的值是对象，表示一个组件中可以有多个数据 。

### 2、`setState()`；

- 状态是可变的 

  - 语法：`this.setState({ key:val, key2:val2 })` 。

- `setState()`作用：

  - 修改 state 
  - 更新`UI `

  > 注意：不能直接修改 state 中的值，this.state.num=2  这样写错误!

```jsx
import React, { Component } from 'react';
class Index extends Component {
  // num加一
  handlerNum = () => {
    // 不能直接给状态数据赋值
    // this.state.num = this.state.num + 1
    this.setState({
      // key:val
      num: this.state.num + 1
    })
  }

  state = {
    num: 0
  }

  render() {
    return (
      <div>
        <h1 onClick={this.handlerNum}>有状态组件</h1>
        <p>{this.state.num}</p>
      </div>
    )
  }
}

export default Index;

```


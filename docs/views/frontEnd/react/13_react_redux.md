---
title: react-redux
category: REACT
date: 2022-01-02
---

> `react-redux`是[Redux](https://github.com/reactjs/redux) 官方提供的 React 绑定库。 具有高效且灵活的特性。本库并不是 Redux 内置，需要单独安装。通常会和react一起使用

## 安装

```bash
npm install --save react-redux
```

react-redux提供了两个api

1. Provider 为后代组件提供store 
2. connect 为组件提供数据和变更⽅法

## 使⽤

> 使用react-redux实现加减器

```javascript
// index.js
import React from 'react'
import ReactDom from 'react-dom'
import App from './App'
import store from './store/'
import { Provider } from 'react-redux'

ReactDom.render(
 <Provider store={store}>
 	<App/>
 </Provider>,
 document.querySelector('#root')
)
```

```javascript
// 获取状态数据，ReactReduxPage.js
import React, { Component } from 'react';
import { connect } from 'react-redux';

class ReactReduxPage extends Component {
  render() {
    const { num, add, minus } = this.props;
    return (
      <div>
        <h1>ReactReduxPage</h1>
        <p>{ num }</p>
        <button onClick={ add }>add</button>
        <button onClick={ minus }>minus</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    num: state,
  };
};
const mapDispatchToProps = {
  add: () => {
    return { type: 'add' };
  },
  minus: () => {
    return { type: 'minus' };
  },
};
export default connect(
  mapStateToProps, //状态映射 mapStateToProps
  mapDispatchToProps, //派发事件映射
)(ReactReduxPage);
```


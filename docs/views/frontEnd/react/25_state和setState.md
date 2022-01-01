---
title: state和setState
category: REACT
date: 2021-12-27
---

## state

> 状态（state）即数据，是组件内部的私有数据，**只能**在组件内部使用 。state 的值是对象，表示一个组件中可以有多个数据 。

```javascript
import { Component } from 'react';

class SetStatePage extends Component{
  constructor(props) {
    super(props);
    // 初始化页面状态数据
    this.state = {
      count: 1,
    }
  }

  render() {
    return (
      <button>{ this.state.count }</button>
    )
  }
}

export default SetStatePage
```

## setState()

> 主要用来修改state的值，触发UI更新。

语法：

```javascript
 // 对象语法
this.setState(stateChange[, callback])

this.setState({
    count: 1
}, () => {
    // 这个回调函数会在状态更新后立即执行
})

// 函数语法
this.setState(updater[, callback])
// 参数state：表示最新的state 。参数props：表示最新的props 。
this.setState((state, props) => {
    return {
        count: 1
    }
}, () => {
    // 这个回调函数会在状态更新后立即执行
})
```

::: warning

不能直接修改 state 中的值，`this.state.num=2`  这样写错误!

:::

```jsx
import { Component } from 'react';

class SetStatePage extends Component{
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
    }
  }

  setCount = () => {
    // 使用setState修改count的值
    this.setState({
      count: this.state.count + 1,
    }, () => {
      // 在这里获取到最新的count
      console.log(this.state.count)
    })
  }

  render() {
    return (
      <button onClick={this.setCount}>{ this.state.count }</button>
    )
  }
}

export default SetStatePage
```

::: info

setState的操作可能是异步的，出于性能考虑，React会做批处理和覆盖，且只会触发一次重新渲染。

:::

## 获取最新state

1.  在回调中获取状态值:

   ```javascript
   this.setState({
       count: this.state.count + 1,
   }, () => {
       // 在这里获取到最新的count
       console.log(this.state.count) // 2
   })
   ```

2. 使⽤定时器：

   ```javascript
   setTimeout(() => {
       this.setState({
       	count: this.state.count + 1,
       })
       // 在这里获取到最新的count
       console.log(this.state.count) // 2
   }, 0)
   ```

3. 原⽣事件中修改状态:

   ```javascript
   componentDidMount(){
       document.body.addEventListener('click', this.setCount)
   }
   
   setCount = () => {
     this.setState({
        count: this.state.count + 1,
     })
     // 在这里获取到最新的count
     console.log(this.state.count)// 2
   }
   ```

> - setState只有在合成事件和⽣命周期函数中是异步的，在原⽣事件和setTimeout中都是同步 的，这⾥的异步其实是批量更新。
>
> - 可以在回调函数中获取到最新状态的值，它会在state更新完成后调用。

## 链式更新

> 使用setState多次修改state的值，只会最终更新一次，这个批量更新有关。

```javascript
setCount = () => {
    this.setState({
        count: this.state.count + 1,
    })
    this.setState({
        count: this.state.count + 2,
    }, () => {
        console.log(this.state.count) // 3 不是4
    })
}
```

> react会把state的更新进行合并，以最后一个修改为准。如果你就是想批量更新那怎么办呢？

```javascript
// 批量更新state
setCount = () => {
    this.setState((state) => {
      return {
        count: state.count + 1,
      }
    })
    this.setState((state) => {
      return {
        count: state.count + 2,
      }
    }, () => {
      console.log(this.state.count) // 4
    })
  }
```

::: info

使用回调函数设置state状态时最好使s用参数提供的state来取上一次的值。

```javascript
// 批量更新state
setCount = () => {
    this.setState((state) => {
      return {
        count: state.count + 1,
      }
    })
    this.setState(() => {
      // 不要用this.state.count中的值，因为此时的值不是最新的，最新的值应该是上一次的值 2
      return {
        count: this.state.count + 2,
      }
    }, () => {
      console.log(this.state.count) // 3
    })
}
```

:::

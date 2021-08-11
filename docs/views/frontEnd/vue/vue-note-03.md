---
title: 侦听器
category: vue
autoGroup-1: 基础
---

> 能够监听到数据的变化并执行特定的逻辑，只要数据发生变化就执行相关的逻辑代码；

```javascript
// 深度监听；
todos: {   
    handler() {     
        window.localStorage.setItem("todos",JSON.stringify(this.todos))    
    },     
    deep: true, // 默认为false
}
```


---
title: 立即执行函数(IIFE)
category: javascript
autoGroup-20: 函数应用
date: 2021-06-08 22:10:45
---

> 立即执行函数会创建一个新的作用域，里面的执行的方法和变量不会影响全局作用域；

## 语法

```
// 立即执行函数表达式语法
(function () {})()

// 变体；
(function () {}())
```



```javascript
(funcion () {
 	let page = {
 		init() {
  		console.log('hello')
		}
 	}
  page.init();
})()
```

> 不推荐在立即执行函数中，直接引用全局变量；可以采用参数传递的方式；``(funtion (win) {})(window)``

::: tip

在es6中，由于引用了块级作用域，所以就不需要采用立即执行函数了

:::
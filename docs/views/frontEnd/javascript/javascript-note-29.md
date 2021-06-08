---
title: 作用域链延长
---

## `try-catch`

## `with`

> with可将某个对象添加到作用域链的顶端，然后执行with语句块中的代码，执行完后会把作用域链回复到之前的状态。

```javascript
function f(foo, x, y) {
  with (foo) {
    console.log(x, y);// 1, 3
  }
  console.log(x, y); // 2, 3
}
f({x: 1}, 2, 3);
```


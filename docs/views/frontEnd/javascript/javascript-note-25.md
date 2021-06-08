---
title: 作用域
---

> 简单来说作用域就根据名称查找变量的一套规则；

## 函数作用域

> 使用var声明的变量在声明它的函数体以及该函数体中的嵌套函数体内都是可以访问的。

```javascript
var x = 5;
function f() {
  var y = 10;
  console.log(x, y);
  function f_1() {
    var z = 15;
    console.log(x, y, z);
  }
   f_1();
}
f();
```



## 作用域分类

1. 静态作用域(词法作用域): static scope；
   - 如果函数中的变量，没有在该函数中定义，就去定义该函数的地方查找；
   - 静态作用域，也叫此法作用域，代码写完后，变量的作用域就已确定不变；
   - js使用静态作用域；
2. 动态作用域: dynamic scope；
   - 如果函数中的变量，没有在该函数中定义，就去调用该函数的地方查找；
   - 动态作用域，代码写完后，变量的作用域还无法确定，它和调用它所在的函数有关；

```javascript
let x = 10;
function f() {
  return x;
}
function g() {
  let x = 20;
  return f();
}
console.log(g());// 10;
```


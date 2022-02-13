---
title: 声明提升
category: javascript
date: 2021-06-08 22:05:34
---

> 简单来说就是，在var声明的变量之前使用这个变量不会导致报错，而是会打印undefined

## 声明提前；

> 函数内所有使用var声明的变量在函数体内可见。意味着变量在声明之前已经可用，这个特性就叫**声明提前**，即函数中的所有变量及函数声明都会提升至函数体的顶部。

### 例：变量声明提前；

```javascript
var x = 5;
function f() {
  // undefined 声明提前，但赋值不会
  console.log(x);
  var x = 10;
}

// 实际执行情况；
var x = 5;
function f() {
  var x;
  console.log(x);
  x = 10;
}
```

### 例：函数声明提前；

```javascript
function f() {
  // 可以调用成功
  x();
  function x() {
    console.log(1);
  }
}
f();

// 注意；函数表达式不会提前
function f() {
  // 报错
  x();
  var x = function x() {
    console.log(1);
  }
}
f();
```

## 优先级；

> 函数声明提前高于变量声明提前；

```javascript
var double = 22;
function double(num) {
  return (num * 2);
}
console.log(typeof double); // 'number'

// 实际
var double;
function double(num) {
  return (num * 2);
}
double = 22
console.log(typeof double); // 'number'
```


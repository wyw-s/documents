---
title: 常用函数
category: javascript
autoGroup-20: 函数应用
date: 2021-07-01 22:22:34
---

## 缓存函数

> 缓存函数是指将上次的计算结果缓存起来，当下次调用时，如果遇到相同的参数，就直接返回缓存中的数据；

例：
```javaScript
// 缓存函数
let memoize = function (func) {
  let cache = {};
  return function (key) {
    if (!cache[key]) {
      cache[key] = func.apply(null, arguments);
    }
    return cache[key];
  }
}

let add = (a, b) => a + b;
let calculate = memoize(add);
console.log(calculate(10, 20)) // 30
console.log(calculate(10, 20)) // 相同的参数，第二次调用时，从缓存中取出数据，而非重新计算一次；
```
> 实现原理：把参数和对应的结果数据存到一个对象中，调用时，判断参数对应的数据是否存在，存在就返回对应的结果数据；
>
> 应用场景：需要大量重复的计算，或者大量计算又依赖于之前的结果；

## 柯里化函数

> 在数学和计算机科学中，柯里化是一种将使用多个参数的一个函数转换成一系列使用一个参数的函数的技术；

例一：

```javaScript
// 非柯里化函数
function girl(name, age, single) {
  return `我叫${name},我今年${age}岁,我${single}单身`;
}

let lincancan = girl('林灿灿', 18, '不是')

console.log(lincancan) // 我叫林灿灿,我今年18岁,我不是单身

// 柯里化函数
function girl(name) {
  return function (age) {
    return function (single) {
      return `我叫${name},我今年${age}岁,我${single}单身`
    }
  }
}
let rst = girl('林灿灿')(18)('不是');

console.log(rst) // 我叫林灿灿,我今年18岁,我不是单身
```

例二：

```javaScript
// 需求：检测字符串中是否包含空格
let matching = (reg, str) => reg.test(str);
console.log(matching(/\s+/g, 'hello world')) // true
console.log(matching(/\s+/g, 'abcdefg')) // false

// 柯里化函数
let curry = (reg) => {
  return (str) => {
    return reg.test(str);
  }
}

let hasSpase = curry(/\s+/g);
console.log(hasSpase('hello world')) // true
console.log(hasSpase('abcdefg')) // false
console.log(hasSpase('I Love China')) // true
```

例三：借助loadsh函数库；

> 1、lodash是一个一致性、模块化、高性能的javaScript实用工具库；
>
> 2、lodash通过降低array、number、objects、string等等的使用难度从而让javaScript变得更简单；

```javaScript
// 法一；
const _ = require('lodash');
let persons = [
  { name: 'Perter', age: 21 },
  { name: 'Mark', age: 28 },
  { name: 'Josn', age: 19 }
]

let getProp = _.curry((key, obj) => {
  return obj[key];
})
let age = persons.map(getProp('age'));
console.log(age) // [ 21, 28, 19 ]

// 法二；
let age = persons.map((item) => item.age);
console.log(age) // [ 21, 28, 19 ]
```

## 偏函数

> 偏函数：是固定一个函数的一个或者多个参数，也就是将一个n元函数转换成一个n-x元函数；

1. 柯里化：`f(a, b, c) = f(a)(b)(c)`;
2. 偏函数：`f(a, b, c) = f(a, b)(c)`

例：

```javaScript
// 使用bind实现；
let add = (x, y) => x + y;
let rst = add.bind(null, 1);
rst(2); // 3
```


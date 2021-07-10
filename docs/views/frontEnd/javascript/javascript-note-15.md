---
title: 高阶函数
category: javascript
---

> 1、高阶函数是对其他函数进行操作的函数，可以将它们作为参数或返回它们；
>
> 2、简单来说，高阶函数是一个函数，它接收函数作为参数或将函数作为输出返回；

## `map方法`

需求：创建一个新数组，其中的值是原数组的值的两倍

```javaScript
// 结果；
const arr = [1,2,3,4];
const arr1 = arr.map((item) => item * 2);
console.log(arr1)// [2,4,6,8]
```

## `reduce方法`

需求：创建一个新数组，并对数组中的值进行求和；

```javaScript
const arr = [1,2,3,4];
const sum = arr.reduce((a, b) => a + b, 0)
console.log(sum); // 10
```

需求：创建一个新数组，并对数组中的值进行**去重**；

```javaScript
const arr = [1,2,3,3,3,3,4,3,4,5];
const arr2 = arr.reduce((prev, cur) => {
  prev.indexOf(cur) === -1 && prev.push(cur)
  return prev;
}, []);
console.log(arr2); [ 1, 2, 3, 4, 5 ]
```

## `filter方法`

需求：筛选数组中满足指定条件的数据；

```javaScript
let persons = [
  { name: 'peter', age: 21 },
  { name: 'mark', age: 28 },
  { name: 'josn', age: 19 },
  { name: 'jane', age: 31 },
  { name: 'tony', age: 35 },
]

let newAge = persons.filter(item => item.age > 21);
console.log(newAge);
// [
//   { name: 'mark', age: 28 },
//   { name: 'jane', age: 31 },
//   { name: 'tony', age: 35 }
// ]
```

## `flat方法`

> 可以实现数组扁平化；将多维数组变为一维数组，该方法会返回新数组对原数组没有影响；

```javaScript
let arr = [1, 2, 3, 4, [5, 6, [7, 8, [9, 10, [11, 12, [13, 14]]]]]];
// 默认只会展平一层
let arr1 = arr.flat();
// 可以通过参数指定需要展平的层数
let arr2 = arr.flat(2);
// 如果不知道有多少层可以传入 Infinity 关键字 展平无限层
let arr3 = arr.flat(Infinity);
console.log(arr1, arr2, arr3);
```

## 高阶函数的意义；

1. 将函数作为参数；

   ```javaScript
   // 参数为函数的高阶函数
   function foo (f) {
     // 判断实参是否为函数
     if ((typeof f) === 'function') {
         f();
     }
   }
   
   // 调用
   foo(function() {})
   ```

2. 将函数作为返回值；

   ```javaScript
   // 返回值为函数的高阶函数；
   function foo() {
     return function () {}
   }
   
   // 调用；
   let f = foo();
   ```

3. 高阶函数的实际作用；

   ```javaScript
   const callback = (val) => {
     console.log(val);
   };
   
   const foo = (val, fn) => {
     if (typeof fn === 'function') {
         fn(val);
     }
   };
   
   foo('hello', callback)
   ```


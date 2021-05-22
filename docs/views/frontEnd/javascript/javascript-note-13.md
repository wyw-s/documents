---
title: 提高代码可靠性；
---

> 作为一名程序员，我们需要写出可靠的代码，来保障应用程序的安稳运行，所以提高自己的代码可靠性就变得有为重要；

## 函数式编程

> 函数式编程：是一种编程范式，是一种构建计算机程序结构和元素的风格，它把计算看作是对数学函数的评估，避免了状态的变化和数据的可变。将我们程序分解为一些更可用、更可靠且更易理解的部分，然后再将他们组合起来，形成一个更易推理的程序整体；
>
> 命令式编程： 就是详细的去命令机器怎么去处理一件事情，以达到你想要的结果。

示例：

```javascript
// 初级程序员
let arr = [1, 2, 3, 4]; 
let newArr = [];
for (let i = 0; i < arr.length; i++) {
  newArr.push(arr[i] + 1);
}
console.log(newArr); // [2,3,4,5]


// 函数式编程写法
let newArr = (arr, fn) => {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    res.push(fn(arr[i]));
  }
  return res;
}
let add = item => item + 5;
let multi = item => item * 5;
let sum = newArr(arr, add);
let product = newArr(arr,multi);
console.log(sum); // [ 6, 7, 8, 9 ]
console.log(product); // [ 5, 10, 15, 20 ]
```

## 纯函数

> 1、相同的输入，则永远返回相同的结果。
>
> 2、它不依赖于程序执行期间函数外部任何状态或数据的变化，必须只依赖于其输入参数；
>
> 3、没有任何可观察到的副作用；

1. 非纯函数；

   ```javaScript
   let discount = 0.8;
   const calculatePrice = (price) => price * discount;
   let price = calculatePrice(200);
   console.log(price);
   
   // 相同的输入不一样的输出；
   let discount = 0.8;
   let price = calculatePrice(200);
   console.log(price); // 160
   
   discount = 0.9;
   price = calculatePrice(200);
   console.log(price); // 180
   ```

   > 为什么说是不纯的函数，因为`discount`这个变量是从函数外部传入的，我们在调用这个函数的时候如果传入相同的输入，则不能保证相同的输出。我们可以发现由于我在外部改变了`discount`的值，导致相同的``200`，但是得到了不一样的结果；

2. 纯函数；

   ```javaScript
   const calculatePrice = (price, discount) => price * discount;
   let price = calculatePrice(200, 0.8);
   console.log(price); // 160
   ```


## 函数副作用

> 1. 当调用函数时，除了返回函数值之外，还对主调用函数产生附加的影响；
> 2. 例如修改全局变量(函数外的变量)或修改参数；

1. 函数副作用

   ```javascript
   // 例1：
   let a = 5;
   let foo = () => a = a * 10;
   foo();
   console.log(a);
   ```
   
   > 我们的函数除了运算以外，还修改了函数外的变量，这就是函数造成的副作用；
   
   除了我们自己定义的函数会产生副作用以外，一些原生的`API`也会产生副作用；
   
   ```javaScript
   let arr = [1,2,3,4,5,6];
   arr.slice(1,3); // 纯函数，返回[2,3],原数组不改变；
   arr.splice(1,3); // 非纯函数，返回[2,3,4]，原数组改变
   arr.pop(); // 非纯函数，返回6，原数组改变
   ```
  ------
  
  ```javascript
  // 例2 
  // 不纯的函数
  const foo = (something) => {
    const dt = new Date().toISOString();
    console.log(`${dt}:${something}`);
    return something；
  }
  foo('hello');
  
  // 改进
  // 依赖注入
  const foo = (d, log, something) => {
    const dt = d.toISOString();
    return log(`${dt}: ${something}`);
  }
  
  const something = '你好网易';
  const d = new Date();
  const log = console.log.bind(console);
  foo(d,log,something);
  ```
  
2. 保护函数无副作用的特性；

   - 函数入口使用参数运算，而不修改它；
   - 函数内不修改函数外的变量；
   - 运算结果通过函数返回给外部；

> 编写没有副作用的函数是不可能的，而且有些副作用是不可避免且至关重要的。所以我们的目标是尽可能的减少函数副作用

## 可变性和不可变性

> 可变性：是指一个变量创建以后可以任意修改；
>
> 不可变性：是指一个变量，一旦被创建，就永远不会发生改变，不可变性是函数式编程的核心概念；

1. 可变性；

   ```javaScript
   let data = { count: 1 };
   let foo = (data) => {
   	data.count = 3;
   }
   console.log(data.count); // 1
   // 调用foo函数；
   console.log(data.count); // 3
   
   ```

   > data对象里面count的值，在调用foo函数后值发生了改变；

2. 不可变性；

   ```javaScript
   let data = { count: 1 };
   let foo = (data) => {
     // 利用深拷贝解决可变性
     let lily = JSON.parse(JSON.stringify(data));
     lily.count = 3;
   }
   console.log(data.count); // 1
   // 调用foo函数
   foo(data);
   console.log(data.count); // 1
   ```

   
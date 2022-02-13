---
title: compose函数和pipe函数
category: javascript
autoGroup-20: 函数应用
date: 2021-05-12 22:22:34
---

## compose函数

1. 什么是compose函数；
   - 将需要嵌套执行的函数平铺；
   - 嵌套执行指的是，一个函数的返回值将作为另一个函数的参数；
2. 作用：实现函数式编程中的PointFree，使我们专注于转换而不是数据；

示例：

```javascript
// 1、下面的这段代码是典型的命令式编程，这样的代码不具备复用性；
let calculate = x => (x + 10) * 10;
console.log(calculate(10)); // 200

// 2、代码拆分；不足：简化了，但是不具备函数式编程
let add = x => x + 10;
let multiply = y => y * 10;
console.log(multiply(add(10))); // 200

// 3、复合函数；不足：只能执行两个函数
let compose = (f,g) => {
  return function (x) {
    return f(g(x));
  }
}
let calculate = compose(multiply, add);
console.log(calculate(10)); // 200

// 4、通用的compose函数 可以传入多个函数；
let compose = function () {
  let args = [].slice.call(arguments);
  return function (x) {
    return args.reduceRight(function (res, cb) {
      return cb(res);
    }, x)
  }
}
let calculate = compose(multiply, add);
consile.log(calculate(10)); // 200

// 5、reduce实现compose函数；
function compose(...funcs) {
  if (funcs.length === 0) {
    return arg => arg;
  }
  return funcs.reduce((a, b) => {
    return (...args) => a(b(...args))
  });
}
let add = n => n + 3;
let multiple = n => n * 2;
let minus = n => n - 1;
console.log(compose()(10),
compose(add, multiple, minus)(10), '==='); // 10 21

// 可以理解为；
const fn1 = (...args) => add(multiple(...args))
const fn2 = (...args) => fn1(minus(...args))

console.log(fn2(10)) // 21

//6、es6实现 compose函数；
const compose = (...args) => x => args.reduceRight((res, cb) => cb(res), x);
```

> 复合函数的执行顺序从**右往左**依次执行；比如webpack的loader也是从右往左，这是因为它采用了compose的方式去实现而已；

## pipe函数；

> pipe函数可以说是compose函数的复制品，所做的事情和compose也相同，只不过它的执行数据流的方向是从左往右执行而已；

例一：

```javaScript
let add = n => n + 3;
let multiple = n => n * 2;
let minus = n => n - 1;

// 法一
function pipe(...funcs) {
  if (funcs.length === 0) {
    return arg => arg;
  }
  return funcs.reduceRight((a, b) => {
    return (...args) => a(b(...args))
  });
}

console.log(pipe()(10)); // 10
console.log(pipe(add)(10)) // 13
console.log(pipe(add,multiple,minus)(10)) // 25

// 法二；
const pipe = (...args) => x => args.reduce((res, cb) => cb(res), x);
```


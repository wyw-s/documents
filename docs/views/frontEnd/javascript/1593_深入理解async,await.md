---
title: 深入理解async/await
category: javascript
date: 2021-06-24 21:05:22
autoGroup-15: 进阶
---

> 相对于回调函数来说，Promise是一种相对优雅的选择，那么有没有更好的方案呢？答案就是async/await。ES2017新增了两个关键字：async和await，代表异步javascript编程范式的迁移。允许我们编写像网络请求或其他异步事件而阻塞的同步代码一样编写异步代码。async函数是一个语法糖，它使异步操作更简单；

**async/await优点：**

- 从上到下，顺序执行，就像写同步代码一样，这更符合人编写代码的习惯。
- async/await是基于协程的机制，是真正的“保存上下文，控制权切换 ... ... 控制权恢复，取回上下文”这种机制，是对异步过程更精确的一种描述。
- async/await是对Promise的优化：

## `await`表达式

> await 表达式会暂停当前 [`async function`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/async_function) 的执行，等待 Promise 处理完成。若 Promise 正常处理(fulfilled)，其回调的resolve函数参数作为 await 表达式的值，继续执行 [`async function`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/async_function)。若 Promise 处理异常(rejected)，await 表达式会把 Promise 的异常原因抛出。另外，如果 await 操作符后的表达式的值不是一个 Promise，则返回该值本身。

语法

```javascript
[返回值] = await 表达式;
```

说明

- 表达式： 一个 [`Promise`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise) 对象或者任何要等待的值。
- 返回值：返回 Promise 对象的处理结果。如果等待的不是 Promise 对象，则返回该值本身。

::: tip

`await` 操作符用于等待一个[`Promise`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise) 对象。它只能在异步函数 [`async function`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/async_function) 中使用。

:::

**例：如果一个 Promise 被传递给一个 await 操作符，await 将等待 Promise 正常处理完成并返回其处理结果。**

```javascript
function resolveAfter2Seconds(x) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
}

async function f1() {
  console.log(1);
  var x = await resolveAfter2Seconds(10);
  console.log(x); // 10
}
f1();
```

```shell
ASUS@yaweidediannao MINGW64 ~/Desktop/test
$ node module.js 
1
10
```

------

**例：如果该值不是一个 Promise，await 会把该值转换为已正常处理的Promise，然后等待其处理结果。**

```javascript
async function f2() {
  var y = await 20;
  console.log(y); // 20
}
f2();
```

```shell
ASUS@yaweidediannao MINGW64 ~/Desktop/test
$ node module.js 
20
```

------

**例：如果 Promise 处理异常，则异常值被抛出。**

```javascript
async function f3() {
  try {
    var z = await Promise.reject(30);
  } catch (e) {
    console.log(e); // 30
  }
}
f3();
```

```shell
ASUS@yaweidediannao MINGW64 ~/Desktop/test
$ node module.js 
30
```

## `async`函数

> async函数是使用`async`关键字声明的函数。 async函数是[`AsyncFunction`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/AsyncFunction)构造函数的实例， 并且其中允许使用`await`关键字。`async`和`await`关键字让我们可以用一种更简洁的方式写出基于[`Promise`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)的异步行为，而无需刻意地链式调用`promise`。

语法

```javascript
async function name([param[, param[, ... param]]]) {
    statements 
}
```

参数

- name：函数名称
- param：要传递给函数的参数的名称。
- statements：包含函数主体的表达式。可以使用`await`机制。

返回值

- 一个[`Promise`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)，这个promise要么会通过一个由async函数返回的值被解决，要么会通过一个从async函数中抛出的（或其中没有被捕获到的）异常被拒绝。
- return的值是promise resolved时候的value；
- throw的值是promise rejected时候的reason；

**例：return一个 1**

```javascript
async function f3() {
  return 1;
}
const p = f3();
console.log(p);
p.then(function(data) {
  console.log(data);
})
```

```shell
 ASUS@yaweidediannao MINGW64 ~/Desktop/test
$ node module.js 
Promise { 1 }
1
```

------

**例：return一个错误**

```javascript
async function f3() {
  throw new Error('error');
}
const p = f3();
console.log(p);
p.catch(function(data) {
  console.log(data);
})
```

```shell
ASUS@yaweidediannao MINGW64 ~/Desktop/test
$ node module.js 
Promise {
  <rejected> Error: error
      at f3 (C:\Users\ASUS\Desktop\test\module.js:2:9)
      at Object.<anonymous> (C:\Users\ASUS\Desktop\test\module.js:4:11)
      at Module._compile (internal/modules/cjs/loader.js:999:30)
      at Object.Module._extensions..js (internal/modules/cjs/loader.js:1027:10)
      at Module.load (internal/modules/cjs/loader.js:863:32)
      at Function.Module._load (internal/modules/cjs/loader.js:708:14)
      at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:60:12)
      at internal/main/run_main_module.js:17:47
}
Error: error
    at f3 (C:\Users\ASUS\Desktop\test\module.js:2:9)
    at Object.<anonymous> (C:\Users\ASUS\Desktop\test\module.js:4:11)
    at Module._compile (internal/modules/cjs/loader.js:999:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1027:10)
    at Module.load (internal/modules/cjs/loader.js:863:32)
    at Function.Module._load (internal/modules/cjs/loader.js:708:14)
    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:60:12)
    at internal/main/run_main_module.js:17:47
```

> async函数可能包含0个或者多个[`await`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/await)表达式。await表达式会暂停整个async函数的执行进程并出让其控制权，只有当其等待的基于promise的异步操作被兑现或被拒绝之后才会恢复进程。promise的解决值会被当作该await表达式的返回值。使用`async` / `await`关键字就可以在异步代码中使用普通的`try` / `catch`代码块。

::: tip

- `await`关键字只在async函数内有效。如果你在async函数体之外使用它，就会抛出语法错误 [`SyntaxError`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError) 。

- `async`/`await`的目的为了简化使用基于promise的API时所需的语法。`async`/`await`的行为就好像搭配使用了生成器和promise。

- async函数一定会返回一个promise对象。如果一个async函数的返回值看起来不是promise，那么它将会被隐式地包装在一个promise中。

  ```javascript
  async function foo() {
     return 1
  }
  // 等价于
  function foo() {
     return Promise.resolve(1)
  }
  ```

:::

::: warning

async函数的函数体可以被看作是由0个或者多个await表达式分割开来的。从第一行代码直到（并包括）第一个await表达式（如果有的话）都是同步运行的。这样的话，一个不含await表达式的async函数是会同步运行的。然而，如果函数体内有一个await表达式，async函数就一定会异步执行。

:::




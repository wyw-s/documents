---
title: promise A+规范
category: javascript
date: 2021-06-29 21:34:22
autoGroup-15: 进阶
---

**什么是`Promise A+`规范**

答：它一个开放、健全且通用的 JavaScript Promise 标准，由开发者制定，供开发者参考。`Promise A+`规范实际上是把之前 [Promise/A 规范](http://wiki.commonjs.org/wiki/Promises/A) 中的建议，明确成为了行为标准：我们一方面扩展了原有规范约定俗成的行为，一方面删减了原规范的一些特例情况和有问题的部分。 **Promises/A+ 规范不设计如何创建、解决和拒绝 promise，而是专注于提供一个通用的 `then` 方法**；

::: tip

如果你想写出一个规范的 `Promise`，我们就需要遵循这个标准——`Promise A+`规范。

:::

## 术语

- promise：是一个拥有 `then` 方法的对象或函数，其行为符合本规范。
- thenable：是一个定义了 `then` 方法的对象或函数。
- 值（value）：指任何 JavaScript 的合法值（包括 `undefined` , thenable 和 promise）；
- 异常（exception）：是使用 `throw` 语句抛出的一个值。
- 据因（reason）：表示一个 promise 的拒绝原因。

## 要求

1. **Promise 的状态**：一个 Promise 的当前状态必须为以下三种状态中的一种：**等待态（Pending）**、**执行态（Fulfilled）**和**拒绝态（Rejected）**。

   - **Pending**： 处于等待态时，promise 需满足以下条件。
     - 可以迁移至执行态或拒绝态。
   - **Fulfilled**：处于执行态时，promise 需满足以下条件。
     - 不能迁移至其他任何状态。
     - 必须拥有一个**不可变**的终值。
   - **Rejected**：处于拒绝态时，promise 需满足以下条件。
     - 不能迁移至其他任何状态。
     - 必须拥有一个**不可变**的据因。
       - 这里的不可变指的是恒等（===），而不是意味着更深层次的不可变（盖指当 value 或 reason 不是基本值时，只要求其引用地址相等，但属性值可被更改）。

2. **Then 方法**：一个 promise 必须提供一个 `then` 方法以访问其当前值、终值和据因。

   ```javascript
   // 一个 promise 的then方法接受两个参数：
   promise.then(onFulfilled, onRejected)
   ```

   - `onFulfilled` 和 `onRejected` 都是可选参数。
     - 如果 `onFulfilled` 不是函数，其必须被忽略。
     - 如果 `onRejected` 不是函数，其必须被忽。
     
   - **onFulfilled**：如果`onFulfilled`是一个函数。
     - 当 `promise` 执行结束后其必须被调用，并将`promise`的值作为它的第一个参数。
     - 在`promise`完成之前不能调用它。
     - 它不能被多次调用，其调用次数不可超过一次。
     
   - **onRejected**：如果`onRejected`是函数。
     - 当 `promise` 被拒绝执行后其必须被调用，其第一个参数为 `promise` 的据因(``reason`)。
     - 在`promise`被拒绝之前不能调用它。
     - 它不能被多次调用，其调用次数不可超过一次。
     
   - `onFulfilled` 和 `onRejected` 在[执行上下文](https://es5.github.io/#x10.3)堆栈仅包含平台代码之前不得调用. [ [3.1](https://promisesaplus.com/#notes) ]。
   
   - `onFulfilled` 和 `onRejected` 必须被当做函数调用 (即函数体内的 `this` 为`undefined`). [ [3.2](https://promisesaplus.com/#notes) ]
   
   - 对于一个`promise`，它的then方法可以调用多次。
   
     - 当`promise` fulfilled后，所有`onFulfilled`都必须按照其注册顺序执行。
     - 当`promise` rejected后，所有`OnRejected`都必须按照其注册顺序执行。
   
   - `then` 必须返回一个promise  [ [3.3](https://promisesaplus.com/#notes) ].
   
     ```javascript
     promise2 = promise1.then(onFulfilled, onRejected);
     ```
   
     - 如果`onFulfilled` 或 `onRejected` 返回了值`x`, 则执行Promise 解析流程`[[Resolve]](promise2, x)`。
     - 如果任一`onFulfilled` 或 `onRejected`抛出了异常`e`, 则`promise2`应当以`e`为`reason`被拒绝。
     - 如果`onFulfilled`不是函数并且`promise1`已经fulfilled，则`promise2`必须以`promise1`的值fulfilled。
     - 如果 `onReject` 不是一个函数且`promise1`已经rejected, 则`promise2`必须以相同的reason被拒绝.

## Promise解析过程

> **Promise解析过程** 是以一个promise和一个值做为参数的抽象过程，可表示为`[[Resolve]](promise, x)`

1. 如果`promise` 和 `x` 指向相同的值, 使用 `TypeError`做为原因将`promise`拒绝。
2. 如果 `x` 是一个`promise`, 采用其状态 [ [3.4](https://promisesaplus.com/#notes) ];
   - 如果`x`是pending状态，`promise`必须保持pending状态，直到`x` fulfilled或rejected。
   - 如果`x`是fulfilled状态，将`x`的值用于fulfill `promise`。
   - 如果`x`是rejected状态, 将`x`的原因用于reject `promise`。
3. 如果`x`是一个对象或一个函数：
   - 将 `then` 赋为 `x.then`.[ [3.5](https://promisesaplus.com/#notes) ]
   - 如果在取`x.then`值时抛出了异常，则以这个异常做为原因将`promise`拒绝。
   - 如果 `then` 是一个函数， 以`x`为`this`调用`then`函数， 且第一个参数是`resolvePromise`，第二个参数是`rejectPromise`，且：
     - 当 `resolvePromise` 被以 `y`为参数调用, 执行 `[[Resolve]](promise, y)`。
     - 当 `rejectPromise` 被以 `r` 为参数调用, 则以`r`为原因将`promise`拒绝。
     - 如果 `resolvePromise` 和 `rejectPromise` 都被调用了，或者被调用了多次，则只第一次有效，后面的忽略。
     - 如果在调用`then`时抛出了异常，则：
       - 如果 `resolvePromise` 或 `rejectPromise` 已经被调用了，则忽略它。
       - 否则, 以`e`为reason将 `promise` 拒绝。
   - 如果 `then`不是一个函数，则 以`x`为值fulfill `promise`。
4. 如果 `x` 不是对象也不是函数，则以`x`为值 fulfill `promise`。

## 参考资料

官方文档：https://promisesaplus.com/

详解Promise/Promise/A+ 规范：https://www.jianshu.com/p/2207b01e1174

Promise/A+规范：https://segmentfault.com/a/1190000002452115


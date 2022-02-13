---
title: 手写promise
category: javascript
date: 2021-06-29 21:42:22
autoGroup-15: 进阶
---

> 在开始手写promise之前我们需要了解一个东西：`promise A+规范`，[传送门](./javascript-note-51.md)

::: warning

要求：根据Promise/A+规范实现promise，使用promise-aplus-tests插件验证；

:::

### 代码

```javascript
// promise的状态
const state = {
  PENDING: 'pending',
  RESOLVE: 'resolve',
  REJECTED: 'rejected',
}

// 将promise设置为fulfilled状态
function fulfilledPromise(promise, value) {
  // 只能从pending状态转换为其他状态；
  if (promise.state !== stateMap.PENDING) {
    return;
  }
  promise.state = stateMap.FULFILLED;
  promise.value = value;
  runCbs(promise.fulfilledCbs, value);
}

// 将promise设置为rejected状态
function rejectedPromise(promise, reason) {
  // 只能从pending状态转换为其他状态；
  if (promise.state !== stateMap.PENDING) {
    return;
  }
  promise.state = stateMap.REJECTED;
  promise.reason = reason;
  runCbs(promise.rejectedCbs, reason);
}

function isFunction(fn) {
  return Object.prototype.toString.call(fn).toLocaleLowerCase() === '[object function]'
}

function isObject(fn) {
  return Object.prototype.call.toString(fn).toLocaleLowerCase() === '[object function]'
}

function isPromise(P) {
  return p instanceof Promise;
}

// promise解析
function resolvePromise(promise, x) {
  // x 与 promise相同
  if (promsie === x) {
    rejectedPromise(promise, new TypeError('cant be the same'));
    return;
  }

  // x 是 promise
  if(isPromise(x)) {
    if (x.status === statusMap.FULFILLED) {
      fulfilledPromise(promise, x.value);
      return;
    }
    if (x.status === statusMap.REJECTED) {
      rejectedPromise(promise, x.reason);
      return;
    }
    if (x.status === statusMap.PENDING) {
      x.then(() => {
        fulfilledPromise(promise, x.value);
      }, () => {
        rejectedPromise(promise, x.reason);
      })
      return;
    }
    return;
  }

  // x 是对象或者函数
  if (isObject(x) || isFunction(x)) {
    let then;
    try {
      then = x.then;
    } catch(error) {
      rejectedPromise(promise, error);
      return;
    }
    if (isFunction(then)) {
      try {
        then.call(x, (y) => {
          if (called) {
            return;
          }
          called = true;
          resolvePromise(promise, y);
        })
      } catch (error) {
        rejectedPromise(promise, r);
      }
    } else {
      fulfilledPromise(promise, x);
    }
    return;
  } else {
    // x 不是对象或者函数
    fulfilledPromise(promise, x);
    return;
  }
}

function runCbs(cbs, value) {
  cbs.forEach(cb => cb(value));
}
class MyPromise {
  constructor(fn) {
    // 状态
    this.state = stateMap.PENDING;
    // 结果值
    this.value = undefined;
    // 拒因
    this.reason = undefined;
    // 用于存放 then 中 fulfilled 的callback
    this.fulfilledCbs = [];
    // 用于存放 then 中 rejected 的callback
    this.rejectedCba = [];
    fn((value) => {
      resolvePromise(this, value);
    }, (reason) => {
      rejectedPromise(this, reason);
    })
  }

  then(onFulfilled, onRejected) {
    const promise1 = this;
    const promise2 = new Promise(() => {});
    if (promise.state === state.FULFILLED) {
      if (!isFunction(onFulfilled)) {
        return promse1
      }
      // 因为then的执行是异步的所以这里要模拟异步的执行
      setTimeout(() => {
        try {
          // 调用then方法的参数(用户传进来的)
          const x = onFulfilled(promise1.value);
          // 开始解析promise
          resolvePromise(promise2, x);
        } catch (error) {
          rejectedPromise(promise2, error);
        }
      }, 0)
    }

    if (promise.state === state.REJECTED) {
      if (!isFunction(onRejected)) {
        return promse1
      }
      // 因为then的执行是异步的所以这里要模拟异步的执行
      setTimeout(() => {
        try {
          // 调用then方法的参数(用户传进来的)
          const x = onRejected(promise1.value);
          // 开始解析promise
          resolvePromise(promise2, x);
        } catch (error) {
          rejectedPromise(promise2, error);
        }
      }, 0)
    }

    if (promise.state === state.PENDING) {
      promise1.fulfilledCbs.push(() => {
        setTimeout(() => {
          try {
            const x = onFulfilled(promise1.value);
            resolvePromise(promise2, x);
          } catch (error) {
            rejectedPromise(promise2, error);
          }
        }, 0)
      })
      promise1.rejectCbs.push(() => {
        setTimeout(() => {
          try {
            const x = onRejected(promise1.reason);
            resolvePromise(promise2, x);
          } catch (error) {
            rejectedPromise(promise, error);
          }
        }, 0)
      })
    }
    return promise2;
  }
}

MyPromise.deferred = function () {
  const deferred = {};
  deferred.promise = new Promise((resolve, reject) => {
    deferred.resolve = resolve;
    deferred.reject = reject;
  });
  return deferred;
}
module.exports = MyPromise;
```

### 测试

- 安装测试包；

  ```shell
  npm install promises-aplus-tests -g
  ```

  **注意这里要全局安装，本人在使用时非全局安装出现了问题**

- 开始测试

  ```shell
  promises-aplus-tests ./myPromise.js
  ```

- 测试结果

  ```bash
      The value is `true` with `Boolean.prototype` modified to have a `then` method
        √ already-fulfilled
        √ immediately-fulfilled
        √ eventually-fulfilled
        √ already-rejected
        √ immediately-rejected
        √ eventually-rejected
      The value is `1` with `Number.prototype` modified to have a `then` method
        √ already-fulfilled
        √ immediately-fulfilled
        √ eventually-fulfilled
        √ already-rejected
        √ immediately-rejected
        √ eventually-rejected
  
  
    872 passing (20s)
  ```

  




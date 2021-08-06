---
title: co模块源码分析
category: javascript
time: 2021-08-04 22:36:22
autoGroup-4: 进阶
tags:
  - javascript
---

> co模块是generator函数的自动执行函数，它基于 ES6 的 generator 和 yield ，让我们能用同步的形式编写异步代码。

## 示例

> 我们知道调用生成器函数并不会实际执行函数体，而是返回一个生成器(迭代器)对象，然而co模块改变了这一现状；

```javascript
function* generator1() {
    const a = yield Promise.resolve(1);
    const b = yield Promise.resolve(2);
    console.log(a, '---', b);
}

const it = generator1();
console.log(it);
it.next().value.then(res => {
    console.log(res);
})
it.next().value.then(res => {
    console.log(res);
})
console.log(it.next());
```

> 上面函数的调用，你会发现第8行打印出来的是`Generator`对象，然而要想拿到两个promise的值，就必须执行`it.next()`方法并.then。而且函数中的console要想打印，就必须执行第15行的next()方法，可见利用`Generator`函数虽然可以让我们已同步的方式编写异步代码，但是我们却做了许多操作；

::: tip

`it.next()`如果不传值那么`yield`的值为`undefined`；

:::

优化：使用[co模块](https://github.com/tj/co#readme)，下载`index.js`文件并引入；

```javascript
co(function* () {
    const a = yield Promise.resolve(1);
    const b = yield Promise.resolve(2);
    console.log(a, '---', b); // 1 --- 2
})
```

> 使用了co模块后你不需要在next便可以直接拿到值，这一步骤co帮我们做了；有没有感觉方便多了！

::: tip

`async/await`其实是`Generator`函数的语法糖；

:::

## 原理

> 为什么 co 可以自动执行 Generator函数？我们知道Generator 就是一个异步操作的容器，它的自动执行需要一种机制，当异步操作有了结果，能够自动交回执行权。

两种方法可以做到这一点：

- 回调函数：将异步操作包装成 Thunk 函数，在回调函数里面交回执行权。
- Promise：将异步操作包装成 Promise 对象，用`then`方法交回执行权。

co模块其实就是将**两种自动执行器（Thunk 函数和 Promise 对象）**，包装成了一个模块。使用 co 的前提条件是，Generator函数的`yield`命令后面，只能是 Thunk 函数或 Promise 对象。如果数组或对象的成员，全部都是 Promise 对象，也可以使用 co。

### 源码下载

`github`下载co模块源码；[传送门](https://github.com/tj/co#readme)。或者找到`index.js`把里面的代码拷贝下来；

### 源码分析

在源码中我们先找到co模块的入口：

```javascript
function co(gen) {
  var ctx = this;
  var args = slice.call(arguments, 1);

  // co 模块返回 Promise
  return new Promise(function(resolve, reject) {
    // 这两句是判断gen是否为 Generator 函数，如果是就执行 onFulfilled ，如果不是就 resolve(gen)；
    if (typeof gen === 'function') gen = gen.apply(ctx, args);
    if (!gen || typeof gen.next !== 'function') return resolve(gen);

    // 是 Generator函数调用 onFulfilled();
    onFulfilled();

    function onFulfilled(res) {
      var ret;
      try {
        // 因为在 gen.apply()时已经执行gen并返回了生成器对象，所以这里直接执行gen.next()方法；
        ret = gen.next(res);
      } catch (e) {
        return reject(e);
      }
      // 实现自动执行的关键代码就是这个，它执行了上一次返回的生成器对象；
      next(ret);
      return null;
    }

    function onRejected(err) {
      var ret;
      try {
        ret = gen.throw(err);
      } catch (e) {
        return reject(e);
      }
      next(ret);
    }

    function next(ret) {
      // 判断 done 是否为true，如果为true则说明 generator函数执行完毕(没有需要执行的 yield语句了)
      // 返回最后执行的结果 resolve(ret.value);
      if (ret.done) return resolve(ret.value);
      var value = toPromise.call(ctx, ret.value);
      // 判断 value 是否为 promise，如果是就执行 then()方法，然后会调用 onFulfilled ！！！
      // 重点 在这里就形成了一个递归调用 会一直执行下去直到yield语句执行完毕；
      if (value && isPromise(value)) return value.then(onFulfilled, onRejected);
      return onRejected(new TypeError('You may only yield a function, promise, generator, array, or object, '
        + 'but the following object was passed: "' + String(ret.value) + '"'));
    }
  });
}
```

::: tip

上面的代码中的核心部分就是`onFulfilled`和`next`这两个函数，产生了递归调用，从而实现了`Generator`函数的自动执行；

:::

### co中其他方法介绍

1. 把非Promise的值转换为Promise:

   ```javascript
   // 这里只转化 Object、Generator、Array、Function，其他类型直接返回不做处理；
   // 所以next函数中会有这样的判断 if (value && isPromise(value)) 
   function toPromise(obj) {
     if (!obj) return obj;
     if (isPromise(obj)) return obj;
     if (isGeneratorFunction(obj) || isGenerator(obj)) return co.call(this, obj);
     if ('function' == typeof obj) return thunkToPromise.call(this, obj);
     if (Array.isArray(obj)) return arrayToPromise.call(this, obj);
     if (isObject(obj)) return objectToPromise.call(this, obj);
     return obj;
   }
   ```

   - Promise判断：

     ```javascript
     // 此方法主要用于判断 一个变量是否是 Promise，
     function isPromise(obj) {
       // 只有 Promise 有 then方法；
       return 'function' == typeof obj.then;
     }
     ```

   - isGeneratorFunction判断：

     ```javascript
     // 这一步主要是判断 obj 是否为 Generator 函数；
     function isGeneratorFunction(obj) {
       var constructor = obj.constructor;
       if (!constructor) return false;
       if ('GeneratorFunction' === constructor.name || 'GeneratorFunction' === constructor.displayName) return true;
       return isGenerator(constructor.prototype);
     }
     ```

   - isGenerator判断：

     ```javascript
     // 这一个和isGeneratorFunction是有区别的，这个判断的是 Generator 函数执行后返回的生成器对象；
     function isGenerator(obj) {
       return 'function' == typeof obj.next && 'function' == typeof obj.throw;
     }
     ```

   - isObject判断：

     ```javascript
     function isObject(val) {
       return Object == val.constructor;
     }
     ```

   - arrayToPromise：数组转promise：

     ```javascript
     function arrayToPromise(obj) {
       return Promise.all(obj.map(toPromise, this));
     }
     ```

   - thunkToPromise判断

     ```javascript
     function thunkToPromise(fn) {
       var ctx = this;
       return new Promise(function (resolve, reject) {
         fn.call(ctx, function (err, res) {
           if (err) return reject(err);
           if (arguments.length > 2) res = slice.call(arguments, 1);
           resolve(res);
         });
       });
     }
     ```

   - objectToPromise判断

     ```javascript
     function objectToPromise(obj){
       var results = new obj.constructor();
       var keys = Object.keys(obj);
       var promises = [];
       for (var i = 0; i < keys.length; i++) {
         var key = keys[i];
         var promise = toPromise.call(this, obj[key]);
         if (promise && isPromise(promise)) defer(promise, key);
         else results[key] = obj[key];
       }
       return Promise.all(promises).then(function () {
         return results;
       });
     
       function defer(promise, key) {
         // predefine the key in the result
         results[key] = undefined;
         promises.push(promise.then(function (res) {
           results[key] = res;
         }));
       }
     }
     ```

> 实现自动执行器的原理简单的说就是 next方法结合Promise




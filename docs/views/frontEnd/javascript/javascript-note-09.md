---
title： Promise介绍
---

## 什么是`Promise`;

> 概念：Promise 代表一个异步操作；

1. 创建`Promise`对象；

```js
// 创建了一个Promise对象；
new Promise()
// 注意：这只是一个【形式上】的异步操作；因为你不知道里面要干什么；是读文件还是发网络请求呢？
优点：
// 1、可以将异步操作以同步操作的流程表达出来，避免了层层嵌套的回调函数。
缺点：
// 1、无法取消 Promise ，一旦新建它就会立即执行，无法中途取消。
// 2、其次，如果不设置回调函数， Promise 内部抛出的错误，不会反应到外部。
// 3、当处于 pending 状态时，无法得知目前进展到哪一个阶段（刚刚开始还是即将完成）
```

## 基本用法;

1.   ES6 规定， `Promise` 对象是一个构造函数，用来生成 `Promise` 实例;
2.  `Promise`构造函数接受一个**函数**作为参数，该函数的两个**参数**分别是`resolve`和`reject`。它们是两个
   函数，由 JavaScript 引擎提供，不用自己部署。  
   1. `resolve`:  在异步操作成功时调用 ;
   2. `reject`:   在异步操作失败时调用，并将异步操作报出的错误，作为参数传递出去。 
3.  `Promise`实例生成以后，可以用`then`方法分别指定`resolved`状态和`rejected`状态的回调函数 。


```js
const promise = new Promise(function(resolve, reject) {
  if (/* 异步操作成功 */){
    resolve(value);
  } else {
    reject(error);
  }
});

promise.then(function(value) {
  // 异步操作成功时的回调
  }, function(error) {
  // 异步操作失败时的回调
  });
```

	4.	`then`方法；

```js
<script>
// 将一个异步代码包装到 Promise 中
// 1、定义一个函数
function request(url) {
  // 2、在函数中 return 出一个 Promise 对象
  return new Promise((resolve, reject) => {
    // 3、在 Promise 容器中执行异步操作
    // 创建请求对象
    var oReq = new XMLHttpRequest();

    // 添加请求回调函数
    // 请求成功，就会自动执行该回调函数
    oReq.addEventListener("load", function () {

      // 当请求成功了，也就是异步执行结束了，callback 被调用了
      resolve(this.responseText)

      // 只有这里才能拿到正确的响应结果 responseText 但是在外面取不到；
      // return this.responseText
    });

    oReq.addEventListener("error", function (err) {
      // 失败 reject
      reject(err)
    });

    // 设置请求方法和请求路径
    oReq.open("GET", url);

    // 发出请求
    oReq.send();
  })
}

// then 方法之后可以继续 then
// 原因是 then 方法执行完以后会返回一个新的 Promise 对象
request('http://jsonplaceholder.typicode.com/posts')
  .then(data => {
    // 如果是普通数据，那么它会把该数据包装为那个返回的 Promise 的 resolve 结果
    // return new Promise((resolve) => {
    //   resolve('hello')
    // })

    // 因为每个 then 始终返回 promise 对象
    // 所以我才可以在后面继续 .then
    // 每一个后续的 .then 都是在给上一个 then 中返回的 Promise 对象注册：resolve、reject

    // 如果你返回的数据就是一个 Promise 对象，那它就不做任何处理了
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('hello')
      }, 2000)
    })
  })
  .then((data) => {
    return ptimeout(1000)
  })
  .then(() => {
    console.log(3)
  })

function ptimeout(time) {
  return new Promise((resolve) => {
    setTimeout(function () {
      resolve()
    }, time)
  })
}

// Async 函数，简化了 Promise 的结果获取而已
</script>
```

## 异常处理；

 1.	  处理 Promise 中的异常有两种方式：  
     -  `then`方法的第2个参数;
     - 或者 .catch 方法 ;


```js
// 失败 then 方法的第2个参数来接收处理异常
request('dbsjabdjsabjdsa')
  .then(data => {
    console.log('请求成功', data);
  }, err => {
    console.log('请求失败', err);
  });
// 使用 .catch 方法接收处理异常
request('dbsjabdjsabjdsa')
  .then(data => {
    console.log('请求成功', data);
  })
  .catch(err => {
    console.log('请求失败', err);
  });

request('http://jsonplaceholder.typicode.com/posts')
  .then(data => {
    console.log('请求成功', data);
  })
  .catch(err => {
    console.log('请求失败', err);
  })
// 无论成功或是失败都会执行
  .finally(() => {
    console.log('无论成功或是失败都会执行');
  });
```


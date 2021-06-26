---
title: promise执行问题
category: 面试题
time: 2021-06-26 17:39:23
---

> 谈一谈下列两种写法的区别

```javascript
//第一种
promise.then((res) => {
    console.log('then:', res);
}).catch((err) => {
    console.log('catch:', err);
})
//第二种
promise.then((res) => {
    console.log('then:', res);
}, (err) => {
    console.log('catch:', err);
})
```

> 问题解析：
>
> 1. 第一种 catch 方法可以捕获到 catch 之前整条 promise 链路上所有抛出的异常。
> 2. 第二种 then 方法的第二个参数捕获的异常依赖于上一个 Promise 对象的执行结果。

::: tip

1. promise.then(successCb, faildCd) 接收两个函数作为参数，来处理上一个promise 对象的结果。then 方法返回的是 promise 对象。第一种链式写法，使用catch，相当于给前面一个then方法返回的promise 注册回调，可以捕获到前面then没有被处理的异常。第二种是回调函数写法，**仅为上一个promise 注册异常回调**。
2. 如果是promise内部报错 reject 抛出错误后，then 的第二个参数就能捕获得到，如果then的第二个参数不存在，则catch方法会捕获到。 
3. 如果是then的第一个参数函数 resolve 中抛出了异常，即成功回调函数出现异常后，then的第二个参数reject 捕获捕获不到，catch方法可以捕获到。

:::


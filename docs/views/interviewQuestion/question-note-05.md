---
title: 微任务执行问题
category: 面试题
time: 2021-06-26 13:44:23
---

## 例1

```javascript
async function t1() {
  let a = await "lagou";
  console.log(a); // lagou
}
t1()
```

> 问题解析：`await`是一个表达式，如果后面不是一个promise对象，就直接返回对应的值。所以问题可以理解为：

```javascript
async function t1() {
  let a = "lagou";
  console.log(a); // lagou
}
t1()
```

## 例2

```javascript
async function t2() {
  let a = await new Promise((resolve) => {});
  console.log(a);//
}
t2()
```

> 问题解析：`await`后面如果跟一个promise对象，await将等待这个promise对象的resolve状态的值value，且将这个值返回给前面的变量，题中的promise对象的状态是一个pending状态，没有resolve状态值，所以什么也打印不了。

## 例3

```javascript
async function t3() {
  let a = await new Promise((resolve) => {
    resolve();
  });
  console.log(a);// undefined
}
t3()
```

> 问题解析：`await`后面如果跟一个promise对象，await将等待这个promise对象的resolve状态的值value，且将这个值返回给前面的变量，题中的promise对象的状态是一个resolve状态，但是它的状态值是undefined，所以打印出undefined。

## 例4

```javascript
async function t4() {
  let a = await new Promise((resolve) => {
    resolve("hello");
  });
  console.log(a);// hello
}
t4()
```

> 问题解析：`await`后面如果跟一个promise对象，await将等待这个promise对象的resolve状态的值，且将这个值返回给前面的变量，题中的promise对象的状态是一个resolve状态，它的状态值是hello，所以打印出hello。

## 例5

```javascript
async function t5() {
  let a = await new Promise((resolve) => {
    resolve("hello");
  }).then(() => {
    return "lala";
  });
  console.log(a);// lala
}
t5()
```

> 问题解析：`await`后面如果跟一个promise对象，await将等待这个promise对象的resolve状态的值，且将这个值返回给前面的变量，题中的promise对象的状态是一个resolve状态，它的状态值是hello，紧接着后面又执行了一个then方法，then方法又会返回一个全新的promise对象，且这个then方法中的返回值会作为这个全新的promise中resolve的值，所以最终的结果是lala。

## 例6

```javascript
async function t6() {
  let a = await fn().then((res)=>{return res})
  console.log(a);//undefined
}
async function fn(){
    await new Promise((resolve)=>{
        resolve("lagou")
    })
}
t6()
```

> 问题解析：`async`函数执行返回一个`promise`对象,且`async`函数内部的返回值会当作这个promise对象resolve状态的值；
>
> ```javascript
> async function fn() {
>   return "la";
> }
> var p = fn();
> console.log(p);
> ```
>
> ```shell
> Promise {<fulfilled>: "la"}
>   __proto__: Promise
>   [[PromiseState]]: "fulfilled"
>   [[PromiseResult]]: "la"
> ```
> 题中首先考虑 `fn()` 执行返回一个promise对象，因为fn执行没有返回值，所以这个promise对象的状态resolve的值是undefined，且将这个undefined当作下一个then中回调函数的参数，所以打印的结果是undefined

## 例7

```javascript
async function t7() {
  let a = await fn().then((res)=>{return res})
  console.log(a); // lala
}
async function fn(){
    await new Promise((resolve)=>{
        resolve("lagou")
    })
    return "lala"
}
t7()
```

> 问题解析：首先考虑 `fn()` 执行返回一个promise对象，因为`fn()`执行有返回值lala，所以这个promise对象的状态resolve的值是lala，且将这个lala当作下一个then中回调函数的参数，所以打印的结果是lala。

::: tip

- async函数执行的返回结果是一个promise对象，这个函数的返回值是这个promise状态值resolve的值

- await后面如果不是一个promise对象，将直接返回这个值

- await后面如果是一个promise对象，将会把这个promise的状态resolve的值返回出去。

  以上没有考虑reject状态。

:::


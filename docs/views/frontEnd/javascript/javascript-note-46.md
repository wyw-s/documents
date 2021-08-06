---
title: Generator函数及其异步应用
category: javascript
time: 2021-06-20 22:18:22
autoGroup-4: 进阶
tags:
  - javascript
  - 面试题
---

> Generator函数是ES6提供的一种异步编程解决方案，是回调地狱的一种解决方案，它跟`promise`类似，但是却可以以同步的方式来书写代码，而避免了promise的链式调用。语法行为与传统函数完全不同，对于generator函数有多种不同的理解角度，从语法上，首先我们可以把它理解成一个状态机，封装了多个内部状态。由于执行generator函数会返回一个遍历器对象，说明它还是一个遍历器对象生成函数。

**特征**

1. function命令与函数名之间有一个星号(`*`)；
2. 函数语句使用`yield`语句定义不同的内部状态；

## 迭代器`iterator`

> 它是一种接口，为各种不同的数据结构提供统一的访问机制；

作用：

1. 为各种数据结构提供一个统一的、简便的访问接口；
2. 使得数据结构的成员能够按某种次序排列；
3. ES6创造了一种新的遍历器命令：for...of 循环，iterator接口主要供for...of 消费；

特点：

- 有next方法，执行后返回结果对象；

```javascript
// 创建一个iterator函数
function makeIterator(array) {
  let nextIndex = 0;
  return {
    next: function() {
      return nextIndex < array.length ?
      { value: array[nextIndex++], done: false } :
      { value: undefined, done: true }
    }
  }
}

const it = makeIterator([1,2,3])

console.log(it.next()) // { value: 1, done: false }
console.log(it.next()) // { value: 2, done: false }
console.log(it.next()) // { value: 3, done: false }
console.log(it.next()) // { value: undefined, done: true }
```



## 生成器`Generator`

> 生成器是一种使用强大的新ES6语法定义的迭代器，同时又是ES6的异步编程解决方案。

特点

- 声明语法与常规的js函数类似，但使用的关键字是function*而非function。
- 调用生成器函数并不会实际执行函数体，而是返回一个生成器对象。
- 这个生成器是一个迭代器。
- 在执行时能暂停，又能从暂停处继续执行。
- ES6异步编程解决方案。
- 独有的`yield`语句。
  - 调用它的`generator`函数的next方法会导致生成器函数的函数体从头开始执行，直至遇到`yield`语句。
  - 只能出现在`Generator`函数；
  - 用来暂停和恢复生成器函数；
  - 类似于return语句。
  - `yield`语句的值会成为调用迭代器的next()方法的返回值。
  - next执行。
    - 遇`yield`暂停，将紧跟`yield`表达式的值作为返回的对象的value。
    - 没有`yield`，一直执行到return，将return 的值作为返回的对象的value。
    - 没有return，将undefined作为返回的对象的value。
  - Next参数
    - next方法可以带一个参数，该参数会被当作上一个`yield`表达式的返回值。

```javascript

function* makeIterator(array) {
  let first = yield 1;
  let second = yield first + 2;
  yield second + 3;
}

const it = makeIterator()

console.log(it.next()) // { value: 1, done: false }
console.log(it.next(4)) // { value: 6, done: false }
console.log(it.next(5)) // { value: 8, done: false }
console.log(it.next()) // { value: undefined, done: true }
```

> 执行过程：
>
> 1. 执行next()：遇到yield暂停，并返回生成器对象`{ value: 1, done: false }`;
> 2. 执行next(4)：携带的参数修改了第一次next方法的返回值(1)，此时first 为 4，然后加 2 。`{ value: 6, done: false }`
> 3. 执行next(5)：携带的参数修改了第二次next(4)方法的返回值(6)，此时second为 8；`{ value: 8, done: false }`
> 4. 执行next()：没有return，将undefined作为返回的对象的value。`{ value: undefined, done: true }`

### `yield*`生成器函数/可迭代对象

- 委托给其他可迭代对象；
- 作用：服用生成器；
- 可以用来迭代任何可迭代对象；

```javascript
function* generator1() {
  yield 1;
  yield 2;
}

function* generator2() {
  yield 100;
  yield* generator1();
  yield 200;
}

let g2 = generator2();

console.log(g2.next()) // { value: 100, done: false }
console.log(g2.next()) // { value: 1, done: false }
console.log(g2.next()) // { value: 2, done: false }
console.log(g2.next()) // { value: 200, done: false }
console.log(g2.next()) // { value: undefined, done: true }
```

> 以上例子中 `yield*`调用了 `generator2`生成器，并返回了每一次可迭代对象；

### return(param)

- 给定Param值终结遍历器，param可缺省。

```javascript
function* createIterator() {
  yield 1;
  yield 2;
  yield 3;
}

let iterator = createIterator();

console.log(iterator.next()) // { value: 1, done: false }
console.log(iterator.return()) // { value: undefined, done: false }
console.log(iterator.next()) // { value: undefined, done: false }
```

### throw(param)

- 让生成器对象内部抛出错误。

```javascript
function* createIterator() {
  let first = yield 1;
  let second;
  try {
    second = yield first + 2;
  } catch {
    second = 6;
  }
  yield second + 3;
}

let iterator = createIterator();

console.log(iterator.next()) // { value: 1, done: false }
console.log(iterator.next(10)) // { value: 12, done: false }
console.log(iterator.throw(new Error('error'))) // { value: 9, done: false }
console.log(iterator.next())  // { value: undefined, done: true }
```

> 以上示例中错误被try...catch处理了，如果没有被处理，则会抛出错误；

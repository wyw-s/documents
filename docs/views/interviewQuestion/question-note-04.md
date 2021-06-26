---
title: 异步执行顺序问题？
category: 面试题
time: 2021-06-26 13:19:23
---
## 例1
> 请阅读下面代码，我们只考虑浏览器环境下的输出结果，写出它们结果打印的先后顺序，并分析出原因！

```javascript
console.log('AAAA')
setTimeout(() => console.log('BBBB'), 1)
const start = new Date()
while (new Date() - start < 3000) {}
console.log('CCCC')
setTimeout(() => console.log('DDDD'), 0)
new Promise((resolve, reject) => {
  console.log('EEEE')
  foo.bar(100)
})
  .then(() => console.log('FFFF'))
  .then(() => console.log('GGGG'))
  .catch(() => console.log('HHHH'))
console.log('IIII')
```

```shell
# 输出结果
AAAA
CCCC
EEEE
IIII
HHHH
BBBB
DDDD
```

> 答案解析：这道题考察重点是  js 异步执行 宏任务 微任务。

1. ==第一行==代码执行，输出`AAAA`。
2. ==第二行==代码开启一个计时器t1，这是一个异步任务且是**宏任务**，需要等到1秒后提交。
3. ==第四行==是个while语句，需要等待3秒后才能执行下面的代码,**这里有个问题，就是3秒后上一个计时器t1的提交时间已经过了，但是线程上的任务还没有执行结束，所以暂时不能打印结果**，所以它排在宏任务的最前面了。
4. ==第五行==又输出`CCCC`。
5. ==第六行==又开启一个计时器t2，它提交的时间是0秒（其实每个浏览器器有默认最小时间的，暂时忽略），但是之前的t1任务还没有执行，还在等待，所以t2就排在t1的后面。（t2排在t1后面的原因是while造成的）都还需要等待，因为线程上的任务还没执行完毕。
6. ==第七行==`new Promise`将执行promise函数，它参数是一个回调函数，这个回调函数内的代码是同步的，它的异步核心在于resolve和reject，**同时这个异步任务在任务队列中属于微任务，是优先于宏任务执行的，(不管宏任务有多急，反正我是VIP)**。所以先直接打印输出同步代码`EEEE`。==第九行==中的代码是个不存在的对象，这个错误要抛给reject这个状态，也就是catch去处理，但是它是异步的且是微任务，只有等到线程上的任务执行完毕，立马执行它，不管宏任务（计时器，ajax等）等待多久了。
7. ==第十四行==，这是线程上的最后一个任务，打印输出	`IIII`

由以上分析结果：

- 线程上的同步代码结果依次为：AAAA  CCCC  EEEE IIII
- 异步任务中的微任务结果为： HHHH
- 异步中的所有宏任务：BBBB DDDD

::: tip

所以综上结果是：  AAAA  CCCC  EEEE  IIII  HHHH BBBB DDDD 

:::

## 例2

> 阅读下面代码，我们只考虑浏览器环境下的输出结果，写出它们结果打印的先后顺序，并分析出原因，

```javascript
async function async1() {
  console.log('AAAA')
  async2()
  console.log('BBBB')
}
async function async2() {
  console.log('CCCC')
}
console.log('DDDD')
setTimeout(function() {
  console.log('FFFF')
}, 0)
async1()
new Promise(function(resolve) {
  console.log('GGGG')
  resolve()
}).then(function() {
  console.log('HHHH')
})
console.log('IIII')
```

```sh
# 输出结果
DDDD
AAAA
CCCC
BBBB
GGGG
IIII
HHHH
FFFF
```

> 答案解析：这道题考察重点是  js 异步执行 宏任务 微任务。

1. 这道题的起始代码在==第9行==，输出`DDDD`
2. ==第10行==计时器开启一个异步任务t1，这个任务且为**宏任务**。
3. ==第13行==函数`async1`执行，这个函数内没有await 所以它其实就是一个**纯同步函数**，打印输出`AAAA`,
4. 在`async1`中执行`async2`函数，因为`async2`的内部也没有await，所以它也是个纯同步函数，打印输出`CCCC`
5. 紧接着打印输出`BBBB`。
6. ==第14行==new Promise执行里面的代码也是同步的,所以打印输出`GGGG`,resolve()调用的时候开启一个异步任务，且这个任务是微任务，它的执行交给then()中的第一个回调函数执行，且优先级高于宏任务（t1）执行。
7. ==第20行==打印输出`IIII`,此时线程上的同步任务全部执行结束。
8. 在执行任务队列中的异步任务时，微任务优先于宏任务执行，所以先执行微任务打印输出 `	HHHH`,然后执行宏任务 t1 打印输出 `FFFF`

::: tip

所以综上 结果输出是 DDDD AAAA CCCC BBBB  GGGG IIII HHHH FFFF

:::

::: warning

这道题的坑就在于 async中如果没有await，那么它就是一个纯同步函数。

:::


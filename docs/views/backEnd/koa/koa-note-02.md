---
title: Bluebird
category: KOA
time: 2021-07-26 18:05:23
---

> `Promise`对象已在ECMAScript 2015中被写入标准，且已被最新版本的浏览器和Node.js/IO.js所支持。`bluebird`是Node.js最出名的一个第三方`Promise`规范实现库，除了实现标准的Promise规范之外，Bluebird还提供了包装方法，可以快速地将Node.js回调风格的函数包装为Promise。它不仅完全兼容原生`Promise`对象，且比原生对象功能更强大。

## 安装

npm安装，cmd输入以下命令 [官方文档](http://bluebirdjs.com/docs/getting-started.html)

```bash
npm i bluebird
```

## 使用

> 这里只简单介绍下，把不是异步的回调函数，包装成promise来使用；[官方文档](http://bluebirdjs.com/docs/working-with-callbacks.html)

### [`Promise.promisify`](http://bluebirdjs.com/docs/api/promise.promisify.html)

将单个回调函数转换为promise函数。它不会改变原始函数并返回修改后的函数。

```bash
# 1.text

hello word
```

```javascript
// test.js

const fs = require('fs');
const bluebird = require('bluebird');

// 回调函数的书写形式
// fs.readFile('./1.text', 'utf-8', (err, result) => {
//     console.log(result);
// })

// 把fs.readFile包装为promise
const readFile = bluebird.promisify(fs.readFile)

readFile('./1.text', 'utf-8').then(res => {
    console.log(res);
})

readFile('../1.text', 'utf-8').catch(err => {
    console.log(err);
})
```

```bash
# 输入结果
C:\Users\wangy\Desktop\test> node .\test.js
[OperationalError: ENOENT: no such file or directory, open 'C:\Users\wangy\Desktop\1.text'] {
  cause: [Error: ENOENT: no such file or directory, open 'C:\Users\wangy\Desktop\1.text'] {
    errno: -4058,
    code: 'ENOENT',
    syscall: 'open',
    path: 'C:\\Users\\wangy\\Desktop\\1.text'
  },
  isOperational: true,
  errno: -4058,
  code: 'ENOENT',
  syscall: 'open',
  path: 'C:\\Users\\wangy\\Desktop\\1.text'
}
hello word
PS C:\Users\wangy\Desktop\test> 
```

### [`Promise.promisifyAll`](http://bluebirdjs.com/docs/api/promise.promisifyall.html)

获取一个充满函数的对象，并将每个函数转换为带有`Async`后缀的新函数（默认情况下）。它不会改变原有的功能，而是增加了新的功能。

```javascript
const fs = require('fs');

// 把 fs模块 包装为promise
const bluebird = require('bluebird').promisifyAll(fs);

fs.readFileAsync('./1.text', 'utf-8').then(res => {
    console.log(res);
})

fs.readFileAsync('../1.text', 'utf-8').catch(err => {
    console.log(err);
})
```

```bash
# 输入结果
PS C:\Users\wangy\Desktop\test> node .\test.js
[OperationalError: ENOENT: no such file or directory, open 'C:\Users\wangy\Desktop\1.text'] {
  cause: [Error: ENOENT: no such file or directory, open 'C:\Users\wangy\Desktop\1.text'] {  
    errno: -4058,
    code: 'ENOENT',
    syscall: 'open',
    path: 'C:\\Users\\wangy\\Desktop\\1.text'
  },
  isOperational: true,
  errno: -4058,
  code: 'ENOENT',
  syscall: 'open',
  path: 'C:\\Users\\wangy\\Desktop\\1.text'
}
hello word
PS C:\Users\wangy\Desktop\test> 
```

::: tip

新方法后缀为`Async`，如`fs.readFileAsync`。它没有取代`fs.readFile`功能。

:::

::: warning

 `Promise.promisify`并`Promise.promisifyAll`为真正快速的包装器使用动态重新编译，因此调用它们应该只进行一次。

:::


---
title: 全局对象
time: 2021-06-15 07:25:35
autoGroup-2: nodejs核心模块
category: 后端
tags: 
  - nodejs
---

> JavaScript 中有一个特殊的对象，称为全局对象（Global Object），它及其所有属性都可以在程序的任何地方访问，即全局变量。在浏览器 JavaScript 中，通常 window 是全局对象，而 Node.js 中的全局对象是 global，所有全局变量（除了 global 本身以外）都是 global对象的属性。我们在 Node.js 中能够直接访问到对象通常都是 global 的属性，如 console、process等;

## 全局对象与全局变量  

> global 最根本的作用是作为全局变量的宿主。按照 ECMAScript 的定义，满足以下条件的变量是全局变量：
> 1：在最外层定义的变量；
> 2：全局对象的属性；
> 3：隐式定义的变量（未定义直接赋值的变量）。
> 当你定义一个全局变量时，这个变量同时也会成为全局对象的属性，反之亦然。

::: tip

需要注意的是：

1、在 Node.js 中你不可能在最外层定义变量，因为所有用户代码都是属于当前模块的，而模块本身不是最外层上下文。 

2、永远使用 var 定义变量以避免引入全局变量，因为全局变量会污染命名空间，提高代码的耦合风险。  

:::

## process

> process 是一个全局变量，即 global 对象的属性。它用于描述当前 Node.js **进程状态**的对象，提供了一个与操作系统的简单接口。  

### process.argv

process.argv是命令行参数数组，第一个元素是 node， 第二个元素是脚本文件名，从第三个元素开始每个元素是一个运行参数。  

```javascript
// argv.js
console.log(process.argv);

ASUS@yaweidediannao MINGW64 ~/Desktop/test
$ node ./argv.js 1991 name=bycoid --v "Carbo Kuo"
[
  'C:\\Program Files\\nodejs\\node.exe',
  'C:\\Users\\ASUS\\Desktop\\test\\argv.js',
  '1991',
  'name=bycoid',
  '--v',
  'Carbo Kuo'
]
```

### process.stdout  

process.stdout是标准输出流，通常我们使用的 console.log() 向标准输出打印字符，而 process.stdout.write() 函数提供了更底层的接口  

### process.stdin  

process.stdin是标准输入流，初始时它是被暂停的，要想从标准输入读取数据，你必须恢复流，并手动编写流的事件响应函数。  


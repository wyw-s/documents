---
title: 异步式 I/O 与事件式编程
category: nodejs
autoGroup-2: Node.js快速入门
tags:
  - nodejs
---

> Node.js 最大的特点就是异步式 I/O（或者非阻塞 I/O）与事件紧密结合的编程模式。这种模式与传统的同步式 I/O 线性的编程思路有很大的不同，因为控制流很大程度上要靠事件和回调函数来组织，一个逻辑要拆分为若干个单元。  

## 阻塞与线程 ;

1. 阻塞；

   - 线程在执行中如果遇到磁盘读写或网络通信（统称为 I/O 操作），通常要耗费较长的时间，这时操作系统会剥夺这个线程的 CPU 控制权，使其暂停执行，同时将资源让给其他的工作线程，这种线程调度方式称为阻塞。
   - 当 I/O 操作完毕时，操作系统将这个线程的阻塞状态解除，恢复其对CPU的控制权，令其继续执行。这种 I/O 模式就是通
     常的同步式 I/O（Synchronous I/O）或阻塞式 I/O （Blocking I/O）。
2. 线程；
   - [操作系统](https://baike.baidu.com/item/操作系统)能够进行运算[调度](https://baike.baidu.com/item/调度)的最小单位。它被包含在[进程](https://baike.baidu.com/item/进程)之中，是[进程](https://baike.baidu.com/item/进程)中的实际运作单位。一条线程指的是[进程](https://baike.baidu.com/item/进程)中一个单一顺序的控制流，一个进程中可以并发多个线程，每条线程并行执行不同的任务。

## 异步式 I/O

异步式 I/O （Asynchronous I/O）或非阻塞式 I/O （Non-blocking I/O）则针对所有 I/O 操作不采用阻塞的策略。当线程遇到 I/O 操作时，不会以阻塞的方式等待 I/O 操作的完成或数据的返回，而只是将 I/O 请求发送给操作系统，继续执行下一条语句。当操作系统完成 I/O 操作时，以事件的形式通知执行 I/O 操作的线程，线程会在特定时候处理这个事件。为了处理异步 I/O，线程必须有事件循环，不断地检查有没有未处理的事件，依次予以处理。

> 阻塞模式下，一个线程只能处理一项任务，要想提高吞吐量必须通过多线程。而非阻塞模式下，一个线程永远在执行计算操作，这个线程所使用的 CPU 核心利用率永远是 100%，I/O 以事件的方式通知。在阻塞模式下，多线程往往能提高系统吞吐量，因为一个线程阻塞时还有其他线程在工作，多线程可以让 CPU 资源不被阻塞中的线程浪费。而在非阻塞模式下，线程不会被 I/O 阻塞，永远在利用 CPU。多线程带来的好处仅仅是在多核 CPU 的情况下利用更多的核，而Node.js的单线程也能带来同样的好处。这就是为什么 Node.js 使用了单线程、非阻塞的事件编程模式;

![image-20210601081746784](assets/image-20210601081746784.png)

## 回调函数；

1. 在 Node.js 中用异步的方式读取一个文件  ；

   ```javascript
   // app.js
   // 引入内置的 fs 模块
   const fs  = require('fs');
   
   // 这里我指定了编码格式 utf-8 ，因为我的文件中包含中文
   fs.readFile('./readFile.js', 'utf-8', (err, data) => {
     if (!err) {
       console.log(data);
     }
   })
   
   // 打印结果
   end
   console.log('中午好');
   ```

2. 在 Node.js 中用同步的方式读取一个文件  ；

   ```javascript
   const fs  = require('fs');
   
   const content = fs.readFileSync('./readFile.js', 'utf-8')
   console.log(content);
   console.log('end')
   
   // 打印结果
   console.log('中午好');
   end
   ```

> 1、 fs.readFileSync 函数同步式读取文件的方式比较容易理解，将文件名作为参数传入，阻塞等待读取完成后，将文件的内容作为函数的返回值赋给变量，接下来控制台输出 值，最后输出 end.。  
>
> 2、fs.readFile 调用时所做的工作只是将异步式 I/O 请求发送给了操作系统，然后立即返回并执行后面的语句，执行完以后进入事件循环监听事件。当 fs 接收到 I/O 请求完成的事件时，事件循环会主动调用回调函数以完成后续工作。因此我们会先看到 end.，再看到readFile.js文件的内容。  

::: warning

Node.js 中，并不是所有的 API 都提供了同步和异步版本。 Node.js 不鼓励使用同步 I/O。  

:::

## 事件

> Node.js 所有的异步 I/O 操作在完成时都会发送一个事件到事件队列。在开发者看来，事件由 EventEmitter 对象提供。前面提到的 fs.readFile 和 http.createServer 的回调函数都是通过 EventEmitter 来实现的。  

```javascript
const eventEmit = require('events').EventEmitter;
const event = new eventEmit();

event.on('some_event', (res) => {
  console.log(res, '----', 'some_event'); // 每秒输出： 我执行了 ---- some_event
})

setInterval(() => {
  event.emit('some_event', '我执行了')
}, 1000);
```

> 运行这段代码， 每过1秒后控制台输出了 `我执行了 ---- some_event`。其原理是 event 对象注册了事件 some_event 的一个监听器，然后我们通过 setInterval在1000毫秒以后向event 对象发送事件 some_event，此时会调用 some_event 的监听器。  

### Node.js 的事件循环机制  

>  Node.js 程序由事件循环开始，到事件循环结束，所有的逻辑都是事件的回调函数，所以 Node.js 始终在事件循环中，程序入口就是事件循环第一个事件的回调函数。事件的回调函数在执行的过程中，可能会发出 I/O 请求或直接发射（emit）事件，执行完毕后再返回事件循环，事件循环会检查事件队列中有没有未处理的事件，直到程序结束。Node.js 没有显式的事件循环，事件循环对开发者不可见，由 libev 库实现。libev支持多种类型的事件，如 ev_io、 ev_timer、 ev_signal、 ev_idle 等，在 Node.js 中均被EventEmitter 封装。 libev 事件循环的每一次迭代，在 Node.js 中就是一次 Tick， libev 不断检查是否有活动的、可供检测的事件监听器，直到检测不到时才退出事件循环，进程结束。  

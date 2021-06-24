---
title: 事件驱动 events
time: 2021-06-19 00:19:35
autoGroup-2: nodejs核心模块
category: 后端
tags: 
  - nodejs
---

> events 是 Node.js 最重要的模块，没有“之一”，原因是 Node.js 本身架构就是事件式的，而它提供了唯一的接口，所以堪称 Node.js 事件编程的基石。 events 模块不仅用于用户代码与 Node.js 下层事件循环的交互，还几乎被所有的模块依赖。  

## 事件发射器  

> events 模块只提供了一个对象： events.EventEmitter。 EventEmitter 的核心就是事件发射与事件监听器功能的封装。EventEmitter 的每个事件由一个事件名和若干个参数组成，事件名是一个字符串，通常表达一定的语义。对于每个事件， EventEmitter 支持若干个事件监听器。当事件发射时，注册到这个事件的事件监听器被依次调用，事件参数作为回调函数参数传递。  

```javascript
const events = require('events');
const emitter = new events.EventEmitter();

// 监听事件
// emitter.on('someEvent', function(arg1, arg2) {
//   console.log('listener1', arg1, arg2)
// })
// emitter.on('someEvent', function(arg1, arg2) {
//   console.log('listener2', arg1, arg2)
// })

// 触发事件
// emitter.emit('someEvent', 'byvoid', 1991)
// listener1 byvoid 1991
// listener2 byvoid 1991

emitter.once('someEvent', function(arg1, arg2) {
  console.log('listener1', arg1, arg2)
})

emitter.emit('someEvent', 'byvoid', 1991)
emitter.emit('someEvent', 'byvoid', 1991)
// listener1 byvoid 1991
```

> 以上例子中， emitter 为事件 someEvent 注册了两个事件监听器，然后发射了someEvent 事件。运行结果中可以看到两个事件监听器回调函数被先后调用  

**API说明**

- EventEmitter.on(event, listener) 为指定事件注册一个监听器，接受一个字符串 event 和一个回调函数 listener。  
- EventEmitter.emit(event, [arg1], [arg2], [...]) 发射 event 事件，传递若干可选参数到事件监听器的参数表。  
- EventEmitter.once(event, listener) 为指定事件注册一个单次监听器，即监听器最多只会触发一次，触发后立刻解除该监听器。  
- EventEmitter.removeListener(event, listener) 移除指定事件的某个监听器， listener 必须是该事件已经注册过的监听器。  
- EventEmitter.removeAllListeners([event]) 移除所有事件的所有监听器，如果指定 event，则移除指定事件的所有监听器。  

## error 事件

> EventEmitter 定义了一个特殊的事件 error，它包含了“错误”的语义，我们在遇到异常的时候通常会发射 error 事件。当 error 被发射时， EventEmitter 规定如果没有响应的监听器， Node.js 会把它当作异常，退出程序并打印调用栈。我们一般要为会发射 error事件的对象设置监听器，避免遇到错误后整个程序崩溃。  

```javascript
var events = require('events');

var emitter = new events.EventEmitter();

emitter.on('error', (err) => {
  console.log(err) // 错误了
})

emitter.emit('error', '错误了');
```

> 如果把监听的`error`事件去掉则会打印错误；

```shell
ASUS@yaweidediannao MINGW64 ~/Desktop/test
$ node ./module.js 
events.js:305
    throw err; // Unhandled 'error' event
    ^

Error [ERR_UNHANDLED_ERROR]: Unhandled error. ('错误了')
    at EventEmitter.emit (events.js:303:17)
    at Object.<anonymous> (C:\Users\ASUS\Desktop\test\module.js:9:9)
    at Module._compile (internal/modules/cjs/loader.js:999:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1027:10)
    at Module.load (internal/modules/cjs/loader.js:863:32)
    at Function.Module._load (internal/modules/cjs/loader.js:708:14)
    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:60:12)
    at internal/main/run_main_module.js:17:47 {
  code: 'ERR_UNHANDLED_ERROR',
  context: '错误了'
}
```

## 继承 EventEmitter  

> 大多数时候我们不会直接使用 EventEmitter，而是在对象中继承它。包括 fs、 net、http 在内的，只要是支持事件响应的核心模块都是 EventEmitter 的子类。  

**为什么要这样做呢？原因有两点。**  

- 具有某个实体功能的对象实现事件符合语义，事件的监听和发射应该是一个对象的方法。  
- JavaScript 的对象机制是基于原型的，支持部分多重继承，继承 EventEmitter 不会打乱对象原有的继承关系。  


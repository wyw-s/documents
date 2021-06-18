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

```javascript
process.stdout.write('我执行了') // 我执行了
```

### process.stdin  

process.stdin是标准输入流，初始时它是被暂停的，要想从标准输入读取数据，你必须恢复流，并手动编写流的事件响应函数。  

```javascript
// module.js
process.stdin.resume();
process.stdin.on('data', function(data) {
  process.stdout.write('read from console: ' + data.toString());
});
```

```shell
ASUS@yaweidediannao MINGW64 ~/Desktop/test
$ node module.js 
我执行了
read from console: 我执行了
```

**例：**process.stdout和process.stdin实现控制台登录

```javascript
let users={
	"admin":"123",
	"user1":"321",
	"user2":"213"
};
let username="";
process.stdout.write("请输入用户名:");
process.stdin.on('data',(input)=>{
	input=input.toString().trim();
	if(!username){
		if(Object.keys(users).indexOf(input)===-1){
			process.stdout.write('用户名不存在'+'\n');
			process.stdout.write("请输入用户名:");
			username="";
		} else {
			process.stdout.write("请输入密码:");
			username=input;
		}
	} else{
    // 输入密码
		if(input===users[username]){
			console.log("登陆成功");
		} else{
			process.stdout.write("请输入密码"+"\n");
		}
	}
});
```

```shell
ASUS@yaweidediannao MINGW64 ~/Desktop/test
$ node module.js
请输入用户名:er
用户名不存在
请输入用户名:admin
请输入密码:er
请输入密码
123
登陆成功
```

原文链接：https://blog.csdn.net/weixin_36339245/article/details/81126960

### process.nextTick()  

process.nextTick(callback)的功能是为事件循环设置一项任务， Node.js 会在下次事件循环调响应时调用 callback。  

我们知道，Node.js 适合 I/O 密集型的应用，而不是计算密集型的应用，因为一个 Node.js 进程只有一个线程，因此在任何时刻都只有一个事件在执行。如果这个事件占用大量的 CPU 时间，执行事件循环中的下一个事件就需要等待很久，因此 Node.js 的一个编程原则就是尽量缩短每个事件的执行时间。 process.nextTick() 提供了一个这样的工具，可以把复杂的工作拆散，变成一个个较小的事件。  

```javascript
function doSomething(args, callback) {
	somethingComplicated(args);
	callback();
}

doSomething(function onEnd() {
	compute();
});
```

> 我们假设 compute() 和 somethingComplicated() 是两个较为耗时的函数，以上的程序在调用 doSomething() 时会先执行 somethingComplicated()，然后立即调用回调函数，在 onEnd() 中又会执行 compute()。下面用 process.nextTick() 改写上面的程序：  

```javascript
function doSomething(args, callback) {
	somethingComplicated(args);
	process.nextTick(callback);
}
doSomething(function onEnd() {
	compute();
});
```

> 改写后的程序会把上面耗时的操作拆分为两个事件，减少每个事件的执行时间，提高事件响应速度。  

::: warning

不要使用 setTimeout(fn,0)代替 process.nextTick(callback)，前者比后者效率要低得多  

:::

## console

> console 用于提供控制台标准输出，它是由 Internet Explorer 的 JScript 引擎提供的调试工具，后来逐渐成为浏览器的事实标准。 Node.js 沿用了这个标准，提供与习惯行为一致的console 对象，用于向标准输出流（stdout）或标准错误流（stderr）输出字符  

### console.log() 

> 向标准输出流打印字符并以换行符结束。  

```javascript
console.log('Hello world');
// Hello world
```

### console.error()

> 与 console.log() 用法相同，只是向标准错误流输出。  

### console.trace()

> 向标准错误流输出当前的调用栈  

```javascript
// console.trace('Hello world');
Trace: Hello world
    at Object.<anonymous> (C:\Users\ASUS\Desktop\test\module.js:1:9)
    at Module._compile (internal/modules/cjs/loader.js:999:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1027:10)
    at Module.load (internal/modules/cjs/loader.js:863:32)
    at Function.Module._load (internal/modules/cjs/loader.js:708:14)
    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:60:12)
    at internal/main/run_main_module.js:17:47
```


---
title: 控制流
category: nodejs
time: 2021-06-29 07:55:34
autoGroup-6: 进阶
tags:
  - nodejs
  - 后端
---

> 基于异步 I/O 的事件式编程容易将程序的逻辑拆得七零八落，给控制流的疏理制造障碍。  

## 循环的陷阱

> Node.js 的异步机制由事件和回调函数实现，一开始接触可能会感觉违反常规，但习惯以后就会发现还是很简单的。然而这之中其实暗藏了不少陷阱。

**循环中的回调函数**

```javascript
var fs = require('fs');
var files = ['1.text', '2.text', '3.text']
for (var i = 0; i < files.length; i++) {
  fs.readFile(files[i], 'utf-8', function(err, contents) {
    console.log(files[i] + ': ' + contents)
  })
}
```

```shell
# 当你多次执行时，你会发现这个结果的顺序也是不固定的，text3也可能排在最前面，这要看哪一个异步最先完成。
ASUS@yaweidediannao MINGW64 ~/Desktop/test
$ node module
undefined: text2
undefined: text1
undefined: text3
```

> 上面的例子我们发现，文件内容正确输出了，而文件名却不对为`undefined`；

**原因分析**

```javascript
var fs = require('fs');
var files = ['1.text', '2.text', '3.text']
for (var i = 0; i < files.length; i++) {
  fs.readFile(files[i], 'utf-8', function(err, contents) {
    // console.log(files[i] + ': ' + contents)
    console.log(files)
    console.log(i)
    console.log(files[i])
  })
}
```

```shell
# 我们依次打印出 files、i、files[i]结果如下：
ASUS@yaweidediannao MINGW64 ~/Desktop/test
$ node module
[ '1.text', '2.text', '3.text' ]
3
undefined
[ '1.text', '2.text', '3.text' ]
3
undefined
[ '1.text', '2.text', '3.text' ]
3
undefined
```

> 通过上面的结果我们发现，三次输出的 i 的值都是 3，超出了 files 数组的下标范围，因此 files[i] 的值就是 undefined 了。

这种情况通常会在 for 循环结束时发生，退出循环时 i 的值就是files.length 的值。既然 i 的值是 3，那么说明了事实上 fs.readFile 的回调函数中访问到的 i 值都是循环退出以后的，因此`files[i]`的结果为undefined。而 files[i] 作为 fs.readFile 的第一个参数在循环中就传递了，所以文件可以被定位到，而且可以显示出文件的内容。  

**问题解决：方法1** 利用JavaScript 函数式编程的特性，手动建立一个闭包：

```javascript
var fs = require('fs')
var files = ['1.text', '2.text', '3.text']
for (var i = 0; i < files.length; i++) {
  (function(i){
    fs.readFile(files[i], 'utf-8', function(err, contents) {
      console.log(files[i] + ': ' + contents)
    })
  })(i)
}
```

```shell
ASUS@yaweidediannao MINGW64 ~/Desktop/test
$ node module
1.text: text1
2.text: text2
3.text: text3
```

> 我们在 for 循环体中建立了一个匿名函数，将循环迭代变量 i 作为函数的参数传递并调用。由于运行时闭包的存在，该匿名函数中定义的变量在它内部的函数（fs.readFile 的回调函数）执行完毕之前都不会释放，因此我们在其中访问到的 i 就分别是不同的闭包实例，这个实例是在循环体执行的过程中创建的，保留了不同的值。  

**问题解决：方法2** 利用JavaScript forEach 方法  ：

```javascript
var fs = require('fs')
var files = ['1.text', '2.text', '3.text']
files.forEach(item => {
  fs.readFile(item, 'utf-8', function(err, contents) {
    console.log(item + ': ' + contents)
  })
})
```

```shell
ASUS@yaweidediannao MINGW64 ~/Desktop/test
$ node module
1.text: text1
2.text: text2
3.text: text3
```

::: warning

无论你使用上面哪一种方法，当你多次执行时，你会发现结果的顺序可能会发生变化，text3也可能第一个输出，这主要取决于哪一个异步最先完成。

:::


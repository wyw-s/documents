---
title: import与require()的区别
time: 2021-09-07 13:35
category: nodejs
autoGroup-7: nodejs扩展
tags:
  - nodejs
---

> 这个问题的出现是在webpack的vue项目中，因为你会看到有用`require`的也有用`import`的，那么这两个之间到底是什么关系呢？解释这两个东西我们不得不提一下，commonjs规范和es6规范；

历史上，JavaScript 一直没有模块（module）体系，无法将一个大程序拆分成互相依赖的小文件，再用简单的方法拼装起来。其他语言都有这项功能，比如 Ruby 的require、Python 的import，甚至就连 CSS 都有@import，但是 JavaScript 任何这方面的支持都没有，这对开发大型的、复杂的项目形成了巨大障碍。

## commonjs规范；
> 我们知道随着网站逐渐的发展，嵌入网页的Javascript代码越来越庞大，而网页越来越像桌面程序，需要一个团队去分工协作，进行管理和测试等等，为了更好的管理网页的业务逻辑，产生了模块化编程的理念。模块就是实现特定功能的相互独立的一组方法。正如当年为了统一JavaScript语言标准，人们制定了ECMAScript规范一样，如今为了统一JavaScript在浏览器之外的实现，CommonJS诞生了。CommonJS试图定义一套普通应用程序使用的API，从而填补JavaScript标准库过于简单的不足。CommonJS的终极目标是制定一个像`C++`标准库一样的规范，使得基于CommonJS API 的应用程序可以在不同的环境下运行，就像用`C++`编写的应用程序可以使用不同的编译器和运行时函数库一样。为了保持中立，CommonJS不参与标准库实现，其实现交给像 Node.js 之类的项目来完成。

CommonJS是一种被广泛使用的javascript模块化规范，其核心是通过module.exports导出模块需要暴露的接口，通过require来加载依赖模块。NodeJS是这种规范的实践者，webpack也是以CommonJS的形式来书写。因为js没有模块的功能所以CommonJS应运而生，它希望js可以在任何地方运行，不只是浏览器中。它的终极目标是提供一个类似Python，Ruby和Java标准库。

Node 应用由模块组成，采用 CommonJS模块规范。每个文件就是一个模块，有自己的作用域。在一个文件里面定义的变量、函数、类，都是私有的，对其他文件不可见。在服务器端，模块的加载是运行时同步加载的；在浏览器端，模块需要提前编译打包处理。

特点:
- 所有代码都运行在模块作用域，不会污染全局作用域。
- 模块可以多次加载，但是只会在第一次加载时运行一次，然后运行结果就被缓存了，以后再加载，就直接读取缓存结果。
- 模块加载的顺序，按照其在代码中出现的顺序。

基本语法：
- 模块导出：
  ```javascript
  module.exports = value 
  // 或 
  exports.xxx = value
  ```
- 模块导入：
  ```javascript
  // 1、如果要使用某个模块里面的数据，则需要使用 require 关键字进行导入。
  // 2、在导入用户自己开发的模块的时候，需要加上路径（1. 相对路径（多） 2. 绝对路径） 注意: ./ 必须写上
  // 3、模块文件的扩展名(后缀名)可以写，也可以不写
  // 4、导出的模块一般需要使用一个变量来接收，一般把接收的量定义为常量
  // 5、定义常量的名称和文件的名称保持一致（这个不是必须，大家都这么做）
  const module = require('modulename');
  ```

> 此处你或许有个疑问：CommonJS暴露的模块到底是什么?CommonJS规范规定，每个模块内部，module变量代表当前模块。这个变量是一个对象，它的exports属性（即module.exports）是对外的接口。加载某个模块，其实是加载该模块的module.exports属性。

```javascript
var x = 5;
var addX = function (value) {
  return value + x;
};
module.exports.x = x;
module.exports.addX = addX;
// 或 
exports.x = x;
exports.addX = addX;
// 或 
module.exports = { x, addX }
```
> 上面代码通过module.exports输出变量x和函数addX。

```javascript
// 如果参数字符串以“./”开头，则表示加载的是一个位于相对路径
var example = require('./example.js'); // 或 var { x, addX } = require('./example.js');
console.log(example.x); // 5
console.log(example.addX(1)); // 6
```
```javascript
let { stat, exists, readfile } = require('fs');

// 等同于
let _fs = require('fs');
let stat = _fs.stat;
let exists = _fs.exists;
let readfile = _fs.readfile;
```
> require命令用于加载模块文件。require命令的基本功能是，读入并执行一个JavaScript文件，然后返回该模块的exports对象。如果没有发现指定模块，会报错。上面代码的实质是整体加载fs模块（即加载fs的所有方法），生成一个对象（_fs），然后再从这个对象上面读取3个方法。这种加载称为**“运行时加载”**，因为只有运行时才能得到这个对象，导致完全没办法在编译时做“静态优化”。

::: tip
`module.exports = {}`不可写成 `exports = {}`，因为exports是nodejs暴露的一个变量，这个变量的引用指向`module.exports`这个对象,如果对它重新赋值就失去了原引用；
:::

## es6规范；
> 在 ES6 之前，社区制定了一些模块加载方案，最主要的有CommonJS和AMD两种。前者用于服务器，后者用于浏览器。ES6在语言标准的层面上，实现了模块功能，而且实现得相当简单，完全可以取代 CommonJS 和 AMD 规范，成为浏览器和服务器通用的模块解决方案。ES6模块的设计思想是尽量的**静态化**，使得编译时就能确定模块的依赖关系，以及输入和输出的变量。CommonJS 和 AMD 模块，都只能在运行时确定这些东西。比如，CommonJS模块就是对象，输入时必须查找对象属性。**ES6模块不是对象，而是通过export命令显式指定输出的代码，再通过import命令输入。**

```javascript
import { stat, exists, readFile } from 'fs';
```

上面代码的实质是从fs模块加载 3 个方法，其他方法不加载。这种加载称为**“编译时加载”**或者**静态加载**，即ES6可以在编译时就完成模块加载，效率要比CommonJS模块的加载方式高。当然，这也导致了没法引用 ES6 模块本身，因为它不是对象。由于ES6模块是编译时加载，使得静态分析成为可能。有了它，就能进一步拓宽JavaScript的语法，比如引入宏（macro）和类型检验（type system）这些只能靠静态分析实现的功能。除了静态加载带来的各种好处，ES6 模块还有以下好处：

- 不再需要UMD模块格式了，将来服务器和浏览器都会支持 ES6 模块格式。目前，通过各种工具库，其实已经做到了这一点。
- 将来浏览器的新 API 就能用模块格式提供，不再必须做成全局变量或者navigator对象的属性。
- 不再需要对象作为命名空间（比如Math对象），未来这些功能可以通过模块提供。

es6模块的具体使用方式，请参考阮一峰的博客：https://es6.ruanyifeng.com/#docs/module

::: tip
-  ES module 模块导出是值的引用，在原始值改变时 import 的加载值也会随之变化;
-  Commonjs 模块导出的是值的拷贝;
   :::

## 参考博文
- https://www.jianshu.com/p/1f6298c1db66
- https://es6.ruanyifeng.com/#docs/module

---
title: 常用工具util
time: 2021-06-18 23:19:35
autoGroup-2: nodejs核心模块
category: 后端
tags: 
  - nodejs
---

> util 是一个 Node.js 核心模块，提供常用函数的集合，用于弥补核心 JavaScript 的功能过于精简的不足。  

## util.inherits

> 是一个实现对象间原型继承的函数。 JavaScript 的面向对象特性是基于原型的，与常见的基于类的不同。 JavaScript 没有提供对象继承的语言级别特性，而是通过原型复制来实现的。

语法：

```js
// constructor：子类的构造函数
// superConstructor：父类的构造函数
util.inherits(constructor, superConstructor)
```

> 该方法对继承的实现，其本质上还是JavaScript原型链式继承。该方法会将父类superConstructor原型链上的方法复制到子类constructor原型链上，在其内部是调用Object.create()实现新对象的创建及原型链方法的复制。

示例：

```javascript
var util = require('util')
function Base() {
  this.name = 'base'
  this.base = 1991
  this.sayHello = function() {
    console.log('Hello ' + this.name)
  }
}
Base.prototype.showName = function() {
  console.log(this.name)
}
function Sub() {
  this.name = 'sub'
}
util.inherits(Sub, Base)
var objBase = new Base()
objBase.showName()
objBase.sayHello()
console.log(objBase)

var objSub = new Sub()
objSub.showName()
//objSub.sayHello();
console.log(objSub)
```

::: warning 

 Sub 仅仅继承了 Base 在原型中定义的函数，而构造函数内部创造的 base 属性和 sayHello 函数都没有被 Sub 继承。同时，在原型中定义的属性不会被 console.log 作为对象的属性输出。如果我们去掉 objSub.sayHello();  则会报错；

:::

## util.inspect  

> 是一个将任意对象转换为字符串的方法，通常用于调试和错误输出。  

语法：

```javascript
util.inspect(object,[showHidden],[depth],[colors])
```

参数：

1. object：转换的对象  
2. showHidden：可选参数，如果值为 true，将会输出更多隐藏信息  
3. depth： 表示最大递归的层数，如果对象很复杂，你可以指定层数以控制输出信息的多少。如果不指定depth，默认会递归2层，指定为 null 表示将不限递归层数完整遍历对象。
4. color ：如果color 值为 true，输出格式将会以 ANSI 颜色编码，通常用于在终端显示更漂亮的效果。    

::: tip

特别要指出的是， util.inspect 并不会简单地直接把对象转换为字符串，即使该对象定义了 toString 方法也不会调用。  

:::

```javascript
var util = require('util')
function Person() {
  this.name = 'byvoid'
  this.toString = function() {
    return this.name
  }
}
var obj = new Person()
console.log(util.inspect(obj))
console.log(util.inspect(obj, true, null, true))

// 打印结果
Person { name: 'byvoid', toString: [Function] }
Person {
  name: 'byvoid',
  toString: [Function] {
    [length]: 0,
    [name]: '',
    [arguments]: null,
    [caller]: null,
    [prototype]: { [constructor]: [Circular] }
  }
}
```

::: tip

util还提供了util.isArray()、util.isRegExp()、util.isDate()、 util.isError() 四个类型测试工具，以及 util.format()、 util.debug() 等工具。 

可以访问 http://nodejs.org/api/util.html 了解详细内容   

:::
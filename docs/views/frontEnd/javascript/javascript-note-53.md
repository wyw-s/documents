---
title: 创建和访问对象
category: javascript
date: 2021-07-01 08:25:22
---

> js是一个弱类型的语言，同时也是一个面向对象的编程的语言。

## `javascript`的特点

- 一种解释性执行的脚本语言。
  - javascript不需要预先编译，而是在程序运行过程中被逐行地解释。
- 一种基于对象的脚本语言。
  - 开发者可以创建对象，这意味着JavaScript能运用其已经创建的对象进行开发。
- 一种弱类型脚本语言。
  - 它与强类型定义语言相反, 一个变量可以赋不同数据类型的值。
- 一种相对安全脚本语言。
  - JavaScript作为一种安全性语言，不被允许访问本地的硬盘，且不能将数据存入服务器，不允许对网络文档进行修改和删除，只能通过浏览器实现信息浏览或动态交互。
- 一种事件驱动脚本语言。
  - JavaScript对用户的响应，是以事件驱动的方式进行的。比如：点击鼠标，选择菜单等，这背后都注册的有一定的事件在里面。
- 一种跨平台性脚本语言。
  - JavaScript依赖于浏览器本身，与操作环境无关，只要计算机能运行浏览器，并支持JavaScript的浏览器，就可正确执行，从而实现了“编写一次，走遍天下”的梦想。

## `javascript`的优缺点

**优点**

- 减少网络传输。
  - 不需要把表单工作发送到服务器效验后再返回给浏览器，简单的验证可以直接再客户端进行，有效的减少了数据的传输。
- 方便操纵HTML对象。
  - 可以方便地操纵各种页面中的元素，使用JavaScript来控制页面中各个元素的外观、状态甚至运行方式，可以根据用户的需要“定制”浏览器，从而使网页更加友好。
- 支持分布式运算。
  - JavaScript可以使多种任务仅在用户端就可以完成，而不需要网络和服务器的参与，从而支持分布式的运算和处理。

**缺点**

- 各浏览器厂商对JavaScript支持程度不同。
- “Web安全性”对JavaScript一些功能牺牲。
  - 不能打开、读写和保存用户计算机上的文件。其有权访问的唯一信息就是该JavaScript所嵌入的那个Web主页中的信息

## 创建和访问对象

> JavaScript 中的对象实际上就是一个由属性组成的关联数组，属性由名称和值组成，值的类型可以是任何数据类型，或者函数和其他对象。  

**字面量方式创建对象**

```javascript
// 语法
var obj = {};
```

```javascript
// 创建一个 foo 的对象；
const foo = {}
// . 语法添加对象成员
foo.prop_1 = 'bar'
// 关联数组的方式添加对象成员
foo['prop_2'] = false
foo.prop_3 = function() {
  return 'hello world'
}
// 关联数组的方式访问对象成员
console.log(foo['prop_2']) // false
// . 语法访问对象
console.log(foo.prop_3()) // 'hello world'
```

**构造函数的方式创建对象**

```javascript
// 语法
var obj = new Object();
```

```javascript
// 创建一个 foo 的对象；
const foo = new Object();
foo.prop_1 = 'bar'
// 关联数组的方式访问对象成员
console.log(foo.prop_1) // 'bar'
```

**方法创建对象**

```javascript
// 语法
var obj = Object.create(null);
```

```javascript
// 创建一个 foo 的对象；
const foo = Object.create(null);
foo.prop_1 = 'bar'
// 关联数组的方式访问对象成员
console.log(foo.prop_1) // 'bar'
```

**创建对象时初始化对象成员**

```javascript
const foo = {
  name: '小明'
};
console.log(foo.name) // 小明
```

## 参考资料

JavaScript弱类型语言的优缺点有哪些：http://www.elecfans.com/emb/593478.html


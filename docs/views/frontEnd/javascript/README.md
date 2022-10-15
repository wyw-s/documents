---
title: 介绍
category: javascript
date: 2021-08-08 15:07:22
---

> 学习一门语言我想有必要了解一下这门语言的发展史。

![布兰登·艾奇](https://www.ruanyifeng.com/blogimg/asset/201106/bg2011060503.jpg)

## JavaScript的起源

JavaScript因互联网而生，紧随着浏览器的出现而问世。回顾它的历史，就要从浏览器的历史讲起。

- 1990年底，欧洲核能研究组织，发明了万维网（World Wide Web）。
- 1992年底，美国国家超级电脑应用中心（NCSA），开发了第一个浏览器，Mosaic。
- 1994年10月，Mosaic通信公司成立，不久后改名为Netscape。开始开发面向普通用户的新一代的浏览器 Netscape Navigator。
- 1994年12月，Navigator发布了1.0版，市场份额一举超过90%。

1994年，网景公司（Netscape）发布了Navigator浏览器0.9版。这是历史上第一个比较成熟的网络浏览器，轰动一时。但是，这个版本的浏览器只能用来浏览，不具备与访问者互动的能力。比如，如果网页上有一栏"用户名"要求填写，浏览器就无法判断访问者是否真的填写了，只有让服务器端判断。如果没有填写，服务器端就返回错误，要求用户重新填写，这太浪费时间和服务器资源了。因此，网景公司急需一种网页脚本语言，使得浏览器可以与网页互动。工程师Brendan Eich(布兰登·艾奇)负责开发这种新语言。他觉得，没必要设计得很复杂，这种语言只要能够完成一些简单操作就够了，比如判断用户有没有填写表单。

1995年5月，Brendan Eich(布兰登·艾奇)只用了10天，就设计完成了这种语言的第一版。由于设计时间太短，语言的一些细节考虑得不够严谨，导致后来很长一段时间，Javascript写出来的程序混乱不堪。如果Brendan Eich预见到，未来这种语言会成为互联网第一大语言，全世界有几百万学习者，他会不会多花一点时间呢？如果不是公司的决策，Brendan Eich绝不可能把Java作为Javascript设计的原型。作为设计者，他一点也不喜欢自己的这个作品：
```text
"与其说我爱Javascript，不如说我恨它。它是C语言和Self语言一夜情的产物。十八世纪英国文学家约翰逊博士说得好：'它的优秀之处并非原创，它的原创之处并不优秀。'（the part that is good is not original, and the part that is original is not good.）"
```

## 发展历史

[历史版本](https://www.ecma-international.org/publications-and-standards/standards/ecma-262/)

- 1995年5月，JavaScript诞生。
- 1996年11月，网景公司将JavaScript提交给欧洲计算机制造商协会进行标准化。ECMA-262的第一个版本于1997年6月被Ecma组织采纳。
- 1998年6月，ECMAScript 2.0版发布。
- 1999年12月，ECMAScript 3.0版发布，成为JavaScript的通行标准，得到了广泛支持。
- 2007年10月，ECMAScript 4.0版草案发布，对3.0版做了大幅升级，预计次年8月发布正式版本。草案发布后，由于4.0版的目标过于激进，各方对于是否通过这个标准，发生了严重分歧。
- 2008年7月，由于对于下一个版本应该包括哪些功能，各方分歧太大，争论过于激进，ECMA开会决定，中止ECMAScript 4.0的开发，将其中涉及现有功能改善的一小部分，发布为ECMAScript 3.1，而将其他激进的设想扩大范围，放入以后的版本，由于会议的气氛，该版本的项目代号起名为Harmony（和谐）。会后不久，ECMAScript 3.1就改名为ECMAScript 5。
- 2009年12月，ECMAScript 5.0版正式发布。Harmony项目则一分为二，一些较为可行的设想定名为JavaScript.next继续开发，后来演变成ECMAScript 6；一些不是很成熟的设想，则被视为JavaScript.next.next，在更远的将来再考虑推出。
- 2011年6月，ECMAscript 5.1版发布，并且成为ISO国际标准（ISO/IEC 16262:2011）。
- 2013年3月，ECMAScript 6草案冻结，不再添加新功能。新的功能设想将被放到ECMAScript 7。
- 2013年12月，ECMAScript 6草案发布。然后是12个月的讨论期，听取各方反馈。
- 2015年6月，ECMAScript 6发布正式版本，即ECMAScript 2015。(ES6的第一个版本发布)
- 截止发布日期，JavaScript的官方名称是ECMAScript 2015，下一版本将于2016年发布，命名为ECMAScript 2016。之后每年发布一版，新版本将按照ECMAScript+年份的形式发布。
- 2016年6月，小幅修订的《ECMAScript 2016 标准》（简称 ES2016）如期发布，这个版本可以看作是 ES6.1 版，因为两者的差异非常小（只新增了数组实例的includes方法和指数运算符），基本上是同一个标准。【也就是我们所说的ES7】

::: info
因此，ES6 既是一个历史名词，也是一个泛指，含义是 5.1 版以后的 JavaScript 的下一代标准，涵盖了 ES2015、ES2016、ES2017 等等，而 ES2015 则是正式名称，特指该年发布的正式版本的语言标准。
:::

| 名称                                     | 标准版本 | 发行时间   |
| ---------------------------------------- | -------- | ---------- |
| ECMAScript 1 （ES1）                     | 1        | 1997年6月  |
| ECMAScript 2 （ES2）                     | 2        | 1998年6月  |
| ECMAScript 3 （ES3）                     | 3        | 1999年12月 |
| ECMAScript 4 （ES4）                     | 4        | 被放弃     |
| ECMAScript 5 （ES5）                     | 5        | 2009年12月 |
| ECMAScript 5.1 （ES5.1）                 | 5.1      | 2011年6月  |
| ECMAScript 2015 （ES2015）也就是我们 ES6 | 6        | 2015年6月  |
| ECMAScript 2016 （ES2016）               | 7        | 2016年6月  |
| ECMAScript 2017 （ES2017 ）              | 8        | 2017年6月  |
| ...                                      | ...      | ...        |


## 目录

- [基础](05_javascript.md)
- [js数据类型](10_js数据类型.md)
- [变量的复制](15_变量的复制.md)
- [类型转换](20_类型转换.md)
- [类型检测](25_类型检测.md)
- [声明提升](30_声明提升.md)
- [创建和访问对象](35_创建和访问对象.md)
- [排序算法](40_排序算法.md)
- [常用方法](45_常用方法.md)
- 高级
  - [javascript高级](505_javascript高级.md)
  - [对象拷贝](510_对象拷贝.md)
  - [函数防抖](515_函数防抖.md)
  - [对象拷贝](520_对象拷贝.md)
  - [作用域链](525_作用域链.md)
  - [作用域链延长](530_作用域链延长.md)
  - [原型](535_原型.md)
  - [深拷贝与浅拷贝](540_深拷贝与浅拷贝.md)
  - [this对象](545_this对象.md)
- ECMAScript新特性
  - [ES6](5028_ES6.md)
  - [模板字符串](1015_模板字符串.md)
  - [Symbol](1020_javascript.md)
  - [变量声明](1025_变量声明.md)
  - [ES7](5030_ES7.md)
  - [ES8](5035_ES8.md)
  - [ES8](5040_ES9.md)
  - [ES10](5045_ES10.md)
  - [ES11](5050_ES11.md)
  - [ES12](5055_ES12.md)
  - [ES13](5060_ES13.md)
- 进阶
  - [函数节流](1505_函数节流.md)
  - [new的实现原理](1515_new的实现原理.md)
  - [什么是Promise](1520_什么是Promise.md)
  - [javascript内存管理](1525_javascript内存管理.md)
  - [单元测试](1530_单元测试.md)
  - [提高代码可靠性](1535_提高代码可靠性.md)
  - [链表数据结构](1540_链表数据结构.md)
  - [什么是作用域](1545_什么是作用域.md)
  - [尾调用优化](1550_尾调用优化.md)
  - [同步与异步](1555_同步与异步.md)
  - [javascript单线程](1560_javascript单线程.md)
  - [定时器](1565_定时器.md)
  - [EventLoop机制](1570_EventLoop机制.md)
  - [发布订阅](1575_发布订阅.md)
  - [深入理解Promise](1580_深入理解Promise.md)
  - [Generator函数及其异步应用](1585_Generator函数及其异步应用.md)
  - [Generator函数的实现原理](1590_Generator函数的实现原理.md)
  - [深入理解async,await](1593_深入理解async,await.md)
  - [co模块源码分析](1595_co模块源码分析.md)
  - [async函数实现原理](1600_async函数实现原理.md)
  - [promise%20A+规范](1605_promise%20A+规范.md)
  - [手写promise](1610_手写promise.md)
  - [编译原理](1615_编译原理.md)
  - [chunk函数及其应用](1620_chunk函数及其应用.md)
  - [Rxjs](1625_Rxjs.md)
  - [Web%20Workers](1630_Web%20Workers.md)
  - [defineProperty](1635_defineProperty.md)
- 函数应用
  - [compose函数和pipe函数](2005_compose函数和pipe函数.md)
  - [高阶函数](2010_高阶函数.md)
  - [常用函数](2015_常用函数.md)
  - [立即执行函数(IIFE)](2020_立即执行函数(IIFE).md)
  - [闭包](2025_闭包.md)
  - [递归](2030_递归.md)
  - [回调](2035_回调.md)
  - [柯里化](2040_柯里化.md)
- 其他
  - [常用正则表达式](5003_常用正则表达式.md)
  - [打包及本地预览](5005_打包及本地预览.md)
  - [js实现复制粘贴](5010_js实现复制粘贴.md)
  - [简单编辑svg图片](5015_简单编辑svg图片.md)
  - [JSON%20TO%20YAML](5020_JSON%20TO%20YAML.md)
  - [响应回来发送下一个请求](5025_响应回来发送下一个请求.md)

## 参考资料

- [MDN官方文档](https://developer.mozilla.org/zh-CN/docs/Learn)
- [ECMAScript新特性](https://github.com/tc39/proposals/blob/main/finished-proposals.md)
- [判断浏览器是否支持ES某一特性](http://kangax.github.io/compat-table/es2016plus/)
- javascript权威指南；
- 你不知道的javascript系列；
- 博客园网站；

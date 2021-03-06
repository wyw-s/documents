---
title: Node.js是什么
category: nodejs
autoGroup-1: nodejs简介
tags:
  - nodejs
---

> Node.js 不是一种独立的语言， Node.js 也不是一个 JavaScript 框架，Node.js 更不是浏览器端的库，不能与 jQuery、 ExtJS 相提并论。 Node.js 是一个让 JavaScript 运行在服务端的开发平台，它让 JavaScript 成为脚本语言世界的一等公民，在服务端堪与 PHP、 Python、Perl、 Ruby 平起平坐。它跳过了 Apache、 Nginx 等 HTTP服务器，直接面向前端开发。

## Node.js 与 JavaScript  

> Node.js 是一个划时代的技术。它让 JavaScript 可以脱离浏览器而运行，它实现了诸如文件系统、模块、包、操作系统 API、网络通信等 Core JavaScript 没有或者不完善的功能。 它在原有的 Web 前端和后端技术的基础上总结并提炼出了许多新的概念和方法，堪称是多年来 Web 开发经验的集大成者。 Node.js 的许多设计理念与经典架构（如 LAMP）有着很大的不同，可提供强大的伸缩能力，以适应21世纪10年代以后规模越来越庞大的互联网环境。  
>
> JavaScript 是由 ECMAScript、文档对象模型（DOM）和浏览器对象模型（BOM）组成的，而 Mozilla 则指出 JavaScript 由
> Core JavaScript 和 Client JavaScript 组成。Node.js 中所谓的 JavaScript 只是ECMAScript 的一个实现，不包含 DOM、 BOM 或者 Client JavaScript。这是因为 Node.js 不运行在浏览器中，所以不需要使用浏览器中的许多特性。  

1. javascript包括；
   - ECMAScript  ;
   - 文档对象模型（DOM）;
   - 浏览器对象模型（BOM）;
2. Node.js  包括；(只支持 JS语法)
   - ECMAScript
   - 不包含 DOM、 BOM ;
   - node模块：封装好的js代码；
   - 第三方模块：例 npm安装的
3. 优点：
   - 采用v8引擎，V8 号称是目前世界上最快JavaScript 引擎  
   - Node.js 不运行在浏览器中，所以也就不存在 JavaScript 的浏览器兼容性问题，JavaScript 语言的所有特性 ；
   - 遵循了CommonJS规范  ；
   - 采用异步式 I/O 与事件驱动的架构设计；
   - 包含libev 和 libeio 库  
4. 缺点；异步事件模式，因为它不符合开发者的常规线性思路，往往需要把一个完整的逻辑拆分为一个个事件，增加了开发和调试难度  

---
title: CommonJS规范
category: nodejs
autoGroup-1: nodejs简介
tags:
  - nodejs
---

> 正如当年为了统一 JavaScript 语言标准，人们制定了 ECMAScript 规范一样，如今为了统一 JavaScript 在浏览器之外的实现， CommonJS 诞生了。  

CommonJS 试图定义一套普通应用程序使用的API，譬如文件系统访问、命令行、模块管理、函数库集成等功能，从而填补 JavaScript 标准库过于简单的不足。 CommonJS 的终极目标是制定一个像 C++ 标准库一样的规范，使得基于 CommonJS API 的应用程序可以在不同的环境下运行，就像用 C++ 编写的应用程序可以使用不同的编译器和运行时函数库一样。为了保持中立， CommonJS 不参与标准库实现，其实现交给像 Node.js 之类的项目来完成。  

CommonJS 制定者希望众多服务端 JavaScript 实现遵循CommonJS 规范，以便相互兼容和代码复用。 Node.js 的部份实现遵循了CommonJS规范，但由于两者还都处于诞生之初的快速变化期，也会有不一致的地方。  


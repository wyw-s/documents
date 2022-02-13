---
title: Generator函数的实现原理
category: javascript
date: 2021-06-22 23:30:22
autoGroup-15: 进阶
---

协程

- 一个线程存在多个协程，但同时只能执行一个。
- Generator函数是协程在ES6的实现。
- Yield挂起x协程(交给其他协程)，Next唤醒x协程； 


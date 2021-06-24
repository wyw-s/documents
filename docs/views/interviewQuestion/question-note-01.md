---
title: 浏览器采用多进程架构有什么优势和劣势？
category: 面试题;
time: 2021-06-15 22:37:23
---

## 优点

1. 可以增加响应速度以及安全性同时也会有良好的体验性 比如听歌的同时可以打开编译器敲代码 又比如当一个网页挂掉后不会影响其他网页；
2. 第三方插件崩溃也不会影响到整个浏览器；
3. 多进程可以充分利用现代 CPU 多核的优势；
4. 方便使用沙盒模型隔离插件等进程,提高浏览器的稳定性；

## 缺点

1. 系统需要为浏览器新开的进程分配内存、CPU 等资源，所以内存和 CPU 的资源消耗也会更大；

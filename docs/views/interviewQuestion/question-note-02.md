---
title: 为什么不建议采用定时器实现动画？requestAnimationFrame有哪些优势？
category: 面试题
time: 2021-06-15 22:40:23
---

**为什么不建议采用定时器实现动画？**

1. 定时器可能不会按时触发 还会有丢帧现象;
2. 通过定时器修改元素位置属性，会导致频繁的重排和重绘，从而影响到性能。

**requestAnimationFrame有哪些优势？**

1. requestAnimationFrame最大的优势是由浏览器来决定回调函数的执行时机，即紧跟浏览器的刷新步调。 不会引起动画丢帧卡顿;

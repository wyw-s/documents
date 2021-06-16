---
title: Event Loop机制
category: javascript
time: 2021-06-15 07:34:00
autoGroup-4: 进阶
tags:
  - javascript
  - 面试题
---

> Event Loop就是事件循环是实现异步的一种机制

事件循环包含宏任务和微任务；

宏任务：

1. 全局script的执行；
2. 定时器(`setTimeout  setInterval`);
3. `setImmedidte`(nodejs拥有的);
4. I/O;
5. UI rendering;

微任务：

1. Promise;
2. Object.observe;
3. MutationObserver;
4. postMessage;


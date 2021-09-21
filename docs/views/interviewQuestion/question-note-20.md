---
title:  computed 的实现原理
category: 面试题
autoGroup-20: vue相关
time: 2021-09-15 23:39:23
---
> computed 本质是一个惰性求值的观察者，具有缓存的功能。数据如果不发生变化则每次获取不再做计算。

一句话总结:

vue.js 采用数据劫持结合发布-订阅模式,通过 Object.defineproperty 来劫持各个属性的 setter,getter,在数据变动时发布消息给订阅者,触发响应的监听回调;

[阅读原文](https://www.php.cn/js-tutorial-455048.html)


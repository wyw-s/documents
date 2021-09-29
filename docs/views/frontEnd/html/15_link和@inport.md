---
title: link和@import的区别
category: HTML
date: 2021-09-29 08:32:34
---

1. 从属关系区别：@import是 CSS 提供的语法规则，只有导入样式表的作用；link是HTML提供的标签，不仅可以加载 CSS 文件，还可以定义 RSS、rel 连接属性等。
2. 加载顺序区别：加载页面时，link标签引入的 CSS 被同时加载；@import引入的 CSS 将在页面加载完毕后被加载。
3. 兼容性区别：@import是 CSS2.1 才有的语法，故只可在 IE5+ 才能识别；link标签作为 HTML 元素，不存在兼容性问题。
4. DOM可控性区别：可以通过 JS 操作 DOM ，插入link标签来改变样式；由于 DOM 方法是基于文档的，无法使用@import的方式插入样式。

[阅读原文](https://zhuanlan.zhihu.com/p/136047345)


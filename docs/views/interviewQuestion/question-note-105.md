---
title: 你知道nextTick的原理吗?
category: 面试题
autoGroup-20: vue相关
time: 2021-09-21 13:27:34
---

> nextTick官方文档的解释，它可以在DOM更新完毕之后执行一个回调  

尽管MVVM框架并不推荐访问DOM，但有时候确实会有这样的需求，尤其是和第三方插件进行配合的时候，免不了要进行DOM操作。而nextTick就提供了一个桥梁，确保我们操作的是更新后的DOM。  

MutationObserver是HTML5新增的属性，用于监听DOM修改事件，能够监听到节点的属性、文本内容、子节点等的改动，是一个功能强大的利器  

vue用MutationObserver是想利用它的microtask特性，而不是想做DOM监听。核心是microtask，用不用MutationObserver都行的。事实上，vue在2.5版本中已经删去了MutationObserver相关的代码，因为它是HTML5新增的特性，在iOS上尚有bug。那么最优的microtask策略就是Promise了，而令人尴尬的是，Promise是ES6新增的东西，也存在兼容问题呀。所以vue就面临一个降级策略。  

队列控制的最佳选择是microtask，而microtask的最佳选择是Promise.但如果当前环境不支持Promise，vue就不得不降级macrotask来做队列控制了。macrotask有哪些可选的方案呢？前面提到了setTimeout是一种，但它不是理想的方案。因为setTimeout执行的最小时间间隔是约4ms的样子，略微有点延迟。在vue2.5的源码中，macrotask降级的方案依次是：setImmediate、MessageChannel、setTimeout.setImmediate是最理想的方案了，可惜的是只有IE和nodejs支持。MessageChannel的onmessage回调也是microtask，但也是个新API，面临兼容性的尴尬。所以最后的兜底方案就是setTimeout了，尽管它有执行延迟，可能造成多次渲染，算是没有办法的办法
了。  


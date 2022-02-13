---
title: 函数防抖
category: javascript
autoGroup-15: 进阶
date: 2021-05-02 22:22:34
---

> 概述：一个处理函数会在延迟n秒后触发，如果在n秒内再次触发那么回重新计时；
>
> 简单理解：防抖可以比作等电梯，只要有一个人进来，就 需要再等一会儿。

## 影响

> 前端开发过程中的resize，scroll，mousemove，mousehover等，会被频繁地出发，不做限制的话，有可能一秒之内执行几十次，几百次，如果在这些函数内部执行了其他函数，尤其是执行了操作了DOM的函数，那不仅会造成计算机资源的浪费，还会降低程序运行速度，甚至造成浏览器卡死，崩溃。

## 实现

```javascript
<script>
    var throttle = function(func, delay) {
      // 存储定时器id;
      var timer = null
      return function(...args) {
        // 判断定时器是否在执行中；
        if (timer) {
          // 在每次开始之前清除以前的定时器；
          clearTimeout(timer)
        }
        timer = setTimeout(function() {
          func(...args)
        }, delay)
      }
    }
    // 要进行处理的函数；
    function handle() {
      console.log(Math.random())
    }
    window.addEventListener('mousemove', throttle(handle, 1000))
</script>
```

> 优点：防止用户由于过快的操作而发起的无用的请求；

## 使用场景：

1.  登录、发短信等按钮避免用户点击太快，以致于发送了多次请求，需要防抖。
2.  淘宝的导航列表;
3.  搜索框搜索输入。只需用户最后一次输入完成，在发送请求；
4.  浏览器的窗口大小改变后，只需窗口调整完成后，再执行`resize`里面是代码，防止重新渲染；
5.  文本编辑器实时保存，当无任何更改操作一秒后进行保存；


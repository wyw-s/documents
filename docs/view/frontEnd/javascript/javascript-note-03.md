---
title: 函数防抖
---



> 概述：一个处理函数会在延迟n秒后触发，如果在n秒内再次触发那么回重新计时；

```js
<script>
    var throttle = function(func, delay) {
      // 存储定时器id;
      var timer = null
      return function() {
        // 判断定时器是否在执行中；
        if (timer) {
          // 在每次开始之前清除以前的定时器；
          clearTimeout(timer)
        }
        timer = setTimeout(function() {
          func()
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

>优点：防止用户由于过快的操作而发起的无用的请求；
>
>使用场景：
>
>1、淘宝的导航列表;
>
>2、搜索框搜索输入。只需用户最后一次输入完成，在发送请求；
>
>3、浏览器的窗口大小改变后，只需窗口调整完成后，在执行`resize`里面是代码，防止重新渲染；


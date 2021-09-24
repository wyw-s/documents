---
title: 函数节流
category: javascript
autoGroup-15: 进阶
date: 2021-05-02 22:22:34
---

> 概述：限制一个函数再一定时间内只能执行一次；

```js
<script>
    var throttle = function(func, delay) {
      // 初始化定时器的id；
      var timer = null
      // 定义开关属性
      var key = true
      return function() {
        // 第一次立即调用
        if (key) {
          func()
          key = false
        } else if (!timer) {
          // 若上次的定时器执行完毕则立即调用，否则不调用；
          timer = setTimeout(function() {
            func()
            timer = null
          }, delay)
        }
      }
    }

    // 要进行处理的函数； 
    function handle() {
      console.log(Math.random())
    }

    window.addEventListener('mousemove', throttle(handle, 1000))
  </script>
```

>使用场景：
>
>1、懒加载、滚动加载、加载更多、监听滚动条位置；
>
>2、百度搜索框、搜索联想功能；
>
>3、防止高频点击提交、防止表单重复提交；

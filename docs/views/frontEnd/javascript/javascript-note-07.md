---
title: jsonp跨域的实现原理
---

## 实现原理；

>  **利用javascript里边的src属性的开放原则实现跨域:** 

### 1、我们先看一段代码；

```Js
<script>
    function Fn(val) {
      console.log(333)
      console.log(val)
    }
  </script>
```

上面的代码中我们要想执行函数必须进行调用；

```js
Fn('晚上好')
```

### 2、看第二段代码；

```js
<script>
    function Fn(val) {
      console.log(333)
      console.log(val)
    }
  </script>
  <script src="http://jsonplaceholder.typicode.com/posts?callback=Fn"></script>
```

> 通过上面的代码中我们不难看出，`src`的属性值中有一个`callback`参数，值为我们要执行的函数的名字；
>
> **注意**：`http`链接为我的在线接口测试地址，当然你也可以使用；

- 上面的代码运行之后你会惊奇的发现`Fn`函数执行了，而且`val`为接口响应回来的数据；

## 总结；

这就是`jsonp`的跨域实现原理；

1. 在`src`中用`callback`关键字作为参数，值为要执行的函数；
2. 当响应成功时，响应回来的数据会作为参数传入`Fn(responseData)`;
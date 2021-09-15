---
title: dirname和filename
category: WEBPACK
date: 2021-05-02
---

## `__dirname`和`__filename`

> 都可以动态的获取当前的绝对路径

```js
tem.js

// __dirname和filename是nodejs内置的全局变量；
console.log(__dirname, __filename)

// C:\Users\ASUS\Desktop\webpackProject\src C:\Users\ASUS\Desktop\webpackProject\src\tem.js
```

> __dirname会获取当前**文件夹**的绝对路径
>
> __filename会获取当前**文件**的绝对路径
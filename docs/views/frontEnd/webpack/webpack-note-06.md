---
title: path.join()和path.resolve()
category: WEBPACK
date: 2021-05-02
---

## `path.join()`和`path.resolve()`

> path 为`nodejs`的内置模块；

1. 使用：path.join(  path1, path2, ... );

   -  用于连接路径。主要用途在于，会正确使用当前系统的路径分隔符，Unix系统是"/"，Windows系统是"\"。 

   ```js
   // join方法只是将两个路径进行拼接，
   const path = require('path')
   console.log(path.join('a'))  // a
   console.log(path.join('a', ''))  // a
   console.log(path.join('', 'b'))  // b
   
   console.log(path.join('a', 'b'))  // a\b
   console.log(path.join('a', './b'))  // a\b
   console.log(path.join('a', '/b'))  // a\b
   
   console.log(path.join('/a', 'b'))  // \a\b
   console.log(path.join('/a', './b'))  // \a\b
   console.log(path.join('/a', '/b'))  // \a\b
   
   console.log(path.join('./a', 'b'))  // a\b
   console.log(path.join('./a', './b'))  // a\b
   console.log(path.join('./a', '/b'))  // a\b
   ```

2. 使用：path.resolve( **[from ...], to** );

   -  将 **to** 参数解析为绝对路径，给定的路径的序列是从右往左被处理的，后面每个 path 被依次解析，直到构造完成一个绝对路径。 例如，给定的路径片段的序列为：/foo、/bar、baz，则调用 path.resolve('/foo', '/bar', 'baz') 会返回 /bar/baz。 

   ```js
   /**
    * path.resolve() 会以当前的文件的根路径进行拼接，
    * 如果第一个参数或第二个参数以 / 开头，那么会作为根路径进行拼接，
    */
   const path = require('path')
   console.log(path.resolve('a'))  // C:\Users\ASUS\Desktop\webpackProject\src\a
   console.log(path.resolve('a', ''))  // C:\Users\ASUS\Desktop\webpackProject\src\a
   console.log(path.resolve('', 'b'))  // C:\Users\ASUS\Desktop\webpackProject\src\b
   
   console.log('=======')
   
   console.log(path.resolve('a', 'b'))  // C:\Users\ASUS\Desktop\webpackProject\src\a\b
   console.log(path.resolve('a', './b'))  // C:\Users\ASUS\Desktop\webpackProject\src\a\b
   console.log(path.resolve('a', '/b'))  // C:\b
   
   console.log('=======')
   
   console.log(path.resolve('/a', 'b'))  // C:\a\b
   console.log(path.resolve('/a', './b'))  // C:\a\b
   console.log(path.resolve('/a', '/b'))  // C:\b
   
   console.log('=======')
   
   console.log(path.resolve('./a', 'b'))  // C:\Users\ASUS\Desktop\webpackProject\src\a\b
   console.log(path.resolve('./a', './b'))  // C:\Users\ASUS\Desktop\webpackProject\src\a\b
   console.log(path.resolve('./a', '/b'))  // C:\b
   ```

   > 注意：path.resolve()的拼接是有**盘符**的；




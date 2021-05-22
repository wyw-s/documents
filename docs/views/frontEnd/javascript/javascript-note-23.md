---
title: 模板字符串
autoGroup-1: 基础
---

> 模板字符串是允许嵌入表达式的字符串字面量。可以使用多行字符串和字符串插值功能；

1. 支持所有的合法表达式，包括函数调用；

   ```javascript
   let getName = function () {
     return 'john';
   };
   console.log(`my name is ${getName()}`);
   ```

   

2. 支持嵌套；

   ```javascript
   const classes = `header ${isLargeScreen() ? '' : `icon-${(isCollapsed ? 'expander' : 'collapser')}`}`;
   ```

3. 添加模板函数

   - 最前面可以跟一个函数，这个函数叫模板字符串的tag。

   ```javascript
   function tag (literals, ...subtitutions) {
    // return a string
   }
   ```

   


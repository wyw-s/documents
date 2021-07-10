---
title: 模板字符串
category: javascript
autoGroup-2: es6
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

3. 添加模板tag

   - 最前面可以跟一个函数，这个函数叫模板字符串的tag。
   - literals：模板字面量的数组。subtitutions：插值表达式的值
   
   ```javascript
   function tag (literals, ...subtitutions) {
    // return a string 可以返回任意值，不一定是字符串
   }
   ```
   - 最前面可以跟一个函数，这个函数叫模板字符串的tag，在解析字符串时会调用这个函数。
   ```javascript
   let person = 'Mike';
   let age = 28;
   function myTag(strings, personExp, ageExp) {
     let str0 = strings[0]; // 'that'
     let str1 = strings[1]; // ' is a '
     // 最后还有一项，不过它的值是空字符串 ’‘
     // let str2 = string[2];
     let ageStr;
     if (ageExp > 99) {
         ageStr = 'centenarian';
     } else {
       ageStr = 'youngster';
     }
     return str0 + personExp + str1 + ageStr;
   }
   let output = myTag`that ${person} is a ${age}`;
   console.log(output); // that Mike is a youngster
   ```
   
4. 原始字符串值：raw value

   > tag函数的第一个参数，还有一个raw属性，它的值是模板字符串被转义之前的值，也可以使用内置的String.raw方法

   ```javascript
   let message1 = `Multiline\nstring`;
   let message2 = String.raw`Multiline\nstring`;
   console.log(message1); // "Multiline
   								// string"
   console.log(message2); // Multiline\\nstring
   ```

   


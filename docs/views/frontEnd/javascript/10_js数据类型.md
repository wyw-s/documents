---
title: js数据类型
category: javascript
date: 2021-05-19 22:05:34
---

> javascript一共有8种数据类型;
>
> 1. 原始数据类型(简单数据类型)：字符串（String）、数字(Number)、布尔(Boolean)、空（Null）、未定义（Undefined）、Symbol。
> 2. 引用数据类型(复杂数据类型)：对象(Object)、数组(Array)、函数(Function)。

::: tip

*注：*

- Symbol 是 ES6 引入了一种新的原始数据类型，表示独一无二的值。*
- NaN：即非数值（Not a Numder) 是一种特殊的number类型值；任何和NaN运算的结果都为NaN;和自己也不相等；

:::

## 原始数据类型

1. 原始数据类型的值无法更改；

   ```javascript
   "use strict"
   var a = 'abc';
   a[1] = 'a';
   alert(a) // abc
   ```
   
   > 严格模式则会报语法错误；
   
2. 原始类型的比较；

   - 原始类型的比较是值的比较，只有值相等它们才相等；

   ```javascript
   var n1 = 123;
   var n2 = Number(123);
   console.log(n1 === n2); // true
   
   var s1 = 'abc';
   var s2 = String('ab c');
   console.log(s1 === s2) // false
   ```

## 引用数据类型

> 对象类型又叫引用类型，当给一个变量赋值为对象时，该变量保存的是该对象的内存中的地址；

1. 引用数据类型的值可以更改；

   ```javascript
   var o = { x: 1 };
   o.x = 2;
   o.y = 3;
   console.log(o); // { x: 2, y: 3 };
   delete o.x;
   console.log(o); // { y: 3 }
   
   // ===
   
   var a = [1, 2, 3];
   a[1] = 4;
   console.log(a); // [1, 4, 3]
   ```

2. 引用数据类型的比较；

   - 引用数据类型的比较不是值的比较，而是引用地址的比较，只有引用的内存地址是同一个对象时它们才相等；

   ```javascript
   var o1 = { x: 1 }, o2 = { x: 1 };
   var a1 = [1, 2, 3], a2 = [1, 2, 3];
   console.log(o1 === o2); // false;
   console.log(a1 === a2); // false;
   
   //====
   
   var o1 = { x: 1 };
   var o2 = o1;
   o2.y = 2;
   console.log(o1.y);// 2
   console.log(o1 === o2); // true
   
   ```

   

   


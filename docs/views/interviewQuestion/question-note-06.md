---
title: this指向问题
category: 面试题
time: 2021-06-26 14:44:23
---
> 以下示例是在浏览器环境下执行了，nodejs下，结果会有所不同
```javascript
function Foo() {
  getName = function () {
    console.log(1);
  };
  return this;
}
Foo.getName = function () {
  console.log(2);
};
Foo.prototype.getName = function () {
  console.log(3);
};
var getName = function () {
  console.log(4);
};
function getName() {
  console.log(5);
}
Foo.getName();
Foo().getName();
getName();
new Foo.getName();
new Foo().getName();
new new Foo().getName();
```

```shell
# 输出结果
2
1
1
2
3
3
```

> 问题解析：
>
> - `Foo.getName()`：调用Foo的静态方法，所以，打印2
> - `Foo().getName()`：Foo()就是普通函数调用，返回的this是window，后面调用window.getName()而window下的getName在Foo()调用时getName被重新赋值,所以,打印1
> - `getName()`：在执行过Foo().getName()的基础上，所以getName=function(){console.log(1)}，所以打印1，==如果getName()放在Foo().getName()上先执行则打印结果为4==
> - `new Foo.getName()`：构造器私有属性的getName()，所以打印2
> - `new Foo().getName()`：原型上的getName()，打印3
> - ` new new Foo().getName() `：
>   - 首先new  Foo()得到一个空对象{}
>   - 向空对象中添加一个属性getName，值为一个函数
>   - new {}.getName()


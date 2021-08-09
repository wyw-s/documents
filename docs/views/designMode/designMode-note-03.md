---
title: 工厂模式
category: designMode
time: 2021-08-09 20:38:22
---

> 定义一个创建对象的接口，让其开发者自己决定实例化哪一个工厂类。通常用于当某一个对象需要经常创建的时候，其主要目的是方便我们大量创建对象。

```javascript
function Person (name, age) {
  this.name = name
  this.age = age
  this.sayName = function () {
    console.log(this.name)
  }
}

var p1 = new Person('Jack', 18)
p1.sayName() // => Jack

var p2 = new Person('Mike', 23)
p2.sayName() // => Mike
```

> 工厂模式就是写一个方法，只需调用这个方法，就能拿到你要的对象；

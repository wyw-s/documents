---
title: 工厂模式
category: 设计模式
time: 2021-08-09 20:38:22
---

> 定义一个创建对象的接口，让其开发者自己决定实例化哪一个工厂类。通常用于当某一个对象需要经常创建的时候，其主要目的是方便我们大量创建对象。
## 创建对象
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

## 创建弹窗

> 实现一个多彩的弹窗，弹窗有多种，他们之间存在内容和颜色上的差异；

```javascript
(function() {
    // 创建3个弹窗，消息、确认、取消,分别具有不同的颜色
    function Pop(type, content, color) {
        if (this instanceof Pop) {
            return this[`${type}Pop`](content, color);
        } else {
            return new Pop(type, content, color)
        }
    }
    Pop.prototype.infoPop = function(content, color) {
        console.log(content, color);
    }
    Pop.prototype.cancelPop = function(content, color) {
        console.log(content, color);
    }
    Pop.prototype.confirmPop = function(content, color) {
        console.log(content, color);
    }
    window.$pop = Pop;
})()

$pop('info', 'hello word', 'red')
```

> 你只需要去调用这个`$pop`方法即可批量创建弹窗；

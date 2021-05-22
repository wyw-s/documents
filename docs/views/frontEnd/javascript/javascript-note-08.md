---
title: new的实现原理
---

## `new`的实现原理；

```js
<script>
    // 创建一个构造函数
    function Father() {
      this.name = '小红';
      this.eat = function () {
        console.log('我叫'+this.name);
      }
    }
    /**
     * 1、在内存中创建一个新的对象；
     * 2、让this指向这个新的对象；
     * 3、执行构造函数里面的代码并给这个对象添加属性和方法；
     * 4、返回这个新对象；
     */
    // 使用new关键字来创建一个对象；
    var fa = new Father()
    console.log(fa);

    // ----------------------------------------

    /**
     * 实现new的过程
     */
    function _new() {
      // 1、创建一个空对象；
      var obj = {}

      // 利用 es6 数组的结构特点可以把函数的参数结构出来
      var [newfn, ...args] = [...arguments]

      // 2、将该对象 obj 的原型链 __proto__ 指向构造函数的原型 prototype，
      obj.__proto__ = newfn.prototype

      // 并且在原型链 __proto__ 上设置构造函数 constructor 为要实例化的 newfn
      obj.__proto__.constructor = newfn

      // 3、让构造函数 newfn 的this改变指向到 obj，并执行
      var result = newfn.call(obj, ...args)

      // 4、如果newfn执行后返回的是对象或函数类型，则返回该对象，否则返回 obj
      if (
        result &&
        (typeof result === 'object' || typeof result === 'function')
      ) {
        return result
      }
      return obj
    }

    // 构造函数；
    function f1(name, age) {
      this.name = name
      this.age = age
      this.eat = function() {
        return '我叫' + this.name + '今年' + this.age + '岁'
      }
    }

    // 创建一个对象；
    var obj2 = _new(f1, '小明', 18)
    console.log(obj2)
    console.log(obj2.name)  // 小明
    console.log(obj2.eat()) // 我叫小明今年18岁

  </script>
```


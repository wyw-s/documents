---
title: 函数继承
category: javascript
autoGroup-5: 进阶
---

## 通过原型实现继承

```js
<script>
    // 父类构造函数；
    function Proson(name, age) {
      this.name = name;
      this.age = age;
      this.eat = function() {
        console.log('我叫'+this.name+'今年'+this.age)
      }
    }
    Proson.prototype.sleep = function() {
      console.log('我的技能是睡觉')
    }

	// 子类构造函数；
    function Son() {}

    /**
     *  只能继承实例的属性和方法不能继承原型的属性和方法；
     *  同时 constructor 指向错误不在指向原来的构造函数；
     */
    // Son.prototype =  Proson.prototype
    
    // 让son的原型指向proosn的实例(一个新的实例)，通过原型达到继承；
    Son.prototype = new Proson('小红', 18)

    //指向改变之后要指回原构造函数；
    Son.prototype.constructor=Son;
    
    // 在改变指向后添加方法，
    Son.prototype.run = function() {
      console.log('run')
    }

    var fa = new Proson()
    var so = new Son()
    console.log(fa)
    console.log(so)
    console.log(so.sleep())
    console.dir(Proson)
    console.dir(Son)
  </script>
```

> 优点：简单易于实现，父类实例属性和方法，子类都可以访问；
>
> 缺点：创建子实例时，不能向父类的构造函数中传入参数；只能在改变指向的时候传入。

## 通过构造函数实现继承；

```js
<script>
    function Proson(name, age) {
      this.name = name;
      this.age = age;
      this.eat = function() {
        console.log('我叫' + this.name + '今年' + this.age)
      }
    }
    
    Proson.prototype.sleep = function() {
      console.log('我的技能是睡觉')
    }

    function Son(name, age, score) {
      // 通过构造函数实现继承，
      // 只能继承实例的属性和方法，不能原型的方法
      Proson.call(this, name, age)
      this.score = score;
    }

    var fa = new Proson()
    var so = new Son('小红', 18, 90)

    console.log(fa)
    console.log(so)
    console.log(so.eat())
    console.dir(Proson)
    console.dir(Son)
  </script>
```

> 优点：
>
> 1、解决了子类构造函数向父类构造函数中传递参数的问题；
>
> 2、可以实现多继承(call或apply多个多个父类)
>
> 缺点：
>
> 1、不能继承原型上的属性或方法，只能继承父类实例上的属性和方法；

## 组合继承(原型+构造函数)

```js
<script>
    // 父类的构造函数；
    function Proson(name, age) {
      this.name = name
      this.age = age
      this.eat = function() {
        console.log('我叫' + this.name + '今年' + this.age)
      }
    }
    Proson.prototype.sleep = function() {
      console.log('我的技能是睡觉')
    }

    // 子类构造函数；
    function Son(name, age, score) {
      /**
       * 通过构造函数实现继承父类的全部属性；
       */
      Proson.call(this, name, age)
      this.score = score
    }

    /**
     * 通过原型继承父类的原型上的方法
     */
    Son.prototype = new Proson()
    Son.prototype.skill = function () {
      console.log('skill');
    }
    // 实例化对象；
    var pro = new Proson()
    var so = new Son('小明', 18)

    console.log(pro, so)
    console.log(so.name)
    console.log(so.skill())
	console.log(so.eat())
  </script>
```

> 优点：
>
> 1、既可以继承父类的全部属性又可以继承父类的原型方法；
>
> 2、可以在实例化子类时，传入参数；


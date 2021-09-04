---
title: 响应式原理(数组)
category: vue
autoGroup-2: 进阶
---
> 说起`vue`的响应式原理，大家也许只知道它的底层是对`js`的原生方法`defineProperty`的封装，而具体的实现却是一头雾水。下面我们就一探究竟。
>
> 然而数组的响应式与对象又有点区别，因为当你用 `list.push(1)`方法往数组里面添加元素时，依赖并不会触发。
>
> 解决方法：就是拦截`push()`方法，用自己的`push`方法覆盖原始方法，这样当你用`push()`方法时，便可以做一些其他的操作；

## 1、封装拦截器。

> 主要目的：生成自己的push相关方法。
>

```js
// arrayMethods.js
const utils = require('./utils/utils.js')
/**
 * 实现拦截器
 */
const arrayProto = Array.prototype
const arrayMethods = Object.create(arrayProto)
;[
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
].forEach(function (method) {
  // 缓存原始方法
  const original = arrayProto[method]
  utils.def(arrayMethods, method, function mutator(...args) {
    // 让缓存的原始的方法指向 数组；
    const result = original.apply(this, args)
    const ob = this.__ob__
    let inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args
        break
      case 'splice':
        // 因为 splice 可传入三个参数，从第三个参数开始 便是新增的元素，我们只对新增的元素变换侦测
        inserted = args.splice(2)
        break
    }
    if (inserted) ob.observeArray(inserted)
    ob.dep.notify()
    return result
  })
})
exports.arrayMethods = arrayMethods
```

## 2、封装`defineProperty`。

```js
// defineReactive.js
const Dep = require('./Dep.js')
const utils = require('./utils/utils.js')

function defineReactive(data, key, val) {
  let childOb = utils.observe(val)
  let dep = new Dep.Dep()
  Object.defineProperty(data, key, {
    // 描述该属性是否会出现在for in 或者 Object.keys()的遍历中
    enumerable: true,
    // 描述属性该属性是否配置，以及可否删除
    configurable: true,
    get: function () {
      dep.depend()
      // 这里收集数组的依赖
      if (childOb) {
        childOb.dep.depend()
      }
      return val
    },
    set: function (newval) {
      if (val === newval) {
        return
      }

      val = newval
      dep.notify()
    }
  })
}

exports.defineReactive = defineReactive
```

## 2、封装 `Dep`的类；

> 主要目的：用于处理依赖。

```js
/**
 * 收集依赖  Dep.js
 */
 class Dep {
  constructor () {
    // 收集依赖的集合
    this.subs = []
  }

  // 添加依赖；
  addSub (sub) {
    this.subs.push(sub)
  }

  // 删除依赖；
  removeSub (sub) {
    remove(this.subs, sub)
  }

  // 收集依赖
  depend () {
    if (global.target) {
      this.addSub(global.target)
    }
  }

  // 通知
  notify () {
    const subs = this.subs.slice()
    for (let i = 0; i < subs.length; i++) {
      subs[i].update()
    }
  }
}

function remove (arr, item) {
  if (arr.length) {
    const index = arr.indexOf(item)
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

exports.Dep = Dep

```

## 3、`Observer;`

> 作用：将一个数据内的所有的属性都转换成getter/setter的形式。然后去追踪他们的变化;

```js
// Observer.js
const defineReactive = require('./defineReactive.js')
const utils = require('./utils/utils.js')
const arrayMethods = require('./arrayMethods.js')
const Dep = require('./Dep.js')

/**
 * 覆盖Array原型；
 */

/**
 * 因为有些浏览器可能不支持 __proto__ 属性；所以需要判断。
 * in关键字可以用来检测某个对象里是否存在某个属性，
 * 既可以是这个对象自身的属性，也可以是这个对象继承的属性
 * */
const hasProto = '__proto__' in {}
// Object.getOwnPropertyNames 可以获取不可枚举属性 和 object.keys类似；
const arraykeys = Object.getOwnPropertyNames(arrayMethods.arrayMethods)

class Observer {
  constructor(value) {
    this.value = value
    // 收集数组的依赖
    this.dep = new Dep.Dep()
    utils.def(value, '__ob__', this)
    // 判断 value 是否为数组
    if (Array.isArray(value)) {
      /**
       * 将拦截器挂载到数组的属性上；
       */
        // 如果为数组则判断当前浏览器是否支持 __proto__ 属性
      const augment = hasProto ? utils.protoAugment : utils.copyAugment
      augment(value, arrayMethods, arraykeys)
      this.observeArray(value)
    } else {
      this.walk(value)
    }
  }

  /**
   * 侦测Array中的每一项；
   */
  observeArray(items) {
    for (let i = 0; i < items.length; i++) {
      utils.observe(items[i])
    }
  }

  // 此方法只在数据类型为对象时，调用；
  walk(obj) {
    const keys = Object.keys(obj)
    for (let i = 0; i < keys.length; i++) {
      defineReactive.defineReactive(obj, keys[i], obj[keys[i]])
    }
  }
}

exports.Observer = Observer

```

## 4、`Watcher`;

> 一个 Watcher 中介的角色，收集的依赖就是它。
>
> 因为它知道你要访问的属性；

```js
// Watcher.js
class Watcher {
  constructor(vm, expOrFn, cb) {
    this.vm = vm
    this.getter = parsePath(expOrFn)
    this.cb = cb
    this.value = this.get()
  }

  get() {
    global.target = this
    // 避免对象的引用导致 像数组中添加元素时 不会返回原数据的问题
    let value = JSON.parse(JSON.stringify(this.getter.call(this.vm, this.vm)))
    global.target = undefined
    return value
  }

  update() {
    const oldValue = this.value
    this.value = this.get()
    this.cb.call(this.vm, this.value, oldValue)
  }
}

// 用于根据路径来读取属性的值；
const bailRE = /[^\w.$]/

function parsePath(path) {
  if (bailRE.test(path)) {
    return
  }
  const segments = path.split('.')
  return function (obj) {
    for (let i = 0; i < segments.length; i++) {
      if (!obj) return
      obj = obj[segments[i]]
    }
    return obj
  }
}

exports.Watcher = Watcher

```

## 5、工具函数

```javascript
// utils/utils.js
const defineReactive = require('../defineReactive.js')
const Observer = require('../Observer.js')
/**
 * 当前浏览器不支持时，执行该方法，
 * 目的：将 arrayMethods 的方法，设置到被侦测的数组上。
 * 原因：当访问一个对象的方法时，只有其自身不存在这个方法，才会去它的原型上找这个方法，
 * */
function copyAugment(target, src, keys) {
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i]
    defineReactive.defineReactive(target, key, src[key])
  }
}

// 当前浏览器支持 __proto__ 属性时，执行该方法。
// 目的：覆盖数组的原始__proto__ 。
function protoAugment(target, src, keys) {
  target.__proto__ = src.arrayMethods
}

// 判断是否为对象；
function isObject(obj) {
  return obj !== null && typeof obj === 'object'
}

const hasOwnProperty = Object.prototype.hasOwnProperty

function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key)
}

// 工具函数；
function def(obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  })
}

function observe(value) {
  if (!isObject(value)) {
    return
  }
  let ob
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer.Observer) {
    ob = value.__ob__
  } else {
    ob = new Observer.Observer(value)
  }
  return ob
}

module.exports = {
  copyAugment,
  protoAugment,
  def,
  observe
}
```

```bash
array
├── arrayMethods.js
├── defineReactive.js
├── Dep.js
├── index.js
├── Observer.js
├── utils
│   └── utils.js
├── Watcher.js
```

## 6、使用；

> 实现：`vm.$watch()`

```js
const Observer = require('./Observer.js')
const Watcher = require('./Watcher.js')

var data = {
  name: '熊明',
  arr: [1, 2, 3, 4, 5, 6, 7, 8, 9]
}
new Observer.Observer(data)

function Vm() {}
Vm.prototype.$watch = function (obj, path, cb) {
  new Watcher.Watcher(obj, path, cb)
}

var vm = new Vm()
vm.$watch(data, 'arr', (newVal, oldVal) => {
  console.log('我执行了', newVal, '===', oldVal)
})

// data.arr.push('q', 'w', 'r')
data.arr.splice(2, 5)
// data.name = '你好'

```

## 总结；

> `vue`通过对`js`的原生方法的封装；来达到对数据的访问和赋值的拦截，然后做执行自己的逻辑代码；
>
> 要想达到对数据的响应，就要对数据进行处理，就是把用到这个数据的地方收集起来，然后当这个值发生变化时，通过便会通过触发`get`函数，来通知用到这个数据的地方，则其修改；
>
> 问题：
>
> 但是正是由于实现的方法是通过拦截原型，所以有些操作这侧不到；
>
> 1、this.list[0] = 9
>
> 2、this.list.length = 0
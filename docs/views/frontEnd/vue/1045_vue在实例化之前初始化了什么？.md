---
title: vue在实例化之前初始化了什么？
category: vue
autoGroup-10: 进阶
date: 2021-09-19 17:53:23
---

> 我们知道vue在实例化的时候会做一些初始化工作，但是初始化之前vue也添加了很多的东西，下面就来看一下；

这是一段来自vue中的代码：

```javascript
import { initMixin } from './init'
import { stateMixin } from './state'
import { renderMixin } from './render'
import { eventsMixin } from './events'
import { lifecycleMixin } from './lifecycle'
import { warn } from '../util/index'

function Vue (options) {
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
  this._init(options)
}

initMixin(Vue)
stateMixin(Vue)
eventsMixin(Vue)
lifecycleMixin(Vue)
renderMixin(Vue)

export default Vue
```

> 通过以上代码我们可以看出，在实例化vue的时候，又分别调用了5个方法，下面我们就看下这些方法；

## initMixin

这个函数的调用没有做太多的事情，函数里面的代码都是在实例化vue的时候执行的，

```javascript
export function initMixin (Vue: Class<Component>) {
  Vue.prototype._init = function (options?: Object) {
   ...省略
  }
}
```

> initMixin这个函数只是往vue的原型对象中添加了一个`_init`方法，具体的细节我们在new Vue()的时候在提起

## stateMixin

```javascript
export function stateMixin (Vue: Class<Component>) {
  const dataDef = {}
  dataDef.get = function () { return this._data }
  const propsDef = {}
  propsDef.get = function () { return this._props }
  if (process.env.NODE_ENV !== 'production') {
    dataDef.set = function () {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      )
    }
    propsDef.set = function () {
      warn(`$props is readonly.`, this)
    }
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef)
  Object.defineProperty(Vue.prototype, '$props', propsDef)

  Vue.prototype.$set = set
  Vue.prototype.$delete = del

  Vue.prototype.$watch = function (
    expOrFn: string | Function,
    cb: any,
    options?: Object
  ): Function {
   ...省略
  }
}
```

> 通过以上代码我们可以看出，vue往原型对象上又分别加入了`$data、$props`只读属性和全局方法`($set、$delete、$watch)`

## eventsMixin

```javascript
export function eventsMixin (Vue: Class<Component>) {
  Vue.prototype.$on = function (event: string | Array<string>, fn: Function): Component {...省略}

  Vue.prototype.$once = function (event: string, fn: Function): Component {...省略}

  Vue.prototype.$off = function (event?: string | Array<string>, fn?: Function): Component {...省略}

  Vue.prototype.$emit = function (event: string): Component {...省略}
}
```

> 通过以上代码我们可以看出，vue往原型对象上又分别加入了`$on、$once、$off、$emit`用于发布订阅

## lifecycleMixin

```javascript
export function lifecycleMixin (Vue: Class<Component>) {
  Vue.prototype._update = function (vnode: VNode, hydrating?: boolean) {...省略}

  Vue.prototype.$forceUpdate = function () {...省略}

  Vue.prototype.$destroy = function () {...省略}
}
```

> 我们最常提到的生命周期就是在这里初始化的，但是这里只有三个；

## renderMixin

```javascript
export function renderMixin (Vue: Class<Component>) {

  Vue.prototype.$nextTick = function (fn: Function) {
    return nextTick(fn, this)
  }

  Vue.prototype._render = function (): VNode {}
}
```

> 这里挂载了一个比较重要的一个东西`$nextTick`.
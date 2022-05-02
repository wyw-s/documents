---
title: defineProperty
category: javascript
date: 2021-08-31 08:09:22
autoGroup-15: 进阶
---

> `Object.defineProperty()` 方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性，并返回此对象。

::: tip

应当直接在 [`Object`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object) 构造器对象上调用此方法，而不是在任意一个 `Object` 类型的实例上调用。

:::

## 语法

```javascript
Object.defineProperty(obj, prop, descriptor)
```

**参数：**

- obj：要定义属性的对象。
- prop：要定义或修改的属性的名称或 [`Symbol`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol) 。
- descriptor：要定义或修改的属性描述符。
- 返回值：被传递给函数的对象。

::: tip

在ES6中，由于 Symbol类型的特殊性，用Symbol类型的值来做对象的key与常规的定义或修改不同，而`Object.defineProperty` 是定义key为Symbol的属性的方法之一。

:::

> 该方法允许精确地添加或修改对象的属性。通过赋值操作添加的普通属性是可枚举的，在枚举对象属性时会被枚举到（[`for...in`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/for...in) 或 [`Object.keys`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)[ ](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)方法），可以改变这些属性的值，也可以[`删除`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/delete)这些属性。这个方法允许修改默认的额外选项（或配置）。默认情况下，使用 `Object.defineProperty()` 添加的属性值是不可修改（immutable）的。

## 描述符

> 对象里目前存在的属性描述符有两种主要形式：*数据描述符*和*存取描述符*。

**数据描述符**：是一个具有值的属性，该值可以是可写的，也可以是不可写的。

**存取描述符**：是由 getter 函数和 setter 函数所描述的属性。

::: warning 

一个描述符只能是这两者其中之一；不能同时是两者。

:::

这两种描述符都是对象。它们共享以下可选键值（默认值是指在使用 `Object.defineProperty()` 定义属性时的默认值）：

- **configurable**
  - 当且仅当该属性的 `configurable` 键值为 `true` 时，该属性的描述符才能够被改变，同时该属性也能从对应的对象上被删除。
  - **默认为** **`false`**。
- **enumerable**
  - 当且仅当该属性的 `enumerable` 键值为 `true` 时，该属性才会出现在对象的枚举属性中。（[`for...in`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/for...in) 或 [`Object.keys`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)[ ](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)方法）
  - **默认为** **`false`**。
- 数据描述符具有以下可选键值：
  - **value**
    - 该属性对应的值。可以是任何有效的 JavaScript 值（数值，对象，函数等）。
    - **默认为 [`undefined`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined)**。
  - **writable**
    - 当且仅当该属性的 `writable` 键值为 `true` 时，属性的值，也就是上面的 `value`，才能被改变。
    - **默认为 `false`。**
- 存取描述符具有以下可选键值：
  - **get**
    - 属性的 getter 函数，如果没有 getter，则为 `undefined`。当访问该属性时，会调用此函数。执行时不传入任何参数，但是会传入 `this` 对象（由于继承关系，这里的`this`并不一定是定义该属性的对象）。该函数的返回值会被用作属性的值。
    - **默认为 [`undefined`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined)**。
  - **set**
    - 属性的 setter 函数，如果没有 setter，则为 `undefined`。当属性值被修改时，会调用此函数。该方法接受一个参数（也就是被赋予的新值），会传入赋值时的 `this` 对象。
    - **默认为 [`undefined`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined)**。
- 描述符默认值汇总：
  - 拥有布尔值的键 `configurable`、`enumerable` 和 `writable` 的默认值都是 `false`。
  - 属性值和函数的键 `value`、`get` 和 `set` 字段的默认值为 `undefined`。

**描述符可拥有的键值：**

|            | `configurable` | `enumerable` | `value` | `writable` | `get`  | `set`  |
| ---------- | -------------- | ------------ | ------- | ---------- | ------ | ------ |
| 数据描述符 | 可以           | 可以         | 可以    | 可以       | 不可以 | 不可以 |
| 存取描述符 | 可以           | 可以         | 不可以  | 不可以     | 可以   | 可以   |

::: tip

如果一个描述符不具有 `value`、`writable`、`get` 和 `set` 中的任意一个键，那么它将被认为是一个数据描述符。如果一个描述符同时拥有 `value` 或 `writable` 和 `get` 或 `set` 键，则会产生一个异常。

:::

## 示例

### 数据描述符

**特有**的两个属性（value,writable）

```javascript
let Person = {}
Object.defineProperty(Person, 'name', {
    value: 'jack',
    writable: false // 是否可写 默认值：false
})

Person.name = 'rose'
console.log(Person.name) // jack
```

```javascript
let Person = {}
Object.defineProperty(Person, 'name', {
    value: 'jack',
    writable: true // 是否可写 默认值：false
})

Person.name = 'rose'
console.log(Person.name) // rose
```

### 存取描述符

由一对 getter、setter 函数功能来描述的属性;

```javascript
let Person = {};
let temp = null;

Object.defineProperty(Person, 'name', {
    get: function () {
        return temp;
    },
    set: function (val) {
        temp = val;
    }
});

// Person.name = '早上好';
// console.log(Person.name) // 早上好

console.log(Person.name) // null
```

### 共有的属性

#### Configurable 属性

`configurable` 特性表示对象的属性是否可以被删除，以及可否配置。

```javascript
'use strict'
let Person = {};
Object.defineProperty(Person, 'name', {
    value: 'jack',
    configurable: false, // 是否可配置，以及是否可删除
});

delete Person.name // Cannot delete property 'name' of #<Object>

// console.log(Person.name) // jack
```

> 严格模式下删除属性会报错，非严格模式下无法删除。

```javascript
let Person = {};

Object.defineProperty(Person, 'name', {
    value: 'jack',
    configurable: false, // 是否可配置，以及是否可删除
});

Object.defineProperty(Person, 'name', { // Cannot redefine property: name
    value: 'jack',
    configurable: false,
    writable: true, // 是否可写
});
```

```javascript
let Person = {};

Object.defineProperty(Person, 'name', {
    get() {
      return '123'
    },
    configurable: false, // 是否可配置，以及是否可删除
});

Object.defineProperty(Person, 'name', { // Cannot redefine property: name
    get() {
        return '1'
    },
    configurable: false,
});
```

::: tip 总结

configurable: false 时，不能删除当前属性，且不能重新配置当前属性的描述符(有一个小小的意外：可以把writable的状态由true改为false,但是无法由false改为true),但是在writable: true的情况下，可以改变value的值

configurable: true时，可以删除当前属性，可以配置当前属性所有描述符。

:::

#### enumerable属性

描述属性是否会出现在for in 或者 Object.keys()的遍历中；

```javascript
let Person = {};

Object.defineProperty(Person, 'name', {
    value: 'jack',
    enumerable: true, // 是否可枚举
});

console.log(Object.keys(Person)) // ['name']
for (const personKey in Person) {
    console.log(personKey) // name
}
```

```javascript
let Person = {};

Object.defineProperty(Person, 'name', {
    value: 'jack',
    enumerable: false, // 是否可枚举
});

console.log(Object.keys(Person)) // []
for (const personKey in Person) {
    console.log(personKey) // 
}
```

### 和普通对象的差异

```javascript
let Person = {};
Person.name = 'jack';

// 等价于

Object.defineProperty(Person, 'name', {
    value: 'jack',
    configurable: true,
    enumerable: true,
    writable: true,
});
```

```javascript
let Person = {};

Object.defineProperty(Person, 'name', {
    value: 'jack',
});

// 等价于

Object.defineProperty(Person, 'name', {
    value: 'jack',
    writable: false,
    configurable: false,
    enumerable: false,
});
```

## 操作属性描述符

> 属性描述符是一个内部对象，无法直接读写，可以通过下面几个函数进行操作。

### Object.getOwnPropertyDescriptor()

> 返回指定对象上一个自有属性对应的属性描述符。（自有属性指的是直接赋予该对象的属性，不需要从原型链上进行查找的属性）

语法：

```text
Object.getOwnPropertyDescriptor(obj, prop)
```

参数：

- obj: 需要查找的目标对象
- prop: 目标对象内属性名称

返回值：如果指定的属性存在于对象上，则返回其属性描述符对象（property descriptor），否则返回 undefined。

```javascript
const object1 = {
  property1: 42
};

const descriptor1 = Object.getOwnPropertyDescriptor(object1, 'property1');

console.log(descriptor1);

// { value: 42, writable: true, enumerable: true, configurable: true }

var o, d;

o = { get foo() { return 17; } };
d = Object.getOwnPropertyDescriptor(o, 'foo');
console.log(d)
/*
{
  get: [Function: get foo],
  set: undefined,
  enumerable: true,        
  configurable: true       
}
 */
```

### Object.defineProperty()

> 通过定义属性描述符来定义或修改一个属性，然后返回此对象。

### Object.defineProperties()

> 该方法直接在一个对象上同时定义多个新的属性或修改现有属性，并返回该对象。

语法：

```text
Object.defineProperties(obj, props)
```

参数:

- obj: 在其上定义或修改属性的对象。
- props: 要定义其可枚举属性或修改的属性描述符的对象。

返回值: 传递给函数的对象。

```javascript
var obj = {};
Object.defineProperties(obj, {
  'property1': {
    value: true,
    writable: true
  },
  'property2': {
    value: 'Hello',
    writable: false
  }
});
```

### Object.getOwnPropertyNames()

> 该方法返回一个由指定对象的所有自身属性【对象的所有私有属性】的属性名（包括不可枚举属性但不包括Symbol值作为名称的属性）组成的数组。

语法：

```text
Object.getOwnPropertyNames(obj)
```

参数：

- obj：一个对象，其自身的可枚举和不可枚举属性的名称被返回。

返回值：在给定对象上找到的自身属性对应的字符串数组。

```javascript
var arr = ["a", "b", "c"];
console.log(Object.getOwnPropertyNames(arr).sort()); // ["0", "1", "2", "length"]

// 类数组对象
var obj = { 0: "a", 1: "b", 2: "c"};
console.log(Object.getOwnPropertyNames(obj).sort()); // ["0", "1", "2"]

// 使用Array.forEach输出属性名和属性值
Object.getOwnPropertyNames(obj).forEach(function(val, idx, array) {
  console.log(val + " -> " + obj[val]);
});
// 输出
// 0 -> a
// 1 -> b
// 2 -> c

//不可枚举属性
var my_obj = Object.create({}, {
  getFoo: {
    value: function() { return this.foo; },
    enumerable: false
  }
});
my_obj.foo = 1;

console.log(Object.getOwnPropertyNames(my_obj).sort()); // ["foo", "getFoo"]

```

### Object.prototype.propertyIsEnumerable()

> 该方法返回一个布尔值，表示指定的属性是否可枚举。

```javascript
const object1 = {};
const array1 = [];
object1.property1 = 42;
array1[0] = 42;

console.log(object1.propertyIsEnumerable('property1'));
// true

console.log(array1.propertyIsEnumerable(0));
// true

console.log(array1.propertyIsEnumerable('length'));
// false

```

## 参考博文

https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty

https://www.jianshu.com/p/8fe1382ba135


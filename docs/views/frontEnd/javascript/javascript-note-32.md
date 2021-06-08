---
title: this对象
---

> 不管是严格模式还是非严格模式，全局环境中的this指向全局对象；

```javascript
'use strict'
console.log(this === window); // true

this.abc = 'abc';
console.log(window.abc) // 'abc'
```

## 函数中的this对象

> 函数中的this对象，取决于函数是如何被调用的；

### 简单调用；

> 普通函数的中的this是``window`；在严格模式下是`undefined`;

```javascript
function f() {
  console.log(this); // Window
}
f();

// ===

function f() {
  'use strict';
  console.log(this); // undefined
}
f();
```

### 对象方法调用；

```javascript
let obj = {
  f () {
    console.log(this);// obj
  }
};
obj.f();
```

### call和apply调用；

### 构造函数调用；

> 构造函数中的this指向调用的实例对象；

```javascript
function C() {
  this.a = 'a';
}
let o = new C();
console.log(o.a); // 'a'
```


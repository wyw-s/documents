---
title: 闭包；
autoGroup-3: 函数应用
---

> 闭包是指访问了另外一个作用域中的变量的函数。

```javascript
// a 就是闭包
function foo() {
	var a = 1;
	function bar() {
		return ++a;
	}
	console.log(bar());
}
foo();
```

> 闭包阻止变量被垃圾回收

## 应用

**例1**

```javascript
function foo() {
  for (var i = 0; i < 10; i++) {
    (function (i) {
      setTimeout(function () {
        console.log(i)
      }, 0);
    })(i)
  }
}
foo();
```

**例2:信息隐藏**

```javascript
let obj = (function () {
  let name = 'john';
  return {
    getName() {
      return name;
    }
  }
})();

// 只能通过 getName 方法访问
console.log(obj.getName()); // john
// 无法直接访问 obj.name
console.log(obj.name); // undefined
```


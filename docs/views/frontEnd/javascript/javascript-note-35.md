---
title: 闭包
category: javascript
autoGroup-3: 函数应用
tags:
  - javascript
---

> 通俗地讲，JavaScript 中每个的函数都是一个闭包，但通常意义上嵌套的函数更能够体现出闭包的特性，  

## 什么是闭包

> 闭包是指一个函数(作用域)可以访问另外一个函数内部的局部变量。

**特性**

- 延伸变量的作用范围。
- 本质上，闭包就是将函数内部和函数外部连接起来的一座桥梁。
- 如果函数内部有使用此变量，那么此变量便不会被销毁，否则会被销毁；
-  闭包阻止变量被垃圾回收

**用途**

- 可以在函数外部读取函数内部成员。
- 让函数内成员始终存活在内存中。

**示例1**

```javascript
// count 就是闭包
var generateClosure = function() {
  var count = 0;
  var get = function() {
    return ++count;
  }
  return get;
}
var counter = generateClosure();
console.log(counter()); // 输出 1
console.log(counter()); // 输出 2
console.log(counter()); // 输出 3
```

> 当一个函数返回它内部定义的一个函数时，就产生了一个闭包，闭 包 不 但 包 括 被 返 回 的 函 数 ， 还 包 括 这 个 函 数 的 定 义 环 境 。 上 面 例 子 中 ， 当 函 数generateClosure() 的内部函数 get 被一个外部变量 counter 引用时， counter 和
> generateClosure() 的局部变量就是一个闭包。 

**例2**

```javascript
var generateClosure = function() {
  var count = 0
  var get = function() {
    return ++count
  }
  return get
}
var counter1 = generateClosure()
var counter2 = generateClosure()
console.log(counter1()) // 输出 1
console.log(counter2()) // 输出 1
console.log(counter1()) // 输出 2
console.log(counter1()) // 输出 3
console.log(counter2()) // 输出 2
```

> counter1 和 counter2 分别调用了 generateClosure() 函数，生成了两个闭包的实例，它们内部引用的 count 变量分别属于各自的运行环境。  

::: tip

以上例子可以理解为，在 generateClosure() 返回 get 函数时，私下将 get 可能引用到的 generateClosure() 函数的内部变量（也就是 count 变量）也返回了，并在内存中生成了一个副本，之后 generateClosure() 返回的函数的两个实例 counter1和 counter2 就是相互独立的了。  

:::

## 闭包的用途  

> 闭包有两个主要用途，一是实现嵌套的回调函数，二是隐藏对象的细节。  

### 嵌套的回调函数

```javascript
exports.add_user = function(user_info, callback) {
  var uid = parseInt(user_info['uid'])
  mongodb.open(function(err, db) {
    if (err) {
      callback(err)
      return
    }
    db.collection('users', function(err, collection) {
      if (err) {
        callback(err)
        return
      }
      collection.ensureIndex('uid', function(err) {
        if (err) {
          callback(err)
          return
        }
        collection.ensureIndex('username', function(err) {
          if (err) {
            callback(err)
            return
          }
          collection.findOne({ uid: uid }, function(err) {
            if (err) {
              callback(err)
              return
            }
            if (doc) {
              callback('occupied')
            } else {
              var user = {
                uid: uid,
                user: user_info
              }
              collection.insert(user, function(err) {
                callback(err)
              })
            }
          })
        })
      })
    })
  })
}
```

> 以上代码是在 Node.js 中使用 MongoDB 实现一个简单的增加用户的功能，可以看到这段代码中用到了闭包的层层嵌套，每一层的嵌套都是一个回调函数。回调函数不会立即执行，而是等待相应请求处理完后由请求的函数回调。我们可以看到，在嵌套的每一层中都有对 callback 的引用，而且最里层还用到了外层定义的 uid 变量。由于闭包机制的存在，即使外层函数已经执行完毕，其作用域内申请的变量也不会释放，因为里层的函数还有可能引用到这些变量，这样就完美地实现了嵌套的异步回调。  

### 实现私有属性

> 我们知道， JavaScript 的对象没有私有属性，也就是说对象的每一个属性都是曝露给外部的。  

**曝露给外部的安全隐患**：对象的使用者直接修改了某个属性，导致对象内部数据的一致性受到破坏  

::: tip

JavaScript通过约定在所有私有属性前面加上下划线（例如_myPrivateProp），表示这个属性是私有的，外部对象不应该直接读写它。但这只是个非正式的约定。

:::

**例**：通过闭包实现私有成员

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


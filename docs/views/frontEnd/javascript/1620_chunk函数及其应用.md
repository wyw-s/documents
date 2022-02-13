---
title: chunk函数及其应用
category: javascript
date: 2021-06-20 22:18:22
autoGroup-15: 进阶
---

## 特点

- 求值策略：传值调用，传名调用sum(x+1,x+2);
- thunk函数是传名调用的实现方式之一；
- 可以实现自动执行Generator函数；

## 应用

> 需求：顺序的打印下列文件

### **普通方法嵌套**

```javascript
function readFilesByCallback() {
    const fs = require("fs");
    const files = [
        "./1.text",
        "./2.text",
        "./3.text"
    ];
    fs.readFile(files[0], function(err, data) {
        console.log(data.toString());
        fs.readFile(files[1], function(err, data) {
            console.log(data.toString());
            fs.readFile(files[2], function(err, data) {
                console.log(data.toString());
            });
        });
    });
}
// 调用
readFilesByCallback();
```

```javascript
ASUS@yaweidediannao MINGW64 ~/Desktop/test
$ node module.js 
text1
text2
text3
```

> 形成了回调地狱；

### **使用`Generator`函数；**

```javascript
function* readFilesByGenerator() {
    const fs = require("fs");
    const files = [
        "./1.text",
        "./2.text",
        "./3.text"
    ];
    function readFile(filename) {
        fs.readFile(filename, function(err, data) {
            console.log(data.toString());
            f.next(data.toString());
        });
    }
    yield readFile(files[0]);
    yield readFile(files[1]);
    yield readFile(files[2]);
}
// 调用
const f = readFilesByGenerator();

f.next();
```

```shell
ASUS@yaweidediannao MINGW64 ~/Desktop/test
$ node module.js 
text1
text2
text3
```

> 虽然解决了层层的嵌套，但是`f.next()`的调用耦合在文件读取的回调函数里面了，不好；

### **使用chunk函数**

```javascript
const fs = require("fs");
const Thunk = function(fn) {
  return function(...args) {
    return function(callback) {
      return fn.call(this, ...args, callback);
    };
  };
};
const readFileThunk = Thunk(fs.readFile);

function run(fn) {
  var gen = fn();
  function next(err, data) {
    var result = gen.next(data);
    if (result.done) return;
    result.value(next);
  }
  next();
}

const g = function*() {
  const s1 = yield readFileThunk("./1.text");
  console.log(s1.toString());
  const s2 = yield readFileThunk("./2.text");
  console.log(s2.toString());
  const s3 = yield readFileThunk("./3.text");
  console.log(s3.toString());
};

run(g);
```

```shell
ASUS@yaweidediannao MINGW64 ~/Desktop/test
$ node module.js 
text1
text2
text3
```




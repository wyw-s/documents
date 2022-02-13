---
title: 模块和包
category: nodejs
autoGroup-2: Node.js快速入门
tags:
  - nodejs
---

> 模块（Module）和包（Package）是 Node.js 最重要的支柱。开发一个具有一定规模的程序不可能只用一个文件，通常需要把各个功能拆分、封装，然后组合起来，模块正是为了实现这种方式而诞生的。在浏览器 JavaScript 中，脚本模块的拆分和组合通常使用 HTML 的script 标签来实现。 Node.js 提供了 require 函数来调用其他模块，而且模块都是基于文件的，机制十分简单。Node.js 的模块和包机制的实现参照了 CommonJS 的标准，  

### 什么是模块；

> 模块是 Node.js 应用程序的基本组成部分，文件和模块是一一对应的。换言之，一个Node.js 文件就是一个模块，这个文件可能是 JavaScript 代码、 JSON 或者编译过的 C/C++ 扩展。我们用到的 var http = require('http')， 其中 http是 Node.js 的一个核心模块，其内部是用 C++ 实现的，外部用 JavaScript 封装。我们通过require 函数获取了这个模块，然后才能使用其中的对象；  

### 创建模块；

> 创建一个模块非常简单，因为一个文件就是一个模块，我们要关注的问题仅仅在于如何在其他文件中获取这个模块。 Node.js 提供了 exports 和 require 两个对象，其中 exports 是模块公开的接口， require 用于从外部获取一个模块的接口，即所获取模块的 exports 对象。  

```javascript
// module.js
let name = ''
exports.setName = (thyName) => {
  name = thyName
}

exports.sayHello = function() {
  console.log('Hello ' + name); // Hello 小萌
};
// 或
let name = ''
module.exports.setName = (thyName) => {
  name = thyName
}
module.exports.sayHello = function() {
  console.log('Hello ' + name);
};

// getModule.js
const myModule = require('./module.js');
myModule.setName('小萌');
myModule.sayHello();
// 运行node getmodule.js，结果是：Hello 小萌
```

> 在以上示例中， module.js 通过 exports 对象把 setName 和 sayHello 作为模块的访问接口，在 getModule.js 中通过require('./module') 加载这个模块，然后就可以直接访问 module.js 中 exports 对象的成员函数了。  

#### 单次加载；

> require 不会重复加载模块，也就是说无论调用多少次 require， 获得的模块都是同一个。

```javascript
// module.js
let name = ''
module.exports.setName = (thyName) => {
  name = thyName
}
module.exports.sayHello = () => {
  console.log('Hello ' + name);
}

// getModule.js
const myModule1 = require('./module.js');
const myModule2= require('./module.js');
myModule1.setName('小萌');
myModule2.setName('小红');
myModule1.sayHello();

// 这里我们引入了两次 module.js 模块，但是最后的输出的结果为 hello 小红 
```

> 运行后发现输出结果是 `hello 小红` ，这是因为变量 `myModule2` 和 `myModule1`指向的是同一个实例，因此 myModule2.setName 的结果被 myModule1.setName 覆盖，最终输出结果是由后者决定的。  

#### 覆盖 exports ;

```javascript
// module.js
function Hello() {
  var name;
  this.setName = function (thyName) {
    name = thyName;
  };
  this.sayHello = function () {
    console.log('Hello ' + name);
  };
};
// 导出
exports.Hello = Hello;

// getModule.js
const myModule1 = require('./module.js').Hello;
const obj1 = new myModule1();
obj1.setName('小萌');
obj1.sayHello();
```

> 上面的例子我们想要使用`module.js`模块，那么我们需要通过 require('./singleobject').Hello 来获取Hello 对象，这略显冗余，可以用下面方法稍微简化：  

```javascript
// module.js
function Hello() {
  var name;
  this.setName = function (thyName) {
    name = thyName;
  };
  this.sayHello = function () {
    console.log('Hello ' + name);
  };
};
// 这里添加 modeule
modeule.exports = Hello;

// getModule.js
// 这里可以不用.Hello了
const myModule1 = require('./module.js');
const obj1 = new myModule1();
obj1.setName('小萌');
obj1.sayHello();
```

> 注意，模块接口的唯一变化是使用 module.exports = Hello 代替了 exports.Hello=Hello。在外部引用该模块时，其接口对象就是要输出的 Hello 对象本身，而不是原先的exports。事实上， exports 本身仅仅是一个普通的空对象，即 {}，它专门用来声明接口，本质上是通过它为模块闭包的内部建立了一个有限的访问接口。因为它没有任何特殊的地方，所以可以用其他东西来代替，譬如我们上面例子中的 Hello 对象。  

::: warning 

不可以通过对 exports 直接赋值代替对 module.exports 赋值。exports 实际上只是一个和 module.exports 指向同一个对象的变量，
它本身会在模块执行结束后释放，但 module 不会，因此只能通过指定module.exports 来改变访问接口。  

:::

::: tip

一个js文件就是一个模块，然而一些变量是有本地和全局之分的：

本地：可以理解为每个js文件所拥有的变量，是当前模块暴露出来的变量，其中本地变量包含：`exports` `module` `require` `this` `__dirname` `__filename` ；**所以你会发现打印global是找不到这些变量的**

全局：全局变量可以理解为浏览器端的`window`，在nodejs中是：`global`  

**想要查看这些变量可以使用远程调试来查看；**

```javascript
ASUS@yaweidediannao MINGW64 ~/Desktop/test
$ node --inspect-brk module.js
Debugger listening on ws://127.0.0.1:9229/e96bbb47-3ece-45a2-97e2-2376f23825f4
For help, see: https://nodejs.org/en/docs/inspector
Debugger attached.
```

![image-20210617080445839](assets/image-20210617080445839.png)

:::

### 创建包；

> 包是在模块基础上更深一步的抽象。它将某个独立的功能封装起来，用于发布、更新、依赖管理和版本控制。 Node.js 根据 CommonJS 规范实现了包机制，开发了 npm来解决包的发布和获取需求。Node.js 的包是一个目录，其中包含一个 JSON 格式的包说明文件 package.json。

1. 严格符合 CommonJS 规范的包应该具备以下特征：  
   - package.json 必须在包的顶层目录下；
   - 二进制文件应该在 bin 目录下；
   - JavaScript 代码应该在 lib 目录下；
   - 文档应该在 doc 目录下；
   - 单元测试应该在 test 目录下。  

> Node.js 对包的要求并没有这么严格，只要顶层目录下有 package.json，并符合一些规范即可。当然为了提高兼容性，我们还是建议你在制作包的时候，严格遵守 CommonJS 规范。  

### Nodejs包管理器；

> Node.js包管理器，即npm是 Node.js 官方提供的包管理工具，它已经成了 Node.js 包的标准发布平台，用于 Node.js 包的发布、传播、依赖控制。 npm 提供了命令行工具，使你可以方便地下载、安装、升级、删除包，也可以让你作为开发者发布并维护包。  

#### 获取一个包

```bash
// 语法
npm [install/i] [package_name]

// 获取express  本地安装
npm install express 
// 或
npm i express
```

#### 全局模式  

>  npm 默认会把包安装到当前目录下。这反映了 npm 不同的设计哲学。如果把包安装到全局，可以提高程序的重复利用程度，避免同样的内容的多份副本，但坏处是难以处理不同的版本依赖。如果把包安装到当前目录，或者说本地，则不会有不同程序依赖不同版本的包的冲突问题，同时还减轻了包作者的 API 兼容性压力，但缺陷则是同一个包可能会被安装许多次。  

```bash
npm i -g express
```

::: tip

使用全局模式安装的包并不能直接在 JavaScript 文件中用 require 获得，因为 require 不会搜索 /usr/local/lib/node_modules/。   

:::

|   模式   | 可通过require使用 | 注册PATH |
| :------: | :---------------: | :------: |
| 本地模式 |        是         |    否    |
| 全局模式 |        否         |    是    |

> 总而言之，当我们要把某个包作为工程运行时的一部分时，通过本地模式获取，如果要在命令行下使用，则使用全局模式安装。  

#### 创建全局链接  

> npm 提供了一个有趣的命令 `npm link`， 它的功能是在本地包和全局包之间创建符号链接。我们说过使用全局模式安装的包不能直接通过 require 使用，但通过 npm link命令可以打破这一限制。  

```bash
# 通过  npm root -g 查找全局包的安装位置
$ npm root -g
C:\Program Files\nodejs\node_modules

# 链接；我这里使用了nvm控制nodejs版本
npm link express
./node_modules/express -> /d/nvm/v12.18.0/node_modules/express/
# 在 node_modules 子目录中可以发现一个指向安装到全局的包的符号链接。通过这种方法，我们就可以把全局包当本地包来使用了
```


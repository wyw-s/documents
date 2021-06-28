---
title: 模块加载机制
category: nodejs
time: 2021-06-28 07:23:34
autoGroup-6: 进阶
tags:
  - nodejs
  - 后端
---

> Node.js 的模块加载对用户来说十分简单，只需调用 require 即可，但其内部机制较为复杂。  

## 模块的类型

> Node.js 的模块可以分为两大类，一类是核心模块，另一类是文件模块。  

1. 核心模块：
   - Node.js 标准 API 中提供的模块，如 fs、 http、 net、 vm 等，由 Node.js 官方提供的模块，编译成了二进制代码。
   - 可以直接通过 require 获取核心模块，例如require('fs')。
   - **核心模块拥有最高的加载优先级，换言之如果有模块与其命名冲突，Node.js 总是会加载核心模块。**  
2. 文件模块：
   - 存储为单独的文件（或文件夹）的模块，可能是 JavaScript 代码、 JSON 或编译好的 C/C++ 代码。
   - 加载方法相对复杂。
   - 在不显式指定文件模块扩展名的时候， Node.js 会分别试图加上 .js、 .json 和 .node扩展名，进行查找。

<div style="text-align: center;font-weight: bold">Nodejs模块的类别和加载顺序</div>

| 模块类别 |            |       |
| -------- | ---------- | ----- |
| 核心模块 |            | 内建  |
| 文件模块 | JavaScript | .js   |
|          | JSON       | .json |
|          | C/C++扩展  | .node |

## 按路径加载模块

> 文件模块的加载有两种方式，一种是按路径加载，一种是查找 node_modules 文件夹。  

1. 按路径加载：

   - 如果 require 参数以“/ ”开头，那么就以绝对路径的方式查找模块名称。
     - 例如 require('/home/byvoid/module') 将 会 按照 优 先 级 依次 尝 试 加 载 /home/byvoid/module.js、 /home/byvoid/module.json 和 /home/byvoid/module.node。
   -  如果 require 参数以“./ ”或“../ ”开头，那么则以相对路径的方式来查找模块。

2. 查找 node_modules：

   - 如果require参数不以“/ ”、“./ ”或“../ ”开头，而该模块又不是核心模块，那么就要通过查找 node_modules 加载模块了。
   - 我们通常引入的npm包就是以这种方式加载的。
   - 当 require 遇到一个既不是核心模块，又不是以路径形式表示的模块名称时，会试图在当前目录下的 node_modules 目录中来查找是不是有这样一个模块。如果没有找到，则会在当前目录的上一层中的 node_modules 目录中继续查找，反复执行这一过程，直到遇到根目录为止。  
     - 如果我们要在 /home/byvoid/develop/foo.js 中使用 require('bar.js') 命令， Node.js会依次查找：  
       - /home/byvoid/develop/node_modules/bar.js。
       - /home/byvoid/node_modules/bar.js。
       - /home/node_modules/bar.js。
       - /node_modules/bar.js。

   > 为什么要这样做呢？因为通常一个工程内会有一些子目录，当子目录内的文件需要访问到工程共同依赖的模块时，就需要向父目录追溯了，比如同级的app.js需要express包，但是一些嵌套目录也有可能使用这个包。

## 加载缓存

> Node.js 模块不会被重复加载，这是因为 Node.js 通过文件名缓存所有加载过的文件模块，所以以后再访问到时就不会重新加载了。

::: tip

Node.js 是根据实际文件名缓存的，而不是 require() 提供的参数缓存的 ，也就是说即使你分别通过require('express') 和 require('./node_modules/express') 加载两次，也不会重复加载，因为尽管两次参数不同，解析到的文件却是同一个。  

:::

## 加载顺序  

**使用 require(some_module) 时的加载顺序：**  

1. 如果some_module 是一个核心模块，直接加载，结束。  
2. 如果some_module以“/ ”、“./ ”或“../ ”开头，按路径加载 some_module，如果找不到则向上追溯，直到遇到根目录，抛出异常，结束。  


---
title: 命令行输出目录树
category: nodejs
autoGroup-7: nodejs扩展
tags:
  - nodejs
---

## 如何使用命令行输出目录树

> 概述：在自己写博客的时候，总会少不了要显示目录结构以更好的表达一些内容；虽然`window`自己提供了`tree`命令但是并不好用；比如我要显示项目的目录结构但是要排除`node_modules`文件夹，这个时候就有点力不从心了，在这里推荐以下`tree-node-cli`工具；

1. 下载：`tree-node-cli`[传送门](https://www.npmjs.com/package/tree-node-cli)。

2. 安装：

   ```bash
   npm install -g tree-node-cli
   ```

3. 参数：

   ```bash
   $ tree -h
   Usage: tree [options]
   
   Options:
     -V, --version             output the version number
     -a, --all-files           All files, include hidden files, are printed.
     --dirs-first              List directories before files.
     -d, --dirs-only           List directories only.
     -I, --exclude [patterns]  Exclude files that match the pattern. | separates alternate patterns. Wrap your entire pattern in double
                               quotes. E.g. `"node_modules|coverage".
     -L, --max-depth <n>       Max display depth of the directory tree.
     -r, --reverse             Sort the output in reverse alphabetic order.
     -F, --trailing-slash      Append a '/' for directories.
     -h, --help                display help for command
   
   ```

4. 使用：直接打印输出；

   ```bash
   $ tree -L 2 -I "node_modules"
   webNode
   ├── app
   │   ├── app.js
   │   ├── db
   │   └── router
   ├── babel.config.js
   ├── bin
   │   ├── build.js
   │   └── dev.js
   ├── dist
   │   ├── css
   │   ├── favicon.ico
   │   ├── img
   │   ├── index.html
   │   └── js
   ├── package-lock.json
   ├── package.json
   ├── plugins
   │   └── md-loader
   ├── public
   │   ├── favicon.ico
   │   └── index.html
   ├── src
   │   ├── App.vue
   │   ├── assets
   │   ├── index.js
   │   ├── router
   │   ├── service
   │   └── views
   └── webpack.config.js
   
   ```

   > 注意：这里我命令使用的是：`tree -L 2 -I "node_modules"`并没有使用`tree`命令那样它会把整个node_modules目录也给遍历出来，对我们来说是无用的。当然在不包含`node_modules`的目录下直接使用`tree`命令就行了。

5. 输出到单独的文件中；

   ```bash
   `tree -L 2 -I "node_modules"` > text.md
   ```

   > 如果文件不存在便会自己创建一个文件，如果存在的话便会覆盖里面的内容；

6. [官方文档](https://github.com/yangshun/tree-node-cli#readme)
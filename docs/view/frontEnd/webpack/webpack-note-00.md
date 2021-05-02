---
title: webpack项目初始化
---

## 1、安装`webpack`;

> 说明：webpack是一个打包工具，可以通过插件配置打包各种文件，然后输出，但是输出的文件，我们需要自己引入html文件后才能使用(可以配置自动化注入)

1. 在任意目录中新建一个`web`项目；

2. 在创建好的文件夹中执行`npm init`来进行项目的初始化；

3. 安装`webpack`到本项目中；

   ```bash
   # 安装最新的稳定版
   npm i -D webpack
   
   # 安装指定版本；
   npm i -D webpack@<version>
   ```

   - 安装完成后我们可以执行一下命令来运行`webpack`；

     ```bash
     # 1、直接运行
     node_modules/.bin/webpack
     
     # 2、设置脚本命令运行；
     "scripts": {
       "test": "echo \"Error: no test specified\" && exit 1",
       "start": "webpack"
     },
     ```

     > 此时执行你会出现这种提示；
     >
     > No configuration file found and no output filename configured via CLI option.
     > A configuration file could be named 'webpack.config.js' in the current directory.
     > Use --help to display the CLI options.
     >
     > 翻译：没有找到配置文件，也没有通过CLI选项配置输出文件名。
     >
     > 配置文件可以命名为“webpack.config”。js'在当前目录中。
     >
     > 使用——help显示CLI选项。

4. 根据提示我们新建`webpack.config.js`文件；内容如下：

   ```js
   const path = require('path')
   module.exports = {
     // 配置入口文件
     entry: './main.js',
     // 配置输入文件名和路径
     output: {
       filename: 'bundle.js',
       path: path.resolve(__dirname, './dist')
     }
   }
   ```

   > 此时在执行脚本，`webpack`便会进行打包并在当前目录多出一个dist文件夹，即为webpack的输入文件，


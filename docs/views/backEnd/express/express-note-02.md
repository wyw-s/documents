---
title: 安装
category: express
time: 2021-07-11 10:31:23
---

> 如果一个包是某个工程的依赖，那么我们需要在工程的目录下使用本地模式安装这个包，如果要通过命令行调用这个包中的命令，则需要用全局模式安装，因此我们使用本地模式安装 Express 即可。  当然你也可以采用全局模式安装。

## `express@3.x`

> 适用于3.x及以前的版本。

```shell
# 全局安装
npm install -g express@3.21.2
# 或
npm install express@3.21.2 -S
```

```shell
WANGYAWEI@yaweidediannao MINGW64 /e/projectCenter/heroList (dev)
$ express -V
3.21.2
WANGYAWEI@yaweidediannao MINGW64 /e/projectCenter/heroList (dev)
$ express -h

  Usage: express [options] [dir]

  Options:

    -h, --help          output usage information
    -V, --version       output the version number
    -s, --sessions      add session support
    -e, --ejs           add ejs engine support (defaults to jade)
    -J, --jshtml        add jshtml engine support (defaults to jade)
    -H, --hogan         add hogan.js engine support
    -c, --css <engine>  add stylesheet <engine> support (less|stylus) (defaults to plain css)
    -f, --force         force on non-empty directory
```

> 以上内容表示安装成功；

## `express@4.x`

> 如果你安装的是4.x及以上版本，你会发现你输入`express -h`后提示`bash: express: command not found`，这是因为在`express@3.21.2`版本以后，也就是`express@4.x`版中，命令行工具被移走了，`express`不在支持命令行功能，需要你安装`express-generator`;

```shell
# 全局安装
npm install -g express
# 或
npm install express -S

# 安装 express生成器
npm install express-generator -g
```

```sh
PS C:\Users\wangy\Desktop> express -v
express : 无法将“express”项识别为 cmdlet、函数、脚本文件或可运行程序的名称。请检查名称的拼写，如果包括路径，请确保路径正确，然后再
试一次。
所在位置 行:1 字符: 1
+ ~~~~~~~
    + CategoryInfo          : ObjectNotFound: (express:String) [], CommandNotFoundException
    + FullyQualifiedErrorId : CommandNotFoundException

PS C:\Users\wangy\Desktop> npm install express-generator -g
npm WARN deprecated mkdirp@0.5.1: Legacy versions of mkdirp are no longer supported. Please update to mkdirp 1.x. (Note that the API surface has changed to use Promises in 1.x.)
C:\Program Files\nodejs\express -> C:\Program Files\nodejs\node_modules\express-generator\bin\express-cli.js
+ express-generator@4.16.1
added 10 packages from 13 contributors in 3.022s
PS C:\Users\wangy\Desktop> express -v

  Usage: express [options] [dir]

  Options:

        --version        output the version number
    -e, --ejs            add ejs engine support
        --pug            add pug engine support
        --hbs            add handlebars engine support
    -H, --hogan          add hogan.js engine support
    -v, --view <engine>  add view <engine> support (dust|ejs|hbs|hjs|jade|pug|twig|vash) (defaults to jade)
        --no-view        use static html instead of view engine
    -c, --css <engine>   add stylesheet <engine> support (less|stylus|compass|sass) (defaults to plain css)
        --git            add .gitignore
    -f, --force          force on non-empty directory
    -h, --help           output usage information

  error: option `-v, --view <engine>' argument missing

PS C:\Users\wangy\Desktop> express --version
4.16.1
PS C:\Users\wangy\Desktop>
```

> 全局安装我们可以使用`express`提供的“快速开始”功能，快速的生成web项目文件。






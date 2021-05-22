---
title: gitignore规则简介
---

## 介绍；

> 概述：`git`版本管理工具大家都用过，但时有时候我们不需要提交所有的文件到版本管理中，比如：`node_modules`等；
>
> ​				这时我们便会用到`.gitignore`文件，来配置规则以忽略我们不需要追踪的文件；

## 规则说明；

1.  空行不匹配任何文件，因此可以用作分隔符以提高可读性 ；

2.  以`＃`开头的行用作注释。 

3.  斜杠`/`用作目录分隔符。分隔符可能出现在开始，中间或结尾。 

4.  如果开头或中间（或两者都有）有分隔符，则该匹配是相对于特定`.gitignore`文件本身的**目录级别**的。

   - `/bar/foo`和（`bar/foo`同等效果）仅匹配和``.gitignore`同级的根目录下的`/bar/foo`,不匹配`/bar/foo.text`。
   - `/foo/bar.*`匹配和``.gitignore`同级的根目录下的`/foo/bar`和`/foo/bar.text`。
   - `foo.*`仅匹配同级目录下的所有`foo.*`文件。例：`foo.text`

   - `bar/`和`bar`同等效果：匹配同级目录下的所有`bar`**文件夹**。
   - `/bar`仅匹配同级根目录下`bar`文件。
   - `foo/*`匹配` foo/test.json`（常规文件）和` foo/bar`（目录），但不匹配` foo / bar / hello.c`。

5.  前导 `**`后跟斜杠表示在所有目录中均匹配。

   -  `**/foo`与文件 `foo`相同的任何位置都匹配文件夹 `foo`。 `**/foo/bar` `bar`会在目录 `foo` 正下方的任何位置匹配文件夹。 

6.  尾部的“ `/**`”与内部的所有内容匹配。例如，“ `abc/**`”将目录“ `abc`” 内的所有文件（相对于`.gitignore`文件位置）以无限深度进行匹配。 

7.  斜杠后跟两个连续的星号，然后斜杠匹配零个或多个目录 

   -  例如，“ `a/**/b`”匹配“ `a/b`”，“ `a/x/b`”，“ `a/x/y/b`”等。 

8. **例子**：

   - `hello.*`匹配名称以`hello`开头的任何文件。如果只想将此限制于目录而不是其子目录，则可以在模式前面加上斜杠，即`/hello.*`；模式现在匹配`hello.txt`，`hello.c`但是不 匹配`a/hello.java`。 

## 使用；

1. 新建：`.gitignore`文件；
2. 配置规则；

```bash
.DS_Store
node_modules
/dist

# local env files
.env.local
.env.*.local

# Log files
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Editor directories and files
.idea
.vscode
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?

```




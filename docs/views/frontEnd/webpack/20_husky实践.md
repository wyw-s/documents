---
title: husky实践
category: WEBPACK
autoGroup-05: 代码质量保障
date: 2022/4/9
---

> 在做前端工程化时husky可以说是一个必不可少的工具，husky可以让我们向项目中方便添加git hooks。

## 项目背景

> 公司项目是基于飞冰的微前端项目，但是由于项目中老代码较多、风格多样化、codeReview又比较耗时，所以就希望通过 `pre-commit`做一些提交前的校验，以此来使团队中的代码格式统一，同时也利于后期代码的维护。

开发环境：

- 项目：`@ice/stark-app@v1.4.1`
- husky版本：`@v7.0.4`

## 安装

- 官方文档：[传送门](https://typicode.github.io/husky/#/?id=install)

- 下载

  ```bash
  npm install husky --save-dev
  ```

## 使用

### 添加`prepare`脚本

```bash
npm set-script prepare "husky install"
npm run prepare
```

或直接在`package.json`中添加如下脚本

```json
{
  "scripts": {
    "prepare": "husky install"
  }
}
```

> prepare脚本会在`npm install`（不带参数）之后自动执行。也就是说当我们执行npm install安装完项目依赖后会执行 `husky install`命令，该命令会创建.husky/目录并指定该目录为git hooks所在的目录。

### 添加`pre-commit`

```bash
npx husky add .husky/pre-commit "npm run lint"

// or
husky add .husky/pre-commit "npm run lint"

git add .husky/pre-commit
```

执行完上述代码后，会在你的项目根目录中`.husky`文件夹下新增一个名为`pre-commit`的shell脚本。`pre-commit`脚本内容如下：

```shell
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npm run lint
```

> 当我们执行`git commit`命令时会先执行`pre-commit`这个脚本，注意：`npm run lint`脚本需要先配置好

### 添加`commit-msg`

```bash
npx husky add .husky/commit-msg 'npx --no-install commitlint --edit "$1"' 

// or

husky add .husky/commit-msg 'npx --no-install commitlint --edit "$1"' 
```

执行完上述代码后，会在你的项目根目录中生成`.husky`文件夹，目录下新增了一个名为`pre-commit`的shell脚本。`pre-commit`脚本内容如下：

```shell
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npx --no-install commitlint --edit "$1"
```

> --no-install 参数表示强制npx使用项目中node_modules目录中的commitlint包

::: info

`commit-msg`会在`pre-commit`钩子之后执行。

:::

## 示例

> `commit-msg`会在`pre-commit`之后执行

### `pre-commit`

> 此时会执行`pre-commit`shell文件，然后调用`npm run lint`脚本。

```bash
$ git commit -m "fix: asfsdf"

> kylin-operation@3.0.52 lint C:\Users\hp\Desktop\kylin-operation
> npm run eslint && npm run stylelint


> kylin-operation@3.0.52 eslint C:\Users\hp\Desktop\kylin-operation
> eslint --cache --ext .js,.jsx,.ts,.tsx ./
...省略
```

### `commit-msg`

> `pre-commit`执行完后会执行`commit-msg`shell文件。

```bash
$ git commit -m "asfsdf"
⧗   input: asfsdf                           
✖   subject may not be empty [subject-empty]
✖   type may not be empty [type-empty]      

✖   found 2 problems, 0 warnings
ⓘ   Get help: https://github.com/conventional-changelog/commitlint/#what-is-commitlint

husky - commit-msg hook exited with code 1 (error)
```

> 错误原因是没有提交类型、没有主体内容。

```bash
$ git commit -m "asd: asfsdf"
⧗   input: asd: asfsdf
✖   type must be one of [feat, fix, docs, style, test, refactor, chore, revert] [type-enum]

✖   found 1 problems, 0 warnings
ⓘ   Get help: https://github.com/conventional-changelog/commitlint/#what-is-commitlint

husky - commit-msg hook exited with code 1 (error)
```

> 错误原因是提交的类型不对，只能是:  [feat, fix, docs, style, test, refactor, chore, revert] [type-enum]

```bash
$ git commit -m "fix: asfsdf"
[dev 300f27f] fix: asfsdf
 3 files changed, 7 insertions(+), 7 deletions(-)
 create mode 100644 .commitlintrc.js
 delete mode 100644 commitlint.config.js
```

> 提交成功

::: info

新版的husky使用了从git 2.9开始引入的一个新功能`core.hooksPath`。`core.hooksPath`可以让你指定`git hooks`所在的目录而不是使用默认的`.git/hooks/`。这样husky可以使用`husky install`将`git hooks`的目录指定为`.husky/`，然后使用`husky add`命令向.husky/中添加hook。通过这种方式我们就可以只添加我们需要的git hook，而且所有的脚本都保存在了一个地方（.husky/目录下）因此也就不存在同步文件的问题了。

:::

## 注意事项

1. 这里介绍的是`husky@v.7.0.4`版本，v7之前的版本配置方式与这里介绍的有差异，请自行查阅官方文档进行实践。
2. `commit-msg`的配置需要依赖其他的包及配置，请移步至 [@commitlint/cli制定提交规范](25_commitlint提交规范.md)

## 参考博文

- [官方文档](https://typicode.github.io/husky/#/?id=install)
- [husky使用总结](https://zhuanlan.zhihu.com/p/366786798)




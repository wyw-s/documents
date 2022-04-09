---
title: lint-staged实践
category: WEBPACK
autoGroup-05: 代码质量保障 
date: 2022/4/9
---

> 前面配置的`husky`已经开始让我们的代码趋向于自动化规范，但是还存在一个重要的问题。前面配置的`pre-commit`钩子中我们执行的脚本是`npm run lint`，然而这是个很大的问题，因为中台前端的项目有许多的老代码，不能大规模的格式化或改动老代码，于是我们就需要配合`lint-staged`来校验git暂存区中的代码。

官方文档 [传送门](https://github.com/okonet/lint-staged#readme)

### 安装

```bash
# "lint-staged": "^12.3.7",
npm install lint-staged
```

### 配置`package.json`

```json
{
    "scripts": {
    "eslint:lint-staged": "eslint --cache --ext .js,.jsx,.ts,.tsx"
  },
  "lint-staged": {
    "src/**/*.{js,jsx,ts}": [
      "npm run eslint:lint-staged"
    ]
  }
}
```

### 配置`pre-commit`

```bash
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npx lint-staged
```

## 扩展

1. eslint只是检测js代码，所以在ide中不符合规范的地方，编辑器会给出报错提示，但是less文件只能在执行脚本命令的时候才会校验，那么我们可以通过ide配置来解决这个问题，路径：File | Settings | Languages & Frameworks | Style Sheets | Stylelint，在Run for files 这里配置`{**/*,*}.{css,less}`
2. 如果你想在保存时实时校验你的代码你可以这样设置ide。路径：File | Settings | Languages & Frameworks | JavaScript | Code Quality Tools | ESLint，然后勾选`Run eslint --fix on save`

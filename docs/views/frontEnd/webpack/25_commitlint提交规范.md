---
title: @commitlint/cli制定提交规范
category: WEBPACK
autoGroup-05: 代码质量保障
date: 2022/4/9
---

> 在多人协作的背景下，git 仓库和 workflow 的作用很重要。而对于 commit 提交的信息说明没有一定规范的话，那么提交的信息对于我们查找历史代码的时候存在较大的障碍或没有基于我们帮助，现使用 commitlint + husky 规范 `git commit -m ""` 中的描述信息。一句话说，当我们运行 `git commmit -m 'xxx'` 时，用来**检查 `xxx` 是否满足固定格式的工具。**

## 前言

我们都知道，在使用 git commit 时，git 会提示我们填入此次提交的信息。规范的 commit 可以更清晰的查看每一次代码提交记录，还可以根据自定义的规则，自动生成 changeLog 文件。

## 安装

官方文档：[传送门](https://commitlint.js.org/#/)

```bash
npm install --save-dev @commitlint/cli @commitlint/config-conventional
```

## 使用

创建配置文件`.commitlintrc.js` 或者 `commitlint.config.js`，内容如下：

```js
module.exports = {
  extends: [
    "@commitlint/config-conventional"
  ]
}
```

提交代码：

```bash
$ git commit -m "asd: asfsdf"
⧗   input: asd: asfsdf
✖   type must be one of [feat, fix, docs, style, test, refactor, chore, revert] [type-enum]

✖   found 1 problems, 0 warnings
ⓘ   Get help: https://github.com/conventional-changelog/commitlint/#what-is-commitlint

husky - commit-msg hook exited with code 1 (error)
```

```bash
$ git commit -m "fix: asfsdf"
[dev 300f27f] fix: asfsdf
 3 files changed, 7 insertions(+), 7 deletions(-)
 create mode 100644 .commitlintrc.js
 delete mode 100644 commitlint.config.js
```

## 配置说明

### `extends`

> `@commitlint/config-conventional`提供的是一个常规的提交规范，此包提供的规则如下：

```js
module.exports = {
  parserPreset: 'conventional-changelog-conventionalcommits',
  rules: {
    'body-leading-blank': [1, 'always'],
    'body-max-line-length': [2, 'always', 100],
    'footer-leading-blank': [1, 'always'],
    'footer-max-line-length': [2, 'always', 100],
    'header-max-length': [2, 'always', 100],
    'subject-case': [
      2,
      'never',
      ['sentence-case', 'start-case', 'pascal-case', 'upper-case'],
    ],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'type-case': [2, 'always', 'lower-case'],
    'type-empty': [2, 'never'],
    'type-enum': [
      2,
      'always',
      [
        'build',
        'chore',
        'ci',
        'docs',
        'feat',
        'fix',
        'perf',
        'refactor',
        'revert',
        'style',
        'test',
      ],
    ],
  },
  prompt: {
    questions: {
      type: {
        description: 'Select the type of change that you\'re committing',
        enum: {
          feat: {
            description: 'A new feature',
            title: 'Features',
            emoji: '✨',
          },
          fix: {
            description: 'A bug fix',
            title: 'Bug Fixes',
            emoji: '🐛',
          },
          docs: {
            description: 'Documentation only changes',
            title: 'Documentation',
            emoji: '📚',
          },
          style: {
            description:
              'Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)',
            title: 'Styles',
            emoji: '💎',
          },
          refactor: {
            description:
              'A code change that neither fixes a bug nor adds a feature',
            title: 'Code Refactoring',
            emoji: '📦',
          },
          perf: {
            description: 'A code change that improves performance',
            title: 'Performance Improvements',
            emoji: '🚀',
          },
          test: {
            description: 'Adding missing tests or correcting existing tests',
            title: 'Tests',
            emoji: '🚨',
          },
          build: {
            description:
              'Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)',
            title: 'Builds',
            emoji: '🛠',
          },
          ci: {
            description:
              'Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)',
            title: 'Continuous Integrations',
            emoji: '⚙️',
          },
          chore: {
            description: 'Other changes that don\'t modify src or test files',
            title: 'Chores',
            emoji: '♻️',
          },
          revert: {
            description: 'Reverts a previous commit',
            title: 'Reverts',
            emoji: '🗑',
          },
        },
      },
      scope: {
        description:
          'What is the scope of this change (e.g. component or file name)',
      },
      subject: {
        description:
          'Write a short, imperative tense description of the change',
      },
      body: {
        description: 'Provide a longer description of the change',
      },
      isBreaking: {
        description: 'Are there any breaking changes?',
      },
      breakingBody: {
        description:
          'A BREAKING CHANGE commit requires a body. Please enter a longer description of the commit itself',
      },
      breaking: {
        description: 'Describe the breaking changes',
      },
      isIssueAffected: {
        description: 'Does this change affect any open issues?',
      },
      issuesBody: {
        description:
          'If issues are closed, the commit requires a body. Please enter a longer description of the commit itself',
      },
      issues: {
        description: 'Add issue references (e.g. "fix #123", "re #123".)',
      },
    },
  },
};

```

### `parserPreset`

> `conventional-changelog-conventionalcommits` 是一个用于生成log文件的预解析器

此配置主要是用于自动化生成提交日志的预解析器，可以配合 `conventional-changelog-cli` 一起使用。具体使用过程 请移步至 自动化生成项目Log文件

## 提交格式

> git commit -m <type>[scope]: <subject>

每次提交，Commit message 都包括三个部分：Header，Body 和 Footer。

```
<type>(<scope>?): <subject>
// 空一行
<body>
// 空一行
<footer>
```

其中，Header 是必需的，Body 和 Footer 可以省略。Header部分只有一行，包括三个字段：`type`（必需）、`scope`（可选）和`subject`（必需）。

- type：用于表明我们这次提交的改动类型，是新增了功能？还是修改了测试代码？又或者是更新了文档？
- scope：一个可选的修改范围。用于标识此次提交主要涉及到代码中哪个模块。
- subject：一句话描述此次提交的主要内容，做到言简意赅。

常用类型：

|   类型   |                          描述                          |
| :------: | :----------------------------------------------------: |
|  build   | 编译相关的修改，例如发布版本、对项目构建或者依赖的改动 |
|  chore   |   其他修改, 比如改变构建流程、或者增加依赖库、工具等   |
|    ci    |                      持续集成修改                      |
|   docs   |                        文档修改                        |
|   feat   |                     新特性、新功能                     |
|   fix    |                        修改 bug                        |
|   perf   |              优化相关，比如提升性能、体验              |
| refactor |                    回滚到上一个版本                    |
|  style   |            代码格式修改, 注意不是 css 修改             |
|   test   |                      测试用例修改                      |

## 完整示例

```bash
$ git commit -m "fix: asfsdf"
[dev 300f27f] fix: asfsdf
 3 files changed, 7 insertions(+), 7 deletions(-)
 create mode 100644 .commitlintrc.js
 delete mode 100644 commitlint.config.js
```

## 注意事项

- 需要结合`husky`来使用。因为本文的示例我已经配置了`pre-commit`

## 参考博文

[@commitlint/cli](https://www.npmjs.com/package/@commitlint/cli)

[Commitlint 使用总结](https://blog.csdn.net/qq_38290251/article/details/111646491)



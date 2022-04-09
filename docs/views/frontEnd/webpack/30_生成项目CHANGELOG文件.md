---
title: 生成项目CHANGELOG文件
category: WEBPACK
autoGroup-05: 代码质量保障
date: 2022/4/9
---

> 在前一篇中我们通过`@commitlint/cli`完成了提交规范，本篇将介绍如何自动化生成log文件`CHANGELOG.md`。

官方文档：[传送门](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-cli#quick-start)

## 安装

```bash
# 全局安装 
npm install -g conventional-changelog-cli
```

## 查看帮助

```bash
$ conventional-changelog --help

  Generate a changelog from git metadata                                                                    
                                                                                                            
  Usage                                                                                                     
    conventional-changelog                                                                                  
                                                                                                            
  Example                                                                                                   
    conventional-changelog -i CHANGELOG.md --same-file                                                      
                                                                                                            
  Options                                                                                                   
    -i, --infile              Read the CHANGELOG from this file                                             
                                                                                                            
    -o, --outfile             Write the CHANGELOG to this file                                              
                              If unspecified, it prints to stdout                                           
                                                                                                            
    -s, --same-file           Outputting to the infile so you don't need to specify the same file as outfile
                                                                                                            
    -p, --preset              Name of the preset you want to use. Must be one of the following:             
                              angular, atom, codemirror, conventionalcommits, ember, eslint, express, jquery or jshint

    -k, --pkg                 A filepath of where your package.json is located
                              Default is the closest package.json from cwd

    -a, --append              Should the newer release be appended to the older release
                              Default: false

    -r, --release-count       How many releases to be generated from the latest
                              If 0, the whole changelog will be regenerated and the outfile will be overwritten
                              Default: 1

    --skip-unstable           If given, unstable tags will be skipped, e.g., x.x.x-alpha.1, x.x.x-rc.2

    -u, --output-unreleased   Output unreleased changelog

    -v, --verbose             Verbose output. Use this for debugging
                              Default: false

    -n, --config              A filepath of your config script
                              Example of a config script: https://github.com/conventional-changelog/conventional-changelog/blob/master/packages/conventional-changel
og-cli/test/fixtures/config.js

    -c, --context             A filepath of a json that is used to define template variables
    -l, --lerna-package       Generate a changelog for a specific lerna package (:pkg-name@1.0.0)
    -t, --tag-prefix          Tag prefix to consider when reading the tags
    --commit-path             Generate a changelog scoped to a specific directory

```

## 生成CHANGELOG

> 执行完下面的命令后会自动生成一个`CHANGELOG.md`文件。

```bash
conventional-changelog -p conventionalcommits -i CHANGELOG.md -s -r 0
```

> 如果你的项目已经有`CHANGELOG.md`文件了，那么此命令会覆写你已经存在的文件，如果不想覆盖请使用以下命令：

```bash
conventional-changelog -p conventionalcommits -i CHANGELOG.md -s
```

示例：你也可以直接执行此命令 则会在控制台打印出msg信息，不会生成日志文件。

```bash
$ conventional-changelog
## <small>3.0.52 (2022-04-09)</small>

* fix: 修复了一个bug，该bug曾导致使用了自定义权限的接口，在实际调用时无法生成logPerimitId ([e1a64cc](xxx/apps/kylin-operation/commit/e1a64cc))

```

## 配合脚本使用

```json
{
  "scripts": {
    "version": "conventional-changelog -p conventionalcommits -i CHANGELOG.md -s && git add CHANGELOG.md"
  }
}
```

## 注意事项

1. 我这里使用的预处理器是：`conventionalcommits`,此处理器在上篇中已经有过介绍这里不做说明。

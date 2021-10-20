---
title: GET相关命令
category: GIT
date: 2021-05-02
---

## 初始化；

```bash
# 初始化 git 仓库
$ git init

# 将工作区的文件添加到暂存区
$ git add 文件名    # git add a.txt

# 提交暂存区到仓库区形成历史记录
$ git commit -m "提交日志"
```

## 文件的状态；

```bash
# 执行 git status 命令，可以查看到文件的状态
$ git status
```

## 添加文件到暂存区

```bash
# 添加指定文件到暂存区
$ git add 文件名

# 以空格隔开可以一次 add 多个文件
$ git add [file1] [file2] ...

# 添加指定目录到暂存区，包括子目录
$ git add [dir] [file] [dir] [file] [file] ...

# 添加当前目录的所有文件到暂存区，包括子目录
$ git add .
```

## 提交文件到仓库

```bash
# 提交暂存区到仓库区
$ git commit -m [message]

# 提交暂存区的指定文件到仓库区
$ git commit [file1] [file2] ... -m [message]

# 提交工作区和暂存区自上次commit之后的变化，直接到仓库区
# 注意：不包括未跟踪文件，即不包含没有被GIt管理过的文件
$ git commit -a -m "提交日志"
```

## 查看状态

```bash
# 最好用的是 gitk
$ gitk

# 显示有变更的文件
$ git status

# 显示当前分支的版本历史
$ git log

# 简略查看历史版本
$ git log --oneline
```

## 撤销操作

```bash
# 恢复暂存区的指定文件到工作区
$ git checkout [file]

# 恢复暂存区的所有文件到工作区
$ git checkout .

# 恢复某个commit的指定文件到暂存区和工作区
$ git checkout [commit版本号] [file]

# 重置暂存区的指定文件，与上一次 commit 保持一致，但工作区不变
$ git reset [file]

# 重置暂存区与工作区，与上一次commit保持一致
$ git reset --hard
```

## 创建分支；

```bash
# 创建一个分支，名字叫做dev
$ git branch dev

# 切换分支命令；切换到dev分支上
$ git checkout dev

# 也可以使用下面的命令，代替上面两个命令；下面的命令表示创建并切换分支到dev上
$ git checkout -b dev
```

## 查看当前分支

```bash
# 列出所有分支，当前分支前面会标一个`*`号。
$ git branch
# 会看到类似下面的结果，前面标注*的，表示当前分支
# * dev
#   master
```

## 切换、合并与删除分支；

```bash
# 查看分支
git branch

# 创建分支   $ git branch dev
$ git branch <name>

# 切换分支  $ git checkout master
$ git checkout <name>  

# 创建+切换分支
$ git checkout -b <name>

# 合并某分支到当前分支  $ git merge dev
$ git merge <name>

# 删除分支  $ git branch -d dev
$ git branch -d <name>
```

> ```bash
> # 要把dev分支合并到master主分支上，需要先切回master
> $ git checkout master
> 
> # 执行下面的命令，将dev分支合并到master上
> $ git merge dev
> ```

## 远程仓库推送；

```bash
# 别名我们通常喜欢使用 origin 作为默认仓库的别名
$ git remote add 别名 远程仓库地址

# 当本地分支和远程分支名字一样的时候，可以简写只写一个
# -u 的作用是记住本次的 push 地址和分支信息
# 如果不加 -u，则下一次 push 的时候，还需要使用完整的命令
$ git push -u 远程仓库地址别名 本地分支:远程分支

如果要推送的本地分支和远端分支已有，可以简写为
git push origin 分支

# 之后有了新的历史记录的时候，直接 ：
git push
```

## 线上克隆仓库

```bash
# 执行命令，即可将远程仓库的代码拉取到本地
$ git clone 远程仓库地址

# clone 下来的仓库会自动创建一个名字叫 origin 的 remote 远端地址
# 并且自动和 origin master 建立关系
# 所以你这里可以直接 git push
$ git push

# 如果你要推送别的分支代码
$ git push -u 仓库地址别名 本地分支:远程分支
```

## 拉取和更新

```bash
# 拉取远程代码到当前分支，并和本地分支合并
$ git pull

# 取回远程仓库的变化，并与本地指定分支合并
$ git pull [remote] [branch]
```

## npm 和 yarn 常用命令对照表：

```bash
# yarn init
npm init

# yarn add 包名
npm install 包名

# yarn install 或者直接 yarn
npm install

# yarn add -D 包名
npm install -D 包名

# yarn remove 包名
npm uninstall 包名

# yarn global add 包名
npm install --global 包名

# yarn global remove 包名
npm uninstall --global 包名
```

## 清除`npm`缓存

```bash
$ npm cache clean --force
```

## 账户设置

- 全局设置：

  ```bash
  #查看全局用户名
  git config --global user.name
  # 全局配置账户
  git config --global user.name [youername]
  # 移除全局配置账户
  git config --global --unset user.name
  
  # 查看全局邮箱
  git config --global user.email
  # 全局配置邮箱
  git config --global user.email [youeremail]
  # 移除全局配置邮箱
  git config --global --unset user.email
  
  # 设置全局密码
  git config --global user.password [youerpassword]
  # 移除全局密码
  git config --global --unset user.password
  # 查看全局密码
  git config --global user.password
  ```

- 非全局设置:

  ```bash
  # 设置用户名
  git config user.name [youername]
  # 设置邮箱
  git config user.email [youeremail]
  ```

::: info 

配置信息存储在项目目录下``.git/config`文件中。如果有`--global`全局的配置，全局配置存储在`~/.gitconfig`

:::


---
title: 什么是GO111MODULE
category: GoLang
date: 2022-04-05
autoGroup-5: 扩展
---

> go modules 是 golang 1.11 新加的特性。GO111MODULE 是个环境变量，可以在更改 Go 导入包的方式时候设置。

Modules官方定义为：模块是相关Go包的[集合](https://so.csdn.net/so/search?q=集合&spm=1001.2101.3001.7020)。modules是源代码交换和版本控制的单元。go命令直接支持使用modules，包括记录和解析对其他模块的依赖性。modules替换旧的基于GOPATH的方法来指定在给定构建中使用哪些源文件。

要注意的是，这个变量在不同 Go 版本有不同的语义:

## 没有包管理阶段

> 一开始go发布的时候是没有包管理的

待补充...



什么时候用 GOPATH, 什么时候用 GOMODULE ？ 这是个问题，需要通过 `GO111MODULE` 来解决。

### **Go 1.11 和 1.12 阶段**

即使项目在您的 GOPATH 中，GO111MODULE = on 仍将强制使用 **Go 模块**。仍然需要 go.mod 才能正常工作。

### 

## **如何使用 Modules**

- 把 golang 升级到 1.11（现在1.17 已经发布了，建议使用1.17）
- 设置 GO111MODULE

### GO111MODULE 

GO111MODULE 有三个值：off, on和auto（默认值）:

- GO111MODULE=off：无模块支持，强制 Go 表现出 GOPATH 方式，即使你的项目不在 GOPATH 目录里。寻找依赖包的方式将会沿用旧版本那种通过vendor目录或者GOPATH模式来查找。
- GO111MODULE=on，模块支持，go命令行会使用modules，不会去GOPATH目录下查找。
- GO111MODULE=auto，默认值，go命令行将会根据当前目录来决定是否启用module功能。这种情况下可以分为两种情形：
  - 当前目录在GOPATH/src之外且该目录包含go.mod文件，开启模块支持。
  - 当前文件在包含go.mod文件的目录下面。

> 在使用模块时，GOPATH是无意义的，不过它还是会把下载的依赖存储在$GOPATH/pkg/mod 中，也会把go install 的结果放在 $GOPATH/bin 中。
>

### go mod

golang 提供了 **go mod**命令来管理包。

```bash
$ go mod help
Go mod provides access to operations on modules.

Note that support for modules is built into all the go commands,
not just 'go mod'. For example, day-to-day adding, removing, upgrading,
and downgrading of dependencies should be done using 'go get'.

        download    download modules to local cache # 下载依赖包，下载依赖的module 到本地cache
        edit        edit go.mod from tools or scripts # 编辑go.mod文件
        graph       print module requirement graph # 打印模块依赖图
        init        initialize new module in current directory # 在当前目录初始化mod，在当前文件夹下初始化一个新的module，创建 go.mod 文件
        tidy        add missing and remove unused modules # 拉取缺少的模块，移除不用的模块
        vendor      make vendored copy of dependencies # 将依赖复制到vendor下
        verify      verify dependencies have expected content # 验证依赖是否正确
        why         explain why packages or modules are needed # 解释为什么需要依赖

Use "go help mod <command>" for more information about a command.
```

> `go get` 通常它是用于提供一个安装或下载包的功能。但如果使用了 Go modules，当你在一个有着 `go.mod` 文件存在的仓库下使用这个命令会将你所`下载或安装`的包静默`记录于` `go.mod` 文件中。
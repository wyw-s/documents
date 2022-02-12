---
title:  package xxx is not in GOROOT
category: issues
tag:
  - Golang
---

> 问题描述：由于刚刚接触golang，在尝试导入一个本地包时，出现了下面的错误：

```bash
package gocode/testProject01/unit2/demo01/test is not in GOROOT (D:\GoSdk\src\gocode\testProject01\unit2\demo01\test)
```

出现这个错误的原因是：编译器没有去``$GOPATH`下找包，go有 `gomod` 和 `gopath` 两个包管理方案，并且相互不兼容。环境变量`GO111MODULE`控制使用哪一种方式。

## 方式一

解决方式：把GO111MODULE置为off

```bash
# 设置环境变量
go env -w GO111MODULE=off

# 查看环境变量
go env
```

::: info

go项目需要设置`$GOPATH`环境变量，值指向你的工程目录。

:::

总结：

- 若是要用`$GOPATH`模式引入包从`src`目录下开始引入须要关闭 go mod 模式.

  ```bash
  export GO111MODULE=off
  ```

- 若是使用go mod 模式，则需要开启并在目录下执行``go mod init`，不然会报错。

  ```
  export GO111MODULE=on
  ```

## 方式二

> 更改ide设置，关闭go module。

位置：File | Settings | Go | Go Modules

取消勾选：Enable Go modules integration

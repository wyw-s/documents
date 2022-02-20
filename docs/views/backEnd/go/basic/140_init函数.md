---
title: init函数
category: GoLang
date: 2022-02-20
---

> init函数又称为：初始化函数，可以用来进行一些初始化的操作。每一个源文件都可以包含一个init函数，该函数会在main函数执行前被GO运行框架调用。

## init函数

> 在main函数之前执行，通常用于一些初始化操作。

```go
package main

import "fmt"

func init() {
	fmt.Println("初始化函数init")
}

func main() {
	fmt.Println("我是main函数")
}

```

```bash
PS E:\goProject\src\goCode\testProject01\unit2\main> go run .\main.go  
初始化函数init
我是main函数
```

## 同一个源文件中函数的执行顺序

> 当我们有全局变量定义、init、main函数时它们的执行顺序是怎样的呢？

```go
package main

import "fmt"

var num int = test()

func test() int {
	fmt.Println("我是TEST函数")
	return 10
}

func init() {
	fmt.Println("初始化函数init")
}

func main() {
	fmt.Println("我是main函数")
}
```

```bash
PS E:\goProject\src\goCode\testProject01\unit2\main> go run .\main.go
我是TEST函数
初始化函数init
我是main函数
```

> 结果：变量定义的test函数最先被执行，然后是init，最后是main函数。

## 多个源文件中Init函数的执行顺序

> 当多个源文件中都有init函数的时候，如何执行？

文件目录：

```bash
PS E:\goProject\src\goCode\testProject01\unit2> treee
unit2
├── main
│   └── main.go     
└── testUtils       
    └── testUtils.go
```

```go
// testUtils.go

package testUtils

import "fmt"

var Name string
var Age int

func init() {
	fmt.Println("我是testUtils中的Init函数")
	Name = "小明"
	Age = 20
}
```

```go
// main.go  

package main

import (
	"fmt"
	"goCode/testProject01/unit2/testUtils"
)

var num int = test()

func test() int {
	fmt.Println("我是main中的tset函数")
	return 10
}

func init() {
	fmt.Println("我是main中的初始化函数init")
}

func main() {
	fmt.Println("我是main函数")
	fmt.Println("名字是：", testUtils.Name, "年龄：", testUtils.Age)
}
```

```bash
PS E:\goProject\src\goCode\testProject01\unit2\main> go run .\main.go
我是testUtils中的Init函数
我是main中的tset函数
我是main中的初始化函数init
我是main函数
名字是： 小明 年龄： 20
```

> 由上面代码运行结果可知，外来文件的init函数先执行，然后是main中的变量定义的函数调用，然后是init，最后是main函数。
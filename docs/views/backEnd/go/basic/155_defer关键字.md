---
title: defer关键字
category: GoLang
date: 2022-02-20
---

> 在函数中，程序员经常需要创建资源，为了在函数执行完毕后，及时的释放资源，Go的设计者提供了defer关键字

## 案例一

```go
package main

import (
	"fmt"
)

// 定义一个函数getSum返回值为一个函数，这个函数的参数是一个int类型，返回值也是int类型
func add(num1 int, num2 int) int {
    // defer后面的语句会在当前函数执行完毕之后执行
	defer fmt.Println("num1=", num1)
	defer fmt.Println("num2=", num2)

	var sum int = num1 + num2
	fmt.Println("sum=", sum)
	return sum
}

func main() {
	fmt.Println(add(10, 20))
}
```

```bash
PS E:\goProject\src\goCode\testProject01\unit2\main> go run .\main.go
sum= 30
num2= 20
num1= 10
30
```

> 在Golang中，程序遇到defer关键字，不会立即执行defer后的语句，而是将defer后的语句压入一个栈中，然后继续执行函数后面的语句

## 案例二

```go
package main

import (
	"fmt"
)

// 定义一个函数getSum返回值为一个函数，这个函数的参数是一个int类型，返回值也是int类型
func add(num1 int, num2 int) int {
	defer fmt.Println("num1=", num1)
	defer fmt.Println("num2=", num2)

	num1 += 90
	num2 += 50

	var sum int = num1 + num2
	fmt.Println("sum=", sum)
	return sum
}

func main() {
	fmt.Println(add(10, 20))
}
```

```bash
PS E:\goProject\src\goCode\testProject01\unit2\main> go run .\main.go
sum= 170
num2= 20 # 此处的值没有加上 90
num1= 10 # 此处的值没有加上 50
170
```

> 遇到defer关键字，会将后面的代码语句压入栈中，也会将相关的值同时拷贝到栈中，不会随着函数面的变化而变化。

## 应用场景

如果你想关闭某个使用的资源，在使用的时候直接随手defer，因为defer有延迟机制(函数执行完毕再执行defer压入栈的语句)
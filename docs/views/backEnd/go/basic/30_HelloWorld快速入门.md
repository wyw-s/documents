---
title: HelloWorld快速入门
category: GoLang
date: 2022-01-16
---

## 创建一个文件夹

```bash
E:\goProject\src\goCode\testProject01\main
```

## 创建一个go文件

> 在main文件夹下创建一个test.go文件；

```go
// test.go
package main // 声明文件所在的包，每个go文件必须有归属的包

import "fmt" // 引入程序中需要用的包，为了使用包下的函数，比如：Println

func main() { // main 主函数，程序的入口
	fmt.Println("Hello Golang") // 在控制台打印输出一句话，双引号中的内容会原样输出
}
```

## 编译输出

> 对源文件`test.go`文件进行编译。

进入`main`文件目录执行编译命令：

```bash
E:\goProject\src\goCode\testProject01\main>go build test.go

E:\goProject\src\goCode\testProject01\main>test.exe
Hello Golang

E:\goProject\src\goCode\testProject01\main>
```

> 编译完成后，会生成一个`test.exe`的二进制可执行文件，执行`test.exe`，会输出"Hello Golang"

## 直接输出

> 上面的命令会先生成一个`test.exe`文件，然后再执行这个文件，最后输出。我们还有一个简单的方式可以不用输出`.exe`文件，直接编译并执行`test.go`输出"Hello Golang"。

```bash
E:\goProject\src\goCode\testProject01\main>go run test.go
Hello Golang

E:\goProject\src\goCode\testProject01\main>
```

> 通过`go run test.go`我们依然可以输出"Hello Golang"，但是实际上它依然进行了编译，只不过被隐藏起来了。

## 文件重命名

> 在上面的示例中编译后会生成一个同名的exe文件，那么我们可以指定其他名称吗？答案是可以的。

```
E:\goProject\src\goCode\testProject01\main>go build -o hello.exe test.go

E:\goProject\src\goCode\testProject01\main>
```

> 通过上面的命令就可以在执行完编译后生成一个`hello.exe`文件了。

## 语法注意事项

1. 源文件以`go`为扩展名。
2. 程序的执行入口是main函数。
3. 严格区分大小写。
4. 方法由一条条语句构成，每个语句后不需要分号(Go语言会在每行后自动加分号)，这也体现出Goland的间接性。
5. Go编译器是一行行进行编译的，因此我们一行就写一条语句，不能把多条语句写在同一行，否则会报错。
6. 定义的变量或者import的包如果没有使用到，代码不能编译通过。
7. 大括号都是成对出现的，缺一不可。

## 代码风格

1. 注意缩进；

   ```bash
   # 通过 gofmt test.go 格式化文件
   E:\goProject\src\goCode\testProject01\main>gofmt test.go
   package main
   
   import "fmt"
   
   func main() {
           fmt.Println("Hello Golang")
   }
   
   # 格式化并写入文件
   E:\goProject\src\goCode\testProject01\main>gofmt -w test.go
   ```

2. 成对编程: `{}`、`()`、`""`、`''`。

3. 运算符两边加空白: `var a = 2 + 3`。

4. 注释：官方推荐行注释。

5. 以下代码是错误的；

   ```go
   package main
   
   import "fmt"
   
   func main()
   {
   	fmt.Println("Hello Golang")
   }
   ```

   > go的设计者想要开发者保持有统一的代码风格，一个问题尽量只有一个解决方案是最好的

6. 行长约定：一行最长不要超过80个字符，超过的请使用换行展示，尽量保持格式优雅。



​	


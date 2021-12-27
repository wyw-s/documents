---
title: 基础知识
category: JENKINS
date: 2021-05-02
---

> 脚本式流水线更像是一种脚本或编程语言，像其他命令式语言一样可以运行程序和处理逻辑，而声明式流水线则更像Jenkins的传统实现方式，在Web表单的预定义字段中输入关键信息，代表了特定目标和预期行为。与传统的Web表单类似，当执行声明式流水线时，每一个段落定义了基于用户输入数据的执行内容和方式。

## 脚本式语法

>脚本式语法是Jenkins最开始实现的流水线即代码方式。这是一种命令式风格，也就是在流水线脚本中定义逻辑和程序流程。它也更依赖于Groovy语言和结构，特别是对于错误检查和异常处理来说。

```shell
node('worker_node1') {
	stage('Source') {
		// 从Git仓库中获取代码
		git 'git@diyvb2:/home/git/repositories/workshop.git'
	}
	stage('Compile') {
		// 运行Grable 进行编译和单元测试
		sh 'grade clean compileJava test'
	}
}
```

优点：

- 更少的代码段落和弱规范要求。
- 更强大的程序代码能力。
- 更像编写代码程序。
- 传统的流水线即代码模型，用户熟悉并向后兼容性。
- 更灵活的自定义代码操作。
- 能够构建更复杂的工作流和流水线。

缺点。

- 普遍要求更高的编程水平。
- 语法检查受限于Groovy语言及环境。
- 和传统Jenkins模型有很大差异。
- 与声明式流水线的实现相比，同一工作流会更复杂。

## 声明式语法

> 声明式语法（declarative syntax）是Jenkins提供的一种新的选择。声明式风格的流水线代码被编排在清晰的段落中，相对于只关注实现逻辑，这些流水线的主要区域描述（或“声明”）了我们所期望的流水线的状态和输出。

```shell
pipeline {
	agent { label "worker_node1" }
	stages {
	# 获取代码
		stage('Source') {
			steps {
				# 从git仓库中获取代码
				git "git@diyvb2:/home/git/repositories/workshop.git"
			}
			steps('Compile') {
				steps {
					# 运行Gradle进行编译和单元测试
					sh "gradle clean compilejava test"
				}
			}
		}
	}
}
```

优点：

- 更结构化，贴近传统的Jenkins Web表单形式。
- 更强大的声明内容能力，高可读性。
- 可以通过Blue Ocean图形化界面自动生成。
- 段落可映射到常见的Jenkins概念，比如通知。
- 更友好的语法检查和错误识别。
- 提升流水线间的一致性。

缺点：

- 对迭代逻辑支持较弱（相比程序而言）。
- 仍在开发完善中（对于传统Jenkins中的部分功能缺乏支持）。
- 更严格的结构（更难实现自定义流水线代码）。
- 目前对于复杂的流水线和工作流难以胜任。

> 简而言之，对于新用户和希望流水线具备传统Jenkins一样可读性的用户来说，声明式流水线更容易学习和维护。这是以灵活性为代价换取结构不支持的功能。
> 脚本式流水线更加灵活，提供了“超级用户”的选项，即允许用户不受结构约束实现更多功能。不过，总的来说，任何一种流水线类型对大多数场景而言都同样适用。

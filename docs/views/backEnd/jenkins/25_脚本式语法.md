---
title: 脚本式语法
category: JENKINS
date: 2021-05-02
---

> 脚本式语法一般以 node开头

## 指定节点运行任务

> 执行以下任务，请保证你已经新建了一个节点并 打上了 worker1 的标签；

1. 新建一个流水线项目；
2. 在流水线选项卡中添加以下代码并运行；

```javascript
node('worker1') {
	stage('Source') {
		// 从Git仓库中获取代码
		// git 'https://github.com/wyw-s/documents.git';
		sh 'echo source'
	}
}
```

运行结果：

```shell
Started by user wangyawei
Running in Durability level: MAX_SURVIVABILITY
[Pipeline] Start of Pipeline
[Pipeline] node
Running on worker_node1 in /home/local/jenkinsNodes/worker_node1/workspace/blog
[Pipeline] {
[Pipeline] stage
[Pipeline] { (Source)
[Pipeline] sh
+ echo source
source
Cannot contact worker_node1: java.lang.InterruptedException
[Pipeline] }
[Pipeline] // stage
[Pipeline] }
[Pipeline] // node
[Pipeline] End of Pipeline
Finished: SUCCESS
```

> 如果你不指定worker1标签，或者使用以下方式，那么则默认使用主节点(master)执行任务；

```javascript
// 不指定标签
node {
	stage('Source') {
		// 从Git仓库中获取代码
		// git 'https://github.com/wyw-s/documents.git';
		sh 'echo source'
	}
}
```

运行结果：

```shell
Started by user wangyawei
Running in Durability level: MAX_SURVIVABILITY
[Pipeline] Start of Pipeline
[Pipeline] node
Running on Jenkins in /var/lib/jenkins/workspace/blog
[Pipeline] {
[Pipeline] stage
[Pipeline] { (Source)
[Pipeline] sh
+ echo source
source
[Pipeline] }
[Pipeline] // stage
[Pipeline] }
[Pipeline] // node
[Pipeline] End of Pipeline
Finished: SUCCESS
```


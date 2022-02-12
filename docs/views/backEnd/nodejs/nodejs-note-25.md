---
title: Node.js 不是银弹
category: nodejs
time: 2021-06-29 08:14:34
autoGroup-6: 进阶
tags:
  - nodejs
  - 后端
---

> 这里主要讨论一下Node.js 不适合做什么，以及它的不足之处和一些弊端。  

在西方古老的传说里，有一种叫做“狼人”的可怕生物。这种生物平时和人类没有什么不同之处，但每到月圆之夜，他们就会变成狼身。当他们变成狼以后，兽性会不能控制，开始袭击普通的人类。狼人给人类带来了巨大的恐惧，因为他们是无法被一般的手段杀死的，只有用赐福过的银弹（Silver Bullet）才能杀死狼人。**“银弹”因此成为了“任何能够带来极大效果的直接解决方案”的代名词。**  

## Node.js 不适合做什么  

> Node.js 是一个优秀的平台，它有许多传统架构不具备的优点，以至于我们情不自禁地愿意用它来做开发。 其实Node.js 和任何东西一样，都有它擅长的和不擅长的事情，如果你非要用它来做它不擅长的事情，那么你将会陷入僵局之中。  

### 计算密集型的程序

​		我们知道Nodejs是单线程的，因为Node.js的开发者和支持者坚信单线程和事件驱动的异步式编程比传统的多线程编程运行效
率更高。但事实上多线程可以达到同样的吞吐量，尽管可能开销不小。相比之下， Node.js 由于其单线程性的特性，必须通过多进程的方法才能充分利用多核资源。  

​		理想情况下， Node.js单线程在执行的过程中会将一个CPU核心完全占满，所有的请求必须等待当前请求处理完毕以后进入事件循环才能响应。如果一个应用是计算密集型的，那么除非你手动将它拆散，否则请求响应延迟将会相当大。例如，某个事件的回调函数中要进行复杂的计算，占用CPU 200毫秒，那么事件循环中所有的请求都要等待200毫秒。为了提高响应速度，你唯一的办法就是把这个计算密集的部分拆成若干个逻辑，这给编程带来了额外的复杂性。即使这样，系统的总吞吐量和总响应延迟也不会降低，只是调度稍微公平了一些。不过好在真正的Web 服务器中，很少会有计算密集的部分，如果真的有，那么它不应该被实现为即时的响应。正确的方式是给用户一个提示，说服务器正在处理中，完成后会通知用户，然后交给服务器的其他进程甚至其他专职的服务器来做这件事。  

### 单用户多任务型应用

​		尽管是单用户，却不一定是单任务。例如给用户提供界面的同时后台在进行某个计算，为了让用户界面不出现阻塞状态，你不得不开启多线程或多进程。而Node.js 线程或进程之间的通信到目前为止还很不便，因为它根本没有锁，因而号称不会死锁。 Node.js 的多进程往往是在执行同一任务，通过多进程利用多处理器的资源，但遇到多进程相互协作时，就显得捉襟见肘了。  

### 逻辑十分复杂的事务

​		Node.js 的控制流不是线性的，它被一个个事件拆散，但人的思维却是线性的，当你试图转换思维来迎合语言或编译器时，就不得不作出牺牲。举例来说，你要实现一个这样的逻辑：从银行取钱，拿钱去购买某个虚拟商品，买完以后加入库存数据库，这中间的任何一步都可能会涉及数十次的I/O操作，而且任何一次操作失败以后都要进行回滚操作。这个过程是线性的，已经很复杂了，如果要拆分为非线性的逻辑，那么其复杂程度很可能就达到无法维护的地步了。Node.js更善于处理那些逻辑简单但访问频繁的任务，而不适合完成逻辑十分复杂的工作。  

### Unicode 与国际化

​		Node.js 不支持完整的Unicode，很多字符无法用string 表示。公平地说这不是Node.js 的缺陷，而是JavaScript 标准的问题。 这其实是一个历史遗留问题，最早的Unicode设计者认为65536个字符足以囊括全世界所有的文字了，因此那个时候盲目兼容Unicode 的系统或平台（如Windows、 Java 和JavaScript）在后来都遇到了问题。   

​		因此你无法使用Node.js 处理罕见的字符。想用Node.js 实现一个多语言的字典工具？除非你放弃使用string 数据类型，把所有的字符当作二进制的Buffer 数据来处理。  

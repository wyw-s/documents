---
title: deno相关问题
category: 面试题
time: 2021-07-28 17:39:23
---

> Deno发公告说要把部分ts代码重构为js。 你觉得这是什么原因？

## 官方回答

> 在使用 TypeScript 编写内部代码时，Deno 团队遇到了以下几个现实问题：
> 在变更文件时，TypeScript 往往需要几分钟的编译时间，这就导致连续编译过程变得非常缓慢；
> 在创建 Deno 可执行文件以及面向用户的 API 源文件时，TypeScript 结构会引发一系列运行时性能问题；
> TypeScript 本身对于 Deno 代码的组织工作毫无帮助，反而增强了代码组织负担。Deno 团队提出的一大现实问题，是 TypeScript 会在两个位置复制相互独立的 Body 类；
> https://github.com/denoland/deno/issues/4748
> 由于 TypeScript 编译器无法帮助开发者生成 d.ts 文件，内部代码与运行时 TypeScript 声明必须以手动方式保持同步；
> 他们维护着两台 TS 编译器主机：一台用于内部 Deno 代码，另一台用于外部用户代码，但二者的作用其实非常相似。
>
> 

## 扩展链接

https://mp.weixin.qq.com/s/h1ZNewMZZC20o80P37KqsQ
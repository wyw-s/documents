---
title: wsl与hyper的关系
category: other
date: 2021-05-02
---

1. HyperV是一个真正的虚拟机，有完整的硬件模拟，能把整个完整的linux塞进去;
2. 最新版本（wsl2）的 WSL 使用 Hyper-V 体系结构来实现其虚拟化。 此体系结构将在“虚拟机平台”可选组件中提供。
3. wsl主要是一种面向开发人员的工具，尤其是 web 开发人员、在开源项目中工作或部署到 Linux 服务器环境的工具。WSL 使你能够使用选择的分发 (Ubuntu、Debian、OpenSUSE、Kali、Alpine 等) 在 Bash shell 中运行 Linux。 使用 Bash 可以运行命令行 Linux 工具和应用。


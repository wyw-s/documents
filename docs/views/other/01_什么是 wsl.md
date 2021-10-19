---
title: 什么是 wsl
category: other
date: 2021-05-02
---

> 适用于 Linux 的 Windows 子系统可让开发人员直接在 Windows 上按原样运行 GNU/Linux 环境（包括大多数命令行工具、实用工具和应用程序），且不会产生传统虚拟机或双启动设置开销。

您可以：

- [在 Microsoft Store](https://aka.ms/wslstore) 中选择你偏好的 GNU/Linux 分发版。
- 运行常用的命令行软件工具（例如 `grep`、`sed`、`awk`）或其他 ELF-64 二进制文件。
- 运行 Bash shell 脚本和 GNU/Linux 命令行应用程序，包括：
  - 工具：vim、emacs、tmux
  - 语言：[NodeJS](https://docs.microsoft.com/zh-cn/windows/nodejs/setup-on-wsl2)、Javascript、[Python](https://docs.microsoft.com/zh-cn/windows/python/web-frameworks)、Ruby、C/ C++、C# 与 F#、Rust、Go 等。
  - 服务：SSHD、[MySQL](https://docs.microsoft.com/zh-cn/windows/wsl/tutorials/wsl-database)、Apache、lighttpd、[MongoDB](https://docs.microsoft.com/zh-cn/windows/wsl/tutorials/wsl-database)、[PostgreSQL](https://docs.microsoft.com/zh-cn/windows/wsl/tutorials/wsl-database)。
- 使用自己的 GNU/Linux 分发包管理器安装其他软件。
- 使用类似于 Unix 的命令行 shell 调用 Windows 应用程序。
- 在 Windows 上调用 GNU/Linux 应用程序。

## 安装；

> 需要先启用“适用于 Linux 的 Windows 子系统”可选功能，然后才能在 Windows 上安装 Linux 分发。这里安装 `wsl2`为例；

1. 以管理员身份打开 PowerShell 并运行;

   ```shell
   dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart
   ```

2. 必须启用“虚拟机平台”可选功能。

   ```shell
   dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart
   ```

3. **重新启动** 计算机，安装完成；

4. 下载 Linux [内核更新包](https://wslstorestorage.blob.core.windows.net/wslblob/wsl_update_x64.msi)：

5. 安装所选的 Linux 分发；

   - 打开 [Microsoft Store](https://aka.ms/wslstore)，并选择你偏好的 Linux 分发版。
   - 在分发版的页面中，选择“获取”。
   - 首次启动新安装的 Linux 分发版时，将打开一个控制台窗口，系统会要求你等待一分钟或两分钟，以便文件解压缩并存储到电脑上。 未来的所有启动时间应不到一秒。
   - 然后，需要[为新的 Linux 分发版创建用户帐户和密码](https://docs.microsoft.com/zh-cn/windows/wsl/user-support)。
   - **祝贺你！现已成功安装并设置了与 Windows 操作系统完全集成的 Linux 分发！**

6. 点击【开始】点击【ubantu】，即启动ubantu终端命令，现在你可以做任何事情了例：安装nginx mysql等；



[官方文档](https://docs.microsoft.com/zh-cn/windows/wsl/)


---
title: 使用GoReleaser发布你的应用
category: GoLang
date: 2022-04-04
autoGroup-5: 扩展
---

> 众所周知，go 语言是支持跨平台编译的，如果每次编译发布都手动操作的话太麻烦了。[GoReleaser](https://github.com/goreleaser/goreleaser)这个工具就可以帮助我们编译和发布，配置好后每次发布时只需一行命令就直接编译并发布了，`GoReleaser` 采用 `Golang` 开发，是一款用于 `Golang` 项目的自动发布工具。只需要几行命令就可以轻松实现跨平台的包编译、打包和发布到 `Github`、`Gitlab` 等版本仓库种，显著地提高了生产力。

开发环境：

- Windows 10
- ide(GoLand) 2021.3.3
- go1.18 windows/amd64
- goreleaser version 1.7.0

## 安装

官方文档：[传送门](https://goreleaser.com/install/)

下载：[传送门](https://github.com/goreleaser/goreleaser/releases)

作为go小白，目前还不会使用其他的方式下载`goleleaser`，这里我是直接下载的exe文件，然后把exe文件放到你项目的根目录下即可。

```bash
$ ./goreleaser.exe -v
goreleaser version 1.7.0
commit: 7671dab291483b2733e871abff379d07e74dfc6c
built at: 2022-03-21T00:00:37Z
built by: goreleaser
goos: windows
goarch: amd64
module version: v1.7.0, checksum: h1:qk+7boeU300OaogAVkjjl+2OLoMfr2e2uZM0cPcacDw=

https://goreleaser.com
```

## 使用

### 初始化

```bash
#在目录下生成 .goreleaser.yml 配置文件
$ ./goreleaser.exe init
```

> 生成的配置文件可以根据自己的需求进行配置。

### 打包

> 只在本地打包，不上传到git服务器

```bash
#删除本地打包文件夹并打包
$ ./goreleaser.exe --snapshot --skip-publish --rm-dist
```

```
$ ./goreleaser.exe release --snapshot --skip-publish --rm-dist
   • releasing...     
   • loading config file       file=.goreleaser.yml
   • loading environment variables
   • getting and validating git state
      • building...               commit=13a6492a3c03060d76b28b1f591676fb316f7933 latest tag=v4.1.0
      • pipe skipped              error=disabled during snapshot mode
   • parsing tag
   • running before hooks
      • running                   hook=go mod download
   • setting defaults 
   • snapshotting     
      • building snapshot...      version=v4.1.0
   • checking distribution directory
      • --rm-dist is set, cleaning it up
   • loading go mod information
   • build prerequisites
   • writing effective config file
      • writing                   config=dist\config.yaml
   • building binaries
      • building                  binary=dist\markdownToConfluence_linux_386\markdownToconfluence
      • building                  binary=dist\markdownToConfluence_darwin_arm64\markdownToconfluence
      • building                  binary=dist\markdownToConfluence_windows_386\markdownToconfluence.exe
      • building                  binary=dist\markdownToConfluence_linux_amd64\markdownToconfluence
      • building                  binary=dist\markdownToConfluence_darwin_amd64\markdownToconfluence
      • building                  binary=dist\markdownToConfluence_windows_amd64\markdownToconfluence.exe
      • building                  binary=dist\markdownToConfluence_linux_arm64\markdownToconfluence
   • archives
      • creating                  archive=dist\markdownToConfluence_v4.1.0_darwin_x86_64.tar.gz
      • creating                  archive=dist\markdownToConfluence_v4.1.0_linux_arm64.tar.gz
      • creating                  archive=dist\markdownToConfluence_v4.1.0_windows_i386.tar.gz
      • creating                  archive=dist\markdownToConfluence_v4.1.0_windows_x86_64.tar.gz
      • creating                  archive=dist\markdownToConfluence_v4.1.0_linux_i386.tar.gz
      • creating                  archive=dist\markdownToConfluence_v4.1.0_linux_x86_64.tar.gz
      • creating                  archive=dist\markdownToConfluence_v4.1.0_darwin_arm64.tar.gz
      • creating                  archive=dist\markdownToConfluence_v4.1.0_windows_arm64.tar.gz
   • calculating checksums
   • storing release metadata
      • writing                   file=dist\artifacts.json
      • writing                   file=dist\metadata.json
   • release succeeded after 8.38s
```

> 当看到 ` release succeeded after 8.38s` 时说明打包成功了。会在根目录中生成dist文件夹，里面就是编译的各种跨平台包。

### 发布

1. 获取 [Github Token](https://github.com/settings/tokens)。点击 `Generate new token` 按钮，生成一个新的 Token
2. 为项目打上标签。
3. 执行自动发布流程。

```bash
# 设置token
$ export GITHUB_TOKEN="YOUR_GH_TOKEN"
# or
$ export GITLAB_TOKEN="YOUR_GL_TOKEN"

# 打标签
$ git tag -a v0.1.0 -m "release v0.1.0"

$ git push origin v0.1.0

# 执行自动发布
$ ./goreleaser.exe --rm-dist
```

以下为打包成功时的完整日志:

```bash
$ ./goreleaser.exe release --rm-dist
   • releasing...     
   • loading config file       file=.goreleaser.yml
   • loading environment variables
   • getting and validating git state
      • building...               commit=81edb2d831faf94ef223aae8833238c53d50944c latest tag=v4.1.0
   • parsing tag      
   • running before hooks
      • running                   hook=go mod download
   • setting defaults 
   • checking distribution directory
      • --rm-dist is set, cleaning it up
   • loading go mod information
   • build prerequisites
   • writing effective config file
      • writing                   config=dist\config.yaml
   • generating changelog
      • writing                   changelog=dist\CHANGELOG.md
   • building binaries
      • building                  binary=dist\markdownToConfluence_linux_386\markdownToconfluence
      • building                  binary=dist\markdownToConfluence_windows_386\markdownToconfluence.exe
      • building                  binary=dist\markdownToConfluence_linux_amd64\markdownToconfluence
      • building                  binary=dist\markdownToConfluence_windows_amd64\markdownToconfluence.exe
      • building                  binary=dist\markdownToConfluence_linux_arm64\markdownToconfluence
      • building                  binary=dist\markdownToConfluence_windows_arm64\markdownToconfluence.exe
      • building                  binary=dist\markdownToConfluence_darwin_arm64\markdownToconfluence
      • building                  binary=dist\markdownToConfluence_darwin_amd64\markdownToconfluence
   • archives         
      • creating                  archive=dist\markdownToConfluence_4.1.0_linux_i386.tar.gz
      • creating                  archive=dist\markdownToConfluence_4.1.0_windows_x86_64.tar.gz
      • creating                  archive=dist\markdownToConfluence_4.1.0_windows_i386.tar.gz
      • creating                  archive=dist\markdownToConfluence_4.1.0_darwin_x86_64.tar.gz
      • creating                  archive=dist\markdownToConfluence_4.1.0_linux_arm64.tar.gz
      • creating                  archive=dist\markdownToConfluence_4.1.0_darwin_arm64.tar.gz
      • creating                  archive=dist\markdownToConfluence_4.1.0_windows_arm64.tar.gz
      • creating                  archive=dist\markdownToConfluence_4.1.0_linux_x86_64.tar.gz
   • calculating checksums
   • storing release metadata
      • writing                   file=dist\artifacts.json
      • scm releases
         • creating or updating release repo=wyw-s/markdownToConfluence tag=v4.1.0
         • release updated           url=https://github.com/wyw-s/markdownToConfluence/releases/tag/v4.1.0
         • uploading to release      file=dist\checksums.txt name=checksums.txt
         • uploading to release      file=dist\markdownToConfluence_4.1.0_windows_i386.tar.gz name=markdownToConfluence_4.1.0_windows_i386.tar.gz
         • uploading to release      file=dist\markdownToConfluence_4.1.0_windows_arm64.tar.gz name=markdownToConfluence_4.1.0_windows_arm64.tar.gz
         • uploading to release      file=dist\markdownToConfluence_4.1.0_linux_x86_64.tar.gz name=markdownToConfluence_4.1.0_linux_x86_64.tar.gz
         • uploading to release      file=dist\markdownToConfluence_4.1.0_windows_x86_64.tar.gz name=markdownToConfluence_4.1.0_windows_x86_64.tar.gz
         • uploading to release      file=dist\markdownToConfluence_4.1.0_linux_arm64.tar.gz name=markdownToConfluence_4.1.0_linux_arm64.tar.gz
         • uploading to release      file=dist\markdownToConfluence_4.1.0_darwin_arm64.tar.gz name=markdownToConfluence_4.1.0_darwin_arm64.tar.gz
         • uploading to release      file=dist\markdownToConfluence_4.1.0_darwin_x86_64.tar.gz name=markdownToConfluence_4.1.0_darwin_x86_64.tar.gz
         • uploading to release      file=dist\markdownToConfluence_4.1.0_linux_i386.tar.gz name=markdownToConfluence_4.1.0_linux_i386.tar.gz
   • announcing
   • release succeeded after 20.16s
```

> 当看到 ` release succeeded after 8.38s` 时说明打包并发布成功了。此时你可以到github中release中查看发布的情况

## 注意事项

### 出现`gcc`类似的错误

```bash
running gcc failed: exec: "gcc": executable file not found in %PATH% 
```

原因：打包编译需要用到此包，但是没有找到或版本不对。主要就是一个gcc安装问题，windows下比较麻烦的就是一定要安装对应的版本32位或者64位。

解决：下载安装 [传送门](https://jmeubank.github.io/tdm-gcc/articles/2020-03/9.2.0-release)。点击第一个【最小的在线安装程序】进行下载。然后根据你的计算机来选择是32位还是64位。安装完成重新打包即可。

### 出现`darwin_arm64`

打包阶段可以正常打包但是到最后却输出一个错误；

```bash
# 以下为错误信息
   • building                  binary=dist\markdownToConfluence_windows_386\markdownToconfluence.exe
   ⨯ release failed after 3.62s error=failed to build for darwin_amd64: exit status 2: # golang.org/x/sys/unix
..\..\pkg\mod\golang.org\x\sys@v0.0.0-20191026070338-33540a1f6037\unix\syscall_darwin.1_13.go:25:3: //go:linkname must refer to declared function or variable
..\..\pkg\mod\golang.org\x\sys@v0.0.0-20191026070338-33540a1f6037\unix\zsyscall_darwin_amd64.1_13.go:27:3: //go:linkname must refer to declared function or variable
..\..\pkg\mod\golang.org\x\sys@v0.0.0-20191026070338-33540a1f6037\unix\zsyscall_darwin_amd64.1_13.go:40:3: //go:linkname must refer to declared function or variable
..\..\pkg\mod\golang.org\x\sys@v0.0.0-20191026070338-33540a1f6037\unix\zsyscall_darwin_amd64.go:28:3: //go:linkname must refer to declared function or variable
..\..\pkg\mod\golang.org\x\sys@v0.0.0-20191026070338-33540a1f6037\unix\zsyscall_darwin_amd64.go:43:3: //go:linkname must refer to declared function or variable
..\..\pkg\mod\golang.org\x\sys@v0.0.0-20191026070338-33540a1f6037\unix\zsyscall_darwin_amd64.go:59:3: //go:linkname must refer to declared function or variable
..\..\pkg\mod\golang.org\x\sys@v0.0.0-20191026070338-33540a1f6037\unix\zsyscall_darwin_amd64.go:75:3: //go:linkname must refer to declared function or variable
..\..\pkg\mod\golang.org\x\sys@v0.0.0-20191026070338-33540a1f6037\unix\zsyscall_darwin_amd64.go:90:3: //go:linkname must refer to declared function or variable
..\..\pkg\mod\golang.org\x\sys@v0.0.0-20191026070338-33540a1f6037\unix\zsyscall_darwin_amd64.go:105:3: //go:linkname must refer to declared function or variable
..\..\pkg\mod\golang.org\x\sys@v0.0.0-20191026070338-33540a1f6037\unix\zsyscall_darwin_amd64.go:121:3: //go:linkname must refer to declared function or variable
..\..\pkg\mod\golang.org\x\sys@v0.0.0-20191026070338-33540a1f6037\unix\zsyscall_darwin_amd64.go:121:3: too many errors

```

> 执行以下语句即可解决：
>
> ```bash
> go get -u golang.org/x/sys
> ```


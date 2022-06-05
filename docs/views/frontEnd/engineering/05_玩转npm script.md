---
title: 玩转npm script
category: 工程化
autoGroup-5: 脚本世界
date: 2022-06-05
---

## 内部变量

- npm 常用命令

    ```bash
    # 初始化工程
    npm init 
    
    # 运行脚本
    npm run
    
    # 安装依赖
    npm install
    
    # 升级依赖
    npm update
    
    # 查看bin文件目录
    npm bin
    
    # 将工程软链接到全局
    npm link
    
    # 发布包
    npm publish
    
    # 废弃包
    npm deprecate
    ```
- 内部变量
  - `$npm_package_*`;
  - `$npm_package_name`;
  - `$npm_package_version`;
  - `$npm_package_config_var1`;
    ```javascript
    // 使用bash shell(例如Linux,macOS):
    {
        "version": "1.0.0",
        "scripts": {
        	"build": "echo $npm_package_version"
        }
    }
    
    // 使用Windows(例如cmd.exe,Powershell):
    {
      "version": "1.0.0",
      "scripts": {
        "build": "echo %npm_package_version%"
      }
    }
    ```

## 参数传递

> 如何对npm scripts二次包装的命令传参？

可以通过`--`透传参数；

```json
{
    "scripts": {
        "serve": "serve ./build",
        "serve:prod": "npm run serve -- -l 80"
    }
}
```

## 脚本钩子

> 脚本钩子类似于hook，当事件触发时，对应的钩子逻辑也被触发例：`git hook`、`web hook`等。

1. 部分npm内置脚本钩子如下：

```bash
# 用户执行npm install 命令时，先执行该脚本
preinstall 

# 用户执行npm install 命令时，安装结束后执行该脚本
postinstall

# 卸载一个模块前执行
preuninstall

# 卸载一个模块后执行
postuninstall

# link 模块前执行
prelink

# link 模块后执行
postlink

# 运行npm test命令前执行
pretest

# 运行npm test命令后执行
posttest
```

2. 规律：`pre-*`和`post-*`;

   - 除了内置脚本钩子，我们也可以按规则自定义地添加钩子

3. 自动化发版；

   ```javascript
   #! /usr/bin/env node
   
   const semver = require('semver');
   const packageInfo = require('../package.json');
   const fs = require('fs');
   const targetVersion = semver.inc(packageInfo.version);
   
   packageInfo.version = targetVersion;
   
   ...
   ```

4. 利用`pre-commit`: 约束给git提交信息

## 思考题

- 脚本第一行为什么需要有：`#!/usr/bin/env node`?
- 如果想在一条script里顺序执行两个命令，应该怎么写？
- 如果想在一条script里顺序并行执行两个命令，应该怎么写？

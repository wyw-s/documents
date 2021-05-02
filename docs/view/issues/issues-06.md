---
title: 启动webpack-dev-server报错
---

## `Cannot find module 'webpack-cli/bin/config-yargs'`

### 方法一、

- 版本：

  ```
  "webpack": "^5.24.2",
  "webpack-cli": "^4.5.0",
  "webpack-dev-server": "^3.11.2"
  ```

- 启动：`webpack-dev-server`

- 报错信息：

  ```
  Cannot find module 'webpack-cli/bin/config-yargs'
  ```

- 报错原因：`webpack-dev-server`依赖于`webpack-cli`里面的`config-yargs`文件。然而 在webpack-cli 版本4以后删除了 config-yargs文件 ，

  ```js
  // 在webpack-dev-server.js中我们可以看到以下一段代码。用来加载 config-yargs 文件，
  
  // webpack-cli@3.3 path : 'webpack-cli/bin/config/config-yargs'
  let configYargsPath;
  try {
    require.resolve('webpack-cli/bin/config/config-yargs');
    configYargsPath = 'webpack-cli/bin/config/config-yargs';
  } catch (e) {
    configYargsPath = 'webpack-cli/bin/config-yargs';
  }
  // eslint-disable-next-line import/no-extraneous-dependencies
  // eslint-disable-next-line import/no-dynamic-require
  require(configYargsPath)(yargs);
  ```

  

- 试错：

  - 安装低版本；

    ```
    npm install webpack-cli@3.3.10
    ```

  - 错误信息：

    ```
    npm ERR! Could not resolve dependency:
    npm ERR! peer webpack@"4.x.x" from webpack-cli@3.3.10
    npm ERR! node_modules/webpack-cli
    npm ERR!   webpack-cli@"3.3.10" from the root project
    
    翻译：webpack-cli@3.3.10需要一个webpack@4.x.x的对等点
    ```

  - 解决：

    - 安装webpack@4.46
    - 安装`webpack-cli@3.3.10`


### 方法二、

- 直接配置`script`脚本直接启动。不需要进行降级处理

  ```json
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1",
      "server": "webpack serve --mode=development",
    },
  ```

[查看原文](https://blog.csdn.net/weixin_40599109/article/details/109582365)
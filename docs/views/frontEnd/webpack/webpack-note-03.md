---
title: webpack打包进度条
category: WEBPACK
date: 2021-05-02
---

## 添加`webpack`打包进度条

```json
"webpack": "^4.46",
"webpack-dev-middleware": "^3.7.3",
"webpack-hot-middleware": "^2.25.0"
```

### 方式一

```js
// ...省略
const webpack = require("webpack");
const complier = webpack(webpackConfig);
complier.apply(new webpack.ProgressPlugin()); // 重点是这行
const hotMiddleware = webpackHotMiddleware(complier);
const app = new express();

app.use(webpackDevMiddleware(complier, {
  noInfo: true,
  publicPath: webpackConfig.output.publicPath,
}));
```

> 添加完成即可实现和`vue-dev-service`一样的打包进度条效果。

### 方式二

- 安装：`progress-bar-webpack-plugin`插件，[传送门](https://www.npmjs.com/package/progress-webpack-plugin)

  ```bash
  npm i progress-webpack-plugin
  ```

- 使用：

  ```
  const ProgressBarPlugin = require('progress-bar-webpack-plugin');
  
  module.exports = {
      ...
      plugins:[
          new ProgressPlugin(true)
      ]
  }
  ```

### 方式三

- 安装：`simple-progress-webpack-plugin`插件，[传送门](https://cnpmjs.org/package/simple-progress-webpack-plugin)

  ```bash
  npm install simple-progress-webpack-plugin --save-dev
  ```

- 使用：

  ```js
  const SimpleProgressWebpackPlugin = require( 'simple-progress-webpack-plugin' );
  
  module.exports = {
      ...
      plugins:[
          new SimpleProgressWebpackPlugin()
      ]
  }
  ```

### 方式四

- 安装：`progress-webpack-plugin`插件，[传送门](https://www.npmjs.com/package/progress-webpack-plugin)

  ```bash
  npm i progress-webpack-plugin
  ```

- 使用：

  ```js
  var ProgressPlugin = require('progress-webpack-plugin')
  
  module.exports = {
      ...
      plugins:[
          new ProgressPlugin(true)
      ]
  }
  ```

  > 注意：这个插件我在使用时出现了错误，没在其它`webpack`的版本试过。建议用上面几个，基本就可以满足需求了。


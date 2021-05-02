---
title: css-loader
---

## 使用`css-loader@0.28.4`

> `webpack@3.81`
>
> `webpack`将一切文件看作模块，当然`css`也不例外，我们可以直接在`js`文件中引入`css`文件，但是`webpack`原生并不支持解析`css`文件，如果要支持非`js`类型的文件，则需要使用`webpack`的`loader`机制。

1. 我们需要在`webpack.config.js`文件中做如下配置。

   ```js
   const path = require('path')
   
   module.exports = {
     entry: './src/main.js',
     output: {
       filename: 'bundle.js',
       path: path.resolve(__dirname, './dist')
     },
     module: {
       rules: [
         {
           // 用正则表达式去匹配要用该loader转换的css文件；
           test: /\.css$/,
           // loader的执行顺序由后到前 既先使用 css-loader 解析 css文件，
           // 在由 style-loader 将css的内容注入到js中然后再
           // 在js中动态创建<style></style>标签并插入到head头部。
           // 我用的webpack 3.8对应的是css-loader3.5版本，再高点会报错
           use: [
             'style-loader', // 2.0.0版本
             {
               loader: "css-loader", 
               // minimize压缩功能在1.0.0版本中被移除，功能开启会去掉多余的空格
               options: {
                 minimize: true,// 0.28.4版本
               },
             }
           ]
         }
       ]
     }
   }
   
   ```

   > 此时我们便可以在js文件中引入css文件了，打包出来的css会进行压缩，

2. 把css直接插入js到,会造成js文件过大和加载时间变长，这个时候我可以把css部分单独提取到独立的css文件中，然后再页面中去引用。

   - 执行命令`npm i -D extract-text-webpack-plugin`下载插件，版本3.0.2

   ```js
   const path = require('path')
   // 引入提取css的插件。
   const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')
   
   module.exports = {
     entry: './src/main.js',
     output: {
       filename: 'bundle.js',
       path: path.resolve(__dirname, './dist')
     },
     module: {
       rules: [
         {
           test: /\.css$/,
           // 提取css到单独的文件中并压缩。
           loader: ExtractTextWebpackPlugin.extract({
             // fallback 表示如果当css没有被css-loader所处理那么就用style-loader来处理
             fallback: "style-loader",
             use: [
               {
                 loader: 'css-loader',
                 options: {
                   minimize: true
                 }
               }
             ]
           }),
         }
       ]
     },
     plugins: [
       new ExtractTextWebpackPlugin({
         // 输出的文件名加8为hash值
         // filename: `[name]_[contenthash:8].css`
         filename: `[name].css`
       })
     ]
   }
   
   ```

   > 此时我们再执行打包命令，那么会在dist文件中多一个main.css文件，这个便是提取出来的文件，然后把提取出来的文件引入到html文件中。

3. 考虑到`css-loader`在1.0版本后去掉了压缩功能，所以我们需要另外的插件来代替它，[下载](https://www.npmjs.com/package/optimize-css-assets-webpack-plugin)

   ```bash
   # 解决了extract-text-webpack-plugin CSS重复问题
   # 它将在Webpack构建期间搜索CSS资源，并将优化\最小化CSS（默认情况下，它使用cssnano，但可以指定自定义CSS处理器）。
   npm i -D optimize-css-assets-webpack-plugin
   npm i -D cssnano
   ```

   >  注意：对于webpack v3或更低版本，请使用optimize-css-assets-webpack-plugin@3.2.0。 optimize-css-assets-webpack-plugin@4.0.0及以上版本支持webpack v4。 

   ```js
   // 导入path 模块
   const path = require('path')
   // 提取css到单独的文件中；
   const ExtractTextPlugin = require('extract-text-webpack-plugin')
   // css 代码压缩
   const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
   
   module.exports = {
     // 设置webpack在寻找相对路径时以 context为 根目录进行查找
     context: path.resolve(__dirname, 'src'),
     // 若指定了 context 则入口文件会从指定的目录：src 中查找 main.js 文件；
     entry: './main.js',
     output: {
       // 将所有依赖的模块合并输出到一个[name].js文件
       // 若不指定静态的文件名则的默认的name为：main；
       // filename: '[name]_[id]_[hash:8].js',
       filename: '[name].js',
       // 将输出文件都放在dist目录下；
       path: path.resolve(__dirname, './dist')
     },
     module: {
       rules: [
         {
           test: /\.css$/,
           // 提取css到单独的文件中
           use: ExtractTextPlugin.extract({
             // 用于当css没有被提取时
             fallback: 'style-loader',
             // 编译文件
             use: 'css-loader'
           })
         }
       ]
     },
     plugins: [
       // 配置提取的css文件的文件名
       new ExtractTextPlugin({
         // filename: '[name]_[id]_[contenthash:8].min.css'
         filename: '[name].css'
       }),
   
   +    new OptimizeCssAssetsPlugin({
   +      // 匹配需要优化或者压缩的资源名
   +      assetNameRegExp: /\.css$/g,
   +      // 用于压缩和优化CSS 的处理器，默认是 cssnano 这是一个函数
   +      cssProcessor: require('cssnano'),
   +      cssProcessorPluginOptions: {
   +        // 设置预设值 并传递给 cssProcessor 用于删除所有的注释信息，
   +        preset: ['default', { discardComments: { removeAll: true } }]
   +      },
   +      // 表示插件能够在console中打印信息，默认值是true
   +      canPrint: true
   +    })
   +  ]
   +}
   
   ```

   > 此时你便可以升级css-loader的插件到最新版本了3.5版本了。css会根据插件配置进行压缩和优化


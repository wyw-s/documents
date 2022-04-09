---
title: require.context
category: WEBPACK
date: 2022/4/9
---

> 一个webpack的api,通过执行require.context函数获取一个特定的上下文，webpack 会在构建中解析代码中的 `require.context()` 。主要用来实现自动化导入模块,在前端工程中,如果遇到从一个文件夹引入很多模块的情况,可以使用这个api,它会遍历文件夹中的指定文件,然后自动导入,使得不需要每次显式的调用import导入模块。[官方文档](https://webpack.docschina.org/guides/dependency-management/#requirecontext)

1. 语法；

    ```javascript
    require.context(
      directory,
      (useSubdirectories = true),
      (regExp = /^\.\/.*$/),
      (mode = 'sync')
    );
    ```

2. 参数：

    - directory： 要搜索的目录；
    - useSubdirectories：是否还搜索其子目录；
    - regExp：匹配文件的正则表达式

3. 示例：

    ```javascript
    // routes.js文件
    
    const imports = require.context('@/router', true, /routes\.js$/);
    // （创建出）一个 context，其中所有文件都来自父文件夹及其所有子级文件夹，request 以 `routes.js` 结尾。
    const routesMap = imports.keys().map((key) => imports(key).default);
    
    const routes = [
        {
            path: '/',
            component: () => import('@/view/layout'),
            children: [
                ...routesMap,
            ],
        },
    ]
    
    export default routes
    ```

    






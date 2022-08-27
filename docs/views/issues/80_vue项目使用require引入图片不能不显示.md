---
title: vue项目使用require引入图片不能不显示
category: issues
date: 2021-05-02
tag
  - issue:vue
---

## 使用require引入图片不显示

> 简述：本人在`vue`项目中使用`require`引入图片后，页面不显示加载的图片，控制台报错结果如下。

```
GET http://localhost:8080/[object%20Module] 404 (Not Found)
```

1. 报错场景：在vue文件中使用`require`加载图片。

   ```js
   export default {
     name: 'tag',
     data() {
       return {
         login: require('@/assets/login.jpg')
       }
     }
   }
   ```

2. 问题原因：在` url-loader `的**4.1**版本中，有一个属性`esModule`

   根据[官方文档](https://www.npmjs.com/package/url-loader#esmodule)的介绍意思是：默认情况下，文件加载器会使用ES模块语法，在某些情况下，使用ES模块是有益的，不过你也可以将`esModule的属性设置为关闭，来启用commonJS模块的语法。

   ```js
   module.exports = {
     module: {
       rules: [
         {
           test: /\.css$/,
           use: [
             {
               loader: 'url-loader',
               options: {
                 esModule: false,
               },
             },
           ],
         },
       ],
     },
   };
   ```

3. 解决方法：

   - `esModule：false`时使用`require`引入图片；

   - `esModule：true`时使用`import`引入图片；

     ```javascript
     <script>
     import login from '@/assets/login.jpg'
     export default {
       name: 'tag',
       data() {
         return {
           login: login
         }
       }
     }
     </script>
     ```

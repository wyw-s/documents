---
title: 宿主文件
category: vue
autoGroup-15: 服务器端渲染
date: 2021-09-09 21:10:23
---

> 最后需要定义宿主文件，修改./public/index.html  

```html
<!DOCTYPE html>
<html lang="">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
  </head>
  <body>
    <!-- 此处必须这样写 是一种约定 -->
    <!--vue-ssr-outlet-->
  </body>
</html>
```

> 由于采用的服务器端渲染，所以之前的#app之类就不再需要了；


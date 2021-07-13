---
title: npm设置下载源
category: npm
---

## npm设置下载源

> 在项目中下载依赖是在正常不过的事情了，但是我们知道npm的官方下载源是国外的服务器，在国内使用下载速度比较慢，那么我们为了提高下载的速度，往往会选择国内的下载源，这个时候就需要设置Npm的下载源了

常用下载源；

```bash
# npm 
https://registry.npmjs.org/

# cnpm
http://r.cnpmjs.org/

# taobao
https://registry.npm.taobao.org/
```

设置下载源：

```bash
ASUS@yaweidediannao MINGW64 ~/Desktop/vue.3.0/viteee/myVite_three
$ npm config get registry
http://r.cnpmjs.org/

ASUS@yaweidediannao MINGW64 ~/Desktop/vue.3.0/viteee/myVite_three
$ npm config set registry https://registry.npmjs.org/

ASUS@yaweidediannao MINGW64 ~/Desktop/vue.3.0/viteee/myVite_three
$ npm config get registry
https://registry.npmjs.org/
```


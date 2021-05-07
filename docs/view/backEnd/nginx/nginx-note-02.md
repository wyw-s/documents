---
title: nginx配置资源压缩
---

> 在稍大型的项目中，前端的静态文件也会随之变大，然而当访问量也逐渐增加的时候，那么对于带宽和用户的体验就是一个问题，既要节省带宽又要做到一个很好的用户体验； 那么利用nginx开启gzip压缩可以大大提高页面的加载速度，从而提升用户体验。
>
>  gzip 的压缩页面需要浏览器和服务器双方都支持，实际上就是服务器端压缩，传到浏览器后浏览器解压并解析。浏览器那里不需要我们担心，因为目前的巨大多数浏览器 都支持解析gzip过的页面。 

## `nginx`压缩的两种方式

1. 动态压缩：静态文件还是普通文件，请求来了再压缩，然后返回给前端。
2. 静态压缩：提前把文件压缩成 `.gz` 格式，请求来了，直接返回即可。

## 动态压缩

> 动态压缩还是使用普通的打包编译后的文件，将前端编译打包后的文件上传到服务器，然后配置nginx`root`属性指向你的静态资源文件；

1. 打包静态资源文件并上传到服务器；

   ```bash
   ASUS@yaweidediannao MINGW64 /e/projectCenter/patient/dist (dev)
   $ tree
   dist
   ├── favicon.ico
   ├── index.html
   └── static
       ├── css
       │   ├── app.css
       │   ├── chunk-16054821.css
       │   ├── chunk-6424e903.css
       │   ├── chunk-6619cda0.css
       │   ├── chunk-6c291fec.css
       │   ├── chunk-87cbb83a.css
       │   ├── chunk-d0aba2a0.css
       │   └── chunk-vendors.css
       ├── fonts
       │   ├── element-icons.ttf
       │   └── element-icons.woff
       ├── img
       │   ├── login.jpg
       │   └── logo.png
       └── js
           ├── app.js
           ├── chunk-16054821.js
           ├── chunk-2d0b99b3.js
           ├── chunk-2d0df087.js
           ├── chunk-6424e903.js
           ├── chunk-6619cda0.js
           ├── chunk-6c291fec.js
           ├── chunk-87cbb83a.js
           ├── chunk-d0aba2a0.js
           └── chunk-vendors.js
   
   
   ```

   > 上传服务器使用 `Xftp`就可以；

2. 配置静态资源文件：

   ```bash
   server {
       listen       8090;
       server_name  localhost;
       location / {
           root   /home/local/webview/patient; # 我的静态资源文件路径
           index  index.html;
       }
       error_page   500 502 503 504  /50x.html;
       location = /50x.html {
           root   /usr/share/nginx/html;
       }
   }
   
   ```

3. 配置gzip压缩

   ```bash
   server {
       listen       8090;
       server_name  localhost;
       location / {
           root   /home/local/webview/patient;
           index  index.html;
   	     gzip  on;           # 开启gzip压缩
   	     gzip_min_length 2k; # 大小超过2kb才进行压缩
   	     gzip_disable msie6; # IE6对Gzip不怎么友好，不给它Gzip了
   	     gzip_types text/css application/javascript text/javascript image/jpeg image/png image/jpg; # 需要压缩的文件类型
       }
       error_page   500 502 503 504  /50x.html;
       location = /50x.html {
           root   /usr/share/nginx/html;
       }
   }
   
   ```

   ::: tip

   可以F12打开控制面板，在设置中 勾选 `Use large request rows`选项，来查看浏览器请求的资源压缩前后的大小；

   ::: 

## 静态压缩

> 静态压缩是前端直接打包出压缩的gz文件，将前端打包后的文件上传到服务器，然后配置nginx`root`属性指向你的静态资源文件；

1. 打包静态资源文件并上传到服务器；

   ```
   ASUS@yaweidediannao MINGW64 ~/Desktop/新建文件夹
   $ tree
   新建文件夹
   ├── favicon.ico
   ├── index.html.gz
   └── static
       ├── css
       │   ├── app.css.gz
       │   ├── chunk-16054821.css.gz
       │   ├── chunk-6424e903.css.gz
       │   ├── chunk-6619cda0.css.gz
       │   ├── chunk-6c291fec.css.gz
       │   ├── chunk-87cbb83a.css.gz
       │   ├── chunk-d0aba2a0.css.gz
       │   └── chunk-vendors.css.gz
       ├── fonts
       │   ├── element-icons.ttf.gz
       │   └── element-icons.woff
       ├── img
       │   ├── login.jpg
       │   └── logo.png
       └── js
           ├── app.js.gz
           ├── chunk-16054821.js.gz
           ├── chunk-2d0b99b3.js.gz
           ├── chunk-2d0df087.js.gz
           ├── chunk-6424e903.js.gz
           ├── chunk-6619cda0.js.gz
           ├── chunk-6c291fec.js.gz
           ├── chunk-87cbb83a.js.gz
           ├── chunk-d0aba2a0.js.gz
           └── chunk-vendors.js.gz
   ```

   > 上传服务器使用 `Xftp`就可以；

2. 配置静态资源文件：同上；

3. 配置gzip压缩；

   ```bash
   server {
       listen       8090;
       server_name  localhost;
       location / {
           root   /home/local/webview/patient;
           index  index.html;
   			gzip_static on; # 开启压缩
   			gzip_proxied expired no-cache no-store private auth;
       }
       error_page   500 502 503 504  /50x.html;
       location = /50x.html {
           root   /usr/share/nginx/html;
       }
   }
   
   ```

4. 重新加载nginx;

   ```bash
   systemctl raload nginx
   ```

   ::: warning

   **注意**：压缩的静态文件里面 需要把 index.html.gz 文件先进行解压为 index.html ;不然nginx会报  403 错误！！

   :::

## 测试

1. 访问你自己的web页面，查看请求响应的结果；

   ```
   ....
   Connection: keep-alive 
   Content-Encoding: gzip   # 表示压缩生效了
   Content-Length: 275
   ....
   ```

2. 对比开启压缩前和开启后的响应大小；

3. 可以F12打开控制面板，在设置中 勾选 `Use large request rows`选项，来查看浏览器请求的资源压缩前后的大小；




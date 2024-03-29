---
title: nginx部署vue项目
category: NGINX
date: 2021-05-02
---

> 本教程的环境是阿里云服务器，请确保你的服务器已经安装了`nginx`；

## 部署

1. 把自己的vue项目进行打包，

   ```bash
   npm run build
   ```

2. 打包后会生成一个`dist`文件夹，里面就是打包生成的文件。

3. 把打包的文件上传到自己的远程服务中。

4. 找到nginx的配置文件，我的路径：/etc/nginx/conf.d/default.conf。

5. 使用`vim default.conf`,进行如下配置。

   ```bash
   [root@iZbp156pkpio44mis76wmxZ conf.d]# cat default.conf 
   server {
       listen       8090; # nginx 服务启动监听的端口 默认为：80
       server_name  localhost;
   
       #charset koi8-r;
       #access_log  /var/log/nginx/host.access.log  main;
   
       location / {
           root   /home/local/tomcat/webapps_patient/patient; # 我的vue打包后的文件夹目录
           index  index.html index.htm;
       }
   
       location /api/ {
   	 	  rewrite ^/api/(.*) /$1 break; # 过滤掉接口前缀
      		proxy_pass  http://47.114.xxx.71:9091; # 后端接口地址，
       }
   
       #error_page  404              /404.html;
   
       # redirect server error pages to the static page /50x.html
       #
       error_page   500 502 503 504  /50x.html;
       location = /50x.html {
           root   /usr/share/nginx/html;
       }
   
       # proxy the PHP scripts to Apache listening on 127.0.0.1:80
       #
       #location ~ \.php$ {
       #    proxy_pass   http://127.0.0.1;
       #}
   
       # pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000
       #
       #location ~ \.php$ {
       #    root           html;
       #    fastcgi_pass   127.0.0.1:9000;
       #    fastcgi_index  index.php;
       #    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;
       #    include        fastcgi_params;
       #}
   
       # deny access to .htaccess files, if Apache's document root
       # concurs with nginx's one
       #
       #location ~ /\.ht {
       #    deny  all;
       #}
   }
   
   [root@iZbp156pkpio44mis76wmxZ conf.d]# 
   ```

## 部署中的问题；

> 由于自己第一次使用`nginx`来进行部署，我之前用的`tomcat`，过程中确实遇到了不少坑。

1. 不是把vue静态文件配置好就行了，如果只是访问一下静态文件，而不发网络请求的话，那么就没有什么关系了。

2. 配置完静态文件后，只是页面可以出来了，但是发网络请求(后端接口)就会出现跨域。以下解决；

   ```bash
    # 说明：/api/ 这个前缀是我在vue项目中加的，用来进行匹配，但是实际上后端的接口是没有这个前缀的，所以 用 rewrite 来进行过滤掉 /api 这个前缀。
    location /api/ {
   	 	  rewrite ^/api/(.*) /$1 break; # 过滤掉接口前缀
      		proxy_pass  http://47.114.xxx.71:9091; # 后端接口地址，
       }
   ```
3. 如果更改 nginx 服务的端口，记得 更新 安全组和开放端口防火墙；不然访问不到页面。[设置防火墙](https://www.cnblogs.com/ywnh/p/14225944.html)

## 启动

```bash
# 启动 nginx
service nginx start

# 关闭 nginx
service nginx stop

# 查看 nginx 状态
service nginx status
```


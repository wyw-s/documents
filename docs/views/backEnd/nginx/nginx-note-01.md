---
title: nginx部署vue项目
---

## 1、安装配置nginx(Aliyun linux)

> 概述： Nginx是一款轻量级的网页服务器、反向代理服务器。相较于Apache、lighttpd具有占有内存少，稳定性高等优势。**它最常的用途是提供反向代理服务。** 

## 2、安装；

1. Nginx的安装依赖于以下三个包，意思就是在安装Nginx之前首先必须安装一下的三个包，注意安装顺序如下：

   - SSL功能需要openssl库，直接通过yum安装: 

     ```bash
     yum install openssl
     ```

   -  gzip模块需要zlib库，直接通过yum安装: 

     ```shell
     yum install zlib
     ```

   - rewrite模块需要pcre库，直接通过yum安装:

     ```bash
      yum install pcre
     ```

2.  安装Nginx依赖项和Nginx 

   -  使用yum安装nginx需要包括Nginx的库，安装Nginx的库

     ```bash
     rpm -Uvh http://nginx.org/packages/centos/7/noarch/RPMS/nginx-release-centos-7-0.el7.ngx.noarch.rpm
     ```

   -  使用下面命令安装nginx

     ```bash
yum install nginx
     ```

   -  启动Nginx
     
       ```bash
       service nginx start
       
       Redirecting to /bin/systemctl start nginx.service
       ```
       
   -  测试；出现先面这样就说明成功了。
   
       ```
       [root@iZbp156pkpio44mis76wmxZ /]# curl localhost
       <!DOCTYPE html>
       <html>
       <head>
       <title>Welcome to nginx!</title>
       <style>
           body {
               width: 35em;
               margin: 0 auto;
               font-family: Tahoma, Verdana, Arial, sans-serif;
           }
       </style>
       </head>
       <body>
       <h1>Welcome to nginx!</h1>
       <p>If you see this page, the nginx web server is successfully installed and
       working. Further configuration is required.</p>
       
       <p>For online documentation and support please refer to
       <a href="http://nginx.org/">nginx.org</a>.<br/>
       Commercial support is available at
       <a href="http://nginx.com/">nginx.com</a>.</p>
       
       <p><em>Thank you for using nginx.</em></p>
       </body>
       </html>
       [root@iZbp156pkpio44mis76wmxZ /]#
       ```
   
   -  安装Nginx后，安装在了 /etc/nginx/目录下，你可以打开/etc/nginx/conf.d/default.conf查看里面的配置，包括监听端口，域名和nginx访问的根目录.
   
       ```bash
       [root@iZbp156pkpio44mis76wmxZ conf.d]# cat default.conf
       server {
           listen       80;
           server_name  localhost;
       
           #charset koi8-r;
           #access_log  /var/log/nginx/host.access.log  main;
       
           location / {
               root   /usr/share/nginx/html;
               index  index.html index.htm;
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

## 3、部署；

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

## 4、部署中的问题；

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

## 5、命令启动；

```bash
# 启动 nginx
service nginx start

# 关闭 nginx
service nginx stop

# 查看 nginx 状态
service nginx status
```


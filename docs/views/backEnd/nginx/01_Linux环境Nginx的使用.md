---
title: Linux环境Nginx的使用
category: NGINX
date: 2022/4/9
---

> Nginx是一款轻量级的网页服务器、反向代理服务器。相较于Apache、lighttpd具有占有内存少，稳定性高等优势。**它最常的用途是提供反向代理服务。** 

## 安装

1. `Nginx`的安装依赖于以下三个包，意思就是在安装`Nginx`之前首先必须安装一下的三个包，注意安装顺序如下：

   - SSL功能需要openssl库，直接通过yum安装: 

     ```bash
     yum install openssl
     ```

   - gzip模块需要zlib库，直接通过yum安装: 

     ```shell
     yum install zlib
     ```

   - rewrite模块需要pcre库，直接通过yum安装:

     ```bash
      yum install pcre
     ```

2. 安装Nginx依赖项和Nginx 

   - 使用yum安装nginx需要包括Nginx的库，安装Nginx的库

     ```bash
     rpm -Uvh http://nginx.org/packages/centos/7/noarch/RPMS/nginx-release-centos-7-0.el7.ngx.noarch.rpm
     ```

   - 使用下面命令安装nginx

     ```bash
     yum install nginx
     ```

## 启动

```bash
service nginx start
 
Redirecting to /bin/systemctl start nginx.service
```

## 测试

>出现先面这样就说明成功了。

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

安装`Nginx`后，安装位置在` /etc/nginx/`目录下，你可以打开`/etc/nginx/conf.d/default.conf`查看里面的配置，包括监听端口，域名和nginx访问的根目录；

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
```

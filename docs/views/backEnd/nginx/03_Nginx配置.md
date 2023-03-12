---
title: Nginx配置
category: NGINX
date: 2022/4/9
---

## 文件结构

```sh
...              #全局块

events {         #events块
   ...
}

http      #http块
{
    ...   #http全局块
    server        #server块
    { 
        ...       #server全局块
        location [PATTERN]   #location块
        {
            ...
        }
        location [PATTERN] 
        {
            ...
        }
    }
    server
    {
      ...
    }
    ...     #http全局块
}
```

- **全局块**：配置影响nginx全局的指令。一般有运行nginx服务器的用户组，nginx进程pid存放路径，日志存放路径，配置文件引入，允许生成worker process数等。
- **events块**：配置影响nginx服务器或与用户的网络连接。有每个进程的最大连接数，选取哪种事件驱动模型处理连接请求，是否允许同时接受多个网路连接，开启多个网络连接序列化等。
- **http块**：可以嵌套多个server，配置代理，缓存，日志定义等绝大多数功能和第三方模块的配置。如文件引入，mime-type定义，日志自定义，是否使用sendfile传输文件，连接超时时间，单连接请求数等。
- **server块**：配置虚拟主机的相关参数，一个http中可以有多个server。
- **location块**：配置请求的路由，以及各种页面的处理情况。

## 配置示例

```bash
#定义Nginx运行的用户和用户组
user www www;

#nginx进程数，建议设置为等于CPU总核心数。
worker_processes 8;

#全局错误日志定义类型，[ debug | info | notice | warn | error | crit ]
error_log ar/loginx/error.log info;

#进程文件
pid ar/runinx.pid;

#一个nginx进程打开的最多文件描述符数目，理论值应该是最多打开文件数（系统的值ulimit -n）与nginx进程数相除，但是nginx分配请求并不均匀，所以建议与ulimit -n的值保持一致。
worker_rlimit_nofile 65535;

#工作模式与连接数上限
events {
    #参考事件模型，use [ kqueue | rtsig | epoll | /dev/poll | select | poll ]; epoll模型是Linux 2.6以上版本内核中的高性能网络I/O模型，如果跑在FreeBSD上面，就用kqueue模型。
    use epoll;
    #单个进程最大连接数（最大连接数=连接数*进程数）
    worker_connections 65535;
}

#设定http服务器
http {
    include mime.types; #文件扩展名与文件类型映射表
    default_type application/octet-stream; #默认文件类型
    #charset utf-8; #默认编码
    server_names_hash_bucket_size 128; #服务器名字的hash表大小
    client_header_buffer_size 32k; #上传文件大小限制
    large_client_header_buffers 4 64k; #设定请求缓
    client_max_body_size 8m; #设定请求缓
    sendfile on; #开启高效文件传输模式，sendfile指令指定nginx是否调用sendfile函数来输出文件，对于普通应用设为 on，如果用来进行下载等应用磁盘IO重负载应用，可设置为off，以平衡磁盘与网络I/O处理速度，降低系统的负载。注意：如果图片显示不正常把这个改成off。
    autoindex on; #开启目录列表访问，合适下载服务器，默认关闭。
    tcp_nopush on; #防止网络阻塞
    tcp_nodelay on; #防止网络阻塞
    keepalive_timeout 120; #长连接超时时间，单位是秒

    #FastCGI相关参数是为了改善网站的性能：减少资源占用，提高访问速度。下面参数看字面意思都能理解。
    fastcgi_connect_timeout 300;
    fastcgi_send_timeout 300;
    fastcgi_read_timeout 300;
    fastcgi_buffer_size 64k;
    fastcgi_buffers 4 64k;
    fastcgi_busy_buffers_size 128k;
    fastcgi_temp_file_write_size 128k;

    #gzip模块设置
    gzip on; #开启gzip压缩输出
    gzip_min_length 1k; #最小压缩文件大小
    gzip_buffers 4 16k; #压缩缓冲区
    gzip_http_version 1.0; #压缩版本（默认1.1，前端如果是squid2.5请使用1.0）
    gzip_comp_level 2; #压缩等级
    gzip_types text/plain application/x-javascript text/css application/xml;
    #压缩类型，默认就已经包含textml，所以下面就不用再写了，写上去也不会有问题，但是会有一个warn。
    gzip_vary on;
    #limit_zone crawler $binary_remote_addr 10m; #开启限制IP连接数的时候需要使用

    upstream blog.ha97.com {
        #upstream的负载均衡，weight是权重，可以根据机器配置定义权重。weigth参数表示权值，权值越高被分配到的几率越大。
        server 192.168.80.121:80 weight=3;
        server 192.168.80.122:80 weight=2;
        server 192.168.80.123:80 weight=3;
    }

    #虚拟主机的配置
    server {
        #监听端口
        listen 80;
        #域名可以有多个，用空格隔开
        server_name www.ha97.com ha97.com;
        index index.html index.htm index.php;
        root /data/www/ha97;
        location ~ .*.(php|php5)?$ {
            fastcgi_pass 127.0.0.1:9000;
            fastcgi_index index.php;
            include fastcgi.conf;
            deny 127.0.0.1;  #拒绝的ip
           	allow 172.18.5.54; #允许的ip    
        }
        #图片缓存时间设置
        location ~ .*.(gif|jpg|jpeg|png|bmp|swf)$ { #  #请求的url过滤，正则匹配，~为区分大小写，~*为不区分大小写。
            expires 10d;
        }
        #JS和CSS缓存时间设置
        location ~ .*.(js|css)?$ {
            expires 1h;
        }
        #日志格式设定
        log_format access '$remote_addr - $remote_user [$time_local] "$request" '
        '$status $body_bytes_sent "$http_referer" '
        '"$http_user_agent" $http_x_forwarded_for';
        #定义本虚拟主机的访问日志
        access_log ar/loginx/ha97access.log access;

        #对 "/" 启用反向代理
        location / {
            proxy_pass http://127.0.0.1:88;
            proxy_redirect off;
            proxy_set_header X-Real-IP $remote_addr;
            #后端的Web服务器可以通过X-Forwarded-For获取用户真实IP
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            #以下是一些反向代理的配置，可选。
            proxy_set_header Host $host;
            client_max_body_size 10m; #允许客户端请求的最大单文件字节数
            client_body_buffer_size 128k; #缓冲区代理缓冲用户端请求的最大字节数，
            proxy_connect_timeout 90; #nginx跟后端服务器连接超时时间(代理连接超时)
            proxy_send_timeout 90; #后端服务器数据回传时间(代理发送超时)
            proxy_read_timeout 90; #连接成功后，后端服务器响应时间(代理接收超时)
            proxy_buffer_size 4k; #设置代理服务器（nginx）保存用户头信息的缓冲区大小
            proxy_buffers 4 32k; #proxy_buffers缓冲区，网页平均在32k以下的设置
            proxy_busy_buffers_size 64k; #高负荷下缓冲大小（proxy_buffers*2）
            proxy_temp_file_write_size 64k;
            #设定缓存文件夹大小，大于这个值，将从upstream服务器传
        }

        #设定查看Nginx状态的地址
        location /NginxStatus {
            stub_status on;
            access_log on;
            auth_basic "NginxStatus";
            auth_basic_user_file confpasswd;
            #htpasswd文件的内容可以用apache提供的htpasswd工具来产生。
        }

        #本地动静分离反向代理配置
        #所有jsp的页面均交由tomcat或resin处理
        location ~ .(jsp|jspx|do)?$ {
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_pass http://127.0.0.1:8080;
        }
        #所有静态文件由nginx直接读取不经过tomcat或resin
        location ~ .*.(htm|html|gif|jpg|jpeg|png|bmp|swf|ioc|rar|zip|txt|flv|mid|doc|ppt|pdf|xls|mp3|wma)$
         {
            expires 15d;
        }
        location ~ .*.(js|css)?$
         {
            expires 1h;
        }
    }
}
```

## 配置说明

### location

> 位置可以由`前缀字符串`或`正则表达式`定义。正则表达式由前面的“ `~*`”修饰符(不区分大小写的匹配)或“ `~`”修饰符(区分大小写的匹配)指定。为了找到与给定请求匹配的位置，nginx 首先检查使用前缀字符串定义的位置(前缀位置)。其中，选择并记住具有最长匹配前缀的位置。然后按照在配置文件中出现的顺序检查正则表达式。正则表达式的搜索在第一个匹配项上终止，并使用相应的配置。如果未找到与正则表达式匹配的内容，则使用前面记住的前缀位置的配置。

语法：

```bash
location [ = | ~ | ~* | ^~ ] uri { ... }
```

|  命令  |                             作用                             |
| :----: | :----------------------------------------------------------: |
|   ~    |               表示执行一个正则匹配，区分大小写               |
|   ~*   |              表示执行一个正则匹配，不区分大小写              |
|   ^~   | 表示普通字符匹配，如果该选项匹配，只匹配该选项，不匹配其他。一般用来匹配目录 |
|   =    |  进行普通字符精确匹配，如果找到完全匹配的内容，搜索将终止。  |
|   @    |          定义一个命名的location，使用在内部定向时；          |
| 无前缀 |                        用于普通字符串                        |

::: info

`~` 和`~*` 用于正则表达式，其他前缀和无任何前缀都用于普通字符串。正则表达式会根据匹配顺序，匹配到第一个正则表达式后停止搜索。普通字符串匹配则无视顺序，只会选择最精确的匹配。

:::

### 匹配优先级

nginx有两层指令来匹配请求 URI 。第一个层次是 server 指令，它通过域名、ip 和端口来做第一层级匹配，当找到匹配的 server 后就进入此 server 的 location 匹配。

**location 的匹配并不完全按照其在配置文件中出现的顺序来匹配，请求URI 会按如下规则进行匹配：**

1. 先精准匹配 = ，精准匹配成功则会立即停止其他类型匹配；
2. 没有精准匹配成功时，进行前缀匹配。先查找带有 ^~ 的前缀匹配，带有 ^~ 的前缀匹配成功则立即停止其他类型匹配，普通前缀匹配（不带参数 ^~ ）成功则会暂存，继续查找正则匹配；
3. = 和 ^~ 均未匹配成功前提下，查找正则匹配 ~ 和 ~* 。当同时有多个正则匹配时，按其在配置文件中出现的先后顺序优先匹配，命中则立即停止其他类型匹配；
4. 所有正则匹配均未成功时，返回步骤 2 中暂存的普通前缀匹配（不带参数 ^~ ）结果

以上规则简单总结就是优先级从高到低依次为（**序号越小优先级越高**）：

```bash
location =    # 精准匹配
location ^~   # 带参前缀匹配
location ~    # 正则匹配（区分大小写）
location ~*   # 正则匹配（不区分大小写）
location /a   # 普通前缀匹配，优先级低于带参数前缀匹配。
location /    # 任何没有匹配成功的，都会匹配这里处理
```

### last 和 break

- last 和 break 当出现在location 之外时，两者的作用是一致的没有任何差异

- last 和 break 当出现在location 内部时：

  | 关键字 | 作用                                                         |
  | ------ | ------------------------------------------------------------ |
  | last   | 使用了last 指令，rewrite 后会跳出location 作用域，重新开始再走一次刚才的行为 |
  | break  | 使用了break 指令，rewrite后不会跳出location 作用域，它的生命也在这个location中终结 |

  




---
title: tomcat部署web应用
---

## `tomcat`部署`web`应用

> 说明：
>
> - 本项目部署的是vue打包好的静态资源文件；
> - 我的系统是**阿里云liunx**服务器；
> - 请确保你已经安装好tomcat；**传送门**
> - 准备好你打包好的静态资源；

## 1、上传

- 把你自己打包好的vue静态资源上传到你的服务器上；可以使用`xftp`工具上传；
- 把你上传的文件移动到`tomcat`安装目录的`webapps`文件下;我的文件目录如下：

```shell
[root@iZbp156pkpio44mis76wmxZ tomcat]# ll
total 168
drwxr-x--- 2 root root  4096 Jul  6  2020 bin
-rw-r----- 1 root root 19539 Mar 14  2019 BUILDING.txt
drwx------ 4 root root  4096 Dec 27 14:36 conf
-rw-r----- 1 root root  6090 Mar 14  2019 CONTRIBUTING.md
drwxr-x--- 2 root root  4096 Jul  6  2020 lib
-rw-r----- 1 root root 57092 Mar 14  2019 LICENSE
drwxr-x--- 2 root root 20480 Jan  9 09:16 logs
-rw-r----- 1 root root  1726 Mar 14  2019 NOTICE
-rw-r----- 1 root root  3255 Mar 14  2019 README.md
-rw-r----- 1 root root  7142 Mar 14  2019 RELEASE-NOTES
-rw-r----- 1 root root 16262 Mar 14  2019 RUNNING.txt
drwxr-x--- 2 root root  4096 Jul  6  2020 temp
drwxr-x--- 4 root root  4096 Dec 20 17:20 webapps
drwxr-x--- 4 root root  4096 Dec 20 16:39 work
[root@iZbp156pkpio44mis76wmxZ tomcat]# cd webapps
# 你的webapps文件夹下的文件应该比我多，其它的都可以删除掉了，留一个 ROOT 文件即可；hero为我的web文件夹
[root@iZbp156pkpio44mis76wmxZ webapps]# ls
hero  ROOT
[root@iZbp156pkpio44mis76wmxZ webapps]# ll
total 8
drwxr-xr-x 3 root root 4096 Dec 19 16:51 hero # 我的web应用
drwxr-xr-x 3 root root 4096 Jul 14 22:22 ROOT
[root@iZbp156pkpio44mis76wmxZ webapps]# 
```

## 2、访问

上传完成后，在你的`shell`中输入以下命令。

> 注意：
>
> 1. tomcat启动时默认端口号为8080；
> 2. 你出现的html页面可能和我的不一样，因为我的是部署后的web项目；

```shell
# cd 到tomcat的bin文件夹下，
# 关闭 tomcat 服务；
[root@iZbp156pkpio44mis76wmxZ bin]# ./shutdown.sh 
Using CATALINA_BASE:   /home/local/tomcat
Using CATALINA_HOME:   /home/local/tomcat
Using CATALINA_TMPDIR: /home/local/tomcat/temp
Using JRE_HOME:        /home/local/JDK/jdk1.8.0_251
Using CLASSPATH:       /home/local/tomcat/bin/bootstrap.jar:/home/local/tomcat/bin/tomcat-juli.jar
# 启动tomcat 服务；
[root@iZbp156pkpio44mis76wmxZ bin]# ./startup.sh 
Using CATALINA_BASE:   /home/local/tomcat
Using CATALINA_HOME:   /home/local/tomcat
Using CATALINA_TMPDIR: /home/local/tomcat/temp
Using JRE_HOME:        /home/local/JDK/jdk1.8.0_251
Using CLASSPATH:       /home/local/tomcat/bin/bootstrap.jar:/home/local/tomcat/bin/tomcat-juli.jar
Tomcat started.
[root@iZbp156pkpio44mis76wmxZ bin]#
# 测试
[root@iZbp156pkpio44mis76wmxZ bin]# curl localhost:8080
<!DOCTYPE html><html lang=en><head><meta charset=utf-8><meta http-equiv=X-UA-Compatible content="IE=edge"><meta name=viewport content="width=device-width,initial-scale=1"><link rel=icon href=/favicon.ico><title>后台管理</title><link href=/assets/css/chunk-218ae17c.51727cbd.css rel=prefetch><link href=/assets/css/chunk-355eb542.76446819.css rel=prefetch><link href=/assets/css/chunk-586e3666.b513479d.css rel=prefetch><link href=/assets/css/chunk-e5a2ff66.7248c2ef.css rel=prefetch><link href=/assets/js/chunk-218ae17c.4c78cffd.js rel=prefetch><link href=/assets/js/chunk-355eb542.cde109b1.js rel=prefetch><link href=/assets/js/chunk-586e3666.b2a6a25e.js rel=prefetch><link href=/assets/js/chunk-e5a2ff66.7eebb07b.js rel=prefetch><link href=/assets/css/app.93ebdc27.css rel=preload as=style><link href=/assets/css/chunk-vendors.e2a05c09.css rel=preload as=style><link href=/assets/js/app.a747b461.js rel=preload as=script><link href=/assets/js/chunk-vendors.f4f8309a.js rel=preload as=script><link href=/assets/css/chunk-vendors.e2a05c09.css rel=stylesheet><link href=/assets/css/app.93ebdc27.css rel=stylesheet></head><body><noscript><strong>We're sorry but 后台管理 doesn't work properly without JavaScript enabled. Please enable it to continue.</strong></noscript><div id=app></div><script src=/assets/js/chunk-vendors.f4f8309a.js></script><script src=/assets/js/app.a747b461.js></script></body></html>[root@iZbp156pkpio44mis76wmxZ bin]# 

```

> 但是你会发现页面不是自己的web应用，而是tomcat的默认页面；
>
> 注意：这时访问的url应该是`curl localhost:8080/webappName/`

## 3、问题；

### 3-1、空白页面；

> 当你怀着激动的心情想要看到自己的页面时：但是它从原先的默认页面变成了空白页(有些人可能会出现这种情况)

这个时候你`F12`查看，发现加载的静态资源都是`404`一片红。在你的vue.config.js中设置 publicPath；[传送门](https://www.cnblogs.com/ywnh/p/14256851.html)

```js
// vue.config.js

module.exports = {
  // 解决部署后访问空白页的问题；
  publicPath: '/webappName/', // !!!这里的名称应该和你的webapps文件夹下，你的web应用的文件名称一样。
  // 输出文件目录 默认为: dist
  outputDir: 'dist',
  // 放置打包生成的静态资源 (js、css、img、fonts) 的目录。该目录相对于 outputDir 。
  assetsDir: 'assets',
}

```

这个时候你再次访问你的地址： `curl localhost:8080/webappName/`页面成功加载；

### 3-2、本地浏览器无法访问自己部署的远程服务器的web页面；

> 当你在服务器上，操作完以上所有的事情后，发现在本地浏览器无法访问，而在服务器上是可以的；

1. 正确访问的url地址：http://ip:port/myappName/;
2. 远程服务器安全组没有配置 8080端口；
3. 远程服务器防火墙没有开放8080端口；[传送门](https://www.cnblogs.com/ywnh/p/14225944.html)

以上三条解决完后，关闭并从新启动`tomcat`，访问成功，

恭喜你部署成功！！；

> 这里提醒一下，

### 3-3、无web后缀访问web页面；

> 部署成功后你会发现，自己的web页面要在后面加上一个 web应用名字(myappName)才能访问，但是淘宝、京东就不需要 ；

1.  更改tomact启动的默认文件夹，我的另外一篇说明；

2. cd 到你的tomcat文件夹里面的conf文件夹下；

3. 打开 server.xml 文件；

   - 内容太多一些自有注释都已删除，直接看最后！！。

   ```xml
   vim server.xml
   
   <?xml version="1.0" encoding="UTF-8"?>
   <Server port="8005" shutdown="SHUTDOWN">
     <Service name="Catalina">
       <Connector port="8080" protocol="HTTP/1.1"
                  connectionTimeout="20000"
                  redirectPort="8443" />
       <Engine name="Catalina" defaultHost="localhost">
         <Realm className="org.apache.catalina.realm.LockOutRealm">
           <!-- This Realm uses the UserDatabase configured in the global JNDI
                resources under the key "UserDatabase".  Any edits
                that are performed against this UserDatabase are immediately
                available for use by the Realm.  -->
           <Realm className="org.apache.catalina.realm.UserDatabaseRealm"
                  resourceName="UserDatabase"/>
         </Realm>
         <Host name="localhost"  appBase="webapps"
               unpackWARs="true" autoDeploy="true">
           <!-- Access log processes all example.
                Documentation at: /docs/config/valve.html
                Note: The pattern used is equivalent to using pattern="common" -->
           <Valve className="org.apache.catalina.valves.AccessLogValve" directory="logs"
                  prefix="localhost_access_log" suffix=".txt"
                  pattern="%h %l %u %t &quot;%r&quot; %s %b" />
                  
   					<Context path="" docBase="hero" debug="0" reloadable="true" /> // 此处是我添加的
   					
         </Host>
       </Engine>
     </Service>
   </Server>
   
   ```

   > 说明：
   >
   > 1、path：是你的文件项目路径，
   >
   > ​	1、如果为空则访问的url：http:xxxxx:8080；
   >
   > ​	2、不为空并且设置为path="test"则访问的url：http:xxxxx:8080/test/  。和我们的初衷不符。另外一种作用[传送门](https://www.cnblogs.com/codetime/p/5325509.html)
   >
   > 2、docBase：为你的项目名和你的webapps文件夹下的web文件夹对应；

4. 浏览器访问：`http://ip:8080`大功告成！！

### 3-4、不加端口访问；

> 说明：浏览网页服务默认的端口号都是80，可以不加端口访问，如果使用其他端口访问时需要明确指定，所以我们要加8080。

1. **方法一**：我们可以修改 server.xml 文件；

   ```xml
   vim server.xml
   
   <?xml version="1.0" encoding="UTF-8"?>
   <Server port="8005" shutdown="SHUTDOWN">
     <Service name="Catalina">
     // 在这里把 port 改为 80
       <Connector port="80" protocol="HTTP/1.1"
                  connectionTimeout="20000"
                  redirectPort="8443" />
       <Engine name="Catalina" defaultHost="localhost">
         <Realm className="org.apache.catalina.realm.LockOutRealm">
           <!-- This Realm uses the UserDatabase configured in the global JNDI
                resources under the key "UserDatabase".  Any edits
                that are performed against this UserDatabase are immediately
                available for use by the Realm.  -->
           <Realm className="org.apache.catalina.realm.UserDatabaseRealm"
                  resourceName="UserDatabase"/>
         </Realm>
         <Host name="localhost"  appBase="webapps"
               unpackWARs="true" autoDeploy="true">
           <!-- Access log processes all example.
                Documentation at: /docs/config/valve.html
                Note: The pattern used is equivalent to using pattern="common" -->
           <Valve className="org.apache.catalina.valves.AccessLogValve" directory="logs"
                  prefix="localhost_access_log" suffix=".txt"
                  pattern="%h %l %u %t &quot;%r&quot; %s %b" />
                  
   					<Context path="" docBase="hero" debug="0" reloadable="true" /> // 此处是我添加的
   					
         </Host>
       </Engine>
     </Service>
   </Server>
   
   ```

2. 配置安全组和及开放防火墙80端口；

3. 浏览器访问：`http://ip`大功告成！！

4. **方法二**；在不修改端口为 80 的情况下；执行以下命令；

   ```shell
   # 将域名默认的80端口映射到8080
   [root@iZbp156pkpio44mis76wmxZ bin]# iptables -t nat -A PREROUTING -p tcp --dport 80 -j REDIRECT --to-port 8080
   # 查看当前80端口的转发规则:
   [root@iZbp156pkpio44mis76wmxZ bin]# iptables -t nat -L -n | grep 80
   REDIRECT   tcp  --  0.0.0.0/0            0.0.0.0/0            tcp dpt:80 redir ports 8080
   # 删除当前80端口转发到8080端口的转发规则: 可以关闭先关闭tomcat的服务；
   iptables -t nat -D PREROUTING -p tcp --dport 8080 -j REDIRECT --to-port 80
   ```

   > 注意：这种方式会在服务器重启后失效；
   
5. 浏览器访问：`http://ip`大功告成！！

> 建议单独开启8080端口或80端口，不建议直接关闭防火墙；
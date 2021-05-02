---
title: tomcat部署多个项目
---

## `tomcat`部署多个`web`项目

> 说明：自己业余写了两个vue项目，希望可以都部署到阿里云服务器上。
>
> 1、vue打包好的静态资源文件。
>
> 2、本人使用的是阿里云服务器 liunx系统；
>
> 3、请确保你已安装好`tomcat`,[传送门](https://www.cnblogs.com/ywnh/p/14257537.html)

## 1、方式一：同一个端口访问不同项目；

> 在我的其它文章中有部署单个web项目的操作说明，这里就不再介绍只有一个项目的部署情况；[传送门](https://www.cnblogs.com/ywnh/p/14256867.html)

1. `cd` 到你的`tomcat`目录下;

2. 把你打包好的vue静态文件，上传至服务器并移动到你的 `webapps`文件夹中；

   ```shell
   [root@iZbp156pkpio44mis76wmxZ webapps]# ll
   total 12
   drwxr-xr-x 3 root root 4096 Jan  9 22:36 hero
   drwxr-xr-x 3 root root 4096 Jan 10 16:17 patient # 我的第二个项目
   drwxr-xr-x 3 root root 4096 Jan  9 19:57 ROOT
   [root@iZbp156pkpio44mis76wmxZ webapps]# 
   ```

3. 修改`cong`文件夹下的`server.xml`文件；

   - **代码内容较多，多余注释都已删除**；

   ```xml
   [root@iZbp156pkpio44mis76wmxZ conf]# cat server.xml 
   <?xml version="1.0" encoding="UTF-8"?>
   <Server port="8005" shutdown="SHUTDOWN">
       <Listener className="org.apache.catalina.startup.VersionLoggerListener" />
       <Listener className="org.apache.catalina.core.AprLifecycleListener" SSLEngine="on" />
       <Listener className="org.apache.catalina.core.JreMemoryLeakPreventionListener" />
       <Listener className="org.apache.catalina.mbeans.GlobalResourcesLifecycleListener" />
       <Listener className="org.apache.catalina.core.ThreadLocalLeakPreventionListener" />
       <GlobalNamingResources>
           <Resource name="UserDatabase" auth="Container"
                     type="org.apache.catalina.UserDatabase"
                     description="User database that can be updated and saved"
                     factory="org.apache.catalina.users.MemoryUserDatabaseFactory"
                     pathname="conf/tomcat-users.xml" />
       </GlobalNamingResources>
       <Service name="Catalina">
           <Connector port="80" protocol="HTTP/1.1"
                      connectionTimeout="20000"
                      redirectPort="8443" />
           <Connector port="8009" protocol="AJP/1.3" redirectPort="8443" />
           <Engine name="Catalina" defaultHost="localhost">
               <Realm className="org.apache.catalina.realm.LockOutRealm">
                   <Realm className="org.apache.catalina.realm.UserDatabaseRealm"
                          resourceName="UserDatabase"/>
               </Realm>
   
               <Host name="localhost"  appBase="webapps"
                     unpackWARs="true" autoDeploy="true">
                   <Valve className="org.apache.catalina.valves.AccessLogValve" directory="logs"
                          prefix="localhost_access_log" suffix=".txt"
                          pattern="%h %l %u %t &quot;%r&quot; %s %b" />
                  <!--这个是我的第一个web项目也是我的默认web项目-->
                   <Context path="" docBase="hero" debug="0" reloadable="true" />
                 <!--我的第二个项目 访问时要在url后加上test-->
   					 <Context path="test" docBase="patient" debug="0" reloadable="true" />
               </Host>
           </Engine>
       </Service>
   </Server>
   [root@iZbp156pkpio44mis76wmxZ conf]# 
   
   ```

4. 关闭并重启tomcat；

5. 测试访问；如果返回html页面就说明你部署成功了。浏览器访问：`http://ip:port/test/`

   ```shell
   [root@iZbp156pkpio44mis76wmxZ webapps]# curl localhost/test/
   <!DOCTYPE html>
   <html lang="en">
     <head>
       <meta charset="utf-8">
       <meta http-equiv="X-UA-Compatible" content="IE=edge">
       <meta name="viewport" content="width=device-width,initial-scale=1.0">
       <link rel="icon" href="favicon.ico">
       <title>百草堂</title>
     <link href="static/js/0.js" rel="prefetch"><link href="static/js/1.js" rel="prefetch"><link href="static/js/2.js" rel="prefetch"><link href="static/js/3.js" rel="prefetch"><link href="static/js/4.js" rel="prefetch"><link href="static/js/5.js" rel="prefetch"><link href="static/js/6.js" rel="prefetch"><link href="static/js/7.js" rel="prefetch"><link href="static/js/8.js" rel="prefetch"><link href="static/js/app.js" rel="preload" as="script"><link href="static/js/chunk-vendors.js" rel="preload" as="script"></head>
     <body>
       <noscript>
         <strong>We're sorry but patient doesn't work properly without JavaScript enabled. Please enable it to continue.</strong>
       </noscript>
       <div id="app"></div>
       <!-- built files will be auto injected -->
     <script type="text/javascript" src="static/js/chunk-vendors.js"></script><script type="text/javascript" src="static/js/app.js"></script></body>
   </html>
   [root@iZbp156pkpio44mis76wmxZ webapps]# 
   
   ```

   > 注意：这种只是让你可以访问到页面而已，你可能会遇到**接口跨域**情况，这个需要和后端同学沟通；

## 2、方法二：不同端口访问不同的项目；

> 说明：大多数时候我们的web项目是在不同的域名或端口下的；也就是一个端口对应一个web项目；

1. `cd` 到你的`tomcat`目录下;

2. 复制`webapps`文件夹，粘贴到当前文件夹下，示例：

   ```shell
   [root@iZbp156pkpio44mis76wmxZ tomcat]# ll
   total 168
   drwxr-x--- 2 root root  4096 Jul  6  2020 bin
   -rw-r----- 1 root root 19539 Mar 14  2019 BUILDING.txt
   drwx------ 4 root root  4096 Jan  9 21:18 conf
   -rw-r----- 1 root root  6090 Mar 14  2019 CONTRIBUTING.md
   drwxr-x--- 2 root root  4096 Jul  6  2020 lib
   -rw-r----- 1 root root 57092 Mar 14  2019 LICENSE
   drwxr-x--- 2 root root 20480 Jan 10 00:03 logs
   -rw-r----- 1 root root  1726 Mar 14  2019 NOTICE
   -rw-r----- 1 root root  3255 Mar 14  2019 README.md
   -rw-r----- 1 root root  7142 Mar 14  2019 RELEASE-NOTES
   -rw-r----- 1 root root 16262 Mar 14  2019 RUNNING.txt
   drwxr-x--- 2 root root  4096 Jul  6  2020 temp
   drwxr-x--- 4 root root  4096 Jan  9 19:57 webapps
   drwxr-xr-x 4 root root  4096 Dec 27 15:09 webapps_patient # 我复制的webapps文件夹并重命名为webapps_patient
   drwxr-x--- 4 root root  4096 Dec 20 16:39 work
   [root@iZbp156pkpio44mis76wmxZ tomcat]# 
   
   ```

3. 把你打包好的vue静态文件，上传至服务器并移动到你复制好的 `webapps_patient`文件夹中；

4. 修改`cong`文件夹下的`server.xml`文件；

   - **代码内容较多，多余注释都已删除**；

   ```xml
   [root@iZbp156pkpio44mis76wmxZ conf]# cat server.xml 
   <?xml version="1.0" encoding="UTF-8"?>
   <Server port="8005" shutdown="SHUTDOWN">
       <Listener className="org.apache.catalina.startup.VersionLoggerListener" />
       <Listener className="org.apache.catalina.core.AprLifecycleListener" SSLEngine="on" />
       <Listener className="org.apache.catalina.core.JreMemoryLeakPreventionListener" />
       <Listener className="org.apache.catalina.mbeans.GlobalResourcesLifecycleListener" />
       <Listener className="org.apache.catalina.core.ThreadLocalLeakPreventionListener" />
       <GlobalNamingResources>
           <Resource name="UserDatabase" auth="Container"
                     type="org.apache.catalina.UserDatabase"
                     description="User database that can be updated and saved"
                     factory="org.apache.catalina.users.MemoryUserDatabaseFactory"
                     pathname="conf/tomcat-users.xml" />
       </GlobalNamingResources>
     <!--我的第一个项目-->
       <Service name="Catalina">
           <Connector port="80" protocol="HTTP/1.1"
                      connectionTimeout="20000"
                      redirectPort="8443" />
           <Connector port="8009" protocol="AJP/1.3" redirectPort="8443" />
           <Engine name="Catalina" defaultHost="localhost">
               <Realm className="org.apache.catalina.realm.LockOutRealm">
                   <Realm className="org.apache.catalina.realm.UserDatabaseRealm"
                          resourceName="UserDatabase"/>
               </Realm>
   
               <Host name="localhost"  appBase="webapps"
                     unpackWARs="true" autoDeploy="true">
                   <Valve className="org.apache.catalina.valves.AccessLogValve" directory="logs"
                          prefix="localhost_access_log" suffix=".txt"
                          pattern="%h %l %u %t &quot;%r&quot; %s %b" />
                   <Context path="" docBase="hero" debug="0" reloadable="true" />
               </Host>
           </Engine>
       </Service>
   
       <!--以下为我的第二个项目patient-->
       <Service name="Catalina_patient">
           <Connector port="8088" protocol="HTTP/1.1"
                      connectionTimeout="20000"
                      redirectPort="8443" />
           <Connector port="8099" protocol="AJP/1.3" redirectPort="8443" />
           <Engine name="Catalina_patient" defaultHost="localhost">
               <Realm className="org.apache.catalina.realm.LockOutRealm">
                   <Realm className="org.apache.catalina.realm.UserDatabaseRealm"
                          resourceName="UserDatabase"/>
               </Realm>
               <Host name="localhost"  appBase="webapps_patient"
                     unpackWARs="true" autoDeploy="true">
                   <Valve className="org.apache.catalina.valves.AccessLogValve" directory="logs"
                          prefix="localhost_access_log" suffix=".txt"
                          pattern="%h %l %u %t &quot;%r&quot; %s %b" />
                 			<!--我的第二个项目-->
                   		<Context path="" docBase="patient" debug="0" reloadable="true" />
               </Host>
           </Engine>
       </Service>
   </Server>
   [root@iZbp156pkpio44mis76wmxZ conf]# 
   
   ```

5. 注意；

   ```xml
   <!-- 修改name的值为Catalina_patient-->
   <Service name="Catalina_patient">
     		<!-- 修改port的值为8088-->
           <Connector port="8088" protocol="HTTP/1.1"
                      connectionTimeout="20000"
                      redirectPort="8443" />
           <Connector port="8099" protocol="AJP/1.3" redirectPort="8443" />
     		<!-- 修改name的值为Catalina_patient-->
           <Engine name="Catalina_patient" defaultHost="localhost">
               <Realm className="org.apache.catalina.realm.LockOutRealm">
                   <Realm className="org.apache.catalina.realm.UserDatabaseRealm"
                          resourceName="UserDatabase"/>
               </Realm>
               <Host name="localhost"  appBase="webapps_patient"
                     unpackWARs="true" autoDeploy="true">
                   <Valve className="org.apache.catalina.valves.AccessLogValve" directory="logs"
                          prefix="localhost_access_log" suffix=".txt"
                          pattern="%h %l %u %t &quot;%r&quot; %s %b" />
                 			<!--我的第二个项目 path:影响访问时的路径可以为空或“/”；docBase：你的web应用的绝对路径也可以直接webname-->
                   		<Context path="" docBase="patient" debug="0" reloadable="true" />
               </Host>
           </Engine>
    </Service>
   ```

6. 配置安全组开放8088端口；

7. 单独开放服务器的8088端口；[传送门](https://www.cnblogs.com/ywnh/p/14225944.html)

8. 关闭并重启tomcat；

9. 测试访问,如果返回html页面就说明你部署成功了；浏览器地址: `http://ip:8088`

   ```shell
   [root@iZbp156pkpio44mis76wmxZ bin]# curl localhost:8088
   <!DOCTYPE html>
   <html lang="en">
     <head>
       <meta charset="utf-8">
       <meta http-equiv="X-UA-Compatible" content="IE=edge">
       <meta name="viewport" content="width=device-width,initial-scale=1.0">
       <link rel="icon" href="favicon.ico">
       <title>百草堂</title>
     <link href="static/js/0.js" rel="prefetch"><link href="static/js/1.js" rel="prefetch"><link href="static/js/2.js" rel="prefetch"><link href="static/js/3.js" rel="prefetch"><link href="static/js/4.js" rel="prefetch"><link href="static/js/5.js" rel="prefetch"><link href="static/js/6.js" rel="prefetch"><link href="static/js/7.js" rel="prefetch"><link href="static/js/8.js" rel="prefetch"><link href="static/js/app.js" rel="preload" as="script"><link href="static/js/chunk-vendors.js" rel="preload" as="script"></head>
     <body>
       <noscript>
         <strong>We're sorry but patient doesn't work properly without JavaScript enabled. Please enable it to continue.</strong>
       </noscript>
       <div id="app"></div>
       <!-- built files will be auto injected -->
     <script type="text/javascript" src="static/js/chunk-vendors.js"></script><script type="text/javascript" src="static/js/app.js"></script></body>
   </html>
   [root@iZbp156pkpio44mis76wmxZ bin]# 
   
   ```

   




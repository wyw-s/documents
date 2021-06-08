---
title: wind终端添加右键菜单
---

1. 检查常量;

   ```shell
   # 正常会打印 C:\Users\[username]
   echo %USERPROFILE%
   
   # 正常会打印 C:\Users\[username]\AppData\Local
   echo %LOCALAPPDATA%
   ```

2. 获取图标；主要是右键的时候可以显示一个图标而已，自己选择；

   - 新建文件夹；`Terminal`;

     ```sh
     # 如果你创建不了文件夹，那就自己手动创建一个；例：C:\Users\[username]\AppData\Local\Terminal
     mkdir "%USERPROFILE%\AppData\Local\Terminal"
     ```

   - [下载图标](https://gitee.com/Jioho/img/raw/master/wsl/terminal.ico)

   - 把图片放入你创建的文件中；

3. 新建文件，内容如下;

   ```shell
   @echo off
   
    reg.exe add "HKEY_CLASSES_ROOT\Directory\Background\shell\wt" /f /ve /d "Windows Terminal here"
    reg.exe add "HKEY_CLASSES_ROOT\Directory\Background\shell\wt" /f /v "Icon" /t REG_EXPAND_SZ /d "%USERPROFILE%\AppData\Local\Terminal\terminal.ico"
    reg.exe add "HKEY_CLASSES_ROOT\Directory\Background\shell\wt\command" /f /ve /t REG_EXPAND_SZ /d "%LOCALAPPDATA%\Microsoft\WindowsApps\wt.exe
    
    pause
   ```

   > 步骤一不打印时：
   >
   > 1. %USERPROFILE%：修改为：`C:\Users\[username]`;
   > 2. %LOCALAPPDATA%: 修改为：`C:\Users\[username]\AppData\Local\`

4. 保存文件，并修改文件名为：xx.bat

5. 双击执行文件；

6. 检查右键菜单；

7. 当前文件夹内启动终端定位到，文件夹位置；

   - 打开设置文件；
   - 修改配置信息；

   ```json
    .....
   "profiles": 
       {
           "defaults": {},
           "list": 
           [
               {
                   "commandline": "powershell.exe",
                   "guid": "{61c54bbd-c2c6-5271-96e7-009a87ff44bf}",
                   "hidden": false,
                   "name": "Windows PowerShell",
   					 "startingDirectory": null   // 添加此项
               },
   ......
   ```

8. 注册表位置：计算机\HKEY_CLASSES_ROOT\Directory\background\shell\wt

原文链接：

https://blog.csdn.net/Jioho_chen/article/details/101159291	

https://blog.csdn.net/willingtolove/article/details/109167629


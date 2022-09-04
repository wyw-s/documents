---
title: notepad++右键菜单
category: other
date: 2021-10-17 10:58:29
---

## `exe`安装方式

1. 下载 [传送门](https://notepad-plus.en.softonic.com/)
2. 一路点击下一步即完成安装。
3. 电脑桌面新建记事本，输入以下内容并保存。
    ```txt
      Windows Registry Editor Version 5.00
      
      [HKEY_CLASSES_ROOT\Directory\Shell\Open with Notepad++]
      
      [HKEY_CLASSES_ROOT\Directory\Shell\Open with Notepad++\command]
      
      @="\"D:\\Notepad++\\notepad++.exe\" \"%1\""
      ```
4. 修改文件扩展名`x.txt` 改为 `x.reg`。
5. 双击reg文件。
6. 注册成功后鼠标右键就有了。
    
## 绿色版安装方式

1. 电脑桌面新建记事本，输入以下内容并保存。
    ```txt
    Windows Registry Editor Version 5.00

    [HKEY_CLASSES_ROOT\*\Shell\Open with Notepad++]
    @="Notepad++"
    "Icon"="D:\\Notepad++\\notepad++.exe,0"

    [HKEY_CLASSES_ROOT\*\Shell\Open with Notepad++\command]
    @="D:\\Notepad++\\notepad++.exe %1"
    ```
2. 修改文件扩展名`x.txt` 改为 `x.reg`。
3. 双击reg文件。
4. 注册成功后鼠标右键就有了。

::: info 
最后一行为你自己的安装路径，需要自行替换!!比如我的安装路径是：`D:\\Notepad++\\notepad++.exe`。
:::
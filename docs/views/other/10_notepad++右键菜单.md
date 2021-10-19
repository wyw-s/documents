---
title: notepad++右键菜单
category: other
date: 2021-10-17 10:58:29
---

1. 下载 [传送门](https://notepad-plus.en.softonic.com/)
2. 一路点击下一步即完成安装。
3. 鼠标右键菜单。
    - 电脑桌面新建记事本，输入以下内容并保存。
      ```txt
      Windows Registry Editor Version 5.00
      
      [HKEY_CLASSES_ROOT\Directory\Shell\Open with Notepad++]
      
      [HKEY_CLASSES_ROOT\Directory\Shell\Open with Notepad++\command]
      
      @="\"D:\\Notepad++\\notepad++.exe\" \"%1\""
      ```
    - 修改文件扩展名`x.txt` 改为 `x.reg`。
    - 双击reg文件。
    - 注册成功后鼠标右键就有了。
    

::: info 
最后一行为你自己的安装路径，需要自行替换!!
:::
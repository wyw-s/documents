---
title: 博客园主题
category: other
date: 2021-05-02
---

## 博客主题

> 无意中看到别人的主题是那么的好看，炸一看自己的主题好丑，所以就找了下，在这里记录下来。

1. 下载`githup`源码，[传送门](https://github.com/BNDong/Cnblogs-Theme-SimpleMemory)。

   ```bash
   git clone https://github.com/BNDong/Cnblogs-Theme-SimpleMemory.git
   ```

2. 登录博客园进入设置页面，

3. 设置页面定制CSS代码。

   - 在克隆下来的项目中根据路径找到==base.min.css==，路径：`/src/style/base.min.css` 
   - 拷贝此文件代码至**页面定制CSS代码**文本框处。
   - 选中页面定制CSS代码文本框下面的禁用模板默认CSS。

4. 在侧边栏HTML代码中设置以下代码：

   ```html
   <script type="text/javascript">
       window.cnblogsConfig = {
           GhVersions    : 'v1.3.3', // 版本
           blogUser      : "userName", // 用户名
           blogAvatar    : "https://xxxx.png", // 用户头像
           blogStartDate : "2016-11-17", // 入园时间，年-月-日。入园时间查看方法：鼠标停留园龄时间上，会显示入园时间
       }
   </script>
   <script src="https://cdn.jsdelivr.net/gh/BNDong/Cnblogs-Theme-SimpleMemory@v1.3.3/src/script/simpleMemory.min.js" defer></script>
   ```
   
   >  注意：引入的文件 simpleMemory.min.js 版本需要与配置 window.cnblogsConfig.GhVersions 一致！
   
5. 我的设置html设置：

   ```html
   <script type="text/javascript">
       window.cnblogsConfig = {
           GhVersions    : 'v1.3.3', // 版本
           blogUser      : "棉花糖", // 用户名
           blogAvatar    : "https://pic.cnblogs.com/face/1943640/20200220233654.png", // 用户头像
           blogStartDate : "2020-02-15", // 入园时间，年-月-日。入园时间查看方法：鼠标停留园龄时间上，会显示入园时间
          essaySuffix: {
                aboutHtml: "千里之行始于足下",
          },
          essayCodeHighlightingType: "highlightjs",
          essayCodeHighlighting: "an-old-hope",
          codeLineNumber: true,
          homeTopAnimation: {
                color   : 'random',
          },
          essayTopImg: [
         "https://images.cnblogs.com/cnblogs_com/ywnh/1651535/o_2101021010123572c8d948621b095a21f1c965fa514c.jpeg",
         "https://images.cnblogs.com/cnblogs_com/ywnh/1651535/o_210102102759QQ图片20170615224034.jpg",
         "https://images.cnblogs.com/cnblogs_com/ywnh/1651535/o_210102101045223c544afd087a6b995ac9bff1796173.jpeg",
         "https://images.cnblogs.com/cnblogs_com/ywnh/1651535/o_2101021042236c7f4475ac8380235d898d3e316aacd6.jpg"
       ],
       homeTopImg: [
         "https://images.cnblogs.com/cnblogs_com/ywnh/1651535/o_210102103036qw.jpg",
         "https://images.cnblogs.com/cnblogs_com/ywnh/1651535/o_210102103211582930f5da76f77b187c0df7.jpg",
         "https://images.cnblogs.com/cnblogs_com/ywnh/1651535/o_2101021034485841e26e9a1aa37b1d8b0d91.jpg",
         "https://images.cnblogs.com/cnblogs_com/ywnh/1651535/o_210102103619580b100d94e5cc414f7a5bd5.jpg",
         "https://images.cnblogs.com/cnblogs_com/ywnh/1651535/o_2101021042565c0689edaefaac39a434f34716f392aa.jpg"
       ],
       }
   </script>
   <script src="https://cdn.jsdelivr.net/gh/BNDong/Cnblogs-Theme-SimpleMemory@v1.3.3/src/script/simpleMemory.min.js" defer></script>
   ```

6. `1.0版本说明文档`https://bndong.github.io/Cnblogs-Theme-SimpleMemory/v1.0/#/

7. 主题开发者：[传送门](https://www.cnblogs.com/bndong/p/9132439.html)
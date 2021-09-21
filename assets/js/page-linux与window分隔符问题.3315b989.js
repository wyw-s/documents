(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{1010:function(s,t,a){"use strict";a.r(t);var n=a(1),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("blockquote",[n("p",[s._v("遇到这个问题还是由于前端使用nodejs压缩打包文件，然后上传到linux服务器上，本想着解压完成就完事了，结果没那么简单。")])]),s._v(" "),n("h2",{attrs:{id:"历史由来"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#历史由来"}},[s._v("#")]),s._v(" 历史由来：")]),s._v(" "),n("blockquote",[n("p",[s._v("Windows 用反斜杠（“\\”）的历史来自 DOS，而 DOS 的另一个传统是用斜杠（“/”）表示命令行参数，比如：\ncd %SystemDrive% dir /s /b shell32.dll。而在 UNIX 环境中，我们用减号（“-”）和双减号（“--”）表示命令行参数。 用斜杠表示命令行参数是兼容性原因。这个问题最初起源自 IBM。IBM 在最初加入 DOS 开发时贡献了大批工具，它们都是用斜杠处理命令行参数的。而这个传统源自于 DEC/IBM，比如当年的 VMS 就是用斜杠处理命令行参数，它的目录分隔符是美元符（“$”）。顺便说一句，这个传统也被部分地继承进了 DOS 和 Windows 体系，日文版的 Windows 就把反斜杠在屏幕上显示为“¥”，虽然实际上还是反斜杠。\n"),n("strong",[s._v("如今的 Windows 内核在处理路径时确实可以同时支持斜杠和反斜杠")]),s._v("。很多时候我们看到用斜杠时出错，是因为应用程序层面的原因。比如 cmd.exe 就不支持用斜杠表示路径，而PowerShell.exe 支持，也正因为这个原因，PowerShell 开始转而使用减号作为命令行参数的起始符。")])]),s._v(" "),n("h2",{attrs:{id:"问题由来"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#问题由来"}},[s._v("#")]),s._v(" "),n("strong",[s._v("问题由来:")])]),s._v(" "),n("p",[s._v("我使用的Nodejs的"),n("code",[s._v("jszip")]),s._v("第三方包，来压缩我的静态资源，文件确实可以压缩，也可以正常打开，一点问题没有。但是上传到服务器上的解压缩的时候就有问题了，见下图：")]),s._v(" "),n("p",[n("img",{attrs:{src:a(704),alt:"image-20210613234930301"}})]),s._v(" "),n("p",[n("img",{attrs:{src:a(705),alt:"image-20210613235038819"}})]),s._v(" "),n("p",[s._v("很显然路径出错了，瞬间懵逼了，不过当我尝试直接修改文件名的时候，也就是把"),n("code",[s._v("\\")]),s._v("修改为"),n("code",[s._v("/")]),s._v("，结果是正常的，文件夹会自动分层。这样问题就更加清楚了。")]),s._v(" "),n("h2",{attrs:{id:"解决方案"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#解决方案"}},[s._v("#")]),s._v(" "),n("strong",[s._v("解决方案：")])]),s._v(" "),n("blockquote",[n("p",[s._v("在我们进行压缩的时候直接把需要用到的文件路径中的"),n("code",[s._v("\\")]),s._v("替换为"),n("code",[s._v("/")]),s._v("就好了。")])]),s._v(" "),n("p",[n("strong",[s._v("nodeejs官方说明；")])]),s._v(" "),n("blockquote",[n("p",[s._v("The default operation of the "),n("code",[s._v("path")]),s._v(" module varies based on the operating system on which a Node.js application is running. Specifically, when running on a Windows operating system, the "),n("code",[s._v("path")]),s._v(" module will assume that Windows-style paths are being used.")])]),s._v(" "),n("p",[s._v("可以看到在Node下默认的路径是与操作系统保持一致的，因此出现了 "),n("code",[s._v("\\")]),s._v("。为了要获取到符合 "),n("code",[s._v("/")]),s._v(" 格式的路径，我们可以使用 "),n("code",[s._v("PATH")]),s._v(" 模块提供的 "),n("code",[s._v("path.sep")]),s._v(" "),n("a",{attrs:{href:"https://link.zhihu.com/?target=https%3A//nodejs.org/dist/latest-v12.x/docs/api/path.html%23path_path_sep",target:"_blank",rel:"noopener noreferrer"}},[s._v("接口"),n("OutboundLink")],1),s._v("进行字符串匹配截取，接口会根据系统环境的不同进行匹配截取。")]),s._v(" "),n("p",[s._v("例：")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# window")]),s._v("\nPS E:"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("documents"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" node\nWelcome to Node.js v12.20.0.\nType "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('".help"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("more")]),s._v(" information.\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'foo\\\\bar\\\\baz'")]),s._v(".split"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("path.sep"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'foo'")]),s._v(", "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'bar'")]),s._v(", "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'baz'")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# linux")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@iZbp156pkpio44mis76wmxZ documents"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# node")]),s._v("\nWelcome to Node.js v12.18.2.\nType "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('".help"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("more")]),s._v(" information.\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'foo/bar/baz'")]),s._v(".split"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("path.sep"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'foo'")]),s._v(", "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'bar'")]),s._v(", "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'baz'")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" \n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br")])]),n("h3",{attrs:{id:"参考链接"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#参考链接"}},[s._v("#")]),s._v(" 参考链接；")]),s._v(" "),n("p",[s._v("https://zhuanlan.zhihu.com/p/115746564")])])}),[],!1,null,null,null);t.default=e.exports},704:function(s,t,a){s.exports=a.p+"assets/img/image-20210613234930301.145605a7.png"},705:function(s,t,a){s.exports=a.p+"assets/img/image-20210613235038819.eae3ac8d.png"}}]);
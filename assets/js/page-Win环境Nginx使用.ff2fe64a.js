(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{920:function(s,a,n){"use strict";n.r(a);var t=n(1),e=Object(t.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"安装"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),n("ul",[n("li",[s._v("到官网下载Windows版本，下载地址：http://nginx.org/en/download.html")]),s._v(" "),n("li",[s._v("解压到磁盘任一目录。")]),s._v(" "),n("li",[s._v("修改配置文件：具体参考备注。")]),s._v(" "),n("li",[s._v("停止服务："),n("code",[s._v("nginx -s stop")])]),s._v(" "),n("li",[s._v("重新加载配置："),n("code",[s._v("nginx -s reload")])])]),s._v(" "),n("h2",{attrs:{id:"启动"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#启动"}},[s._v("#")]),s._v(" 启动：")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 直接双击`nginx.exe`，启动。")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# or")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 守护进程的方式启动")]),s._v("\n start nginx\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("h2",{attrs:{id:"关闭"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#关闭"}},[s._v("#")]),s._v(" 关闭：")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 快速停止nginx")]),s._v("\nnginx -s stop\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 完整有序的停止nginx，并保存相关信息。双击；通过等待工作进程来停止nginx进程 要完成当前请求的服务；")]),s._v("\nnginx -s quit\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("h2",{attrs:{id:"重新启动"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#重新启动"}},[s._v("#")]),s._v(" 重新启动：")]),s._v(" "),n("blockquote",[n("p",[s._v("在配置文件中所做的更改，在重新加载配置的命令之前不会应用。")])]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重新加载配置")]),s._v("\nnginx.exe -s reload\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("h2",{attrs:{id:"查看80端口是否被占用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#查看80端口是否被占用"}},[s._v("#")]),s._v(" 查看80端口是否被占用；")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("netstat")]),s._v(" -ano "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" findstr "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.0:80\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);
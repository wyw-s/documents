(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{1007:function(s,t,a){"use strict";a.r(t);var n=a(1),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"service与systemctl命令区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#service与systemctl命令区别"}},[s._v("#")]),s._v(" service与systemctl命令区别")]),s._v(" "),a("blockquote",[a("p",[s._v("从CentOS 7.x开始，CentOS开始使用systemd服务来代替daemon，原来管理系统启动和管理系统服务的相关命令全部由systemctl命令来代替。")])]),s._v(" "),a("h3",{attrs:{id:"_1、service命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、service命令"}},[s._v("#")]),s._v(" 1、service命令；")]),s._v(" "),a("blockquote",[a("p",[s._v("service命令是Redhat Linux兼容的发行版中用来控制系统服务的实用工具，它以启动、停止、重新启动和关闭系统服务，还可以显示所有系统服务的当前状态。")])]),s._v(" "),a("ol",[a("li",[s._v("语法：")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# command:  [start | stop |restart |reload |stauts]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" option "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" --status-all "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" service_name "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("command")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" --full-restart "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("ol",{attrs:{start:"2"}},[a("li",[a("p",[s._v("示例：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看帮助信息；")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@iZbp156pkpio44mis76wmxZ /"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# service -h")]),s._v("\nUsage: "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" option "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" --status-all "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" service_name "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("command")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" --full-restart "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看nginx服务状态")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@iZbp156pkpio44mis76wmxZ /"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# service nginx status")]),s._v("\nRedirecting to /bin/systemctl status nginx.service\n● nginx.service - nginx - high performance web server\n   Loaded: loaded "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("/usr/lib/systemd/system/nginx.service"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" disabled"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" vendor preset: disabled"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n   Active: active "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("running"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" since Tue "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2021")]),s._v("-04-20 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("21")]),s._v(":49:30 CST"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" day 1h ago\n     Docs: http://nginx.org/en/docs/\n  Process: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("17599")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ExecStart")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/sbin/nginx -c /etc/nginx/nginx.conf "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("code"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("exited, "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("status")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("/SUCCESS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n Main PID: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("17600")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("nginx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n   CGroup: /system.slice/nginx.service\n           ├─17600 nginx: master process /usr/sbin/nginx -c /etc/nginx/nginx.conf\n           └─17602 nginx: worker process\n\nApr "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("21")]),s._v(":49:30 iZbp156pkpio44mis76wmxZ systemd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(": Starting nginx - high performance web server"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\nApr "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("21")]),s._v(":49:30 iZbp156pkpio44mis76wmxZ systemd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(": Can't "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("open")]),s._v(" PID "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" /var/run/nginx.pid "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("yet?"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" after start: No such "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" or directory\nApr "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("21")]),s._v(":49:30 iZbp156pkpio44mis76wmxZ systemd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(": Started nginx - high performance web server.\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@iZbp156pkpio44mis76wmxZ /"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 使用 service 启动/重启/停止网络服务")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@iZbp156pkpio44mis76wmxZ /"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# service network restart")]),s._v("\nRestarting network "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("via systemctl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(":                        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("  OK  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@iZbp156pkpio44mis76wmxZ /"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# service network start")]),s._v("\nStarting network "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("via systemctl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(":                          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("  OK  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@iZbp156pkpio44mis76wmxZ /"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# service network stop")]),s._v("\nStopping network "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("via systemctl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(":  Connection reset by "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("47.114")]),s._v(".139.71 port "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),s._v("\n\nC:"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("Users"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("ASUS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("Desktop\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br")])]),a("blockquote",[a("p",[s._v("service network stop 后，网络服务停止，网卡关闭，ssh登录不上。")]),s._v(" "),a("p",[s._v("两种方式解决:")]),s._v(" "),a("ul",[a("li",[s._v("重启服务器，")]),s._v(" "),a("li",[s._v("操作台进入系统，执行service network start开启网络服务。")])])])]),s._v(" "),a("li",[a("p",[s._v("原理：service命令其实是去"),a("code",[s._v("/etc/init.d")]),s._v("目录下，去执行相关程；")]),s._v(" "),a("blockquote",[a("p",[a("strong",[s._v("注")]),s._v("：在contos7.x中已经用"),a("code",[s._v("systemctl")]),s._v("来代替"),a("code",[s._v("service")]),s._v(",所以不建议使用"),a("code",[s._v("service")])])])])]),s._v(" "),a("h3",{attrs:{id:"_2、systemctl-命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、systemctl-命令"}},[s._v("#")]),s._v(" 2、systemctl 命令")]),s._v(" "),a("blockquote",[a("p",[s._v("历史上，Linux 的启动一直采用init进程。systemd是Linux系统最新的初始化系统(init),作用是提高系统的启动速度，尽可能启动较少的进程，尽可能更多进程并发启动。")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("blockquote",[a("p",[s._v("这种方法有两个缺点：")]),s._v(" "),a("ul",[a("li",[s._v("一是启动时间长。init 进程是串行启动，只有前一个进程启动完，才会启动下一个进程。")]),s._v(" "),a("li",[s._v("二是启动脚本复杂。init 进程只是执行启动脚本，不管其他事情。脚本需要自己处理各种情况，这往往使得脚本变得很长")])]),s._v(" "),a("p",[s._v("Systemd 就是为了解决上面问题而诞生的。它的设计目标是，为系统的启动和管理提供一套完整的解决方案。根据 Linux 惯例，字母 d 是守护进程（daemon）的缩写。 Systemd 这个名字的含义，就是它要守护整个系统。使用了 Systemd，就不需要再用 init 了。Systemd 取代了 initd，成为系统的第一个进程（PID 等于 1），其他进程都是它的子进程。")])]),s._v(" "),a("h4",{attrs:{id:"_1、兼容service命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、兼容service命令"}},[s._v("#")]),s._v(" 1、兼容service命令")]),s._v(" "),a("blockquote",[a("p",[s._v("systemctl命令兼容了service,即systemctl也会去/etc/init.d目录下，查看，执行相关程序")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("systemctl redis start\nsystemctl redis stop\n# 开机自启动\nsystemctl enable redis\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h4",{attrs:{id:"_2、日常用法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、日常用法"}},[s._v("#")]),s._v(" 2、日常用法：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("systemctl  [start | stop |restart |reload |stauts] 服务名\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);
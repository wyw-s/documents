(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{1004:function(s,n,t){"use strict";t.r(n);var a=t(1),e=Object(a.a)({},(function(){var s=this,n=s.$createElement,t=s._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"linux软连接的作用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#linux软连接的作用"}},[s._v("#")]),s._v(" linux软连接的作用")]),s._v(" "),t("blockquote",[t("p",[s._v("介绍：")]),s._v(" "),t("ul",[t("li",[s._v("Linux软链接，类似于windows系统的快捷键。譬如你将windows系统的D盘中某一个文件夹放在桌面上当做快捷键。")]),s._v(" "),t("li",[s._v("平时在Linux机子上安装好一些工具之后我们就需要跑到那个源码安装的程序包里面执行启动命令，这样做比较麻烦，有没有直接在全局都通用的方法呢？也就是启动那些应用或者程序就像使用Linux自带的命令一样简单轻松而不必每次都跑到指定的源码目录中去执行。")]),s._v(" "),t("li",[s._v("在安装目录中找到你需要的启动指令，并将其通过软连接的方式链接到"),t("code",[s._v("/usr/local/bin")]),s._v("目录下。")])])]),s._v(" "),t("h3",{attrs:{id:"_1、软连接的创建"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、软连接的创建"}},[s._v("#")]),s._v(" 1、软连接的创建；")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("命令；"),t("code",[s._v("ln -s [源文件目录] [软连接名称]")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 表示把 /home/local/application/node-v12.18.2-linux-x64/bin/目录下的npm创建为软连接，名字为 npm")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ln")]),s._v(" -s /home/local/application/node-v12.18.2-linux-x64/bin/npm "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@iZbp156pkpio44mis76wmxZ /"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# npm -v")]),s._v("\n-bash: npm: "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("command")]),s._v(" not found  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 不能再全局使用")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@iZbp156pkpio44mis76wmxZ /"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cd usr/local/bin/")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@iZbp156pkpio44mis76wmxZ bin"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ls")]),s._v("\nnode  pm2\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@iZbp156pkpio44mis76wmxZ bin"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ln -s /home/local/application/node-v12.18.2-linux-x64/bin/npm npm")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@iZbp156pkpio44mis76wmxZ bin"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ls")]),s._v("\nnode  "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v("  pm2\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@iZbp156pkpio44mis76wmxZ bin"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# npm -v")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6.14")]),s._v(".5\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@iZbp156pkpio44mis76wmxZ bin"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cd /")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@iZbp156pkpio44mis76wmxZ /"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# npm -v")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6.14")]),s._v(".5 "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 可以再全局使用了")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@iZbp156pkpio44mis76wmxZ /"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ^C")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@iZbp156pkpio44mis76wmxZ /"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ")]),s._v("\n \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br")])])])]),s._v(" "),t("h3",{attrs:{id:"_2、软连接的删除"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2、软连接的删除"}},[s._v("#")]),s._v(" 2、软连接的删除；")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("命令：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -rf 【软链接地址】\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果是rm -rf test/ 那么原目录下的文件都会被删除！！！ ")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -rf "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#切记不要自动补全")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("blockquote",[t("p",[s._v("注意： "),t("strong",[s._v("软链接地址")]),s._v("最后不能含有“/”，当含有“/”时，删除的是软链接目标目录下的资源，而不是软链接本身。")])])])]),s._v(" "),t("h3",{attrs:{id:"_3、软连接的修改"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3、软连接的修改"}},[s._v("#")]),s._v(" 3、软连接的修改；")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("命令：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ln")]),s._v(" -snf 【新目标目录】 【软链接地址】\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("blockquote",[t("p",[s._v("这里修改是指修改软链接的目标目录")])])])]),s._v(" "),t("h3",{attrs:{id:"_4、扩展说明"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4、扩展说明"}},[s._v("#")]),s._v(" 4、扩展说明；")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("linux下/bin和/usr/bin和/usr/local/bin的区别 "),t("a",{attrs:{href:"https://blog.csdn.net/baidu_31788709/article/details/90679657",target:"_blank",rel:"noopener noreferrer"}},[s._v("阅读原文"),t("OutboundLink")],1)]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("/bin 是所有用户都可以访问并执行的可执行程序。包括超级用户及一般用户。\n/usr/bin 是系统安装时自带的一些可执行程序。即系统程序，轻易不要去动里面的东西，容易入坑。\n/usr/local/bin 是用户自行编译安装时默认的可执行程序的安装位置，这个不小心误删点什么，不会影响大局。\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])])])])])}),[],!1,null,null,null);n.default=e.exports}}]);
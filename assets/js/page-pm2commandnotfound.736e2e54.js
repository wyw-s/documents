(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{1084:function(s,n,t){"use strict";t.r(n);var a=t(1),e=Object(a.a)({},(function(){var s=this,n=s.$createElement,t=s._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"tmp-jenkins5751570293012104226-sh-line-8-pm2-command-not-found"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tmp-jenkins5751570293012104226-sh-line-8-pm2-command-not-found"}},[s._v("#")]),s._v(" "),t("code",[s._v("/tmp/jenkins5751570293012104226.sh: line 8: pm2: command not found")])]),s._v(" "),t("blockquote",[t("p",[s._v("使用jenkins部署的时候，原来好好的，但是今天突然就不好使了(我移动了pm2的安装目录)报如下错误；")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("heroList"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" $ /bin/sh -xe /tmp/jenkins1733537390543316955.sh\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("heroList"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" $ /bin/sh -xe /tmp/jenkins5751570293012104226.sh\n+ pm2 restart "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" -- run dev\n/tmp/jenkins5751570293012104226.sh: line "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v(": pm2: "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("command")]),s._v(" not found\nBuild step "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Execute shell'")]),s._v(" marked build as failure\nFinished: FAILURE\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("h3",{attrs:{id:"_1、原因分析"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、原因分析"}},[s._v("#")]),s._v(" 1、原因分析；")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("我首先想到的是，在系统中看pm2还可以使用不，但是我发现可以使用；")])]),s._v(" "),t("li",[t("p",[s._v("查看"),t("code",[s._v("/bin")]),s._v("目录下的软连接是否还可以使用；")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@iZbp156pkpio44mis76wmxZ /"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cd bin/")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@iZbp156pkpio44mis76wmxZ bin"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ls -l")]),s._v("\ntotal "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("317580")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("\n-rwxr-xr-x    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" root root      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("40720")]),s._v(" May "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2020")]),s._v(" plymouth\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看此处pm2所对应的安装目录是否是你的pm2的目录")]),s._v("\nlrwxrwxrwx    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" root root         "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("55")]),s._v(" Apr "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),s._v(":58 pm2 -"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /home/local/application/node-v12.18.2-linux-x64/bin/pm2 \n-rwxr-xr-x    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" root root      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("28272")]),s._v(" May "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2020")]),s._v(" pmap\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@iZbp156pkpio44mis76wmxZ bin"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ")]),s._v("\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("blockquote",[t("p",[s._v("pm2 -> /home/local/application/node-v12.18.2-linux-x64/bin/pm2   表示我的pm2在bin目录下")])])])]),s._v(" "),t("h3",{attrs:{id:"_2、解决方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2、解决方法"}},[s._v("#")]),s._v(" 2、解决方法；")]),s._v(" "),t("ul",[t("li",[s._v("如果你的pm2所对应的与你的安装目录不一样，那么你就修改成一样的。")]),s._v(" "),t("li",[s._v("如果没有你就创建一个。("),t("strong",[s._v("就是创建软连接")]),s._v(")")])]),s._v(" "),t("h3",{attrs:{id:"_3、验证"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3、验证"}},[s._v("#")]),s._v(" 3、验证：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("heroList"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" $ /bin/sh -xe /tmp/jenkins1503992813040784551.sh\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("heroList"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" $ /bin/sh -xe /tmp/jenkins2178596476171231682.sh\n+ pm2 -v\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4.5")]),s._v(".1\nFinished: SUCCESS\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])])])}),[],!1,null,null,null);n.default=e.exports}}]);
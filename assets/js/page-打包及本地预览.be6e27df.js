(window.webpackJsonp=window.webpackJsonp||[]).push([[274],{1009:function(s,a,e){"use strict";e.r(a);var n=e(1),t=Object(n.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"构建打包"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#构建打包"}},[s._v("#")]),s._v(" 构建打包")]),s._v(" "),n("p",[s._v("在发布上线之前，我们需要执行构建打包，将 "),n("code",[s._v(".less")]),s._v("、"),n("code",[s._v(".vue")]),s._v("、"),n("code",[s._v(".js")]),s._v(" 等相关资源进行编译打包，转换成浏览器可以直接识别运行的普通 "),n("code",[s._v("css")]),s._v("、"),n("code",[s._v("js")]),s._v("、"),n("code",[s._v("html")]),s._v("。")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("// 打包\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# yarn run build 或者 yarn build")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" run build\n\n每次 "),n("span",{pre:!0,attrs:{class:"token variable"}},[n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" run build"),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v(" 都会先把原来的 dist 删除，然后生成新的结果。\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[n("code",[s._v("VueCLI")]),s._v("会把打包结果生成存储到项目的 "),n("code",[s._v("dist")]),s._v(" 目录中。")]),s._v(" "),n("p",[n("img",{attrs:{src:e(673),alt:"1580038692656"}})]),s._v(" "),n("h2",{attrs:{id:"打包禁用hash值"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#打包禁用hash值"}},[s._v("#")]),s._v(" 打包禁用hash值；")]),s._v(" "),n("blockquote",[n("p",[s._v("在vue.config.js中   设置"),n("code",[s._v("filenameHashing")]),s._v("选项；")])]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[s._v("module"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// webpack配置: 关闭哈希值")]),s._v("\n  filenameHashing"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("h2",{attrs:{id:"预览打包结果"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#预览打包结果"}},[s._v("#")]),s._v(" 预览打包结果")]),s._v(" "),n("blockquote",[n("p",[n("strong",[s._v("注意")]),s._v("：不能直接双击打开 index.html 运行。")])]),s._v(" "),n("p",[s._v("将 dist 放到一个 Web 服务器中运行测试，常见的 Web 服务器：")]),s._v(" "),n("ul",[n("li",[s._v("Ngxin")]),s._v(" "),n("li",[s._v("Apache")]),s._v(" "),n("li",[s._v("tomcat")]),s._v(" "),n("li",[s._v("IIS")]),s._v(" "),n("li",[s._v("Node.js")])]),s._v(" "),n("p",[s._v("推荐使用"),n("code",[s._v("Vue")]),s._v("官方推荐的一个命令行"),n("code",[s._v("http")]),s._v("服务工具："),n("a",{attrs:{href:"https://github.com/zeit/serve",target:"_blank",rel:"noopener noreferrer"}},[s._v("serve"),n("OutboundLink")],1),s._v("。")]),s._v(" "),n("p",[n("code",[s._v("dist")]),s._v(" 目录需要启动一个 HTTP 服务器来访问，所以 "),n("code",[s._v("file://")]),s._v(" 协议直接打开 "),n("code",[s._v("dist/index.html")]),s._v(" 是不会工作的。在本地预览生产环境构建最简单的方式就是使用一个 Node.js 静态文件服务器，例如 "),n("a",{attrs:{href:"https://github.com/zeit/serve",target:"_blank",rel:"noopener noreferrer"}},[s._v("serve"),n("OutboundLink")],1),s._v("：")]),s._v(" "),n("p",[n("strong",[s._v("安装：")])]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# yarn global add serve")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装全局包，在任何目录执行都可以")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -g serve\n或\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" serve\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[s._v("然后在你的项目目录下执行：")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# dist 是运行 Web 服务根目录")]),s._v("\nserve -s dist\n或 注意 两者有区别\nserve dist\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("p",[s._v("如果启动成功，你将看到如下提示：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("   ┌────────────────────────────────────────────────────┐\n   │                                                    │\n   │   Serving!                                         │\n   │                                                    │\n   │   - Local:            http://localhost:5000        │\n   │   - On Your Network:  http://192.168.156.90:5000   │\n   │                                                    │\n   │   Copied local address to clipboard!               │\n   │                                                    │\n   └────────────────────────────────────────────────────┘\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br")])]),n("blockquote",[n("p",[s._v("serve 默认占用 5000 端口并启动一个服务")])]),s._v(" "),n("h2",{attrs:{id:"部署"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#部署"}},[s._v("#")]),s._v(" 部署")]),s._v(" "),n("ul",[n("li",[s._v("公司有专门的 devops，就是运维\n"),n("ul",[n("li",[s._v("有些公司没有专门的运维人员，那就后端负责")])])])]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# --force 强制推送，简写 -f")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push -u origin master -f\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])])])}),[],!1,null,null,null);a.default=t.exports},673:function(s,a,e){s.exports=e.p+"assets/img/1580038692656.35fad463.png"}}]);
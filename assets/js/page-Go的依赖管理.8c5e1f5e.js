(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{816:function(s,a,t){"use strict";t.r(a);var n=t(1),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("blockquote",[t("p",[s._v("早期的Go语言被很多开发者所吐槽的一个问题就是没有依赖包的管理，不过随着版本的不断更迭，Go语言依赖管理方面也在不断的完善。")])]),s._v(" "),t("p",[s._v("最初的时候Go语言所依赖的所有的第三方包都放在 GOPATH 目录下面，这就导致了同一个包只能保存一个版本的代码，如果不同的项目依赖同一个第三方的包的不同版本，应该怎么解决呢？")]),s._v(" "),t("div",{staticClass:"custom-block info"},[t("p",{staticClass:"custom-block-title"},[s._v("相关信息")]),s._v(" "),t("p",[s._v("GOPATH的默认路径：")]),s._v(" "),t("ul",[t("li",[s._v("unix/linux：~/go")]),s._v(" "),t("li",[s._v("windows:：%USERPROFILE%\\go")])])]),s._v(" "),t("h2",{attrs:{id:"gopath"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gopath"}},[s._v("#")]),s._v(" GOPATH")]),s._v(" "),t("blockquote",[t("p",[s._v("使用"),t("code",[s._v("GOPATH")]),s._v("来管理依赖")])]),s._v(" "),t("ol",[t("li",[t("p",[s._v("创建一个新项目，目录结构如下：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("demo\n└── src\n    └── proj1\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("设置环境变量")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 不要使用这种方式，它会覆盖掉全局的GOPATH。主要是因为这是我临时建立的目录，做演示的")]),s._v("\ngo "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("env")]),s._v(" -w "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("GOPATH")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("D:"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("demo\ngo "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("env")]),s._v(" -w "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("GO111MODULE")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("off\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 建议使用")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("GOPATH")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("D:"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("demo\nexpot "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("GO111MODULE")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("off\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("在项目proj1中下载依赖：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ go get -u go.uber.org/zap\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("目录结构：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("demo\n└── src\n    ├── go.uber.org\n    └── proj1\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("blockquote",[t("p",[s._v("可以看到下载的包在 src 目录中。")])])]),s._v(" "),t("li",[t("p",[s._v("使用包")]),s._v(" "),t("div",{staticClass:"language-go line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-go"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 创建 proj1/main.go")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("package")]),s._v(" main\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"go.uber.org/zap"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\tlog"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("_")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":=")]),s._v(" zap"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("NewProduction")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\tlog"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("Warn")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"我输出了"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])])])]),s._v(" "),t("blockquote",[t("p",[s._v("当我们的src下有多个项目的时候，每个项目项目又有不同版本的zap，那么我们可以在每个项目中新建"),t("code",[s._v("vendor")]),s._v("目录，然后手动把下载的依赖移动到此目录中，那么go会优先从此目录查找依赖。")])]),s._v(" "),t("p",[s._v("由于每个项目都有自己的vendor目录，来存放第三方库，所以就有了后来的第三方依赖管理工具：glide、dep、go dep等。")]),s._v(" "),t("h2",{attrs:{id:"godep"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#godep"}},[s._v("#")]),s._v(" godep")]),s._v(" "),t("p",[s._v("godep 是一个Go语言官方提供的通过 vender 模式来管理第三方依赖的工具，类似的还有由社区维护的准官方包管理工具 dep。")]),s._v(" "),t("p",[s._v("Go语言从 1.5 版本开始开始引入 vendor 模式，如果项目目录下有 vendor 目录，那么Go语言编译器会优先使用 vendor 内的包进行编译、测试等。")]),s._v(" "),t("p",[s._v("详细内容请查看原文："),t("a",{attrs:{href:"http://c.biancheng.net/view/4774.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("传送门"),t("OutboundLink")],1)]),s._v(" "),t("h2",{attrs:{id:"go-module"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#go-module"}},[s._v("#")]),s._v(" go module")]),s._v(" "),t("p",[s._v("go module 是Go语言从 1.11 版本之后官方推出的版本管理工具，并且从 Go1.13 版本开始，go module 成为了Go语言默认的依赖管理工具。")]),s._v(" "),t("p",[s._v("特点：")]),s._v(" "),t("ul",[t("li",[s._v("由go命令统一管理，用户不必关心目录结构。")]),s._v(" "),t("li",[s._v("初始化："),t("code",[s._v("go mod init")])]),s._v(" "),t("li",[s._v("增加依赖："),t("code",[s._v("go get")])]),s._v(" "),t("li",[s._v("更新依赖："),t("code",[s._v("go get [@v...]，go mod tidy")])]),s._v(" "),t("li",[s._v("将就项目迁移到"),t("code",[s._v("go mod")]),s._v("："),t("code",[s._v("go mod init、go build ./...")])])]),s._v(" "),t("h3",{attrs:{id:"使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[s._v("#")]),s._v(" 使用")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("创建一个新项目"),t("code",[s._v("awesomeProject1")])])]),s._v(" "),t("li",[t("p",[s._v("设置环境变量："),t("code",[s._v("GO111MODULE=on")])])]),s._v(" "),t("li",[t("p",[s._v("初始化 "),t("code",[s._v("go.mod")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ go mod init\n\nawesomeProject1\n└── go.mod     \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("下载依赖")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 下载成功后，会生成一个go.sum文件，里面保存着依赖的地址和版本。")]),s._v("\n$ go get -u go.uber.org/zap\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("新建main.go文件")]),s._v(" "),t("div",{staticClass:"language-go line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-go"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("package")]),s._v(" main\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"go.uber.org/zap"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\tlog"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("_")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":=")]),s._v(" zap"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("NewProduction")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\tlog"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("Warn")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"下午好"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])])])]),s._v(" "),t("div",{staticClass:"custom-block info"},[t("p",{staticClass:"custom-block-title"},[s._v("相关信息")]),s._v(" "),t("p",[s._v("此时下载的包依赖在 "),t("code",[s._v("GOPATH")]),s._v("/pkg/mod/go.uber.org中，也就是说go mod下载的依赖都会被管理在pkg/mod中")])]),s._v(" "),t("h2",{attrs:{id:"注意事项"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#注意事项"}},[s._v("#")]),s._v(" 注意事项")]),s._v(" "),t("p",[s._v("如果你在go get时出现以下错误")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ go get -u go.uber.org/zap\ngo get: module go.uber.org/zap: Get "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://proxy.golang.org/go.uber.org/zap/@v/list"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" dial tcp "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("142.251")]),s._v(".43.17:443: connectex: A connection attempt failed because the connected party d\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("id")]),s._v(" not properly respond after a period of time, or established connection failed because connected "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("host")]),s._v(" has failed to respond.\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("解决：设置代理，然后重新执行 go get")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ go "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("env")]),s._v(" -w "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("GOPROXY")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("https://goproxy.cn\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);
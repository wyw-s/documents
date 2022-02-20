(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{861:function(s,n,a){"use strict";a.r(n);var t=a(1),e=Object(t.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"pm2的简单使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pm2的简单使用"}},[s._v("#")]),s._v(" pm2的简单使用")]),s._v(" "),a("blockquote",[a("p",[s._v("概述： PM2是具有内置负载平衡器的Node.js应用程序的生产过程管理器。它使您可以使应用程序永远保持活动状态，无需停机即可重新加载它们，并简化常见的系统管理任务。")])]),s._v(" "),a("h2",{attrs:{id:"_1、安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、安装"}},[s._v("#")]),s._v(" 1、安装；")]),s._v(" "),a("ul",[a("li",[a("p",[a("a",{attrs:{href:"https://www.npmjs.com/package/pm2",target:"_blank",rel:"noopener noreferrer"}},[s._v("下载PM2"),a("OutboundLink")],1)])]),s._v(" "),a("li",[a("p",[s._v("安装；"),a("code",[s._v("npm install pm2 -g")])])]),s._v(" "),a("li",[a("p",[s._v("测试；出现以下类似列表说明安装成功；")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@iZbp156pkpio44mis76wmxZ herolist"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# pm2 list")]),s._v("\n┌─────┬────────┬─────────────┬─────────┬─────────┬──────────┬────────┬──────┬───────────┬──────────┬──────────┬──────────┬──────────┐\n│ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("id")]),s._v("  │ name   │ namespace   │ version │ mode    │ pid      │ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("uptime")]),s._v(" │ ↺    │ status    │ cpu      │ mem      │ user     │ watching │\n├─────┼────────┼─────────────┼─────────┼─────────┼──────────┼────────┼──────┼───────────┼──────────┼──────────┼──────────┼──────────┤\n│ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("   │ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v("    │ default     │ N/A     │ fork    │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("        │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("      │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("30")]),s._v("   │ stopped   │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("%       │ 0b       │ root     │ disabled │\n└─────┴────────┴─────────────┴─────────┴─────────┴──────────┴────────┴──────┴───────────┴──────────┴──────────┴──────────┴──────────┘\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@iZbp156pkpio44mis76wmxZ herolist"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cd /")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])])])]),s._v(" "),a("h2",{attrs:{id:"_2、命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、命令"}},[s._v("#")]),s._v(" 2、命令；")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/Unitech/pm2",target:"_blank",rel:"noopener noreferrer"}},[s._v("githup传送门"),a("OutboundLink")],1)]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装pm2")]),s._v("\ncnpm "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" pm2 -g\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动服务")]),s._v("\npm2 start app.js \n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动应用并设置name")]),s._v("\npm2 start app.js --name demo \n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 停止服务")]),s._v("\npm2 stop all "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 停止所有应用")]),s._v("\npm2 stop "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("AppName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 根据应用名停止指定应用")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除应用")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 关闭并删除应用")]),s._v("\npm2 delete all \n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 根据应用名关闭并删除应用")]),s._v("\npm2 delete "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("AppName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" \n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 根据应用ID关闭并删除应用")]),s._v("\npm2 delete "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("ID"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" \n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建开机自启动")]),s._v("\npm2 startup\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 监听模式当文件发生变化，自动重启")]),s._v("\npm2 start app.js --watch \n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重新启动")]),s._v("\npm2 restart app.js\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 更新PM2")]),s._v("\npm2 updatePM2\npm2 update\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 静态服务器 将目录dist作为静态服务器根目录，端口为9090")]),s._v("\npm2 serve ./dist "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9090")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启用群集模式（自动负载均衡）")]),s._v("\npm2 start app.js -i max\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 0秒停机重新加载")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重新启动所有进程，始终保持至少一个进程在运行")]),s._v("\npm2 reload app.js \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 优雅地以群集模式重新加载所有应用程序")]),s._v("\npm2 gracefulReload all \n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看启动列表")]),s._v("\npm2 list\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 日志查看")]),s._v("\nm2 logs  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看所有应用日志")]),s._v("\npm2 logs "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 根据指定应用名查看应用日志")]),s._v("\npm2 logs "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("ID"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 根据指定应用ID查看应用日志")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 保存当前应用列表")]),s._v("\npm2 save\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重启保存的应用列表")]),s._v("\npm2 resurrect\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 清除保存的应用列表")]),s._v("\npm2 cleardump\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 监控；")]),s._v("\npm2 monit\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br"),a("span",{staticClass:"line-number"},[s._v("56")]),a("br"),a("span",{staticClass:"line-number"},[s._v("57")]),a("br"),a("span",{staticClass:"line-number"},[s._v("58")]),a("br"),a("span",{staticClass:"line-number"},[s._v("59")]),a("br"),a("span",{staticClass:"line-number"},[s._v("60")]),a("br"),a("span",{staticClass:"line-number"},[s._v("61")]),a("br"),a("span",{staticClass:"line-number"},[s._v("62")]),a("br"),a("span",{staticClass:"line-number"},[s._v("63")]),a("br"),a("span",{staticClass:"line-number"},[s._v("64")]),a("br"),a("span",{staticClass:"line-number"},[s._v("65")]),a("br"),a("span",{staticClass:"line-number"},[s._v("66")]),a("br"),a("span",{staticClass:"line-number"},[s._v("67")]),a("br")])]),a("h2",{attrs:{id:"_3、使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、使用"}},[s._v("#")]),s._v(" 3、使用；")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("**方式一；**pm2 启动 "),a("code",[s._v("npm")]),s._v(" 脚本")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"scripts"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"test"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"echo '),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[s._v('\\"')]),s._v("Error: no test specified"),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[s._v('\\"')]),s._v(' && exit 1"')]),s._v(",\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"start"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"nodemon app.js"')]),s._v(",\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"dev"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"export NODE_ENV=production && node app.js"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",\n  \n简单用法\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(". "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" run dev\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(". pm2 start "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" -- run dev 注意: -- run之间有一个空格"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("\n以上使用是等效的\n\npm2 start "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" --watch --name nickname -- run dev\n其中 --watch监听代码变化，--name 重命令任务名称，-- run后面跟脚本名字\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("方式二；pm2 启动 app.js; 命令："),a("code",[s._v("pm2 start app.js")])])]),s._v(" "),a("li",[a("p",[s._v("方式三；pm2 根据配置文件启动npm脚本；")])])])])}),[],!1,null,null,null);n.default=e.exports}}]);
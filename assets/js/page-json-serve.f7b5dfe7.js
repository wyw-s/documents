(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{1115:function(s,t,a){"use strict";a.r(t);var n=a(1),r=Object(n.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"json-server"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#json-server"}},[s._v("#")]),s._v(" "),n("code",[s._v("JSON Server")]),s._v(";")]),s._v(" "),n("blockquote",[n("ul",[n("li",[s._v("概述："),n("code",[s._v("JSON Server")]),s._v(" 是一个提供测试环境接口的工具，它可以帮我们快速生成一套接口服务;")]),s._v(" "),n("li",[s._v("它是免费开源的命令行工具;")])])]),s._v(" "),n("ol",[n("li",[n("p",[n("strong",[s._v("安装：")])]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -g json-server  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -g 安装的东西只需安装一次即可；后续无需再安装；")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 该命令用于测试是否安装成功，如果看到一个版本输出，就证明OK了")]),s._v("\njson-server --version\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])])]),s._v(" "),n("li",[n("p",[n("strong",[s._v("创建文件目录；")])]),s._v(" "),n("ul",[n("li",[s._v("创建文件名为 "),n("code",[s._v("json-server-demo")]),s._v("的文件夹，然后在该文件夹中创建一个文件 "),n("code",[s._v("db.json")]),s._v(" 并写入以下内容：")])]),s._v(" "),n("div",{staticClass:"language-json line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-json"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"posts"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"id"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"title"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"json-server"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"author"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"typicode"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"comments"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"id"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"body"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"some comment"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"postId"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"profile"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"name"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"typicode"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"users"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"id"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"name"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"张三"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"age"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"gender"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"男"')]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br")])])]),s._v(" "),n("li",[n("p",[n("strong",[s._v("执行 "),n("code",[s._v("db.json")]),s._v("文件；")])]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("json-server --watch db.json\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])])])]),s._v(" "),n("blockquote",[n("p",[s._v("注：接口服务默认占用 3000 端口;")])]),s._v(" "),n("h2",{attrs:{id:"发送请求"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#发送请求"}},[s._v("#")]),s._v(" 发送请求；")]),s._v(" "),n("ol",[n("li",[n("p",[n("strong",[n("code",[s._v("GET")]),s._v("请求；")])]),s._v(" "),n("ol",[n("li",[s._v("获取所有数据信息；\n"),n("ul",[n("li",[s._v("请求过程和之前一样；")])])]),s._v(" "),n("li",[s._v("根据条件查询数据信息；\n"),n("ul",[n("li",[s._v("请求过程和之前一样；")])])])])]),s._v(" "),n("li",[n("p",[n("strong",[n("code",[s._v("POST")]),s._v("请求；")])]),s._v(" "),n("ol",[n("li",[s._v("添加数据；\n"),n("ul",[n("li",[s._v("响应结果为修改后的数据；")]),s._v(" "),n("li",[s._v("注：请求参数必须是"),n("code",[s._v("JSON")]),s._v("格式的；")])])])]),s._v(" "),n("p",[n("img",{attrs:{src:a(754),alt:"20191107190408596"}})])]),s._v(" "),n("li",[n("p",[n("strong",[n("code",[s._v("DELETE")]),s._v("请求方式；")])]),s._v(" "),n("ul",[n("li",[s._v("删除"),n("code",[s._v("id")]),s._v("为 1 的数据；")])]),s._v(" "),n("p",[n("img",{attrs:{src:a(755),alt:"20191107191542387"}})])]),s._v(" "),n("li",[n("p",[n("strong",[n("code",[s._v("PATCH")]),s._v("请求方式；")])]),s._v(" "),n("ul",[n("li",[s._v("修改"),n("code",[s._v("id")]),s._v("为2的数据；")]),s._v(" "),n("li",[s._v("注：请求体为"),n("code",[s._v("JSON")]),s._v("格式；")]),s._v(" "),n("li",[s._v("响应结果为：修改后的数据；")])])])])])}),[],!1,null,null,null);t.default=r.exports},754:function(s,t,a){s.exports=a.p+"assets/img/20191107190408596.4b1a3b41.png"},755:function(s,t,a){s.exports=a.p+"assets/img/20191107191542387.50a6df09.png"}}]);
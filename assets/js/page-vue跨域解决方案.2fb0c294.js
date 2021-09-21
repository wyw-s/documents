(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{1002:function(s,t,a){"use strict";a.r(t);var n=a(1),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"_1、问题概述"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1、问题概述"}},[s._v("#")]),s._v(" 1、问题概述；")]),s._v(" "),n("blockquote",[n("p",[s._v("在项目中我们时常会遇到跨域，比如下面的这种情况；")])]),s._v(" "),n("p",[n("img",{attrs:{src:a(693),alt:"1594785600774"}})]),s._v(" "),n("blockquote",[n("p",[s._v("注：项目的后台我是用"),n("code",[s._v("nodejs")]),s._v("写的；")])]),s._v(" "),n("h2",{attrs:{id:"_2、解决"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2、解决"}},[s._v("#")]),s._v(" 2、解决；")]),s._v(" "),n("h3",{attrs:{id:"_2-1、方法一"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-1、方法一"}},[s._v("#")]),s._v(" 2-1、方法一；")]),s._v(" "),n("ul",[n("li",[n("p",[s._v("就是直接在后台的代码里，添加 "),n("code",[s._v("Access-Control-Allow-Origin")]),s._v("响应头；"),n("strong",[s._v("前端无需任何配置")]),s._v("；")]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// response.header('Access-Control-Allow-Origin', \"*\")")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[n("img",{attrs:{src:a(694),alt:"1594785832204"}})])])]),s._v(" "),n("h3",{attrs:{id:"_2-2、方法二、"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-2、方法二、"}},[s._v("#")]),s._v(" 2-2、方法二、")]),s._v(" "),n("ul",[n("li",[n("p",[s._v("利用"),n("code",[s._v("vue")]),s._v("的"),n("code",[s._v("proxy")]),s._v("代理，来解决跨域；")]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[s._v("module"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  devServer"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    host"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'localhost'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 指定本地运行的ip")]),s._v("\n    port"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("8085")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 自定义本地运行的端口")]),s._v("\n    open"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 自动打开浏览器")]),s._v("\n    proxy"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// '/':为所有的请求都会被代理 若为 '/api'：则只有被匹配到的接口会被代理；")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/api'")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        target"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'http://47.114.139.71:3000'")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 要代理的第三方接口地址")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n         * 路径重定向：可以不设置此值，下面的意思是：\n         * 如果你的请求的路径是：http://localhost:8085/api/add\n         * 那么被重定向后：http://47.114.139.71:3000/add\n         */")]),s._v("\n        pathRewrite"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n           "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'^/api'")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 设置`proxy`完毕后便可解决跨域；")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br")])]),n("blockquote",[n("p",[s._v("注：使用"),n("code",[s._v("proxy")]),s._v("代理解决跨域，则"),n("code",[s._v("axios")]),s._v("的默认基地址不能设置，否则不生效；")])])])])])}),[],!1,null,null,null);t.default=e.exports},693:function(s,t,a){s.exports=a.p+"assets/img/1594785600774.a69435eb.png"},694:function(s,t,a){s.exports=a.p+"assets/img/1594785832204.53509e57.png"}}]);
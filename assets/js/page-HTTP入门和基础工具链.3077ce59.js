(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{623:function(t,s,a){t.exports=a.p+"assets/img/1657977255103.2f5b0cb4.png"},624:function(t,s,a){t.exports=a.p+"assets/img/1657986353268.f39501eb.png"},625:function(t,s,a){t.exports=a.p+"assets/img/1657987134717.4711170d.png"},921:function(t,s,a){"use strict";a.r(s);var n=a(1),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"http协议介绍"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#http协议介绍"}},[t._v("#")]),t._v(" Http协议介绍")]),t._v(" "),n("p",[t._v("http的发明者：蒂姆.伯纳斯-李(英国计算机科学家)")]),t._v(" "),n("ul",[n("li",[t._v("万维网(1990 HTTP协议)的发明者；")]),t._v(" "),n("li",[t._v("第一个浏览器的发明者；")]),t._v(" "),n("li",[t._v("创办MIT人工只能实验室；")])]),t._v(" "),n("p",[n("img",{attrs:{src:a(623),alt:"1657977255103"}})]),t._v(" "),n("h3",{attrs:{id:"http协议"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#http协议"}},[t._v("#")]),t._v(" http协议")]),t._v(" "),n("ul",[n("li",[t._v("超文本传输协议(Hyper Text Transfer Protocol)")]),t._v(" "),n("li",[t._v("处理客户端和服务端之间的通信；")]),t._v(" "),n("li",[t._v("http请求/http返回；")]),t._v(" "),n("li",[t._v("网页/json/xml/提交表单；")])]),t._v(" "),n("h3",{attrs:{id:"设计理念"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#设计理念"}},[t._v("#")]),t._v(" 设计理念")]),t._v(" "),n("p",[t._v("纯文本 + 无状态")]),t._v(" "),n("ul",[n("li",[t._v("应用层协议(下面可以是TCP/IP)；")]),t._v(" "),n("li",[t._v("信息纯文本传输；")]),t._v(" "),n("li",[t._v("无状态\n"),n("ul",[n("li",[t._v("每次请求独立；")]),t._v(" "),n("li",[t._v("请求间互不影响；")])])]),t._v(" "),n("li",[t._v("浏览器提供了手段维护状态(Cookie, Session, Storage等)")])]),t._v(" "),n("h3",{attrs:{id:"http历史"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#http历史"}},[t._v("#")]),t._v(" http历史")]),t._v(" "),n("ul",[n("li",[t._v("1991 HTTP 0.9")]),t._v(" "),n("li",[t._v("1996 HTTP 1.0")]),t._v(" "),n("li",[t._v("1999 HTTP 1.1")]),t._v(" "),n("li",[t._v("2015 HTTP 2.0")])]),t._v(" "),n("h3",{attrs:{id:"缓存"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#缓存"}},[t._v("#")]),t._v(" 缓存")]),t._v(" "),n("ul",[n("li",[t._v("http1.0 提供缓存机制如：IF-Modified-Since等基础缓存控制策略；")]),t._v(" "),n("li",[t._v("http1.1 提供E-Tag等高级缓存策略；")])]),t._v(" "),n("h3",{attrs:{id:"带宽优化"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#带宽优化"}},[t._v("#")]),t._v(" 带宽优化")]),t._v(" "),n("ul",[n("li",[t._v("http1.1 利用Range头获取文件的某个部分；")]),t._v(" "),n("li",[t._v("http1.1利用长连接让多个请求在一个TCP连接上排队；")]),t._v(" "),n("li",[t._v("http2.0 利用多路服用技术同时传输多个请求；")])]),t._v(" "),n("h3",{attrs:{id:"压缩"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#压缩"}},[t._v("#")]),t._v(" 压缩")]),t._v(" "),n("ul",[n("li",[t._v("主流web服务器如nginx、express等都提供gzip压缩功能；")]),t._v(" "),n("li",[t._v("http2.0 采用二进制传输，头部使用HPACK算法压缩；")])]),t._v(" "),n("h2",{attrs:{id:"node-js实战http请求"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#node-js实战http请求"}},[t._v("#")]),t._v(" Node.js实战http请求")]),t._v(" "),n("ol",[n("li",[n("p",[t._v("创建"),n("code",[t._v("http")]),t._v("服务；")]),t._v(" "),n("div",{staticClass:"language-javascript line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 引入net包")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" net "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'net'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" response "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token template-string"}},[n("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("Hello World")]),n("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 创建一个http服务")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" server "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" net"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("createServer")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("socket")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  socket"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("end")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("response"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 监听 80 端口")]),t._v("\nserver"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("listen")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br")])]),n("p",[n("img",{attrs:{src:a(624),alt:"1657986353268"}})])]),t._v(" "),n("li",[n("p",[t._v("写入 "),n("code",[t._v("response Headers")])]),t._v(" "),n("div",{staticClass:"language-javascript line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" response "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token template-string"}},[n("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("HTTP/1.1 200 OK\nData: Tue, 30 Jun 2020 01:00:00 GMT\nContent-Type: text/plain\nConnection: Closed\n\nHello World\n")]),n("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br")])]),n("p",[n("img",{attrs:{src:a(625),alt:"1657987134717"}})])])]),t._v(" "),n("h2",{attrs:{id:"whistle工具"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#whistle工具"}},[t._v("#")]),t._v(" whistle工具")]),t._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" whistle -g\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br")])])])}),[],!1,null,null,null);s.default=e.exports}}]);
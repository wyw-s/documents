(window.webpackJsonp=window.webpackJsonp||[]).push([[226],{1082:function(v,e,l){"use strict";l.r(e);var t=l(1),_=Object(t.a)({},(function(){var v=this,e=v.$createElement,l=v._self._c||e;return l("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[l("p",[v._v("通过srr的一个简单demo,梳理下vue-srr使用的心得，整个流程体验完后，感觉和直接写客户端代码没太大区别，大致流程是：")]),v._v(" "),l("ol",[l("li",[v._v("srr需要node服务，所以需要有一个启动文件写后端代码，用来托管静态资源和响应html内容；")]),v._v(" "),l("li",[v._v("webpack需要打包出两份文件，一个用于服务端一个用于客户端；")]),v._v(" "),l("li",[v._v("整合vueRouter和vuex；")]),v._v(" "),l("li",[v._v("数据的预处理；")])]),v._v(" "),l("p",[v._v("需要注意的点：")]),v._v(" "),l("ol",[l("li",[v._v("vue、vuex、vuerouter都需要返回一个工厂函数，因为用户会有多个，每个用户访问的页面都不相同，所以路由及数据需要独立存在；")]),v._v(" "),l("li",[v._v("异步数据预处理；")])]),v._v(" "),l("p",[v._v("特点：")]),v._v(" "),l("ul",[l("li",[v._v("vue的ssr只是在首屏渲染的时候用到，之后再切换页面就是spa了；而且是交互的页面(有点击事件等)")]),v._v(" "),l("li",[v._v("异步数据的同步，通过预处理可以让服务端获取的数据同步到客户端，达到数据的一致性；")])])])}),[],!1,null,null,null);e.default=_.exports}}]);
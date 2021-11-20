(window.webpackJsonp=window.webpackJsonp||[]).push([[145],{994:function(t,v,_){"use strict";_.r(v);var e=_(1),i=Object(e.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("p",[t._v("Vue3.0改进主要在以下几点：")]),t._v(" "),_("ul",[_("li",[t._v("更快\n"),_("ul",[_("li",[t._v("虚拟DOM重写")]),t._v(" "),_("li",[t._v("优化slots的生成")]),t._v(" "),_("li",[t._v("静态树提升")]),t._v(" "),_("li",[t._v("静态属性提升")]),t._v(" "),_("li",[t._v("基于Proxy的响应式系统")])])]),t._v(" "),_("li",[t._v("更小：通过摇树优化核心库体积")]),t._v(" "),_("li",[t._v("更容易维护：TypeScript + 模块化")]),t._v(" "),_("li",[t._v("更加友好\n"),_("ul",[_("li",[t._v("跨平台：编译器核心和运行时核心与平台无关，使得Vue更容易与任何平台（Web、Android、iOS）一起使用")])])]),t._v(" "),_("li",[t._v("更容易使用\n"),_("ul",[_("li",[t._v("改进的TypeScript支持，编辑器能提供强有力的类型检查和错误及警告")]),t._v(" "),_("li",[t._v("更好的调试支持")]),t._v(" "),_("li",[t._v("独立的响应化模块")]),t._v(" "),_("li",[t._v("Composition API")])])])]),t._v(" "),_("h2",{attrs:{id:"虚拟-dom-重写"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#虚拟-dom-重写"}},[t._v("#")]),t._v(" 虚拟 DOM 重写")]),t._v(" "),_("blockquote",[_("p",[t._v("期待更多的编译时提示来减少运行时开销，使用更有效的代码来创建虚拟节点。组件快速路径+单个调用+子节点类型检测")])]),t._v(" "),_("ul",[_("li",[t._v("跳过不必要的条件分支")]),t._v(" "),_("li",[t._v("JS引擎更容易优化")])]),t._v(" "),_("h2",{attrs:{id:"优化slots生成"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#优化slots生成"}},[t._v("#")]),t._v(" 优化slots生成")]),t._v(" "),_("blockquote",[_("p",[t._v("vue3中可以单独重新渲染父级和子级")])]),t._v(" "),_("ul",[_("li",[t._v("确保实例正确的跟踪依赖关系")]),t._v(" "),_("li",[t._v("避免不必要的父子组件重新渲染")])]),t._v(" "),_("h2",{attrs:{id:"静态树提升-static-tree-hoisting"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#静态树提升-static-tree-hoisting"}},[t._v("#")]),t._v(" 静态树提升(Static Tree Hoisting)")]),t._v(" "),_("blockquote",[_("p",[t._v("使用静态树提升，这意味着 Vue 3 的编译器将能够检测到什么是静态的，然后将其提升，从而降低了渲染成本")])]),t._v(" "),_("ul",[_("li",[t._v("跳过修补整棵树，从而降低渲染成本")]),t._v(" "),_("li",[t._v("即使多次出现也能正常工作")])]),t._v(" "),_("h2",{attrs:{id:"静态属性提升"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#静态属性提升"}},[t._v("#")]),t._v(" 静态属性提升")]),t._v(" "),_("blockquote",[_("p",[t._v("使用静态属性提升，Vue 3打补丁时将跳过这些属性不会改变的节点。")])]),t._v(" "),_("h2",{attrs:{id:"基于-proxy-的数据响应式"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#基于-proxy-的数据响应式"}},[t._v("#")]),t._v(" 基于 Proxy 的数据响应式")]),t._v(" "),_("blockquote",[_("p",[t._v("Vue 2的响应式系统使用 Object.defineProperty 的getter 和 setter。Vue 3 将使用 ES2015 Proxy 作为其观察机制，这将会带来如下变化：")])]),t._v(" "),_("ul",[_("li",[t._v("组件实例初始化的速度提高100％")]),t._v(" "),_("li",[t._v("使用Proxy节省以前一半的内存开销，加快速度，但是存在低浏览器版本的不兼容")]),t._v(" "),_("li",[t._v("为了继续支持 IE11，Vue 3 将发布一个支持旧观察者机制和新 Proxy 版本的构建")])]),t._v(" "),_("h2",{attrs:{id:"高可维护性"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#高可维护性"}},[t._v("#")]),t._v(" 高可维护性")]),t._v(" "),_("blockquote",[_("p",[t._v("Vue 3 将带来更可维护的源代码。它不仅会使用 TypeScript，而且许多包被解耦，更加模块化。")])])])}),[],!1,null,null,null);v.default=i.exports}}]);
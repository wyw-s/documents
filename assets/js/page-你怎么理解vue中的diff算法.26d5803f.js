(window.webpackJsonp=window.webpackJsonp||[]).push([[140],{977:function(l,t,v){"use strict";v.r(t);var e=v(1),i=Object(e.a)({},(function(){var l=this,t=l.$createElement,v=l._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":l.$parent.slotKey}},[v("blockquote",[v("p",[l._v("这里先说明下：diff算法是虚拟DOM技术的必然产物，它不是vue专用。")])]),l._v(" "),v("p",[l._v("我感觉可以从3个角度来理解diff算法：")]),l._v(" "),v("ol",[v("li",[v("p",[l._v("必要性")]),l._v(" "),v("ul",[v("li",[l._v("在vue中视图要想得到更新，有两种方式，一种是比较暴力的直接覆盖，另一种是只更新状态变化的地方，那么这显然就需要一个算法来找出那么需要更新的地方。")])])]),l._v(" "),v("li",[v("p",[l._v("执行方式")]),l._v(" "),v("ul",[v("li",[l._v("在vue中为了降低Watcher粒度，数据的监听是组件级别的，vue在进行比对的时候有一个整体策略：深度优先，同层比较，两个节点之间比较会根据它们是否拥有子节点或者文本节点做不同操作；但是比对想要精确就必然需要一套也就是算法，通过算法来进行dom比对从而找出那些需要更新的节点进行视图更新。")])])]),l._v(" "),v("li",[v("p",[l._v("高效性")]),l._v(" "),v("ul",[v("li",[v("p",[l._v("diff算法的直接操作对象是js，js的执行速度远高于直接操作dom元素。")])]),l._v(" "),v("li",[v("p",[l._v("diff算法有一套自己的比对优化策略，可以更高效去找出那些需要更新的地方。")])])])])])])}),[],!1,null,null,null);t.default=i.exports}}]);
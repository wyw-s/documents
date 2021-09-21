(window.webpackJsonp=window.webpackJsonp||[]).push([[235],{971:function(e,t,a){"use strict";a.r(t);var r=a(1),v=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[a("img",{attrs:{src:"https://cn.vuejs.org/images/lifecycle.png",alt:"vue生命周期"}})]),e._v(" "),a("h2",{attrs:{id:"实例化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实例化"}},[e._v("#")]),e._v(" 实例化")]),e._v(" "),a("p",[e._v("Vue的本质就是一个 function , new Vue 的过程就是初始化参数、生命周期、事件等一系列过程")]),e._v(" "),a("h2",{attrs:{id:"初始化事件-生命周期函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#初始化事件-生命周期函数"}},[e._v("#")]),e._v(" 初始化事件 生命周期函数")]),e._v(" "),a("p",[e._v("这时候，这个对象身上只有默认一些生命周期函数和默认的事件，其他的东西都未创建。")]),e._v(" "),a("h2",{attrs:{id:"beforecreate创建前"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#beforecreate创建前"}},[e._v("#")]),e._v(" beforeCreate创建前")]),e._v(" "),a("p",[e._v("接着就是 beforeCreate（创建前） 执行。但是这个时候拿不到 data 里边的数据。data和methods中的数据都还没初始化。")]),e._v(" "),a("h2",{attrs:{id:"注射响应"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注射响应"}},[e._v("#")]),e._v(" 注射响应")]),e._v(" "),a("p",[e._v("injections(注射器) reactivity(响应) 给数据添加观察者。")]),e._v(" "),a("h2",{attrs:{id:"created创建后"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#created创建后"}},[e._v("#")]),e._v(" created创建后")]),e._v(" "),a("p",[e._v("created创建后 执行。因为上边给数据添加了观察者，所以现在就可以访问到 data 里的数据了。这个钩子也是常用的，可以请求数据了。如果要调用methods中的方法或者操作data中数据，要在created里操作。要因为请求数据是异步的，所以发送请求宜早不宜迟，通常在这个时候发送请求。")]),e._v(" "),a("h2",{attrs:{id:"是否存在-el"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#是否存在-el"}},[e._v("#")]),e._v(" 是否存在 el")]),e._v(" "),a("p",[e._v("el 指明挂载目标。这个步骤就是判断一下是否有写 el ，如果没有就判断有没有调用实例上的$mount('') 方法调用。也就是下一张图")]),e._v(" "),a("h2",{attrs:{id:"判断是否有-template"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#判断是否有-template"}},[e._v("#")]),e._v(" 判断是否有 template")]),e._v(" "),a("p",[e._v("如果有 template 则渲染 template 里的内容。  如果没有 则渲染 el 指明的挂载对象里的内容。")]),e._v(" "),a("h2",{attrs:{id:"beforemount挂载前"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#beforemount挂载前"}},[e._v("#")]),e._v(" beforeMount挂载前")]),e._v(" "),a("h2",{attrs:{id:"替换-el"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#替换-el"}},[e._v("#")]),e._v(" 替换 el")]),e._v(" "),a("p",[e._v("这个时候会在实例上创建一个 el ，替换掉原来的 el 。也是真正的挂载。")]),e._v(" "),a("h2",{attrs:{id:"mounted挂载后"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mounted挂载后"}},[e._v("#")]),e._v(" mounted挂载后")]),e._v(" "),a("p",[e._v("mounted挂载后 执行。这个时候 DOM 已经加载完成了，可以操作 DOM 了。只要执行完了mounted，就表示整个vue实例已经初始化完毕了。这个也是常用的钩子。一般操作 DOM 都是在这里")]),e._v(" "),a("h2",{attrs:{id:"datachange"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#datachange"}},[e._v("#")]),e._v(" dataChange")]),e._v(" "),a("p",[e._v("当数据有变动时，会触发下面这两个钩子。")]),e._v(" "),a("p",[e._v("在 beforeUpdate更新前 和 updated更新后 之间会进行 DOM 的重新渲染和补全。  接着是 updated 更新后")]),e._v(" "),a("h2",{attrs:{id:"calldestroy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#calldestroy"}},[e._v("#")]),e._v(" callDestroy")]),e._v(" "),a("p",[e._v("beforeDestroy销毁前 和 destroy销毁后 这两个钩子是需要我们手动调用实例上的 $destroy 方法才会触发的。\n当 $destroy 方法调用后。\nbeforeDestroy 销毁前触发")]),e._v(" "),a("p",[e._v("移除数据劫持、事件监听、子组件属性 所有的东西还保留 只是不能修改")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("提示")]),e._v(" "),a("p",[e._v("新增钩子")]),e._v(" "),a("ul",[a("li",[e._v("activated：keep-alive 组件激活时调用。\n类似 created 没有真正创建，只是激活")]),e._v(" "),a("li",[e._v("deactivated：keep-alive 组件停用时调用。\n类似 destroyed 没有真正移除，只是禁用")]),e._v(" "),a("li",[e._v("在 2.2.0 及其更高版本中，activated 和 deactivated 将会在 树内的所有嵌套组件中触发。")])])]),e._v(" "),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[e._v("#")]),e._v(" 总结")]),e._v(" "),a("ol",[a("li",[e._v("beforeCreate：在实例初始化之后，数据观测（data observe）和event/watcher事件配置之前被调\n用，这时无法访问data及props等数据；")]),e._v(" "),a("li",[e._v("created：在实例创建完成后被立即调用，此时实例已完成数据观测（data observer），属性和方法\n的运算，watch/event事件回调，挂载阶段还没开始， $el 尚不可用。")]),e._v(" "),a("li",[e._v("beforemount:在挂载开始之前被调用，相关的render函数首次被调用。")]),e._v(" "),a("li",[e._v("mounted：实例被挂载后调用，这时el被新创建的vm. $el 替换，若根实例挂载到了文档上的元素\n上，当mounted被调用时vm.$el也在文档内。注意mounted不会保证所有子组件一起挂载。")]),e._v(" "),a("li",[e._v("beforeupdata：数据更新时调用，发生在虚拟dom打补丁前，这时适合在更新前访问现有dom，如\n手动移除已添加的事件监听器。")]),e._v(" "),a("li",[e._v("updated：在数据变更导致的虚拟dom重新渲染和打补丁后，调用该钩子。当这个钩子被调用时，组\n件dom已更新，可执行依赖于dom的操作。多数情况下应在此期间更改状态。 如需改变，最好使用\nwatcher或计算属性取代。注意updated不会保证所有的子组件都能一起被重绘。")]),e._v(" "),a("li",[e._v("beforedestory：在实例销毁之前调用。在这时，实例仍可用。")]),e._v(" "),a("li",[e._v("destroyed：实例销毁后调用，这时vue实例的所有指令都被解绑，所有事件监听器被移除，所有子实\n例也被销毁。")])])])}),[],!1,null,null,null);t.default=v.exports}}]);
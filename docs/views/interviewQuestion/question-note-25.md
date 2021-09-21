---
title:  v-if和v-for哪个优先级更高？
category: 面试题
autoGroup-20: vue相关
time: 2021-09-20 17:07:59
---

> 原问：v-if和v-for哪个优先级更高？如果两个同时出现，应该怎么优化得到更好的性能？  

解答这个问题的话，我们需要一些依据，那么最好的解答方式就是直接源码中解答：在源码：`compiler/codegen/index.js  `中：

```javascript
export function genElement (el: ASTElement, state: CodegenState): string {
 
  if (el.staticRoot && !el.staticProcessed) {
    return genStatic(el, state)
  } else if (el.once && !el.onceProcessed) {
    return genOnce(el, state)
  } else if (el.for && !el.forProcessed) {
    return genFor(el, state)
  } else if (el.if && !el.ifProcessed) {
    return genIf(el, state)
  } else if (el.tag === 'template' && !el.slotTarget && !state.pre) {
    return genChildren(el, state) || 'void 0'
  } else if (el.tag === 'slot') {
    return genSlot(el, state)
  } else {
    // component or element
    let code
    if (el.component) {
      code = genComponent(el.component, el, state)
    } else {
      let data
      if (!el.plain || (el.pre && state.maybeComponent(el))) {
        data = genData(el, state)
      }

      const children = el.inlineTemplate ? null : genChildren(el, state, true)
      code = `_c('${el.tag}'${
        data ? `,${data}` : '' // data
      }${
        children ? `,${children}` : '' // children
      })`
    }
    // module transforms
    for (let i = 0; i < state.transforms.length; i++) {
      code = state.transforms[i](el, code)
    }
    return code
  }
}
```

> 以上这段是由AST生成渲染函数的部分代码，通过代码我们可以看到if判断逻辑先执行的是for循环，然后是if，这就说明了我们的问题: `v-for`的优先级比`v-if`高。

如果两个同时出现，应该怎么优化得到更好的性能？  

- 最先要确定的是不要同时在一个标签上使用`v-for`和`v-if`。因为如果不这样做那么循环和判断都不可避免，浪费性能。
- 可以把`v-if`放在`v-for`的里面，这样就可以避免每次`v-for`的时候都执行一遍`v-if`，同时又肯定了if不成立循环不执行。
- 如果条件出现在循环内部，可通过计算属性提前过滤掉那些不需要显示的项或自己把数据先处理好，保证在渲染的时候就是自己真实要显示的数据。


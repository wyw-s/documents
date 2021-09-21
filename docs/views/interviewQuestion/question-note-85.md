---
title: 什么是递归组件？
category: 面试题
autoGroup-20: vue相关
time: 2021-09-21 12:34:34
---

> 组件是可以在它们自己的模板中调用自身的。  

递归组件，一定要有一个结束的条件，否则就会使组件循环引用，最终出现的错误，我们可以使用vif="false"作为递归组件的结束条件。当遇到v-if为false时，组件将不会再进行渲染。既然要用递归组件，那么对我们的数据格式肯定是需要满足递归的条件的。ta它需要是一个树状的递归数据。  

```javascript
// tree组件数据
list:[
  {
    "name": "web1",
    cList: [
      {"name": "vue" },
      {
        "name": "react",
        cList: [
          {
            "name": 'javascrict',
            cList: [{ "name": "css"}]
          }
        ]
      }
    ]
  },
  { "name": "web2" },
  {
    "name": "web3",
    cList: [
      { "name": "javascript" },
      { "name": "css" }
    ]
  },
]
```

```javascript
<template>
  <div>
    <ul>
      <li v-for="(item,index) in list " :key="index">
        <p>{{item.name}}</p>
        <tree-muen :list='list'/>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  components: {
    treeMuen
  },
  data() {
    return {
      list
    }
  }
}
</script>
```

总结

通过props从父组件拿到数据，递归组件每次进行递归的时候都会tree-menus组件传递下一级treeList数据，整个过程结束之后，递归也就完成了，对于折叠树状菜单来说，我们一般只会去渲染一级的数据，当点击一级菜单时，再去渲染一级菜单下的结构，如此往复。那么v-if就可以实现我们的这个需求，当v-if设置为false时，递归组件将不会再进行渲染，设置为true时，继续渲染。  

使用递归组件可以封装折叠菜单，可以有效的避免写更多的嵌套html
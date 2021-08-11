---
title: template
category: vue
autoGroup-1: 基础
---

> 当需要遍历多个元素而又不想增加额外的元素节点的时候，可以结合 `Vue` 中提供的 `template` 遍历渲染；

- 结合`v-for`使用；
- 可以结合`v-if`使用；
- **不能结合`v-show`使用；**
- 渲染的结果``template``标签不会在`Dom`中出现；

::: tip

template 上不能使用 key，要把 key 加到真实的 DOM 节点

:::

```vue
<body>   
    <div id="app">    
        <button @click="ok">点击反转</button>    
        <template v-for="item in msg">      
			<div :key="item.id">        
    			{{item.name}}        
    			<input type="text">      
            </div>    
        </template>  
    </div>
</body>
<script>  
    new Vue({    
        el: "#app",    
        data: {      
            msg: [        
                {id: 1, name: "小明"},        
                {id: 2, name: "小红"},        
                {id: 3, name: "小李"},        
                {id: 4, name: "小绿"}      
            ]    
        },
        methods: {      
            ok: function () {        
                //点击反转数组        
                this.msg.reverse()      
            }    
        }  
    })
</script>
```


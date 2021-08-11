---
title: 列表的更新
category: vue
autoGroup-1: 基础
---

## 遍历数组

可以利用一些常用的数组的方法来更新数组；

- push()
- pop()
- shift()
- unshift()
- splice()
- sort()
- reverse()

```html
<body>
    <div id="app">  
        <ul>    
            <li v-for="item in arr">{{item}}</li>  
        </ul>
    </div>
</body>
<script src="../../libs/vue.js"></script>
<script>  
    var vm=new Vue({    
        el: "#app",    
        data: {
            arr:[1,2,3,4,5,6,7,8,9],    
        }
    })
</script>
```

::: tip

以下两种情况都不会更新视图：

- 当你利用索引直接设置一个数组项时，例如：`vm.items[indexOfItem] = newValue`
- 当你修改数组的长度时，例如：`vm.items.length = newLength`
  - ` vm.items.splice(newLength) `；

解决：`Vue.set(vm.items, indexOfItem, newValue)`

- 参数1： 实例的数组
- 参数2：索引
- 参数3：你要修改的那个数据新值

```javascript
//例： 
Vue.set(vm.arr, 6, 100)
```

:::

## 遍历对象

```html
<div id="app">    
    <ul>      
        <li v-for="item in msg">{{item.id}}--{{item.title}}</li>    
    </ul>    
    <!--如果obj对象中没有初始化的对象成员name，那么对象的修改不会响应到视图中-->    <h1>{{obj.name}}</h1></div>
<script>  
    var vm =new Vue({    
        el: "#app",    
        data: { 
            // //初始化的数据可以正常遍历；  
            msg: [                
                { id: 1, title: '吃饭1' },        
                { id: 2, title: '吃饭2' },        
                { id: 3, title: '吃饭3' },        
                { id: 4, title: '吃饭4' }      
            ],  
            obj: {},    
        }
    })
</script>
```

**对象的更新：**

1. 已经初始化的数据可以直接`对象.属性="值"`的方式来进行数据的更新；
2. 未初始化的数据可以采用**重新赋值**的方式进行数据的更新：`app.obj={"name": "小明"}`；
3. 未初始化的数据可以采用`vue`提供的方法来进行数的更新；
4. `Vue.set(vm.obj,"name","小明")`
   - 参数1：实例的数据对象
   - 参数2：属性名
   - 参数3：属性值




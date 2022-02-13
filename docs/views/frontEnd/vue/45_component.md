---
title: component
category: vue
autoGroup-1: 基础
date: 2021-05-02 14:14:30
---

> 1. 概述：优化页面结构，简化开发过程；
>
> 2. 组件特点：
>
>    1. 简单、高效、不重复；
>    2. 组件是一个**特殊的 `Vue`实例**；`Vue`实例有的 组件基本都有；
>    3. 组件没有`el` ,但是有`template `组件页面结构；
>
> 3. 注意：
>
>    1. 组件中`data`为一个函数没有`el`选项 ；
>    2. 组件的`data`是一个带**返回值**的函数;
>    3. `template`代表其**页面结构** (有且只能有一个根元素)；
>    4. 每个组件都是**`独立`** 数据 逻辑没有任何关联；
>
> 4. 语法；
>
>    ```vue
>    <!--语法-->
>    <div id="app">  
>        <!-- 使用组件 直接写组件的名称标签即可   -->  
>        <!-- 写了一个标签 相当于 一个组件实例 -->  
>        <eight-eight></eight-eight>  
>        <eight-eight></eight-eight>
>    </div> 
>    <script>
>    Vue.component("组件名称", {    
>        // 组件对象    
>        template: ``,    
>        data: function () {      
>             return {name: "字节跳动"};    
>        },
>        methods: {},    
>        computed: {},    
>        watch: {},    
>        created() {    },    
>        mounted() {    }  
>    });  
>    var vm = new Vue({    
>    	el: "#app",    
>    	data: {},    
>    	methods: {}  
>    });
>    </script>
>    ```
>

## 全局组件

- 注册组件名称推荐小写字母加横向的结构；
- 全局组件注册应该放在`Vue`实例化之前 ;
- 全局组件创建后，新创建的`Vue`实例也可以使用；
- 加减进步器案例；

```html
<div id="app">  
    <step-counter></step-counter>  
    <step-counter></step-counter>
</div>
<div id="app1">    
    新创建的VUE实例也可以直接使用  
    <step-counter></step-counter>
</div>
<script>  
    Vue.component("step-counter", {    
        // 页面结构    
        template: `<div>        
						<button @click="cut">-</button>       
						<span>{{count}}</span>        
						<button @click="add">+</button>        
   				   </div>`,    
        data() {      
            return {        
                count: 0      
            };    
        },    
        methods: {      
            cut() {         
                //简化写法，如果前面的不执行，则后面的也不执行，否则执行；        
                this.count && this.count--;      
            }, 
            add() {        
                this.count++;      
            }    
        }  
    });
    var vm = new Vue({    
        el: "#app",    
        data: {},    
        methods: {}  
    }); 
    var vm = new Vue({    
        el: "#app1", 
    });</script>
```

## 局部组件

> 局部组件只能在当前实例上注册；

```html
<div id="app">  
    <abc-d></abc-d>  
    <abc-d></abc-d>
</div>
<script>  
    // 局部组件需要在当前实例上注册  
    var vm = new Vue({    
        el: "#app",    
        components: { 
            // key(组件名称):value(组件对象)      
            "abc-d": {        
                template: `<p>我最牛</p>`,      
            }    
        }  
    });
</script>
```

## 组件嵌套；

> 1. 组件嵌套就是在**`组件中`**使用**`其他组件`**;
> 2. 一旦形成组件嵌套 ,就有了**`父子关系`** ;
> 3. 组件嵌套最多不要超过三级；
> 4. 嵌套组件不要跨级访问；
> 5. 组件名称最好采用小写或驼峰命名法；

```html
<div id="app">  
    <abc-p></abc-p>   
    <!--<edf></edf>-->
</div>
<script>  
    //创建全局组件；  
    Vue.component("edf", {    
        template: `<p style='color:blue'>我是一个全局组件edf</p>`  
    });  
    Vue.component("abc-p", {    
        template: `<div>我是一个全局组件abc-p<child></child><edf></edf><!--<qwe></qwe> 跨级访问不到 -->        </div>`,    
        components: {      
            child: { 
                template: `<div style='color:red'>我是一个局部组件child<qwe></qwe></div>`,        
                components: { 
                    qwe : { 
                        template: `<div style="color:chartreuse">我式第二个局部组件</div>`          
                    }        
                }      
            }    
        }  
    });  
    var vm = new Vue({    
        el: "#app",  
    });
</script>
```


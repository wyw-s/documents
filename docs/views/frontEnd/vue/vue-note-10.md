---
title: 组件通信
category: vue
autoGroup-1: 基础
---

> vue的组件用于组件之间相互传递数据，比如父子组件或兄弟组件的数据传递。

组件通信常用方式 

1. props 
2. eventbus 
3. vuex 
4. 自定义事件 
5. 边界情况 
   - $parent
   -  $children
   -  $root
   -  $refs
   - provide/inject
6. 非prop特性
   -  $attrs
   -  $listeners

##  props 

> - 父给子传值。
> - 父组件传递给子组件的数据是**`只读`**的,即**`只可以用,不可以改`**。
> - 用props完成父组件给子组件传值  传值的属性都是定义在子组件的标签上,可以采用v-bind的形式传递动态值。
> - 在子组件中声明接收的属性。
> - props是组件的选项 用于定义接收属性

```vue
<div id="app">  
    <!-- 1.定义属性 => 给谁传就在谁的标签上写属性 属性名随便写-->  
    <food-meat :foods="list" a="1" b="2"></food-meat>
</div>
<script>  
    var vm = new Vue({    
        el: "#app",    
        data: {      
            list: ["红烧肉", "回锅肉", "四喜丸子", "刀削面"]    
        },    
        components: {      
            "food-meat": {        
                //   2 接收属性  props => 字符串/数组        
                template: `<div>我是饭--{{foods}}{{b}}<button @click="oncl">按钮</button></div>`,
                props: ["foods", "b"],       
                methods: {          
                    oncl() {            
                        console.log(this.foods,this.b,this.list,this instanceof Vue)                    
                    },        
                }      
            }    
        }  
    });
</script>
```

## eventbus

> 利用发布订阅，进行数据的传递；

```vue
<!-- child1.vue-->
<template>
    <button @click="onClick">我是child1</button>
</template>

<script>
import eventBus from '../utils/eventBus.js'
export default {
    methods: {
        onClick() {
            eventBus.$emit('child1', '我是child1')
        }
    }
}
</script>
```

```vue
<!-- child1.vue-->
<template>
    <div>我是child2</div>
</template>

<script>
import eventBus from '../utils/eventBus.js'
export default {
    created() {
        eventBus.$on('child1', (val) => {
            console.log(val);
        })
    },
}
</script>
```

```vue
<!-- index.vue-->
<template>
  <div>
    <child-1></child-1>
    <child-2></child-2>
  </div>
</template>

<script>
import child1 from './child1.vue'
import child2 from './child2.vue'
export default {
  name: 'HelloWorld',
  components: {
    child1,
    child2
  }
}
</script>
```
```js
// eventBus.js
import Vue from 'vue';
export default new Vue()
```

> 在`index.vue`中，引入`child1.vue`和`child2.vue`，然后通过eventBus进行数据传递；

::: tip

要想触发订阅的事件，那么就需要在组件加载时，先完成事件的订阅；

:::

## vuex

> vue的状态管理插件，vue默认不提供这个功能，需要你安装它；

```js
// store.js

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        text: ''
    },
    mutations: {
        saveText(state, val) {
            state.text = val;
        }
    }
})
```

```vue
<!-- child1.vue-->
<template>
    <button @click="onClick">我是child1</button>
</template>

<script>
export default {
    methods: {
        onClick() {
            this.$store.commit('saveText', '我是child1')
        }
    }
}
</script>
```

```vue
<!-- child2.vue-->
<template>
    <div>我是child2
        <h1>{{ text }}</h1>
    </div>
    
</template>

<script>
export default {
    computed: {
        text() {
            return this.$store.state.text;
        }
    }
}
</script>
```

> 我们通过在child1组件中设置，然后把数据保存在vuex，这样我们就可以在child2中直接取处vuex中的数据使用了；

## 自定义事件

> 这种方式其实就是发布订阅；

```vue
<!-- child1.vue-->
<template>
    <button @click="onClick">我是child1</button>
</template>

<script>
export default {
    methods: {
        onClick() {
            this.$emit('child1', '我是child1')
        }
    }
}
</script>
```

```vue
<!-- index.vue-->
<template>
  <div>
    <child-1 @child1="onChild1"></child-1>
  </div>
</template>

<script>
import child1 from './child1.vue'
export default {
  components: {
    child1,
  },
  methods: {
    onChild1(val) {
      console.log(val);
    }
  }
}
</script>
```

> 通过在child1中发布，然后在index.vue中 child1的组件上订阅这个事件就可以了；

## $parent

> 可以通过祖辈搭桥来使用发布订阅；

```vue
<!--child1-->
<template>
    <button @click="onClick">我是child1</button>
</template>

<script>
export default {
    methods: {
        onClick() {
            this.$parent.$emit('child1', '我是child1')
        }
    }
}
</script>

```

```vue
<!--child2-->
<template>
    <div>我是child2
        <h1>{{ text }}</h1>
    </div>
    
</template>

<script>
export default {
    data() {
        return {
            text: '',
        }
    },
    created() {
        this.$parent.$on('child1', (val) => {
            this.text = val
        } )
    }
}
</script>
```

```vue
<!--index-->
<template>
  <div>
    <child-1></child-1>
    <child-2></child-2>
  </div>
</template>

<script>
import child1 from './child1.vue'
import child2 from './child2.vue'
export default {
  name: 'HelloWorld',
  components: {
    child1,
    child2
  },
}
</script>
```

## $children

> 父组件可以通过$children访问子组件实现父子通信  

```javascript
this.$children[0].xx = 'xxx'
```

::: warning

$children不能保证子元素顺序  

:::

## provide/inject

> 由于vue有$parent属性可以让子组件访问父组件。但孙组件想要访问祖先组件就比较困难。通过provide/inject可以轻松实现跨级访问祖先组件的数据

```vue
<!--index-->
<template>
  <div>
    <child-1></child-1>
  </div>
</template>

<script>
import child1 from './child1.vue'
export default {
  components: {
    child1,
  },
  provide() {
    return { Hello: this }
  },
  data() {
    return {
      HelloWorld: 'HelloWorld'
    }
  }
}
</script>
```

```vue
<!--child1 省略 -->
<!--child2-->
<template>
    <div>我是child2
        <h1>{{ text }}</h1>
    </div>
    
</template>

<script>
export default {
    data() {
        return {
            text: '',
        }
    },
    inject: ['Hello'],
    created() {
        console.log(this.Hello.HelloWorld);
    }
}
</script>
```

## $attrs/$listeners

> 包含了父作用域中不作为 prop 被识别 (且获取) 的特性绑定 ( class 和 style 除外)。当一个组件没有声明任何 prop 时，这里会包含所有父作用域的绑定 ( class 和 style 除外)，并且可以通过 vbind="$attrs" 传入内部组件——在创建高级别的组件时非常有用;

```js
// child：并未在props中声明foo
<p>{{$attrs.foo}}</p>

// parent
<HelloWorld foo="foo"/>
```

## refs

> 获取子节点引用  

```javascript
// parent
<HelloWorld ref="hw"/>
mounted() {
	this.$refs.hw.xx = 'xxx'
}
```


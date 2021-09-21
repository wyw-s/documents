---
title: el和$mount的区别
category: vue
autoGroup-10: 进阶
date: 2021-09-19 16:50:23
---

> 在使用vue并去new vue({})一个实例的时候，往往都会传入一个el或render函数或者直接调用$mount方法，那么这之间都是什么区别呢？

## 区别

> 都是用于给vue实例指定一个挂载的目标；

- el：指定挂载的dom元素或一个选择器

  ```javascript
  new Vue({
      el: String | Element
  })
  ```

- render：渲染函数，可以直接生成vnode，不需要再执行模板编译；

  ```javascript
  new Vue({
      render: (h) => h(Component)
  })
  ```

- template：一个字符串模板作为 Vue 实例的标识使用。模板将会**替换**挂载的元素。挂载元素的内容都将被忽略；

  ```javascript
  new Vue({
      template: <div></div>
  })
  ```

- $mount：挂载函数，其实无论你采用那一种方式，最后都会调用$mount函数,

  - **第一个参数和el选项效果相同，都是执行一个挂载元素**

  ```javascript
  new Vue({
      render: (h) => h(Component)
  }).$mount(el?: string | Element,hydrating?: boolean)
  ```

::: tip

- el选项只在用 `new` 创建实例时生效，
- el选项不能是 `<html>` 或者 `<body>` 。
- 如果没有提供el选项那么你需要手动执行`$mount('#app')`方法；
- render和template选项是用于提供组件模板，组件模板可以直接替换掉挂载的元素；
- 如果提供了el选项，那么vue会在`Init`的时候自动调用$Mount函数；

:::

## 优先级

1. render
2. template
3. el
4. $mount

::: tip

$mount其实最后都是会执行的，即便你只传入了el 或 template，vue也会将其转化为render函数，然后执行$mount方法；如果你只传入了render那么vue会直接执行$mount进行挂载。

:::

以下是部分vue源码，说明了优先级这个问题：

```javascript
Vue.prototype.$mount = function (
  el?: string | Element,
  hydrating?: boolean
): Component {
  el = el && query(el)

  const options = this.$options
  // resolve template/el and convert to render function
  if (!options.render) {
    let template = options.template
    if (template) {
      if (typeof template === 'string') {
        if (template.charAt(0) === '#') {
          template = idToTemplate(template)
        }
      } else if (template.nodeType) {
        template = template.innerHTML
      } else {
        if (process.env.NODE_ENV !== 'production') {
          warn('invalid template option:' + template, this)
        }
        return this
      }
    } else if (el) {
      template = getOuterHTML(el)
    }
    if (template) {
      const { render, staticRenderFns } = compileToFunctions(template, {
        outputSourceRange: process.env.NODE_ENV !== 'production',
        shouldDecodeNewlines,
        shouldDecodeNewlinesForHref,
        delimiters: options.delimiters,
        comments: options.comments
      }, this)
      options.render = render
      options.staticRenderFns = staticRenderFns
    }
  }
  return mount.call(this, el, hydrating)
}
```




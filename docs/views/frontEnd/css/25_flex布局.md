---
title: flex布局
category: CSS
autoGroup-05: CSS3
date: 2021-10-02 23:11:60
---
> flex 属性用于设置或检索弹性盒模型对象的子元素如何分配空间。

- flex布局又称：弹性布局、伸缩布局、弹性盒布局、伸缩盒布局；
- flex布局主要应用于移动端，对pc端兼容较差；
- flex布局的主要思想是利用行和列进行控制；

使用felx布局只需要在父元素上使用`display: flex`，子元素自动成为容器的项目。
```css
div {
    display: flex;  
}
```
::: tip
flex 属性是 flex-grow、flex-shrink 和 flex-basis 属性的简写属性。
`flex: flex-grow flex-shrink flex-basis|auto|initial|inherit;`
如果元素不是弹性盒模型对象的子元素，则 flex 属性不起作用。
:::

更详细的felx使用请移步 [flex布局教程](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)


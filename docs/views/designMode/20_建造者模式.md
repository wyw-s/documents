---
title: 建造者模式
category: 设计模式
time: 2021-08-09 20:38:22
---

> 建造者模式（Builder Pattern）使用多个简单的对象一步一步构建成一个复杂的对象。这种类型的设计模式属于创建型模式，它提供了一种创建对象的最佳方式。主要用于当要创建单个、庞大的组合对象时，其目的是需要组合出一个全局对象。

## 编辑器插件

> 编写一个编辑器插件，我们知道编辑器有很多的功能，那么就意味着初始化的时候需要配置大量的参数，而且内部功能很多。这个时候我们就可以使用建造者模式；

```javascript
//定义最终类
function Editor(){
	this.initer = new initHtml();
    this.fontControll = new fontControll();
    this.stateControll = new stateControll();
}
//html初始模块
function initHtml(domStyle){
  this.template='<div style={{editorStyle}}><div></div><div><textarea style={{areaSyle}}/></div></div>';

}
initHtml.prototype.initStyle=function(){

}
initHtml.prototype.renderDom=function(){

}
//字体颜色,大小控制
function fontControll(){
  
};
fontControll.prototype.changeColor=function(){

}
fontControll.prototype.changeFontsize=function(){

}
//回滚
function stateControll(){

}
stateControll.prototype.saveState=function(){

}
stateControll.prototype.stateBack=function(){

}
stateControll.prototype.stateGo=function(){

}
window.Editor=Editor;
```

## vue源码

> 在vue的源码中我们可以看到一下代码片段，`initMixin`、`stateMixin`、`eventsMixin`等都是分模块开发最后组合到一起的。

```javascript
function Vue (options) {
    if (!(this instanceof Vue)
       ) {
        warn('Vue is a constructor and should be called with the `new` keyword');
    }
    this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);
```

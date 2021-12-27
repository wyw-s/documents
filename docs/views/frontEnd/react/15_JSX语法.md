---
title: JSX语法
category: REACT
date: 2021-12-12
---

> JSX是⼀种JavaScript的语法扩展，其格式⽐较像模版语⾔，但它具有 JavaScript 的全部功能。 JSX可以很好地描述UI，能够有效提⾼开发效率，体验[JSX](https://zh-hans.reactjs.org/docs/introducing-jsx.html)。

## 什么是`JSX`

- `JSX `是`JavaScript XML`的简写，表示在 JavaScript 代码中写 XML（HTML） 格式的代码。 

- 优势：声明式语法更加直观、与HTML结构相同，降低了学习成本、提升开发效率 

- `JSX `是 React 的核心内容。

  > - `JSX `不是标准的`ECMAScript `语法，它是`ECMAScript `的语法扩展。 
  > - 需要使用`babel `编译处理后，才能在浏览器环境中使用。 
  > - `create-react-app`脚手架中已经默认有该配置，无需手动配置。
  > - `JSX`是`React.createElement`方法的语法糖。

## 使用步骤

1. 使用`JSX `法创建 react 元素。

   ```jsx
   // 使用 JSX 语法，创建 react 元素： 
   const title = <h1>Hello JSX</h1> 
   ```

2. 使用`ReactDOM.render()`方法渲染 react 元素到页面中。

   ```jsx
   // 渲染创建好的React元素 
   ReactDOM.render(title, document.getElementById('root'))
   ```


## 注意事项

1. `React`元素的属性名使用小驼峰命名法。

2. 特殊属性名：class -> className、for -> htmlFor、tabindex -> tabIndex 。 

3. 没有子节点的React元素可以用 /> 结束 。 

4. 推荐：使用**小括号包裹 JSX** ，从而避免`JS `中的自动插入分号陷阱。

   ```jsx
   // 使用小括号包裹 JSX 
   const dv = ( 
     <div>Helo JSX</div> 
   ) 
   ```

## `JSX`中使用`JS`表达式

1. 嵌入`JS `表达式；

   - 语法：{ JavaScript表达式 }  

   - **注意**：语法中是单大括号，不是双大括号！

     ```jsx
     const name = '小红'
     const fn = function() {
       return <h3>h3</h3>
     }
     const app = (
         <div>
             <div>{'猪八戒'}</div>
             <div>{name}</div>
             <div>{fn()}</div>
             <div>{100}</div>
             <div>{true ? '输出正确' : '输出错误'}</div>
         </div>
     )
       
     ReactDOM.render(app, document.getElementById('root'));
     
      注意：
      1. 单大括号中可以使用任意的 JavaScript 表达式 （值，变量，函数调用，三元运算符，数组）。
      2. `JSX `自身也是`JS `表达式 。
      3. 不能在 {} 中出现语句和对象（比如：if/for，{a:100} 等） 。
     ```

2. `JSX`条件渲染；

   - 如果要渲染一组数据，应该使用数组的 map() 方法 ；

     ```jsx
     // jsx的列表渲染；
     const songs = [
       { id: 1, name: '野狼dicso' },
       { id: 2, name: '像我这样的人' },
       { id: 3, name: '桥边姑娘' }
     ];
     
     const app = (
       <div>
         {
          songs.map(item => <h1 key={ item.id }>{ item.name }</h1>)
         }
       </div>
     )
     ReactDOM.render(app, document.getElementById('root'));
     ```

   ::: warning
   
   1、渲染列表时应该添加 key 属性，key 属性的值要保证唯一。
   
   2、尽量避免使用索引号作为 key !
   
   :::

## `JSX`样式处理

1. 行内样式；

   - 注意：是双大花括号；

   ```jsx
   <h1 style={{ color: 'red', backgroundColor: '#eee' }}> 
     JSX的样式处理 
   </h1> 
   ```

2. 类样式；

   - 推荐使用`className `的方式给`JSX`添加样式。

   - 注意：使用小驼峰命名；

   ```jsx
   <h1 className="title"> 
    JSX的样式处理 
   </h1> 
   ```


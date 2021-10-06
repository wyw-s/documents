---
title: transform
category: CSS
autoGroup-5: CSS3
date: 2021-10-02 17:29:23
---
> 行内元素使用transform无效;

## 移动：
> 移动(transform属性)不会影响其他盒子的大小；

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <style>
        div {
            width: 200px;
            height: 200px;
            /*绝对定位*/
            position: absolute;
            background-color: magenta;
            /*走自己的一半*/
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
        }
    </style>
</head>
<body>
<!--利用2D实现盒子垂直水平居中-->
<div></div>
</body>
</html>
```

## 旋转：
> 在上面的例子基础上添加一个旋转，要求：垂直水平居中并旋转45度

```css
div {
    transform: translate(-50%, -50%) rotate(45deg);
    /*这种书写方式实现不了居中*/
    transform: rotate(45deg) translate(-50%, -50%);
}
```
> 旋转不会影响其他盒子的大小

::: warning
移动加旋转时要特别注意，需要考虑 rotate和translte的顺序，因为会导致不一样的结果。以上面的例子如果旋转(rotate)在前(translate)在后你会发现你实现不了居中效果。这是因为，translate属性区分X轴和Y轴，然而在旋转后坐标也一起发生的变动，此时你再使用移动属性，那么参考的坐标系是移动之后的，这就造成了你的移动位置是非水平距离,所以组合使用移动加旋转时要特别注意先后顺序！！
:::

## 缩放：
> 不会影响其他盒子的大小

```css
div {
    /*长度、宽度方向缩放*/
    transform: scale(2, 3);
    /*长度、宽度方向缩放为同一个比例*/
    transform: scale(2);
}
```

## 动画：

- 动画属性：

- 定义调用时间

- 动画序列：以百分比进行分段，

- 动画从开始执行到经过动画节点，都是基于上一个状态进行变化；

- ```css
  /* 1. 定义动画:*/
  @keyframes dong_hua {
      /* 开始状态:*/
      from {
          transform: translateX(0px);
          background-color: red;
      }
      /* 结束状态 */
      to {
          transform: translateX(1000px);
          background-color: #222;
      }
  }
  
  div {
      /* 2. 调用:*/
      animation-name: move;
      
      /* 3. 时间:*/
      animation-duration: 3s;
  }
  
  /*动画要定义然后给需要的盒子进行调用*/
  		 /*2. 调用*/
  	    /*animation-name: move;*/
  	    
  	    /*3. 时间:*/
  	    /*animation-duration: 3s;*/
  
  	    /*animation-delay：动画推迟多久执行；动画的等待。*/
  	    /*animation-iteration-count：播放循坏次数 1 2  infinite无限次*/ 
  ```

## 流式布局：

- 又称百分比布局，通过百分比控制盒子的宽度；
- 掌握：会用二倍图，
- 流式布局一般宽度为100%，若不设置高度（高度由内容撑开）；
- 一些小的图标或细线，可以采用伪元素的方式搞定；

## flex布局：

- flex布局主要应用于移动端，对pc端兼容较差；
- flex布局又称：弹性布局、伸缩布局、弹性盒布局、伸缩盒布局；
- flex布局的主要思想是利用行和列进行控制；

### 小结：

- 下方代码中的div和a 会被默认拉伸；

  ```html
  <!doctype html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport"
            content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Document</title>
      <style>
          .w {
              display: flex;
              width: 800px;
              height: 100px;
              border: 1px solid red;
          }
          a {
              width: 100px;
          }
           /* 子元素  */
        /* align-self: auto; 默认值 */
        /* auto :当父亲设置align-items，auto会继承父亲设置的align-items 的值 */
        /* auto: 当父亲没有设置align-items，auto值自动变为拉伸stretch */
        /* align-self: stretch; */
          div {
            /*div给1份，会把元素挤到最右边*/  
              flex: 1;
              border: 1px solid greenyellow;
          }
      </style>
  </head>
  <body>
      <div class='w'>
          <div></div>
          <a href="#"></a>
      </div>
  </body>
  </html>
  ```

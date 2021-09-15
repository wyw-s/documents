---
title: jquery 基础
category: JQUERY
date: 2021-05-02
---

## jQuery简介；

### 使用JavaScript的不便之处：

```js
-查找元素的方法太少，麻烦。
-遍历伪数组很麻烦，通常要嵌套一大堆的for循环。
-有兼容性问题。
-想要实现简单的动画效果，也很麻烦
-代码冗余。
```

### jQuery的优点好处

```
具有独特的链式语法和短小清晰的多功能接口；具有高效灵活的css选择器，并且可对CSS选择器进行扩展；拥有便捷的插件扩展机制和丰富的插件。jQuery兼容各种主流浏览器。
```

### jQuery的基本使用；

- jQuery官网下载地址（https://jquery.com/）；
- jQuery版本介绍及下载地址（<https://code.jquery.com/>）；

优点总结：

```javascript
-查找元素的方法多种多样，非常灵活
-拥有隐式迭代特性，因此不再需要手写for循环了。
-完全没有兼容性问题。
-实现动画非常简单，而且功能更加的强大。
-代码简单、粗暴。
```

- ```js
  $(document).ready(function () {
      $('#btn1').click(function () {
        	// 隐式迭代：偷偷的遍历，在jQuery中，不需要手动写for循环了，会自动进行遍历。
          $('div').show(200);
      });
  
      $('#btn2').click(function () {
          $('div').text('我是内容');
      });
  })
  ```

### JQuery代码的书写顺序：

```js
1. 在THML结构后使用
     $(选择器).方法()
     例如：
     $('div').hide()

2. 在HTML结构之前使用

    $(function(){
       //入口函数：当页面中的DOM元素都加载完成后就执行该处代码
       //jQuery代码
    })

    或者
    $(document).ready(function(){
       //入口函数：当页面中的DOM元素都加载完成后就执行该处代码
       //jQuery代码
    })

3. jQuery中的入口函数与js中的load事件是有差异的：
 ☞ js中的load事件是整个页面的静态资源文件都加载完毕后才执行；
 ☞ jQuery中的入口函数是整个文档加载完成后就立即执行代码；
```

### jQuery中顶级对象

jQuery中的顶级对象是$或jQuery

- $是jQuery的一个别名；

```javascript
例如：$('div').hide()  ===》 jQuery('div').hied()；

通过 $('div') 将dom对象包装成一个jQuery对象。
```

**注意：jQuery中的$和JQuery关键字本身为同一对象；**

### jQuery中页面加载事件

使用jQuery的三个步骤：

```javascript
引入jQuery文件
入口函数
功能实现
```

关于jQuery的入口函数：

```javascript
// 第一种写法
$(document).ready(function() {
	
});
// 第二种写法
$(function() {
	
});
```

## jQuery对象和DOM对象

#### DOM对象

```js
	用原生JavaScript获取的DOM对象
	通过document.getElementById()  反馈的是元素(DOM对象)
```

#### jQuery对象

```
jQuery对象用$()的方式获取的对象
jQuery对象又可以叫做包装集(包装的DOM对象的集合)
```

#### 区别;

- **jQuery对象不能使用DOM对象的成员，DOM对象不能使用jQuery对象的成员**

```javascript
// DOM对象
var box = document.getElementById('box');
// 错误
box.text('hello');
// 正确
box.innerText = 'hello';

// jQuery对象，jQuery对象加前缀$，用以区分DOM对象
var $box = $('#box');
// 错误
$box.innerText = 'hello';
// 正确
$box.text('hello');
```

### jQuery对象和DOM对象的相互转换;

```javascript
将jQuery对象转化为Dom对象的原因：
1. jQuery并没有将js中所有的方法和属性封装，所以js原生中的一些方法和属性jQuery是不支持的
   
jQuery获取到的对象是以伪数组形式存储的【也就是jQuery中是以数组形式存储的每一个DOM对象】

jQuery对象转DOM对象的方式：
	$('div')[索引]
	$('div').get(索引)

DOM对象转换成jQuery对象：   
	$(DOM对象) 只有这一种方法;
```

### 案例

- 开关灯 [01-开关灯.html]

```javascript
// 仅仅演示对象之间的转换，代码不推荐这么写
jQuery(document).ready(function () {
  // 获取元素；
  var inpArr = document.getElementsByTagName('input');
  // 获取第一个按钮，然后绑定事件；
  $(inpArr[0]).click(function () {
    // 设置body的背景色
    $('body')[0].style.background = '#fff';
  });
  // 获取第二个按钮，然后绑定事件；
  $(inpArr[1]).click(function () {
    // 设置body的背景色
    $('body').get(0).style.background = '#000';
  });
});
```

## 选择器

- jQuery选择器是jQuery为我们提供的一组方法，让我们更加方便的获取到页面中的元素。

- 注意：jQuery选择器返回的是jQuery对象。

- jQuery选择器虽然很多，但是选择器之间可以相互替代，就是说获取一个元素，你会有很多种方法获取到。


### jQuery基本选择器

```js
  语法：   $('css选择器') 
```

| 名称         | 用法               | 描述                                 |
| ------------ | ------------------ | :----------------------------------- |
| ID选择器     | $('#id');          | 获取指定ID的元素                     |
| 类选择器     | $('.class');       | 获取同一类class的元素                |
| 标签选择器   | $('div');          | 获取同一类标签的所有元素             |
| 并集选择器   | $('div,p,li');     | 使用逗号分隔，只要符合条件之一就可。 |
| 交集选择器   | $('div.redClass'); | 获取class为redClass的div元素         |
| 通配符选择器 | $('*')             | 获取页面中所有的元素;                |

- 总结：跟css的选择器用法一模一样。

### jQuery层级选择器

| 名称       | 用法          | 描述                                   |
| ---------- | ------------- | :------------------------------------- |
| 子代选择器 | $('ul > li'); | 获取父元素中的直接子元素               |
| 后代选择器 | $('ul li');   | 获取父元素中的所有后代元素；包括孙子等 |

- 跟CSS的选择器一模一样。

### jQuery过滤选择器（结构选择器）

- 这类选择器都带冒号:

| 名称         | 用法                               | 描述                                                        |
| ------------ | ---------------------------------- | :---------------------------------------------------------- |
| :eq（index） | $('li:eq(2)').css('color', 'red'); | 获取到的li元素中，选择索引号为2的元素，索引号index从0开始。 |
| :odd         | $('li:odd').css('color', 'red');   | 获取到的li元素中，选择索引号为奇数的元素                    |
| :even        | $('li:even').css('color', 'red');  | 获取到的li元素中，选择索引号为偶数的元素                    |
| :first       | $('li:first')                      | 获取第一个元素                                              |
| :last        | $('li:last')                       | 获取最后一个元素                                            |



### jQuery筛选选择器(方法)

- 筛选选择器的功能与过滤选择器有点类似，但是用法不一样，**筛选选择器主要是方法。**

| 名称                               | 用法                        | 描述                                     |
| ---------------------------------- | --------------------------- | :--------------------------------------- |
| children(selector)                 | $('ul').children('li')      | 相当于$('ul-li')，子类选择器             |
| find(selector)                     | $('ul').find('li');         | 相当于$('ul li'),后代选择器              |
| siblings(selector)                 | $('#first').siblings('li'); | 查找兄弟节点，不包括自己本身。           |
| parent()    \|   parents([选择器]) | $('#first').parent();       | 获取当前元素的直接父级元素               |
| eq(index)                          | $('li').eq(2);              | 相当于$('li:eq(2)'),index从0开始         |
| next()                             | $('li').next()              | 找下一个兄弟                             |
| nextAll()                          | $('.one').nextAll()         | 获取当前元素之后的所有同级元素           |
| prev()                             | $('li').prev()              | 找上一次兄弟                             |
| prevtAll()                         | $('.one').prevtAll()        | 获取当前元素之前的所有同级元素           |
| hasClass(class)                    | $('div').hasClass('nav')    | 判断当前元素是否有某个类名，存在返回true |

## jQuery方法：

### index();

- 获取当前元素的索引位置   Jquery对象.index()；

  ```js
   //获取索引；
  var suoyin = $(this).index();
  ```

### toFixed(x);

- 可以返回指定位数的小数，如果要保留2位小数参数 x 就写2;

  ```js
  var sum = xiaoji * text;
  $(this).parent().next().text(sum.toFixed(2));
  ```

### each();

- jq中默认的隐式迭代只能给元素设置相同的样式，如果需要设置不同样式需要通过遍历的方式实现；
- jQuery的隐式迭代会对所有的DOM对象设置相同的值，但是如果我们需要给每一个对象设置不同的值的时候，就需要自己进行迭代了。

```js
//语法1：
	jQ对象.each(function(index, domElement){ });
备注：
   	1. 第一个参数代表每一个元素的索引值
    2. 第二个参数代表的是一个dom对象，不是jq对象
    3. 如果要使用jq中的方法，必须要将对象转化为jq对象
    
//语法2：
	$.each(object, function(index, element){})
备注：
   	1. object表示要遍历哪个对象，一般在程序是一个数据【数组，对象】
    2. index，表示数据的索引值
    3. element 表示数据中的值
例如：
	 //遍历程序中的数据
	 var ary = ['a','b', 'c'];
	 $.each(ary, function(i,element) {
         console.log(i, element);
     })
     //可以遍历程序中的jq对象
     $.each($('li'), function(i, element){
         console.log(i, element);
     })   
```

### change事件;

- 表单控件中的值发生修改，触发 change事件;

-  当用于 text field  或 text area 时，该事件会在元素失去焦点时发生。

-  该事件仅适用于文本域（text field），以及 textarea 和 select 元素。

  当用于 select 元素时，change 事件会在选择某个选项时发生。

  ```js
   //当用户手动填写文本域时，价格也应发生变化；！
          $('.box .num input').change(function () {
              //获取数量；
              var text = $(this).val();
              //获取单价；
              var price = $(this).parent().prev().text();
              //计算总价；
              var sum = text * price;
              //修改属性值；
              $(this).parent().next().text(sum.toFixed(2));
              f_sum();
          });
  ```

  

## jQuery操作样式

### CSS操作

- 功能：设置或者修改样式，操作的是style属性。

- 操作单个样式

```javascript
// name：需要设置的样式名称
// value：对应的样式值
$obj.css(name, value);
// 使用案例
$('#one').css('background','gray');// 将背景色修改为灰色
```

- 设置多个样式

```javascript
// 参数是一个对象，对象中包含了需要设置的样式名和样式值
$obj.css(obj);
// 使用案例
$('#one').css({
    background:'gray',
    width:'400px',
    height:'200px'
});
// 值如果是数字，可以不用设置引号；
```

- 获取样式

```javascript
// name:需要获取的样式名称
$obj.css(name);
// 案例
$('div').css('background-color');
```

注意：获取样式操作只会返回第一个元素对应的样式值。

### 隐式迭代：

1. 遍历内部 DOM 元素（伪数组形式存储）的过程就叫做隐式迭代。
2. 设置操作的时候，如果是多个元素，那么给所有的元素设置相同的值；
3. 获取操作的时候，如果是多个元素，那么只会返回第一个元素的值。

### class操作

1. 注意：
   1. 原来DOM中 className 可以覆盖原来的类；
   2. Jq中addClass不会覆盖原来的类；

- 添加样式类

```javascript
// name：需要添加的样式类名，注意参数不要带点.
$obj.addClass(name);
// 例子,给所有的div添加one的样式。
$('div').addClass('one');
```

- 移除样式类

```javascript
// name:需要移除的样式类名
$obj.removeClass('name');
// 例子，移除div中one的样式类名
$('div').removeClass('one');
```

- 判断是否有某个样式类

```javascript
// name:用于判断的样式类名，返回值为true false
$obj.hasClass(name)
// 例子，判断第一个div是否有one的样式类
$('div').hasClass('one');
```

- 切换样式类

```javascript
// name:需要切换的样式类名，如果有，移除该样式，如果没有，添加该样式。
$obj.toggleClass(name);
// 例子
$('div').toggleClass('one');
```

## 链式编程：

- 通常情况下，只有**设置操作**才能把链式编程延续下去。因为获取操作的时候，会返回获取到的相应的值，无法返回 jQuery对象。
- 实现链式编程的核心：是对象中的每一个方法都会返回当前**对象**。

## jQuery动画

- jQuery提供了三组基本动画，这些动画都是标准的、有规律的效果；
- jQuery还提供了自定义动画的功能。

### 三组基本动画

- 显示(show)与隐藏(hide)是一组动画：
- 滑入(slideUp)与滑出(slideDown)与切换(slideToggle)，效果与卷帘门类似；
- 淡入(fadeIn)与淡出(fadeOut)与切换(fadeToggle)；
- 透明度；

```js
//显示隐藏;
//语法：
//显示；
☞show([speed, [easing], [fn]])   --->参数可以省略
        1. speed : 设置动画速度（slow,normal,fast,自定义时间）
        2. easing: 设置切换效果（默认是swing）,linear
        3. fn ： 回调函数，在动画执行完以后执行的函数
 //隐藏；  
☞hide([speed, [easing], [fn]])   --->参数可以省略
        1. speed : 设置动画速度（slow,normal,fast,自定义时间）
        2. easing: 设置切换效果（默认是swing）,linear
        3. fn ： 回调函数，在动画执行时候执行的函数；
//切换；
☞toggle([speed, [easing], [fn]])   --->参数可以省略
        1. speed : 设置动画速度（slow,normal,fast,自定义时间）
        2. easing: 设置切换效果（默认是swing）,linear；
        3. fn ： 回调函数，在动画执行时候执行的函数；
        
//滑动效果；效果与卷帘门类似；
//滑出；
☞ slideDown([speed, easing, fn])
    	1. speed : 设置动画速度（slow,normal,fast,自定义时间）
        2. easing: 设置切换效果（默认是swing）,linear
        3. fn ： 回调函数，在动画执行时候执行的函数
//滑入；  
☞ slideUp([speed, easing, fn])
    	1. speed : 设置动画速度（slow,normal,fast,自定义时间）
        2. easing: 设置切换效果（默认是swing）,linear
        3. fn ： 回调函数，在动画执行时候执行的函数
//切换；  
☞ slideToggle([speed, easing, fn])
    	1. speed : 设置动画速度（slow,normal,fast,自定义时间）
        2. easing: 设置切换效果（默认是swing）,linear
        3. fn ： 回调函数，在动画执行时候执行的函数        

//淡入和淡出；完全隐藏，不占有原有位置；
//淡入；        
☞ fadeIn([speed, easing, fn])
    	1. speed : 设置动画速度（slow,normal,fast,自定义时间）
        2. easing: 设置切换效果（默认是swing）,linear
        3. fn ： 回调函数，在动画执行时候执行的函数
//淡出；  
☞ fadeOut([speed, easing, fn])
    	1. speed : 设置动画速度（slow,normal,fast,自定义时间）
        2. easing: 设置切换效果（默认是swing）,linear
        3. fn ： 回调函数，在动画执行时候执行的函数
//切换；淡入与淡出之间的切换；  
☞ fadeToggle([speed, easing, fn])
    	1. speed : 设置动画速度（slow,normal,fast,自定义时间）
        2. easing: 设置切换效果（默认是swing）,linear
        3. fn ： 回调函数，在动画执行时候执行的函数
//透明度；  
☞ fadeTo([speed, opacity, easing, fn])
    	1. speed : 设置动画速度（slow,normal,fast,自定义时间） 【必须写】
    	2. opacity: 设置透明度0-1之间  【必须写】
        3. easing: 设置切换效果（默认是swing）,linear
        4. fn ： 回调函数，在动画执行时候执行的函数 
```

### 事件切换：

```js
☞ 事件切换：hover(fn(), fu())
      	1. 第一个回调函数代表鼠标进入时候触发的事件（相当于mouseenter）
      	2. 第二个回调函数代表鼠标离开时候触发的事件（相当于mouseleave）
	注意：
		✔ 如果只写一个fn，那么代表同时触发鼠标进入和离开
```

### 自定义动画

- animate: 自定义动画

```javascript
$(selector).animate(params,[speed],[easing],[fn]);
  1. params：要设置动画的CSS属性	【要以对象的形式设置CSS样式】
   $(this).animate({width: 300,height: 300,opacity: 0.1})；
  2. speed： 动画速度("slow","normal", or "fast")或表示动画时长的毫秒数值(如：1000)； 
  3. easing: 动画切换效果"linear" 和 "swing".
  4. fn: 动画完成后执行的一个回调函数；

```

### 动画队列与停止动画

- 在同一个元素上执行多个动画，那么对于这个动画来说，后面的动画会被放到动画队列中，等前面的动画执行完成了才会执行。

```javascript
// stop方法：停止动画效果
stop(clearQueue, jumpToEnd);
// 第一个参数：是否清除队列
// 第二个参数：是否跳转到最终效果;
//停止排队（stop()）: 必须写到动画前面!
```

## jQuery节点操作

### 创建节点

```javascript
// $(htmlStr)
// htmlStr：html格式的字符串
语法：
 	$('<li></li>');
```

### 添加节点

```javascript
append:将创建的元素添加到父元素的末尾
$('父元素').append(创建的元素)

prepend:将创建的元素添加到父元素的开始
 $('父元素').prepend(创建的元素)

before:将创建的元素添加到目标元素的后面
 $('元素').before(创建的元素)

after:将创建的元素添加到目标元素的前面
$('元素').after(创建的元素)
```

### 清空节点与删除节点

- empty：清空指定节点的所有元素，自身保留(清理门户)

```javascript
$('div').empty(); // 清空div的所有内容（推荐使用，会清除子元素上绑定的内容，源码）
$('div').html('');// 使用html方法来清空元素，不推荐使用，会造成内存泄漏，绑定的事件不会被清除。
```

- remove：将元素自己删除掉（自杀）;

```javascript
$('div').remove();//将div自己删除；
```

### 克隆节点

- 作用：复制匹配的元素

```javascript
// 复制$(selector)所匹配到的元素（深度复制）
// cloneNode(true)
// 返回值为复制的新元素，和原来的元素没有任何关系了。即修改新元素，不会影响到原来的元素。
$(selector).clone();
```

## jQuery操作属性

### attr操作

- 设置单个属性

```javascript
// 第一个参数：需要设置的属性名
// 第二个参数：对应的属性值
$obj.attr(name, value);
// 用法举例
$('img').attr('title','哎哟，不错哦');
$('img').attr('alt','哎哟，不错哦');
```

- 设置多个属性

```javascript
// 参数是一个对象，包含了需要设置的属性名和属性值
$obj.attr(obj)
// 用法举例
$('img').attr({
    title:'哎哟，不错哦',
    alt:'哎哟，不错哦',
    style:'opacity:.5'
});
```

- 获取属性

```javascript
// 传需要获取的属性名称，返回对应的属性值
$obj.attr(name)
// 用法举例
var oTitle = $('img').attr('title');
alert(oTitle);
```

- 移除属性

```javascript
// 参数：需要移除的属性名，
$obj.removeAttr(name);
// 用法举例
$('img').removeAttr('title');
```

### prop操作

- 获取元素的固有属性;

- 对于checked、selected、disabled这类boolean类型的属性来说，不能用attr方法，只能用prop方法。

```javascript
// 设置属性
$(':checked').prop('checked',true);
// 获取属性
$(':checked').prop('checked');// 返回true或者false
```

## 操作内容文本：

- val()/text/()html()；

```javascript
$obj.val()		相当于原生js中的   value    用于获取表单控件的value属性值；
$obj.html() 	相当于原生js中的  innerHtml
$obj.text()		对应innerText/textContent，处理了浏览器的兼容性  常用；
```

## jQuery尺寸和位置操作

### width方法与height方法

- 设置或者获取高度，不包括内边距、边框和外边距；
- 获取的是内容区域的大小；

```javascript
// 带参数表示设置高度  
$('img').height(200);
// 不带参数表示获取高度
$('img').height();
```

获取网页的可视区宽高

```javascript
// 获取可视区宽度  //内容区域的大小
$(window).width();
// 获取可视区高度
$(window).height();
```

### innerWidth/innerHeight/outerWidth/outerHeight

```javascript
innerWidth()/innerHeight()	方法返回元素的宽度/高度（包括内边距）。
outerWidth()/outerHeight()  方法返回元素的宽度/高度（包括内边距和边框）。
outerWidth(true)/outerHeight(true)  方法返回元素的宽度/高度（包括内边距、边框和外边距）。
```

### scrollTop与scrollLeft

- 设置或者获取垂直滚动条的位置

```javascript
// 获取页面被卷曲的高度
$(window).scrollTop();
// 获取页面被卷曲的宽度
$(window).scrollLeft();
```

### offset方法与position方法

- offset方法获取元素距离document的位置，position方法获取的是元素距离有定位的父元素(offsetParent)的位置。

```javascript
// 获取元素距离document的位置,返回值为对象：{left:100, top:100}
$(selector).offset();
// 获取相对于其最近的有定位的父元素的位置。
$(selector).position();
```

## jQuery事件机制

- JavaScript中已经学习过了事件，jQuery对JavaScript事件进行了封装，增加并扩展了事件处理机制。jQuery不仅提供了更加优雅的事件处理语法，而且极大的增强了事件的处理能力。

### jQuery事件发展历程(了解)

简单事件绑定--bind事件绑定--delegate事件绑定--on事件绑定(推荐)

- 简单事件注册

```javascript
click(handler)			单击事件
mouseenter(handler)		鼠标进入事件
mouseleave(handler)		鼠标离开事件
语法：
	$('元素').事件名称(function(){});
```

缺点：不能同时注册多个事件

- bind方式注册事件

```javascript
// 第一个参数：事件类型
// 第二个参数：事件处理程序
$('p').bind('click mouseenter', function(){
    // 事件响应方法
});
```

缺点：不支持动态事件绑定

- delegate注册委托事件

```javascript
// 第一个参数：selector，要绑定事件的元素
// 第二个参数：事件类型
// 第三个参数：事件处理函数
$('.parentBox').delegate('p', 'click', function(){
    // 为 .parentBox下面的所有的p标签绑定事件
});
```

缺点：只能注册委托事件，因此注册时间需要记得方法太多了

### on注册事件(重点)

- jQuery1.7之后，jQuery用on统一了所有事件的处理方法。
- 最现代的方式，兼容zepto(移动端类似jQuery的一个库)，强烈建议使用。

on注册简单事件

```javascript
// 一次注册一个事件，并且由自己触发，不支持动态绑定。
$('元素').on( 'click', function() {});

$('元素').on({
          事件名称: function() {},
          事件名称: function() {},
          事件名称: function() {}
    })
   //一次注册多个元素事件

//注意：
	如果注册的事件处理程序相同，那么可以合写：
    $('元素').on('click  mouseenter mouseleave', function(){
      // 代表当前元素在执行 click， mouseenter ， mouseleave 事件时候，执行的代码是一样的
    })
```

on注册事件委托

```javascript
//语法：
	$('元素').on('事件名称', '真正执行事件的子元素', function(){})
//给ul注册点击事件，但是在执行的时候，是点击每一个li执行的点击事件，委托思想;
//当必须是它的内部元素li才能触发这个事件，支持动态绑定；
$('ul').on('click', 'li', function(){ console.log(123) });
```

事件委托原理

```javascript
// 事件委托的原理
var ul = document.querySelector('#ul');
ul.onclick = function (e) {
  // console.log(e.target.tagName);
  if (e.target.tagName.toLowerCase() === 'li') {
    console.log(e.target);
  }
}
```

on注册事件的注意点：

```javascript
  	1. 可以通过on的方式给元素注册一个事件
    2. 通过on的方式给元素注册多个事件
    3. 通过on的方式注册事件可以实现委托的效果
```

- 通过源码查看 bind click delegate on 注册事件的区别

### 事件解绑

- unbind方式（不用）

```javascript
$(selector).unbind(); // 解绑所有的事件
$(selector).unbind('click'); // 解绑指定的事件
```

- undelegate方式（不用）

```javascript
$( selector ).undelegate(); // 解绑所有的delegate事件
$( selector).undelegate( 'click' ); // 解绑所有的click事件
```

- off方式（推荐）

```javascript
语法：
	$('元素').off([事件名称],[执行事件委托元素])

注意：
   	1. 如果off()中没有设置任何参数，代表将该元素身上的所有事件都解除掉
    2. 如果要解除对应的事件，可以设置off('事件名称')
   	3. 如果要解除委托事件，可以通过off('事件名称', '执行事件的元素')
	   例如：
       $('ul').on('click', 'li', function(){}) ---> 通过委托给li注册的点击事件
  	   $('ul').off('click', 'li')  ---> 解除li委托的点击事件

   	4. 如果一个元素只执行一次事件可以通过 one('事件名称', function(){})实现
```

### 触发事件；

- 自动触发一次事件；

```javascript
$('元素').事件名称();
$('元素').trigger('事件类型');
例如：
	$('div').mouseenter(function(){
       $(this).css('background','pink');
    })

    $('div').mouseenter();
    $('div').trigger('mouseenter')
```

### jQuery事件对象

jQuery事件对象其实就是js事件对象的一个封装，处理了兼容性。

```javascript
// screenX和screenY	对应屏幕最左上角的值
// clientX和clientY	距离页面左上角的位置（忽视滚动条）
// pageX和pageY	距离页面最顶部的左上角的位置（会计算滚动条的距离）

// event.keyCode	按下的键盘代码
// event.data	存储绑定事件时传递的附加数据

// event.stopPropagation()	阻止事件冒泡行为
// event.preventDefault()	阻止浏览器默认行为
// return false:既能阻止事件冒泡，又能阻止浏览器默认行为。
```

## jQuery补充知识点

### 多库共存

- jQuery使用`$`作为标示符，但是如果与其他框架中的`$`冲突时，jQuery可以释放$符的控制权.

```javascript
var c = $.noConflict();// 释放$的控制权,并且把$的能力给了c

为了避免其他js文件中和jQuery文件中的 '$'符号冲突

方式一：
	使用 jQuery 替代 '$'

方式二：
 用户完全自定义
var  test = jQuery.noConflict();
		 test.each()
```

### 拷贝对象；

```js
希望将一个对象拷贝给另外一个对象使用
语法：
	$.extend([deep], target, object1, [objectn])
注意;
   	1. deep，默认值是false，浅拷贝。true代表深拷贝
	   浅拷贝，如果遇到复杂数据类型，是将复杂数据类型的地址拷贝给目标对象的
       深拷贝，拷贝的就是对象，没有拷贝地址
    2. target，要将对象拷贝给哪个对象
    3. object1,当前要被拷贝的对象
```



## 插件

### 常用插件

- 弹出层插件 layer
  - [layer插件](https://github.com/sentsin/layer)
- 放大镜插件
  - [jQuery.zoom](http://www.jacklmoore.com/zoom/)
- 轮播图插件
  - [http://sorgalla.com/jcarousel/](http://sorgalla.com/jcarousel/)
  - [https://github.com/OwlCarousel2/OwlCarousel2](https://github.com/OwlCarousel2/OwlCarousel2)
- 图片懒加载插件
  - [jQuery.lazyload](https://github.com/tuupola/jquery_lazyload)
- jQueryUI
  - 常用的2-3个功能演示
- 查看jQuery插件的源码

### 自己探索插件

- [artDialog](https://github.com/aui/artDialog)
- [图片放大](https://github.com/fat/zoom.js)
- [github上搜索](http://www.github.com)


## jQuery插件开发

- 给jQuery增加方法的两种方式

```javascript
$.method = fn		静态方法
$.fn.method = fn	实例方法
```

- 增加一个静态方法，实现两个数的和，插件

```javascript
(function ($) {
  $.add = function (a, b) {
    return a + b;
  }
}(jQuery))

$.add(5, 6);
```

- tab栏插件 [21-tab栏插件.html]

```javascript
(function ($) {
  // {tabMenu: '#aa'}
  $.tab = function (options) {
    // 默认参数
    var defaults = {
      tabMenu: '#tab',
      activeClass: 'active',
      tabMain: '#tab-main',
      tabMainSub: '.main',
      selectedClass: 'selected'
    }
    // 把options中的属性，把对应属性的值赋给defaults对应的属性
    // defaults.tabMenu = options.tabMenu || defaults.tabMenu;
    // for(var key in options) {
    //   defaults[key] = options[key];
    // }
    $.extend(defaults, options);

    $(defaults.tabMenu).on('click', 'li', function () {
      $(this)
        .addClass(defaults.activeClass)
        .siblings()
        .removeClass(defaults.activeClass);

      //
      var index = $(this).index();
      //
      $(defaults.tabMain + ' ' + defaults.tabMainSub)
        .eq(index)
        .addClass(defaults.selectedClass)
        .siblings()
        .removeClass(defaults.selectedClass);
    })
  }
}(window.jQuery))
```

- 表格插件  [22-表格插件.html]

```javascript
(function($) {
  // 内部的变量，外部无法访问，防止变量名冲突
  var a = 0;
  // 给$增加了一个实例方法
  $.fn.table = function (header, data) {
    var array = [];
    array.push('<table>');
    array.push('<tr>');

    // 生成表头
    $.each(header, function () {
      array.push('<th>' + this + '</th>');
    })
    array.push('</tr>');


    // 生成数据行
    $.each(data, function (index) {
      // this是当前遍历到的数组中的每一个对象
      // 拼数据行
      array.push('<tr>');
      array.push('<td>' + (index + 1) + '</td>');

      // 遍历对象，拼表格
      for (var key in this) {
        array.push('<td>' + this[key] + '</td>');
      }

      array.push('</tr>');
    })
    array.push('</table>');

    this.append(array.join(''));
  }

}(window.jQuery))
```

- 插件开发的原理

---
title: CSS自定义属性（变量）
category: CSS
autoGroup-05: CSS3
date: 2022-08-10
---

> 一直以来我们都知道，CSS 中是没有变量而言的，要使用 CSS 变量，只能借助 SASS 或者 LESS 这类预编译器，但是新的草案发布之后，直接在 CSS 中定义和使用变量已经不再是幻想了。**自定义属性**（有时候也被称作**CSS 变量**或者**级联变量**）是由 CSS 作者定义的，它包含的值可以在整个文档中重复使用。由自定义属性标记设定值（比如： **--main-color: black;**），由[var() ](https://developer.mozilla.org/zh-CN/docs/Web/CSS/var)函数来获取值（比如： `color: var(--main-color)`）【[CSS 变量模块 1 级草稿已发布](https://www.w3.org/blog/news/archives/2772)，在2012年首次发布】

自定义属性语法:

- 需要以`--`下划线开头。
- 需要在`选择器`中定义。

```css
element {
  --main-bg-color: brown;
}
```

var函数语法：

- 使代码更易于阅读（更容易理解）
- 使修改颜色值更加容易

```text
// var 函数用于插入 CSS 变量的值。
var(name, value)
```

- *name*:  变量名（以两条破折号开头）。
- *value*：默认值（在未找到变量时使用）。

::: warning

变量名称必须以两个破折号（--）开头，且区分大小写！

:::

::: info

你可能会问，为什么选择两根连词线（`--`）表示变量？因为`$foo`被 Sass 用掉了，`@foo`被 Less 用掉了。为了不产生冲突，官方的 CSS 变量就改用两根连词线了。

:::

## 基本用法

声明一个自定义属性，属性名需要以两个减号（`--`）开始，属性值则可以是任何有效的 CSS 值。和其他属性一样，自定义属性也是写在规则集之内的，如下：

```css
element {
  --main-bg-color: brown;
}
```

::: info

规则集所指定的选择器定义了自定义属性的可见作用域。通常的最佳实践是定义在根伪类 [`:root`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:root) 下，这样就可以在 HTML 文档的任何地方访问到它了：

```css
:root {
  --main-bg-color: brown;
}
```

:::

## 作用域

> CSS 变量可以有全局或局部作用域。

1. 全局变量可以在整个文档中进行访问/使用，而局部变量只能在声明它的选择器内部使用。
2. 如需创建具有全局作用域的变量，请在 `:root`选择器中声明它。 `:root` 选择器匹配文档的根元素。
3. 如需创建具有局部作用域的变量，请在将要使用它的`选择器`中声明它。

## 继承性

> 自定义属性会继承。这意味着如果在一个给定的元素上，没有为这个自定义属性设置值，在其父元素上的值会被使用。

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <style>
        .two {
            --test: 10px;
        }

        .three {
            --test: 2em;
        }

    </style>
</head>
<body>
<div class="one">
    <div class="two">
        <div class="three"></div>
        <div class="four"></div>
    </div>
</div>
</body>
</html>
```

在这个情况下， `var(--test)` 的结果分别是：

- 对于元素 `class="two"` ：`10px`
- 对于元素 `class="three"` ：`2em`
- 对于元素 `class="four"` ：`10px` （继承自父属性）
- 对于元素 `class="one"` ：*非法值*，会变成自定义属性的默认值

::: info

1. 自定义属性仅当需要的时候才会计算。
2. 你不能为元素设置一个属性，然后让它从兄弟或旁支子孙规则上获取值。
3. 属性仅用于匹配当前选择器及其子孙，这和通常的 CSS 是一样的。

:::

## 默认值

> 用 [`var()`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/var) 函数可以定义多个**备用值**(fallback value)，当给定值未定义时将会用备用值替换。

::: info

**备用值并不是用于实现浏览器兼容性的。**如果浏览器不支持 CSS 自定义属性，备用值也没什么用。**它仅对支持 CSS 自定义属性的浏览器提供了一个备份机制**，该机制仅当给定值未定义或是无效值的时候生效。

:::

函数的第一个参数是[自定义属性](https://www.w3.org/TR/css-variables/#custom-property)的名称。如果提供了第二个参数，则表示备用值，当[自定义属性](https://www.w3.org/TR/css-variables/#custom-property)值无效时生效。第二个参数可以嵌套，但是不能继续平铺展开下去了，例如：

```css
.two {
  /* 如果 --my-var 未定义，则为红色 */
  color: var(--my-var, red);
}

.three {
  /* 如果未定义 --my-var 和 --my-background 则为粉红色 */
  background-color: var(--my-var, var(--my-background, pink));
}

.three {
  /* 如果 --my-var, --my-background 都为无效， 则为粉红色 */
  background-color: var(--my-var, --my-background, pink);
}
```

::: wanging

像[自定义属性](https://www.w3.org/TR/css-variables/#custom-property)这些 fallback 语法允许使用逗号。比如 `var(--foo, red, blue)` 定义了一个 `red, blue` 的备用值——从第一个逗号到最后的全部内容，都会被作为备用值的一部分。

:::

## 有效性

> 传统的 CSS 概念里，有效性和属性是绑定的，这对自定义属性来说并不适用。当自定义属性值被解析，浏览器不知道它们什么时候会被使用，所以必须认为这些值都是*有效的*。
>
> 不幸的是，即便这些值是有效的，但当通过 `var()` 函数调用时，它在特定上下文环境下也可能不会奏效。属性和自定义变量会导致无效的 CSS 语句，这引入了一个新的概念：*计算时有效性*。

当浏览器遇到无效的 `var()` 时，会使用继承值或初始值代替。

```html
<p>This paragraph is initial black.</p> 
```

```css
:root { --text-color: 16px; }
p { color: blue; }
p { color: var(--text-color); }
```

在上面的例子中，浏览器将 `--text-color` 的值替换给了 `var(--text-color)`，但是 `16px` 并不是 [`color`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/color) 的合法属性值。该属性不会产生任何作用。浏览器会执行如下两个步骤：

1. 检查属性 color 是否为继承属性。是，但是 `<p>` 没有任何父元素定义了 color 属性。转到下一步。
2. 将该值设置为它的**默认初始值**，比如 black。

::: info

当常规的 CSS 属性值中存在语法错误，该行则会被忽略。然而如果自定义属性的值无效，它并不会被忽略，从而会导致该值被覆盖为默认值。

:::

## 修改 CSS 变量

> 在 JavaScript 中获取或者修改 CSS 变量和操作普通 CSS 属性是一样的。

```js
// 获取一个 Dom 节点上的 CSS 变量
element.style.getPropertyValue("--my-var");

// 获取任意 Dom 节点上的 CSS 变量
getComputedStyle(element).getPropertyValue("--my-var");

// 修改一个 Dom 节点上的 CSS 变量
element.style.setProperty("--my-var", jsVar + 4);
```

## 浏览器支持

表格中的数字注明了完全支持该属性的首个浏览器版本。

| 函数  | 谷歌 |  ie  | 火狐 | mac  | 欧鹏 |
| :---: | :--: | :--: | :--: | :--: | :--: |
| var() | 49.0 | 15.0 | 31.0 | 9.1  | 36.0 |

## 示例

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <style>

        :root {
            --color-fear: blue;
            --color-son: yellow;
        }

        .fear {
            width: 300px;
            height: 300px;
            background: var(--color-fear);
        }

        .son1 {
            --color-son2: red;
            width: 150px;
            height: 150px;
            background: var(--color-son);
        }

        .son2 {
            /* --color-son2: green; */
            width: 150px;
            height: 150px;
            /* 访问不到 son1中的 --color-son2 自定义属性 */
            background: var(--color-son2);
        }
    </style>
</head>
<body>
<div class="fear">
    <div class="son1"></div>
    <div class="son2"></div>
</div>
</body>
</html>
```


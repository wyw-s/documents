---
title: js实现复制粘贴
category: javascript
time: 2021-06-15 07:34:00
tags:
  - javascript
  - 随笔
---

> 浏览器允许 JavaScript 脚本读写剪贴板，自动复制或粘贴内容。
> 一般来说，脚本不应该改动用户的剪贴板，以免不符合用户的预期。但是，有些时候这样做确实能够带来方便，比如"一键复制"功能，用户点击一下按钮，指定的内容就自动进入剪贴板。

## execCommand方法
> Document.execCommand()是操作剪贴板的传统方法，各种浏览器都支持。
> 它支持复制、剪切和粘贴这三个操作。

```javascript
document.execCommand('copy')（复制）
document.execCommand('cut')（剪切）
document.execCommand('paste')（粘贴）
```

- 这里我只使用复制api;
- 使用
  ```javascript
  // 创建一个 textarea 元素
  const str = 'hello world';
  const el = document.createElement('textarea');
  document.body.appendChild(el);
  // 需要复制的内容复制给value;
  el.value = str;
  // 选中内容
  el.select();
  // 复制
  document.execCommand('copy');
  document.body.removeChild(el);
  this.$toast.success('已复制到截切版');
  ```
- 格式化复制的内容
    ```javascript
    // 复制内容插入空格或换行符
    const str = 'hello world';
    // 复制内容插入换行符
    const str = 'hello\nworld';
    ```
- Document.execCommand()方法虽然方便，但是有一些缺点。
    - 它只能将选中的内容复制到剪贴板，无法向剪贴板任意写入内容。
    - 它是同步操作，如果复制/粘贴大量数据，页面会出现卡顿。
    - 有些浏览器还会跳出提示框，要求用户许可，这时在用户做出选择前，页面会失去响应。

## 参考资料

- http://www.ruanyifeng.com/blog/2021/01/clipboard-api.html
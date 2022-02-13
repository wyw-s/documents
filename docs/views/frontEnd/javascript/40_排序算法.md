---
title: 排序算法
category: javascript
date: 2021-05-15 20:38:45
---
## 冒泡排序
> 冒泡排序（Bubble Sort）也是一种简单直观的排序算法。它重复地走访过要排序的数列，一次比较两个元素，如果他们的顺序错误就把他们交换过来。走访数列的工作是重复地进行直到没有再需要交换，也就是说该数列已经排序完成。这个算法的名字由来是因为越小的元素会经由交换慢慢"浮"到数列的顶端。

```javascript
const arr = [1,2,5,6,7,8,9,12,3,4,0]

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length - i; j++) {
    let num;
    if (arr[j] > arr[j + 1]) {
      num = arr[j + 1];
      arr[j + 1] = arr[j];
      arr[j] = num;
      // [ arr[j + 1], arr[j] ] = [ arr[j], arr[j + 1] ]  利用es6数组结构简写
    }
  }
}
console.log(arr) // [0, 1, 2, 3, 4,5, 6, 7, 8, 9,12]
```

## 插入排序

> 插入排序的代码实现虽然没有冒泡排序和选择排序那么简单粗暴，但它的原理应该是最容易理解的了，因为只要打过扑克牌的人都应该能够秒懂。插入排序是一种最简单直观的排序算法，它的工作原理是通过构建有序序列，对于未排序数据，在已排序序列中从后向前扫描，找到相应位置并插入。

```javaScript
var arr = [1, 2, 8, 9, 3, 7, 5, 4, 6, 0, 44]
var preIndex, current
for (var i = 1; i < arr.length; i++) {
  preIndex = i - 1
  // 保存当前用于比较的值
  current = arr[i]
  while (preIndex >= 0 && arr[preIndex] > current) {
    // 如果前一个值大于比较的值，则交换位置
    arr[preIndex + 1] = arr[preIndex]
    // 继续和前面的值比较
    preIndex--
  }
  // 前面的值不满足比较要求时，把比较的值插入到不满足的值的前面；
  arr[preIndex + 1] = current
}
console.log(arr) //   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 44]
```

[官方文档](https://www.runoob.com/w3cnote/insertion-sort.html)


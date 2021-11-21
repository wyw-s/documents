---
title: mockjs
category: PLUGINS
date: 2021-11-21
---
> Mock.js 是一个模拟数据生成器，使前端与后端同学在开发时不必等待后端的接口数据，可以自己生成一些符合接口要求的数据进行调试。

**特征：**

- 根据数据模板生成模拟数据。
- 为 ajax 请求提供请求/响应模拟。

## 安装 & 开始

```bash
# 安装
npm install mockjs
```

```javascript
// 使用 Mock
var Mock = require('mockjs')
var data = Mock.mock({
    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
    'list|1-10': [{
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        'id|+1': 1
    }]
})
// 输出结果
console.log(JSON.stringify(data, null, 2))
```

```bash
{
  "list": [
    {
      "id": 1
    },
    {
      "id": 2
    }
  ]
}
```

## 语法规范

Mock.js 的语法规范包括两部分：

1. 数据模板定义规范。
2. 数据占位符定义规范。

### 数据模板定义规范

```bash
# 数据模板中的每个属性由 3 部分构成：属性名、生成规则、属性值：
# 属性名   name
# 生成规则 rule
# 属性值   value

'name|rule': value
```

**注意：**

- 属性名 和生成规则之间用竖线 `|` 分隔。
- 生成规则是可选的。
- 生成规则有 7 种格式：
  1. `'name|min-max': value`
  2. `'name|count': value`
  3. `'name|min-max.dmin-dmax': value`
  4. `'name|min-max.dcount': value`
  5. `'name|count.dmin-dmax': value`
  6. `'name|count.dcount': value`
  7. `'name|+step': value`
- 生成规则的含义需要依赖**属性值的类型**才能确定。
- 属性值中可以含有 `@占位符`。
- 属性值还指定了最终值的初始值和类型。

#### 生成规则示例

1. 属性值是字符串 **String**

   - `'name|min-max': string`：

     通过重复 `string` 生成一个字符串，重复次数大于等于 `min`，小于等于 `max`。

     ```javascript
     var data = Mock.mock({
       'list|1-10': [
         {
           'name|1-2': 'string'
         }
       ]
     })
     console.log(JSON.stringify(data, null, 2))
     ```

     ```bash
     {
       "list": [
         {
           "name": "string"
         },
         {
           "name": "stringstring"
         },
         {
           "name": "string"
         }
       ]
     }
     ```

   - `'name|count': string`

     通过重复 `string` 生成一个字符串，重复次数等于 `count`。

     ```javascript
     var data = Mock.mock({
       'list|1-10': [
         {
           'name|2': 'string'
         }
       ]
     })
     console.log(JSON.stringify(data, null, 2))
     ```

     ```bash
     {
       "list": [
         {
           "name": "stringstring"
         },
         {
           "name": "stringstring"
         }
       ]
     }
     ```

2. 属性值是数字 **Number**

   - `'name|+1': number`

     属性值自动加 1，初始值为 `number`。

     ```javascript
     var data = Mock.mock({
       'list|1-10': [
         {
           // 属性值自动加 2，初始值为 2。
           'name|+2': 2
         }
       ]
     })
     console.log(JSON.stringify(data, null, 2))
     ```

     ```
     {
       "list": [
         {
           "name": 2
         },
         {
           "name": 4
         },
         {
           "name": 6
         },
       ]
     }
     ```

   - `'name|min-max': number`

     生成一个大于等于 `min`、小于等于 `max` 的整数，属性值 `number` 只是用来确定类型。

     ```javascript
     var data = Mock.mock({
       'list|1-10': [
         {
           'name|5-9': 5
         }
       ]
     })
     console.log(JSON.stringify(data, null, 2))
     ```

     ```
     {
       "list": [
         {
           "name": 8
         },
         {
           "name": 6
         },
         {
           "name": 7
         },
         {
           "name": 8
         }
       ]
     }
     ```

   - `'name|min-max.dmin-dmax': number`

     生成一个浮点数，整数部分大于等于 `min`、小于等于 `max`，小数部分保留 `dmin` 到 `dmax` 位。

     ```
     Mock.mock({
         'number1|1-100.1-10': 1,
         'number2|123.1-10': 1,
         'number3|123.3': 1,
         'number4|123.10': 1.123
     })
     // =>
     {
         "number1": 12.92,
         "number2": 123.51,
         "number3": 123.777,
         "number4": 123.1231091814
     }
     ```

3. 属性值是布尔型 **Boolean**

   - `'name|1': boolean`

     随机生成一个布尔值，值为 true 的概率是 1/2，值为 false 的概率同样是 1/2。

   - `'name|min-max': value`

     随机生成一个布尔值，值为 `value` 的概率是 `min / (min + max)`，值为 `!value` 的概率是 `max / (min + max)`。

4. 属性值是对象 **Object**

   - `'name|count': object`

     从属性值 `object` 中随机选取 `count` 个属性。

     ```javascript
     var data = Mock.mock({
       'list|1-10': [
         {
           'obj|2': {
             name: '小明',
             age: 18,
             skill: '技能'
           },
         }
       ]
     })
     // =>
     {
       "list": [
         {
           "obj": {
             "skill": "技能",
             "age": 18
           }
         }
       ]
     }
     ```

   - `'name|min-max': object`

     从属性值 `object` 中随机选取 `min` 到 `max` 个属性。

5. 属性值是数组 **Array**

   - `'name|1': array`

     从属性值 `array` 中随机选取 1 个元素，作为最终值。

   - `'name|+1': array`

     从属性值 `array` 中顺序选取 1 个元素，作为最终值。

   - `'name|min-max': array`

     通过重复属性值 `array` 生成一个新数组，重复次数大于等于 `min`，小于等于 `max`。

   - `'name|count': array`

     通过重复属性值 `array` 生成一个新数组，重复次数为 `count`。

6. 属性值是函数 **Function**

   - `'name': function`

     执行函数 `function`，取其返回值作为最终的属性值，函数的上下文为属性 `'name'` 所在的对象。

7. 属性值是正则表达式 **RegExp**

   - `'name': regexp`

     根据正则表达式 `regexp` 反向生成可以匹配它的字符串。用于生成自定义格式的字符串。

     ```
     Mock.mock({
         'regexp1': /[a-z][A-Z][0-9]/,
         'regexp2': /\w\W\s\S\d\D/,
         'regexp3': /\d{5,10}/
     })
     // =>
     {
         "regexp1": "pJ7",
         "regexp2": "F)\fp1G",
         "regexp3": "561659409"
     }
     ```

### 数据占位符定义规范

> *占位符* 只是在属性值字符串中占个位置，并不出现在最终的属性值中。

占位符的格式为：

- `@占位符`
- `@占位符(参数 [, 参数])`

**注意：**

1. 用 `@` 来标识其后的字符串是 *占位符*。
2. *占位符* 引用的是 `Mock.Random` 中的方法。
3. 通过 `Mock.Random.extend()` 来扩展自定义占位符。
4. *占位符* 也可以引用 *数据模板* 中的属性。
5. *占位符* 会优先引用 *数据模板* 中的属性。
6. *占位符* 支持 *相对路径* 和 *绝对路径*。

```javascript
Mock.mock({
    name: {
        first: '@FIRST',
        middle: '@FIRST',
        last: '@LAST',
        full: '@first @middle @last',
        email: '@email',
        Basic: '@range(4)'
    }
})
// =>
{
    "name": {
        "first": "Charles",
        "middle": "Brenda",
        "last": "Lopez",
        "full": "Charles Brenda Lopez",
        "email": "w.qbei@wbnv.ag",
        "Basic": [
            0,
            1,
            2,
            3
        ],
    }
}
```

## 参考博文

[mock官方文档](https://github.com/nuysoft/Mock/wiki)

---
title: JSON TO YAML
category: javascript
autoGroup-50: 其他
date: 2022/4/9
---

> 需求是在web页面显示一个代码块区域，而语法格式是yaml，但是接口响应数据是json。

## 方法一

1. 安装`json2yaml`依赖包；[传送门](https://www.npmjs.com/package/json2yaml)

    ```bash
    npm install -D json2yaml
    ```

2. 使用：`input.json`内容如下

    ```json
    {
        "json": [
            "rigid",
            "better for data interchange"
        ],
        "yaml": [
            "slim and flexible",
            "better for configuration"
        ],
        "object": {
            "key": "value",
            "array": [
                {
                    "null_value": null
                },
                {
                    "boolean": true
                },
                {
                    "integer": 1
                },
                {
                    "alias": "aliases are like variables"
                },
                {
                    "alias": "aliases are like variables"
                }
            ]
        },
        "paragraph": "Blank lines denote\nparagraph breaks\n",
        "content": "Or we\ncan auto\nconvert line breaks\nto save space",
        "alias": {
            "bar": "baz"
        },
        "alias_reuse": {
            "bar": "baz"
        }
    }
    ```

    ```javascript
    import YAML from 'json2yaml';
    const json = require('./input.json');
    
    const yaml = YAML.stringify(json);
    console.log(yaml);
    ```

    ```yaml
    ---
      json: 
        - "rigid"
        - "better for data interchange"
      yaml: 
        - "slim and flexible"
        - "better for configuration"
      object: 
        key: "value"
        array: 
          - 
            null_value: null
          - 
            boolean: true
          - 
            integer: 1
          - 
            alias: "aliases are like variables"
          - 
            alias: "aliases are like variables"
      paragraph: "Blank lines denote\nparagraph breaks\n"
      content: "Or we\ncan auto\nconvert line breaks\nto save space"
      alias: 
        bar: "baz"
      alias_reuse: 
        bar: "baz"
    ```

   > 上面的yaml文件就是json转化来的，美中不足就是对于数组`array`出现了换行，而`\n`换行符也没有识别出来，不过可以使用；

## 方法二

1. 安装`json-to-pretty-yaml`依赖包；[传送门](https://www.npmjs.com/package/json-to-pretty-yaml)

    ```bash
    npm install --save json-to-pretty-yaml
    ```

2. 使用：

    ```javascript
    import YAML from 'json-to-pretty-yaml';
    const json = require('./input.json');
    
    const yaml = YAML.stringify(json);
    console.log(yaml);
    ```

    ```yaml
    json:
      - "rigid"
      - "better for data interchange"
    yaml:
      - "slim and flexible"
      - "better for configuration"
    object:
      key: "value"
      array:
        - null_value: null
        - boolean: true
        - integer: 1
        - alias: "aliases are like variables"
        - alias: "aliases are like variables"
    paragraph: "Blank lines denote\nparagraph breaks\n"
    content: "Or we\ncan auto\nconvert line breaks\nto save space"
    alias:
      bar: "baz"
    alias_reuse:
      bar: "baz"
    ```

   > 上面的yaml文件就是json转化来的，相比第一种方法好了很多，但是`\n`换行符也没有识别出来，不过可以正常使用；



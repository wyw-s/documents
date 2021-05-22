---
title: node基础
---

> Node.js 不是一种独立的语言，与 PHP、 Python、 Perl、 Ruby 的“既是语言也是平台”不同。 Node.js 也不是一个 JavaScript 框架，不同于 CakePHP、 Django、 Rails。 Node.js 更不是浏览器端的库，不能与 jQuery、 ExtJS 相提并论。 Node.js 是一个让 JavaScript 运行在服务端的开发平台，它让 JavaScript 成为脚本语言世界的一等公民，在服务端堪与 PHP、 Python、Perl、 Ruby 平起平坐。Node.js 是一个划时代的技术，它在原有的 Web 前端和后端技术的基础上总结并提炼出了许多新的概念和方法，堪称是十多年来 Web 开发经验的集大成者。 Node.js 可以作为服务器向用户提供服务，与 PHP、 Python、 Ruby on Rails 相比，它跳过了 Apache、 Nginx 等 HTTP服务器，直接面向前端开发。 Node.js 的许多设计理念与经典架构（如 LAMP）有着很大的不同，可提供强大的伸缩能力，以适应21世纪10年代以后规模越来越庞大的互联网环境。  





## NodeJS 的核心组成；

1. JS引擎：基于v8引擎开发的；
2. node模块：封装好的js代码；
3. 第三方模块；

## javascript与node.js的区别；

+ javascript(浏览器端) ：
  + ECMAScript ：
  + DOM：
  + BOM：
+ node.js:
  + ECMAScript(ES5 , ES6) ：
  + 只支持 JS语法，不支持 dom 和 bom 语法；

## ES6；

> ECMAScript 的一个颠覆性版本更新  - 面向对象编程（类、对象-- 封装、继承、多态）

###  let；

+  let 声明变量；

+ 特点：

  + 无法变量提升
  + 无法重复声明
  +  有块级作用域  { };

```js
//1、变量无法提升；
console.log(b);//b is not defined
let b='小明';

//2、变量无法重复定义；
 let b = '小红';
 let b = '小霞';
 console.log(b);//Identifier 'b' has already been declared

//3、有块级作用域；；
 {
     let b='郭德纲';
 }
 console.log(b);//b is not defined
```

### const 常量；

> 常量主要用来保存一些初始信息，不允许修改；

+ 特点：
  + 常量声明必须要赋值；
  + 常量无法重新赋值；
  + 无法重复声明；
  + 无法变量提升；
  + 有块级作用域；
+ 常量应用场景；
  + 整个程序的核心配置数据，一般使用常量来保存因为无法修改；
  + 在 nodejs 中加载模块时，一般使用常量来保存模块对象；

```js

// 1. 常量无法重新赋值
 const age1 = 100;
 age1 = 101; // 常量 一旦赋值，不能改变！
 console.log(age1);

// 2. 常量只能也必须在 创建时赋值
 const age2; //报错： Missing initializer in const declaration
 console.log(age2);

// 3. 无法变量提升
 console.log(age3); // 报错： age is not defined
 const age3 = 1;

// 4.有 块级作用域
 if(true){
   const num4 = 100;
 }
 console.log(num4); // 报错：   num is not defined

// 5.无法重复声明
 const num5 = 1;
 const num5 = 2; // Identifier 'num' has already been declared
```

## 解构；

> 概念：一种**方便获取**对象和数组中值的方式；

### 对象解构；

> 概念：使用对象解构自动将对象  同名属性  赋值给  同名变量；

```js
let a={
    name: '小明',
    age: 19,
    eat: function () {
        console.log('我叫'+a.name+'今年'+a.age+'岁了')
        return '下午好';
    }
}
//把对象中的属性值赋值给了 同名 变量；
let {name,age,eat}=a;
let c=name;
console.log(name,age,eat());//小明 19 下午好；
console.log(c);//小明；
//情况1；变量多于对象属性；则多余的那个变量会打印undefined;
let {name,age,eat,key}=a;// key -> undefined
//情况2；若变量少于对象属性，则正常打印属性值；
let {name}=a;//小明；
```

### 数组的解构；

> 相当于创建n个变量，并且从数组中 【按顺序】 取出元素设置给变量；

```js
//声明一个变量；
let a=[1,2,3,4,5,6,7,8];

//将数组解构取出；
let [p,b,c,d,e,f,g,h]=a

console.log(f);// 6；
console.log(b);// 2；
console.log(c);// 3；
```

### 例；

> 问题：有些函数有多个形参，但实际使用时，需要指定传入任意位置的参数，传统语法无法实现；

```js
//一个函数有三个形参，但是有一个需要是默认值，其他两个是用户传入的值；
function fn({a=1,b=2,c=3}) {
    console.log(a,b,c);//1 9 8
}

let obj={b:9,c:8};

fn(obj);
```

## 箭头函数；

> ​	箭头函数（Arrow Function），并且简化了函数定义。
>
> 注：1、**只针对于 匿名函数**，命名函数不能使用；
>
> ​	2、箭头函数的this在创建时就确定了，是上下文中的this；

```js
// const a=function (b) {
//     console.log(89+b);
//     console.log(78);
// }

//简化后；
const a=b=>{
    console.log(89+b);
    console.log(78);
}

a(39) //128  78
```

1. ：function 变为  =>;

2. 参数：

  + 参数只有1个 省略小括号;

  + 参数0个或多个，无法省略小括号;

3. 大括号{ }
  + 如果 函数体代码只有一行可以省略 {}
  + 函数体多行无法省略 {};

4. 返回值 return

  + 函数体一行 有返回值 省略{} 的 同时 【必须省略 return】

    ```js
    const a=function () {
        return 99;
    }
    //简化后；
    const a=()=>99;
    
    console.log(a());//99
    ```

5. this指向改变；

   ```js
      var a = {
           nam: '小明',
           eat: function () {
               console.log(this);
               //使用箭头函数会发生this指向改变；
               setTimeout( () =>{
                   console.log(this);//此时的this不在是window;
               },1000)
           },
       }
   
   console.log(a.eat())
   ```

##  属性赋值简写

```js
let name = '妲己'
let gender = '女'
let skill = '傻笑'

//方式一：手动将同名的变量的值设置给对象中的同名属性；
let hero = {
  name: name,
  gender: gender,
  skill: skill
};
//方式二：对象属性赋值简写；
/注意：属性名和值相同可以简写，否则不要这么做
let hero2 = {
  name,
  gender,
  skill
};
```

+ **对象中的 方法可以省略掉 : function**

```js
const person = {
  //sayHi: function() {
  //  console.log('Hi~~~')
  //}
  // 可以省略  ：function ；
  sayHi() {
    console.log('Hi~~~')
  }
}

person.sayHi();
```

## 展开；

### 对象的展开；

> 概念：将对象中的成员自动添加到 另一个对象中;

- 同名属性会按照书写顺序后面的会把前面的覆盖；
- 可以展开多个对象；

```js
//定义对象；
const a={
    name: '小明',
    age: 18,
    eat: function () {
        console.log("我叫"+a.name+"今年"+a.age)
        return 576;
    }
}

const b={
    name: '小红',
    //对象展开；会把小红覆盖掉；
    ...a,
}

console.log(b);
```

### 数组的展开；

> 概念：将数组中的元素自动添加到另一个数组中;

- **不会覆盖**；
- 可以展开多个；

```js
//定义数组；
const a=[1,2,3,4,5,6,7];
const c=['a','b','c']

const b=['a','b',1,2,3,4,5,...a,...c];

console.log(b);
```

## 模板字符串；

> 本质：就是一个字符串;
>
> 特点：
>
> - 可以换行；
> - 挖坑(占位符) ，用来填充变量值；

```js
const b='hahahha';

const a=`
望庐山瀑布
日照香炉生${b}；
遥看瀑布挂前川；
飞流直下三千尺；
疑似银行落九天
`;

console.log(a);
```

## `node`模块；

> 注：node有很多模块，它在我们安装时就内置在了里面；直接可以使用但是需要我们自己导入；
>
> ​	1、浏览器不能读取计算机的文件；
>
> ​	2、但是node.js可以读取计算机的文件；

```js
//文件的读；
//导包：可以理解为调用了node的内置的方法；
const fs = require('fs');
//查文档找读取文件的使用方式；
fs.readFile('./nav.text','UTF-8' ,((err, data) => {
    console.log(err);
    console.log(data);
}))

//写文件；
const a='晚上好晚上好';
const fs=require('fs');
fs.writeFile('./nav.text',a,err=> {
console.log(err)//Null  表示文件写入成功；
})
```

### 第三方模块

+ 找包 ： [npmjs.com](npmjs.com) 去找 ，如果被墙，就去 淘宝镜像 [npm.taobao.org]()
+ 下载包：
  + 下载包之前务必找到要使用第三方模块的项目文件夹 ；
  + 再执行 npm 的安装包的命令；

+ 导包
  + 使用 require('包名') 导入已经下载的模块包；
  + 使用 const 常量保存导入的对象，常量名 一般保持 和 包名一致
+ 用包
  + 使用 导入的包中提供的方法，完成我们需要的功能；

### node.js模块化；

1. 导入模块使用:`require()`

2. 导出模块使用:`module.exports`;

   1. 暴露多个，用对象方式;
   2. 重复为`module.exports`赋值后面的会把前面的覆盖;

   ```js
   /自己写的模块；
   //写自己的变量；
   const name = '中午好';
   const age = 18;
   
   //暴露出去；module 是关键字，全局变量
   module.exports = {
       name,
       age,
       sayhi() {
           console.log('你好啊')
       }
   }
   
   //导包；注意：要写路径；
   const qw = require('./text/zi');
   
   //调用；
   console.log(
       qw.age,
       qw.name,
       qw.sayhi()
   );
   ```

   

## 同步&异步

### 同步

- 代码中 ：代码从上往下执行
- 现实中 ：排队

### 异步

- 代码中：多段代码一起执行（调用的顺序和预料的不同）
  - 定时器，回调函数
  - Ajax 异步
- 现实中：多件事同时干，互不影响

### 12.3 注意点

1. 绝大多数的代码都是同步的

2. NodeJS中有大量的异步方法，判断依据：如果有回调函数 大部分情况都是异步

3. 判断依据二：跟 网络 、硬盘、内存 打交道的操作 一般 都是 异步的！

   - 定时器

   - fs读写文件

   - ajax （浏览器）

   - jQuery动画回调函数（浏览器）

     `$('div').animte({height:100},function(){})` 

## 相对路径；

> 注：node.js文件中的相对路径，是相对与终端中的路径；

![1571999468418](assets/1571999468418.png)

## 两个全局变量；

> 注：直接可以使用；
>
> ​	1.nodeJS 不要使用相对路径，而要使用绝对路径；

- __dirname：获取执行文件所处的文件夹的 **绝对路径**；
- __filename：获取执行文件自己的 **相对路径**；

```js
//引入模块；
const fs=require('fs');

//拼接路径；注：拼接的路径最前面不要加 . ;
const fsfile=__dirname+'/text/test.text';

//读取文件；
 fs.readFile(fsfile,'utf-8',function (err,data) {
     if (err==null) {
         console.log('我读取成功了');
     } else{
         console.log('我读取失败了')
         console.log(err);
     }
 })
```

## Path模块；

> 模块提供用于处理文件路径和目录路径的实用工具；

```js
//使用方法；导入模块；
const path = require('path');
```

- `join`方法；
  - 主要用来拼接路径；

```js
//导包；
const fs=require('fs');
const path=require('path');

//生成绝对路径；
c=path.join(__dirname,'text','test.text');//可以不加`/`不加`.`,可以智能改错；
c=path.join(__dirname,'./text/test.text');

//读取文件；
fs.readFile(c,'utf-8',(err,data) => {
    if (err==null) {
        //返回读取到的文件内容；
        console.log(data)
    }
})
```

## http模块；

> node内置的服务器模块，可以让程序员方便的开发web服务器程序;
>
> http模块。开启的服务是http服务，访问时要带上；`http://`

1. **创建服务器；**

   ```js
   //导入内置模块；
   const http=require('http');
   //创建服务器；
   const server=http.createServer(function (request,response) {
       //返回响应；
       response.end('wo fan hui le');
   });
   //开启服务器开始监听；参数：匿名函数是开启后的回调函数；
   // 参数1 端口号
   // 参数2 监听的地址 省略的话就是本机,
   // 参数3 开启之后的回调函数
   server.listen(8889,function (err) {
       if (err==null) {
           console.log('开启成功了');
       } else {
           console.log('开启失败')
       }
   })
   ```

2. **响应中英文：**

   ```js
   //响应英文；
   //导入内置模块；
   const http=require('http');
   //创建服务器；
   const server=http.createServer(function (request,response) {
       //设置请求头，可以访问 中文 文件；
       response.setHeader('content-type','text/plain;charset=utf-8');
       //返回响应；
       // response.end('wo fan hui le');//若是英文则可以直接访问；
       response.end('我返回了');//若是中文则需设置请求头；
   });
   //开启服务器开始监听；参数：匿名函数是开启后的回调函数；
   server.listen(8889,function (err) {
       if (err==null) {
           console.log('开启成功了');
       } else {
           console.log('开启失败')
       }
   })
   ```

3. **响应网页；**

   - **request：**会把请求的信息都保存在这个对象中；

   ```js
   //导入内置模块；
   const http=require('http');//用于创建服务器；
   const fs = require('fs');//用于读写文件；
   const path=require('path');//用于生成路径；
   
   //创建服务器；
   const server=http.createServer(function (request,response) {
       //接收请求地址并转码；不然会乱码；
       const requestUrl = decodeURI(request.url);
       
       //拼接路径；
       const p_flie=path.join(__dirname,'./web',requestUrl);
       
       //拼接后的路径被写死了，导致可以请求成功但是响应结果依然是hrml结构；
       // const p_flie=path.join(__dirname,'./web/index.html');
   
       //由于请求头的设置，导致虽然读取到了html文件，但是无法解析；plain：表示普通文本；
       // response.setHeader('content-type','text/plain;charset=utf-8');
   
       /*
       * 读取文件；此时的参数中不需要再设置编码格式，因为在html中，已有utf-8了；
       * 如果设置了会由于编码格式的限制导致无法解析图片；*/
       fs.readFile(p_flie,function (err, data) {
           if (err==null) {
               console.log('我读取到文件了');
               
               //读取成功则返回响应；
               response.end(data);
           } else{
               console.log('我没读到文件');
               
               //此处设置请求头，时因为下面的`h1`标签；
               response.setHeader('content-type','text/html;charset=utf-8');
               
         		// 找不到就 提示404
         		response.end(`<h1> 404 你要的页面去火星了</h1>`);
           }
       })
   });
   
   //开启服务器开始监听；参数：匿名函数是开启后的回调函数；
   server.listen(8889,function (err) {
       if (err==null) {
           console.log('开启成功了');
       } else {
           console.log('开启失败')
       }
   })
   ```

4. **获取请求的方式；**

   - request.method获取请求的方式；`GET`或`POST`;

##  `express`模块；

### 注册`get`路由；

- Express 框架核心特性;
  - 用来创建服务器对象；
  - 可以设置中间件来响应 HTTP 请求。
  - 定义了路由表用于执行不同的 HTTP 请求动作。
  - 可以通过向模板传递参数来动态渲染 HTML 页面。
  - 可以实现服务器的功能；

#### 静态资源托管；

```js
//导包；
const express=require('express');

//创建服务器对象；
const app=express();

/*
* 托管静态资源，实现服务器的功能；
* 参数为中间件的处理函数；此处的
* 地址可以用相对路径./或../；*/
app.use(express.static('web'));

//开启服务器；
app.listen(3000,err=>{
    if (!err) {
        console.log('开启成功');
    }
})
```

#### 例；

- `get`请求时；客户端提交的数据，在url后面；可以直接获取；

```js

//导包；导出模块；
const express = require('express');
const fs = require('fs');
const path = require('path');

/*
* 创建服务器对象；创建一个Express应用程序。
* 该express()函数是express模块导出的顶级函数。*/
const app = express();

//注册路由；注意：不要加 .
app.get('/jokes', function (request, response) {
    //创建路径；
    const fsfile = path.join(__dirname, './jokes.json');

    //读取文件；
    fs.readFile(fsfile, function (err, data) {
        //判断；
        if (!err) {
            console.log('我读取到文件了');
            //把读取到的文件进行转换；
            const arr = JSON.parse(data);
            //获取地址的输入信息；
            const num = request.query.num;
            //定义空数组；
            const jokes = [];
            //循环获取一定数量的笑话，并存放到数组中；
            for (let i = 0; i < num; i++) {
                //获取随机数；
                const ram = parseInt(Math.random() * arr.length);
                jokes.push(arr[ram])
            }
            //判断笑话数是否在此范围；
            if (num<arr.length) {
                //返回响应；定义一个对象用于返回；
                response.send({
                    num,
                    msg: '获取成功',
                    jokes,
                });
            } else {
                response.send({
                    num,
                    msg: '获取失败，请重新输入',
                });
            }
        } else {
            console.log('我没有读取到文件')
        }
    })
});

//开启服务器开始监听；
app.listen(8889, function (err) {
    //判断；
    if (!err) {
        console.log('开启服务器成功')
    } else {
        console.log('开启服务器失败了');
    }
})
```

### 注册`post`路由；

#### 例：

```js
/单文件上传；

//导包；
const express = require('express');
//用于生成路径；
const path = require('path');
//中间件；用于处理上传的文件；
const FileUpload = require('express-fileupload');

//创建服务器对象；
const app = express();

//处理中间件；
app.use(FileUpload());

//注册路由；
app.post('/fileupload', function (resquest, response) {
    //获取文件的名字；resquest.files==>获取的是个对象；
    //多文件上传时；icon==>是个数组；
    const filename = resquest.files.icon;
    //生成文件路径；
    const filepath = path.join(__dirname, './files', filename.name);
    //移动到文件夹中；每一个文件对象都有 mv 方法；
    filename.mv(filepath, function (err) {
        //判断；
        if (!err) {
            console.log('文件移入成功了')
        } else {
            console.log('文件移入失败了哦')
        }
    })
})

//开启路由开始监听；
app.listen(8889, function (err) {
    //判断；
    if (!err) {
        console.log('开启成功了')
    } else {
        console.log('开启失败了')
    }
})
```

#### 例：

```js
/验证用户名；

//导包；
const express=require('express');
//导包，中间件；
const bodyParser=require('body-parser');

//创建服务器；
const app=express();

//解析中间件；
app.use(bodyParser.urlencoded({extended: false}))

//注册路由；默认的post请求无法获取到提交的数据；
app.post('/username',function (request,response) {
    //定义一个用户名的数组来模拟；
    const arruser=['孙悟空','猪八戒','唐僧','沙和尚','如来']
    //获取用户提交的数据；
    const username=request.body.username;
    console.log(request.body)
    //判断数组中是否有此用户名；
    const num=arruser.indexOf(username)
     if (num==-1) {
         //返回响应；
         response.send({
             msg: '恭喜你，可以注册',
             code: 200,
         });
     }else{
         response.send({
             msg: '很遗憾，已被注册',
             code: 400,
         })
     }
})

//开启服务器开始监听；
app.listen(8889,function (err) {
    //判断；
    if (!err) {
        console.log('开启成功了')
    } else{
        console.log('开启失败了哦')
    }
})
```



## nodemon；

> node 的一个 `全局模块`
>
> 安装了之后可以自动检测文件修改，自动重新运行
>
> 1. 任意位置执行`npm i nodemon -g`
> 2. 安装完毕之后
>    1. `node xxx`
>    2. 换成;
>    3. `nodemon xxx`

## 跨域；

> 概念：**浏览器使用 `ajax`时**，如果请求了的**接口地址** 和当前**`打开的页面`**地址**`不同源`**称之为跨域；

1. 同源： 两个url`协议`地址`与`端口均一致；
2. 不同源；三个有一个不一同，则为不同源，称之为跨域；

### 跨域的解决方式；

#### **CORS（跨域资源共享）；**

- 目前最主流也是最简单的解决方案；

- 工作原理：

  - 服务器在返回响应报文的时候，在响应头中设置一个允许的header ；

  - `res.setHeader('Access-Control-Allow-Origin', '*');`

  - 让浏览器准许访问来自不同服务器上的指定资源；

    ```js
    // 注册路由；
    app.post('/corsPOST', (request, response) => {
        console.log('请求过来了-post');
        // 设置允许跨域
        response.header('Access-Control-Allow-Origin', '*');
        response.send('/post');
    });
    ```

> **注：**
>
> 1. get请求时：如果第一次请求成功，则由于缓存的存在，那么如果去掉允许跨域的代码片段；依然可以请求成功;
> 2. 虽热有跨域问题的出现，但是依然可以发送请求，但是无法接收响应的结果；

#### **cors中间件；**

- 基层原理；

  ```js
  app.use((req, res, next) => {
    //任何请求都会进入这个use中间件
    res.setHeader('Access-Control-Allow-Origin', '*')//设置响应头
    next()//执行下一个中间件
  })
  ```

- `express`的中间件`cors`，它的作用是自动给每一个res设置默认请求头;**需要下包**  npm i cors

  ```js
   //ajax请求；
  $(".get").click(function () {
              $.ajax({
                  url: "http://192.168.156.26:8889/list",
                  success(backData) {
                      console.log(backData);
                  }
              })
          })
  
  //导包；
  const express=require('express');
  //中间件;
  const cors=require('cors');
  
  //创建服务器对象；
  const app=express();
  //使用中间件来设置默认请求头；
  app.use(cors());
  
  //注册路由；
  app.get('/list',function (request,response) {
      console.log('我被请求了==get');
      response.send('我返回了');
  });
  
  app.post('/add',function (request,response) {
      console.log('我被请求了==post');
      response.send('我返回了')
  })
  
  //开启服务器，开始监听；
  app.listen(8889,function (err) {
      if (!err) {
          console.log('开启成功');
      }
  })
  ```

#### **JSONP;**

> 核心原理：如果script标签的src属性的请求，服务器返回的是一个函数调用。则浏览器会执行这个函数;
>
> 本质：会动态的在页面的顶部创建一个script标签，并进行解析为js一个函数的调用，并传入有个形参，之后会自动移出；

```JS
//用JSONP来解决跨域；必须是GET请求；
<input type="button" value="jsonp跨域方案" class="jsonp">

$('.jsonp').click(function () {
            $.ajax({
                url: 'http://192.168.156.26:3000/jsonpApi',
                data:{
                    name:'rose',
                    friend:'jack',
                    skill:'抗冻'
                },
                dataType:'jsonp',//响应内容为jsonp格式的；
                success(backData) {
                    console.log(backData);
                }
            })
        })


// 导包
const express = require('express')
// 创建服务器
const app = express()

// 注册路由
app.get('/jsonpApi',(request,response)=>{
    
    // 响应内容 jsonp的接口 返回数据用`jsonp`
    response.jsonp({
        msg:"请求成功",
        code:200,
        info:"欢迎再来"
    })
})

// 开启服务器
app.listen(3000,(err)=>{
    if(!err){
        console.log('success');
    }
})
```

1. 原理：

   - 设置script标签的src属性，向一个不同源的接口发送一个get请求；
     - **JSONP只支持get请求，不支持post**
   - src属性发送请求时，在参数中额外携带一个callback的参数，参数值是一个在页面中预先定于好的函数名
     - callback : 这是发明jsonp技术的人提出的一个`君子之约`，只要是jsonp前端程序员都统一将参数名定义为callback
     - callback属性值：预先定义的函数名，这个函数必须要在script标签之前定义
   - 服务器接收到请求之后，获取callback的参数值
   - 服务器将要响应的数据拼接成  `函数调用格式`，通过传参的方式将响应数据返回给浏览器

   ```js
   <script>
       function doSomething(backData){
           console.log("调用了");
           console.log(backData);
       }
   </script>
   //去请求3000端口，jsonpApi接口时，函数会被调用；
   <script src="http://192.168.156.26:3000/jsonpApi?callback=doSomething">
   </script>
   ```

#### **JSONP与CORS区别**

- CORS：
  - 服务器返回响应头，前端无需任何处理
  - 简单快捷，支持所有请求方式
- JSONP
  - 浏览器：自定义响应回调函数，使用script标签的src请求
    - 利用浏览器的src属性没有跨域这一限制特点
  - 服务器：接收callback参数，返回函数调用
  - 处理复杂，并且只支持get请求
    - **原因：get请求参数直接在url后面拼接，而post请求参数是放在请求体中；**
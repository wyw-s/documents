---
title: axios发delete请求，后台收不到参数
category: issues
date: 2021-05-02
---

## 1、问题；

> `vue`项目前台用`axios`发请求；由于之前也是一直用`axios`发请求，所以这一次遇到问题一脸懵逼；

- 请求方式：`delete`;请求头类型：`'application/json;charset=utf-8'`

  > 后台我用的是`nodejs`和`express`

- 解决：`axios`的请求头设置错误；

  - 错的设置；

    ```js
    const _Axios = axios.create({
      headers: {
        'Content-Type': 'application/json,charset=utf-8'
      }
    })
    ```
    
  - 正确的设置；

    ```js
  const _Axios = axios.create({
      headers: {
      'Content-Type': 'application/json;charset=utf-8'
      }
    })
    // 或者
    axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8'
    ```
    
    > 修改`application/json，charset=utf-8`后的`，`为`;`就可以了，后台就成功收到参数了；
  >
    > 不设置也是可以的，因为默认就是`application/json;charset=utf-8`
  
- 扩展：

  ```
  1、get请求：GET 请求不存在请求实体部分，键值对参数放置在 URL 尾部，浏览器把form数据转换成一个字串（name1=value1&name2=value2...），然后把这个字串追加到url后面用?分割，加载这个新的url。因此请求头不需要设置 Content-Type 字段。
  2、post请求：headers中有content-type这个字段一般包括：application/x-www-form-urlencoded、multipart/form-data、application/json、text/xml。
  ```

## 2、express接受参数；

如果是用`express.router()`的方式设计路由，那么你在接受参数时:

1. 对于get请求来说可以在`req.query`中获取url后面的参数:

   ```javascript
   router.get('/note', (request, response, next) => {
     console.log(request.query)
   })
   ```

2. 对于post请求来说，在不使用其它插件的情况下，只能采用原生获取参数的方法；

   ```javascript
   // 'Content-Type': 'application/json;charset=utf-8'
   router.post(/\/(add|import)/, (request, response, next) => {
     let body = ''
     request.on('data', function (chunk) {
       body += chunk // chunk是二进制数据
     })
     request.on('end', function (result) {
       console.log(result, '====', body, JSON.parse(body)) // 转化为对象
     })
   })
   ```

   > body就是获取的参数，然后y用JSON.parse(body)进行解析。

3. 使用插件`body-parser`

   ```javascript
   const bodyParser = require('body-parser')
   const app = new express();
   app.use(bodyParser.json())	
   ...
   
   router.post('/note', (request, response, next) => {
     console.log(request.body)
   })
   ```

   > 然后就直接可以在`req.body`中来获取请求过来的参数了。

4. `req.params`

   ```javascript
   // 适合获取production后的id：http://localhost:3000/production/id
   router.get('/note', (request, response, next) => {
     console.log(request.params)
   })
   ```

   
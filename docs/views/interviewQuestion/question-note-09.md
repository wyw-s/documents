---
title: 跨域问题
category: 面试题
time: 2021-07-28 17:39:23
---

> ​	当一个请求url的**协议、域名、端口**三者之间任意一个与当前页面url不同即为跨域；

1. API跨域可以通过服务器上nginx反向代理；
2. 本地webpack dev server可以设置 proxy；
3. new Image, 设src 的时候，图片需要设置Cors
cors需要后台配合设置HTTP响应头，如果请求不是简单请求（1. method：get，post，2. content-type：三种表单自带的content-type，3. 没有自定义的HTTP header），浏览器会先发送option预检请求，后端需要响应option请求，然后浏览器才会发送正式请求，cors通过白名单的形式允许指定的域发送请求；
4. jsonp是浏览器会放过 img script标签引入资源的方式。所以可以通过后端返回一段执行js函数的脚本，将数据作为参数传入。然后在前端执行这段脚本。双方约定一个函数的名称。
  联调的时候会需要跨域，线上前端站点域和后台接口不一致也需要跨域，开发时跨域可以通过代理服务器来转发请求，因为跨域本身是浏览器对请求的限制，常见的跨域处理还有JSONP和cors，jsonp是利用脚本资源请求本身就可以跨域的特性，通过与请求一起发送回调函数名，后台返回script脚本直接执行回调，但是由于资源请求是get类型，请求参数长度有限制，也不能进行post请求。cors需要后台配合设置HTTP响应头，如果请求不是简单请求（1. method：get，post，2. content-type：三种表单自带的content-type，3. 没有自定义的HTTP header），浏览器会先发送option预检请求，后端需要响应option请求，然后浏览器才会发送正式请求，cors通过白名单的形式允许指定的域发送请求
  同源策略只是浏览器客户端的防护机制，当发现非同源HTTP请求时会拦截响应，但服务器依然处理了这个请求。
  服务器端不拦截，所以在同源服务器下做代理，可以实现跨域。
  我之前这么看的node中间层处理跨域。
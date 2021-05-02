---
title: Async 函数
---



>  ES2017 标准引入了 async 函数，使得异步操作变得更加方便。 
>
>  `async`表示函数里有异步操作，`await`表示紧跟在后面的表达式需要等待结果。 

## 基本用法；

>   使用 Async-await 来简化获取 Promise 的结果  ;
>

```js
  <script>
    async function main() {
      // 遇到await便会等待响应结果；
      const 成员 = await Promise对象
      // 请求出错或响应回来后继续往后执行
    }
  </script>
```

##   任何函数都可以使用`async `

```js
<script>
    //  具名函数
    async function main () {}
    // 匿名函数
    async function () {}
    // 箭头函数
    async () => {}
    // 对象成员函数简写
    async hello () {}
  </script>
```

## 返回`promise`

```js
<script>
      async function main() {
        // async 函数始终返回 Promise
        // async 函数的返回值
        // 如果是普通数据，则直接把它包装到 promise 对象中
        // 数据就是 resolve 的结果
        return 123

        // 如果你返回的直接就是一个 promise 对象，则不作任何处理
        // return new Promise((resolve) => {
        // setTimeout(() => {
        // resolve(123)
        // }, 2000)
        // })
      }
      // 通过 then 方法来获取 async 函数的返回值
      // .then(data => {
      // console.log(data)
      // })
      main2()
    </script>
```

## 错误处理；

```js
 <script>
      async function main() {
        // 还是使用 .catch 来处理异常
        // const data = await request('dsanlksas')
        // .catch(err => {
        // console.log('请求失败了')
        // })
        // console.log(data)
        console.log(1)
     
        // 更推荐使用 try-catch 来捕获异常
        try {
          // try 捕获不到它的异常
          // request('dsabjdsdsa').then(data => {
          // console.log(data)
          // })
          // JSON.parse('dnsakdnsa')
          console.log(2)
            
          const data = await request(
            'http://jsonplaceholder.typicode.com/posts'
          )
          console.log(3)
          const data2 = await request('dnsandlksa')
          console.log(4)
        } catch (err) {
          console.log('请求失败了', err)
        }
        
        console.log(5)
      }

      main()
    </script>
```


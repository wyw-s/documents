---
title: 单元测试
---

> 测试是一种验证我们的代码是否可以按我们的预期工作的方法；被测试的对象可以是，样式、功能、组件等；
>
> 单元测试是指对软件中的最小可测试单元进行检查和验证；

前端单元测试的意义：

- 检测出潜在的bug;
- 快速反馈功能输出，验证代码是否达到预期；
- 保证代码重构的安全性；
- 方便协作开发；

## 示例

1. 被测试对象；

   ```javaScript
   // 被测试对象;
   let add = (a, b) => a * b;
   ```

2. 测试代码；

   ```javaScript
   // 测试代码
   let expect = (res) => {
     return {
       toBe: (actual) => {
         if(res !== actual) {
           throw new Error('预期值与实际值不符')
         }
       }
     }
   }
   
   let test = (desc, fn) => {
     try {
       fn()
     } catch (e) {
       console.log(`${desc}没有通过 %o`, e.message)
     }
   }
   
   // 开始测试；
   test('加法测试', () => {
     expect(add(1,2)).toBe(3);
   })
   
   ```

   > 在这个示例中：我们的测试对象是加法：1+2 正确应该是 3，则测试通过，但是如果你不小心写成了`*`法，则捕获错误，输出：加法测试没有通过 预期值与实际值不符；

## jest的基础使用

1. 安装`jest`;

   ```shell
   ASUS@yaweidediannao MINGW64 ~/Desktop/test
   $ npm i -D jest
   ```

2. 测试是否安装成功；

   ```shell
   ASUS@yaweidediannao MINGW64 ~/Desktop/test
   $ npm ls jest
   test@1.0.0 C:\Users\ASUS\Desktop\test
   `-- jest@26.6.3
   # 若出现版本号，则安装成功；
   ```
   
3. 新建文件`math.js和math.test.js`；

   ```shell
   # 文件结构
   test
   ├── math.js
   ├── math.test.js
   ├── package-lock.json
   └── package.json
   ```

   ```javaScript
   // math.js
   let add = (a, b) => a + b;
   module.exports = { add }
   
   
   // math.test.js
   const { add } = require('./math');
   test('加法测试', () => {
     expect(add(1,2)).toBe(3);
   })
   ```

4. 定义脚本

   ```javaScript
     "scripts": {
       "test": "jest"
     },
   ```

5. 执行结果：

   ```sh
   ASUS@yaweidediannao MINGW64 ~/Desktop/test
   $ npm run test
   
   > test@1.0.0 test
   > jest
   
    PASS  ./math.test.js
     √ 加法测试 (2 ms)
   
   Test Suites: 1 passed, 1 total
   Tests:       1 passed, 1 total
   Snapshots:   0 total
   Time:        3.383 s
   Ran all test suites.
   
   ```

   


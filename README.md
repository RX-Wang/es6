## 用于各种测试学习

#### 一、base64转码

>sth/test-base64.js

#### 二、Nodejs socket 编程

>sth/tcp-client.js  sth/tcp-server.js

#### 三、多种排序

>sth/sortMethod.js

#### 四、node的事件循环

>sth/eventloop.js

#### 五、多进程测试

>sth/test-cluster.js

#### 六、mocha框架进行单元测试
>sth/test-mocha.js

>断言库：should.js

命令：
```
    $ mocha    //mocha命令默认执行的文件是 /test/yield_test.js   也可以手动设置测试文件目录
    $ mocha  sth/test01.js
```

#### 七、request-promise 模块模拟http请求

>test/httpClient.js

#### 八、正则表达式格式化货币格式。

>sth/regex.js

54321.12 -> 54,321.12

#### 九、crypto加密、解密算法

>sth/test-crypto.js

#### 十、AES_CBC_PKCS加密
>sth/test-decrytp.js

#### 十一、View学习积累
>view/Vue

#### 十二、bind学习
>sth/test-bind.js

#### 十三、单例
>sth/test-singleton.js

#### 十四、测试CommonJS规范对包的引用规则
>sth/test-require.js
#### 十五、设计模式
>/d 目录下面的

#### 十六、尾调用优化
 尾调用优化只在 严格模式下生效。严格模式下 函数的 arguments（当前函数接收到的参数们） 和 caller（调用当前函数的函数） 两变量会失效
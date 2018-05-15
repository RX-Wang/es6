/**
 * 通过 require 引入 config.json ，node 在全局维持一个对象，如果某个js 对config 做了修改，
 * 则会产生意外的影响。
 * 
 * 解决方案：通过 file 系统读取json 文件内容为 string 格式，然后 在各个需要 config 的js中使用：JSON.parse()
 * 得到对象，此时便可以随便更改。
 */

const Koa = require('koa');
const Router = require('koa-router');
const fs = require('fs');
const path = require('path');

const c1 = require('./c1');
const c2 = require('./c2');

const app = new Koa();
const router = new Router();

router.get('/', c1.c1);

router.get('/16', c2.c2);

app.use(router.routes())
   .use(router.allowedMethods());

app.listen(3000);

// console.log(fs.existsSync(path.join(__dirname, 'dist1')));

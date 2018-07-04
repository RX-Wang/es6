const co = require('co');
const readFile = require('fs-readfile-promise');
const fs       = require('fs');

/**
 * 普通 Generator模式
 */
/*
function *a() {
    let pb = yield {name : 'zhangsan'};
    console.log('我在Generator函数内---%j',pb);  //这里是娶不到pb的。这类似于nodejs 的普通异步函数。
    //throw new Error('报错啦');
}
const b = a();
console.log('b--%j',b); //b--{}
const c = b.next();
console.log('c--%j',c); //c--{"value":{"name":"zhangsan"},"done":false}
//const d = b.next();
//console.log('d--%j',d); //   1、我在Generator函数内---undefined    2、d--{"done":true}

/!**
 * //如果我们把第一个next()中 yield后的值传递给 第二个next()，那么我们就可以拿到pb了。
 * 这一步可以通过Co模块来实现。
 * @type {T|*|Object}
 *!/
const d = b.next(c.value);
console.log('d-----%j',d);
*/

/**
 *  结合：Co 模块
 */

/**
 * 非Promise---伪同步模式
 */
/*
function *a() {
    try{
        let pb = yield {name : 'zhangsan'};
        //let pb = yield 1;
        console.log(pb);
        //throw new Error('报错啦');
    }catch (e){
        console.log(e);
    }
}
co(a);
*/


/**
 * 使用co+then()
 * 因为co包装Generator函数，并返回一个Promise对象，所以可以使用 传统Promise方式来处理
 * @returns {*}
 */
/*function *a() {
    let pb = yield {name : 'zhangsan'};
    throw new Error('报错啦');
    //return pb;
}
co(a).then(function (data) {
    console.log('收到参数：',data);
}).catch(function (err) {
    console.log(err);
});*/


/**
 * 异步读取文件内容
 */
function *a() {
    try{
        // let pb = yield readFile('./doc.txt');    //使用第三方的 Promise-fs 包
        let pb = yield readFiles();                 //使用手动包装成Promise的fs
        console.log(pb.toString());
    }catch (e){
        console.log(e);
    }
}
co(a);

/**
 * 一个返回Promise的函数
 * @returns {Promise}
 */
function readFiles() {
    return new Promise(function (reso,rej) {
        fs.readFile('./doc.txt',function (err,data) {
            reso(data);
        })
    });
}

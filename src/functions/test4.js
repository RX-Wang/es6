/**
 * Created by wxq on 17-3-1.
 */
/*function a(){
    var b = 12;
    return  a = b >= 1 ? 'aaa' : 'ccc';
}
console.log(a());*/

/**
 * 获取用户姓名
 * @param flag
 */
var Promise = require('bluebird');
function getName(flag){
    new Promise(function (resolve, reject) {
        // throw new Error('崩了');
        if(flag)
            resolve('你好，我叫张三');
        else
            reject(new Error('获取姓名失败'));
    }).then(function(data){
        console.log('success:%s',data);
    }).catch(function(err){
        console.log('error:%s',err);
    });
}

getName(false);

/*var p1 = new Promise(function(resolve,reject){
   resolve('p1');
});
var p2 = new Promise(function(resolve,reject){
    // reject('p2,error');
    resolve('p2');
});
var p3 = new Promise(function(resolve,reject){
    resolve('p3');
});
Promise.all([p1,p2,p3])
    .then(function (results) {
        console.log(results);
    })
    .catch(function(err){
        console.log('如果有一个Promise报错，其他成功的都不会被返回：' + err);
    }) ;*/


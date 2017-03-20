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
        if(flag)
            resolve('你好，我叫张三');
        else{}
        // throw new Error('崩了');
            reject(new Error('获取姓名失败'));
    }).then(function(data1){
        console.log('then1:%s',data1);
        return new Promise(function (reso,rejj) {
           setTimeout(function(){
               reso('我是第一个then中的新promise返回的值111','我是第一个then中的新promise返回的值222');//resolve 只能返回一个值
           },1000);
        });
        /*setTimeout(function(){
            return data1;       //回调函数中用return时，下一个then不会接收到数据
        },1000);
        return data1; */          //直接return的时候，下一个then能接收到数据
    }).then(
        function(data21,data22){
          console.log('then21:%s,then22:%s',data21,data22);   //data22  是undefind
        },
        function(err2){
            console.log(err2);
        }
    ).catch(function(err){
        console.log('error:%s',err);
    });
}

getName(true);

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


/**
 * Created by RX-Wang on 2017/9/17.
 */
/**
 * 普通方式
 */
/*function fibo (n) {
    return n > 1 ? fibo(n - 1) + fibo(n - 2) : 1;
}
var n=8;
function back(){
    if(!--n) return console.timeEnd('no thread');
}
console.time('no thread');

process.nextTick(function(){
    console.log(fibo (40));
    back();
})
process.nextTick(function(){
    console.log(fibo (40));
    back();
})
process.nextTick(function(){
    console.log(fibo (40));
    back();
})
process.nextTick(function(){
    console.log(fibo (40));
    back();
})

process.nextTick(function(){
    console.log(fibo (40));
    back();
})

process.nextTick(function(){
    console.log(fibo (40));
    back();
})
process.nextTick(function(){
    console.log(fibo (40));
    back();
})
process.nextTick(function(){
    console.log(fibo (40));
    back();
})*/





/**
 * cluster 模块
 */
var cluster = require('cluster');
var numCPUs = 8;
function fibo (n) {
    return n > 1 ? fibo(n - 1) + fibo(n - 2) : 1;
}
console.time('8 cluster');
if (cluster.isMaster) {
    // Fork workers.
    for (var i = 0; i < numCPUs; i++) {
        cluster.fork();
    }
    var j = 8;
    cluster.on('exit', function(worker, code, signal) {
        if(!--j){
            console.timeEnd('8 cluster');
            process.exit(0);
        }
    });
} else {
    console.log(fibo (40));
    process.exit(0);
}

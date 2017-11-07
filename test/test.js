/**
 * Created by RX-Wang on 2017/9/12.
 */
var sortMethod   = require('../sth/sortMethod');
var searchMethod = require('../sth/searchMethod');
var httpClient   = require('./httpClient');
var regex   = require('../sth/regex');
var a = [1,4,6,8,0,2,7,5,12,89,23,144,21,2345,54,9,11,3456,25];
/*console.time('测试排序');
//console.log(sortMethod.defaultSort(a));  //默认
//console.log(sortMethod.bubbleSort(a));  //冒泡
//console.log(sortMethod.selectionSort(a)); //选择
//console.log(sortMethod.insertionSort(a)); //插入排序
//console.log(sortMethod.shellSort(a)); //希尔排序
//console.log(sortMethod.quickSort(a)); //快速排序
//console.log(sortMethod.HeapSort(a)); //大顶堆排序
console.timeEnd('测试排序');*/

/*  测试查询算法

var b = [ 0, 1, 2, 4, 5, 6, 7, 8, 9, 11, 12, 21, 23, 25, 54, 89, 144, 2345, 3456 ,12345];
console.time('测试查询算法');
console.log(searchMethod.binary_search(b,0,19,5));
console.timeEnd('测试查询算法');*/

/**
 * 测试 HTTP 请求。
 */

/*httpClient.httpClient({
    url     : 'http://localhost:3000/users',
    method  : 'post',
    data    : {
        name : 'Diana',
        age  : 18,
        sex  : 'female'
    }
}, function (err,response) {
   console.log('err:%j----response:%j',err,response);
});*/

/**
 * 测试 格式化金钱
 */
// console.log(regex.formatMoney('12345678912345678.1234567'));

console.log(regex.formatDate('20170101121212'));
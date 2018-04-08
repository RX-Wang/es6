/**
 *  1、数组的  toString() 方法 和 join() 方法的速度比较
 */
/* var a = [];
for (var i = 0; i < 100000; i++) {
  a[i] = Math.random().toString();
}
console.time('toString');
// 两个一样的效果
a.toString(); // 比较慢
// a.join(','); // 比较快
console.timeEnd('toString'); */

/**
 *  2、数组的 sort() 、reverse()方法
 */

//  var b = [0,4,5,20,12,25,15];
/* var b = ['name','age','sex','diana','mile','abc'];
 // 升序
 function compareAsc(v1, v2) {
   if(v1 <= v2){
     return -1;
   } else if(v1 === v2){
     return 0;
   } else {
     return 1;
   }
  }
  function compareAsc02(v1, v2) {
    return v1 - v2;
  }

// 降序
  function compareDesc(v1, v2) {
    if(v1 >= v2){
      return -1;
    } else if(v1 === v2){
      return 0;
    } else {
      return 1;
    }
  }
  function compareDesc02(v1, v2) {
    return v2 - v1;
  } 
 var c = 
  // b.reverse(compareAsc); // 没用
  // b.sort(compareAsc); // [ 0, 4, 5, 12, 15, 20, 25 ]
  // b.sort(compareAsc02); // [ 0, 4, 5, 12, 15, 20, 25 ]
  //  b.sort(compareDesc); // [ 25, 20, 15, 12, 5, 4, 0 ]
  //  b.sort(compareDesc02); // [ 25, 20, 15, 12, 5, 4, 0 ]
  // b.reverse();
  // b.sort();

//  console.log(c); */


var a = [1,2,3,4,5,6,7];
var b = a.slice(1,3);
console.log(a);  //  [1,2,3,4,5,6,7]
console.log(b); //  [1,2]
console.log(a === a.slice(0));
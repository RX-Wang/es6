/* let arr = ['a', 'b', 'c'];
let iter = arr[Symbol.iterator]();
console.log(iter);
console.log(iter.next()) // { value: 'a', done: false }
console.log(iter.next()) // { value: 'b', done: false }
console.log(iter.next()) // { value: 'c', done: false }
console.log(iter.next()) // { value: undefined, done: true }
 */

/* const arr = [1,2,3,4,5,6,7];
for(let a of arr) {
  console.log(a);
} */

/* let set = new Set().add('a').add('b').add('c');
console.log(set);

let [x,y] = set;
console.log(x,y);
// x='a'; y='b'

let [first, ...rest] = set;
console.log(first, rest);
// first='a'; rest=['b','c']; */

let ar = [1,2,3,4,5,6];
/* 
// 数组元素不会改变
for(let a of ar) {
  a++;
} */
// 数组元素不会改变
// ar.forEach((elem) => ++elem);
// 数组元素会改变
/* for(let i = 0; i < ar.length; i++) {
  ar[i]++;
} */
// map 方法返回 被修改过的数组，原数组不会做任何改变。
// 但是可以将map 的返回值赋予 原数组的变量。
// ar = ar.map(elem => ++elem);
console.log(ar);

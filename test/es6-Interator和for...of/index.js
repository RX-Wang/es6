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
/* for(let a of ar) {
  a++;
} */
// ar.forEach((elem) => elem++);
/* for(let i = 0; i < ar.lenght; i++) {
  ar[i]++;
} */
ar = ar.map(elem => { 
  return ++elem;
});
console.log(ar);
/**
 * Created by wxq on 17-1-20.
 */
var x = 1;
function foo(x, y = function() { x = 2; console.log(x);}) {
    console.log(x);
    var x = 3;
    console.log(x);
    y();
    console.log(x);
}
foo();

/////////////////
console.log([1,2,3]);
console.log(...[1,2,3]);
(function(...args){
    console.log(args);
})(1,2,3,4,5,6,7,8,9);
console.log(Math.max(...[22,66,23457]));
console.log(Math.min(...[22,66,23457]));
//////////////

let map = new Map([
    [1, 'one'],
    [2, 'two'],
    [3, 'three'],
]);
console.log(map);
console.log(...map);
console.log([...map.keys()]);

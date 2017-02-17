/**
 * Created by wxq on 17-2-16.
 */
function* numbers() {
    console.log('function start.');

    var v1 = yield 0;
    console.log('v1 = ' + v1);

    var v2 = yield 1;
    console.log('v2 = ' + v2);

    return 5;
}
/**
 * 没看明白
 */
var nums = numbers();
console.log(nums.next());
console.log(nums.next());
console.log(nums.next());
nums.next();
nums.next();
nums.next();



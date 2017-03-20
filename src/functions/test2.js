/**
 * Created by wxq on 17-2-16.
 */
/**
 * yield 代码 执行到 yield便停止
 * @returns {number}
 */

/*function* numbers() {
    console.log('function start.');

    var v1 = yield 0;
    console.log('v1 = ' + v1);

    var v2 = yield 1;
    console.log('v2 = ' + v2);

    return 5;
}

var nums = numbers();
console.log(nums.next());
console.log(nums.next());
console.log(nums.next());
nums.next();
nums.next();
nums.next();*/

/**
 * 管道函数
 */

const pipeline = (...funcs) =>
    val => funcs.reduce((a, b) => b(a), val);

const plus1 = a => a + 1;
const mult2 = a => a * 2;
const addThenMult = pipeline(plus1, mult2);

addThenMult(5);


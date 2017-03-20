/**
 * Created by wxq on 17-2-9.
 */

/**
 *  函数参数结构：
 *  一、function m1({x = 0, y = 0} = {}){...}
 *
 *  二、function m2({x, y} = { x: 0, y: 0 }) {...}
 *
 *  方法一可理解为：
 *    1、如果没有给函数传参，则用空的{}代替，然后 x和y的默认值各为0；
 *    2、如果传了参则不会用空的{}代替。
 *      1)、如果实参的key 与形参的key一一对应，那么实参的值会替换掉形参的默认值
 *      2)、如果实参的key 与形参的key不一一对应，只会替换掉对应位置的值，不对应的位置仍然用形参的默认值（0）。
 *  方法二可理解为：
 *    1、如果没有给函数传参，则用{ x: 0, y: 0 }代替，然后 x和y的默认值各为0；
 *    2、如果传了参则不会用空的{}代替。
 *      1)、如果实参的key 与形参的key一一对应，那么实参的值会替换掉形参的默认值
 *      2)、如果实参的key 与形参的key不一一对应，只会替换掉对应位置的值，不对应的位置仍然用形参的默认值（undefined）。
 */





// 写法一
function m1({x = 0, y = 0} = {}) {
    console.log([x, y]) ;
}

// 写法二
function m2({x, y} = { x: 0, y: 0 }) {
    console.log([x, y]);
}

// 函数没有参数的情况
m1(); // [0, 0]
m2(); // [0, 0]

// x和y都有值的情况
m1({x: 3, y: 8}); // [3, 8]
m2({x: 3, y: 8}); // [3, 8]

// x有值，y无值的情况
m1({x: 3}) ;// [3, 0]
m2({x: 3}); // [3, undefined]

// x和y都无值的情况
m1({}); // [0, 0];
m2({}); // [undefined, undefined]

m1({z: 3}); // [0, 0]
m2({z: 3}); // [undefined, undefined]


function add(...values) {
    let sum = 0;
    console.log(values);
    console.log(...values);
    for (var val of values) {
        sum += val;
    }

    console.log( sum);
}

add(2, 5, 3);


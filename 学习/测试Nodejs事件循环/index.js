/**
 * setImmediate与setTimeout(fn,0) 中的回调函数的执行顺序不一定。
 */
/* setImmediate(function A() {
  console.log(1);
  setImmediate(function B(){console.log(2);});
});

setTimeout(function timeout() {
  console.log('TIMEOUT FIRED');
}, 0); */

/**
 * 执行顺序不一定。
 */
/* setImmediate(function (){
  setImmediate(function A() {
    console.log(1);
    setImmediate(function B(){console.log(2);});
  });

  setTimeout(function timeout() {
    console.log('TIMEOUT FIRED');
  }, 0);
}); */

/* console.log('main1');  // 主进程-->输出顺序：1
process.nextTick(function() { 
      console.log('process.nextTick1');  // microTask-->输出顺序：4
});
setTimeout(function() { 
    console.log('setTimeout');  // macroTask-->输出顺序：6
    process.nextTick(function() { 
        console.log('process.nextTick2'); // macroTask 执行后定义的另一个新的 microTask-->输出顺序：7
    });
}, 0);
new Promise(function(resolve, reject) { 
    console.log('promise');   // 主进程-->输出顺序：2
    resolve();
}).then(function() { 
    console.log('promise then'); // microTask-->输出顺序：5
});
console.log('main2');  */


/**
 *  callee/ caller/ arguments
 */
/* function parent(param1, param2, param3) {
  child(param1, param2, param3);
}

function child() {
  console.log(arguments); // { '0': 'mqin1', '1': 'mqin2', '2': 'mqin3' }
  console.log(arguments.callee); // [Function: child]
  console.log(child.caller); // [Function: parent]
}

parent('mqin1', 'mqin2', 'mqin3'); */

// console.log('----process.stdin ', process.stdin);
// console.log('----process.env ', process.env);
// console.log('-----process.argv ', process.argv);
// console.log('-----process.arch ', process.arch);  // x64   多少位的操作系统
// console.log('-----process.platform ', process.platform);   // darwin  操作系统名称
// console.log(process.stdout);

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
setImmediate(function (){
  setImmediate(function A() {
    console.log(1);
    setImmediate(function B(){console.log(2);});
  });

  setTimeout(function timeout() {
    console.log('TIMEOUT FIRED');
  }, 0);
});
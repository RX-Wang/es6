/**
 *  注意：尾调用优化只在 严格模式下生效。严格模式下 函数的 arguments（当前函数接收到的参数们） 和 caller（调用当前函数的函数） 两变量会失效
 */


// 柯里化 式优化
/* function currying(fn, n) {
  return function (m) {
    return fn.call(null, m, n);
  };
}

function tailFactorial(n, total) {
  if (n === 1) return total;
  return tailFactorial(n - 1, n * total);
}

const factorial = currying(tailFactorial, 1);

console.log(factorial(5)); */


/**
 *  ES6 默认值式
 */
function factorial(n, total = 1) {
  if (n === 1) return total;
  return factorial(n - 1, n * total);
}

console.log(factorial(5));


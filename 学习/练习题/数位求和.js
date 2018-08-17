/**
 * 
    给定一个整数数组和一个目标值，找出数组中和为目标值的两个数。

    你可以假设每个输入只对应一种答案，且同样的元素不能被重复利用。

    示例:

    给定 nums = [2, 7, 11, 15], target = 9

    因为 nums[0] + nums[1] = 2 + 7 = 9
    所以返回 [0, 1]
 */


function sum(arr, target) {
  console.time('sum');
  var result = [], checkValue = [];
  var n = 0;
  for(let i = 0; i < arr.length; i++) {
    for(let j = 1; j < arr.length; j++) {
      n++;
      if (checkValue.indexOf(arr[i]) > -1) {
        break;
      } else if(arr[i] + arr[j] === target) {
        result.push(i);
        result.push(j);
        checkValue.push(arr[i]);
        checkValue.push(arr[j]);
      }
    }
  }
  console.timeEnd('sum');
  console.log(n);
  console.log(checkValue);
  return result;
}
var array = [1,2,12,1,6,4,7,3,0,6,2,4,5,8];
console.log(sum(array, 9));

function _sum(arr, arrLength, i, j, target, result) {
  'use strict';
  if (_checkValue.indexOf(arr[i]) > -1 || (i < arrLength - 1 && j === arrLength)) {
    return _sum(arr, arrLength, i + 1, i + 2, target, result);
  } else if (j < arrLength) {
    if (arr[i] + arr[j] === target) {
      result.push(i);
      result.push(j);
      _checkValue.push(arr[i]);
      _checkValue.push(arr[j]);
    }
    return _sum(arr, arrLength, i, j+1, target, result);
  }
}

console.time('sum-');
const _result = [], _checkValue= [];;
_sum(array, array.length, 0, 1, 9, _result);
console.timeEnd('sum-');
console.log(_checkValue);
console.log(_result);


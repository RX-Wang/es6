/**
 * Created by RX-Wang on 2017/9/12.
 *
 * 各种查询算法
 */

/**
 * 二分查找----是一种在  ***有序数组***  中查找指定值得方式
  * @type {number}
 */
var count = 0;
exports.binary_search = function binary_search(arr,low, high, key) {
    count++;    //查询次数
    if (low > high){
        return -1;
    }
    var mid = parseInt((high + low) / 2);
    if(arr[mid] == key){
        console.log(count);
        return mid;
    }else if (arr[mid] > key){
        high = mid - 1;
        return binary_search(arr, low, high, key);
    }else if (arr[mid] < key){
        low = mid + 1;
        return binary_search(arr, low, high, key);
    }
};
/**
 * Created by RX-Wang on 2017/9/12.
 *
 * 各种排序算法
 */

/**
 * 0、js 默认的 sort排序方法
 * ################   默认排序顺序是根据字符串Unicode码点
 * ################   V8 引擎 sort 函数只给出了两种排序 InsertionSort(插入排序) 和 QuickSort(快速排序)，
 * ################   数量小于10的数组使用 InsertionSort，比10大的数组则使用 QuickSort
 * @param arr
 * sort()方法接受一个函数作为参数，该函数接受两个参数: a,b 如果 a - b <0,则a排在b前(及正序排列，反之为倒序排列)
 */
exports.defaultSort = function(arr){
    return arr.sort(function (a,b) {
        return b - a;
    })
};

/**
 * 1、冒泡排序-----相邻两个元素进行比较。
 * 正序
 * @param arr
 * @returns {*}
 */
exports.bubbleSort = function(arr) {
    var len = arr.length;
    for (var i = 0; i < len; i++) {
        for (var j = 0; j < len - 1 - i; j++) {
            //if (arr[j] > arr[j+1]) {        //相邻元素两两对比---正序
            if(arr[j] < arr[j+1]){          //相邻元素两两对比---倒序
                var temp = arr[j+1];        //元素交换
                arr[j+1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
};

/**
 * 2、选择排序
 * @param arr
 * @returns {*}
 */
exports.selectionSort = function(arr) {
    var len = arr.length;
    var minIndex, temp;
    for (var i = 0; i < len - 1; i++) {
        minIndex = i;
        for (var j = i + 1; j < len; j++) {
            //if (arr[j] < arr[minIndex]) {     //寻找最小的数---正序排列
            if (arr[j] > arr[minIndex]) {     //寻找最大的数---正序排列-----minIndex 变量名最好改成maxIndex
                minIndex = j;                 //将最小数的索引保存
            }
        }
        temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
    return arr;
};

/**
 * 3、插入排序
 * @param arr
 * @returns {*}
 */
exports.insertionSort = function(arr) {
    var len = arr.length;
    var preIndex, current;
    for (var i = 1; i < len; i++) {
        preIndex = i - 1;
        current = arr[i];
        //while(preIndex >= 0 && arr[preIndex] > current) {  // 正序排列
        while(preIndex >= 0 && arr[preIndex] < current) {   //  倒序排列
            arr[preIndex+1] = arr[preIndex];
            preIndex--;
        }
        arr[preIndex+1] = current;
    }
    return arr;
};

/**
 * 4、希尔排序
 *       ***************  没看明白，且有问题
 * @param arr
 * @returns {*}
 */
exports.shellSort = function (arr) {
    var len = arr.length,
        temp,
        gap = 1;
    while(gap < len/3) {          //动态定义间隔序列
        gap =gap*3+1;
    }
    for (gap; gap> 0; gap = Math.floor(gap/3)) {
        for (var i = gap; i < len; i++) {
            temp = arr[i];
            for (var j = i-gap; j > 0 && arr[j]> temp; j-=gap) {
                arr[j+gap] = arr[j];
            }
            arr[j+gap] = temp;
        }
    }
    return arr;
};

/**
 * 5、快速排序--(可用)
 * @param arr
 * @param left
 * @param right
 * @returns {*}
 */
exports.quickSort = function quickSort(arr, left, right) {
    var len = arr.length,
        partitionIndex,
        left = typeof left != 'number' ? 0 : left,
        right = typeof right != 'number' ? len - 1 : right;

    if (left < right) {
        partitionIndex = partition(arr, left, right);
        quickSort(arr, left, partitionIndex-1);
        quickSort(arr, partitionIndex+1, right);
    }
    return arr;
};

function partition(arr, left ,right) {     //分区操作
    var pivot = left,                      //设定基准值（pivot）
        index = pivot + 1;
    for (var i = index; i <= right; i++) {
        if (arr[i] < arr[pivot]) {    //正序排列
        //if (arr[i] > arr[pivot]) {    //倒序排列
            swap01(arr, i, index);
            index++;
        }
    }
    swap01(arr, pivot, index - 1);
    return index-1;
}
function swap01(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

/**
 * 堆排序算法--(可用)
 * @param array
 * @returns {*}
 * @constructor
 */
exports.HeapSort = function HeapSort(array) {

    function swap(array, i, j) {
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    function maxHeapify(array, index, heapSize) {
        var iMax, iLeft, iRight;
        while (true) {
            iMax = index;               //1
            iLeft = 2 * index + 1;      //3
            iRight = 2 * (index + 1);   //4

            //正序排列
            /*if (iLeft < heapSize && array[index] < array[iLeft]) {
                iMax = iLeft;
            }

            if (iRight < heapSize && array[iMax] < array[iRight]) {
                iMax = iRight;
            }*/

            //倒序排列
            if (iLeft < heapSize && array[index] > array[iLeft]) {
                iMax = iLeft;
            }

            if (iRight < heapSize && array[iMax] > array[iRight]) {
                iMax = iRight;
            }

            if (iMax != index) {
                swap(array, iMax, index);
                index = iMax;
            } else {
                break;
            }
        }
    }

    function buildMaxHeap(array) {
        var i , iParent = Math.floor(array.length / 2) - 1;

        for (i = iParent; i >= 0; i--) {
            maxHeapify(array, i, array.length);
        }
    }

    function sort(array) {
        buildMaxHeap(array);

        for (var i = array.length - 1; i > 0; i--) {
            swap(array, 0, i);
            maxHeapify(array, 0, i);
        }
        return array;
    }

    return sort(array);
};
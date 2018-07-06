var num = 123;
var str = 'string';
var bool = true;
var fun = function() {
  console.log('function');
}
var arr = [1,2,3,4];
var obj = { name: 'Diana' };

function getType(param) {
  var type = Object.prototype.toString.call(param);
  type = type.split(' ')[1].replace(']','');
  console.log(type);
}
getType(num);
getType(str);
getType(bool);
getType(fun);
getType(arr);
getType(obj);
getType(undefined);
getType(null);
getType(NaN);
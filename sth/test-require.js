/**
 * CommonJS规范 对于包引用的规则：
 * 一、查找（包/模块来源）优先级：nodejs内置模块 > 安装在node_modules目录下的第三方模块 > 用户自定义的模块。
 * 二、不加后缀的情况：*.js > *.json > *.node(c++编译包)
 * 三、加后缀则根据指定的后缀来找。
 */
var _json = require('../a.json');
// console.log(_json.books.reader);
console.log(module);
// console.log(global);
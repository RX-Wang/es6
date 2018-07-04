/**
 *  集成关系-- prototype
 */
// 动物 构造函数
function Animal() {
  this.name = 'animal';
}
Animal.prototype.sayName = function() {
  console.log(this.name);
};

// 人的构造函数
function Person(params) {
  this.name = params.name;
}
console.log('1、',Person.prototype.constructor);  // [Function: Person]

// 人继承自动物
Person.prototype = Animal.prototype;
console.log('2、',Person.prototype.constructor); // [Function: Animal]

// 更新构造函数为人  
Person.prototype.constructor = Person;
console.log('3、',Person.prototype.constructor);// [Function: Person]
var person = new Person({name: 'i`m a person'});
console.log('4、',Person.prototype);  // { sayName: [Function] }
console.log('5、',person.__proto__);  // { sayName: [Function] }
console.log('6、',person.__proto__ === Person.prototype); // true
person.sayName();
/**
 *  ************************************
 *  *********     实例对象的__proto__ 与该实例对象的构造函数的 prototype 是绝对相等的。
 *  ************************************
 */

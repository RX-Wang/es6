/**
 * Created by RX-Wang on 2017/9/3.
 */
var mySingleton = (function(){
    var instance;
    function init(){
        function privateMethod(){
            console.log('这是一个私有方法');
        }
        var privateVariable = '这是一个私有变量';
        var privateRandomNumber = Math.random();
        return {
          publicMethod : function () {
              console.log('这是一个公有方法');
          },
            publicProperty : '这是一个公有属性',
            getRandomNumber : function () {
                return privateRandomNumber;
            }

        };
    }

    return {
        getInstance : function () {
            if(!instance){
                instance = init();
            }
            return instance;
        }
    }

})();


var s1 = mySingleton.getInstance();
var s2 = mySingleton.getInstance();
console.log(s1.getRandomNumber(),s2.getRandomNumber());
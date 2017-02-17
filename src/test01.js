/**
 * Created by wxq on 17-1-20.
 */
import Person from './test02';

/*
((x)=>{
    console.log(x);

})(2);*/

const person = new Person('Diana');
person.sayHello();
person.sayHelloThreeTimes();

function m1({x = 0, y = 0} = {}) {
    console.log( [x, y]);
}

m1();

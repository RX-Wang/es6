/**
 * Created by wxq on 17-1-20.
 */
import 'core-js/shim';

export default class Person {

    constructor( name ) {
        this.name = name;
    }

    sayHello() {
        console.log( `Hello ${ this.name }!`);
        return `Hello ${this.name}`;
    }

    sayHelloThreeTimes() {
        let hello = this.sayHello();
        console.log( `${ hello } !!`.repeat(3));
    }
}
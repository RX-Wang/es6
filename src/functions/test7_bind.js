/**
 * Created by wangxuquan on 2017/5/27.
 */
// import 'bluebird';
const obj = { name : 'Diana'};

function a(){
    console.log(this.name);
}
const ab = a.bind(obj);
ab();



class Logger {

    /*printName(name = 'there') {
        _self.print(`Hello ${name}`);
    }

    print(text) {
        console.log(text);
    }*/

    constructor() {
        this.printName = (name = 'there') => {
            this.print(`Hello ${name}`);
        };
    }
    print(text) {
        console.log(text);
    }
}

const logger = new Logger();
const { printName ,print} = logger;
printName();
// print('aa');


const chooseProducts = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../Component/chooseProducts').default)
    },'chooseProducts')
};




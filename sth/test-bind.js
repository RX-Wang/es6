/* 

function a(name = 'Diana') {
    b.bind(name);
    b();
}
function b() {
    console.log(this.name); // undefined,查一下为什么。
}
a(); */

/**
 * 用 setTimeout模拟异步函数中的this的问题。
 */
const a = {
    aa(){
        console.log(111);
    },
    bb(){
        /**
         * 箭头函数的this有点特殊，
         * this并不是指向当前的箭头函数的，
         * 而是指向包裹该箭头函数的声明式函数。
         */
        setTimeout(() => {(() => {
            console.log(this);
            this.aa();
        })()}, 1000);
    },
    cc(){
        /**
         * function 关键字声明的函数需要进行this绑定，直接跟在函数的花括号后即可。
         */
        setTimeout(function(){
            console.log(this);
            this.aa();
        }.bind(this), 1000);
    },
    dd(){
        this.aa();
    }
}
a.bb();
// a.cc();
// a.dd();
//const u4 = require(`uuid/v4`);
//const a = u4();
//console.log(a.length);


/* (function(v){
    console.log(require(`uuid/${v}`)());
})('v4'); */

const uuid = require('uuid');
console.log(uuid.v4());
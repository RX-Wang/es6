/**
 * Created by wangxuquan on 2017/5/27.
 */
// import 'bluebird';
const Promise = require('bluebird');
const users = [
    {
        name    : 'Diana',
        sex     : 'girl',
        age     : 18
    },
    {
        name    : 'Diana1',
        sex     : 'girl',
        age     : 18
    },
    {
        name    : 'Diana2',
        sex     : 'girl',
        age     : 18
    },
    {
        name    : 'Diana3',
        sex     : 'girl',
        age     : 18
    },
    {
        name    : 'Diana4',
        sex     : 'girl',
        age     : 18
    }
];

/*
users.map((u)=>{
   new Promise((reso,rej)=>{
       // console.log(u.name)
       setTimeout(()=>{
          console.log(u.name);
       },1000)
   }).catch((e)=>{
       console.log(e.message);
   });
});*/

for(let i = 0 ; i < users.length; i++){
    setTimeout(()=>{
        // console.log(users[i].name);
        process.nextTick(()=>{
            console.log(users[i].name);
        });
    },1000);

}
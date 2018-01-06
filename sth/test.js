/* var cprocess = require('child_process');
cprocess.exec('npm run st',function(err,data){
  console.log('err',err);
  console.log('data',data);
}); */
var a = 0;
const t = setInterval(function(){
  a++;
  if(a>2) {
    clearInterval(t);
  }
  console.log(a);
},1000)
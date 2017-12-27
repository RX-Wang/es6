var cprocess = require('child_process');
cprocess.exec('npm run st',function(err,data){
  console.log('err',err);
  console.log('data',data);
});

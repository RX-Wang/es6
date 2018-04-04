var http = require('http');
http.createServer(function(req,res){
  console.log('starting....');
  res.end('1234567890');
}).listen(3000);

// 启动方式：$  node --trace-events-enabled --trace-event-categories v8,node index.js
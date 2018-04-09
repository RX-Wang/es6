var http = require('http');
var fs = require('fs');
var sockjs = require('sockjs');
 
var echo = sockjs.createServer({ sockjs_url: 'http://cdn.jsdelivr.net/sockjs/1.0.1/sockjs.min.js' });
echo.on('connection', function(conn) {
    conn.on('data', function(message) {
      console.log('received client message：', message);
        conn.write(message);
    });
    conn.on('close', function() {
      console.log('客户端关闭了链接');
    });
});
 
var server = http.createServer(function(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  // res.writeHead("Access-Control-Allow-Headers", "X-Requested-With");
  // res.writeHead("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  fs.readFile('./index.html', function(err, data) {
    res.writeHead(200, {"Content-Type": "text/html"});
    res.write(data.toString());
    res.end();
  });
});
echo.installHandlers(server, {prefix:'/echo'});
server.listen(9999, '127.0.0.1');
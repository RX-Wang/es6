/**
 * Created by RX-Wang on 2017/9/8.
 */
var net = require('net');

var HOST = '127.0.0.1'; var PORT = 6969;

var client = new net.Socket();
client.connect(PORT, HOST, function() {

    console.log('已连接到: ' + HOST + ':' + PORT);

    var paramsData = {'Data': {'PartnerKey': '2256842589741587'}};
    var paramsStr = JSON.stringify(paramsData);
    var paramsBuf = new Buffer(paramsStr,'utf-8');
    var dataLength = Buffer.byteLength(paramsBuf);
    var params = [[1],[dataLength],[paramsBuf.toByteArray()]];



    // 建立连接后立即向服务器发送数据，服务器将收到这些数据
    //var pj = JSON.stringify(params);
    var pj = params.join(',');
    console.log(pj);
    client.write(pj);

});

// 为客户端添加“data”事件处理函数
// data是服务器发回的数据
client.on('data', function(data) {

    console.log('服务器返回的数据: ' + data);
    // 完全关闭连接
    client.destroy();

});

// 为客户端添加“close”事件处理函数
client.on('close', function() {
    console.log('关闭TCP链接');
});


Buffer.prototype.toByteArray = function () {
    return Array.prototype.slice.call(this, 0)
};
/**
 * Created by RX-Wang on 2017/9/12.
 */

var path  = require('path');
var iconv = require('iconv-lite');
var fs    = require('fs');
//创建文件输入流
var rs    = fs.createReadStream(path.join(__dirname,'test.txt'));
var chunks = [],size = 0;
rs.on('data', function (chunk) {
   chunks.push(chunk);
    size += chunk.length
});
rs.on('end', function () {
    var buf = Buffer.concat(chunks,size);
    var str = iconv.decode(buf,'utf8');
    console.log(str);
});
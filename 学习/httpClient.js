/**
 * Created by RX-Wang on 2017/9/28.
 */
var rp = require('request-promise');


exports.httpClient = function (options,cb) {
    var opt = options.method.toUpperCase() === 'GET' ? {
        uri     : options.url,
        headers : {
            'User-Agent' : 'Request-Promise'
        },
        json    : true
    } : {
        method  : 'POST',
        uri     : options.url,
        body    : options.data,
        headers : {
            'User-Agent' : 'Request-Promise'
        },
        json    : true
    };

    rp(opt)
        .then(function(paserBody){
            cb(null,paserBody);
        })
        .catch(function (err) {
            cb(err,null);
        });

};
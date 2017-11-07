/**
 * Created by RX-Wang on 2017/9/15.
 */
console.log('main1');
process.nextTick(function() {
    console.log('process.nextTick1');
});
setTimeout(function() {
    console.log('setTimeout');
    process.nextTick(function() {
        console.log('process.nextTick2');
    });
}, 0);
new Promise(function(resolve, reject) {
    console.log('promise');
    resolve();
}).then(function() {
    console.log('promise then');
});
console.log('main2');
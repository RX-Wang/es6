// var later = require('later');
/* var s = {
    schedules: [{h: [20] , m: [56]}]//提前一天通知用户就诊
}; */
/* var cron = '21  3 * ? *';
  var s = later.parse.cron(cron); */
//   var s = later.parse.text('at 9:07 pm');
//   var s = later.parse.text('every 1 secs');
/* var s = later.parse.recur().on(21).hour().on(15).minute();
later.setInterval(() => {
    console.log(111111111);
},s); */

/* var schedule = require('node-schedule');
 
schedule.scheduleJob('40 * * * *', function(){
  console.log('The answer to life, the universe, and everything!');
}); */

var cron = require('node-cron');
 
cron.schedule('1 54 15 * * *', function(){
  console.log('running a task every minute');
});
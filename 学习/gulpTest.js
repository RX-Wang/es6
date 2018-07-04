const gulp = require('gulp');
const exec = require('child_process').exec;

gulp.task('cwd', function(cb) {
  console.log(process.cwd());
});

exec('gulp cwd',function(err,data){
    console.log(`${err}---${data}`);
})
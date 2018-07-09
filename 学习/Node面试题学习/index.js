#!/usr/bin/env node
/**
 * fs.watch
 */
var fs = require('fs');
var path = require('path');
/* var _pwd = process.env.PWD;
console.log(_pwd);
fs.watch(_pwd,function(e, f) {
  console.log(e, '----+', f);
  console.log(fs.readFileSync(path.join(__dirname, '../../a.log')).toString());
})
 */


/**
 *  node 执行 shell 命令
 */
// var shell = require('shelljs');
// var ps = shell.exec('ps -ef | grep nginx');
// console.log(ps.stdout);

/**
 *  nodejs  --  child_process 执行 shell 命令
 */
/* var cp = require('child_process');

var child;
// child = cp.spawn('echo', ['你好', "钩子"]); // 执行命令
// child = cp.spawn('pwd');
child = cp.spawn('ps', ['ef',  '|', 'grep', 'nginx']);
child.stdout.pipe(process.stdout);// child.stdout是输入流，process.stdout是输出流
// 这句的意思是将子进程的输出作为当前程序的输入流，然后重定向到当前程序的标准输出，即控制台 */

/* 
const { spawn } = require('child_process');
const ps = spawn('ps', ['-ef']);
const grep = spawn('grep', ['nginx']);

ps.stdout.on('data', (data) => {
  grep.stdin.write(data);
});

ps.stderr.on('data', (data) => {
  console.log(`ps stderr: ${data}`);
});

ps.on('close', (code) => {
  if (code !== 0) {
    console.log(`ps process exited with code ${code}`);
  }
  grep.stdin.end();
});

grep.stdout.on('data', (data) => {
  console.log(data.toString());
});

grep.stderr.on('data', (data) => {
  console.log(`grep stderr: ${data}`);
});

grep.on('close', (code) => {
  if (code !== 0) {
    console.log(`grep process exited with code ${code}`);
  }
}); */

/**
 *  chalk 花色 log
 */
const chalk = require('chalk');
const log = console.log;
 
// Combine styled and normal strings
log(chalk.blue('Hello') + ' World' + chalk.red('!'));
fs.writeFileSync(path.join(__dirname, './a.log'), chalk.blue('Hello') + ' World' + chalk.red('!'));


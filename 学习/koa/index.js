const path = require('path');
const views = require('koa-views');
const _static = require('koa-static');
const router = require('koa-router')();
const send = require('koa-send');
const Koa = require('koa');
const fs = require('fs');


const app = new Koa();
app.use(_static(path.join(__dirname, '/public')));
app.use(views(path.join(__dirname, '/views'), { extension: 'html' }));

app
    .use(router.routes())
    .use(router.allowedMethods());

app.use(async ctx => {
  await ctx.render('index');
});

router.get('/download',  function (ctx) {
  // 为了方便演示，这里直接下载index页面
  var fileName = '2018%2F05.txt';
  fs.writeFile(path.join(__dirname, '/public/', fileName), '1234',async function(err){
    // Set Content-Disposition to "attachment" to signal the client to prompt for download.
    // Optionally specify the filename of the download.
    // 设置实体头（表示消息体的附加信息的头字段）,提示浏览器以文件下载的方式打开
    //也可以直接设置 
    ctx.set("Content-disposition", "attachment; filename=" + fileName);
    ctx.attachment(fileName);
    await send(ctx, fileName, { root: __dirname + '/public' });
  });
});

app.listen(3000);
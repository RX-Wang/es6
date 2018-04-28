const path = require('path');
const views = require('koa-views');
const _static = require('koa-static');
const Koa = require('koa');

const app = new Koa();
app.use(_static(path.join(__dirname, '/public')));
app.use(views(path.join(__dirname, '/views'), { extension: 'html' }));

app.use(async ctx => {
  await ctx.render('index');
});

app.listen(3000);
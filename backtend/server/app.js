const Koa=require('koa')
const app=new Koa()
//解析除get意外的其他请求
const bodyparser=require('koa-bodyparser')
app.use(bodyparser()) 
const Router=require('koa-router')
const port = process.env.PORT;
const cors=require('koa2-cors');

const router=new Router()
//api
const registerRouter =require('./api/registerApi');
const todoRouter=require('./api/todoApi');

// app.use(cors({
//     origin: '*',
//     exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
//     maxAge: 5,
//     credentials: true,
//     allowMethods: ['GET', 'POST', 'DELETE'],
//     allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
//   }));

//子路由
router.use('/api',registerRouter.routes());
router.use('/api',todoRouter.routes());
//父路由
app.use(router.routes())
	.use(router.allowedMethods());
app.listen(3000, () => {
	console.log('监听成功',port)
})

// const Koa = require('koa');
// const app = new Koa();

// app.use(async (ctx, next) => {
//     if (ctx.request.path === '/') {
//         ctx.response.body = '<h1>index page</h1>';
//     } else {
//         await next();
//     }
// });
// app.use(async (ctx, next) => {
//     if (ctx.request.path === '/home') {
//         console.log(ctx.request.query)
//     console.log(ctx.request.querystring)
//         ctx.response.body = '<h1>home page</h1>';
//     } else {
//         await next();
//     }
// });
// app.use(async (ctx, next) => {
//     if (ctx.request.path === '/404') {
//         ctx.response.body = '<h1>404 Not Found</h1>';
//     } else {
//         await next();
//     }
// });

// app.listen(3000, ()=>{
//   console.log('server is running at http://localhost:3000')
// })

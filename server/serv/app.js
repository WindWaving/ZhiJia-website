const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')

const { apiRouter, mainRouter } = require('./routes/index')
const users = require('./routes/users')
//跨域
const cors = require('@koa/cors')
const session = require('koa-session');

//session
app.keys = ['some secret hurr'];
const CONFIG = {
  key: 'koa.sess', /** (string) cookie key (default is koa.sess) */
  maxAge: 86400000,
  overwrite: true, /** (boolean) can overwrite or not (default true) */
  httpOnly: true, /** (boolean) httpOnly or not (default true) */
  signed: true, /** (boolean) signed or not (default true) */
  rolling: true, /** (boolean) Force a session identifier cookie to be set on every response. The expiration is reset to the original maxAge, resetting the expiration countdown. (default is false) */
  renew: false, /** (boolean) renew session when session is nearly expired, so we can always keep user logged in. (default is false)*/
};
app.use(cors({
  credentials: true,
  origin: ctx => ctx.header.origin, // web前端服务器地址
}));
app.use(session(CONFIG, app));
// error handler
onerror(app)



//部署项目到自己的服务器需要修改
// 1. 数据库配置models/db.js
// 2. 此处的adminUrl和serverUrl
// 3. components/navbar.ejs的adminUrl和serverUrl
app.use(async (ctx, next) => {
  ctx.state = {
    // adminUrl: 'http://47.99.183.205:3030/admin/',
    // serverUrl:'http://47.99.183.205:3030/api/',
    adminUrl:'http://localhost:3000/admin/',
    serverUrl:'http://localhost:3000/api/'
  }
  await next()
})

// middlewares
app.use(bodyparser({
  enableTypes: ['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  extension: 'ejs'
}))

// logger
// app.use(async (ctx, next) => {
//   const start = new Date()
//   await next()
//   const ms = new Date() - start
//   console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
// })

// routes
app.use(mainRouter.routes(), mainRouter.allowedMethods())
app.use(apiRouter())
app.use(users.routes(), users.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});


module.exports = app

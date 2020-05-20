const compose = require('koa-compose')
const glob = require('glob')
const { resolve } = require('path')
const mainRouter = require('koa-router')()
const axios = require('axios')
mainRouter.prefix('/admin')

apiRouter = () => {
  let routers = [];
  glob.sync(resolve(__dirname, './', '**/*.js'))
    .filter(value => (value.indexOf('index.js') === -1))
    .map(router => {
      routers.push(require(router).routes())
      routers.push(require(router).allowedMethods())
    })
  return compose(routers)
}

mainRouter.get('/', async (ctx) => {
  ctx.status = 302;
  ctx.redirect(ctx.state.adminUrl+'product/SmartHome');
})

mainRouter.get('/product/:type', async (ctx,next) => {
  
  let { type } = ctx.params
  var zh_type;
  switch (type) {
    case 'SmartHome':
        zh_type = '智能家居';
        break;
    case 'SmartCommunity':
        zh_type = '智慧社区';
        break;
    case 'SmartOffice':
        zh_type = '楼宇办公';
        break;
    case 'SmartHealth':
        zh_type = '智能健康';
        break;
    case 'SmartIndustry':
        zh_type = '智慧工业';
        break;
}
  // let { offset, limit } = ctx.request.query
  let url=ctx.state.serverUrl+`product/${type}?offset=0&limit=5`
  let res=await axios.get(url)
  let {err,info}=res.data
  if(!err){
    await ctx.render('index', {
      type:type,
      zh_type:zh_type,
      admin: ctx.session.admin,
      total:info.pagination.total
      // products:info.data
    })
    await next()
  }else{
    alert(info)
  }
})
mainRouter.get('/register', async (ctx) => {
  await ctx.render('register',{
    adminUrl:ctx.state.adminUrl,
    serverUrl:ctx.state.serverUrl
  })
})
mainRouter.get('/logname', async (ctx) => {
  await ctx.render('logname',{
    adminUrl:ctx.state.adminUrl,
    serverUrl:ctx.state.serverUrl
  })
})
mainRouter.get('/logphone', async (ctx) => {
  await ctx.render('logphone',{
    adminUrl:ctx.state.adminUrl,
    serverUrl:ctx.state.serverUrl
  })
})
mainRouter.get('/editproduct/:pId',async(ctx)=>{
  let {pId}=ctx.params
  await ctx.render('productEdit',{
    admin: ctx.session.admin,
    pId:pId
  })
})
mainRouter.get('/addproduct',async(ctx)=>{
  await ctx.render('productPost',{
    admin:ctx.session.admin
  })
})
module.exports = {
  apiRouter,
  mainRouter
}
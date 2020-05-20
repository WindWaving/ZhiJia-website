const router = require('koa-router')()

router.prefix('/product')

router.get('/', async(ctx)=> {
  await ctx.render('product',{
      title:'product'
  })
})
module.exports = router

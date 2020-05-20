const router = require('koa-router')()
const { Product,Sequelize } = require('../../models')
const code = require('../../public/errorCode')
const Op = Sequelize.Op
router.prefix('/api/product')



//获取某个产品信息
router.get('/detail/:pId',async(ctx)=>{
    let {pId}=ctx.params
    try{
        let res=await Product.findOne({
            where:{pId:pId}
        })
        ctx.body={
            err:code.success,
            info:{
                data:res
            }
        }
    }catch(err){
        ctx.body={
            err:code.getSomeProductErr.code,
            info:code.getSomeProductErr.desc+err
        }
    }
})
//获取某种类型的产品
router.get('/:type',async(ctx)=>{
    let {type}=ctx.params
    let {offset,limit}=ctx.request.query
    try{
        let res=await Product.findAndCountAll({
            where:{type:type},
            offset:+offset,
            limit:+limit
        })
        ctx.body={
            err:code.success,
            info:{
                data:res.rows,
                pagination: {
                    total: res.count
                }
            }
        }
    }catch(err){
        ctx.body={
            err:code.success,
            info:code.getProductErr.desc+err
        }
    }
})


//添加产品
router.post('/add',async(ctx)=>{
    let {type,pName,detail}=ctx.request.body
    try{
        let res=await Product.findAll({
            where:{pName:pName}
        })
        if(res.length!=0){
            ctx.body={
                err:code.productExists.code,
                info:code.productExists.desc
            }
        }else{
            let res=await Product.create({
                type:type,
                pName:pName,
                detail:detail
            })
            ctx.body={
                err:code.success,
                info:'添加产品信息成功'
            }
        }
    }catch(err){
        ctx.body={
            err:code.addProductErr.code,
            info:code.addProductErr.desc+err
        }
    }
})

//修改产品信息
router.patch('/edit/:pId',async(ctx)=>{
    let {pId}=ctx.params
    let {type,pName,detail}=ctx.request.body
    var product={
        type:type,
        pName:pName,
        detail:detail
    }
    try{
        let res=await Product.findAll({
            where:{
                [Op.and]:[
                    {pName:pName},
                    {pId:{$gt:pId}},
                    {pId:{$lt:pId}}
                ]
            }
        })
        if(res.length!=0){
            ctx.body={
                err:code.productExists.code,
                info:code.productExists.desc
            }
        }else{
            let res=await Product.update(product,{
                where:{pId:pId},
            })
            ctx.body={
                err:code.success,
                info:'修改产品信息成功'
            }
        }
    }catch(err){
        ctx.body={
            err:code.editProductErr.code,
            info:code.editProductErr.desc+err
        }
    }

})

//删除产品
router.delete('/:pId',async(ctx)=>{
    let {pId}=ctx.params
    try{
        let res=Product.destroy({
            where:{pId:pId}
        })
        ctx.body={
            err:code.success,
            info:'删除产品成功'
        }
    }catch(err){
        ctx.body={
            err:code.delProductErr.code,
            info:code.delProductErr.desc+err
        }
    }
})

module.exports=router
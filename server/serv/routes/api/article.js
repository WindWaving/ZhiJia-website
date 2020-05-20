const router = require('koa-router')()
const { Article, Sequelize } = require('../../models')
const code = require('../../public/errorCode')
const Op = Sequelize.Op
router.prefix('/api/article')

//获取所有文章
router.get('/', async (ctx) => {
    let { offset, limit } = ctx.request.query
    try {
        let res = await Article.findAndCountAll({
            offset: +offset,
            limit: +limit,
            order: [['date', 'desc']],
        });
        ctx.body = {
            err: code.success,
            info: {
                data: res.rows,
                pagination: {
                    total: res.count
                }
            }
        }
    } catch (err) {
        ctx.body = {
            err: code.getArticleErr.code,
            info: code.getArticleErr.desc + err
        }
    }
})

//获取某篇文章
router.get('/:aId', async (ctx) => {
    let { aId } = ctx.params
    try {
        let res = await Article.findOne({
            where: {
                aId: aId
            },
        });
        res.views++;
        await Article.update({ views: res.views }, {
            where: { aId: aId }
        });
        ctx.body = {
            err: code.success,
            info: {
                data:res
            }
        }
    } catch (err) {
        ctx.body = {
            err: code.getSomeArticleErr.errCode,
            info: code.getSomeArticleErr.desc + err
        }
    }
})

//删除
router.delete('/:aId', async (ctx) => {
    let { aId } = ctx.params;
    try {
        await Article.destroy({
            where: { aId: aId }
        })
        ctx.body = {
            err: code.success,
            info: "删除成功"
        }
    } catch (err) {
        ctx.body = {
            err: code.delArticleErr.errCode,
            desc: code.delArticleErr.desc + err
        }
    }
})

//修改文章
router.patch('/:aId', async (ctx) => {
    let { aId } = ctx.params;
    let { title, content } = ctx.request.body;
    let date = new Date()
    var article = {
        title: title,
        date: date,
        content: content
    }
    try {
        //更新文章
        await Article.update(article, {
            where: { aId: aId }
        })
        ctx.body = {
            err: code.success,
            info: "更新文章成功"
        }

    } catch (err) {
        ctx.body = {
            err: code.updateArticleErr.errCode,
            info: code.updateArticleErr.desc + err
        }
    }
})

//添加文章
router.post('/', async (ctx) => {
    let { title, author, content } = ctx.request.body;
    var article = {
        title: title,
        author: author,
        content: content,
        date: new Date()
    }
    if (!author) {
        ctx.body = {
            err: code.userNotLogin.code,
            info:code.userNotLogin.desc
        }
    } else {
        try {
            await Article.create({
                title: article.title,
                author: article.author,
                date: article.date,
                views: 0,
                content: article.content
            })

            ctx.body = {
                err: code.success,
                info: "添加文章成功"
            }
        } catch (err) {
            ctx.body = {
                err: code.addArticleErr.errCode,
                info: code.addArticleErr.desc + err
            }
        }
    }
})

//某个用户的文章
router.get('/user/:username',async(ctx)=>{
    let author=ctx.params.username
    let {offset,limit}=ctx.request.query
    try {
        let res = await Article.findAndCountAll({
            where: {
                author: author
            },
            limit: +limit,
            offset: +offset,
        })
        ctx.body = {
            err: code.success,
            info: {
                data: res.rows,
                pagination: {
                    total: res.count
                }
            }
        }
    } catch (err) {
        ctx.body = {
            err: code.getUserArtsErr.errCode,
            info: code.getUserArtsErr.desc+err
        }
    }
})

module.exports=router
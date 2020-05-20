const router = require('koa-router')()
const { Admin,Sequelize } = require('../../models')
const crypto = require('crypto')
const code = require('../../public/errorCode')
const Op = Sequelize.Op
router.prefix('/api/admin')


//注册
router.post('/register', async (ctx) => {
    let { phone, username, password } = ctx.request.body;
    try {
        let res = await Admin.findAll({
            where: {
                [Op.or]: [
                    { username: username },
                    { phone: phone }
                ]
            }
        })
        if (res.length != 0) {
            ctx.body = {
                err: code.userExists.code,
                info: code.userExists.desc
            }
        } else {
            //加密密码
            let md5 = crypto.createHash("md5");
            let hashPswd = md5.update(password).digest("hex");
            await Admin.create({
                username: username,
                password: hashPswd,
                phone: phone
            })
            //保存登录状态
            ctx.session.admin = username
            ctx.body = {
                err: code.success,
                info: {
                    sess: ctx.session.admin,
                }
            }
        }
    } catch (err) {
        ctx.body = {
            err: code.registerErr.code,
            info: code.registerErr.desc + err
        }
    }
})

//用户名登录
router.post('/logbyname', async (ctx) => {
    let { username, password } = ctx.request.body;
    let res = await Admin.findOne({
        where: {
            username: username,
        }
    })
    if (!res) {
        ctx.body = {
            err: code.loginErr.code,
            info: code.loginErr.desc
        }
    } else {
        //密码加密比较
        let md5 = crypto.createHash("md5");
        let hashPswd = md5.update(password).digest("hex");
        if (res.password !== hashPswd) {
            ctx.body = {
                err: code.passwordErr.code,
                info: code.passwordErr.desc
            }
        } else {
            //后台用户登录状态
            ctx.session.admin = res.username
            ctx.body = {
                err: code.success,
                info: {
                    sess: ctx.session.admin,
                }
            }
        }
    }
})

//手机号登录
router.post('/logbyphone', async (ctx) => {
    let { phone } = ctx.request.body;
    try {
        let res = await Admin.findOne({
            where: {
                phone: phone,
            }
        })
        if (!res) {
            ctx.body = {
                err: code.loginErr.code,
                info: code.loginErr.desc
            }
        } else {
            ctx.session.admin = res.username
            ctx.body = {
                err: code.success,
                info: {
                    sess: ctx.session.admin,
                    role: role
                }
            }
        }
    } catch (err) {
        ctx.body = {
            err: code.getAdminErr.code,
            info: code.getAdminErr.desc + err
        }
    }
})

//注销
router.get('/logout', ctx => {
    ctx.session.admin = null
    ctx.body = {
        err: code.success,
        info: '成功登出'
    }
})

router.get('/state',ctx=>{
    ctx.body = {
        err: code.success,
        info:{
            sess:ctx.session.admin
        }
    }
})
module.exports = router

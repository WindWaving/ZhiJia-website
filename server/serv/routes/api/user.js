const router = require('koa-router')()
const { User,Sequelize } = require('../../models')
const crypto = require('crypto')
const code = require('../../public/errorCode')
const SMSClient = require('@alicloud/sms-sdk')
const accessKeyId = 'LTAI4GA1GTH9Wq9cMPPNJTBs'
const secretAccessKey = '6qFI6PPAJ5LGq2jpSS4Gw5eZbg5VH4'
const Op = Sequelize.Op
router.prefix('/api')


//注册
router.post('/register', async (ctx) => {
    let { phone, username, password } = ctx.request.body;
    try {
        let res = await User.findAll({
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
            await User.create({
                username: username,
                password: hashPswd,
                phone: phone
            })
            //保存登录状态
            ctx.session.user = username
            ctx.body = {
                err: code.success,
                info: {
                    sess: ctx.session.user,
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
    let res = await User.findOne({
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
            //保存用户登录状态
            ctx.session.user = res.username
            ctx.body = {
                err: code.success,
                info: {
                    sess: ctx.session.user,
                }
            }
        }
    }
})

//手机号登录
router.post('/logbyphone', async (ctx) => {
    let { phone } = ctx.request.body;
    try {
        let res = await User.findOne({
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
            ctx.session.user = res.username
            ctx.body = {
                err: code.success,
                info: {
                    sess: ctx.session.user,
                    role: role
                }
            }
        }
    } catch (err) {
        ctx.body = {
            err: code.getUserErr.code,
            info: code.getUserErr.desc + err
        }
    }
})

//注销
router.get('/logout', ctx => {
    ctx.session.user = null
    ctx.body = {
        err: code.success,
        info: '成功登出'
    }
})

router.get('/state',ctx=>{
    ctx.body = {
        err: code.success,
        info:{
            sess:ctx.session.user
        }
    }
})

router.post('/authcode',async (ctx, next) =>{
    let {phone}=ctx.request.body
    var number="";
    for(var i=0;i<6;i++){
        number+=Math.floor(Math.random()*10)
    }
    //初始化sms_client
    let smsClient = new SMSClient({accessKeyId, secretAccessKey})
    //发送短信
    var s = await smsClient.sendSMS({
        PhoneNumbers: phone,//发送的电话号码
        SignName: 'ZJ物之家',//认证签名
        TemplateCode: 'SMS_190274442',//模板代码
        TemplateParam: '{"code":"'+number+'"}'//参数
    })
    if(s.Code=="OK"){
        ctx.body = {
            err:code.success,
            info:{
                data:number
            }
        }
    }else{
        ctx.body = {
            err:s.Code,
            info:s.Message
        }
    }
})
module.exports = router

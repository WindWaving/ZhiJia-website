<template>
    <div class="register">
        <form class="form">
            <el-input class="input" v-model="phone" placeholder="手机号" clearable>
                <button class="code" slot="append">获取验证码</button>
            </el-input>
            <el-input class="input" placeholder="验证码" v-model="authcode" clearable></el-input>
            <el-input class="input" placeholder="用户名" v-model="username"  maxlength="6" show-word-limit clearable></el-input>
            <el-input class="input" placeholder="密码" v-model="password" minlength="6" maxlength="11" show-word-limit clearable></el-input>
            <el-button class="submitbtn" type="primary" @click="onRegister">提交</el-button>
            <span class="tip">已有账号，点击</span>
            <a @click="toLogin">登陆</a>
        </form>
        <!-- 子组件不能直接修改父组件的值，可以修改对象 -->
        <login-dialog :isShow.sync="login" class="login"></login-dialog>
    </div>
</template>

<script>
import LoginDialog from '../components/LoginDialog'
import { mapActions, mapMutations } from 'vuex'
export default {
  data () {
    return {
      phone: '',
      authcode: '',
      password: '',
      username: '',
      login: {
        isToLogin: false
      }
    }
  },
  methods: {
    ...mapActions({
      'register': 'register'
    }),
    ...mapMutations({
      'setState': 'setState'
    }),
    toLogin () {
      this.login.isToLogin = true
    },
    onRegister () {
      // to do:authcode
      let payload = {
        username: this.username,
        password: this.password,
        phone: this.phone
      }
      this.register(payload).then(res => {
        let {err, info} = res.data
        if (err) {
          this.$message.error(info)
        } else {
          this.setState(info)
          if (info.sess) {
            this.$session.start()
            this.$session.set('user', info.sess)
          }
          this.$notify({
            message: '成功注册，即将跳转至首页',
            type: 'success'
          })
          if (this.$route.path !== '/') {
            this.$router.push('/')
          }
        }
      })
    }
  },
  components: {
    LoginDialog
  }
}
</script>

<style lang="stylus" scoped>
.register{
    display flex
    justify-content center
}
.form{
    width 300px
    margin-top 70px
    .input{
        margin-top 20px
        .code{
            background transparent
            border none
            color #595757
        }
    }
    .tip{
        color #595757
        font-size 14px
    }
    a{
        font-size 13px
        text-decoration none
    }
    .submitbtn{
        width 100%
        margin 30px 0 20px 0
    }
}
.login{
    position absolute
}
</style>

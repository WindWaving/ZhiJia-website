<template>
    <el-dialog :visible.sync="isShow.isToLogin" class="login-dialog">
    <div class="dialog-bkg">
      <h1>ZHIJIA</h1>
      <p>感受万物的智能</p>
      <div class="togglebtn">
        <label class="label">
          <input
            type="radio"
            name="login-way"
            value="code"
            class="radio"
            v-model="loginWay"
            checked
          />
          <p class="login-way">验证码登陆</p>
        </label>
        <label class="label">
          <input type="radio" name="login-way" value="psd" class="radio" v-model="loginWay" />
          <p class="login-way">密码登陆</p>
        </label>
      </div>
      <form novalidate :model="loginForm" class="md-form" @submit.prevent="validateUser">
        <div v-if="loginWay=='code'">
          <md-field class="field">
            <label>手机号</label>
            <md-input v-model="loginForm.phone"></md-input>
            <button class="code">获取验证码</button>
          </md-field>
          <md-field class="field">
            <label>验证码</label>
            <md-input v-model="loginForm.authcode"></md-input>
          </md-field>
        </div>
        <div v-else>
          <md-field class="field">
            <label>用户名</label>
            <md-input v-model="loginForm.username" maxlength="6"></md-input>
          </md-field>
          <md-field class="field">
            <label>密码</label>
            <md-input v-model="loginForm.password" type="password"></md-input>
          </md-field>
        </div>
        <md-button type="button" class="md-submit" @click="onLogin">登陆</md-button>
        <label class="tosignup">
          还没有账号？
          <a @click="onToRegister">立即注册</a>
        </label>
      </form>
      <md-button class="cancel" @click="isShow.isToLogin=false">取消</md-button>
    </div>
  </el-dialog>
</template>
<script>
import { mapActions, mapMutations } from 'vuex'
export default {
  data () {
    return {
      loginForm: {
        username: '',
        phone: '',
        authcode: '',
        password: ''
      },
      // dialogFormVisible: false,
      loginWay: 'code',
      formLabelWidth: '120px'
    }
  },
  props: ['isShow'],
  methods: {
    ...mapActions({
      'loginByPhone': 'loginByPhone',
      'loginByName': 'loginByName'
    }),
    ...mapMutations({
      'setState': 'setState'
    }),
    onToRegister () {
      // this.dialogFormVisible = false
      this.isShow.isToLogin = false
      this.$router.push('/register')
    },
    handleLogState (res) {
      let {err, info} = res.data
      if (err) {
        this.$message.error(info)
      } else {
        this.setState(info)
        if (info.sess) {
          this.$session.start()
          this.$session.set('user', info.sess)
        }
      }
    },
    onLogin () {
      if (this.loginWay === 'code') {
        this.loginByPhone(this.loginForm).then(res => this.handleLogState(res))
      } else {
        this.loginByName(this.loginForm).then(res => this.handleLogState(res))
      }
      this.isShow.isToLogin = false
    }
  }
}
</script>

<style lang="stylus" scoped>
.login-dialog {
  position: relative;
  width: 60%;
  height: 100vh;
  margin: 0 auto;
  transform: translateY(-10%);

  .dialog-bkg {
    background: url('../assets/login_back.png') -150px 0;
    background-size: 600px;
    padding: 50px 30px;
    position: absolute;
    width: 100%;
    left: 0;
    top: 0;
    text-align: center;

    h1 {
      font-size: 34px;
      margin-bottom: 10px;
    }

    .togglebtn {
      width: 100%;
      background: rgba(255, 255, 255, 0.4);
      border-radius: 5px;
      height: 40px;
      line-height: 40px;
      margin-top: 15px;
      display: flex;
      justify-content: space-between;

      .label {
        width: 50%;
      }

      .radio {
        display: none;
      }

      .login-way {
        background: transparent;
        color: #ffffff;
      }

      .radio:checked+.login-way {
        background: #ffffff;
        color: #000;
        border-radius: 15px;
      }
    }

    .md-form {
      margin-top: 60px;

      .field {
        margin-bottom: 5px;

        label, input, .code {
          color: #f0f0f0;
          font-size: 14px;
        }

        .code {
          background: rgba(255, 255, 255, 0.4);
          border-radius: 30px;
          padding: 0 10px;
        }

        .code:hover {
          background: rgba(50, 144, 242, 0.6);
          color: white;
        }

        input {
          border-bottom: 1px solid rgba(240, 240, 240, 0.6);
        }

        input:focus {
          border-bottom: 1px solid rgb(240, 240, 240);
        }
      }

      .md-submit {
        background: #3290f2;
        width: 100%;
        padding: 10px;
        border-radius: 10px;
        margin: 30px 0 10px 0;
      }

      .tosignup {
        color: rgba(225, 225, 225, 0.7);

        a {
          color: #f0f0f0;
        }
      }
    }
    button{
      color white
    }
  }
}
</style>

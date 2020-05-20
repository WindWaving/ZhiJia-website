<template>
  <div>
    <el-menu
      :default-active="activeIndex"
      class="navbar"
      mode="horizontal"
      @select="handleSelect"
      text-color="white"
    >
      <div class="title">
        <h1>ZhiJia</h1>
        <h2>&nbsp;·&nbsp;感受万物智能</h2>
      </div>
      <el-menu-item index="1" class="nav">
        <router-link to="/">首页</router-link>
      </el-menu-item>
      <el-submenu index="2" class="nav sub-menu">
        <template slot="title">产品</template>
        <div class="drop-menu">
          <el-menu-item class="drop-item" index="2-1">
            <router-link :to="{name:'products',query:{type:'SmartHome'}}">智慧家居</router-link>
          </el-menu-item>
          <el-menu-item class="drop-item" index="2-2">
            <router-link :to="{name:'products',query:{type:'SmartCommunity'}}">智慧社区</router-link>
          </el-menu-item>
          <el-menu-item class="drop-item" index="2-3">
            <router-link :to="{name:'products',query:{type:'SmartOffice'}}">楼宇办公</router-link>
          </el-menu-item>
          <el-menu-item class="drop-item" index="2-4">
            <router-link :to="{name:'products',query:{type:'SmartHealth'}}">智能健康</router-link>
          </el-menu-item>
          <el-menu-item class="drop-item" index="2-5">
            <router-link :to="{name:'products',query:{type:'SmartIndustry'}}">智慧工业</router-link>
          </el-menu-item>
        </div>
      </el-submenu>
      <el-menu-item index="3" class="nav">
        <router-link to="/serve">服务</router-link>
      </el-menu-item>
      <el-menu-item index="4" class="nav">
        <router-link to="/blogs">博客</router-link>
      </el-menu-item>
      <el-menu-item index="5" class="nav">
        <router-link to="/about">关于</router-link>
      </el-menu-item>
      <div class="contract">
        <!-- <img src="../assets/phone.svg" height="30" width="18" /> -->
        <span class="iconfont icon-dianhua phone-icon"></span>
        <span class="phone-number">023-88159792</span>
      </div>
      <ul class="sign">
        <div v-if="!isSignIn">
          <li>
            <a @click="login.isToLogin=true">登录</a>
          </li>
          <li>
            <router-link to="/register">注册</router-link>
          </li>
        </div>
        <div v-if="isSignIn">
          <li>
            <a>{{this.$session.get('user')}}</a>
          </li>
          <li>
            <a @click="onLogout">登出</a>
          </li>
        </div>
      </ul>
      <login-dialog :isShow.sync="login"></login-dialog>
    </el-menu>
  </div>
</template>

<script>
import LoginDialog from '../components/LoginDialog'
import { mapState, mapActions, mapMutations } from 'vuex'
export default {
  data () {
    return {
      toLogin: false,
      login: {
        isToLogin: false
      },
      activeIndex: '1'
    }
  },
  components: {
    LoginDialog
  },
  computed: {
    ...mapState({
      isSignIn: 'isSignIn'
    })
  },
  methods: {
    ...mapActions({
      'logout': 'logout'
    }),
    ...mapMutations({
      'setState': 'setState'
    }),
    handleSelect (key, keyPath) {},
    onLogout () {
      this.$confirm('确定登出账户吗', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$notify({
          message: '成功登出，即将跳转至首页',
          type: 'success'
        })
        setTimeout(() => {
          this.$session.destroy()
          this.logout()
          if (this.$route.path !== '/') {
            this.$router.push('/')
          }
        }, 1000)
      }).catch(() => {})
    }
  }
}
</script>
<style lang="stylus" scoped>
$blue-color = #2383ea;

* {
  color: white;
}

.navbar {
  background: #131313;
  height: 61px;
  width: 100%;
  border: none;

  a {
    color: white;
    text-decoration: none;
  }

  .title {
    display: flex;
    align-items: center;
    float: left;
    height: 100%;
    margin-left: 150px;
    margin-right: 50px;

    h1 {
      color: #fdd300;
      font-weight: 400;
    }

    h2 {
      font-weight: 400;
    }
  }

  .nav-product {
    color: white;
  }

  .nav:hover {
    a {
      color: $blue-color;
    }

    background: transparent;
  }

  .contract {
    float: left;
    margin-left: 50px;
    height: 61px;
    line-height: 61px;
    .phone-icon{
      font-size 20px
      color $blue-color
    }
  }

  .sign {
    float: right;
    margin-right: 20px;

    li {
      width: 70px;
      height: 100%;
      line-height: 61px;
      padding: 0 10px;
      float: left;
      text-align: center;
      transition: 0.5s ease;
    }

    li:hover {
      background: $blue-color;
    }
  }
}

.drop-menu {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background: #131313;

  .drop-item {
    background: #131313;
    margin: 2px 0 5px 20px;
  }

  .drop-item:hover {
    a {
      color: #4988ef;
    }
  }
}
</style>

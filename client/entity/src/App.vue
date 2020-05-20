<template>
  <div id="app">
    <navbar class="navbar"></navbar>
    <div class="content">
      <router-view />
    <el-backtop target=".content">
      <i class="el-icon-caret-top"></i>
    </el-backtop>
    </div>
    <footbar></footbar>
  </div>
</template>

<script>
import Navbar from './components/NavBar'
import Footbar from './components/FootBar'
import { mapActions, mapMutations, mapState } from 'vuex'

export default {
  name: 'App',
  components: {
    Navbar,
    Footbar
  },
  computed: {
    ...mapState({
      'isSignIn': 'isSignIn'
    })
  },
  methods: {
    ...mapActions({
      'checkState': 'checkState'
    }),
    ...mapMutations({
      'setState': 'setState'
    })
  },
  created () {
    this.checkState().then(res => {
      console.log('created', res)
      let {info} = res.data
      this.setState(info)
      if (this.isSignIn) {
        this.$session.start()
        this.$session.set('user', info.sess)
      } else {
        this.$session.destroy()
      }
    })
  }
}
</script>

<style lang='stylus'>
html, body {
  min-height: 100%;
}
#app{
  display flex;
  flex-direction column
  min-height: 100vh
  .navbar{
    position fixed
    z-index 100
    box-shadow 0 2px 5px #131313
  }
  .content{
    flex: 1
  }
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
a{
  text-decoration none
}
li{
  list-style none
}
a:hover{
  cursor pointer
  text-decoration none
}
</style>

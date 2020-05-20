<template>
  <div class="contract">
    <header class="header">
      <div class="title">
        <h1>
          感谢您的关注
          <br />客服联系电话：
          <br />81388932
        </h1>
      </div>
    </header>
  </div>
</template>

<script>
import MyHeader from '../components/MyHeader'
export default {
  components: {
    MyHeader
  },
  data () {
    return {}
  }
}
</script>

<style lang="stylus" scoped>
.contract {
  height: 100vh;
  margin-top: 60px;

  .header {
    background-image: url('../assets/serve/contract_header.jpg');
    background-size: cover;
    height: 100vh;
    text-align: right;
    position relative
    .title{
        background #497bb0
        height 100vh
        line-height 100vh
        right 0
        padding 0 80px
        position absolute
        display flex
        flex-direction column
        align-items center
        justify-content center
        h1{
            text-align left
            line-height 40px
            color #1e1e1e
        }
    }
  }
}
</style>

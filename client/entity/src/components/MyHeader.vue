<template>
  <header class="header" :style="headerBkg" v-html="content">
  </header>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  props: ['headerBkg', 'content']
}
</script>
<style lang="stylus" scoped>
  .header {
    width 100%
    height: 100vh;
    display: flex;
    flex-direction column
    justify-content center
    padding: 0 150px;

    >>> h1{
      font-size 40px
      line-height 46px
    }
    >>> h2{
      font-size 32px
      line-height 32px
    }
    >>> h1, >>> h2 {
    color: #ffffff;
    margin-top 15px
  }
  }
</style>

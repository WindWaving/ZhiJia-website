<template>
<div>
    <my-header :headerBkg='headerBkg' :content='content'></my-header>
    <div class="mod">
        <h1>五大智能产品打造</h1>
    </div>
    <div class="mod">
        <h1>企业专属SaaS平台</h1>
    </div>
    <div class="mod">
        <h1>私有云搭建</h1>
    </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      headerBkg: {
        backgroundColor: '#2383ea',
        backgroundImage: 'url(' + require('../assets/home/header_deco.png') + ')'
      },
      content: '<h1>智家<br />极具行业创新能力的物联网平台</h1>'
    }
  }
}
</script>

<style lang="stylus" scoped>
.mod{
    min-height 100vh
}
</style>

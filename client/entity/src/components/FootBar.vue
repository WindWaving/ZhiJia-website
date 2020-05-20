<template>
  <footer class="footer">
    <div class="firm">
      <p class="name">上海智家科技有限公司</p>
      <p class="addr">地址：上海市静安区xxxxx</p>
    </div>
    <div class="other">
      <p>商务合作：400-889-3788</p>
      <p>总机：0755-23505483</p>
      <p>招聘专线：0755-23294533</p>
      <p>邮箱：support@dtston.com</p>
    </div>
  </footer>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
.footer {
  height: 168px;
  width: 100%;
  background: #070707;
  padding: 30px 0;
  position relative
  p{
    margin-top 10px
    color #cecece
  }
  .firm{
    position absolute
    left 50%
    .name{
      font-size 16px
    }
    .addr{
      font-size 12px
    }
  }
  .other{
    position absolute
    left 70%
    p{
      font-size 10px
    }
  }
}
</style>

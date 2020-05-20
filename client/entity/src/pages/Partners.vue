<template>
  <div class="partners">
    <h1>合作伙伴</h1>
    <div class="cert">
      <el-card shadow="hover" class="item">
        <img src="../assets/home/haier.png" />
      </el-card>
      <el-card shadow="hover" class="item">
        <img src="../assets/home/haier.png" />
      </el-card>
      <el-card shadow="hover" class="item">
        <img src="../assets/home/haier.png" />
      </el-card>
      <el-card shadow="hover" class="item">
        <img src="../assets/home/haier.png" />
      </el-card>
      <el-card shadow="hover" class="item">
        <img src="../assets/home/haier.png" />
      </el-card>
      <el-card shadow="hover" class="item">
        <img src="../assets/home/haier.png" />
      </el-card>
      <el-card shadow="hover" class="item">
        <img src="../assets/home/haier.png" />
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
}
</script>
<style lang="stylus" scoped>
.partners {
  padding: 110px 150px;
  text-align center
  .cert{
      margin-top 50px
      width 100%
      display flex
      flex-wrap wrap
      .item{
          width 300px
          height 150px
          position relative
          img{
              width 80%
              position absolute
              top 50%
              left 50%
              transform translate(-50%,-50%)
          }
      }
  }
}
</style>

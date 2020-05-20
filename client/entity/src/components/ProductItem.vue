<template>
  <router-link :to="{name:'productDetail',query:{pId:pId}}" class="view">
    <el-card shadow="hover" class="product" :style="backImg">
      <div class="mask"></div>
      <h1>{{productName}}</h1>
      <i class="el-icon-more detail"></i>
    </el-card>
  </router-link>
</template>

<script>
export default {
  data () {
    return {}
  },
  props: ['productName', 'backImg', 'pId']
}
</script>

<style lang="stylus" scoped>
icon_color = #bc8f8f;
icon_selected_color = #ffffff;

a:hover{
  text-decoration none
}
.product {
  width: 100%;
  height: 150px;
  text-align: center;
  position: relative;
  padding: 20px;
  border none
  margin-bottom 30px

  h1 {
    color: icon_color;
    position: relative;
    letter-spacing 10px
    transition: 0.5s ease;
  }

  .mask {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
    transition: 0.5s ease;
  }

  .detail {
    margin-top: 20px;
    font-size: 40px;
    color: icon_color;
    opacity: 0.7;
    border: 1px solid;
    border-radius: 100%;
    position: relative;
    transition: 0.5s ease;
  }
}
.view:hover{
    .product{
        box-shadow 0 0 10px black
    }
    .mask{
        background rgba(0,0,0,0.7)
    }
    h1{
        color icon_selected_color
        font-size 32px
    }
    .detail{
        opacity 1
        border-color transparent
        color icon_selected_color
        background icon_color
        font-size 50px
    }
}
</style>

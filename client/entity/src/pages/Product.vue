<template>
<div>
    <my-header :headerBkg='headerBkg' :content='content'></my-header>
    <div class="product">
      <div class="product-list">
        <product-item :productName='item.pName' :backImg='bkg' :pId="item.pId" v-for="item in productList" :key="item.productName" class="item"></product-item>
    </div>
    <el-pagination
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage"
        background
        :page-size="pagination.limit"
        layout="total, prev, pager, next"
        :total="pagination.total"
      ></el-pagination>
    </div>
</div>
</template>

<script>
import ProductItem from '../components/ProductItem'
import MyHeader from '../components/MyHeader'
import { mapActions } from 'vuex'
export default {
  created () {
    let {type} = this.$route.query
    this.pagination.type = type
    this.showProducts()
  },
  watch: {
    $route () {
      let {type} = this.$route.query
      this.pagination.type = type
      this.showProducts()
    }
  },
  data () {
    return {
      productList: [],
      pagination: {
        type: '',
        offset: 0,
        limit: 10,
        total: 0
      },
      currentPage: 1,
      headerBkg: {
        backgroundImage: 'url(' + require('../assets/product/header.jpg') + ')',
        backgroundSize: 'cover'
      },
      content: '<h1>物联网产品</h1><h2>LoT Product</h2>',
      bkg: {
        background: 'url(' + require('../assets/smart_home.jpg') + ') 0 center'
      }
    }
  },
  components: {
    ProductItem,
    MyHeader
  },
  methods: {
    ...mapActions({
      'getProducts': 'getProducts'
    }),
    // 翻页
    handleCurrentChange (val) {
      this.pagination.offset = (val - 1) * this.pagination.limit
      this.showProducts()
    },
    // 显示产品列表
    showProducts () {
      this.getProducts(this.pagination).then(res => {
        let {err, info} = res.data
        if (err) {
          this.$message.error(info)
        } else {
          let {data, pagination} = info
          this.pagination.total = pagination.total
          this.productList = data
        }
      })
    }
  }
}
</script>
<style lang="stylus" scoped>
.header{
    width 100%
    height 100vh
    padding 0 150px
    background url(../assets/serve.png)
}
.product{
  padding 30px 150px
}
.product-list{
    .item{
      margin-top 30px
    }
}
</style>

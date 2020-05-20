<template>
  <div class="product">
    <h1>{{product.pName}}</h1>
    <div class="line"></div>
    <div class="type"><router-link :to="{name:'products',query:{type:product.type}}">{{product.type}}</router-link></div>
    <div class="desc" v-html="product.detail"></div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      product: {
        pName: '',
        detail: '',
        type: ''
      }
    }
  },
  created () {
    let { pId } = this.$route.query
    let payload = {
      pId: pId
    }
    this.getProduct(payload).then(res => {
      let { data } = res.data.info
      this.product = data
    })
  },
  methods: {
    ...mapActions({
      getProduct: 'getSomeProduct'
    })
  }
}
</script>

<style lang="stylus" scoped>
$title-color = #333333;
$deco-color = #2383ea;
$content-color = #666;

.product {
  padding: 120px 150px;
  text-align: center;

  h1 {
    color: $title-color;
    width: 100%;
    border-bottom: 1px solid #786666;
    padding: 10px;
  }

  .line {
    margin: -5px auto;
    background: $deco-color
    width: 300px;
    height: 10px;
  }

  .type{
    background $deco-color
    padding 5px 10px
    max-width 180px
    text-align center
    transition .5s ease
    margin 20px auto 10px auto
    a{
      color white
      font-size 18px
    }
  }
  .type:hover{
      box-shadow 0 0 5px $deco-color
    }

  .desc {
    margin-top: 50px;
    color: $content-color;
    text-align: justify;

    >>> p {
      color: $content-color;
      text-align: justify;
    }
  }
}
</style>

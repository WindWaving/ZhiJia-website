<template>
  <div class="article">
    <div class="subcontent">
      <span class="author">作者：{{article.author}}</span>
      <span class="views">浏览量：{{article.views}}</span>
      <span class="date">日期：{{article.date}}</span>
    </div>
    <h2 class="title">{{article.title}}</h2>
    <p class="content">{{article.content}}</p>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      article: {}
    }
  },
  methods: {
    ...mapActions({
      'getSomeArticle': 'getSomeArticle'
    })
  },
  created () {
    let {aId} = this.$route.query
    this.getSomeArticle({aId}).then(res => {
      let {err, info} = res.data
      if (!err) {
        this.article = info.data
      } else {
        this.$message.error(info)
      }
    })
  }
}
</script>
<style lang="stylus" scoped>
$title-color = #333333;
$author-color = #786666;
$content-color=#666
.article {
  background: #f6f7fb;
  padding 110px 150px 50px 150px
  text-align center
  min-height 100vh
  .subcontent{
      border-bottom 5px solid #2383ea
      padding 5px 10px
      max-width 500px
      margin 0 auto 50px auto
      overflow hidden
      .author{
          float left
      }
      .views,.date{
          float right
          margin-left 10px
      }
  }

  .title{
      color $title-color
  }
  .content{
      color $content-color
      margin-top 30px
      text-align justify
  }
}
</style>

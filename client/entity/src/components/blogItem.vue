<template>
  <div class="piece">
    <router-link :to="{name:'article',query:{aId:article.aId}}">
      <h2 class="title">{{article.title}}</h2>
      <span class="date">发表日期：{{article.date}}</span>
      <br />
      <span class="author">作者：{{article.author}}</span>
      <span class="views">浏览量：{{article.views}}</span>
      <p
        class="content"
      >{{article.content.length>120?article.content.substr(0,120):article.content}}</p>
    </router-link>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  props: ['article']
}
</script>

<style lang="stylus" scoped>
$item-bkg = #f2f2f2;
$title-color = #333333;
$author-color = #786666;
$content-color = #666;
$deco-color = #2383ea;

.piece {
  background: $item-bkg;
  padding: 10px 20px;
  height: 130px;

  .title {
    color: $title-color;
    text-align: left;
    margin-top: 20px;
    line-height: 0;
  }

  .author, .views, .date {
    color: $author-color;
  }

  .views, .date {
    float: right;
  }

  .content {
    color: $content-color;
    margin-top: 5px;
  }
}

.piece:hover {
  border-left: 5px solid $deco-color;
  a{
    text-decoration none
  }
}
</style>

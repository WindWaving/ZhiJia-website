<template>
  <div class="blogs">
    <my-header :headerBkg='headerBkg' :content='content'></my-header>
    <div class="bloglist">
      <div class="blog-btns">
        <a @click="toMyBlogs">我的文章</a>
        <a @click="toEdit">发布文章</a>
      </div>
      <blog-item class="blogitem" v-for="article in blogList" :key="article.aId" :article="article"></blog-item>
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
import BlogItem from '../components/blogItem'
import MyHeader from '../components/MyHeader'
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      currentPage: 1,
      pagination: {
        offset: 0,
        limit: 0,
        total: 0
      },
      headerBkg: {
        background: 'url(' + require('../assets/blog/header.jpg') + ')'
      },
      content: '<h1>物联网交流博客</h1><h2>COMMUNICATION BLOG FOR LoT</h2>',
      blogList: []
    }
  },
  created () {
    this.initPag()
    this.showArticles()
  },
  methods: {
    ...mapActions({
      'getArticles': 'getAllArticles'
    }),
    toMyBlogs () {
      if (!this.$session.get('user')) {
        this.$message({
          message: '请先登录',
          type: 'warning'
        })
      } else {
        this.$router.push('/myblogs')
      }
    },
    toEdit () {
      if (!this.$session.get('user')) {
        this.$message({
          message: '请先登录',
          type: 'warning'
        })
      } else {
        this.$router.push('/blogedit')
      }
    },
    handleCurrentChange (val) {
      this.pagination.offset = (val - 1) * this.pagination.limit
      this.showArticles()
    },
    showArticles () {
      this.getArticles(this.pagination).then(res => {
        let {err, info} = res.data
        if (!err) {
          this.blogList = info.data
          this.pagination.total = info.pagination.total
        } else {
          this.$message.error(info)
        }
      })
    },
    initPag () {
      this.pagination = {
        offset: 0,
        limit: 5,
        total: 0
      }
    }
  },
  components: {
    MyHeader,
    BlogItem
  }
}
</script>
<style lang="stylus" scoped>
.blogs {
  background: #fefefe;
}

.header {
  background: #2383ea;
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 0 150px;

  h1, p {
    font-size: 40px;
    line-height: 50px;
    color: white;
  }
}

.blog-btns {
  margin-bottom 20px
  overflow hidden
  a {
    color: #2383ea;
    font-size: 18px;
    float: right
    margin-left 10px;
    padding 5px 20px
    transition .5s ease
  }
  a:hover{
    color white
    background #2383ea
    text-decoration none
  }
}

.bloglist {
  padding: 30px 150px;

  .blogitem {
    margin: 20px 0;
  }
}
</style>

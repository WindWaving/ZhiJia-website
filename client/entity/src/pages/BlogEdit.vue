<template>
  <div class="edit-article">
    <el-form class="editform" ref="form" label-width="80px">
      <el-form-item label="标题">
        <el-input v-model="curArticle.title"></el-input>
      </el-form-item>
      <div id="editor-main">
        <le-editor v-model="curArticle.content" :hljs-css="hljsCss"></le-editor>
      </div>
      <el-form-item class="btn-box">
        <el-button type="primary" @click="onPost">发布</el-button>
        <el-button @click="goBack">返回</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      hljsCss: 'agate',
      curArticle: {},
      method: ''
    }
  },
  created () {
    if (!this.$session.get('user')) {
      this.$notify({
        message: '您没有登录，正在跳转至首页',
        type: 'warning'
      })
      setTimeout(() => {
        this.$router.push('/')
      }, 500)
    }
    let {article} = this.$route.params
    // 从编辑文章到达此页
    if (article) {
      this.curArticle = article
      this.method = 'update'
    } else {
      this.method = 'post'
    }
  },
  methods: {
    ...mapActions({
      'updateArticle': 'updateArticle',
      'addArticle': 'addArticle'
    }),
    goBack () {
      this.$confirm('离开页面将会放弃所有修改, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$router.go(-1)
      }).catch(() => {
      })
    },
    handleBackSuccess (res) {
      let {err} = res.data
      if (!err) {
        this.$message({
          message: '上传成功，即将返回...',
          type: 'success'
        })
        setTimeout(() => {
          this.$router.push('/myblogs')
        }, 1000)
      }
    },
    onPost () {
      if (this.method === 'update') {
        this.updateArticle(this.curArticle).then(res => this.handleBackSuccess(res))
      } else if (this.method === 'post') {
        this.curArticle.author = this.$session.get('user')
        this.addArticle(this.curArticle).then(res => this.handleBackSuccess(res))
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.edit-article {
    padding 110px 150px 30px 150px
  .editform {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  #editor-main {
    color: #2c3e50;
    width: 100%;
    height: 600px;
  }

  .addTag {
    margin-left: 2rem;
  }

  .warn {
    color: red;
    font-size: 0.8rem;
    margin-left: 1rem;
  }

  .btn-box {
    text-align: right;
    margin: 3rem 0;
  }
}
</style>

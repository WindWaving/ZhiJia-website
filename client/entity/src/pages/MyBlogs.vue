<template>
  <div class="myblogs">
    <div class="blog-btns">
        <router-link to="/blogs">全部博客</router-link>
        <router-link to="/blogedit">发布文章</router-link>
      </div>
    <el-table
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%"
      :default-sort="{prop: 'date', order: 'descending'}"
      class="blogtable"
    >
      <el-table-column prop="title" label="标题" sortable></el-table-column>
      <el-table-column prop="date" label="日期" sortable></el-table-column>
      <el-table-column prop="views" label="浏览量" sortable></el-table-column>
      <el-table-column fixed="right" label="操作">
        <template slot-scope="scope">
          <el-button @click="handleEdit(scope.row)" type="text" size="small" class="operation">编辑</el-button>
          <el-button @click="handleDelete(scope.row)" type="text" size="small" class="operation">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div style="margin-top: 20px">
     <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage"
        background
        :page-size="pagination.limit"
        :page-sizes="[2,10,20]"
        layout="total, sizes, prev, pager, next"
        :total="pagination.total"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      pagination: {
        username: '',
        offset: 0,
        limit: 0,
        total: 0
      },
      currentPage: 1,
      tableData: [
        {
          aId: 1,
          title: '隐私政策',
          date: '2018-10-11',
          views: 0
        }
      ]
    }
  },
  created () {
    this.initPag()
    this.showArticles()
  },
  methods: {
    ...mapActions({
      'getArticles': 'getMyArticles',
      'deleteArticle': 'deleteArticle'
    }),
    handleEdit (row) {
      this.$router.push({ name: 'blogedit', params: { article: row } })
    },
    handleDelete (row) {
      this.$confirm('删除后不可恢复, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          let payload = {
            aId: row.aId
          }
          this.deleteArticle(payload).then(res => {
            let {err, info} = res.data
            if (err) {
              this.$message.error('删除失败，' + info)
            } else {
              this.tableData.some((item, index) => {
                if (item.aId === row.aId) {
                  this.tableData.splice(index, 1)
                }
              })
            }
          })
        })
        .catch(() => {})
    },
    handleSizeChange (val) {
      this.initPag()
      this.pagination.limit = val
      this.showArticles()
    },
    handleCurrentChange (val) {
      this.pagination.offset = (val - 1) * this.pagination.limit
      this.showArticles()
    },
    showArticles () {
      this.getArticles(this.pagination).then(res => {
        let {err, info} = res.data
        if (!err) {
          this.tableData = info.data
          this.pagination.total = info.pagination.total
        } else {
          this.$message.error(info)
        }
      })
    },
    initPag () {
      this.pagination = {
        username: this.$session.get('user'),
        offset: 0,
        limit: 2,
        total: 0
      }
      if (!this.pagination.username) {
        this.$notify({
          message: '您没有登录，正在跳转至首页',
          type: 'warning'
        })
        setTimeout(() => {
          this.$router.push('/')
        }, 500)
      }
    }
  }
}
</script>

<style lang="stylus">
.myblogs {
  padding: 110px 150px 30px 150px;
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

  .blogtable {
    border: 1px solid #f2f2f2;
    .operation{
        color #2383ea
    }
    .operation:hover{
        font-size 18px
        transition .3s
    }
  }
}
</style>

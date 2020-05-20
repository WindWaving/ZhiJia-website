import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)
Vue.prototype.$ajax = axios

const ArticleStore = {
  actions: {
    getAllArticles ({rootState}, payload) {
      let {offset, limit} = payload
      let url = rootState.serverUrl + `article?offset=${offset}&limit=${limit}`
      return axios({
        method: 'get',
        url: url,
        withCredentials: true
      }).catch(err => { console.log('请求发生错误，' + err) })
    },
    getMyArticles ({rootState}, payload) {
      let {offset, limit, username} = payload
      let url = rootState.serverUrl + `article/user/${username}?offset=${offset}&limit=${limit}`
      return axios({
        method: 'get',
        url: url,
        withCredentials: true
      }).catch(err => { console.log('请求发生错误，' + err) })
    },
    getSomeArticle ({rootState}, payload) {
      let {aId} = payload
      let url = rootState.serverUrl + `article/${aId}`
      return axios({
        method: 'get',
        url: url,
        withCredentials: true
      }).catch(err => console.log('请求发生错误,' + err))
    },
    addArticle ({rootState}, payload) {
      let {title, author, content} = payload
      let url = rootState.serverUrl + `article`
      return axios({
        method: 'post',
        url: url,
        data: {
          title: title,
          author: author,
          content: content
        },
        withCredentials: true
      }).catch(err => { console.log('请求发生错误，' + err) })
    },
    updateArticle ({rootState}, payload) {
      let {aId, title, content} = payload
      let url = rootState.serverUrl + `article/${aId}`
      return axios({
        method: 'patch',
        url: url,
        data: {
          title: title,
          content: content
        },
        withCredentials: true
      }).catch(err => console.log('请求发生错误，' + err))
    },
    deleteArticle ({rootState}, payload) {
      let {aId} = payload
      let url = rootState.serverUrl + `article/${aId}`
      return axios({
        method: 'delete',
        url: url,
        withCredentials: true
      }).catch(err => console.log('请求发生错误，' + err))
    }
  }
}
export default ArticleStore

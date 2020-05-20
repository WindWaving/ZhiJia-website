import Vue from 'vue'
import Vuex from 'vuex'
import ArticleStore from './ArticleStore'
import UserStore from './UserStore'
import ProductStore from './ProductStore'
import axios from 'axios'
Vue.use(Vuex)
// Vue.use(axios)
Vue.prototype.$ajax = axios

const store = new Vuex.Store({
  state: {
    isSignIn: false,
    serverUrl: 'http://www.viviwind.cn:3030/api/'
    // serverUrl: 'http://localhost:3000/api/'
  },
  mutations: {
    // 设置登录状态
    setState (state, info) {
      console.log(info)
      if (info.sess != null) {
        state.isSignIn = true
      } else {
        state.isSignIn = false
      }
    }
  },
  actions: {
    checkState ({state, commit}) {
      let url = state.serverUrl + 'state'
      return axios({
        method: 'get',
        url: url,
        withCredentials: true
      })
    }
  },
  modules: {
    MArticle: ArticleStore,
    MProduct: ProductStore,
    MUser: UserStore
  }
})

export default store

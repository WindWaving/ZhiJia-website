import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)
// Vue.use(axios)
Vue.prototype.$ajax = axios

const ProductStore = {
  actions: {
    // 获取所有产品
    getProducts ({rootState}, payload) {
      let {type, offset, limit} = payload
      let url = rootState.serverUrl + `product/${type}?offset=${offset}&limit=${limit}`
      return axios({
        method: 'get',
        url: url,
        withCredentials: true
      }).catch(err => console.log('请求发生错误，' + err))
    },
    // 获取某个产品信息
    getSomeProduct ({rootState}, payload) {
      let {pId} = payload
      let url = rootState.serverUrl + `product/detail/${pId}`
      return axios({
        method: 'get',
        url: url,
        withCredentials: true
      }).catch(err => console.log('请求发生错误,' + err))
    }
  }
}

export default ProductStore

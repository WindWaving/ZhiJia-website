import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)
// Vue.use(axios)
Vue.prototype.$ajax = axios

const UserStore = {
  actions: {
    register ({rootState}, payload) {
      let {username, phone, password} = payload
      let url = rootState.serverUrl + 'register'
      return axios({
        method: 'post',
        url: url,
        data: {
          username: username,
          password: password,
          phone: phone
        },
        withCredentials: true
      }).catch(err => console.log('注册请求失败，' + err))
    },
    loginByName ({rootState}, payload) {
      let {username, password} = payload
      let url = rootState.serverUrl + 'logbyname'
      return axios({
        method: 'post',
        url: url,
        data: {
          username: username,
          password: password
        },
        withCredentials: true
      }).catch(err => console.log('登录请求失败，' + err))
    },
    loginByPhone ({rootState}, payload) {
      let {phone} = payload
      let url = rootState.serverUrl + 'logbyphone'
      return axios({
        method: 'post',
        url: url,
        data: {
          phone: phone
        },
        withCredentials: true
      }).catch(err => console.log('登录请求失败，' + err))
    },
    logout ({rootState, commit}) {
      let url = rootState.serverUrl + 'logout'
      return axios({
        method: 'get',
        url: url,
        withCredentials: true
      }).then(res => {
        commit('setState', res.data.info)
      })
    }
  }
}

export default UserStore

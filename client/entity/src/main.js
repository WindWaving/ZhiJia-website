// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import leMarkdownEditor from 'le-markdown-editor'
import VueVideoPlayer from 'vue-video-player'
import 'video.js/dist/video-js.css'
import VueSession from 'vue-session'
import animated from 'animate.css' // npm install animate.css --save安装，在引入
import store from './store'
import LeaderLine from 'leader-line-vue'
require('vue-video-player/src/custom-theme.css')
require('vue2-animate/dist/vue2-animate.min.css')

Vue.use(VueSession)
Vue.use(VueVideoPlayer)
Vue.use(Element)
Vue.use(VueMaterial)
Vue.use(leMarkdownEditor)
Vue.use(animated)
Vue.use(LeaderLine)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

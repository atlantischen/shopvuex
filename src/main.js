import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import VueAwesomeSwiper from 'vue-awesome-swiper'
import './assets/iconfont/iconfont.css'
import axios from './http'



import 'swiper/dist/css/swiper.css'



Vue.use(VueAwesomeSwiper, /* { default global options } */)

Vue.config.productionTip = false
Vue.prototype.axios = axios


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

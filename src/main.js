// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import '../static/css/reset.css'
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import mintUi from 'mint-ui'
import 'mint-ui/lib/style.css'

 import zScroll from "@/components/scroll.vue"
 
 Vue.component('zScroll',zScroll)

 //axios
// 引入axios
// 挂载到vue原型链上
Vue.prototype.axios = axios
//axios

Vue.use(mintUi)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

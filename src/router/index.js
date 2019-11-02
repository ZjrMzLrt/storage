import Vue from 'vue'
import Router from 'vue-router'
import li from './li'
import zhang from './zhang'
import meng from './meng'
Vue.use(Router)

export default new Router({
  routes: [
    ...li,
    ...zhang,
    ...meng
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Detail from '@/components/Detail'
import User from '@/components/User'

Vue.use(Router)

export default new Router({
  base: process.env.VUE_APP_API_URL,
  routes: [{
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/user',
    name: 'User',
    component: User
  }, {
    path: '/detail',
    name: 'Detail',
    component: Detail
  }]
})

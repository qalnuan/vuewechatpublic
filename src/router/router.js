import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Detail from '@/pages/Detail'
import OrderDetail from '@/pages/OrderDetail'
import User from '@/pages/User'
import Orders from '@/pages/Orders'
import Set from '@/pages/Set'
import Address from '@/pages/Address'
import Info from '@/pages/Info'
import AddAddress from '@/pages/AddAddress'

Vue.use(Router)

export default new Router({
  mode: 'history',
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
  }, {
    path: '/orders',
    name: 'Orders',
    component: Orders
  }, {
    path: '/orderdetail',
    name: 'OrderDetail',
    component: OrderDetail
  }, {
    path: '/set',
    name: 'Set',
    component: Set
  }, {
    path: '/address',
    name: 'Address',
    component: Address
  }, {
    path: '/info',
    name: 'Info',
    component: Info
  }, {
    path: '/addaddress',
    name: 'AddAddress',
    component: AddAddress
  }]
})

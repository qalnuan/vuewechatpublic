import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/index'
import wechatAuth from './plugins/wechatAuth' //  微信登录插件
import './utils/rem' // rem适配
import ElementUI from 'element-ui'
import AllComponents from './components/index'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/icon/iconfont.css'

import './assets/style/reset.css'
Vue.use(ElementUI)
Vue.use(AllComponents)

const qs = require('qs')

router.beforeEach((to, from, next) => {
  console.log(JSON.stringify(store.state))
  store.dispatch('setLoginStatus', 2)
  if (store.state.loginStatus === '0' || store.state.loginStatus === 0) {
    console.log('未授权流程')
    //  微信未授权登录跳转到授权登录页面
    let url = window.location.href
    //  解决重复登录url添加重复的code与state问题
    let parseUrl = qs.parse(url.split('?')[1])
    let loginUrl
    if (parseUrl.code && parseUrl.state) {
      delete parseUrl.code
      delete parseUrl.state
      loginUrl = `${url.split('?')[0]}?${qs.stringify(parseUrl)}`
    } else {
      loginUrl = url
    }
    console.log(JSON.stringify('loginUrl:' + loginUrl))
    wechatAuth.redirect_uri = loginUrl
    store.dispatch('setLoginStatus', 1)
    console.log(JSON.stringify('wechatAuth.authUrl:' + wechatAuth.authUrl))
    window.location.href = wechatAuth.authUrl
  } else if (store.state.loginStatus === '1' || store.state.loginStatus === 1) {
    console.log('已授权流程')
    try {
      wechatAuth.returnFromWechat(to.fullPath)
    } catch (err) {
      store.dispatch('setLoginStatus', 0)
      console.log(err)
      next()
    }
    store.dispatch('loginWechatAuth', wechatAuth.code).then((res) => {
      console.log('res:' + res)
      if (res.status === 1) {
        store.dispatch('setLoginStatus', 2)
      } else {
        store.dispatch('setLoginStatus', 0)
      }
      next()
    }).catch((err) => {
      console.log(err)
      next()
    })
  } else {
    next()
  }
})

Vue.use(wechatAuth, {
  appid: process.env.VUE_APP_WECHAT_APPID
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

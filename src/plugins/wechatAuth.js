const qs = require('qs')
//  应用授权作用域，snsapi_base （不弹出授权页面，直接跳转，只能获取用户openid），snsapi_userinfo （弹出授权页面，可通过openid拿到昵称、性别、所在地。并且，即使在未关注的情况下，只要用户授权，也能获取其信息）
const SCOPES = ['snsapi_base', 'snsapi_userinfo']

class VueWechatAuthPlugin {
  constructor () {
    this.appid = null
    this.redirect_uri = null
    this.scope = SCOPES[1]
    this._code = null
    this._redirect_uri = null
  }

  install (Vue, options) {
    let wechatAuth = this
    this.setAppId(options.appid)
    Vue.mixin({
      created: function () {
        this.$wechatAuth = wechatAuth
      }
    })
  }

  static makeState () {
    return Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15)
  }

  setAppId (appid) {
    this.appid = appid
  }

  set redirect_uri (redirectUri) {
    this._redirect_uri = encodeURIComponent(redirectUri)
  }

  get redirect_uri () {
    return this._redirect_uri
  }

  get state () {
    return localStorage.getItem('wechat_auth:state')
  }

  set state (state) {
    localStorage.setItem('wechat_auth:state', state)
  }

  get authUrl () {
    if (this.appid === null) {
      throw 'appid must not be null'
    }
    if (this.redirect_uri === null) {
      throw 'redirect uri must not be null'
    }
    this.state = VueWechatAuthPlugin.makeState()
    return `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${this.appid}&redirect_uri=${this.redirect_uri}&response_type=code&scope=${this.scope}&state=${this.state}#wechat_redirect`
  }

  set authUrl (authUrl) {
    if (this.appid === null) {
      throw 'appid must not be null'
    }
    if (this.redirect_uri === null) {
      throw 'redirect uri must not be null'
    }
    this.state = VueWechatAuthPlugin.makeState()
    return `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${this.appid}&redirect_uri=${this.redirect_uri}&response_type=code&scope=${this.scope}&state=${this.state}#wechat_redirect`
  }

  returnFromWechat (redirect_uri) {
    console.log('redirect_uri: ', redirect_uri)
    let parsedUrl = qs.parse(redirect_uri.split('?')[1])
    if (process.env.NODE_ENV === 'development') {
      console.log('parsedUrl: ', parsedUrl)
      console.log('this.state: ', this.state)
      console.log('parsedUrl.code: ', parsedUrl.code)
      this.state = null
      if (!parsedUrl.code) {
        throw 'You did\'t get wechat code'
      }
      this._code = parsedUrl.code
    } else {
      if (this.state === null) {
        throw 'You did\'t set state'
      }
      console.log('parsedUrl: ', parsedUrl)
      console.log('this.state: ', this.state)
      console.log('parsedUrl.code: ', parsedUrl.code)
      if (parsedUrl.state === this.state) {
        this.state = null
        this._code = parsedUrl.code
      } else {
        this.state = null
        throw `Wrong state: ${parsedUrl.state}`
      }
    }
  }

  get code() {
    if (this._code === null) {
      throw 'Not get the code from wechat server!'
    }
    // console.log(this)
    // console.log('this._code: ' + this._code)
    let code = this._code
    this._code = null
    // console.log('code: ' + code)
    return code
  }
}

const vueWechatAuthPlugin = new VueWechatAuthPlugin()

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueWechatAuthPlugin)
}

export default vueWechatAuthPlugin

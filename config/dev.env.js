'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  VUE_APP_WECHAT_APPID: '"wx4f5e78833340c37b"',
  VUE_APP_API_URL: '"http://localhost:8080"'

})

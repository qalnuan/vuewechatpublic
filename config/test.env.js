'use strict'
const merge = require('webpack-merge')
const devEnv = require('./dev.env')

module.exports = merge(devEnv, {
  NODE_ENV: '"testing"',
  VUE_APP_WECHAT_APPID: '"wx4f5e78833340c37b"',
  VUE_APP_API_URL: '"http://119.29.22.177"'
})

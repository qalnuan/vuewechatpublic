import request from '../utils/request'
import {
  loadUserInfo
} from '../utils/cache'

function getUserInfo () {
  return loadUserInfo()
}

/**
 * 获取首页信息
 */
export function getHomeInfoReq () {
  return request({
    url: '/routine/auth_api',
    method: 'get',
    params: {
      uid: getUserInfo()['uid']
    }
  })
}

/**
 * 获取后台用户信息
 */
export function getUserInfoReq () {
  return request({
    url: '/routine/auth_api/get_user_info',
    method: 'get',
    params: {
      uid: getUserInfo()['uid']
    }
  })
}

/**
 * 获取订单列表
 * @param {参数} params
 */
export function getOrdersReq (params) {
  params['uid'] = getUserInfo()['uid']
  return request({
    url: '/routine/auth_api/get_user_order_list',
    method: 'post',
    params: params
  })
}

/**
 * 获取订单详情
 * @param {参数} params
 */
export function getOrderDetailReq (params) {
  params['uid'] = getUserInfo()['uid']
  return request({
    url: '/routine/auth_api/get_order',
    method: 'post',
    params: params
  })
}

/**
 * 获取产品详情
 * @param {*} params 参数
 */
export function getProductInfoReq (params) {
  params['uid'] = getUserInfo()['uid']
  return request({
    url: '/routine/auth_api/details',
    method: 'post',
    params: params
  })
}

/**
 * 获取用户地址
 * @param {*} params 参数
 */
export function getAddressListReq (params) {
  params['uid'] = getUserInfo()['uid']
  return request({
    url: '/routine/auth_api/user_address_list',
    method: 'post',
    params: params
  })
}

import request from '../utils/request'

/**
 * 获取首页信息
 */
export function get_home_info () {
  return request({
    url: '/routine/login/get_home_info',
    method: 'get'
  })
}

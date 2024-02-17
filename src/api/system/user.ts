import { http } from '@/utils/http/axios'

export interface BasicResponseModel<T = any> {
  code: number
  message: string
  result: T
}

/**
 * @description: 用户登录
 */
export function login(params: any) {
  return http.request<BasicResponseModel>(
    {
      url: '/login',
      method: 'POST',
      params,
    },
    {
      isTransformResponse: false,
    },
  )
}

/**
 * @description: 获取用户信息
 */
export function getUserInfo() {
  return http.request({
    url: '/getUserInfo',
    method: 'get',
  })
}

/**
 * @description: 用户登出
 */
export function doLogout() {
  return http.request({
    url: '/logout',
    method: 'POST',
  })
}

/**
 * @description: 用户修改密码
 */
export function changePassword(params: any, uid: any) {
  return http.request(
    {
      url: `/user/u${uid}/changepw`,
      method: 'POST',
      params,
    },
    {
      isTransformResponse: false,
    },
  )
}

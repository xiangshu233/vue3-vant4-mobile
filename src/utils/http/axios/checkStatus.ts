import { showFailToast } from 'vant'

export function checkStatus(status: number, msg: string): void {
  switch (status) {
    case 400:
      showFailToast(msg)
      break
    // 401: 未登录
    // 未登录则跳转登录页面，并携带当前页面的路径
    // 在登录成功后返回当前页面，这一步需要在登录页操作。
    case 401:
      showFailToast('用户没有权限（令牌、用户名、密码错误）!')
      break
    case 403:
      showFailToast('用户得到授权，但是访问是被禁止的。!')
      break
    // 404请求不存在
    case 404:
      showFailToast('网络请求错误，未找到该资源!')
      break
    case 405:
      showFailToast('网络请求错误，请求方法未允许!')
      break
    case 408:
      showFailToast('网络请求超时')
      break
    case 500:
      showFailToast('服务器错误,请联系管理员!')
      break
    case 501:
      showFailToast('网络未实现')
      break
    case 502:
      showFailToast('网络错误')
      break
    case 503:
      showFailToast('服务不可用，服务器暂时过载或维护!')
      break
    case 504:
      showFailToast('网络超时')
      break
    case 505:
      showFailToast('http版本不支持该请求!')
      break
    default:
      showFailToast(msg)
  }
}

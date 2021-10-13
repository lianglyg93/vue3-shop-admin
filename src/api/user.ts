import request from '@/http/request'

export const getLoginInfo = () => {
  return request({
    method: 'GET',
    url: '/login/info'
  })
}

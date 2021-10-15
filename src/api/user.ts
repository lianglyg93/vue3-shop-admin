import request from '@/http/request'
import { ILoginInfo } from './types/user'

// interface ResponseRes<T> {
//   msg: string;
//   status: number;
//   data : T
// }

export const getLoginInfo = () => {
  // return request.get<ResponseRes<ILoginInfo>>('/login/info')

  return request<ILoginInfo>({
    method: 'GET',
    url: '/admin/login/info'
  })
}

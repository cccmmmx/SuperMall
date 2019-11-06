import axios from './axios'

export const BANNER = 'banner'
export const RECOMMEND = 'recommend'

export function getHomeMultidata() {
  return axios({
    url: 'http://123.207.32.32:8000/home/multidata'
  })
}
export function getHomeData(name) {
  return axios({
    url: 'https://www.apiopen.top/novelInfoApi',
    params: {
      name
    }
  })
}
// export function getHomeData(type, page) {
//   return axios({
//     url: '/home/data',
//     params: {
//       type,
//       page
//     }
//   })
// }

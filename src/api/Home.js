//封装要发起的请求
import request from '@/utils/request'//把网络请求工具拿来
//封装网络请求方法（工具人）
export const recommendMusic = params => request({
  url: "/personalized",
  params
})

//最新音乐
export const hotMusic = params => request({
  url: "/personalized/newsong",
  params
})
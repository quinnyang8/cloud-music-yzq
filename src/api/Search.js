import request from '@/utils/request' //将小车车引过来
export const hotSearch = () => request({
  url: '/search/hot'
})

export const searchResult = params => request({
  url: '/cloudsearch',
  params
})
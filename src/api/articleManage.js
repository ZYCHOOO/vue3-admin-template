import request from '@/utils/request'

// 获取文章列表
export const getArticleList = (params) => {
  return request({
    url: '/article/list',
    method: 'GET',
    params
  })
}

// 获取文章详情
export const getArticleDetail = (params) => {
  return request({
    url: '/article/detail',
    method: 'GET',
    params
  })
}

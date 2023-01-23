import store from '@/store'
import { getQueryString } from '@/utils/index'

const articleList = {
  zh: [
    {
      id: '11111',
      author: 'ZYCHOOO',
      publishDate: '1629099597000',
      title: '标题1',
      desc: '简介111',
      content: '<span style="color: blue">测试内容</span>'
    },
    {
      id: '22222',
      author: 'ZYCHOOO',
      publishDate: '1672213749083',
      title: '标题2',
      desc: '简介222',
      content: ''
    },
    {
      id: '33333',
      author: 'ZYCHOOO',
      publishDate: '1629099597000',
      title: '标题3',
      desc: '简介333',
      content: ''
    },
    {
      id: '44444',
      author: 'ZYCHOOO',
      publishDate: '1629099597000',
      title: '标题4',
      desc: '简介444',
      content: ''
    },
    {
      id: '55555',
      author: 'ZYCHOOO',
      publishDate: '1629099597000',
      title: '标题5',
      desc: '简介555',
      content: ''
    },
    {
      id: '66666',
      author: 'ZYCHOOO',
      publishDate: '1629099597000',
      title: '标题6',
      desc: '简介666',
      content: ''
    },
    {
      id: '77777',
      author: 'ZYCHOOO',
      publishDate: '1629099597000',
      title: '标题7',
      desc: '简介777',
      content: ''
    },
    {
      id: '88888',
      author: 'ZYCHOOO',
      publishDate: '1629099597000',
      title: '标题8',
      desc: '简介888',
      content: ''
    },
    {
      id: '99999',
      author: 'ZYCHOOO',
      publishDate: '1629099597000',
      title: '标题9',
      desc: '简介999',
      content: ''
    },
    {
      id: '10101',
      author: 'ZYCHOOO',
      publishDate: '1629099597000',
      title: '标题10',
      desc: '简介10101',
      content: ''
    }
  ]
}
export default [
  {
    url: '/article/list',
    type: 'get',
    response: (config) => {
      return {
        code: 200,
        success: true,
        data: {
          total: 16,
          data: articleList.zh
        }
      }
    }
  },
  {
    url: '/article/detail',
    type: 'get',
    response: (config) => {
      const id = getQueryString(config.query, 'id')
      const detail = articleList[store.getters.language].find(
        (item) => item.id === id
      )
      return {
        code: 200,
        success: true,
        data: detail
      }
    }
  }
]

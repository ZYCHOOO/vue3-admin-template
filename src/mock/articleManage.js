import store from '@/store'
import { getQueryString } from '@/utils/index'

const articleList = {
  zh: [
    {
      id: '11111',
      author: 'ZYCHOOO',
      publishDate: '1629099597000',
      title: '这是一个标题',
      desc: '简介111',
      content: '<span style="color: blue">测试内容</span>'
    },
    {
      id: '22222',
      author: 'ZYCHOOO',
      publishDate: '1672213749083',
      title: '杭州两学校出现新冠阳性学生：15例均为首次感染',
      desc: '简介222',
      content: ''
    },
    {
      id: '33333',
      author: 'ZYCHOOO',
      publishDate: '1629099597000',
      title: '黑客组织正对中国疯狂实施网络攻击',
      desc: '简介333',
      content: ''
    },
    {
      id: '44444',
      author: 'ZYCHOOO',
      publishDate: '1629099597000',
      title: '90后小伙以为健康体检一身老年病',
      desc: '简介444',
      content: ''
    },
    {
      id: '55555',
      author: 'ZYCHOOO',
      publishDate: '1629099597000',
      title: '《小龙人》贝贝扮演者去世 年仅38岁',
      desc: '简介555',
      content: ''
    },
    {
      id: '66666',
      author: 'ZYCHOOO',
      publishDate: '1629099597000',
      title: '亚马逊要求员工一周到岗工作3天',
      desc: '简介666',
      content: ''
    },
    {
      id: '77777',
      author: 'ZYCHOOO',
      publishDate: '1629099597000',
      title: '中国台湾联赛大规模冲突',
      desc: '简介777',
      content: ''
    },
    {
      id: '88888',
      author: 'ZYCHOOO',
      publishDate: '1629099597000',
      title: '亚马逊要求员工一周到岗工作3天',
      desc: '简介888',
      content: ''
    },
    {
      id: '99999',
      author: 'ZYCHOOO',
      publishDate: '1629099597000',
      title: '澳男子非法捐精致60个孩子模样相似',
      desc: '简介999',
      content: ''
    },
    {
      id: '10101',
      author: 'ZYCHOOO',
      publishDate: '1629099597000',
      title: '欠款艺人遇法官称一分钟筹集20万',
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

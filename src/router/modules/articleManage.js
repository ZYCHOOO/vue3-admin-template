import Layout from '@/layout/index'

export default [
  {
    path: '/article',
    name: 'articleManage',
    component: Layout,
    redirect: '/article/article-create',
    meta: { title: '文章管理', icon: 'article' },
    children: [
      {
        path: '/article-create',
        name: 'articleCreate',
        component: () => import('@/views/articleManage/articleCreate'),
        meta: { title: '创建文章', icon: 'article' }
      },
      {
        path: '/article-manage',
        name: 'articleManage',
        component: () => import('@/views/articleManage/articleManage'),
        meta: { title: '文章管理', icon: 'article' }
      },
      {
        path: '/article-detail',
        name: 'articleDetail',
        component: () => import('@/views/articleManage/articleDetail'),
        meta: { title: '文章详情', icon: '' }
      }
    ]
  }
]

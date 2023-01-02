import Layout from '@/layout/index'

export default [
  {
    path: '/article',
    name: 'articleManage',
    component: Layout,
    redirect: '/article/article-create',
    meta: { title: 'article', icon: 'article' },
    children: [
      {
        path: '/article-create',
        name: 'articleCreate',
        component: () => import('@/views/articleManage/articleCreate'),
        meta: { title: 'articleCreate', icon: 'article' }
      },
      {
        path: '/article-manage',
        name: 'articleManage',
        component: () => import('@/views/articleManage/articleManage'),
        meta: { title: 'articleManage', icon: 'article' }
      },
      {
        path: '/article-detail/:id',
        name: 'articleDetail',
        component: () => import('@/views/articleManage/articleDetail'),
        meta: { title: 'articleDetail', icon: '' }
      }
    ]
  }
]

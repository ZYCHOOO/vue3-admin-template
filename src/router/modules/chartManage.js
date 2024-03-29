import Layout from '@/layout/index'

export default [
  {
    path: '/chart',
    name: 'chartManage',
    component: Layout,
    redirect: '/chart/chart-manage',
    children: [
      {
        path: '/chart-manage',
        name: 'chartManage',
        component: () => import('@/views/chartManage/chartManage'),
        meta: { title: 'chartManage', icon: 'chart' }
      }
    ]
  }
]

import Layout from '@/layout/index'

export default [
  {
    path: '/chart',
    name: 'chartManage',
    component: Layout,
    redirect: '/chart/chart-manage',
    meta: { title: 'visual', icon: 'article' },
    children: [
      {
        path: '/chart-manage',
        name: 'chartManage',
        component: () => import('@/views/chartManage/chartManage'),
        meta: { title: 'chartManage', icon: 'chart' }
      },
      {
        path: '/map-manage',
        name: 'mapManage',
        component: () => import('@/views/chartManage/mapManage'),
        meta: { title: 'mapManage', icon: 'chart' }
      }
    ]
  }
]

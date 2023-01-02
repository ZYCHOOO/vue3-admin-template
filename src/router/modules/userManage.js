import Layout from '@/layout/index'

export default [
  {
    path: '/user',
    name: 'userManage',
    component: Layout,
    redirect: '/user/user-manage',
    meta: { title: 'user', icon: 'user' },
    children: [
      {
        path: '/user-manage',
        name: 'userManage',
        component: () => import('@/views/userManage/userList'),
        meta: { title: 'userManage', icon: 'user' }
      },
      {
        path: '/role-manage',
        name: 'roleManage',
        component: () => import('@/views/userManage/roleList'),
        meta: { title: 'roleManage', icon: 'user' }
      },
      {
        path: '/permission-manage',
        name: 'permissionManage',
        component: () => import('@/views/userManage/permissionList'),
        meta: { title: 'permissionManage', icon: 'user' }
      }
    ]
  }
]

import Layout from '@/layout/index'

export default [
  {
    path: '/user',
    name: 'userManage',
    component: Layout,
    redirect: '/user/user-manage',
    meta: { title: '用户管理', icon: 'user' },
    children: [
      {
        path: '/user-manage',
        name: 'userManage',
        component: () => import('@/views/userManage/userList'),
        meta: { title: '用户管理', icon: 'user' }
      },
      {
        path: '/role-manage',
        name: 'roleManage',
        component: () => import('@/views/userManage/roleList'),
        meta: { title: '角色管理', icon: 'user' }
      },
      {
        path: '/permission-manage',
        name: 'permissionManage',
        component: () => import('@/views/userManage/permissionList'),
        meta: { title: '权限管理', icon: 'user' }
      }
    ]
  }
]

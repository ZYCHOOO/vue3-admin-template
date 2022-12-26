import store from '@/store'
import { createRouter, createWebHashHistory } from 'vue-router'

// 私有路由表
export const privateRoutes = []

// 公开路由表
export const publicRoutes = [
  {
    path: '/login',
    name: 'Login',
    component: () =>
      import(/* webpackChunkName: 'login' */ '@/views/login/login')
  },
  {
    path: '/',
    redirect: '/dashboard',
    component: () => import('@/layout/index'),
    children: [
      // 首页
      {
        path: '/dashboard',
        name: 'Dashboard',
        component: () =>
          import(
            /* webpackChunkName: 'dashboard' */ '@/views/dashboard/dashboard'
          ),
        meta: { title: '首页', icon: 'user' }
      },
      // 404 页面
      {
        path: '/404',
        name: '404',
        component: () =>
          import(/* webpackChunkName: '404' */ '@/views/error/404')
      },
      // 401 页面
      {
        path: '/401',
        name: '401',
        component: () =>
          import(/* webpackChunkName: '401' */ '@/views/error/401')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: publicRoutes
})

export function resetRouter () {
  if (
    store.getters.userInfo &&
    store.getters.userInfo.permission &&
    store.getters.userInfo.permission.menus
  ) {
    const menus = store.getters.pemission.menus
    menus.forEach((menu) => {
      router.removeRoute(menu)
    })
  }
}

export default router

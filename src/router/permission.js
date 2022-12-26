import store from '@/store'
import router from '@/router'

// 路由白名单
const whiteList = ['/login']

// 路由前置守卫
router.beforeEach(async (to, from, next) => {
  // 用户已登录状态，不能前往 login 登录页面
  if (store.getters.token) {
    if (to.path === '/login') {
      next('/')
    } else {
      // 判断是否有用户信息，如果没有则获取用户信息
      if (!store.getters.hasUserInfo) {
        const { permission } = await store.dispatch('user/getUserInfo')

        const filterRoutes = await store.dispatch(
          'permission/filterRoutes',
          permission.menus
        )

        console.log(filterRoutes)

        // 利用 addRoute 循环添加
        filterRoutes.forEach((item) => {
          router.addRoute(item)
        })

        // 添加完动态路由之后，需要在进行一次主动跳转
        return next(to.path)
      }
      next()
    }
  } else {
    // 用户非登录状态，前往 login 登录页面进行登录操作
    whiteList.includes(to.path) ? next() : next('/login')
  }
})

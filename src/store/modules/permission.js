import { publicRoutes, privateRoutes } from '@/router'

export default {
  namespaced: true,
  state: () => ({
    routes: publicRoutes
  }),
  mutations: {
    setRoutes (state, routes) {
      state.routes = routes
    }
  },
  actions: {
    filterRoutes ({ commit }, menus) {
      const routes = []

      menus.forEach((key) => {
        routes.push(...privateRoutes.filter((item) => item.name === key))
      })

      routes.push({
        path: '/:catchAll(.*)',
        redirect: '/404'
      })

      commit('setRoutes', routes)
      return routes
    }
  }
}

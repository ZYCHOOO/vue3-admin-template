export default {
  namespaced: true,
  state: () => ({
    sidebarOpened: true
  }),
  mutations: {
    toggleSidebarOpened (state) {
      state.sidebarOpened = !state.sidebarOpened
    }
  }
}

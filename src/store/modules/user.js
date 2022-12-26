import md5 from 'md5'
import router, { resetRouter } from '@/router'
import { TOKEN_KEY } from '@/constant/enums'
import { login, getUserInfo } from '@/api/sys'
import { getStorage, setStorage, clearAllStorage } from '@/utils/storage'

export default {
  namespaced: true,
  state: () => ({
    token: getStorage(TOKEN_KEY) || '',
    userInfo: {}
  }),
  mutations: {
    setToken (state, token) {
      state.token = token
      setStorage(TOKEN_KEY, token)
    },
    setUserInfo (state, userInfo) {
      state.userInfo = userInfo
    }
  },
  actions: {
    // 登录操作
    login (ctx, loginInfo) {
      const { username, password } = loginInfo
      return new Promise((resolve, reject) => {
        login({ username, password: md5(password) })
          .then((data) => {
            this.commit('user/setToken', data.token)
            // 跳转至首页
            router.push('/')
            resolve()
          })
          .catch((error) => {
            reject()
          })
      })
    },
    // 获取用户资料
    async getUserInfo (context) {
      const res = await getUserInfo()
      this.commit('user/setUserInfo', res)
      return res
    },
    // 登出操作
    logout (ctx) {
      this.commit('user/setToken', '')
      clearAllStorage()
      resetRouter()
      router.push('/login')
    }
  }
}

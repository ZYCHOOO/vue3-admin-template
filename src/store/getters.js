import { getStorage } from '@/utils/storage'
import { generateColors } from '@/utils/theme'
import { MAIN_COLOR_KEY } from '@/constant/enums'

const getters = {
  token: (state) => state.user.token,
  hasUserInfo: (state) => {
    // return 内容 true，表示用户信息存在
    return JSON.stringify(state.user.userInfo) !== '{}'
  },
  cssVar: (state) => {
    return {
      ...state.theme.variables,
      ...generateColors(getStorage(MAIN_COLOR_KEY))
    }
  },
  userInfo: (state) => state.user.userInfo,
  sidebarOpened: (state) => state.app.sidebarOpened,
  language: (state) => state.app.language,
  mainColor: (state) => state.theme.mainColor,
  tagViewList: (state) => state.app.tagViewList,
  permission: (state) => state.user.permission
}

export default getters

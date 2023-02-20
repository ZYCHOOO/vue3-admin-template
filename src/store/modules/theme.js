import { getStorage, setStorage } from '@/utils/storage'
import variables from '@/styles/variables.scss'
import { MAIN_COLOR_KEY, DEFAULT_COLOR_KEY } from '@/constant/enums'

export default {
  namespaced: true,
  state: () => ({
    variables,
    mainColor: getStorage(MAIN_COLOR_KEY) || getStorage(DEFAULT_COLOR_KEY)
  }),
  mutations: {
    setMainColor (state, newColor) {
      state.mainColor = newColor
      state.variables.menuBg = newColor
      setStorage(MAIN_COLOR_KEY, newColor)
    }
  },
  actions: {}
}

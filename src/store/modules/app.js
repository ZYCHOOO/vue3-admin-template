import { LANG_KEY, TAG_VIEW_KEY } from '@/constant/enums'
import { getStorage, setStorage } from '@/utils/storage'

export default {
  namespaced: true,
  state: () => ({
    sidebarOpened: true,
    language: getStorage(LANG_KEY) || 'zh-CN',
    tagViewList: getStorage(TAG_VIEW_KEY) || []
  }),
  mutations: {
    toggleSidebarOpened (state) {
      state.sidebarOpened = !state.sidebarOpened
    },
    setLanguage (state, language) {
      state.language = language
      setStorage(LANG_KEY, language)
    },
    addTagViewList (state, tag) {
      const isDuplicate = state.tagViewList.find(
        (item) => item.path === tag.path
      )
      if (!isDuplicate) {
        state.tagViewList = [...state.tagViewList, tag]
        setStorage(TAG_VIEW_KEY, state.tagViewList)
      }
    },
    changeTagView (state, { index, tag }) {
      state.tagViewList[index] = tag
      setStorage(TAG_VIEW_KEY, state.tagViewList)
    },
    /**
     * @param { type: 'other' || 'right' || 'index' } payload
     */
    removeTagView (state, payload) {
      const { type, index } = payload
      console.log(type, index)
      if (type === 'index') {
        state.tagViewList.splice(index, 1)
      } else if (type === 'other') {
        state.tagViewList = [state.tagViewList[index]]
      } else if (type === 'right') {
        state.tagViewList.splice(
          index + 1,
          state.tagViewList.length - index + 1
        )
      }
      setStorage(TAG_VIEW_KEY, state.tagViewList)
    }
  }
}

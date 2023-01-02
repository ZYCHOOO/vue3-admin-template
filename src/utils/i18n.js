import store from '@/store'
import { watch } from 'vue'
import i18n from '@/i18n/index'

export function generateTitle (title) {
  i18n.global.locale.value = store.getters.language
  return i18n.global.t(`route.${title}`)
}

/*
 * 监听语言变化, 同时执行cb
 */
export function watchSwitchLang (...cbs) {
  watch(
    () => store.getters.language,
    () => {
      // cbs.forEach((cb) => cb(store.getters.language))
      cbs.forEach((cb) => cb())
    }
  )
}

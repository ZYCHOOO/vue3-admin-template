import store from '@/store'
import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    msg: {}
  },
  zh: {
    msg: {}
  }
}

function getLanguage () {
  return store && store.getters && store.getters.language
}

const i18n = createI18n({
  // 使用 Composition API 模式，则需要将其设置为false
  legacy: false,
  // 全局注入 $t 函数
  globalInjection: true,
  silentTranslationWarn: true,
  locale: getLanguage(),
  fallbackLocale: 'zh',
  messages
})

export default i18n

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { installDirectives } from '@/directives/index'
import installElementPlus from './plugins/element'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)
installElementPlus(app)
installDirectives(app)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(store).use(router).mount('#app')

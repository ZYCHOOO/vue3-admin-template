import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import installElementPlus from './plugins/element'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import installDirectives from '@/directives/index'
import installComponents from '@/components/index'
import installFilters from '@/filters/index'

const app = createApp(App)
installElementPlus(app)
installDirectives(app)
installComponents(app)
installFilters(app)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(store).use(router).mount('#app')

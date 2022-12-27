import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

import '@/styles/index.scss'

import installElementPlus from './plugins/element'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import '@/router/permission'

import { initMockServer } from '@/mock/mock-server'

import installDirectives from '@/directives/index'
import installComponents from '@/components/index'
import installFilters from '@/filters/index'
import installIcons from '@/assets/icons'

initMockServer()

const app = createApp(App)
installElementPlus(app)
installDirectives(app)
installComponents(app)
installFilters(app)
installIcons(app)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(store).use(router).mount('#app')

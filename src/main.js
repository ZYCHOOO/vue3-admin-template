import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { installDirectives } from '@/directives/index'

const app = createApp(App)
installDirectives(app)

app.use(store).use(router).mount('#app')

import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { GLOBAL_STORE } from './store/global.store'

const app = createApp(App)

app.use(GLOBAL_STORE)
app.use(router)
app.mount('#app')

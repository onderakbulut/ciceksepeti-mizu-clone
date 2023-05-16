import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle'

import './assets/css/bootstrap.css'
import './assets/css/burger.css'
import './assets/css/megamenu.css'
import './assets/css/main.css'
import './assets/css/responsive.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(bootstrap)

app.mount('#app')

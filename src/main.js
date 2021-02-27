import { createApp } from 'vue'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './assets/css/modify.css'
import App from './App.vue'
import route from "./router"


createApp(App)
.use(route)
.mount('#app')
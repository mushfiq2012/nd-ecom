import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
//import axios from './boot/axios'
import App from './App.vue'
import router from './router'
//const baseURL = 'http://localhost:3000/api/v1'
// axios.create({ baseURL: 'http://localhost:3000/api/v1' })
// axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'
const app = createApp(App)

app.use(createPinia())
app.use(router)
//app.use(axios, baseURL)

app.mount('#app')

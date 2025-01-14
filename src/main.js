import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router/index.js";
import './assets/css/global.css'
import 'element-plus/dist/index.css'
// import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

const pinia = createPinia()
const app = createApp(App)
// app.use(piniaPluginPersistedstate)
app.use(pinia)
app.use(ElementPlus, {locale: zhCn})
app.use(router)
app.mount('#app')

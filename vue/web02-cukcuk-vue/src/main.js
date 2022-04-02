import { createApp } from 'vue'
import App from './App.vue'
//import VueRouter from 'vue-router'
// 1. định nghĩa, import các router
import router from './router/index'
//import axios from 'axios'
import MISAEnum from './js/enum.js'
import MISAResource from './js/resource.js'

//createApp(App).use(router).mount('#app')
//4. su dung vue router cho app
let app = createApp(App)
app.config.globalProperties.MISAEnum = MISAEnum
app.config.globalProperties.MISAResource = MISAResource
app.use(router, MISAEnum, MISAResource)
app.mount("#app")
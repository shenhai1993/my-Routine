import Vue from 'vue'
import App from './App'
import HttpPost from './utils/http'
Vue.config.productionTip = false
Vue.prototype.$wxhttp = HttpPost
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

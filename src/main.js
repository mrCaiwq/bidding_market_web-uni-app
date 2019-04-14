import Vue from 'vue'
import App from './App'
import checkToken from './utils/router_guard.js'
import toast from './utils/toast.js'
import routerPush from './utils/router_push.js'

import store from './store'

Vue.config.productionTip = false
Vue.prototype.$checkToken = checkToken
Vue.prototype.$toast = toast
Vue.prototype.$routerPush = routerPush
Vue.prototype.$store = store

App.mpType = 'app'

const app = new Vue({
	store,
  ...App
})
app.$mount()

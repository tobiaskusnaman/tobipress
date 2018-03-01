import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import axios from 'axios'
// import swal from 'sweetalert'

Vue.config.productionTip = false

Vue.use(axios)
// Vue.use(swal)

Vue.prototype.$axios = axios.create({
  baseURL: 'http://localhost:3000/'
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

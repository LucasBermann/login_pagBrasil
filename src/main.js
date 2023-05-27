// import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'

import App from './App'

import './config/bootstrap'
import './config/msgs'
import './config/axios'
import './config/mq'
import './global.css'
import store from './config/store'
import router from './config/router'

import VueMask from 'v-mask';
Vue.use(VueMask);

import money from 'v-money'

// register directive v-money and component <money>
Vue.use(money, {precision: 4})

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
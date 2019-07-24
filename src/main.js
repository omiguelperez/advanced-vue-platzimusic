import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

import routes from '@/routes'

import EventBus from '@/plugins/event-bus'

// BulmaCSS support for Vue.js
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

Vue.use(VueRouter)
Vue.use(EventBus)
Vue.use(Buefy)

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  el: '#app',
  render: h => h(App),
  router
})

import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import './plugins/fontawesome'
import vuetify from './plugins/vuetify';
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import {store} from './store'

Vue.config.productionTip = false

new Vue({
  vuetify, store, router,
  render: h => h(App)
}).$mount('#app')

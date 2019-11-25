import Vue from 'vue'
import './plugins/fontawesome'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')

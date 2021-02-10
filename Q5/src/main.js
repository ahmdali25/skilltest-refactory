import Vue from 'vue'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/src/jquery.js'
import 'popper.js/dist/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js'

import Toasted from 'vue-toasted';

Vue.use(Toasted)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

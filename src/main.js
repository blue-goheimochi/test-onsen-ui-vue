// Onsen UI CSS import
import 'onsenui/css/onsenui.css'
import 'onsenui/css/onsen-css-components.css'

// Vuex
import store from './store'

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

// Onsen UI JS
import 'onsenui'
import VueOnsen from 'vue-onsenui'
Vue.use(VueOnsen)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  template: '<App/>',
  components: { App }
})

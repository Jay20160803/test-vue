import 'sysStatic/css/theme-default.scss'
import '../mock/index.js'

import Vue from 'vue'
import App from './App'
import router from './router'
import 'babel-polyfill'
import ElementUI from 'element-ui'
import store from './store'
import axios from './util/ajax'
import i18n from './util/i18n'


// 注册组件到Vue
Vue.prototype.$axios = axios
Vue.use(ElementUI, {
  i18n: (key, value) => i18n.t(key, value)
})

/* eslint-disable no-new */
new Vue({
  i18n,
  router,
  axios,
  store,
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import router from '@/router'
import './plugins/element.js'
import '@/plugins/validate'

import {preventReClick} from "@/plugins/preventReClick";
Vue.prototype.$preventReClick = preventReClick

new Vue({
  render: h => h(App),
  router,
  beforeCreate () {
    Vue.prototype.$bus = this
  },
}).$mount('#app')

export default myVue
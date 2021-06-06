import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueI18n from 'vue-i18n'
import languages from './language/languages'
import numbers from './language/numbersFormat'
import Swal from 'sweetalert2/dist/sweetalert2.js'

Vue.config.productionTip = false
Vue.use(VueI18n)
Vue.prototype.$swal = Swal

const messages = languages

const numberFormats = numbers

const i18n = new VueI18n({
  locale: 'es', // set locale
  numberFormats,
  messages, // set locale messages
})

new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')

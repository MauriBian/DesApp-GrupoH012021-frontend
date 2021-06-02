import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueI18n from 'vue-i18n'

Vue.config.productionTip = false
Vue.use(VueI18n)

const messages = {
  en: {
    message: {
      hello: 'hello world'
    }
  },
  ja: {
    message: {
      hello: 'こんにちは、世界'
    }
  },
  es: {
    message: {
      hello: 'Hola mundo'
    }
  }
}

const i18n = new VueI18n({
  locale: 'es', // set locale
  messages, // set locale messages
})

new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')

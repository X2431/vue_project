import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,//我们所有组件内部都可以使用this.$router 和this.$route
  render: h => h(App)
  // comments:{App}
}).$mount('#app')

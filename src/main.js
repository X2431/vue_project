import Vue from 'vue'
import App from './App.vue'
import router from './router'
import TypeNav from './components/TypeNav'
import store from './store'
import './api'

// 第二种测试方式
// import {reqCategoryList} from './api'
// reqCategoryList()

Vue.config.productionTip = false

Vue.component('TypeNav',TypeNav)


new Vue({
  router,//我们所有组件内部都可以使用this.$router 和this.$route
  store,//这个注册上，所有的组件都可以拿到this.$store
  render: h => h(App)
  // comments:{App}
}).$mount('#app')

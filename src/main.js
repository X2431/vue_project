import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './api'

import './mock/mockServer'
import TypeNav from './components/TypeNav'
import SlideShow from './components/SlideShow'
import 'swiper/css/swiper.css'

// 第二种测试方式
// import {reqCategoryList} from './api'
// reqCategoryList()

Vue.config.productionTip = false

//公用的可以定义为全局组件
Vue.component('TypeNav',TypeNav)
Vue.component('SlideShow',SlideShow)


new Vue({
  router,//我们所有组件内部都可以使用this.$router 和this.$route
  store,//这个注册上，所有的组件都可以拿到this.$store
  render: h => h(App)
  // comments:{App}
}).$mount('#app')

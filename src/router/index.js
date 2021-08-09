//引入并神功使用插件
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/Home'
import Register from '../pages/Register'
import Login from '../pages/Login'
import Search from '../pages/Search'

Vue.use(VueRouter)



//向外暴露一个路由器对象
export default new VueRouter({
    //配置路由
    routes: [{
        path: '/home',
        component: Home
    },{
        path: '/register',
        component: Register,
        meta:{
            isHidden:true
        }
    },{
        path: '/login',
        component: Login,
        //路由对象当中的原配置项，可以配置我们所需要的任何数据
        meta:{
            //是否进行隐藏
            isHidden:true
        }
    },{
        path: '/search',
        component: Search
    },{
        // 重定向路由，如果页面默认是/，则重定向到home组件中
        path:'/',
        redirect:'/home'
    }]
})
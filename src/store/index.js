import Vue from 'vue'
import Vuex from 'vuex'
import home from './home'
import user from './user'
import search from './search'

Vue.use(Vuex)

//vuex当中的4个核心概念
const state = {
    //这里用来存储数据
    
}

const mutations = {
    //直接修改数据

}

const actions = {
    //一般是异步发送请求，与组件当中用户对接，提交mutations
    
}

const getters = {
    //简化数据操作
}

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
    //modules代表的是模块化
    modules:{
        home,
        user,
        search
    }
})
import {reqCategoryList,reqBannerList,reqFloorList} from '../api'

//这是home的vuex模块

const state = {
    categoryList:[],
    bannerList:[],
    floorList:[]

}

const mutations = {
    //直接修改数据
    RECEIVE_CATEGORYLIST(state,categoryList){
        state.categoryList = categoryList
    },

    RECEIVE_BANNERLIST(state,bannerList){
        state.bannerList = bannerList
    },

    RECEIVE_FLOORLIST(state,floorList){
        state.floorList = floorList
    }
}

const actions ={
    //一般是异步发送请求，与组件当中用户对接，提交mutations
    //正常情况async和await是需要trycatch包裹防止promise失败判断，但是ajax中已经处理了错误
    async getCategoryList({commit}){
        //await和async的作用：同步语法实现异步的功能，语义化更好
        const result = await reqCategoryList()
        if(result.code === 200){
            commit('RECEIVE_CATEGORYLIST',result.data)
        }
    },

    async getBannerList({commit}){
        const result = await reqBannerList()
        if(result.code === 200){
            commit('RECEIVE_BANNERLIST',result.data)
        }
    },

    async getFloorList({commit}){
        const result = await reqFloorList()
        if(result.code === 200){
            commit('RECEIVE_FLOORLIST',result.data)
        }
    }

}
const getters ={

}

//暴露所有的模块内容
export default {
    state,
    actions,
    mutations,
    getters
}
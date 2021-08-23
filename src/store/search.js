import {reqSearchInfo} from '../api'
//这是user的vuex模块

const state = {
    SearchInfo:{}
}

const mutations = {
    RECEIVE_SEARCHINFO(state,SearchInfo){
        state.SearchInfo = SearchInfo
    }
}

const actions ={
    async getSearchInfo({commit},SearchParams){
       const result = await reqSearchInfo(SearchParams)
       commit('RECEIVE_SEARCHINFO',result)
    }
}

const getters ={
    trademarkList(state){return state.SearchInfo.trademarkList || []},
    goodsList(state){return state.SearchInfo.goodsList || []},
    // attrsList(state){return state.SearchInfo.attrsList || []}
    attrsList:state => state.SearchInfo.attrsList || []
}

//暴露所有的模块内容
export default {
    state,
    actions,
    mutations,
    getters
}
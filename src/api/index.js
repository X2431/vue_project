//这个文件都是函数，是接口请求函数
//以后，每个接口对应了一个函数，想要拿相关接口的数据，只需要调用相关接口请求函数

//axios使用  函数用法   对象用法
//三种参数  params  query  请求体参数
// params参数，在url中携带
// query参数， 可以在url当中携带？分割，后面就是query参数
//             也可以在配置对象中撇脂，配置的属性名叫params
// 请求体参数，在配置对象中data配置，请求方式是put和post才有请求体参数
// axios({
//     url:'',
//     method:{},
//     params:{
//         //代表的是query参数
//         name:"saner"
//     },data:{
//         //配的是请求体参数
//     }
// })
// axios.get('')



import request from './ajax'

//请求三级分类列表数据
export const reqCategoryList = () =>{
    return request({
        url:'/get/product/getBaseCategoryList',
        method:'get'
    })
}

//验证请求是否成功
//这里如果要调用，就必须把模块引入到main中
// reqCategoryList() 
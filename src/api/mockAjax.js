import axios from 'axios'
//引入nprogress相关的js和css
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

//axios.create()创建一个新的和axios具有同样功能的实例
const MockService = axios.create({
    //配置基础路径,设置当前项目中所有接口路径的公共部分
    baseURL:'/mock',
    //配置超时限制，超时后就会报错
    timeout:20000
})

//添加进度条信息功能  nprogress
//以后相对axios添加额外的功能，或者给请求头添加额外的信息，必然用到请求拦截器
//请求拦截器
MockService.interceptors.request.use(
    //请求拦截器成功的回调
    (config) =>{
        //config就是我们的请求报文
        NProgress.start()
        //这个请求报文，最后一定要返回回去，因为还要继续进行下去
        return config
    },
    //请求拦截器当中失败的回调一般不写，因为请求一开始不会失败，除非写错
    () =>{}
)
//响应拦截器
//返回的响应不在需要从data中拿数据，而是响应回来就是我们想要的数据

MockService.interceptors.response.use(
    (response) =>{
        //response其实就是响应报文，也是可以添加额外功能或者对响应报文进行处理
        NProgress.done()
        return response.data
    },
    (error) =>{
        NProgress.done()
        alert('发送请求失败'+error.message || '未知错误')
        //统一处理请求错误，具体请求可以选择处理或不处理
        return Promise.reject(new Error('发送请求失败'))//后面想继续处理这个错误，返回失败的promise
        //也可以不让后面处理
        //返回的是pending状态的promise，中断promise链
        // return new Promise(()=>{})
    }
)

export default MockService
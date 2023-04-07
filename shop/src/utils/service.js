import axios from "axios"
import { ElLoading } from 'element-plus'
import { ElMessage } from 'element-plus'

import cookies from "js-cookie";
let loadingObj = null
const Service = axios.create({
    timeout: 80000,
    baseURL: "http://localhost:8091/",
    headers:{
        "Content-type":"application/json;charset=utf-8",
        // "Authorization":store.state.uInfo.userInfo.token
        "satoken": cookies.get("satoken")
    },
     withCredentials: true,
    changeOrigin: true,             //是否跨域
})
// 请求拦截-增加loading,对请求做统一处理
Service.interceptors.request.use(config=>{
    loadingObj=ElLoading.service({
        lock: true,
        text: 'Loading',
        background: 'rgba(0, 0, 0, 0.7)',
    })
    return config
})
// 响应拦截-对返回值做统一处理
Service.interceptors.response.use(response=>{
    loadingObj.close()
    const data = response.data

    if(data.code!=200 && data.code!=201){
        ElMessage.error(data.msg||"服务器出错")
        // 请求出错
        return data
    }
    return data

},error=>{
    loadingObj.close()
    ElMessage({
        message:"服务器错误",
        type:"error",
        duration:2000
    })
})

// post请求
export const post=config=>{
    return Service({
        ...config,
        method:"post",
        data:config.data
    })
}
// get请求
export const get=config=>{
    return Service({
        ...config,
        method:"get",
        params:config.data
    })
}
// put请求
export const put=config=>{
    return Service({
        ...config,
        method:"put",
        data:config.data
    })
}// delete请求
export const del=config=>{
    return Service({
        ...config,
        method:"delete"
    })
}
